function comprar(){
    var qtde, dias, valorUnitario, valorTotal, codproduto, nomeproduto;

    codproduto = document.frmCompra.slcProduto.selectedIndex;
    nomeproduto = document.frmCompra.slcProduto[codproduto].text;
    switch(codproduto){
        case 1: 
            valorUnitario = 2150,00;
            break;
        case 2:
            valorUnitario = 925,00;
            break;
        case 3: 
            valorUnitario = 1000,00;
            break;
        case 4: 
            valorUnitario = 1200,00;
            break;
    }

    qtde = parseInt(document.getElementById('qtde').value);
    valorTotal = qtde * valorUnitario;

    dias = parseInt(document.getElementById('dias').value);
    valorTotal = dias * valorUnitario;




    //AULA 24.11.2022

    //radio button
    var i, frete, adicionais = 0;

    for (i = 0; i < document.frmCompra.rdEntrega.length; i++) {
        if (document.frmCompra.rdEntrega[i].checked)
            break;
    }
    
    if (parseInt(document.frmCompra.rdEntrega[i].value) == 1)        
        frete = 40,00;
    else if (parseInt(document.frmCompra.rdEntrega[i].value) == 2)
        frete = 55,50;
    else
        frete = 95,50;

    valorTotal += frete;

    //checkbox
    if (document.getElementById('embalagem').checked) {
        adicionais += 30;
    }
    if (document.getElementById('cartao').checked == true){
        adicionais += 80;
    }
    if (document.getElementById('cartao').checked == true){
        adicionais += 40;
    }

    valorTotal += adicionais;



    document.getElementById('nomeProduto').innerHTML = "Produto: " + nomeproduto;
    document.getElementById('valorUnitario').innerHTML = "Valor unitário: R$" + valorUnitario;
    document.getElementById('qtde').innerHTML = "Quantidade de diarias: "+dias;
    document.getElementById('Refeição').innerHTML = "Refeição: R$" + frete;
    document.getElementById('adicionais').innerHTML = "Adicionais: R$" + adicionais;
    document.getElementById('valorTotal').innerHTML = "Valor total: R$" + valorTotal;
}