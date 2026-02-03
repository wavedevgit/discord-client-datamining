package og;

import ui.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class s3 implements ui.d {

    /* renamed from: a  reason: collision with root package name */
    static final s3 f43455a = new s3();

    /* renamed from: b  reason: collision with root package name */
    private static final ui.c f43456b;

    /* renamed from: c  reason: collision with root package name */
    private static final ui.c f43457c;

    /* renamed from: d  reason: collision with root package name */
    private static final ui.c f43458d;

    static {
        c.b a10 = ui.c.a("logEventKey");
        s1 s1Var = new s1();
        s1Var.a(1);
        f43456b = a10.b(s1Var.b()).a();
        c.b a11 = ui.c.a("eventCount");
        s1 s1Var2 = new s1();
        s1Var2.a(2);
        f43457c = a11.b(s1Var2.b()).a();
        c.b a12 = ui.c.a("inferenceDurationStats");
        s1 s1Var3 = new s1();
        s1Var3.a(3);
        f43458d = a12.b(s1Var3.b()).a();
    }

    private s3() {
    }

    @Override // ui.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        s2 s2Var = (s2) obj;
        ui.e eVar = (ui.e) obj2;
        eVar.b(f43456b, s2Var.a());
        eVar.b(f43457c, s2Var.c());
        eVar.b(f43458d, s2Var.b());
    }
}
