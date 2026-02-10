package og;

import zi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class yb implements zi.d {

    /* renamed from: a  reason: collision with root package name */
    static final yb f41531a = new yb();

    /* renamed from: b  reason: collision with root package name */
    private static final zi.c f41532b;

    /* renamed from: c  reason: collision with root package name */
    private static final zi.c f41533c;

    /* renamed from: d  reason: collision with root package name */
    private static final zi.c f41534d;

    /* renamed from: e  reason: collision with root package name */
    private static final zi.c f41535e;

    /* renamed from: f  reason: collision with root package name */
    private static final zi.c f41536f;

    static {
        c.b a10 = zi.c.a("xMin");
        l2 l2Var = new l2();
        l2Var.a(1);
        f41532b = a10.b(l2Var.b()).a();
        c.b a11 = zi.c.a("yMin");
        l2 l2Var2 = new l2();
        l2Var2.a(2);
        f41533c = a11.b(l2Var2.b()).a();
        c.b a12 = zi.c.a("xMax");
        l2 l2Var3 = new l2();
        l2Var3.a(3);
        f41534d = a12.b(l2Var3.b()).a();
        c.b a13 = zi.c.a("yMax");
        l2 l2Var4 = new l2();
        l2Var4.a(4);
        f41535e = a13.b(l2Var4.b()).a();
        c.b a14 = zi.c.a("confidenceScore");
        l2 l2Var5 = new l2();
        l2Var5.a(5);
        f41536f = a14.b(l2Var5.b()).a();
    }

    private yb() {
    }

    @Override // zi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        oi oiVar = (oi) obj;
        zi.e eVar = (zi.e) obj2;
        eVar.d(f41532b, oiVar.c());
        eVar.d(f41533c, oiVar.e());
        eVar.d(f41534d, oiVar.b());
        eVar.d(f41535e, oiVar.d());
        eVar.d(f41536f, oiVar.a());
    }
}
