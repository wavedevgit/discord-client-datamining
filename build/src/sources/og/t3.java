package og;

import ui.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class t3 implements ui.d {

    /* renamed from: a  reason: collision with root package name */
    static final t3 f43488a = new t3();

    /* renamed from: b  reason: collision with root package name */
    private static final ui.c f43489b;

    /* renamed from: c  reason: collision with root package name */
    private static final ui.c f43490c;

    /* renamed from: d  reason: collision with root package name */
    private static final ui.c f43491d;

    /* renamed from: e  reason: collision with root package name */
    private static final ui.c f43492e;

    /* renamed from: f  reason: collision with root package name */
    private static final ui.c f43493f;

    /* renamed from: g  reason: collision with root package name */
    private static final ui.c f43494g;

    static {
        c.b a10 = ui.c.a("errorCode");
        s1 s1Var = new s1();
        s1Var.a(1);
        f43489b = a10.b(s1Var.b()).a();
        c.b a11 = ui.c.a("isColdCall");
        s1 s1Var2 = new s1();
        s1Var2.a(2);
        f43490c = a11.b(s1Var2.b()).a();
        c.b a12 = ui.c.a("imageInfo");
        s1 s1Var3 = new s1();
        s1Var3.a(3);
        f43491d = a12.b(s1Var3.b()).a();
        c.b a13 = ui.c.a("detectorOptions");
        s1 s1Var4 = new s1();
        s1Var4.a(4);
        f43492e = a13.b(s1Var4.b()).a();
        c.b a14 = ui.c.a("contourDetectedFaces");
        s1 s1Var5 = new s1();
        s1Var5.a(5);
        f43493f = a14.b(s1Var5.b()).a();
        c.b a15 = ui.c.a("nonContourDetectedFaces");
        s1 s1Var6 = new s1();
        s1Var6.a(6);
        f43494g = a15.b(s1Var6.b()).a();
    }

    private t3() {
    }

    @Override // ui.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        q2 q2Var = (q2) obj;
        ui.e eVar = (ui.e) obj2;
        eVar.b(f43489b, q2Var.b());
        eVar.b(f43490c, q2Var.c());
        eVar.b(f43491d, null);
        eVar.b(f43492e, q2Var.a());
        eVar.b(f43493f, q2Var.d());
        eVar.b(f43494g, q2Var.e());
    }
}
