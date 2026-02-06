package pg;

import yi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i5 implements yi.d {

    /* renamed from: a  reason: collision with root package name */
    static final i5 f44329a = new i5();

    /* renamed from: b  reason: collision with root package name */
    private static final yi.c f44330b;

    /* renamed from: c  reason: collision with root package name */
    private static final yi.c f44331c;

    /* renamed from: d  reason: collision with root package name */
    private static final yi.c f44332d;

    /* renamed from: e  reason: collision with root package name */
    private static final yi.c f44333e;

    /* renamed from: f  reason: collision with root package name */
    private static final yi.c f44334f;

    /* renamed from: g  reason: collision with root package name */
    private static final yi.c f44335g;

    static {
        c.b a10 = yi.c.a("maxMs");
        s1 s1Var = new s1();
        s1Var.a(1);
        f44330b = a10.b(s1Var.b()).a();
        c.b a11 = yi.c.a("minMs");
        s1 s1Var2 = new s1();
        s1Var2.a(2);
        f44331c = a11.b(s1Var2.b()).a();
        c.b a12 = yi.c.a("avgMs");
        s1 s1Var3 = new s1();
        s1Var3.a(3);
        f44332d = a12.b(s1Var3.b()).a();
        c.b a13 = yi.c.a("firstQuartileMs");
        s1 s1Var4 = new s1();
        s1Var4.a(4);
        f44333e = a13.b(s1Var4.b()).a();
        c.b a14 = yi.c.a("medianMs");
        s1 s1Var5 = new s1();
        s1Var5.a(5);
        f44334f = a14.b(s1Var5.b()).a();
        c.b a15 = yi.c.a("thirdQuartileMs");
        s1 s1Var6 = new s1();
        s1Var6.a(6);
        f44335g = a15.b(s1Var6.b()).a();
    }

    private i5() {
    }

    @Override // yi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        e9 e9Var = (e9) obj;
        yi.e eVar = (yi.e) obj2;
        eVar.a(f44330b, e9Var.c());
        eVar.a(f44331c, e9Var.e());
        eVar.a(f44332d, e9Var.a());
        eVar.a(f44333e, e9Var.b());
        eVar.a(f44334f, e9Var.d());
        eVar.a(f44335g, e9Var.f());
    }
}
