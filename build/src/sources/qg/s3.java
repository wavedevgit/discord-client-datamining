package qg;

import bj.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class s3 implements bj.d {

    /* renamed from: a  reason: collision with root package name */
    static final s3 f44933a = new s3();

    /* renamed from: b  reason: collision with root package name */
    private static final bj.c f44934b;

    /* renamed from: c  reason: collision with root package name */
    private static final bj.c f44935c;

    /* renamed from: d  reason: collision with root package name */
    private static final bj.c f44936d;

    static {
        c.b a10 = bj.c.a("logEventKey");
        s1 s1Var = new s1();
        s1Var.a(1);
        f44934b = a10.b(s1Var.b()).a();
        c.b a11 = bj.c.a("eventCount");
        s1 s1Var2 = new s1();
        s1Var2.a(2);
        f44935c = a11.b(s1Var2.b()).a();
        c.b a12 = bj.c.a("inferenceDurationStats");
        s1 s1Var3 = new s1();
        s1Var3.a(3);
        f44936d = a12.b(s1Var3.b()).a();
    }

    private s3() {
    }

    @Override // bj.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        s2 s2Var = (s2) obj;
        bj.e eVar = (bj.e) obj2;
        eVar.e(f44934b, s2Var.a());
        eVar.e(f44935c, s2Var.c());
        eVar.e(f44936d, s2Var.b());
    }
}
