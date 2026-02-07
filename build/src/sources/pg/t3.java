package pg;

import yi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class t3 implements yi.d {

    /* renamed from: a  reason: collision with root package name */
    static final t3 f44784a = new t3();

    /* renamed from: b  reason: collision with root package name */
    private static final yi.c f44785b;

    /* renamed from: c  reason: collision with root package name */
    private static final yi.c f44786c;

    /* renamed from: d  reason: collision with root package name */
    private static final yi.c f44787d;

    /* renamed from: e  reason: collision with root package name */
    private static final yi.c f44788e;

    /* renamed from: f  reason: collision with root package name */
    private static final yi.c f44789f;

    /* renamed from: g  reason: collision with root package name */
    private static final yi.c f44790g;

    static {
        c.b a10 = yi.c.a("errorCode");
        s1 s1Var = new s1();
        s1Var.a(1);
        f44785b = a10.b(s1Var.b()).a();
        c.b a11 = yi.c.a("isColdCall");
        s1 s1Var2 = new s1();
        s1Var2.a(2);
        f44786c = a11.b(s1Var2.b()).a();
        c.b a12 = yi.c.a("imageInfo");
        s1 s1Var3 = new s1();
        s1Var3.a(3);
        f44787d = a12.b(s1Var3.b()).a();
        c.b a13 = yi.c.a("detectorOptions");
        s1 s1Var4 = new s1();
        s1Var4.a(4);
        f44788e = a13.b(s1Var4.b()).a();
        c.b a14 = yi.c.a("contourDetectedFaces");
        s1 s1Var5 = new s1();
        s1Var5.a(5);
        f44789f = a14.b(s1Var5.b()).a();
        c.b a15 = yi.c.a("nonContourDetectedFaces");
        s1 s1Var6 = new s1();
        s1Var6.a(6);
        f44790g = a15.b(s1Var6.b()).a();
    }

    private t3() {
    }

    @Override // yi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        q2 q2Var = (q2) obj;
        yi.e eVar = (yi.e) obj2;
        eVar.a(f44785b, q2Var.b());
        eVar.a(f44786c, q2Var.c());
        eVar.a(f44787d, null);
        eVar.a(f44788e, q2Var.a());
        eVar.a(f44789f, q2Var.d());
        eVar.a(f44790g, q2Var.e());
    }
}
