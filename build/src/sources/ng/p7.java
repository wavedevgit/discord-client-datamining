package ng;

import yi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class p7 implements yi.d {

    /* renamed from: a  reason: collision with root package name */
    static final p7 f40214a = new p7();

    /* renamed from: b  reason: collision with root package name */
    private static final yi.c f40215b;

    /* renamed from: c  reason: collision with root package name */
    private static final yi.c f40216c;

    /* renamed from: d  reason: collision with root package name */
    private static final yi.c f40217d;

    /* renamed from: e  reason: collision with root package name */
    private static final yi.c f40218e;

    /* renamed from: f  reason: collision with root package name */
    private static final yi.c f40219f;

    /* renamed from: g  reason: collision with root package name */
    private static final yi.c f40220g;

    static {
        c.b a10 = yi.c.a("maxMs");
        l2 l2Var = new l2();
        l2Var.a(1);
        f40215b = a10.b(l2Var.b()).a();
        c.b a11 = yi.c.a("minMs");
        l2 l2Var2 = new l2();
        l2Var2.a(2);
        f40216c = a11.b(l2Var2.b()).a();
        c.b a12 = yi.c.a("avgMs");
        l2 l2Var3 = new l2();
        l2Var3.a(3);
        f40217d = a12.b(l2Var3.b()).a();
        c.b a13 = yi.c.a("firstQuartileMs");
        l2 l2Var4 = new l2();
        l2Var4.a(4);
        f40218e = a13.b(l2Var4.b()).a();
        c.b a14 = yi.c.a("medianMs");
        l2 l2Var5 = new l2();
        l2Var5.a(5);
        f40219f = a14.b(l2Var5.b()).a();
        c.b a15 = yi.c.a("thirdQuartileMs");
        l2 l2Var6 = new l2();
        l2Var6.a(6);
        f40220g = a15.b(l2Var6.b()).a();
    }

    private p7() {
    }

    @Override // yi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        yd ydVar = (yd) obj;
        yi.e eVar = (yi.e) obj2;
        eVar.a(f40215b, ydVar.c());
        eVar.a(f40216c, ydVar.e());
        eVar.a(f40217d, ydVar.a());
        eVar.a(f40218e, ydVar.b());
        eVar.a(f40219f, ydVar.d());
        eVar.a(f40220g, ydVar.f());
    }
}
