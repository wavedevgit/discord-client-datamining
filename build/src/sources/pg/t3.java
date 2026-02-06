package pg;

import yi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class t3 implements yi.d {

    /* renamed from: a  reason: collision with root package name */
    static final t3 f44736a = new t3();

    /* renamed from: b  reason: collision with root package name */
    private static final yi.c f44737b;

    /* renamed from: c  reason: collision with root package name */
    private static final yi.c f44738c;

    /* renamed from: d  reason: collision with root package name */
    private static final yi.c f44739d;

    /* renamed from: e  reason: collision with root package name */
    private static final yi.c f44740e;

    /* renamed from: f  reason: collision with root package name */
    private static final yi.c f44741f;

    /* renamed from: g  reason: collision with root package name */
    private static final yi.c f44742g;

    static {
        c.b a10 = yi.c.a("errorCode");
        s1 s1Var = new s1();
        s1Var.a(1);
        f44737b = a10.b(s1Var.b()).a();
        c.b a11 = yi.c.a("isColdCall");
        s1 s1Var2 = new s1();
        s1Var2.a(2);
        f44738c = a11.b(s1Var2.b()).a();
        c.b a12 = yi.c.a("imageInfo");
        s1 s1Var3 = new s1();
        s1Var3.a(3);
        f44739d = a12.b(s1Var3.b()).a();
        c.b a13 = yi.c.a("detectorOptions");
        s1 s1Var4 = new s1();
        s1Var4.a(4);
        f44740e = a13.b(s1Var4.b()).a();
        c.b a14 = yi.c.a("contourDetectedFaces");
        s1 s1Var5 = new s1();
        s1Var5.a(5);
        f44741f = a14.b(s1Var5.b()).a();
        c.b a15 = yi.c.a("nonContourDetectedFaces");
        s1 s1Var6 = new s1();
        s1Var6.a(6);
        f44742g = a15.b(s1Var6.b()).a();
    }

    private t3() {
    }

    @Override // yi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        q2 q2Var = (q2) obj;
        yi.e eVar = (yi.e) obj2;
        eVar.a(f44737b, q2Var.b());
        eVar.a(f44738c, q2Var.c());
        eVar.a(f44739d, null);
        eVar.a(f44740e, q2Var.a());
        eVar.a(f44741f, q2Var.d());
        eVar.a(f44742g, q2Var.e());
    }
}
