import app from './src/app.js';

async function runTests() {
  console.log('🧪 Starting API Verification Test Suite...\n');
  
  const server = app.listen(5099);
  const baseUrl = 'http://localhost:5099/api';

  try {
    // 1. Health check
    console.log('1. Testing GET /api/health...');
    const healthRes = await fetch(`${baseUrl}/health`);
    const healthData = await healthRes.json();
    console.log('   Status:', healthRes.status, 'Response:', healthData);
    if (healthRes.status !== 200 || healthData.status !== 'UP') {
      throw new Error('Health check failed');
    }

    // 2. Designs list
    console.log('\n2. Testing GET /api/designs...');
    const designsRes = await fetch(`${baseUrl}/designs`);
    const designsData = await designsRes.json();
    console.log(`   Status: ${designsRes.status}, Found: ${designsData.count} designs`);
    if (designsData.count < 6) throw new Error('Expected at least 6 designs');

    // 3. Single design
    console.log('\n3. Testing GET /api/designs/cantilever-house...');
    const singleDesignRes = await fetch(`${baseUrl}/designs/cantilever-house`);
    const singleDesign = await singleDesignRes.json();
    console.log(`   Status: ${singleDesignRes.status}, Title: "${singleDesign.data.title}"`);
    if (!singleDesign.data.blueprint) throw new Error('Missing blueprint in design');

    // 4. Interiors
    console.log('\n4. Testing GET /api/interiors...');
    const interiorsRes = await fetch(`${baseUrl}/interiors`);
    const interiorsData = await interiorsRes.json();
    console.log(`   Status: ${interiorsRes.status}, Chambers: ${interiorsData.count}`);

    // 5. Exteriors
    console.log('\n5. Testing GET /api/exteriors...');
    const exteriorsRes = await fetch(`${baseUrl}/exteriors`);
    const exteriorsData = await exteriorsRes.json();
    console.log(`   Status: ${exteriorsRes.status}, Elements: ${exteriorsData.count}`);

    // 6. Gallery
    console.log('\n6. Testing GET /api/gallery...');
    const galleryRes = await fetch(`${baseUrl}/gallery`);
    const galleryData = await galleryRes.json();
    console.log(`   Status: ${galleryRes.status}, Items: ${galleryData.count}`);

    // 7. Studio
    console.log('\n7. Testing GET /api/studio...');
    const studioRes = await fetch(`${baseUrl}/studio`);
    const studioData = await studioRes.json();
    console.log(`   Status: ${studioRes.status}, Principal: "${studioData.data.principal?.name}"`);

    // 8. Submit Consultation Inquiry
    console.log('\n8. Testing POST /api/consultations...');
    const testConsultation = {
      fullName: 'Marcus Aurelius Vance',
      email: 'marcus@atelier-test.com',
      phone: '+1 (555) 987-6543',
      projectTypology: 'Custom Ground-Up Residence',
      budgetRange: '$3M–$5M',
      timeline: '3–6 Months',
      vision: 'Hillside modernist villa with cantilevers overlooking Pacific Ocean.',
    };

    const consultRes = await fetch(`${baseUrl}/consultations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testConsultation),
    });
    const consultResult = await consultRes.json();
    console.log(`   Status: ${consultRes.status}, Success: ${consultResult.success}, ID: ${consultResult.data?.id}`);
    if (consultRes.status !== 201) throw new Error('Consultation creation failed');

    // 9. Newsletter Subscription
    console.log('\n9. Testing POST /api/newsletter/subscribe...');
    const newsRes = await fetch(`${baseUrl}/newsletter/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'client-test@luxurydomain.com' }),
    });
    const newsResult = await newsRes.json();
    console.log(`   Status: ${newsRes.status}, Message: "${newsResult.message}"`);
    if (newsRes.status !== 201 && newsRes.status !== 200) throw new Error('Newsletter subscription failed');

    // 10. Consultation Stats
    console.log('\n10. Testing GET /api/consultations/stats...');
    const statsRes = await fetch(`${baseUrl}/consultations/stats`);
    const statsData = await statsRes.json();
    console.log('   Status:', statsRes.status, 'Stats:', statsData.data);

    console.log('\n✅ ALL 10 BACKEND REST API TESTS PASSED SUCCESSFULLY!\n');
  } catch (err) {
    console.error('\n❌ Test failed:', err);
    process.exitCode = 1;
  } finally {
    server.close();
  }
}

runTests();

