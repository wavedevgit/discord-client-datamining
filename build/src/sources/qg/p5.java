package qg;

import yi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class p5 implements yi.d {

    /* renamed from: a  reason: collision with root package name */
    static final p5 f47432a = new p5();

    /* renamed from: b  reason: collision with root package name */
    private static final yi.c f47433b;

    /* renamed from: c  reason: collision with root package name */
    private static final yi.c f47434c;

    /* renamed from: d  reason: collision with root package name */
    private static final yi.c f47435d;

    static {
        c.b a10 = yi.c.a("logEventKey");
        v1 v1Var = new v1();
        v1Var.a(1);
        f47433b = a10.b(v1Var.b()).a();
        c.b a11 = yi.c.a("eventCount");
        v1 v1Var2 = new v1();
        v1Var2.a(2);
        f47434c = a11.b(v1Var2.b()).a();
        c.b a12 = yi.c.a("inferenceDurationStats");
        v1 v1Var3 = new v1();
        v1Var3.a(3);
        f47435d = a12.b(v1Var3.b()).a();
    }

    private p5() {
    }

    @Override // yi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        y3 y3Var = (y3) obj;
        yi.e eVar = (yi.e) obj2;
        eVar.a(f47433b, y3Var.a());
        eVar.a(f47434c, y3Var.c());
        eVar.a(f47435d, y3Var.b());
    }
}
