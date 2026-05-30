// =========================================================================
// BẢNG QUY ĐỔI CHI TIẾT TỪNG LOẠI CHỨNG CHỈ NGOẠI NGỮ CỦA TMU
// =========================================================================
const CERTIFICATES_DB = {
    "IELTS": {
        lang: "m-anh",
        levels: {
            "7.0": { score: 10.0, bonus: 1.5, text: "IELTS Academic ≥ 7.0" },
            "6.5": { score: 10.0, bonus: 1.25, text: "IELTS Academic 6.5" },
            "6.0": { score: 10.0, bonus: 1.0, text: "IELTS Academic 6.0" },
            "5.5": { score: 10.0, bonus: 0.75, text: "IELTS Academic 5.5" },
            "5.0": { score: 10.0, bonus: 0.5, text: "IELTS Academic 5.0" }
        }
    },
    "TOEFL_IBT": {
        lang: "m-anh",
        levels: {
            "85": { score: 10.0, bonus: 1.5, text: "TOEFL iBT ≥ 85" },
            "75": { score: 10.0, bonus: 1.25, text: "TOEFL iBT 75 - 84" },
            "65": { score: 10.0, bonus: 1.0, text: "TOEFL iBT 65 - 74" },
            "51": { score: 10.0, bonus: 0.75, text: "TOEFL iBT 51 - 64" },
            "45": { score: 10.0, bonus: 0.5, text: "TOEFL iBT 45 - 50" }
        }
    },
    "VSTEP": {
        lang: "m-anh",
        levels: {
            "8.5": { score: 10.0, bonus: 1.5, text: "VSTEP 8.5 - 10" },
            "8.0": { score: 10.0, bonus: 1.25, text: "VSTEP 8.0" },
            "7.0": { score: 10.0, bonus: 1.0, text: "VSTEP 7.0 - 7.5" },
            "6.0": { score: 10.0, bonus: 0.75, text: "VSTEP 6.0 - 6.5" },
            "5.5": { score: 10.0, bonus: 0.5, text: "VSTEP 5.5" }
        }
    },
    "APTIS_ESOL": {
        lang: "m-anh",
        levels: {
            "180": { score: 10.0, bonus: 1.5, text: "APTIS ESOL 180 - 200" },
            "170": { score: 10.0, bonus: 1.25, text: "APTIS ESOL 170 - 179" },
            "160": { score: 10.0, bonus: 1.0, text: "APTIS ESOL 160 - 169" },
            "150": { score: 10.0, bonus: 0.75, text: "APTIS ESOL 150 - 159" },
            "140": { score: 10.0, bonus: 0.5, text: "APTIS ESOL 140 - 149" }
        }
    },
    "TOEIC": {
        lang: "m-anh",
        levels: {
            "830": { score: 10.0, bonus: 1.5, text: "TOEIC 4 kỹ năng (Nghe Đọc ≥830, Nói Viết ≥320)" },
            "780": { score: 10.0, bonus: 1.25, text: "TOEIC 4 kỹ năng (Nghe Đọc ≥780, Nói Viết ≥300)" },
            "680": { score: 10.0, bonus: 1.0, text: "TOEIC 4 kỹ năng (Nghe Đọc ≥680, Nói Viết ≥280)" },
            "560": { score: 10.0, bonus: 0.75, text: "TOEIC 4 kỹ năng (Nghe Đọc ≥560, Nói Viết ≥260)" },
            "440": { score: 10.0, bonus: 0.5, text: "TOEIC 4 kỹ năng (Nghe Đọc ≥440, Nói Viết ≥240)" }
        }
    },
    "HSK": {
        lang: "m-trung",
        levels: {
            "H6": { score: 10.0, bonus: 1.5, text: "HSK Cấp độ 6 (Từ 180 điểm trở lên)" },
            "H5": { score: 10.0, bonus: 1.25, text: "HSK Cấp độ 5 (Từ 180 điểm trở lên)" },
            "H4": { score: 10.0, bonus: 1.0, text: "HSK Cấp độ 4" },
            "H3": { score: 10.0, bonus: 0.5, text: "HSK Cấp độ 3" }
        }
    },
    "TCF": {
        lang: "m-phap",
        levels: {
            "500": { score: 10.0, bonus: 1.5, text: "TCF ≥ 500" },
            "450": { score: 10.0, bonus: 1.25, text: "TCF 450 - 499" },
            "400": { score: 10.0, bonus: 1.0, text: "TCF 400 - 449" },
            "350": { score: 10.0, bonus: 0.75, text: "TCF 350 - 399" },
            "300": { score: 10.0, bonus: 0.5, text: "TCF 300 - 349" }
        }
    },
    "DELF": {
        lang: "m-phap",
        levels: {
            "C1": { score: 10.0, bonus: 1.5, text: "DELF C1 hoặc C2" },
            "B2": { score: 10.0, bonus: 1.25, text: "DELF B2" },
            "B1": { score: 10.0, bonus: 0.75, text: "DELF B1" }
        }
    }
};

// =========================================================================
// HỆ THỐNG TỔ HỢP MÔN MỞ RỘNG (GỒM CẢ CÁC MÔN NGOẠI NGỮ NHẬT, HÀN, NGA...)
// =========================================================================
const COMBINATIONS_DB = {
    "A00": ["m-toan", "m-ly", "m-hoa"], "A01": ["m-toan", "m-ly", "m-anh"],
    "D01": ["m-toan", "m-van", "m-anh"], "D03": ["m-toan", "m-van", "m-phap"], "D04": ["m-toan", "m-van", "m-trung"],
    "D05": ["m-toan", "m-van", "m-duc"], "D06": ["m-toan", "m-van", "m-nhat"],
    "D07": ["m-toan", "m-hoa", "m-anh"], "D09": ["m-toan", "m-su", "m-anh"], "D10": ["m-toan", "m-dia", "m-anh"],
    "D21": ["m-toan", "m-hoa", "m-duc"], "D22": ["m-toan", "m-hoa", "m-nga"], "D23": ["m-toan", "m-hoa", "m-nhat"],
    "D24": ["m-toan", "m-hoa", "m-phap"], "D25": ["m-toan", "m-hoa", "m-trung"],
    "D26": ["m-toan", "m-khoa-hoc-tu-nhien", "m-duc"], "D27": ["m-toan", "m-khoa-hoc-tu-nhien", "m-nhat"],
    "D28": ["m-toan", "m-khoa-hoc-tu-nhien", "m-phap"], "D29": ["m-toan", "m-khoa-hoc-tu-nhien", "m-trung"],
    "D30": ["m-toan", "m-khoa-hoc-tu-nhien", "m-han"],
    "D78": ["m-van", "m-khoa-hoc-xa-hoi", "m-anh"], "D80": ["m-van", "m-khoa-hoc-xa-hoi", "m-phap"],
    "D81": ["m-van", "m-khoa-hoc-xa-hoi", "m-duc"], "D82": ["m-van", "m-khoa-hoc-xa-hoi", "m-trung"],
    "D83": ["m-van", "m-khoa-hoc-xa-hoi", "m-nhat"],
    "D90": ["m-toan", "m-khoa-hoc-tu-nhien", "m-anh"], "D96": ["m-toan", "m-khoa-hoc-xa-hoi", "m-anh"],
    "X25": ["m-toan", "m-anh", "m-gdktdpl"], "X26": ["m-toan", "m-anh", "m-tin"],
    "X27": ["m-toan", "m-anh", "m-cncn"], "X28": ["m-toan", "m-anh", "m-cnnn"]
};

// Map môn ngoại ngữ tương ứng của tổ hợp để xử lý thay thế điểm quy đổi
const CONFIG_LANGUAGE_SUBJECTS = {
    "A01": "m-anh", "D01": "m-anh", "D03": "m-phap", "D04": "m-trung", "D05": "m-duc", "D06": "m-nhat",
    "D07": "m-anh", "D09": "m-anh", "D10": "m-anh", "D21": "m-duc", "D22": "m-nga", "D23": "m-nhat",
    "D24": "m-phap", "D25": "m-trung", "D26": "m-duc", "D27": "m-nhat", "D28": "m-phap", "D29": "m-trung",
    "D30": "m-han", "D78": "m-anh", "D80": "m-phap", "D81": "m-duc", "D82": "m-trung", "D83": "m-nhat",
    "D90": "m-anh", "D96": "m-anh", "X25": "m-anh", "X26": "m-anh", "X27": "m-anh", "X28": "m-anh"
};

// =========================================================================
// CƠ SỞ DỮ LIỆU TUYỂN SINH TMU 2026
// =========================================================================
const UNIVERSITY_DATABASE = {
    "TMU": {
        name: "Trường Đại học Thương Mại",
        industries: {
            "TM01": { name: "Quản trị kinh doanh (Quản trị kinh doanh)", combs: ["A00", "A01", "D01", "D07"], scores: { thpt: 25.8, hsa: 105.333, combined: 25.8 } },
            "TM02": { name: "Quản trị kinh doanh (Chương trình IPOP)", combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"], scores: { thpt: 25.4, hsa: 102.667, combined: 25.4 }, minEnglish: 6.0 },
            "TM03": { name: "Quản trị kinh doanh (Khởi nghiệp và phát triển kinh doanh)", combs: ["A00", "A01", "D01", "D07"], scores: { thpt: 25.1, hsa: 100.667, combined: 25.1 } },
            "TM04": { name: "Quản trị khách sạn", combs: ["A00", "A01", "D01", "D07"], scores: { thpt: 25.4, hsa: 102.667, combined: 25.4 } },
            "TM05": { name: "Quản trị khách sạn (Chương trình IPOP)", combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"], scores: { thpt: 25.1, hsa: 100.667, combined: 25.1 }, minEnglish: 6.0 },
            "TM06": { name: "Quản trị dịch vụ du lịch và lữ hành", combs: ["A00", "A01", "D01", "D07"], scores: { thpt: 24.8, hsa: 99.12, combined: 24.8 } },
            "TM07": { name: "Marketing (Marketing Thương mại)", combs: ["A00", "A01", "D01", "D07"], scores: { thpt: 27.3, hsa: 115.333, combined: 27.3 } },
            "TM08": { name: "Marketing (Chương trình IPOP)", combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"], scores: { thpt: 26.3, hsa: 108.667, combined: 26.3 }, minEnglish: 6.0 },
            "TM09": { name: "Marketing (Marketing số)", combs: ["A00", "A01", "D01", "D07"], scores: { thpt: 27.5, hsa: 116.667, combined: 27.5 } },
            "TM10": { name: "Marketing (Quản trị Thương hiệu)", combs: ["A00", "A01", "D01", "D07"], scores: { thpt: 26.8, hsa: 112.0, combined: 26.8 } },
            "TM11": { name: "Marketing (Quản trị thương hiệu - Chương trình IPOP)", combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"], scores: { thpt: 26.1, hsa: 107.333, combined: 26.1 }, minEnglish: 6.0 },
            "TM12": { name: "Kế toán (Kế toán doanh nghiệp)", combs: ["A00", "A01", "D01", "D07"], scores: { thpt: 25.8, hsa: 105.333, combined: 25.8 } },
            "TM13": { name: "Kế toán (Chương trình IPOP)", combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"], scores: { thpt: 24.0, hsa: 95.6, combined: 24.0 }, minEnglish: 6.0 },
            "TM14": { name: "Kế toán (Kế toán công)", combs: ["A00", "A01", "D01", "D07"], scores: { thpt: 24.8, hsa: 99.12, combined: 24.8 } },
            "TM15": { name: "Kiểm toán (Kiểm toán)", combs: ["A00", "A01", "D01", "D07"], scores: { thpt: 25.7, hsa: 104.667, combined: 25.72 } },
            "TM16": { name: "Kiểm toán (Chương trình IPOP)", combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"], scores: { thpt: 24.0, hsa: 95.6, combined: 24.0 }, minEnglish: 6.0 },
            "TM17": { name: "Logistics và Quản lý chuỗi cung ứng", combs: ["A00", "A01", "D01", "D07"], scores: { thpt: 27.8, hsa: 118.667, combined: 27.8 } },
            "TM18": { name: "Logistics và Xuất nhập khẩu (Chương trình IPOP)", combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"], scores: { thpt: 26.6, hsa: 110.667, combined: 26.6 }, minEnglish: 6.0 },
            "TM19": { name: "Kinh doanh quốc tế (Thương mại quốc tế)", combs: ["A00", "A01", "D01", "D07"], scores: { thpt: 26.8, hsa: 112.0, combined: 26.8 } },
            "TM20": { name: "Kinh doanh quốc tế (Chương trình IPOP)", combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"], scores: { thpt: 26.3, hsa: 108.667, combined: 26.3 }, minEnglish: 6.0 },
            "TM21": { name: "Kinh tế quốc tế", combs: ["A00", "A01", "D01", "D07"], scores: { thpt: 26.6, hsa: 110.667, combined: 26.6 } },
            "TM22": { name: "Kinh tế (Quản lý kinh tế)", combs: ["A00", "A01", "D01", "D07"], scores: { thpt: 25.1, hsa: 100.667, combined: 25.1 } },
            "TM23": { name: "Kinh tế và Quản lý đầu tư (Chương trình IPOP)", combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"], scores: { thpt: 24.7, hsa: 98.68, combined: 24.7 }, minEnglish: 6.0 },
            "TM24": { name: "Tài chính - Ngân hàng (Tài chính - Ngân hàng thương mại)", combs: ["A00", "A01", "D01", "D07"], scores: { thpt: 26.1, hsa: 107.333, combined: 26.1 } },
            "TM25": { name: "Tài chính - Ngân hàng (Chương trình IPOP)", combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"], scores: { thpt: 25.4, hsa: 102.667, combined: 25.4 }, minEnglish: 6.0 },
            "TM26": { name: "Tài chính - Ngân hàng (Tài chính công)", combs: ["A00", "A01", "D01", "D07"], scores: { thpt: 25.2, hsa: 101.333, combined: 25.2 } },
            "TM27": { name: "Tài chính - Ngân hàng (Công nghệ tài chính ngân hàng)", combs: ["A00", "A01", "D01", "D07"], scores: { thpt: 25.0, hsa: 100.0, combined: 25.0 } },
            "TM28": { name: "Thương mại điện tử (Quản trị thương mại điện tử)", combs: ["A00", "A01", "D01", "D07"], scores: { thpt: 27.6, hsa: 117.333, combined: 27.6 } },
            "TM29": { name: "Thương mại điện tử (Chương trình IPOP)", combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"], scores: { thpt: 26.5, hsa: 110.0, combined: 26.5 }, minEnglish: 6.0 },
            "TM30": { name: "Thương mại điện tử (Kinh doanh số)", combs: ["A00", "A01", "D01", "D07"], scores: { thpt: 27.2, hsa: 114.667, combined: 27.2 } },
            "TM31": { name: "Hệ thống thông tin quản lý (Quản trị Hệ thống thông tin)", combs: ["A00", "A01", "D01", "D07"], scores: { thpt: 24.8, hsa: 99.12, combined: 24.8 } },
            "TM32": { name: "Hệ thống thông tin quản lý (Chương trình IPOP)", combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"], scores: { thpt: 24.2, hsa: 96.48, combined: 24.2 }, minEnglish: 6.0 },
            "TM33": { name: "Ngôn ngữ Anh (Tiếng Anh thương mại)", combs: ["A01", "D01", "D07"], scores: { thpt: 26.1, hsa: null, combined: 26.1 }, minEnglish: 7.0 },
            "TM34": { name: "Luật kinh tế (Luật kinh tế)", combs: ["A00", "A01", "D01", "D07"], scores: { thpt: 25.4, hsa: null, combined: 25.4 } },
            "TM35": { name: "Luật kinh tế (Luật kinh doanh - Chương trình IPOP)", combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"], scores: { thpt: 24.7, hsa: null, combined: 24.7 }, minEnglish: 6.0 },
            "TM36": { name: "Luật kinh tế (Luật thương mại quốc tế)", combs: ["A00", "A01", "D01", "D07"], scores: { thpt: 25.1, hsa: null, combined: 25.1 } },
            "TM37": { name: "Quản trị nhân lực (Quản trị nhân lực doanh nghiệp)", combs: ["A00", "A01", "D01", "D07"], scores: { thpt: 25.6, hsa: 104.0, combined: 25.6 } },
            "TM38": { name: "Quản trị nhân lực (Chương trình IPOP)", combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"], scores: { thpt: 24.8, hsa: 99.12, combined: 24.8 }, minEnglish: 6.0 },
            "TM39": { name: "Kinh tế số (Phân tích kinh doanh trong môi trường số)", combs: ["A00", "A01", "D01", "D07"], scores: { thpt: 25.1, hsa: 100.667, combined: 25.1 } },
            
            // CÁC NGÀNH NGÔN NGỮ ĐẶC THÙ CHẤP NHẬN TIẾNG TRUNG / TIẾNG PHÁP
            "TM40": { name: "Ngôn ngữ Trung Quốc (Tiếng Trung thương mại)", combs: ["A01", "D01", "D04", "D07", "D25", "D29", "D82"], scores: { thpt: 27.4, hsa: null, combined: 27.4 } },
            "TM41": { name: "Ngôn ngữ Trung Quốc (Tiếng Trung thương mại - Chương trình IPOP)", combs: ["D04", "D25", "D29", "D82"], scores: { thpt: 26.8, hsa: null, combined: 26.8 }, minChinese: 8.0 },
            "TM42": { name: "Quản trị kinh doanh (Tiếng Pháp thương mại)", combs: ["A00", "A01", "D01", "D03", "D07", "D24", "D28", "D80"], scores: { thpt: 22.5, hsa: 89.0, combined: 22.5 } },
            
            "TM43": { name: "Quản trị kinh doanh (Song bằng quốc tế)", combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"], scores: { thpt: 22.5, hsa: 89.0, combined: 22.5 } },
            "TM44": { name: "Marketing (Song bằng quốc tế)", combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"], scores: { thpt: 24.8, hsa: 99.12, combined: 24.8 } },
            
            // NGÀNH MỚI 2026
            "TM45": { name: "[MỚI 2026] Quản trị kinh doanh (Chương trình tiên tiến)", combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"], scores: { thpt: null, hsa: null, combined: null }, isNew2026: true },
            "TM46": { name: "[MỚI 2026] Logistics và quản lý chuỗi cung ứng (Song bằng quốc tế)", combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"], scores: { thpt: null, hsa: null, combined: null }, isNew2026: true },
            "TM47": { name: "[MỚI 2026] Kế toán (Song bằng quốc tế)", combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"], scores: { thpt: null, hsa: null, combined: null }, isNew2026: true },
            "TM48": { name: "[MỚI 2026] Logistics và Quản lý chuỗi cung ứng (Chương trình IPOP)", combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"], scores: { thpt: null, hsa: null, combined: null }, minEnglish: 6.0, isNew2026: true },
            "TM49": { name: "[MỚI 2026] Kinh tế số (Chương trình IPOP)", combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"], scores: { thpt: null, hsa: null, combined: null }, minEnglish: 6.0, isNew2026: true },
            "TM50": { name: "[MỚI 2026] Quản trị dịch vụ du lịch và lữ hành (Chương trình IPOP)", combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"], scores: { thpt: null, hsa: null, combined: null }, minEnglish: 6.0, isNew2026: true },
            "TM51": { name: "[MỚI 2026] Khoa học máy tính (Ứng dụng AI)", combs: ["A00", "A01", "D01", "D07"], scores: { thpt: null, hsa: null, combined: null }, isNew2026: true }
        }
    }
};
