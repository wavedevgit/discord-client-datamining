package mg;

import ui.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class w4 implements ui.d {

    /* renamed from: a  reason: collision with root package name */
    static final w4 f38532a = new w4();

    /* renamed from: b  reason: collision with root package name */
    private static final ui.c f38533b;

    /* renamed from: c  reason: collision with root package name */
    private static final ui.c f38534c;

    /* renamed from: d  reason: collision with root package name */
    private static final ui.c f38535d;

    static {
        c.b a10 = ui.c.a("logEventKey");
        l2 l2Var = new l2();
        l2Var.a(1);
        f38533b = a10.b(l2Var.b()).a();
        c.b a11 = ui.c.a("eventCount");
        l2 l2Var2 = new l2();
        l2Var2.a(2);
        f38534c = a11.b(l2Var2.b()).a();
        c.b a12 = ui.c.a("inferenceDurationStats");
        l2 l2Var3 = new l2();
        l2Var3.a(3);
        f38535d = a12.b(l2Var3.b()).a();
    }

    private w4() {
    }

    @Override // ui.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        g3 g3Var = (g3) obj;
        ui.e eVar = (ui.e) obj2;
        eVar.b(f38533b, g3Var.a());
        eVar.b(f38534c, g3Var.c());
        eVar.b(f38535d, g3Var.b());
    }
}
