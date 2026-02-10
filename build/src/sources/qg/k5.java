package qg;

import bj.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class k5 implements bj.d {

    /* renamed from: a  reason: collision with root package name */
    static final k5 f44630a = new k5();

    /* renamed from: b  reason: collision with root package name */
    private static final bj.c f44631b;

    /* renamed from: c  reason: collision with root package name */
    private static final bj.c f44632c;

    /* renamed from: d  reason: collision with root package name */
    private static final bj.c f44633d;

    /* renamed from: e  reason: collision with root package name */
    private static final bj.c f44634e;

    /* renamed from: f  reason: collision with root package name */
    private static final bj.c f44635f;

    /* renamed from: g  reason: collision with root package name */
    private static final bj.c f44636g;

    static {
        c.b a10 = bj.c.a("landmarkMode");
        s1 s1Var = new s1();
        s1Var.a(1);
        f44631b = a10.b(s1Var.b()).a();
        c.b a11 = bj.c.a("classificationMode");
        s1 s1Var2 = new s1();
        s1Var2.a(2);
        f44632c = a11.b(s1Var2.b()).a();
        c.b a12 = bj.c.a("performanceMode");
        s1 s1Var3 = new s1();
        s1Var3.a(3);
        f44633d = a12.b(s1Var3.b()).a();
        c.b a13 = bj.c.a("contourMode");
        s1 s1Var4 = new s1();
        s1Var4.a(4);
        f44634e = a13.b(s1Var4.b()).a();
        c.b a14 = bj.c.a("isTrackingEnabled");
        s1 s1Var5 = new s1();
        s1Var5.a(5);
        f44635f = a14.b(s1Var5.b()).a();
        c.b a15 = bj.c.a("minFaceSize");
        s1 s1Var6 = new s1();
        s1Var6.a(6);
        f44636g = a15.b(s1Var6.b()).a();
    }

    private k5() {
    }

    @Override // bj.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        n9 n9Var = (n9) obj;
        bj.e eVar = (bj.e) obj2;
        eVar.e(f44631b, n9Var.c());
        eVar.e(f44632c, n9Var.a());
        eVar.e(f44633d, n9Var.d());
        eVar.e(f44634e, n9Var.b());
        eVar.e(f44635f, n9Var.e());
        eVar.e(f44636g, n9Var.f());
    }
}
