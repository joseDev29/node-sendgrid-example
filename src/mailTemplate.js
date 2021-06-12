const mailTemplate = (title, dataTitle, fields) => {
  let templateFields = ``;

  fields.map((field) => {
    templateFields += `
          <p
          style="
            color: #00b090;
            display: block;
            text-align: center;
            font-weight: 600;
            font-size: 16px;
            margin: 12px 0 0;
          "
        >
          ${field[0]}:
        </p>
        <p
          style="
            color: #414144;
            display: block;
            text-align: center;
            font-weight: 600;
            font-size: 18px;
            margin: 3px 0 0;
          "
        >
          ${field[1]}
        </p>    
      
      `;

    return;
  });

  return `
    <div
          style="
            width: 100%;
            margin: 25px 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            box-sizing: border-box;
          "
        >
          <div
            style="
              width: 90%;
              min-width: 300px;
              max-width: 450px;
              margin: 0 auto;
              padding: 12px;
              box-sizing: border-box;
              background-color: #b00020;
            "
          >
            <div
              style="
                width: 100%;
                border: 2px solid #fff;
                background-color: #b00020;
                box-sizing: border-box;
                padding: 8px;
                border-radius: 16px;
              "
            >
              <h1
                style="
                  text-align: center;
                  margin: 8px 0 0;
                  font-size: 32px;
                  font-weight: 700;
                  color: #fff;
                "
              >
                InMobi
              </h1>
  
              <h2
                style="
                  text-align: center;
                  font-size: 26px;
                  font-weight: 600;
                  color: #fff;
                  margin: 25px 0 0;
                "
              >
                ${title}
              </h2>
  
              <div
                style="
                  background-color: #fff;
                  padding: 10px 8px;
                  border-radius: 8px;
                  width: 80%;
                  min-width: 250px;
                  max-width: 370px;
                  margin: 25px auto 10px;
                  box-sizing: border-box;
                "
              >
                <h3
                  style="
                    color: #b00020;
                    font-size: 20px;
                    text-align: center;
                    margin: 0;
                  "
                >
                  ${dataTitle}
                </h3>
  
                ${templateFields}
                
              </div>
            </div>
          </div>
        </div>
    `;
};

module.exports = {
  mailTemplate,
};
