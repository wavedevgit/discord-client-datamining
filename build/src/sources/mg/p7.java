package mg;

import xi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class p7 implements xi.d {

    /* renamed from: a  reason: collision with root package name */
    static final p7 f38003a = new p7();

    /* renamed from: b  reason: collision with root package name */
    private static final xi.c f38004b;

    /* renamed from: c  reason: collision with root package name */
    private static final xi.c f38005c;

    /* renamed from: d  reason: collision with root package name */
    private static final xi.c f38006d;

    /* renamed from: e  reason: collision with root package name */
    private static final xi.c f38007e;

    /* renamed from: f  reason: collision with root package name */
    private static final xi.c f38008f;

    /* renamed from: g  reason: collision with root package name */
    private static final xi.c f38009g;

    static {
        c.b a10 = xi.c.a("maxMs");
        l2 l2Var = new l2();
        l2Var.a(1);
        f38004b = a10.b(l2Var.b()).a();
        c.b a11 = xi.c.a("minMs");
        l2 l2Var2 = new l2();
        l2Var2.a(2);
        f38005c = a11.b(l2Var2.b()).a();
        c.b a12 = xi.c.a("avgMs");
        l2 l2Var3 = new l2();
        l2Var3.a(3);
        f38006d = a12.b(l2Var3.b()).a();
        c.b a13 = xi.c.a("firstQuartileMs");
        l2 l2Var4 = new l2();
        l2Var4.a(4);
        f38007e = a13.b(l2Var4.b()).a();
        c.b a14 = xi.c.a("medianMs");
        l2 l2Var5 = new l2();
        l2Var5.a(5);
        f38008f = a14.b(l2Var5.b()).a();
        c.b a15 = xi.c.a("thirdQuartileMs");
        l2 l2Var6 = new l2();
        l2Var6.a(6);
        f38009g = a15.b(l2Var6.b()).a();
    }

    private p7() {
    }

    @Override // xi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        yd ydVar = (yd) obj;
        xi.e eVar = (xi.e) obj2;
        eVar.d(f38004b, ydVar.c());
        eVar.d(f38005c, ydVar.e());
        eVar.d(f38006d, ydVar.a());
        eVar.d(f38007e, ydVar.b());
        eVar.d(f38008f, ydVar.d());
        eVar.d(f38009g, ydVar.f());
    }
}
