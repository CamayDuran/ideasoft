import { expect, type Page } from '@playwright/test';

export default class Girispage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    HeaderErkeklct = () => this.page.getByRole('link', { name: 'Erkek', exact: true });
    productLct= () => this.page.locator('xpath=//*[@class="product-img"]')
    productBeden = () => this.page.locator('#productDetailPage').getByText('XS').first()
    SepeteEkleLct = () => this.page.locator('div').filter({ hasText: /^Sepete Ekle$/ }).getByRole('button')
    SepetLct = () => this.page.getByRole('link', { name: '1 ' })
    SepetiGoruntuleLct = () => this.page.getByRole('link', { name: 'SEPETİ GÖRÜNTÜLE' })
    AlisverisiTamamlaLct = () => this.page.getByRole('button', { name: 'Alışverişi Tamamla' })
    UyeOlmadanDevamEtLct = () => this.page.getByRole('link', { name: 'Üye Olmadan Devam Et ' })
    TeslimatAdresiTextLct = () => this.page.getByRole('heading', { name: 'Teslimat Adresi' })
    AdTextBoxLct = () => this.page.getByRole('textbox', { name: 'Ad ', exact: true })
    SoyadTextBoxLct = () => this.page.getByRole('textbox', { name: 'Soyad ' })
    EpostaTextBoxLct = () => this.page.getByRole('textbox', { name: 'E-Posta ' })
    TelefonTextBoxLct = () => this.page.getByRole('textbox', { name: '' })
    UlkeDropdown = () => this.page.getByText('ÜlkeÜlke')
    TurkiyeDropdown = () => this.page.getByRole('option', { name: 'Türkiye' })
    SehirDropdown = () => this.page.getByLabel('Search for option')
    SehirTextbox = () => this.page.getByPlaceholder('Şehir')
    AdanaLct = () => this.page.getByRole('option', { name: 'Adana' })
    IlceLct = () => this.page.getByText('İlçeİlçe')
    CeyhanLct = () => this.page.getByRole('option', { name: 'Ceyhan' })
    PostaLct = () => this.page.getByLabel('Posta kodu')
    AdresLct = () => this.page.getByPlaceholder('Adres')
    UyeOlBtnLct = () => this.page.locator('label').filter({ hasText: 'Bu bilgiler ile üyelik oluşturarak devam etmek istiyorum' }).locator('span').nth(1)
    KartNoLct = () => this.page.locator("[id='cardNumber']");
    KartSahibiIsimLct = () => this.page.getByLabel('Kart Sahibinin Adı ve Soyadı')
    KartAyDropdown = () => this.page.getByText('AyAy')
    Ay6 = () => this.page.getByRole('option', { name: '06' })
    KartYilDropdown = () => this.page.getByText('YılYıl')
    Yil2026 = () => this.page.getByRole('option', { name: '2026' })
    CVVlct = () => this.page.locator("[id='cardCvv']");
    TekCekimBtnLct = () => this.page.locator('label').filter({ hasText: 'Tek çekim ₺106,85 ₺106,85' }).locator('span').nth(4)
    Sozlesme1Lct = () => this.page.locator('label').filter({ hasText: 'Ön Bilgilendirme Formu ve Mesafeli Satış Sözleşmesi Okudum ve onaylıyorum.' }).locator('span').nth(1)
    Sozlesme2Lct = () => this.page.locator('label').filter({ hasText: 'Fenerbahçe Spor Ürünleri Sanayi ve Ticaret A.Ş.\'den alışveriş yaparken kredi kar' }).locator('span').nth(1)
    OdemeYapLct = () => this.page.getByRole('button', { name: 'Ödeme Yap' })
    SmsCodeLct = () => this.page.getByPlaceholder('Sms Code')
    SubmitBtnLct = () => this.page.getByRole('button', { name: 'Submit' })
    SiparisBasariliLct = () => this.page.getByRole('heading', { name: 'Siparişiniz Başarıyla Onaylandı' })
    public async clickHeaderErkek(){
        await this.HeaderErkeklct().click();
    }

    public async clickproduct(){
        await this.productLct().first().click();
    }

    public async clickproductbeden(){
        await this.productBeden().click();
    }
    public async clickSepeteEkle(){
        await this.SepeteEkleLct().click();
    }
    public async clickSepete(){
        await this.SepetLct().click();
    }
    public async clickSepetiGoruntule(){
        await this.SepetiGoruntuleLct().click();
    }
    public async clickAlisverisiTamamla(){
        await this.AlisverisiTamamlaLct().click();
    }
    public async clickUyeOlmadanDevamEt(){
        await this.UyeOlmadanDevamEtLct().click();
    }
    public async elementTeslimatBasarili(){
        await expect(this.TeslimatAdresiTextLct()).toHaveText('Teslimat Adresi');
    }
    public async fillAd(ad : string){
        await this.AdTextBoxLct().type(ad);
    }
    public async fillSoyad(soyad : string){
        await this.SoyadTextBoxLct().type(soyad);
    }
    public async fillEposta(eposta : string){
        await this.EpostaTextBoxLct().type(eposta);
    }
    public async fillTelefon(telefon : string){
        await this.TelefonTextBoxLct().type(telefon);
    }
    public async clickUlke(){
        await this.UlkeDropdown().click();
    }
    public async clickTurkiye(){
        await this.TurkiyeDropdown().click();
    }
    public async clickSehir(){
        await this.SehirDropdown().click();
    }
    public async fillsehir(sehir : string){
        await this.SehirTextbox().type(sehir);
    }
    public async clickAdanaLct(){
        await this.AdanaLct().click();
    }
    public async clickIlcelct(){
        await this.IlceLct().click();
    }
    public async clickCeyhanLct(){
        await this.CeyhanLct().click();
    }
    public async fillPosta(posta : string){
        await this.PostaLct().type(posta);
    }
    public async fillAdres(adres : string){
        await this.AdresLct().type(adres);
    }
    public async clickUyeOlDevamEt(){
        await this.UyeOlBtnLct().click();
    }
    public async fillKartNo(kartno : string){
        await this.KartNoLct().type(kartno);
    }
    public async clickKartno(){
        await this.KartNoLct().click();
    }
    public async fillKartSahibiIsim(kartisim : string){
        await this.KartSahibiIsimLct().type(kartisim);
    }
    public async clickAyDropdown(){
        await this.KartAyDropdown().click();
    }
    public async clickAy6(){
        await this.Ay6().click();
    }
    public async clickYilDropdown(){
        await this.KartYilDropdown().click();
    }
    public async clickYil2026(){
        await this.Yil2026().click();
    }
    public async clickCVV(){
        await this.CVVlct().click();
    }
    public async fillCVV(cvv : string){
        await this.CVVlct().type(cvv);
    }
    public async clickTekCekimBtn(){
        await this.TekCekimBtnLct().click();
    }
    public async clickSozlesme1(){
        await this.Sozlesme1Lct().click();
    }
    public async clickSozlesme2(){
        await this.Sozlesme2Lct().click();
    }
    public async clickOdemeYap(){
        await this.OdemeYapLct().click();
    }
    public async fillSmscode(sms : string){
        await this.SmsCodeLct().type(sms);
    }
    public async clickSubmit(){
        await this.SubmitBtnLct().click();
    }
    public async elementSiparisBasarili(){
        await expect(this.SiparisBasariliLct()).toHaveText('Siparişiniz Başarıyla Onaylandı');
    }
}



