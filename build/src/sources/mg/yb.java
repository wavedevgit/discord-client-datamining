package mg;

import ui.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class yb implements ui.d {

    /* renamed from: a  reason: collision with root package name */
    static final yb f38856a = new yb();

    /* renamed from: b  reason: collision with root package name */
    private static final ui.c f38857b;

    /* renamed from: c  reason: collision with root package name */
    private static final ui.c f38858c;

    /* renamed from: d  reason: collision with root package name */
    private static final ui.c f38859d;

    /* renamed from: e  reason: collision with root package name */
    private static final ui.c f38860e;

    /* renamed from: f  reason: collision with root package name */
    private static final ui.c f38861f;

    static {
        c.b a10 = ui.c.a("xMin");
        l2 l2Var = new l2();
        l2Var.a(1);
        f38857b = a10.b(l2Var.b()).a();
        c.b a11 = ui.c.a("yMin");
        l2 l2Var2 = new l2();
        l2Var2.a(2);
        f38858c = a11.b(l2Var2.b()).a();
        c.b a12 = ui.c.a("xMax");
        l2 l2Var3 = new l2();
        l2Var3.a(3);
        f38859d = a12.b(l2Var3.b()).a();
        c.b a13 = ui.c.a("yMax");
        l2 l2Var4 = new l2();
        l2Var4.a(4);
        f38860e = a13.b(l2Var4.b()).a();
        c.b a14 = ui.c.a("confidenceScore");
        l2 l2Var5 = new l2();
        l2Var5.a(5);
        f38861f = a14.b(l2Var5.b()).a();
    }

    private yb() {
    }

    @Override // ui.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        oi oiVar = (oi) obj;
        ui.e eVar = (ui.e) obj2;
        eVar.b(f38857b, oiVar.c());
        eVar.b(f38858c, oiVar.e());
        eVar.b(f38859d, oiVar.b());
        eVar.b(f38860e, oiVar.d());
        eVar.b(f38861f, oiVar.a());
    }
}
