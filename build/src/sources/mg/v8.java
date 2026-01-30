package mg;

import ui.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class v8 implements ui.d {

    /* renamed from: a  reason: collision with root package name */
    static final v8 f38736a = new v8();

    /* renamed from: b  reason: collision with root package name */
    private static final ui.c f38737b;

    /* renamed from: c  reason: collision with root package name */
    private static final ui.c f38738c;

    /* renamed from: d  reason: collision with root package name */
    private static final ui.c f38739d;

    /* renamed from: e  reason: collision with root package name */
    private static final ui.c f38740e;

    /* renamed from: f  reason: collision with root package name */
    private static final ui.c f38741f;

    static {
        c.b a10 = ui.c.a("inferenceCommonLogEvent");
        l2 l2Var = new l2();
        l2Var.a(1);
        f38737b = a10.b(l2Var.b()).a();
        c.b a11 = ui.c.a("options");
        l2 l2Var2 = new l2();
        l2Var2.a(2);
        f38738c = a11.b(l2Var2.b()).a();
        c.b a12 = ui.c.a("detectedBarcodeFormats");
        l2 l2Var3 = new l2();
        l2Var3.a(3);
        f38739d = a12.b(l2Var3.b()).a();
        c.b a13 = ui.c.a("detectedBarcodeValueTypes");
        l2 l2Var4 = new l2();
        l2Var4.a(4);
        f38740e = a13.b(l2Var4.b()).a();
        c.b a14 = ui.c.a("imageInfo");
        l2 l2Var5 = new l2();
        l2Var5.a(5);
        f38741f = a14.b(l2Var5.b()).a();
    }

    private v8() {
    }

    @Override // ui.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        of ofVar = (of) obj;
        ui.e eVar = (ui.e) obj2;
        eVar.b(f38737b, ofVar.d());
        eVar.b(f38738c, ofVar.e());
        eVar.b(f38739d, ofVar.a());
        eVar.b(f38740e, ofVar.b());
        eVar.b(f38741f, ofVar.c());
    }
}
