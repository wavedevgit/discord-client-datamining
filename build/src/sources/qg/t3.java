package qg;

import bj.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class t3 implements bj.d {

    /* renamed from: a  reason: collision with root package name */
    static final t3 f44967a = new t3();

    /* renamed from: b  reason: collision with root package name */
    private static final bj.c f44968b;

    /* renamed from: c  reason: collision with root package name */
    private static final bj.c f44969c;

    /* renamed from: d  reason: collision with root package name */
    private static final bj.c f44970d;

    /* renamed from: e  reason: collision with root package name */
    private static final bj.c f44971e;

    /* renamed from: f  reason: collision with root package name */
    private static final bj.c f44972f;

    /* renamed from: g  reason: collision with root package name */
    private static final bj.c f44973g;

    static {
        c.b a10 = bj.c.a("errorCode");
        s1 s1Var = new s1();
        s1Var.a(1);
        f44968b = a10.b(s1Var.b()).a();
        c.b a11 = bj.c.a("isColdCall");
        s1 s1Var2 = new s1();
        s1Var2.a(2);
        f44969c = a11.b(s1Var2.b()).a();
        c.b a12 = bj.c.a("imageInfo");
        s1 s1Var3 = new s1();
        s1Var3.a(3);
        f44970d = a12.b(s1Var3.b()).a();
        c.b a13 = bj.c.a("detectorOptions");
        s1 s1Var4 = new s1();
        s1Var4.a(4);
        f44971e = a13.b(s1Var4.b()).a();
        c.b a14 = bj.c.a("contourDetectedFaces");
        s1 s1Var5 = new s1();
        s1Var5.a(5);
        f44972f = a14.b(s1Var5.b()).a();
        c.b a15 = bj.c.a("nonContourDetectedFaces");
        s1 s1Var6 = new s1();
        s1Var6.a(6);
        f44973g = a15.b(s1Var6.b()).a();
    }

    private t3() {
    }

    @Override // bj.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        q2 q2Var = (q2) obj;
        bj.e eVar = (bj.e) obj2;
        eVar.e(f44968b, q2Var.b());
        eVar.e(f44969c, q2Var.c());
        eVar.e(f44970d, null);
        eVar.e(f44971e, q2Var.a());
        eVar.e(f44972f, q2Var.d());
        eVar.e(f44973g, q2Var.e());
    }
}
