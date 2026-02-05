package og;

import xi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class s3 implements xi.d {

    /* renamed from: a  reason: collision with root package name */
    static final s3 f43361a = new s3();

    /* renamed from: b  reason: collision with root package name */
    private static final xi.c f43362b;

    /* renamed from: c  reason: collision with root package name */
    private static final xi.c f43363c;

    /* renamed from: d  reason: collision with root package name */
    private static final xi.c f43364d;

    static {
        c.b a10 = xi.c.a("logEventKey");
        s1 s1Var = new s1();
        s1Var.a(1);
        f43362b = a10.b(s1Var.b()).a();
        c.b a11 = xi.c.a("eventCount");
        s1 s1Var2 = new s1();
        s1Var2.a(2);
        f43363c = a11.b(s1Var2.b()).a();
        c.b a12 = xi.c.a("inferenceDurationStats");
        s1 s1Var3 = new s1();
        s1Var3.a(3);
        f43364d = a12.b(s1Var3.b()).a();
    }

    private s3() {
    }

    @Override // xi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        s2 s2Var = (s2) obj;
        xi.e eVar = (xi.e) obj2;
        eVar.d(f43362b, s2Var.a());
        eVar.d(f43363c, s2Var.c());
        eVar.d(f43364d, s2Var.b());
    }
}
