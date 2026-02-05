package mg;

import xi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class w4 implements xi.d {

    /* renamed from: a  reason: collision with root package name */
    static final w4 f38194a = new w4();

    /* renamed from: b  reason: collision with root package name */
    private static final xi.c f38195b;

    /* renamed from: c  reason: collision with root package name */
    private static final xi.c f38196c;

    /* renamed from: d  reason: collision with root package name */
    private static final xi.c f38197d;

    static {
        c.b a10 = xi.c.a("logEventKey");
        l2 l2Var = new l2();
        l2Var.a(1);
        f38195b = a10.b(l2Var.b()).a();
        c.b a11 = xi.c.a("eventCount");
        l2 l2Var2 = new l2();
        l2Var2.a(2);
        f38196c = a11.b(l2Var2.b()).a();
        c.b a12 = xi.c.a("inferenceDurationStats");
        l2 l2Var3 = new l2();
        l2Var3.a(3);
        f38197d = a12.b(l2Var3.b()).a();
    }

    private w4() {
    }

    @Override // xi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        g3 g3Var = (g3) obj;
        xi.e eVar = (xi.e) obj2;
        eVar.d(f38195b, g3Var.a());
        eVar.d(f38196c, g3Var.c());
        eVar.d(f38197d, g3Var.b());
    }
}
