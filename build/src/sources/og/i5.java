package og;

import xi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i5 implements xi.d {

    /* renamed from: a  reason: collision with root package name */
    static final i5 f42987a = new i5();

    /* renamed from: b  reason: collision with root package name */
    private static final xi.c f42988b;

    /* renamed from: c  reason: collision with root package name */
    private static final xi.c f42989c;

    /* renamed from: d  reason: collision with root package name */
    private static final xi.c f42990d;

    /* renamed from: e  reason: collision with root package name */
    private static final xi.c f42991e;

    /* renamed from: f  reason: collision with root package name */
    private static final xi.c f42992f;

    /* renamed from: g  reason: collision with root package name */
    private static final xi.c f42993g;

    static {
        c.b a10 = xi.c.a("maxMs");
        s1 s1Var = new s1();
        s1Var.a(1);
        f42988b = a10.b(s1Var.b()).a();
        c.b a11 = xi.c.a("minMs");
        s1 s1Var2 = new s1();
        s1Var2.a(2);
        f42989c = a11.b(s1Var2.b()).a();
        c.b a12 = xi.c.a("avgMs");
        s1 s1Var3 = new s1();
        s1Var3.a(3);
        f42990d = a12.b(s1Var3.b()).a();
        c.b a13 = xi.c.a("firstQuartileMs");
        s1 s1Var4 = new s1();
        s1Var4.a(4);
        f42991e = a13.b(s1Var4.b()).a();
        c.b a14 = xi.c.a("medianMs");
        s1 s1Var5 = new s1();
        s1Var5.a(5);
        f42992f = a14.b(s1Var5.b()).a();
        c.b a15 = xi.c.a("thirdQuartileMs");
        s1 s1Var6 = new s1();
        s1Var6.a(6);
        f42993g = a15.b(s1Var6.b()).a();
    }

    private i5() {
    }

    @Override // xi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        e9 e9Var = (e9) obj;
        xi.e eVar = (xi.e) obj2;
        eVar.d(f42988b, e9Var.c());
        eVar.d(f42989c, e9Var.e());
        eVar.d(f42990d, e9Var.a());
        eVar.d(f42991e, e9Var.b());
        eVar.d(f42992f, e9Var.d());
        eVar.d(f42993g, e9Var.f());
    }
}
