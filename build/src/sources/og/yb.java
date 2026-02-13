package og;

import bj.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class yb implements bj.d {

    /* renamed from: a  reason: collision with root package name */
    static final yb f40426a = new yb();

    /* renamed from: b  reason: collision with root package name */
    private static final bj.c f40427b;

    /* renamed from: c  reason: collision with root package name */
    private static final bj.c f40428c;

    /* renamed from: d  reason: collision with root package name */
    private static final bj.c f40429d;

    /* renamed from: e  reason: collision with root package name */
    private static final bj.c f40430e;

    /* renamed from: f  reason: collision with root package name */
    private static final bj.c f40431f;

    static {
        c.b a10 = bj.c.a("xMin");
        l2 l2Var = new l2();
        l2Var.a(1);
        f40427b = a10.b(l2Var.b()).a();
        c.b a11 = bj.c.a("yMin");
        l2 l2Var2 = new l2();
        l2Var2.a(2);
        f40428c = a11.b(l2Var2.b()).a();
        c.b a12 = bj.c.a("xMax");
        l2 l2Var3 = new l2();
        l2Var3.a(3);
        f40429d = a12.b(l2Var3.b()).a();
        c.b a13 = bj.c.a("yMax");
        l2 l2Var4 = new l2();
        l2Var4.a(4);
        f40430e = a13.b(l2Var4.b()).a();
        c.b a14 = bj.c.a("confidenceScore");
        l2 l2Var5 = new l2();
        l2Var5.a(5);
        f40431f = a14.b(l2Var5.b()).a();
    }

    private yb() {
    }

    @Override // bj.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        oi oiVar = (oi) obj;
        bj.e eVar = (bj.e) obj2;
        eVar.e(f40427b, oiVar.c());
        eVar.e(f40428c, oiVar.e());
        eVar.e(f40429d, oiVar.b());
        eVar.e(f40430e, oiVar.d());
        eVar.e(f40431f, oiVar.a());
    }
}
