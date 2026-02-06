package qg;

import yi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a7 implements yi.d {

    /* renamed from: a  reason: collision with root package name */
    static final a7 f46931a = new a7();

    /* renamed from: b  reason: collision with root package name */
    private static final yi.c f46932b;

    /* renamed from: c  reason: collision with root package name */
    private static final yi.c f46933c;

    /* renamed from: d  reason: collision with root package name */
    private static final yi.c f46934d;

    /* renamed from: e  reason: collision with root package name */
    private static final yi.c f46935e;

    /* renamed from: f  reason: collision with root package name */
    private static final yi.c f46936f;

    /* renamed from: g  reason: collision with root package name */
    private static final yi.c f46937g;

    static {
        c.b a10 = yi.c.a("maxMs");
        v1 v1Var = new v1();
        v1Var.a(1);
        f46932b = a10.b(v1Var.b()).a();
        c.b a11 = yi.c.a("minMs");
        v1 v1Var2 = new v1();
        v1Var2.a(2);
        f46933c = a11.b(v1Var2.b()).a();
        c.b a12 = yi.c.a("avgMs");
        v1 v1Var3 = new v1();
        v1Var3.a(3);
        f46934d = a12.b(v1Var3.b()).a();
        c.b a13 = yi.c.a("firstQuartileMs");
        v1 v1Var4 = new v1();
        v1Var4.a(4);
        f46935e = a13.b(v1Var4.b()).a();
        c.b a14 = yi.c.a("medianMs");
        v1 v1Var5 = new v1();
        v1Var5.a(5);
        f46936f = a14.b(v1Var5.b()).a();
        c.b a15 = yi.c.a("thirdQuartileMs");
        v1 v1Var6 = new v1();
        v1Var6.a(6);
        f46937g = a15.b(v1Var6.b()).a();
    }

    private a7() {
    }

    @Override // yi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        jd jdVar = (jd) obj;
        yi.e eVar = (yi.e) obj2;
        eVar.a(f46932b, jdVar.c());
        eVar.a(f46933c, jdVar.e());
        eVar.a(f46934d, jdVar.a());
        eVar.a(f46935e, jdVar.b());
        eVar.a(f46936f, jdVar.d());
        eVar.a(f46937g, jdVar.f());
    }
}
