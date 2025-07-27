//───────────────────────────────────────────────────────────────────
/*  Project        : To-Do App
/*  FileName       : errorHandler.js
/*  Goal           : Global error handler for the To-Do App
/*  Author         : Ali Eren Küçük
/*  Project Owners : Ali Eren Küçük & Mehmet Avni Arslan
/*  Date           : 24.07.2025
/*  V              : 0.0.1
//───────────────────────────────────────────────────────────────────*/

export const errorHandler = (err, req, res, next) => {
  // Status kodunu ayarla (yoksa 500 Internal Server Error)
  const statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);

  res.json({
    message: err.message,
    // Geliştirme ortamında detaylı yığın izlemesi
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};
