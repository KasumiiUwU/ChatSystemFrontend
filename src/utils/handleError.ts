
interface ApiError {
  response?: {
    status: number;
    data: {
      message?: string;
      error?: string;
    };
  };
}

export const handleApiError = (error: ApiError): string => {
  if (!error.response) {
    return "Không thể kết nối đến máy chủ. Vui lòng thử lại sau.";
  }

  const { status, data } = error.response;

  // Handle specific status codes
  switch (status) {
    case 400:
      return data.message || "Yêu cầu không hợp lệ.";
    case 401:
      return "Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.";
    case 403:
      return "Bạn không có quyền thực hiện hành động này.";
    case 404:
      return "Không tìm thấy tài nguyên.";
    case 409:
      return "Dữ liệu đã tồn tại.";
    case 422:
      return data.message || "Dữ liệu không hợp lệ.";
    case 429:
      return "Quá nhiều yêu cầu. Vui lòng thử lại sau.";
    case 500:
      return "Lỗi máy chủ. Vui lòng thử lại sau.";
    default:
      return data.message || "Đã xảy ra lỗi. Vui lòng thử lại sau.";
  }
};
