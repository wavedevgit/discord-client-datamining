package qg;

import zi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class t3 implements zi.d {

    /* renamed from: a  reason: collision with root package name */
    static final t3 f46298a = new t3();

    /* renamed from: b  reason: collision with root package name */
    private static final zi.c f46299b;

    /* renamed from: c  reason: collision with root package name */
    private static final zi.c f46300c;

    /* renamed from: d  reason: collision with root package name */
    private static final zi.c f46301d;

    /* renamed from: e  reason: collision with root package name */
    private static final zi.c f46302e;

    /* renamed from: f  reason: collision with root package name */
    private static final zi.c f46303f;

    /* renamed from: g  reason: collision with root package name */
    private static final zi.c f46304g;

    static {
        c.b a10 = zi.c.a("errorCode");
        s1 s1Var = new s1();
        s1Var.a(1);
        f46299b = a10.b(s1Var.b()).a();
        c.b a11 = zi.c.a("isColdCall");
        s1 s1Var2 = new s1();
        s1Var2.a(2);
        f46300c = a11.b(s1Var2.b()).a();
        c.b a12 = zi.c.a("imageInfo");
        s1 s1Var3 = new s1();
        s1Var3.a(3);
        f46301d = a12.b(s1Var3.b()).a();
        c.b a13 = zi.c.a("detectorOptions");
        s1 s1Var4 = new s1();
        s1Var4.a(4);
        f46302e = a13.b(s1Var4.b()).a();
        c.b a14 = zi.c.a("contourDetectedFaces");
        s1 s1Var5 = new s1();
        s1Var5.a(5);
        f46303f = a14.b(s1Var5.b()).a();
        c.b a15 = zi.c.a("nonContourDetectedFaces");
        s1 s1Var6 = new s1();
        s1Var6.a(6);
        f46304g = a15.b(s1Var6.b()).a();
    }

    private t3() {
    }

    @Override // zi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        q2 q2Var = (q2) obj;
        zi.e eVar = (zi.e) obj2;
        eVar.d(f46299b, q2Var.b());
        eVar.d(f46300c, q2Var.c());
        eVar.d(f46301d, null);
        eVar.d(f46302e, q2Var.a());
        eVar.d(f46303f, q2Var.d());
        eVar.d(f46304g, q2Var.e());
    }
}
