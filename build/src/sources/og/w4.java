package og;

import zi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class w4 implements zi.d {

    /* renamed from: a  reason: collision with root package name */
    static final w4 f41430a = new w4();

    /* renamed from: b  reason: collision with root package name */
    private static final zi.c f41431b;

    /* renamed from: c  reason: collision with root package name */
    private static final zi.c f41432c;

    /* renamed from: d  reason: collision with root package name */
    private static final zi.c f41433d;

    static {
        c.b a10 = zi.c.a("logEventKey");
        l2 l2Var = new l2();
        l2Var.a(1);
        f41431b = a10.b(l2Var.b()).a();
        c.b a11 = zi.c.a("eventCount");
        l2 l2Var2 = new l2();
        l2Var2.a(2);
        f41432c = a11.b(l2Var2.b()).a();
        c.b a12 = zi.c.a("inferenceDurationStats");
        l2 l2Var3 = new l2();
        l2Var3.a(3);
        f41433d = a12.b(l2Var3.b()).a();
    }

    private w4() {
    }

    @Override // zi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        g3 g3Var = (g3) obj;
        zi.e eVar = (zi.e) obj2;
        eVar.d(f41431b, g3Var.a());
        eVar.d(f41432c, g3Var.c());
        eVar.d(f41433d, g3Var.b());
    }
}
