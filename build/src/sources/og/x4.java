package og;

import bj.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class x4 implements bj.d {

    /* renamed from: a  reason: collision with root package name */
    static final x4 f39785a = new x4();

    /* renamed from: b  reason: collision with root package name */
    private static final bj.c f39786b;

    /* renamed from: c  reason: collision with root package name */
    private static final bj.c f39787c;

    /* renamed from: d  reason: collision with root package name */
    private static final bj.c f39788d;

    /* renamed from: e  reason: collision with root package name */
    private static final bj.c f39789e;

    /* renamed from: f  reason: collision with root package name */
    private static final bj.c f39790f;

    /* renamed from: g  reason: collision with root package name */
    private static final bj.c f39791g;

    /* renamed from: h  reason: collision with root package name */
    private static final bj.c f39792h;

    static {
        c.b a10 = bj.c.a("errorCode");
        l2 l2Var = new l2();
        l2Var.a(1);
        f39786b = a10.b(l2Var.b()).a();
        c.b a11 = bj.c.a("hasResult");
        l2 l2Var2 = new l2();
        l2Var2.a(2);
        f39787c = a11.b(l2Var2.b()).a();
        c.b a12 = bj.c.a("isColdCall");
        l2 l2Var3 = new l2();
        l2Var3.a(3);
        f39788d = a12.b(l2Var3.b()).a();
        c.b a13 = bj.c.a("imageInfo");
        l2 l2Var4 = new l2();
        l2Var4.a(4);
        f39789e = a13.b(l2Var4.b()).a();
        c.b a14 = bj.c.a("options");
        l2 l2Var5 = new l2();
        l2Var5.a(5);
        f39790f = a14.b(l2Var5.b()).a();
        c.b a15 = bj.c.a("detectedBarcodeFormats");
        l2 l2Var6 = new l2();
        l2Var6.a(6);
        f39791g = a15.b(l2Var6.b()).a();
        c.b a16 = bj.c.a("detectedBarcodeValueTypes");
        l2 l2Var7 = new l2();
        l2Var7.a(7);
        f39792h = a16.b(l2Var7.b()).a();
    }

    private x4() {
    }

    @Override // bj.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        e3 e3Var = (e3) obj;
        bj.e eVar = (bj.e) obj2;
        eVar.e(f39786b, e3Var.c());
        eVar.e(f39787c, null);
        eVar.e(f39788d, e3Var.e());
        eVar.e(f39789e, null);
        eVar.e(f39790f, e3Var.d());
        eVar.e(f39791g, e3Var.a());
        eVar.e(f39792h, e3Var.b());
    }
}
