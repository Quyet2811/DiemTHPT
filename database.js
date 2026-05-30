// =========================================================================
// KHO DỮ LIỆU CHỨNG CHỈ NGOẠI NGỮ & ĐIỂM QUY ĐỔI CỦA TMU
// =========================================================================
const TMU_IELTS_MAP = {
    "7.0": { score: 10.0, bonus: 1.5 },
    "6.5": { score: 10.0, bonus: 1.25 },
    "6.0": { score: 10.0, bonus: 1.0 },
    "5.5": { score: 10.0, bonus: 0.75 },
    "5.0": { score: 10.0, bonus: 0.5 }
};

// =========================================================================
// CƠ SỞ DỮ LIỆU TỔ HỢP ĐẦY ĐỦ CỦA HỆ THỐNG
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

// =========================================================================
// CƠ SỞ DỮ LIỆU TUYỂN SINH TOÀN DIỆN
// =========================================================================
const UNIVERSITY_DATABASE = {
    "TMU": {
        name: "Trường Đại học Thương Mại",
        industries: {
            "TM01": { 
                name: "Quản trị kinh doanh (Quản trị kinh doanh)", 
                combs: ["A00", "A01", "D01", "D07"],
                scores: { thpt: 25.8, hsa: 105.333, combined: 25.8 }
            },
            "TM02": { 
                name: "Quản trị kinh doanh (Chương trình nghề nghiệp quốc tế - IPOP)", 
                combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"],
                scores: { thpt: 25.4, hsa: 102.667, combined: 25.4 },
                minEnglish: 6.0
            },
            "TM03": { 
                name: "Quản trị kinh doanh (Khởi nghiệp và phát triển kinh doanh)", 
                combs: ["A00", "A01", "D01", "D07"],
                scores: { thpt: 25.1, hsa: 100.667, combined: 25.1 }
            },
            "TM04": { 
                name: "Quản trị khách sạn", 
                combs: ["A00", "A01", "D01", "D07"],
                scores: { thpt: 25.4, hsa: 102.667, combined: 25.4 }
            },
            "TM05": { 
                name: "Quản trị khách sạn (Chương trình nghề nghiệp quốc tế - IPOP)", 
                combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"],
                scores: { thpt: 25.1, hsa: 100.667, combined: 25.1 },
                minEnglish: 6.0
            },
            "TM06": { 
                name: "Quản trị dịch vụ du lịch và lữ hành", 
                combs: ["A00", "A01", "D01", "D07"],
                scores: { thpt: 24.8, hsa: 99.12, combined: 24.8 }
            },
            "TM07": { 
                name: "Marketing (Marketing Thương mại)", 
                combs: ["A00", "A01", "D01", "D07"],
                scores: { thpt: 27.3, hsa: 115.333, combined: 27.3 }
            },
            "TM08": { 
                name: "Marketing (Marketing thương mại - Chương trình nghề nghiệp quốc tế - IPOP)", 
                combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"],
                scores: { thpt: 26.3, hsa: 108.667, combined: 26.3 },
                minEnglish: 6.0
            },
            "TM09": { 
                name: "Marketing (Marketing số)", 
                combs: ["A00", "A01", "D01", "D07"],
                scores: { thpt: 27.5, hsa: 116.667, combined: 27.5 }
            },
            "TM10": { 
                name: "Marketing (Quản trị Thương hiệu)", 
                combs: ["A00", "A01", "D01", "D07"],
                scores: { thpt: 26.8, hsa: 112.0, combined: 26.8 }
            },
            "TM11": { 
                name: "Marketing (Quản trị thương hiệu - Chương trình nghề nghiệp quốc tế - IPOP)", 
                combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"],
                scores: { thpt: 26.1, hsa: 107.333, combined: 26.1 },
                minEnglish: 6.0
            },
            "TM12": { 
                name: "Kế toán (Kế toán doanh nghiệp)", 
                combs: ["A00", "A01", "D01", "D07"],
                scores: { thpt: 25.8, hsa: 105.333, combined: 25.8 }
            },
            "TM13": { 
                name: "Kế toán (Chương trình nghề nghiệp quốc tế - IPOP)", 
                combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"],
                scores: { thpt: 24.0, hsa: 95.6, combined: 24.0 },
                minEnglish: 6.0
            },
            "TM14": { 
                name: "Kế toán (Kế toán công)", 
                combs: ["A00", "A01", "D01", "D07"],
                scores: { thpt: 24.8, hsa: 99.12, combined: 24.8 }
            },
            "TM15": { 
                name: "Kiểm toán (Kiểm toán)", 
                combs: ["A00", "A01", "D01", "D07"],
                scores: { thpt: 25.7, hsa: 104.667, combined: 25.72 }
            },
            "TM16": { 
                name: "Kiểm toán (Chương trình nghề nghiệp quốc tế - IPOP)", 
                combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"],
                scores: { thpt: 24.0, hsa: 95.6, combined: 24.0 },
                minEnglish: 6.0
            },
            "TM17": { 
                name: "Logistics và Quản lý chuỗi cung ứng", 
                combs: ["A00", "A01", "D01", "D07"],
                scores: { thpt: 27.8, hsa: 118.667, combined: 27.8 }
            },
            "TM18": { 
                name: "Logistics và Xuất nhập khẩu (Chương trình nghề nghiệp quốc tế - IPOP)", 
                combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"],
                scores: { thpt: 26.6, hsa: 110.667, combined: 26.6 },
                minEnglish: 6.0
            },
            "TM19": { 
                name: "Kinh doanh quốc tế (Thương mại quốc tế)", 
                combs: ["A00", "A01", "D01", "D07"],
                scores: { thpt: 26.8, hsa: 112.0, combined: 26.8 }
            },
            "TM20": { 
                name: "Kinh doanh quốc tế (Chương trình nghề nghiệp quốc tế - IPOP)", 
                combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"],
                scores: { thpt: 26.3, hsa: 108.667, combined: 26.3 },
                minEnglish: 6.0
            },
            "TM21": { 
                name: "Kinh tế quốc tế", 
                combs: ["A00", "A01", "D01", "D07"],
                scores: { thpt: 26.6, hsa: 110.667, combined: 26.6 }
            },
            "TM22": { 
                name: "Kinh tế (Quản lý kinh tế)", 
                combs: ["A00", "A01", "D01", "D07"],
                scores: { thpt: 25.1, hsa: 100.667, combined: 25.1 }
            },
            "TM23": { 
                name: "Kinh tế và Quản lý đầu tư (Chương trình nghề nghiệp quốc tế - IPOP)", 
                combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"],
                scores: { thpt: 24.7, hsa: 98.68, combined: 24.7 },
                minEnglish: 6.0
            },
            "TM24": { 
                name: "Tài chính - Ngân hàng (Tài chính - Ngân hàng thương mại)", 
                combs: ["A00", "A01", "D01", "D07"],
                scores: { thpt: 26.1, hsa: 107.333, combined: 26.1 }
            },
            "TM25": { 
                name: "Tài chính - Ngân hàng (Chương trình nghề nghiệp quốc tế - IPOP)", 
                combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"],
                scores: { thpt: 25.4, hsa: 102.667, combined: 25.4 },
                minEnglish: 6.0
            },
            "TM26": { 
                name: "Tài chính - Ngân hàng (Tài chính công)", 
                combs: ["A00", "A01", "D01", "D07"],
                scores: { thpt: 25.2, hsa: 101.333, combined: 25.2 }
            },
            "TM27": { 
                name: "Tài chính - Ngân hàng (Công nghệ tài chính ngân hàng)", 
                combs: ["A00", "A01", "D01", "D07"],
                scores: { thpt: 25.0, hsa: 100.0, combined: 25.0 }
            },
            "TM28": { 
                name: "Thương mại điện tử (Quản trị thương mại điện tử)", 
                combs: ["A00", "A01", "D01", "D07"],
                scores: { thpt: 27.6, hsa: 117.333, combined: 27.6 }
            },
            "TM29": { 
                name: "Thương mại điện tử (Chương trình nghề nghiệp quốc tế - IPOP)", 
                combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"],
                scores: { thpt: 26.5, hsa: 110.0, combined: 26.5 },
                minEnglish: 6.0
            },
            "TM30": { 
                name: "Thương mại điện tử (Kinh doanh số)", 
                combs: ["A00", "A01", "D01", "D07"],
                scores: { thpt: 27.2, hsa: 114.667, combined: 27.2 }
            },
            "TM31": { 
                name: "Hệ thống thông tin quản lý (Quản trị Hệ thống thông tin)", 
                combs: ["A00", "A01", "D01", "D07"],
                scores: { thpt: 24.8, hsa: 99.12, combined: 24.8 }
            },
            "TM32": { 
                name: "Hệ thống thông tin quản lý (Chương trình nghề nghiệp quốc tế - IPOP)", 
                combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"],
                scores: { thpt: 24.2, hsa: 96.48, combined: 24.2 },
                minEnglish: 6.0
            },
            "TM33": { 
                name: "Ngôn ngữ Anh (Tiếng Anh thương mại)", 
                combs: ["A01", "D01", "D07"],
                scores: { thpt: 26.1, hsa: null, combined: 26.1 },
                minEnglish: 7.0
            },
            "TM34": { 
                name: "Luật kinh tế (Luật kinh tế)", 
                combs: ["A00", "A01", "D01", "D07"],
                scores: { thpt: 25.4, hsa: null, combined: 25.4 }
            },
            "TM35": { 
                name: "Luật kinh tế (Luật kinh doanh - Chương trình nghề nghiệp quốc tế - IPOP)", 
                combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"],
                scores: { thpt: 24.7, hsa: null, combined: 24.7 },
                minEnglish: 6.0
            },
            "TM36": { 
                name: "Luật kinh tế (Luật thương mại quốc tế)", 
                combs: ["A00", "A01", "D01", "D07"],
                scores: { thpt: 25.1, hsa: null, combined: 25.1 }
            },
            "TM37": { 
                name: "Quản trị nhân lực (Quản trị nhân lực doanh nghiệp)", 
                combs: ["A00", "A01", "D01", "D07"],
                scores: { thpt: 25.6, hsa: 104.0, combined: 25.6 }
            },
            "TM38": { 
                name: "Quản trị nhân lực (Chương trình nghề nghiệp quốc tế - IPOP)", 
                combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"],
                scores: { thpt: 24.8, hsa: 99.12, combined: 24.8 },
                minEnglish: 6.0
            },
            "TM39": { 
                name: "Kinh tế số (Phân tích kinh doanh trong môi trường số)", 
                combs: ["A00", "A01", "D01", "D07"],
                scores: { thpt: 25.1, hsa: 100.667, combined: 25.1 }
            },
            "TM40": { 
                name: "Ngôn ngữ Trung Quốc (Tiếng Trung thương mại)", 
                combs: ["A01", "D01", "D04", "D07"],
                scores: { thpt: 27.4, hsa: null, combined: 27.4 }
            },
            "TM41": { 
                name: "Ngôn ngữ Trung Quốc (Tiếng Trung thương mại - Chương trình nghề nghiệp quốc tế - IPOP)", 
                combs: ["D04"],
                scores: { thpt: 26.8, hsa: null, combined: 26.8 },
                minChinese: 8.0 // Yêu cầu riêng tiếng Trung nếu không có HSK
            },
            "TM42": { 
                name: "Quản trị kinh doanh (Tiếng Pháp thương mại)", 
                combs: ["A00", "A01", "D01", "D03", "D07"],
                scores: { thpt: 22.5, hsa: 89.0, combined: 22.5 }
            },
            "TM43": { 
                name: "Quản trị kinh doanh (Song bằng quốc tế)", 
                combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"],
                scores: { thpt: 22.5, hsa: 89.0, combined: 22.5 }
            },
            "TM44": { 
                name: "Marketing (Song bằng quốc tế)", 
                combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"],
                scores: { thpt: 24.8, hsa: 99.12, combined: 24.8 }
            },
            // --- CÁC NGÀNH MỚI TINH NĂM 2026 (CHƯA CÓ ĐIỂM CHUẨN) ---
            "TM45": { 
                name: "[MỚI 2026] Quản trị kinh doanh (Chương trình tiên tiến)", 
                combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"],
                scores: { thpt: null, hsa: null, combined: null }, isNew2026: true 
            },
            "TM46": { 
                name: "[MỚI 2026] Logistics và quản lý chuỗi cung ứng (Song bằng quốc tế)", 
                combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"],
                scores: { thpt: null, hsa: null, combined: null }, isNew2026: true 
            },
            "TM47": { 
                name: "[MỚI 2026] Kế toán (Song bằng quốc tế)", 
                combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"],
                scores: { thpt: null, hsa: null, combined: null }, isNew2026: true 
            },
            "TM48": { 
                name: "[MỚI 2026] Logistics và Quản lý chuỗi cung ứng (IPOP - Quản lý vận tải đa phương thức)", 
                combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"],
                scores: { thpt: null, hsa: null, combined: null }, minEnglish: 6.0, isNew2026: true 
            },
            "TM49": { 
                name: "[MỚI 2026] Kinh tế số (IPOP - Phân tích dữ liệu trong kinh tế)", 
                combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"],
                scores: { thpt: null, hsa: null, combined: null }, minEnglish: 6.0, isNew2026: true 
            },
            "TM50": { 
                name: "[MỚI 2026] Quản trị dịch vụ du lịch và lữ hành (IPOP - Quản trị sự kiện)", 
                combs: ["A01", "D01", "D07", "D09", "D10", "X25", "X26", "X27", "X28"],
                scores: { thpt: null, hsa: null, combined: null }, minEnglish: 6.0, isNew2026: true 
            },
            "TM51": { 
                name: "[MỚI 2026] Khoa học máy tính (Ứng dụng trí tuệ nhân tạo trong kinh doanh)", 
                combs: ["A00", "A01", "D01", "D07"],
                scores: { thpt: null, hsa: null, combined: null }, isNew2026: true 
            }
        }
    }
};
