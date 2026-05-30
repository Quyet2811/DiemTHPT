// =========================================================================
// BẢNG QUY ĐỔI ĐẦY ĐỦ 8 LOẠI CHỨNG CHỈ NGOẠI NGỮ CỦA TMU (THANG 30 ĐIỂM)
// =========================================================================
const TMU_CERT_RULES = {
    "Mức 1": { score: 10.0, bonus: 1.5, desc: "Mức 1 (IELTS ≥7.0, TOEFL ≥85, VSTEP 8.5-10, APTIS 180-200, TOEIC ≥830+320, HSK6 ≥180, TCF ≥500, DELF C1/C2)" },
    "Mức 2": { score: 10.0, bonus: 1.25, desc: "Mức 2 (IELTS 6.5, TOEFL 75-84, VSTEP 8.0, APTIS 170-179, TOEIC 780+300, HSK5 ≥180, TCF 450-499, DELF B2)" },
    "Mức 3": { score: 10.0, bonus: 1.0, desc: "Mức 3 (IELTS 6.0, TOEFL 65-74, VSTEP 7.0-7.5, APTIS 160-169, TOEIC 680+280, HSK4, TCF 400-449)" },
    "Mức 4": { score: 10.0, bonus: 0.75, desc: "Mức 4 (IELTS 5.5, TOEFL 51-64, VSTEP 6.0-6.5, APTIS 150-159, TOEIC 560+260, TCF 350-399, DELF B1)" },
    "Mức 5": { score: 10.0, bonus: 0.5, desc: "Mức 5 (IELTS 5.0, TOEFL 45-50, VSTEP 5.5, APTIS 140-149, TOEIC 440+240, HSK3, TCF 300-349)" }
};

// =========================================================================
// HỆ THỐNG TỔ HỢP MÔN XÈT TUYỂN
// =========================================================================
const COMBINATIONS_DB = {
    "A00": ["m-toan", "m-ly", "m-hoa"],
    "A01": ["m-toan", "m-ly", "m-anh"],
    "D01": ["m-toan", "m-van", "m-anh"],
    "D03": ["m-toan", "m-van", "m-phap"],
    "D04": ["m-toan", "m-van", "m-trung"],
    "D07": ["m-toan", "m-hoa", "m-anh"],
    "D09": ["m-toan", "m-su", "m-anh"],
    "D10": ["m-toan", "m-dia", "m-anh"],
    "X25": ["m-toan", "m-anh", "m-gdktdpl"],
    "X26": ["m-toan", "m-anh", "m-tin"],
    "X27": ["m-toan", "m-anh", "m-cncn"],
    "X28": ["m-toan", "m-anh", "m-cnnn"]
};

// Xác định môn ngoại ngữ của từng tổ hợp để áp dụng quy đổi cho đúng ngành
const CONFIG_LANGUAGE_SUBJECTS = {
    "A01": "m-anh", "D01": "m-anh", "D03": "m-phap", "D04": "m-trung",
    "D07": "m-anh", "D09": "m-anh", "D10": "m-anh", 
    "X25": "m-anh", "X26": "m-anh", "X27": "m-anh", "X28": "m-anh"
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
            "TM40": { name: "Ngôn ngữ Trung Quốc (Tiếng Trung thương mại)", combs: ["A01", "D01", "D04", "D07"], scores: { thpt: 27.4, hsa: null, combined: 27.4 } },
            "TM41": { name: "Ngôn ngữ Trung Quốc (Tiếng Trung thương mại - Chương trình IPOP)", combs: ["D04"], scores: { thpt: 26.8, hsa: null, combined: 26.8 }, minChinese: 8.0 },
            "TM42": { name: "Quản trị kinh doanh (Tiếng Pháp thương mại)", combs: ["A00", "A01", "D01", "D03", "D07"], scores: { thpt: 22.5, hsa: 89.0, combined: 22.5 } },
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
