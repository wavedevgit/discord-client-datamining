package og;

import bj.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class yb implements bj.d {

    /* renamed from: a  reason: collision with root package name */
    static final yb f39858a = new yb();

    /* renamed from: b  reason: collision with root package name */
    private static final bj.c f39859b;

    /* renamed from: c  reason: collision with root package name */
    private static final bj.c f39860c;

    /* renamed from: d  reason: collision with root package name */
    private static final bj.c f39861d;

    /* renamed from: e  reason: collision with root package name */
    private static final bj.c f39862e;

    /* renamed from: f  reason: collision with root package name */
    private static final bj.c f39863f;

    static {
        c.b a10 = bj.c.a("xMin");
        l2 l2Var = new l2();
        l2Var.a(1);
        f39859b = a10.b(l2Var.b()).a();
        c.b a11 = bj.c.a("yMin");
        l2 l2Var2 = new l2();
        l2Var2.a(2);
        f39860c = a11.b(l2Var2.b()).a();
        c.b a12 = bj.c.a("xMax");
        l2 l2Var3 = new l2();
        l2Var3.a(3);
        f39861d = a12.b(l2Var3.b()).a();
        c.b a13 = bj.c.a("yMax");
        l2 l2Var4 = new l2();
        l2Var4.a(4);
        f39862e = a13.b(l2Var4.b()).a();
        c.b a14 = bj.c.a("confidenceScore");
        l2 l2Var5 = new l2();
        l2Var5.a(5);
        f39863f = a14.b(l2Var5.b()).a();
    }

    private yb() {
    }

    @Override // bj.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        oi oiVar = (oi) obj;
        bj.e eVar = (bj.e) obj2;
        eVar.e(f39859b, oiVar.c());
        eVar.e(f39860c, oiVar.e());
        eVar.e(f39861d, oiVar.b());
        eVar.e(f39862e, oiVar.d());
        eVar.e(f39863f, oiVar.a());
    }
}
