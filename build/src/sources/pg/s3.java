package pg;

import yi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class s3 implements yi.d {

    /* renamed from: a  reason: collision with root package name */
    static final s3 f44703a = new s3();

    /* renamed from: b  reason: collision with root package name */
    private static final yi.c f44704b;

    /* renamed from: c  reason: collision with root package name */
    private static final yi.c f44705c;

    /* renamed from: d  reason: collision with root package name */
    private static final yi.c f44706d;

    static {
        c.b a10 = yi.c.a("logEventKey");
        s1 s1Var = new s1();
        s1Var.a(1);
        f44704b = a10.b(s1Var.b()).a();
        c.b a11 = yi.c.a("eventCount");
        s1 s1Var2 = new s1();
        s1Var2.a(2);
        f44705c = a11.b(s1Var2.b()).a();
        c.b a12 = yi.c.a("inferenceDurationStats");
        s1 s1Var3 = new s1();
        s1Var3.a(3);
        f44706d = a12.b(s1Var3.b()).a();
    }

    private s3() {
    }

    @Override // yi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        s2 s2Var = (s2) obj;
        yi.e eVar = (yi.e) obj2;
        eVar.a(f44704b, s2Var.a());
        eVar.a(f44705c, s2Var.c());
        eVar.a(f44706d, s2Var.b());
    }
}
