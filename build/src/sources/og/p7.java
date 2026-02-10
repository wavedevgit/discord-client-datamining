package og;

import bj.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class p7 implements bj.d {

    /* renamed from: a  reason: collision with root package name */
    static final p7 f39565a = new p7();

    /* renamed from: b  reason: collision with root package name */
    private static final bj.c f39566b;

    /* renamed from: c  reason: collision with root package name */
    private static final bj.c f39567c;

    /* renamed from: d  reason: collision with root package name */
    private static final bj.c f39568d;

    /* renamed from: e  reason: collision with root package name */
    private static final bj.c f39569e;

    /* renamed from: f  reason: collision with root package name */
    private static final bj.c f39570f;

    /* renamed from: g  reason: collision with root package name */
    private static final bj.c f39571g;

    static {
        c.b a10 = bj.c.a("maxMs");
        l2 l2Var = new l2();
        l2Var.a(1);
        f39566b = a10.b(l2Var.b()).a();
        c.b a11 = bj.c.a("minMs");
        l2 l2Var2 = new l2();
        l2Var2.a(2);
        f39567c = a11.b(l2Var2.b()).a();
        c.b a12 = bj.c.a("avgMs");
        l2 l2Var3 = new l2();
        l2Var3.a(3);
        f39568d = a12.b(l2Var3.b()).a();
        c.b a13 = bj.c.a("firstQuartileMs");
        l2 l2Var4 = new l2();
        l2Var4.a(4);
        f39569e = a13.b(l2Var4.b()).a();
        c.b a14 = bj.c.a("medianMs");
        l2 l2Var5 = new l2();
        l2Var5.a(5);
        f39570f = a14.b(l2Var5.b()).a();
        c.b a15 = bj.c.a("thirdQuartileMs");
        l2 l2Var6 = new l2();
        l2Var6.a(6);
        f39571g = a15.b(l2Var6.b()).a();
    }

    private p7() {
    }

    @Override // bj.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        yd ydVar = (yd) obj;
        bj.e eVar = (bj.e) obj2;
        eVar.e(f39566b, ydVar.c());
        eVar.e(f39567c, ydVar.e());
        eVar.e(f39568d, ydVar.a());
        eVar.e(f39569e, ydVar.b());
        eVar.e(f39570f, ydVar.d());
        eVar.e(f39571g, ydVar.f());
    }
}
