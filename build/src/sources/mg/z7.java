package mg;

import ui.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class z7 implements ui.d {

    /* renamed from: a  reason: collision with root package name */
    static final z7 f39020a = new z7();

    /* renamed from: b  reason: collision with root package name */
    private static final ui.c f39021b;

    /* renamed from: c  reason: collision with root package name */
    private static final ui.c f39022c;

    /* renamed from: d  reason: collision with root package name */
    private static final ui.c f39023d;

    /* renamed from: e  reason: collision with root package name */
    private static final ui.c f39024e;

    /* renamed from: f  reason: collision with root package name */
    private static final ui.c f39025f;

    /* renamed from: g  reason: collision with root package name */
    private static final ui.c f39026g;

    /* renamed from: h  reason: collision with root package name */
    private static final ui.c f39027h;

    /* renamed from: i  reason: collision with root package name */
    private static final ui.c f39028i;

    /* renamed from: j  reason: collision with root package name */
    private static final ui.c f39029j;

    /* renamed from: k  reason: collision with root package name */
    private static final ui.c f39030k;

    static {
        c.b a10 = ui.c.a("durationMs");
        l2 l2Var = new l2();
        l2Var.a(1);
        f39021b = a10.b(l2Var.b()).a();
        c.b a11 = ui.c.a("errorCode");
        l2 l2Var2 = new l2();
        l2Var2.a(2);
        f39022c = a11.b(l2Var2.b()).a();
        c.b a12 = ui.c.a("isColdCall");
        l2 l2Var3 = new l2();
        l2Var3.a(3);
        f39023d = a12.b(l2Var3.b()).a();
        c.b a13 = ui.c.a("autoManageModelOnBackground");
        l2 l2Var4 = new l2();
        l2Var4.a(4);
        f39024e = a13.b(l2Var4.b()).a();
        c.b a14 = ui.c.a("autoManageModelOnLowMemory");
        l2 l2Var5 = new l2();
        l2Var5.a(5);
        f39025f = a14.b(l2Var5.b()).a();
        c.b a15 = ui.c.a("isNnApiEnabled");
        l2 l2Var6 = new l2();
        l2Var6.a(6);
        f39026g = a15.b(l2Var6.b()).a();
        c.b a16 = ui.c.a("eventsCount");
        l2 l2Var7 = new l2();
        l2Var7.a(7);
        f39027h = a16.b(l2Var7.b()).a();
        c.b a17 = ui.c.a("otherErrors");
        l2 l2Var8 = new l2();
        l2Var8.a(8);
        f39028i = a17.b(l2Var8.b()).a();
        c.b a18 = ui.c.a("remoteConfigValueForAcceleration");
        l2 l2Var9 = new l2();
        l2Var9.a(9);
        f39029j = a18.b(l2Var9.b()).a();
        c.b a19 = ui.c.a("isAccelerated");
        l2 l2Var10 = new l2();
        l2Var10.a(10);
        f39030k = a19.b(l2Var10.b()).a();
    }

    private z7() {
    }

    @Override // ui.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        le leVar = (le) obj;
        ui.e eVar = (ui.e) obj2;
        eVar.b(f39021b, leVar.e());
        eVar.b(f39022c, leVar.a());
        eVar.b(f39023d, leVar.d());
        eVar.b(f39024e, leVar.b());
        eVar.b(f39025f, leVar.c());
        eVar.b(f39026g, null);
        eVar.b(f39027h, null);
        eVar.b(f39028i, null);
        eVar.b(f39029j, null);
        eVar.b(f39030k, null);
    }
}
