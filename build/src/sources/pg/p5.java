package pg;

import ui.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class p5 implements ui.d {

    /* renamed from: a  reason: collision with root package name */
    static final p5 f45624a = new p5();

    /* renamed from: b  reason: collision with root package name */
    private static final ui.c f45625b;

    /* renamed from: c  reason: collision with root package name */
    private static final ui.c f45626c;

    /* renamed from: d  reason: collision with root package name */
    private static final ui.c f45627d;

    static {
        c.b a10 = ui.c.a("logEventKey");
        v1 v1Var = new v1();
        v1Var.a(1);
        f45625b = a10.b(v1Var.b()).a();
        c.b a11 = ui.c.a("eventCount");
        v1 v1Var2 = new v1();
        v1Var2.a(2);
        f45626c = a11.b(v1Var2.b()).a();
        c.b a12 = ui.c.a("inferenceDurationStats");
        v1 v1Var3 = new v1();
        v1Var3.a(3);
        f45627d = a12.b(v1Var3.b()).a();
    }

    private p5() {
    }

    @Override // ui.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        y3 y3Var = (y3) obj;
        ui.e eVar = (ui.e) obj2;
        eVar.b(f45625b, y3Var.a());
        eVar.b(f45626c, y3Var.c());
        eVar.b(f45627d, y3Var.b());
    }
}
