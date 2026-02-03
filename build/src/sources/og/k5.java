package og;

import ui.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class k5 implements ui.d {

    /* renamed from: a  reason: collision with root package name */
    static final k5 f43352a = new k5();

    /* renamed from: b  reason: collision with root package name */
    private static final ui.c f43353b;

    /* renamed from: c  reason: collision with root package name */
    private static final ui.c f43354c;

    /* renamed from: d  reason: collision with root package name */
    private static final ui.c f43355d;

    /* renamed from: e  reason: collision with root package name */
    private static final ui.c f43356e;

    /* renamed from: f  reason: collision with root package name */
    private static final ui.c f43357f;

    /* renamed from: g  reason: collision with root package name */
    private static final ui.c f43358g;

    static {
        c.b a10 = ui.c.a("landmarkMode");
        s1 s1Var = new s1();
        s1Var.a(1);
        f43353b = a10.b(s1Var.b()).a();
        c.b a11 = ui.c.a("classificationMode");
        s1 s1Var2 = new s1();
        s1Var2.a(2);
        f43354c = a11.b(s1Var2.b()).a();
        c.b a12 = ui.c.a("performanceMode");
        s1 s1Var3 = new s1();
        s1Var3.a(3);
        f43355d = a12.b(s1Var3.b()).a();
        c.b a13 = ui.c.a("contourMode");
        s1 s1Var4 = new s1();
        s1Var4.a(4);
        f43356e = a13.b(s1Var4.b()).a();
        c.b a14 = ui.c.a("isTrackingEnabled");
        s1 s1Var5 = new s1();
        s1Var5.a(5);
        f43357f = a14.b(s1Var5.b()).a();
        c.b a15 = ui.c.a("minFaceSize");
        s1 s1Var6 = new s1();
        s1Var6.a(6);
        f43358g = a15.b(s1Var6.b()).a();
    }

    private k5() {
    }

    @Override // ui.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        n9 n9Var = (n9) obj;
        ui.e eVar = (ui.e) obj2;
        eVar.b(f43353b, n9Var.c());
        eVar.b(f43354c, n9Var.a());
        eVar.b(f43355d, n9Var.d());
        eVar.b(f43356e, n9Var.b());
        eVar.b(f43357f, n9Var.e());
        eVar.b(f43358g, n9Var.f());
    }
}
