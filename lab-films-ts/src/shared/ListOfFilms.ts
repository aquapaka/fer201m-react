export type Film = {
    id: number,
    image: string,
    title: string,
    year: number,
    nation: string,
    details: string
}

export const Films: Film[] = [
    {
        id: 1,
        image: "/images/darkling.jpg",
        title: "Darkling",
        year: 2022,
        nation: "Italy",
        details: "Bức thư của một cô gái đến từ Kosovo dành tặng cho người cha đã mất tích của cô đã được đọc tại Liên Hợp Quốc, trong đó cô công khai đề cập đến cuộc sống khó khăn của người Serb, đặc biệt là trẻ em Serb ở vùng đất này."
    },
    {
        id: 2,
        image: "/images/dune.jpg",
        title: "Dune",
        year: 2021,
        nation: "Canada, USA",
        details: "Bộ phim theo chân nhân vật chính là Paul Atreides - con trai của Leto Atreides (người cai trị hành tinh đại dương Caladan và là người được hoàng đế Pafishah Shaddam IV giao nhiêm vụ quản lý hành tịnh Arrakis sa mạc khắc nghiệt hay thường được biết đến với tên gọi DUNE). Tại đây, tồn tại một vật chất quý giá \"the spices\" (gia vị) - thứ thần dược giúp kéo dài sự sống và tăng cường trí lực cho con người. Chính vì điều này, gia tộc Atreides trở thành mục tiêu tấn công của nhiều gia tộc khác trong đó có nhà Harkonnen."
    },
    {
        id: 3,
        image: "/images/fightclub.jpg",
        title: "Fight club",
        year: 1999,
        nation: "USA",
        details: `Một tay bán bảo hiểm ôtô thành đạt sống giữa cuộc sống xa hoa nơi thành phố bị mất ngủ triền miên. Gã tìm cách 'giải thoát' bằng việc giả bệnh và tham gia các hội chia sẻ giữa những bệnh nhân. 'Phương thuốc' này bị phá đám bởi sự xuất hiện của ả lạ mặt Marla Singer.`
    },
    {
        id: 4,
        image: "/images/her.jpg",
        title: "Her",
        year: 2013,
        nation: "USA",
        details: "Theodore là một nhà văn cô đơn, hướng nội, làm nghề viết thư tình cho những người gặp khó khăn trong việc biểu lộ cảm xúc. Trầm cảm và chán nản sau khi ly dị vợ - tình yêu từ thuở ấu thơ, Theodore đã rơi vào mối quan hệ với Samantha, một hệ điều hành máy tính có trí thông minh nhân tạo và khả năng học hỏi, giao tiếp như con người bình thường..."
    },
    {
        id: 5,
        image: "/images/oppenheimer.jpg",
        title: "Oppenheimer",
        year: 2023,
        nation: "England, USA",
        details: "Với nhân vật trung tâm là J. Robert Oppenheimer, nhà vật lý lý thuyết người đứng đầu phòng thí nghiệm Los Alamos, thời kỳ Thế chiến II. Ông đóng vai trò quan trọng trong Dự án Manhattan, tiên phong trong nhiệm vụ phát triển vũ khí hạt nhân, và được coi là một trong những “cha đẻ của bom nguyên tử”."
    },
    {
        id: 6,
        image: "/images/severance.jpg",
        title: "Severance",
        year: 2022,
        nation: "USA",
        details: `Bộ phim theo chân Mark, một nhân viên của Lumon Industries dẫn đầu một nhóm nhân viên văn phòng đã đồng ý với một chương trình được gọi là "Severance" chia cắt ký ức giữa công việc và cuộc sống cá nhân của họ. Nhưng mọi chuyện đã thay đổi khi xuất hiện một người đồng nghiệp bí ẩn ở bên ngoài, từ đây bắt đầu một cuộc hành trình khám phá sự thật về công việc của họ.`
    },
    {
        id: 7,
        image: "/images/sherlock.jpg",
        title: "Sherlock",
        year: 2010,
        nation: "England",
        details: "Sherlock là bộ phim truyền hình của Anh lấy bối cảnh hiện đại, dựa trên bộ truyện trinh thám nổi tiếng Sherlock Holmes của nhà văn Arthur Conan Doyle."
    },
    {
        id: 8,
        image: "/images/inception.jpg",
        title: "Inception",
        year: 2010,
        nation: "England, USA",
        details: "Dom Cobb không phải là một đạo chích tầm thường, anh ta là bực thầy về đánh cắp, có thể xâm nhập vào cõi vô thức của bất kỳ người nào để đánh cắp những bí mật thầm kín nhất của người đó. Muốn thực hiện chuyện này, anh ta bước vào những giấc mơ của người đó."
    },
    {
        id: 9,
        image: "/images/silo.jpg",
        title: "Silo",
        year: 2023,
        nation: "USA",
        details: "Trong một tương lai điêu tàn và độc hại, hàng ngàn người sống trong một silo khổng lồ ở sâu trong lòng đất. Sau khi cảnh sát trưởng phá vỡ một nguyên tắc chủ chốt và cư dân mất mạng một cách bí ẩn, kỹ sư Juliette bắt đầu phát hiện ra những bí mật gây sốc và sự thật về silo."
    },
]