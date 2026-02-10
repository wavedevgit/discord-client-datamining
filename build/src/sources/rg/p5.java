package rg;

import zi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class p5 implements zi.d {

    /* renamed from: a  reason: collision with root package name */
    static final p5 f48598a = new p5();

    /* renamed from: b  reason: collision with root package name */
    private static final zi.c f48599b;

    /* renamed from: c  reason: collision with root package name */
    private static final zi.c f48600c;

    /* renamed from: d  reason: collision with root package name */
    private static final zi.c f48601d;

    static {
        c.b a10 = zi.c.a("logEventKey");
        v1 v1Var = new v1();
        v1Var.a(1);
        f48599b = a10.b(v1Var.b()).a();
        c.b a11 = zi.c.a("eventCount");
        v1 v1Var2 = new v1();
        v1Var2.a(2);
        f48600c = a11.b(v1Var2.b()).a();
        c.b a12 = zi.c.a("inferenceDurationStats");
        v1 v1Var3 = new v1();
        v1Var3.a(3);
        f48601d = a12.b(v1Var3.b()).a();
    }

    private p5() {
    }

    @Override // zi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        y3 y3Var = (y3) obj;
        zi.e eVar = (zi.e) obj2;
        eVar.d(f48599b, y3Var.a());
        eVar.d(f48600c, y3Var.c());
        eVar.d(f48601d, y3Var.b());
    }
}
