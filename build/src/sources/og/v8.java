package og;

import bj.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class v8 implements bj.d {

    /* renamed from: a  reason: collision with root package name */
    static final v8 f39738a = new v8();

    /* renamed from: b  reason: collision with root package name */
    private static final bj.c f39739b;

    /* renamed from: c  reason: collision with root package name */
    private static final bj.c f39740c;

    /* renamed from: d  reason: collision with root package name */
    private static final bj.c f39741d;

    /* renamed from: e  reason: collision with root package name */
    private static final bj.c f39742e;

    /* renamed from: f  reason: collision with root package name */
    private static final bj.c f39743f;

    static {
        c.b a10 = bj.c.a("inferenceCommonLogEvent");
        l2 l2Var = new l2();
        l2Var.a(1);
        f39739b = a10.b(l2Var.b()).a();
        c.b a11 = bj.c.a("options");
        l2 l2Var2 = new l2();
        l2Var2.a(2);
        f39740c = a11.b(l2Var2.b()).a();
        c.b a12 = bj.c.a("detectedBarcodeFormats");
        l2 l2Var3 = new l2();
        l2Var3.a(3);
        f39741d = a12.b(l2Var3.b()).a();
        c.b a13 = bj.c.a("detectedBarcodeValueTypes");
        l2 l2Var4 = new l2();
        l2Var4.a(4);
        f39742e = a13.b(l2Var4.b()).a();
        c.b a14 = bj.c.a("imageInfo");
        l2 l2Var5 = new l2();
        l2Var5.a(5);
        f39743f = a14.b(l2Var5.b()).a();
    }

    private v8() {
    }

    @Override // bj.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        of ofVar = (of) obj;
        bj.e eVar = (bj.e) obj2;
        eVar.e(f39739b, ofVar.d());
        eVar.e(f39740c, ofVar.e());
        eVar.e(f39741d, ofVar.a());
        eVar.e(f39742e, ofVar.b());
        eVar.e(f39743f, ofVar.c());
    }
}
