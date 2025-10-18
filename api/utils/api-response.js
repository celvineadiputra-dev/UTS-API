const ApiResponse = (code, message, data = null) => {
    return {
        meta : {
            code,
            message
        },
        data : data
    }
}

export default ApiResponse