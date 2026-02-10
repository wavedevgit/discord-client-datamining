package og;

import zi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class p7 implements zi.d {

    /* renamed from: a  reason: collision with root package name */
    static final p7 f41239a = new p7();

    /* renamed from: b  reason: collision with root package name */
    private static final zi.c f41240b;

    /* renamed from: c  reason: collision with root package name */
    private static final zi.c f41241c;

    /* renamed from: d  reason: collision with root package name */
    private static final zi.c f41242d;

    /* renamed from: e  reason: collision with root package name */
    private static final zi.c f41243e;

    /* renamed from: f  reason: collision with root package name */
    private static final zi.c f41244f;

    /* renamed from: g  reason: collision with root package name */
    private static final zi.c f41245g;

    static {
        c.b a10 = zi.c.a("maxMs");
        l2 l2Var = new l2();
        l2Var.a(1);
        f41240b = a10.b(l2Var.b()).a();
        c.b a11 = zi.c.a("minMs");
        l2 l2Var2 = new l2();
        l2Var2.a(2);
        f41241c = a11.b(l2Var2.b()).a();
        c.b a12 = zi.c.a("avgMs");
        l2 l2Var3 = new l2();
        l2Var3.a(3);
        f41242d = a12.b(l2Var3.b()).a();
        c.b a13 = zi.c.a("firstQuartileMs");
        l2 l2Var4 = new l2();
        l2Var4.a(4);
        f41243e = a13.b(l2Var4.b()).a();
        c.b a14 = zi.c.a("medianMs");
        l2 l2Var5 = new l2();
        l2Var5.a(5);
        f41244f = a14.b(l2Var5.b()).a();
        c.b a15 = zi.c.a("thirdQuartileMs");
        l2 l2Var6 = new l2();
        l2Var6.a(6);
        f41245g = a15.b(l2Var6.b()).a();
    }

    private p7() {
    }

    @Override // zi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        yd ydVar = (yd) obj;
        zi.e eVar = (zi.e) obj2;
        eVar.d(f41240b, ydVar.c());
        eVar.d(f41241c, ydVar.e());
        eVar.d(f41242d, ydVar.a());
        eVar.d(f41243e, ydVar.b());
        eVar.d(f41244f, ydVar.d());
        eVar.d(f41245g, ydVar.f());
    }
}
