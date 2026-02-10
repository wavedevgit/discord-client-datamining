package qg;

import zi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class m6 implements zi.d {

    /* renamed from: a  reason: collision with root package name */
    static final m6 f46037a = new m6();

    /* renamed from: b  reason: collision with root package name */
    private static final zi.c f46038b;

    /* renamed from: c  reason: collision with root package name */
    private static final zi.c f46039c;

    /* renamed from: d  reason: collision with root package name */
    private static final zi.c f46040d;

    /* renamed from: e  reason: collision with root package name */
    private static final zi.c f46041e;

    /* renamed from: f  reason: collision with root package name */
    private static final zi.c f46042f;

    /* renamed from: g  reason: collision with root package name */
    private static final zi.c f46043g;

    static {
        c.b a10 = zi.c.a("inferenceCommonLogEvent");
        s1 s1Var = new s1();
        s1Var.a(1);
        f46038b = a10.b(s1Var.b()).a();
        c.b a11 = zi.c.a("options");
        s1 s1Var2 = new s1();
        s1Var2.a(2);
        f46039c = a11.b(s1Var2.b()).a();
        c.b a12 = zi.c.a("imageInfo");
        s1 s1Var3 = new s1();
        s1Var3.a(3);
        f46040d = a12.b(s1Var3.b()).a();
        c.b a13 = zi.c.a("detectorOptions");
        s1 s1Var4 = new s1();
        s1Var4.a(4);
        f46041e = a13.b(s1Var4.b()).a();
        c.b a14 = zi.c.a("contourDetectedFaces");
        s1 s1Var5 = new s1();
        s1Var5.a(5);
        f46042f = a14.b(s1Var5.b()).a();
        c.b a15 = zi.c.a("nonContourDetectedFaces");
        s1 s1Var6 = new s1();
        s1Var6.a(6);
        f46043g = a15.b(s1Var6.b()).a();
    }

    private m6() {
    }

    @Override // zi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        wa waVar = (wa) obj;
        zi.e eVar = (zi.e) obj2;
        eVar.d(f46038b, waVar.c());
        eVar.d(f46039c, null);
        eVar.d(f46040d, waVar.b());
        eVar.d(f46041e, waVar.a());
        eVar.d(f46042f, waVar.d());
        eVar.d(f46043g, waVar.e());
    }
}
