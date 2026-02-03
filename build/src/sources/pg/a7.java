package pg;

import ui.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a7 implements ui.d {

    /* renamed from: a  reason: collision with root package name */
    static final a7 f45213a = new a7();

    /* renamed from: b  reason: collision with root package name */
    private static final ui.c f45214b;

    /* renamed from: c  reason: collision with root package name */
    private static final ui.c f45215c;

    /* renamed from: d  reason: collision with root package name */
    private static final ui.c f45216d;

    /* renamed from: e  reason: collision with root package name */
    private static final ui.c f45217e;

    /* renamed from: f  reason: collision with root package name */
    private static final ui.c f45218f;

    /* renamed from: g  reason: collision with root package name */
    private static final ui.c f45219g;

    static {
        c.b a10 = ui.c.a("maxMs");
        v1 v1Var = new v1();
        v1Var.a(1);
        f45214b = a10.b(v1Var.b()).a();
        c.b a11 = ui.c.a("minMs");
        v1 v1Var2 = new v1();
        v1Var2.a(2);
        f45215c = a11.b(v1Var2.b()).a();
        c.b a12 = ui.c.a("avgMs");
        v1 v1Var3 = new v1();
        v1Var3.a(3);
        f45216d = a12.b(v1Var3.b()).a();
        c.b a13 = ui.c.a("firstQuartileMs");
        v1 v1Var4 = new v1();
        v1Var4.a(4);
        f45217e = a13.b(v1Var4.b()).a();
        c.b a14 = ui.c.a("medianMs");
        v1 v1Var5 = new v1();
        v1Var5.a(5);
        f45218f = a14.b(v1Var5.b()).a();
        c.b a15 = ui.c.a("thirdQuartileMs");
        v1 v1Var6 = new v1();
        v1Var6.a(6);
        f45219g = a15.b(v1Var6.b()).a();
    }

    private a7() {
    }

    @Override // ui.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        jd jdVar = (jd) obj;
        ui.e eVar = (ui.e) obj2;
        eVar.b(f45214b, jdVar.c());
        eVar.b(f45215c, jdVar.e());
        eVar.b(f45216d, jdVar.a());
        eVar.b(f45217e, jdVar.b());
        eVar.b(f45218f, jdVar.d());
        eVar.b(f45219g, jdVar.f());
    }
}
