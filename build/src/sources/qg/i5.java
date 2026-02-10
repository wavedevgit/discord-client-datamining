package qg;

import zi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i5 implements zi.d {

    /* renamed from: a  reason: collision with root package name */
    static final i5 f45891a = new i5();

    /* renamed from: b  reason: collision with root package name */
    private static final zi.c f45892b;

    /* renamed from: c  reason: collision with root package name */
    private static final zi.c f45893c;

    /* renamed from: d  reason: collision with root package name */
    private static final zi.c f45894d;

    /* renamed from: e  reason: collision with root package name */
    private static final zi.c f45895e;

    /* renamed from: f  reason: collision with root package name */
    private static final zi.c f45896f;

    /* renamed from: g  reason: collision with root package name */
    private static final zi.c f45897g;

    static {
        c.b a10 = zi.c.a("maxMs");
        s1 s1Var = new s1();
        s1Var.a(1);
        f45892b = a10.b(s1Var.b()).a();
        c.b a11 = zi.c.a("minMs");
        s1 s1Var2 = new s1();
        s1Var2.a(2);
        f45893c = a11.b(s1Var2.b()).a();
        c.b a12 = zi.c.a("avgMs");
        s1 s1Var3 = new s1();
        s1Var3.a(3);
        f45894d = a12.b(s1Var3.b()).a();
        c.b a13 = zi.c.a("firstQuartileMs");
        s1 s1Var4 = new s1();
        s1Var4.a(4);
        f45895e = a13.b(s1Var4.b()).a();
        c.b a14 = zi.c.a("medianMs");
        s1 s1Var5 = new s1();
        s1Var5.a(5);
        f45896f = a14.b(s1Var5.b()).a();
        c.b a15 = zi.c.a("thirdQuartileMs");
        s1 s1Var6 = new s1();
        s1Var6.a(6);
        f45897g = a15.b(s1Var6.b()).a();
    }

    private i5() {
    }

    @Override // zi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        e9 e9Var = (e9) obj;
        zi.e eVar = (zi.e) obj2;
        eVar.d(f45892b, e9Var.c());
        eVar.d(f45893c, e9Var.e());
        eVar.d(f45894d, e9Var.a());
        eVar.d(f45895e, e9Var.b());
        eVar.d(f45896f, e9Var.d());
        eVar.d(f45897g, e9Var.f());
    }
}
