package rg;

import bj.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class p5 implements bj.d {

    /* renamed from: a  reason: collision with root package name */
    static final p5 f47053a = new p5();

    /* renamed from: b  reason: collision with root package name */
    private static final bj.c f47054b;

    /* renamed from: c  reason: collision with root package name */
    private static final bj.c f47055c;

    /* renamed from: d  reason: collision with root package name */
    private static final bj.c f47056d;

    static {
        c.b a10 = bj.c.a("logEventKey");
        v1 v1Var = new v1();
        v1Var.a(1);
        f47054b = a10.b(v1Var.b()).a();
        c.b a11 = bj.c.a("eventCount");
        v1 v1Var2 = new v1();
        v1Var2.a(2);
        f47055c = a11.b(v1Var2.b()).a();
        c.b a12 = bj.c.a("inferenceDurationStats");
        v1 v1Var3 = new v1();
        v1Var3.a(3);
        f47056d = a12.b(v1Var3.b()).a();
    }

    private p5() {
    }

    @Override // bj.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        y3 y3Var = (y3) obj;
        bj.e eVar = (bj.e) obj2;
        eVar.e(f47054b, y3Var.a());
        eVar.e(f47055c, y3Var.c());
        eVar.e(f47056d, y3Var.b());
    }
}
