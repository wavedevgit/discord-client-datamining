package og;

import xi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class m6 implements xi.d {

    /* renamed from: a  reason: collision with root package name */
    static final m6 f43133a = new m6();

    /* renamed from: b  reason: collision with root package name */
    private static final xi.c f43134b;

    /* renamed from: c  reason: collision with root package name */
    private static final xi.c f43135c;

    /* renamed from: d  reason: collision with root package name */
    private static final xi.c f43136d;

    /* renamed from: e  reason: collision with root package name */
    private static final xi.c f43137e;

    /* renamed from: f  reason: collision with root package name */
    private static final xi.c f43138f;

    /* renamed from: g  reason: collision with root package name */
    private static final xi.c f43139g;

    static {
        c.b a10 = xi.c.a("inferenceCommonLogEvent");
        s1 s1Var = new s1();
        s1Var.a(1);
        f43134b = a10.b(s1Var.b()).a();
        c.b a11 = xi.c.a("options");
        s1 s1Var2 = new s1();
        s1Var2.a(2);
        f43135c = a11.b(s1Var2.b()).a();
        c.b a12 = xi.c.a("imageInfo");
        s1 s1Var3 = new s1();
        s1Var3.a(3);
        f43136d = a12.b(s1Var3.b()).a();
        c.b a13 = xi.c.a("detectorOptions");
        s1 s1Var4 = new s1();
        s1Var4.a(4);
        f43137e = a13.b(s1Var4.b()).a();
        c.b a14 = xi.c.a("contourDetectedFaces");
        s1 s1Var5 = new s1();
        s1Var5.a(5);
        f43138f = a14.b(s1Var5.b()).a();
        c.b a15 = xi.c.a("nonContourDetectedFaces");
        s1 s1Var6 = new s1();
        s1Var6.a(6);
        f43139g = a15.b(s1Var6.b()).a();
    }

    private m6() {
    }

    @Override // xi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        wa waVar = (wa) obj;
        xi.e eVar = (xi.e) obj2;
        eVar.d(f43134b, waVar.c());
        eVar.d(f43135c, null);
        eVar.d(f43136d, waVar.b());
        eVar.d(f43137e, waVar.a());
        eVar.d(f43138f, waVar.d());
        eVar.d(f43139g, waVar.e());
    }
}
