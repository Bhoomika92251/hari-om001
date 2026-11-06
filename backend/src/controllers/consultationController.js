import { db } from '../models/db.js';

export function createConsultation(req, res, next) {
  try {
    const {
      fullName,
      email,
      phone,
      projectTypology,
      budgetRange,
      timeline,
      vision,
    } = req.body;

    const newInquiry = db.insert('consultations', {
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : '',
      projectTypology: projectTypology.trim(),
      budgetRange: budgetRange || 'Undisclosed',
      timeline: timeline || 'Planning Phase',
      vision: vision ? vision.trim() : '',
      status: 'PENDING', // PENDING, CONTACTED, ARCHIVED
    });

    res.status(201).json({
      success: true,
      message: 'Consultation request received successfully',
      data: newInquiry,
    });
  } catch (err) {
    next(err);
  }
}

export function getConsultations(req, res, next) {
  try {
    const { status, typology } = req.query;
    let list = db.getCollection('consultations');

    if (status) {
      list = list.filter((item) => item.status?.toUpperCase() === status.toUpperCase());
    }

    if (typology) {
      list = list.filter((item) => item.projectTypology?.toLowerCase().includes(typology.toLowerCase()));
    }

    res.json({
      success: true,
      count: list.length,
      data: list,
    });
  } catch (err) {
    next(err);
  }
}

export function getConsultationById(req, res, next) {
  try {
    const { id } = req.params;
    const inquiry = db.findById('consultations', id);

    if (!inquiry) {
      return res.status(404).json({
        success: false,
        error: {
          message: `Consultation with ID '${id}' not found`,
          code: 'NOT_FOUND',
        },
      });
    }

    res.json({
      success: true,
      data: inquiry,
    });
  } catch (err) {
    next(err);
  }
}

export function updateConsultationStatus(req, res, next) {
  try {
    const { id } = req.params;
    const { status, notes } = req.body;

    const allowed = ['PENDING', 'CONTACTED', 'IN_REVIEW', 'ARCHIVED'];
    if (status && !allowed.includes(status.toUpperCase())) {
      return res.status(400).json({
        success: false,
        error: {
          message: `Status must be one of: ${allowed.join(', ')}`,
          code: 'INVALID_STATUS',
        },
      });
    }

    const updated = db.update('consultations', id, {
      ...(status && { status: status.toUpperCase() }),
      ...(notes !== undefined && { notes }),
    });

    if (!updated) {
      return res.status(404).json({
        success: false,
        error: {
          message: `Consultation with ID '${id}' not found`,
          code: 'NOT_FOUND',
        },
      });
    }

    res.json({
      success: true,
      message: 'Consultation status updated',
      data: updated,
    });
  } catch (err) {
    next(err);
  }
}

export function getConsultationStats(req, res, next) {
  try {
    const all = db.getCollection('consultations');
    const stats = {
      total: all.length,
      pending: all.filter((i) => i.status === 'PENDING').length,
      contacted: all.filter((i) => i.status === 'CONTACTED').length,
      inReview: all.filter((i) => i.status === 'IN_REVIEW').length,
      archived: all.filter((i) => i.status === 'ARCHIVED').length,
    };

    res.json({
      success: true,
      data: stats,
    });
  } catch (err) {
    next(err);
  }
}

