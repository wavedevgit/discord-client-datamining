package og;

import xi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class t3 implements xi.d {

    /* renamed from: a  reason: collision with root package name */
    static final t3 f43394a = new t3();

    /* renamed from: b  reason: collision with root package name */
    private static final xi.c f43395b;

    /* renamed from: c  reason: collision with root package name */
    private static final xi.c f43396c;

    /* renamed from: d  reason: collision with root package name */
    private static final xi.c f43397d;

    /* renamed from: e  reason: collision with root package name */
    private static final xi.c f43398e;

    /* renamed from: f  reason: collision with root package name */
    private static final xi.c f43399f;

    /* renamed from: g  reason: collision with root package name */
    private static final xi.c f43400g;

    static {
        c.b a10 = xi.c.a("errorCode");
        s1 s1Var = new s1();
        s1Var.a(1);
        f43395b = a10.b(s1Var.b()).a();
        c.b a11 = xi.c.a("isColdCall");
        s1 s1Var2 = new s1();
        s1Var2.a(2);
        f43396c = a11.b(s1Var2.b()).a();
        c.b a12 = xi.c.a("imageInfo");
        s1 s1Var3 = new s1();
        s1Var3.a(3);
        f43397d = a12.b(s1Var3.b()).a();
        c.b a13 = xi.c.a("detectorOptions");
        s1 s1Var4 = new s1();
        s1Var4.a(4);
        f43398e = a13.b(s1Var4.b()).a();
        c.b a14 = xi.c.a("contourDetectedFaces");
        s1 s1Var5 = new s1();
        s1Var5.a(5);
        f43399f = a14.b(s1Var5.b()).a();
        c.b a15 = xi.c.a("nonContourDetectedFaces");
        s1 s1Var6 = new s1();
        s1Var6.a(6);
        f43400g = a15.b(s1Var6.b()).a();
    }

    private t3() {
    }

    @Override // xi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        q2 q2Var = (q2) obj;
        xi.e eVar = (xi.e) obj2;
        eVar.d(f43395b, q2Var.b());
        eVar.d(f43396c, q2Var.c());
        eVar.d(f43397d, null);
        eVar.d(f43398e, q2Var.a());
        eVar.d(f43399f, q2Var.d());
        eVar.d(f43400g, q2Var.e());
    }
}
