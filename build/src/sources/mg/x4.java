package mg;

import xi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class x4 implements xi.d {

    /* renamed from: a  reason: collision with root package name */
    static final x4 f38223a = new x4();

    /* renamed from: b  reason: collision with root package name */
    private static final xi.c f38224b;

    /* renamed from: c  reason: collision with root package name */
    private static final xi.c f38225c;

    /* renamed from: d  reason: collision with root package name */
    private static final xi.c f38226d;

    /* renamed from: e  reason: collision with root package name */
    private static final xi.c f38227e;

    /* renamed from: f  reason: collision with root package name */
    private static final xi.c f38228f;

    /* renamed from: g  reason: collision with root package name */
    private static final xi.c f38229g;

    /* renamed from: h  reason: collision with root package name */
    private static final xi.c f38230h;

    static {
        c.b a10 = xi.c.a("errorCode");
        l2 l2Var = new l2();
        l2Var.a(1);
        f38224b = a10.b(l2Var.b()).a();
        c.b a11 = xi.c.a("hasResult");
        l2 l2Var2 = new l2();
        l2Var2.a(2);
        f38225c = a11.b(l2Var2.b()).a();
        c.b a12 = xi.c.a("isColdCall");
        l2 l2Var3 = new l2();
        l2Var3.a(3);
        f38226d = a12.b(l2Var3.b()).a();
        c.b a13 = xi.c.a("imageInfo");
        l2 l2Var4 = new l2();
        l2Var4.a(4);
        f38227e = a13.b(l2Var4.b()).a();
        c.b a14 = xi.c.a("options");
        l2 l2Var5 = new l2();
        l2Var5.a(5);
        f38228f = a14.b(l2Var5.b()).a();
        c.b a15 = xi.c.a("detectedBarcodeFormats");
        l2 l2Var6 = new l2();
        l2Var6.a(6);
        f38229g = a15.b(l2Var6.b()).a();
        c.b a16 = xi.c.a("detectedBarcodeValueTypes");
        l2 l2Var7 = new l2();
        l2Var7.a(7);
        f38230h = a16.b(l2Var7.b()).a();
    }

    private x4() {
    }

    @Override // xi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        e3 e3Var = (e3) obj;
        xi.e eVar = (xi.e) obj2;
        eVar.d(f38224b, e3Var.c());
        eVar.d(f38225c, null);
        eVar.d(f38226d, e3Var.e());
        eVar.d(f38227e, null);
        eVar.d(f38228f, e3Var.d());
        eVar.d(f38229g, e3Var.a());
        eVar.d(f38230h, e3Var.b());
    }
}
