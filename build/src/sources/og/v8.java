package og;

import zi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class v8 implements zi.d {

    /* renamed from: a  reason: collision with root package name */
    static final v8 f41411a = new v8();

    /* renamed from: b  reason: collision with root package name */
    private static final zi.c f41412b;

    /* renamed from: c  reason: collision with root package name */
    private static final zi.c f41413c;

    /* renamed from: d  reason: collision with root package name */
    private static final zi.c f41414d;

    /* renamed from: e  reason: collision with root package name */
    private static final zi.c f41415e;

    /* renamed from: f  reason: collision with root package name */
    private static final zi.c f41416f;

    static {
        c.b a10 = zi.c.a("inferenceCommonLogEvent");
        l2 l2Var = new l2();
        l2Var.a(1);
        f41412b = a10.b(l2Var.b()).a();
        c.b a11 = zi.c.a("options");
        l2 l2Var2 = new l2();
        l2Var2.a(2);
        f41413c = a11.b(l2Var2.b()).a();
        c.b a12 = zi.c.a("detectedBarcodeFormats");
        l2 l2Var3 = new l2();
        l2Var3.a(3);
        f41414d = a12.b(l2Var3.b()).a();
        c.b a13 = zi.c.a("detectedBarcodeValueTypes");
        l2 l2Var4 = new l2();
        l2Var4.a(4);
        f41415e = a13.b(l2Var4.b()).a();
        c.b a14 = zi.c.a("imageInfo");
        l2 l2Var5 = new l2();
        l2Var5.a(5);
        f41416f = a14.b(l2Var5.b()).a();
    }

    private v8() {
    }

    @Override // zi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        of ofVar = (of) obj;
        zi.e eVar = (zi.e) obj2;
        eVar.d(f41412b, ofVar.d());
        eVar.d(f41413c, ofVar.e());
        eVar.d(f41414d, ofVar.a());
        eVar.d(f41415e, ofVar.b());
        eVar.d(f41416f, ofVar.c());
    }
}
