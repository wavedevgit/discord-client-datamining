package pg;

import yi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class m6 implements yi.d {

    /* renamed from: a  reason: collision with root package name */
    static final m6 f44475a = new m6();

    /* renamed from: b  reason: collision with root package name */
    private static final yi.c f44476b;

    /* renamed from: c  reason: collision with root package name */
    private static final yi.c f44477c;

    /* renamed from: d  reason: collision with root package name */
    private static final yi.c f44478d;

    /* renamed from: e  reason: collision with root package name */
    private static final yi.c f44479e;

    /* renamed from: f  reason: collision with root package name */
    private static final yi.c f44480f;

    /* renamed from: g  reason: collision with root package name */
    private static final yi.c f44481g;

    static {
        c.b a10 = yi.c.a("inferenceCommonLogEvent");
        s1 s1Var = new s1();
        s1Var.a(1);
        f44476b = a10.b(s1Var.b()).a();
        c.b a11 = yi.c.a("options");
        s1 s1Var2 = new s1();
        s1Var2.a(2);
        f44477c = a11.b(s1Var2.b()).a();
        c.b a12 = yi.c.a("imageInfo");
        s1 s1Var3 = new s1();
        s1Var3.a(3);
        f44478d = a12.b(s1Var3.b()).a();
        c.b a13 = yi.c.a("detectorOptions");
        s1 s1Var4 = new s1();
        s1Var4.a(4);
        f44479e = a13.b(s1Var4.b()).a();
        c.b a14 = yi.c.a("contourDetectedFaces");
        s1 s1Var5 = new s1();
        s1Var5.a(5);
        f44480f = a14.b(s1Var5.b()).a();
        c.b a15 = yi.c.a("nonContourDetectedFaces");
        s1 s1Var6 = new s1();
        s1Var6.a(6);
        f44481g = a15.b(s1Var6.b()).a();
    }

    private m6() {
    }

    @Override // yi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        wa waVar = (wa) obj;
        yi.e eVar = (yi.e) obj2;
        eVar.a(f44476b, waVar.c());
        eVar.a(f44477c, null);
        eVar.a(f44478d, waVar.b());
        eVar.a(f44479e, waVar.a());
        eVar.a(f44480f, waVar.d());
        eVar.a(f44481g, waVar.e());
    }
}
