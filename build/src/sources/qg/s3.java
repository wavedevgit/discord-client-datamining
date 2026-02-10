package qg;

import zi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class s3 implements zi.d {

    /* renamed from: a  reason: collision with root package name */
    static final s3 f46265a = new s3();

    /* renamed from: b  reason: collision with root package name */
    private static final zi.c f46266b;

    /* renamed from: c  reason: collision with root package name */
    private static final zi.c f46267c;

    /* renamed from: d  reason: collision with root package name */
    private static final zi.c f46268d;

    static {
        c.b a10 = zi.c.a("logEventKey");
        s1 s1Var = new s1();
        s1Var.a(1);
        f46266b = a10.b(s1Var.b()).a();
        c.b a11 = zi.c.a("eventCount");
        s1 s1Var2 = new s1();
        s1Var2.a(2);
        f46267c = a11.b(s1Var2.b()).a();
        c.b a12 = zi.c.a("inferenceDurationStats");
        s1 s1Var3 = new s1();
        s1Var3.a(3);
        f46268d = a12.b(s1Var3.b()).a();
    }

    private s3() {
    }

    @Override // zi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        s2 s2Var = (s2) obj;
        zi.e eVar = (zi.e) obj2;
        eVar.d(f46266b, s2Var.a());
        eVar.d(f46267c, s2Var.c());
        eVar.d(f46268d, s2Var.b());
    }
}
