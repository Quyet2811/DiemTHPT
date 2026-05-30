// =========================================================================
// BẢNG QUY ĐỔI CHỨNG CHỈ NGOẠI NGỮ RIÊNG CỦA HUS (ĐHQGHN)
// =========================================================================
UNIVERSITY_CERTIFICATES["HUS"] = {
    "IELTS": {
        lang: "m-anh",
        levels: {
            "7.0": { score: 10.0, bonus: 0, text: "IELTS Academic ≥ 7.0 (HUS Quy đổi sang 10.0 điểm môn Tiếng Anh)" },
            "6.5": { score: 9.5, bonus: 0, text: "IELTS Academic 6.5 (HUS Quy đổi sang 9.5 điểm môn Tiếng Anh)" },
            "6.0": { score: 9.0, bonus: 0, text: "IELTS Academic 6.0 (HUS Quy đổi sang 9.0 điểm môn Tiếng Anh)" },
            "5.5": { score: 8.5, bonus: 0, text: "IELTS Academic 5.5 (HUS Quy đổi sang 8.5 điểm môn Tiếng Anh)" },
            "5.0": { score: 8.0, bonus: 0, text: "IELTS Academic 5.0 (HUS Quy đổi sang 8.0 điểm môn Tiếng Anh)" }
        }
    },
    "TOEFL_IBT": {
        lang: "m-anh",
        levels: {
            "96": { score: 10.0, bonus: 0, text: "TOEFL iBT 96 - 120 (HUS Quy đổi sang 10.0 điểm)" },
            "88": { score: 9.5, bonus: 0, text: "TOEFL iBT 88 - 95 (HUS Quy đổi sang 9.5 điểm)" },
            "79": { score: 9.0, bonus: 0, text: "TOEFL iBT 79 - 87 (HUS Quy đổi sang 9.0 điểm)" },
            "72": { score: 8.5, bonus: 0, text: "TOEFL iBT 72 - 78 (HUS Quy đổi sang 8.5 điểm)" },
            "55": { score: 8.0, bonus: 0, text: "TOEFL iBT 55 - 71 (HUS Quy đổi sang 8.0 điểm)" },
            "50": { score: 7.5, bonus: 0, text: "TOEFL iBT 50 - 54 (HUS Quy đổi sang 7.5 điểm)" },
            "45": { score: 7.0, bonus: 0, text: "TOEFL iBT 45 - 49 (HUS Quy đổi sang 7.0 điểm)" }
        }
    }
    // HUS chủ yếu xét mạnh IELTS/TOEFL, các chứng chỉ khác nếu cần bạn có thể tự thêm sau cực kỳ dễ dàng
};

// =========================================================================
// DANH SÁCH CÁC NGÀNH XỂT TUYỂN CỦA ĐẠI HỌC KHOA HỌC TỰ NHIÊN (HUS)
// =========================================================================
UNIVERSITY_DATABASE["HUS"] = {
    name: "Trường Đại học Khoa học Tự nhiên - ĐHQGHN",
    industries: {
        // Cấu hình mathWeight: 2 nghĩa là ngành đó môn Toán nhân hệ số 2
        "QHT01": { name: "Toán học", combs: ["A00", "A01", "C01", "D07", "D08", "X26"], scores: { thpt: 25.9, hsa: 20.0, combined: 25.9 }, mathWeight: 2 },
        "QHT02": { name: "Toán tin", combs: ["A00", "A01", "C01", "D07", "D08", "X26"], scores: { thpt: 25.5, hsa: 21.5, combined: 25.5 }, mathWeight: 2 },
        "QHT03": { name: "Máy tính và khoa học thông tin", combs: ["A00", "A01", "D07", "X26"], scores: { thpt: 26.85, hsa: 23.5, combined: 26.85 }, mathWeight: 2 },
        "QHT04": { name: "Khoa học dữ liệu", combs: ["A00", "A01", "D07", "X26"], scores: { thpt: 26.0, hsa: 22.0, combined: 26.0 }, mathWeight: 2 },
        "QHT05": { name: "Vật lý học", combs: ["A00", "A01", "C01", "D07"], scores: { thpt: 21.0, hsa: 17.0, combined: 21.0 } },
        "QHT06": { name: "Khoa học vật liệu", combs: ["A00", "A01", "D07", "D08"], scores: { thpt: 20.0, hsa: 16.5, combined: 20.0 } },
        "QHT07": { name: "Công nghệ kỹ thuật hạt nhân", combs: ["A00", "A01", "D07"], scores: { thpt: 20.5, hsa: 16.5, combined: 20.5 } },
        "QHT08": { name: "Kỹ thuật điện tử và tin học", combs: ["A00", "A01", "D07", "X26"], scores: { thpt: 24.5, hsa: 20.0, combined: 24.5 }, mathWeight: 2 },
        "QHT09": { name: "Hóa học", combs: ["A00", "B00", "C02", "D07"], scores: { thpt: 22.0, hsa: 17.5, combined: 22.0 } },
        "QHT10": { name: "Công nghệ kỹ thuật hóa học", combs: ["A00", "B00", "D07"], scores: { thpt: 23.5, hsa: 19.0, combined: 23.5 } },
        "QHT11": { name: "Hóa dược", combs: ["A00", "B00", "D07"], scores: { thpt: 24.5, hsa: 20.5, combined: 24.5 } },
        "QHT12": { name: "Sinh học", combs: ["A02", "B00", "B08", "D08"], scores: { thpt: 20.5, hsa: 16.5, combined: 20.5 } },
        "QHT13": { name: "Công nghệ sinh học", combs: ["A02", "B00", "B08", "D08"], scores: { thpt: 23.0, hsa: 18.5, combined: 23.0 } },
        "QHT14": { name: "Khoa học môi trường", combs: ["A00", "B00", "C02", "D07"], scores: { thpt: 20.0, hsa: 16.0, combined: 20.0 } },
        "QHT15": { name: "Công nghệ kỹ thuật môi trường", combs: ["A00", "B00", "D07"], scores: { thpt: 20.0, hsa: 16.0, combined: 20.0 } },
        "QHT16": { name: "Khí tượng và khí hậu học", combs: ["A00", "A01", "B00", "D07"], scores: { thpt: 20.0, hsa: 16.0, combined: 20.0 } },
        "QHT17": { name: "Thủy văn học", combs: ["A00", "A01", "B00", "D07"], scores: { thpt: 20.0, hsa: 16.0, combined: 20.0 } },
        "QHT18": { name: "Hải dương học", combs: ["A00", "A01", "B00", "D07"], scores: { thpt: 20.0, hsa: 16.0, combined: 20.0 } },
        "QHT19": { name: "Địa lý tự nhiên", combs: ["A00", "A01", "B00", "D07"], scores: { thpt: 20.0, hsa: 16.0, combined: 20.0 } },
        "QHT20": { name: "Quản lý đất đai", combs: ["A00", "A01", "B00", "D07"], scores: { thpt: 22.5, hsa: 18.0, combined: 22.5 } },
        "QHT21": { name: "Địa chất học", combs: ["A00", "A01", "B00", "D07"], scores: { thpt: 20.0, hsa: 16.0, combined: 20.0 } },
        "QHT22": { name: "Quản lý tài nguyên và môi trường", combs: ["A00", "A01", "B00", "D07"], scores: { thpt: 21.0, hsa: 16.5, combined: 21.0 } }
    },

    // =========================================================================
    // CẤU HÌNH QUY ĐỔI ĐIỂM ĐÁNH GIÁ NĂNG LỰC (HSA) VỀ THANG 30 CỦA HUS
    // =========================================================================
    hsaConfig: {
        type: "scale30",
        status: "updating", // Hệ thống chính sẽ đọc dòng này để biết là chưa có barem chính thức
        calculate: function(rawHsaScore, bonusUt = 0, bonusKk = 0) {
            return null; // Trả về null để giao diện báo trạng thái chờ cập nhật
        },
        text: "Phương thức xét tuyển HSA của HUS đang được cập nhật..."
    }
}; // Dấu đóng kết thúc toàn bộ UNIVERSITY_DATABASE["HUS"]
