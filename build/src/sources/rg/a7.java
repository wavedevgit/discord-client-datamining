package rg;

import bj.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a7 implements bj.d {

    /* renamed from: a  reason: collision with root package name */
    static final a7 f46551a = new a7();

    /* renamed from: b  reason: collision with root package name */
    private static final bj.c f46552b;

    /* renamed from: c  reason: collision with root package name */
    private static final bj.c f46553c;

    /* renamed from: d  reason: collision with root package name */
    private static final bj.c f46554d;

    /* renamed from: e  reason: collision with root package name */
    private static final bj.c f46555e;

    /* renamed from: f  reason: collision with root package name */
    private static final bj.c f46556f;

    /* renamed from: g  reason: collision with root package name */
    private static final bj.c f46557g;

    static {
        c.b a10 = bj.c.a("maxMs");
        v1 v1Var = new v1();
        v1Var.a(1);
        f46552b = a10.b(v1Var.b()).a();
        c.b a11 = bj.c.a("minMs");
        v1 v1Var2 = new v1();
        v1Var2.a(2);
        f46553c = a11.b(v1Var2.b()).a();
        c.b a12 = bj.c.a("avgMs");
        v1 v1Var3 = new v1();
        v1Var3.a(3);
        f46554d = a12.b(v1Var3.b()).a();
        c.b a13 = bj.c.a("firstQuartileMs");
        v1 v1Var4 = new v1();
        v1Var4.a(4);
        f46555e = a13.b(v1Var4.b()).a();
        c.b a14 = bj.c.a("medianMs");
        v1 v1Var5 = new v1();
        v1Var5.a(5);
        f46556f = a14.b(v1Var5.b()).a();
        c.b a15 = bj.c.a("thirdQuartileMs");
        v1 v1Var6 = new v1();
        v1Var6.a(6);
        f46557g = a15.b(v1Var6.b()).a();
    }

    private a7() {
    }

    @Override // bj.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        jd jdVar = (jd) obj;
        bj.e eVar = (bj.e) obj2;
        eVar.e(f46552b, jdVar.c());
        eVar.e(f46553c, jdVar.e());
        eVar.e(f46554d, jdVar.a());
        eVar.e(f46555e, jdVar.b());
        eVar.e(f46556f, jdVar.d());
        eVar.e(f46557g, jdVar.f());
    }
}
