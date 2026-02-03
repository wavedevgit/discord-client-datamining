package mg;

import ui.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class x4 implements ui.d {

    /* renamed from: a  reason: collision with root package name */
    static final x4 f38764a = new x4();

    /* renamed from: b  reason: collision with root package name */
    private static final ui.c f38765b;

    /* renamed from: c  reason: collision with root package name */
    private static final ui.c f38766c;

    /* renamed from: d  reason: collision with root package name */
    private static final ui.c f38767d;

    /* renamed from: e  reason: collision with root package name */
    private static final ui.c f38768e;

    /* renamed from: f  reason: collision with root package name */
    private static final ui.c f38769f;

    /* renamed from: g  reason: collision with root package name */
    private static final ui.c f38770g;

    /* renamed from: h  reason: collision with root package name */
    private static final ui.c f38771h;

    static {
        c.b a10 = ui.c.a("errorCode");
        l2 l2Var = new l2();
        l2Var.a(1);
        f38765b = a10.b(l2Var.b()).a();
        c.b a11 = ui.c.a("hasResult");
        l2 l2Var2 = new l2();
        l2Var2.a(2);
        f38766c = a11.b(l2Var2.b()).a();
        c.b a12 = ui.c.a("isColdCall");
        l2 l2Var3 = new l2();
        l2Var3.a(3);
        f38767d = a12.b(l2Var3.b()).a();
        c.b a13 = ui.c.a("imageInfo");
        l2 l2Var4 = new l2();
        l2Var4.a(4);
        f38768e = a13.b(l2Var4.b()).a();
        c.b a14 = ui.c.a("options");
        l2 l2Var5 = new l2();
        l2Var5.a(5);
        f38769f = a14.b(l2Var5.b()).a();
        c.b a15 = ui.c.a("detectedBarcodeFormats");
        l2 l2Var6 = new l2();
        l2Var6.a(6);
        f38770g = a15.b(l2Var6.b()).a();
        c.b a16 = ui.c.a("detectedBarcodeValueTypes");
        l2 l2Var7 = new l2();
        l2Var7.a(7);
        f38771h = a16.b(l2Var7.b()).a();
    }

    private x4() {
    }

    @Override // ui.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        e3 e3Var = (e3) obj;
        ui.e eVar = (ui.e) obj2;
        eVar.b(f38765b, e3Var.c());
        eVar.b(f38766c, null);
        eVar.b(f38767d, e3Var.e());
        eVar.b(f38768e, null);
        eVar.b(f38769f, e3Var.d());
        eVar.b(f38770g, e3Var.a());
        eVar.b(f38771h, e3Var.b());
    }
}
