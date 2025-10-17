pm.test("status code is 200", function (){
    pm.response.to.have.status(200);
});

pm.test("Each Artikle has required field", function (){
    const jsonData = pm.response.json();
    jsonData.articles.forEach(article => {
        pm.expect(article).to.have.property("title");
        pm.expect(article).to.have.property("description");
        pm.expect(article).to.have.property("url");
    });
});