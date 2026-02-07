package pg;

import yi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class k5 implements yi.d {

    /* renamed from: a  reason: collision with root package name */
    static final k5 f44448a = new k5();

    /* renamed from: b  reason: collision with root package name */
    private static final yi.c f44449b;

    /* renamed from: c  reason: collision with root package name */
    private static final yi.c f44450c;

    /* renamed from: d  reason: collision with root package name */
    private static final yi.c f44451d;

    /* renamed from: e  reason: collision with root package name */
    private static final yi.c f44452e;

    /* renamed from: f  reason: collision with root package name */
    private static final yi.c f44453f;

    /* renamed from: g  reason: collision with root package name */
    private static final yi.c f44454g;

    static {
        c.b a10 = yi.c.a("landmarkMode");
        s1 s1Var = new s1();
        s1Var.a(1);
        f44449b = a10.b(s1Var.b()).a();
        c.b a11 = yi.c.a("classificationMode");
        s1 s1Var2 = new s1();
        s1Var2.a(2);
        f44450c = a11.b(s1Var2.b()).a();
        c.b a12 = yi.c.a("performanceMode");
        s1 s1Var3 = new s1();
        s1Var3.a(3);
        f44451d = a12.b(s1Var3.b()).a();
        c.b a13 = yi.c.a("contourMode");
        s1 s1Var4 = new s1();
        s1Var4.a(4);
        f44452e = a13.b(s1Var4.b()).a();
        c.b a14 = yi.c.a("isTrackingEnabled");
        s1 s1Var5 = new s1();
        s1Var5.a(5);
        f44453f = a14.b(s1Var5.b()).a();
        c.b a15 = yi.c.a("minFaceSize");
        s1 s1Var6 = new s1();
        s1Var6.a(6);
        f44454g = a15.b(s1Var6.b()).a();
    }

    private k5() {
    }

    @Override // yi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        n9 n9Var = (n9) obj;
        yi.e eVar = (yi.e) obj2;
        eVar.a(f44449b, n9Var.c());
        eVar.a(f44450c, n9Var.a());
        eVar.a(f44451d, n9Var.d());
        eVar.a(f44452e, n9Var.b());
        eVar.a(f44453f, n9Var.e());
        eVar.a(f44454g, n9Var.f());
    }
}
