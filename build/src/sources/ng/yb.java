package ng;

import yi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class yb implements yi.d {

    /* renamed from: a  reason: collision with root package name */
    static final yb f40458a = new yb();

    /* renamed from: b  reason: collision with root package name */
    private static final yi.c f40459b;

    /* renamed from: c  reason: collision with root package name */
    private static final yi.c f40460c;

    /* renamed from: d  reason: collision with root package name */
    private static final yi.c f40461d;

    /* renamed from: e  reason: collision with root package name */
    private static final yi.c f40462e;

    /* renamed from: f  reason: collision with root package name */
    private static final yi.c f40463f;

    static {
        c.b a10 = yi.c.a("xMin");
        l2 l2Var = new l2();
        l2Var.a(1);
        f40459b = a10.b(l2Var.b()).a();
        c.b a11 = yi.c.a("yMin");
        l2 l2Var2 = new l2();
        l2Var2.a(2);
        f40460c = a11.b(l2Var2.b()).a();
        c.b a12 = yi.c.a("xMax");
        l2 l2Var3 = new l2();
        l2Var3.a(3);
        f40461d = a12.b(l2Var3.b()).a();
        c.b a13 = yi.c.a("yMax");
        l2 l2Var4 = new l2();
        l2Var4.a(4);
        f40462e = a13.b(l2Var4.b()).a();
        c.b a14 = yi.c.a("confidenceScore");
        l2 l2Var5 = new l2();
        l2Var5.a(5);
        f40463f = a14.b(l2Var5.b()).a();
    }

    private yb() {
    }

    @Override // yi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        oi oiVar = (oi) obj;
        yi.e eVar = (yi.e) obj2;
        eVar.a(f40459b, oiVar.c());
        eVar.a(f40460c, oiVar.e());
        eVar.a(f40461d, oiVar.b());
        eVar.a(f40462e, oiVar.d());
        eVar.a(f40463f, oiVar.a());
    }
}
