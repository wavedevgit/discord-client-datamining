package rg;

import bj.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a7 implements bj.d {

    /* renamed from: a  reason: collision with root package name */
    static final a7 f47120a = new a7();

    /* renamed from: b  reason: collision with root package name */
    private static final bj.c f47121b;

    /* renamed from: c  reason: collision with root package name */
    private static final bj.c f47122c;

    /* renamed from: d  reason: collision with root package name */
    private static final bj.c f47123d;

    /* renamed from: e  reason: collision with root package name */
    private static final bj.c f47124e;

    /* renamed from: f  reason: collision with root package name */
    private static final bj.c f47125f;

    /* renamed from: g  reason: collision with root package name */
    private static final bj.c f47126g;

    static {
        c.b a10 = bj.c.a("maxMs");
        v1 v1Var = new v1();
        v1Var.a(1);
        f47121b = a10.b(v1Var.b()).a();
        c.b a11 = bj.c.a("minMs");
        v1 v1Var2 = new v1();
        v1Var2.a(2);
        f47122c = a11.b(v1Var2.b()).a();
        c.b a12 = bj.c.a("avgMs");
        v1 v1Var3 = new v1();
        v1Var3.a(3);
        f47123d = a12.b(v1Var3.b()).a();
        c.b a13 = bj.c.a("firstQuartileMs");
        v1 v1Var4 = new v1();
        v1Var4.a(4);
        f47124e = a13.b(v1Var4.b()).a();
        c.b a14 = bj.c.a("medianMs");
        v1 v1Var5 = new v1();
        v1Var5.a(5);
        f47125f = a14.b(v1Var5.b()).a();
        c.b a15 = bj.c.a("thirdQuartileMs");
        v1 v1Var6 = new v1();
        v1Var6.a(6);
        f47126g = a15.b(v1Var6.b()).a();
    }

    private a7() {
    }

    @Override // bj.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        jd jdVar = (jd) obj;
        bj.e eVar = (bj.e) obj2;
        eVar.e(f47121b, jdVar.c());
        eVar.e(f47122c, jdVar.e());
        eVar.e(f47123d, jdVar.a());
        eVar.e(f47124e, jdVar.b());
        eVar.e(f47125f, jdVar.d());
        eVar.e(f47126g, jdVar.f());
    }
}
