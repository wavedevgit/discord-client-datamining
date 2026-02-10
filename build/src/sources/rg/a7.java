package rg;

import zi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a7 implements zi.d {

    /* renamed from: a  reason: collision with root package name */
    static final a7 f48097a = new a7();

    /* renamed from: b  reason: collision with root package name */
    private static final zi.c f48098b;

    /* renamed from: c  reason: collision with root package name */
    private static final zi.c f48099c;

    /* renamed from: d  reason: collision with root package name */
    private static final zi.c f48100d;

    /* renamed from: e  reason: collision with root package name */
    private static final zi.c f48101e;

    /* renamed from: f  reason: collision with root package name */
    private static final zi.c f48102f;

    /* renamed from: g  reason: collision with root package name */
    private static final zi.c f48103g;

    static {
        c.b a10 = zi.c.a("maxMs");
        v1 v1Var = new v1();
        v1Var.a(1);
        f48098b = a10.b(v1Var.b()).a();
        c.b a11 = zi.c.a("minMs");
        v1 v1Var2 = new v1();
        v1Var2.a(2);
        f48099c = a11.b(v1Var2.b()).a();
        c.b a12 = zi.c.a("avgMs");
        v1 v1Var3 = new v1();
        v1Var3.a(3);
        f48100d = a12.b(v1Var3.b()).a();
        c.b a13 = zi.c.a("firstQuartileMs");
        v1 v1Var4 = new v1();
        v1Var4.a(4);
        f48101e = a13.b(v1Var4.b()).a();
        c.b a14 = zi.c.a("medianMs");
        v1 v1Var5 = new v1();
        v1Var5.a(5);
        f48102f = a14.b(v1Var5.b()).a();
        c.b a15 = zi.c.a("thirdQuartileMs");
        v1 v1Var6 = new v1();
        v1Var6.a(6);
        f48103g = a15.b(v1Var6.b()).a();
    }

    private a7() {
    }

    @Override // zi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        jd jdVar = (jd) obj;
        zi.e eVar = (zi.e) obj2;
        eVar.d(f48098b, jdVar.c());
        eVar.d(f48099c, jdVar.e());
        eVar.d(f48100d, jdVar.a());
        eVar.d(f48101e, jdVar.b());
        eVar.d(f48102f, jdVar.d());
        eVar.d(f48103g, jdVar.f());
    }
}
