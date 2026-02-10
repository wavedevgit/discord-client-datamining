package qg;

import zi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class k5 implements zi.d {

    /* renamed from: a  reason: collision with root package name */
    static final k5 f45962a = new k5();

    /* renamed from: b  reason: collision with root package name */
    private static final zi.c f45963b;

    /* renamed from: c  reason: collision with root package name */
    private static final zi.c f45964c;

    /* renamed from: d  reason: collision with root package name */
    private static final zi.c f45965d;

    /* renamed from: e  reason: collision with root package name */
    private static final zi.c f45966e;

    /* renamed from: f  reason: collision with root package name */
    private static final zi.c f45967f;

    /* renamed from: g  reason: collision with root package name */
    private static final zi.c f45968g;

    static {
        c.b a10 = zi.c.a("landmarkMode");
        s1 s1Var = new s1();
        s1Var.a(1);
        f45963b = a10.b(s1Var.b()).a();
        c.b a11 = zi.c.a("classificationMode");
        s1 s1Var2 = new s1();
        s1Var2.a(2);
        f45964c = a11.b(s1Var2.b()).a();
        c.b a12 = zi.c.a("performanceMode");
        s1 s1Var3 = new s1();
        s1Var3.a(3);
        f45965d = a12.b(s1Var3.b()).a();
        c.b a13 = zi.c.a("contourMode");
        s1 s1Var4 = new s1();
        s1Var4.a(4);
        f45966e = a13.b(s1Var4.b()).a();
        c.b a14 = zi.c.a("isTrackingEnabled");
        s1 s1Var5 = new s1();
        s1Var5.a(5);
        f45967f = a14.b(s1Var5.b()).a();
        c.b a15 = zi.c.a("minFaceSize");
        s1 s1Var6 = new s1();
        s1Var6.a(6);
        f45968g = a15.b(s1Var6.b()).a();
    }

    private k5() {
    }

    @Override // zi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        n9 n9Var = (n9) obj;
        zi.e eVar = (zi.e) obj2;
        eVar.d(f45963b, n9Var.c());
        eVar.d(f45964c, n9Var.a());
        eVar.d(f45965d, n9Var.d());
        eVar.d(f45966e, n9Var.b());
        eVar.d(f45967f, n9Var.e());
        eVar.d(f45968g, n9Var.f());
    }
}
