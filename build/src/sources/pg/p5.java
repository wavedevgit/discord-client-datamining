package pg;

import xi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class p5 implements xi.d {

    /* renamed from: a  reason: collision with root package name */
    static final p5 f45602a = new p5();

    /* renamed from: b  reason: collision with root package name */
    private static final xi.c f45603b;

    /* renamed from: c  reason: collision with root package name */
    private static final xi.c f45604c;

    /* renamed from: d  reason: collision with root package name */
    private static final xi.c f45605d;

    static {
        c.b a10 = xi.c.a("logEventKey");
        v1 v1Var = new v1();
        v1Var.a(1);
        f45603b = a10.b(v1Var.b()).a();
        c.b a11 = xi.c.a("eventCount");
        v1 v1Var2 = new v1();
        v1Var2.a(2);
        f45604c = a11.b(v1Var2.b()).a();
        c.b a12 = xi.c.a("inferenceDurationStats");
        v1 v1Var3 = new v1();
        v1Var3.a(3);
        f45605d = a12.b(v1Var3.b()).a();
    }

    private p5() {
    }

    @Override // xi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        y3 y3Var = (y3) obj;
        xi.e eVar = (xi.e) obj2;
        eVar.d(f45603b, y3Var.a());
        eVar.d(f45604c, y3Var.c());
        eVar.d(f45605d, y3Var.b());
    }
}
