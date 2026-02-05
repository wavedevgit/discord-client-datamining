package og;

import xi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class k5 implements xi.d {

    /* renamed from: a  reason: collision with root package name */
    static final k5 f43058a = new k5();

    /* renamed from: b  reason: collision with root package name */
    private static final xi.c f43059b;

    /* renamed from: c  reason: collision with root package name */
    private static final xi.c f43060c;

    /* renamed from: d  reason: collision with root package name */
    private static final xi.c f43061d;

    /* renamed from: e  reason: collision with root package name */
    private static final xi.c f43062e;

    /* renamed from: f  reason: collision with root package name */
    private static final xi.c f43063f;

    /* renamed from: g  reason: collision with root package name */
    private static final xi.c f43064g;

    static {
        c.b a10 = xi.c.a("landmarkMode");
        s1 s1Var = new s1();
        s1Var.a(1);
        f43059b = a10.b(s1Var.b()).a();
        c.b a11 = xi.c.a("classificationMode");
        s1 s1Var2 = new s1();
        s1Var2.a(2);
        f43060c = a11.b(s1Var2.b()).a();
        c.b a12 = xi.c.a("performanceMode");
        s1 s1Var3 = new s1();
        s1Var3.a(3);
        f43061d = a12.b(s1Var3.b()).a();
        c.b a13 = xi.c.a("contourMode");
        s1 s1Var4 = new s1();
        s1Var4.a(4);
        f43062e = a13.b(s1Var4.b()).a();
        c.b a14 = xi.c.a("isTrackingEnabled");
        s1 s1Var5 = new s1();
        s1Var5.a(5);
        f43063f = a14.b(s1Var5.b()).a();
        c.b a15 = xi.c.a("minFaceSize");
        s1 s1Var6 = new s1();
        s1Var6.a(6);
        f43064g = a15.b(s1Var6.b()).a();
    }

    private k5() {
    }

    @Override // xi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        n9 n9Var = (n9) obj;
        xi.e eVar = (xi.e) obj2;
        eVar.d(f43059b, n9Var.c());
        eVar.d(f43060c, n9Var.a());
        eVar.d(f43061d, n9Var.d());
        eVar.d(f43062e, n9Var.b());
        eVar.d(f43063f, n9Var.e());
        eVar.d(f43064g, n9Var.f());
    }
}
