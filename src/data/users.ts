export const generateRandomData = () => {
    const names = ['Lourenço Sofécia', 'Helio Suinguada', 'Lord Queta', 'João Francisco', 'Dianvuto A', 'Frank Statin', 'Grace Will'];
    const emails = ['alice@example.com', 'bob@example.com', 'charlie@example.com', 'david@example.com', 'eva@example.com', 'frank@example.com', 'grace@example.com'];
    const phones = ['923847547', '923465745', '912345645', '941253456', '951234256', '958235463', '931423465'];
  
    const data = [];
    for (let i = 0; i < 7; i++) {
      const randomIndex = Math.floor(Math.random() * names.length);
      const name = names[i];
      const email = emails[i];
      const phone = phones[i];
      const number = i+1;
      data.push({ name, email, phone, number });
    }
    return data;
  };