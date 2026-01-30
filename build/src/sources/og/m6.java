package og;

import ui.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class m6 implements ui.d {

    /* renamed from: a  reason: collision with root package name */
    static final m6 f43299a = new m6();

    /* renamed from: b  reason: collision with root package name */
    private static final ui.c f43300b;

    /* renamed from: c  reason: collision with root package name */
    private static final ui.c f43301c;

    /* renamed from: d  reason: collision with root package name */
    private static final ui.c f43302d;

    /* renamed from: e  reason: collision with root package name */
    private static final ui.c f43303e;

    /* renamed from: f  reason: collision with root package name */
    private static final ui.c f43304f;

    /* renamed from: g  reason: collision with root package name */
    private static final ui.c f43305g;

    static {
        c.b a10 = ui.c.a("inferenceCommonLogEvent");
        s1 s1Var = new s1();
        s1Var.a(1);
        f43300b = a10.b(s1Var.b()).a();
        c.b a11 = ui.c.a("options");
        s1 s1Var2 = new s1();
        s1Var2.a(2);
        f43301c = a11.b(s1Var2.b()).a();
        c.b a12 = ui.c.a("imageInfo");
        s1 s1Var3 = new s1();
        s1Var3.a(3);
        f43302d = a12.b(s1Var3.b()).a();
        c.b a13 = ui.c.a("detectorOptions");
        s1 s1Var4 = new s1();
        s1Var4.a(4);
        f43303e = a13.b(s1Var4.b()).a();
        c.b a14 = ui.c.a("contourDetectedFaces");
        s1 s1Var5 = new s1();
        s1Var5.a(5);
        f43304f = a14.b(s1Var5.b()).a();
        c.b a15 = ui.c.a("nonContourDetectedFaces");
        s1 s1Var6 = new s1();
        s1Var6.a(6);
        f43305g = a15.b(s1Var6.b()).a();
    }

    private m6() {
    }

    @Override // ui.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        wa waVar = (wa) obj;
        ui.e eVar = (ui.e) obj2;
        eVar.b(f43300b, waVar.c());
        eVar.b(f43301c, null);
        eVar.b(f43302d, waVar.b());
        eVar.b(f43303e, waVar.a());
        eVar.b(f43304f, waVar.d());
        eVar.b(f43305g, waVar.e());
    }
}
