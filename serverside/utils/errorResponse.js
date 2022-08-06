// error response
exports.errorResponse = (res, status_code, message) => {
    return res.status(status_code).json({
        status: 'error',
        message: message
    })
}