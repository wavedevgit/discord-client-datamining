package og;

import bj.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class w4 implements bj.d {

    /* renamed from: a  reason: collision with root package name */
    static final w4 f39757a = new w4();

    /* renamed from: b  reason: collision with root package name */
    private static final bj.c f39758b;

    /* renamed from: c  reason: collision with root package name */
    private static final bj.c f39759c;

    /* renamed from: d  reason: collision with root package name */
    private static final bj.c f39760d;

    static {
        c.b a10 = bj.c.a("logEventKey");
        l2 l2Var = new l2();
        l2Var.a(1);
        f39758b = a10.b(l2Var.b()).a();
        c.b a11 = bj.c.a("eventCount");
        l2 l2Var2 = new l2();
        l2Var2.a(2);
        f39759c = a11.b(l2Var2.b()).a();
        c.b a12 = bj.c.a("inferenceDurationStats");
        l2 l2Var3 = new l2();
        l2Var3.a(3);
        f39760d = a12.b(l2Var3.b()).a();
    }

    private w4() {
    }

    @Override // bj.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        g3 g3Var = (g3) obj;
        bj.e eVar = (bj.e) obj2;
        eVar.e(f39758b, g3Var.a());
        eVar.e(f39759c, g3Var.c());
        eVar.e(f39760d, g3Var.b());
    }
}
