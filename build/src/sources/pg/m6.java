package pg;

import yi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class m6 implements yi.d {

    /* renamed from: a  reason: collision with root package name */
    static final m6 f44523a = new m6();

    /* renamed from: b  reason: collision with root package name */
    private static final yi.c f44524b;

    /* renamed from: c  reason: collision with root package name */
    private static final yi.c f44525c;

    /* renamed from: d  reason: collision with root package name */
    private static final yi.c f44526d;

    /* renamed from: e  reason: collision with root package name */
    private static final yi.c f44527e;

    /* renamed from: f  reason: collision with root package name */
    private static final yi.c f44528f;

    /* renamed from: g  reason: collision with root package name */
    private static final yi.c f44529g;

    static {
        c.b a10 = yi.c.a("inferenceCommonLogEvent");
        s1 s1Var = new s1();
        s1Var.a(1);
        f44524b = a10.b(s1Var.b()).a();
        c.b a11 = yi.c.a("options");
        s1 s1Var2 = new s1();
        s1Var2.a(2);
        f44525c = a11.b(s1Var2.b()).a();
        c.b a12 = yi.c.a("imageInfo");
        s1 s1Var3 = new s1();
        s1Var3.a(3);
        f44526d = a12.b(s1Var3.b()).a();
        c.b a13 = yi.c.a("detectorOptions");
        s1 s1Var4 = new s1();
        s1Var4.a(4);
        f44527e = a13.b(s1Var4.b()).a();
        c.b a14 = yi.c.a("contourDetectedFaces");
        s1 s1Var5 = new s1();
        s1Var5.a(5);
        f44528f = a14.b(s1Var5.b()).a();
        c.b a15 = yi.c.a("nonContourDetectedFaces");
        s1 s1Var6 = new s1();
        s1Var6.a(6);
        f44529g = a15.b(s1Var6.b()).a();
    }

    private m6() {
    }

    @Override // yi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        wa waVar = (wa) obj;
        yi.e eVar = (yi.e) obj2;
        eVar.a(f44524b, waVar.c());
        eVar.a(f44525c, null);
        eVar.a(f44526d, waVar.b());
        eVar.a(f44527e, waVar.a());
        eVar.a(f44528f, waVar.d());
        eVar.a(f44529g, waVar.e());
    }
}
