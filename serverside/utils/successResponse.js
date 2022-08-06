// success response 
exports.successResponse = (res, status_code, data, message) => {
    return res.status(status_code).json({
        status: 'success',
        message: message,
        data: data  
    })
}