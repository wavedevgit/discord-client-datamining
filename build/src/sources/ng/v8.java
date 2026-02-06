package ng;

import yi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class v8 implements yi.d {

    /* renamed from: a  reason: collision with root package name */
    static final v8 f40338a = new v8();

    /* renamed from: b  reason: collision with root package name */
    private static final yi.c f40339b;

    /* renamed from: c  reason: collision with root package name */
    private static final yi.c f40340c;

    /* renamed from: d  reason: collision with root package name */
    private static final yi.c f40341d;

    /* renamed from: e  reason: collision with root package name */
    private static final yi.c f40342e;

    /* renamed from: f  reason: collision with root package name */
    private static final yi.c f40343f;

    static {
        c.b a10 = yi.c.a("inferenceCommonLogEvent");
        l2 l2Var = new l2();
        l2Var.a(1);
        f40339b = a10.b(l2Var.b()).a();
        c.b a11 = yi.c.a("options");
        l2 l2Var2 = new l2();
        l2Var2.a(2);
        f40340c = a11.b(l2Var2.b()).a();
        c.b a12 = yi.c.a("detectedBarcodeFormats");
        l2 l2Var3 = new l2();
        l2Var3.a(3);
        f40341d = a12.b(l2Var3.b()).a();
        c.b a13 = yi.c.a("detectedBarcodeValueTypes");
        l2 l2Var4 = new l2();
        l2Var4.a(4);
        f40342e = a13.b(l2Var4.b()).a();
        c.b a14 = yi.c.a("imageInfo");
        l2 l2Var5 = new l2();
        l2Var5.a(5);
        f40343f = a14.b(l2Var5.b()).a();
    }

    private v8() {
    }

    @Override // yi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        of ofVar = (of) obj;
        yi.e eVar = (yi.e) obj2;
        eVar.a(f40339b, ofVar.d());
        eVar.a(f40340c, ofVar.e());
        eVar.a(f40341d, ofVar.a());
        eVar.a(f40342e, ofVar.b());
        eVar.a(f40343f, ofVar.c());
    }
}
