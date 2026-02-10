package qg;

import bj.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class m6 implements bj.d {

    /* renamed from: a  reason: collision with root package name */
    static final m6 f44705a = new m6();

    /* renamed from: b  reason: collision with root package name */
    private static final bj.c f44706b;

    /* renamed from: c  reason: collision with root package name */
    private static final bj.c f44707c;

    /* renamed from: d  reason: collision with root package name */
    private static final bj.c f44708d;

    /* renamed from: e  reason: collision with root package name */
    private static final bj.c f44709e;

    /* renamed from: f  reason: collision with root package name */
    private static final bj.c f44710f;

    /* renamed from: g  reason: collision with root package name */
    private static final bj.c f44711g;

    static {
        c.b a10 = bj.c.a("inferenceCommonLogEvent");
        s1 s1Var = new s1();
        s1Var.a(1);
        f44706b = a10.b(s1Var.b()).a();
        c.b a11 = bj.c.a("options");
        s1 s1Var2 = new s1();
        s1Var2.a(2);
        f44707c = a11.b(s1Var2.b()).a();
        c.b a12 = bj.c.a("imageInfo");
        s1 s1Var3 = new s1();
        s1Var3.a(3);
        f44708d = a12.b(s1Var3.b()).a();
        c.b a13 = bj.c.a("detectorOptions");
        s1 s1Var4 = new s1();
        s1Var4.a(4);
        f44709e = a13.b(s1Var4.b()).a();
        c.b a14 = bj.c.a("contourDetectedFaces");
        s1 s1Var5 = new s1();
        s1Var5.a(5);
        f44710f = a14.b(s1Var5.b()).a();
        c.b a15 = bj.c.a("nonContourDetectedFaces");
        s1 s1Var6 = new s1();
        s1Var6.a(6);
        f44711g = a15.b(s1Var6.b()).a();
    }

    private m6() {
    }

    @Override // bj.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        wa waVar = (wa) obj;
        bj.e eVar = (bj.e) obj2;
        eVar.e(f44706b, waVar.c());
        eVar.e(f44707c, null);
        eVar.e(f44708d, waVar.b());
        eVar.e(f44709e, waVar.a());
        eVar.e(f44710f, waVar.d());
        eVar.e(f44711g, waVar.e());
    }
}
