package ng;

import yi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class w4 implements yi.d {

    /* renamed from: a  reason: collision with root package name */
    static final w4 f40357a = new w4();

    /* renamed from: b  reason: collision with root package name */
    private static final yi.c f40358b;

    /* renamed from: c  reason: collision with root package name */
    private static final yi.c f40359c;

    /* renamed from: d  reason: collision with root package name */
    private static final yi.c f40360d;

    static {
        c.b a10 = yi.c.a("logEventKey");
        l2 l2Var = new l2();
        l2Var.a(1);
        f40358b = a10.b(l2Var.b()).a();
        c.b a11 = yi.c.a("eventCount");
        l2 l2Var2 = new l2();
        l2Var2.a(2);
        f40359c = a11.b(l2Var2.b()).a();
        c.b a12 = yi.c.a("inferenceDurationStats");
        l2 l2Var3 = new l2();
        l2Var3.a(3);
        f40360d = a12.b(l2Var3.b()).a();
    }

    private w4() {
    }

    @Override // yi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        g3 g3Var = (g3) obj;
        yi.e eVar = (yi.e) obj2;
        eVar.a(f40358b, g3Var.a());
        eVar.a(f40359c, g3Var.c());
        eVar.a(f40360d, g3Var.b());
    }
}
