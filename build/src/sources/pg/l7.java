package pg;

import ui.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class l7 implements ui.d {

    /* renamed from: a  reason: collision with root package name */
    static final l7 f45600a = new l7();

    /* renamed from: b  reason: collision with root package name */
    private static final ui.c f45601b;

    /* renamed from: c  reason: collision with root package name */
    private static final ui.c f45602c;

    /* renamed from: d  reason: collision with root package name */
    private static final ui.c f45603d;

    /* renamed from: e  reason: collision with root package name */
    private static final ui.c f45604e;

    /* renamed from: f  reason: collision with root package name */
    private static final ui.c f45605f;

    /* renamed from: g  reason: collision with root package name */
    private static final ui.c f45606g;

    /* renamed from: h  reason: collision with root package name */
    private static final ui.c f45607h;

    /* renamed from: i  reason: collision with root package name */
    private static final ui.c f45608i;

    /* renamed from: j  reason: collision with root package name */
    private static final ui.c f45609j;

    /* renamed from: k  reason: collision with root package name */
    private static final ui.c f45610k;

    static {
        c.b a10 = ui.c.a("durationMs");
        v1 v1Var = new v1();
        v1Var.a(1);
        f45601b = a10.b(v1Var.b()).a();
        c.b a11 = ui.c.a("errorCode");
        v1 v1Var2 = new v1();
        v1Var2.a(2);
        f45602c = a11.b(v1Var2.b()).a();
        c.b a12 = ui.c.a("isColdCall");
        v1 v1Var3 = new v1();
        v1Var3.a(3);
        f45603d = a12.b(v1Var3.b()).a();
        c.b a13 = ui.c.a("autoManageModelOnBackground");
        v1 v1Var4 = new v1();
        v1Var4.a(4);
        f45604e = a13.b(v1Var4.b()).a();
        c.b a14 = ui.c.a("autoManageModelOnLowMemory");
        v1 v1Var5 = new v1();
        v1Var5.a(5);
        f45605f = a14.b(v1Var5.b()).a();
        c.b a15 = ui.c.a("isNnApiEnabled");
        v1 v1Var6 = new v1();
        v1Var6.a(6);
        f45606g = a15.b(v1Var6.b()).a();
        c.b a16 = ui.c.a("eventsCount");
        v1 v1Var7 = new v1();
        v1Var7.a(7);
        f45607h = a16.b(v1Var7.b()).a();
        c.b a17 = ui.c.a("otherErrors");
        v1 v1Var8 = new v1();
        v1Var8.a(8);
        f45608i = a17.b(v1Var8.b()).a();
        c.b a18 = ui.c.a("remoteConfigValueForAcceleration");
        v1 v1Var9 = new v1();
        v1Var9.a(9);
        f45609j = a18.b(v1Var9.b()).a();
        c.b a19 = ui.c.a("isAccelerated");
        v1 v1Var10 = new v1();
        v1Var10.a(10);
        f45610k = a19.b(v1Var10.b()).a();
    }

    private l7() {
    }

    @Override // ui.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        xd xdVar = (xd) obj;
        ui.e eVar = (ui.e) obj2;
        eVar.b(f45601b, xdVar.e());
        eVar.b(f45602c, xdVar.a());
        eVar.b(f45603d, xdVar.d());
        eVar.b(f45604e, xdVar.b());
        eVar.b(f45605f, xdVar.c());
        eVar.b(f45606g, null);
        eVar.b(f45607h, null);
        eVar.b(f45608i, null);
        eVar.b(f45609j, null);
        eVar.b(f45610k, null);
    }
}
