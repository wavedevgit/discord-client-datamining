package pg;

import yi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i5 implements yi.d {

    /* renamed from: a  reason: collision with root package name */
    static final i5 f44377a = new i5();

    /* renamed from: b  reason: collision with root package name */
    private static final yi.c f44378b;

    /* renamed from: c  reason: collision with root package name */
    private static final yi.c f44379c;

    /* renamed from: d  reason: collision with root package name */
    private static final yi.c f44380d;

    /* renamed from: e  reason: collision with root package name */
    private static final yi.c f44381e;

    /* renamed from: f  reason: collision with root package name */
    private static final yi.c f44382f;

    /* renamed from: g  reason: collision with root package name */
    private static final yi.c f44383g;

    static {
        c.b a10 = yi.c.a("maxMs");
        s1 s1Var = new s1();
        s1Var.a(1);
        f44378b = a10.b(s1Var.b()).a();
        c.b a11 = yi.c.a("minMs");
        s1 s1Var2 = new s1();
        s1Var2.a(2);
        f44379c = a11.b(s1Var2.b()).a();
        c.b a12 = yi.c.a("avgMs");
        s1 s1Var3 = new s1();
        s1Var3.a(3);
        f44380d = a12.b(s1Var3.b()).a();
        c.b a13 = yi.c.a("firstQuartileMs");
        s1 s1Var4 = new s1();
        s1Var4.a(4);
        f44381e = a13.b(s1Var4.b()).a();
        c.b a14 = yi.c.a("medianMs");
        s1 s1Var5 = new s1();
        s1Var5.a(5);
        f44382f = a14.b(s1Var5.b()).a();
        c.b a15 = yi.c.a("thirdQuartileMs");
        s1 s1Var6 = new s1();
        s1Var6.a(6);
        f44383g = a15.b(s1Var6.b()).a();
    }

    private i5() {
    }

    @Override // yi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        e9 e9Var = (e9) obj;
        yi.e eVar = (yi.e) obj2;
        eVar.a(f44378b, e9Var.c());
        eVar.a(f44379c, e9Var.e());
        eVar.a(f44380d, e9Var.a());
        eVar.a(f44381e, e9Var.b());
        eVar.a(f44382f, e9Var.d());
        eVar.a(f44383g, e9Var.f());
    }
}
