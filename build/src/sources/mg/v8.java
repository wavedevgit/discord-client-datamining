package mg;

import xi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class v8 implements xi.d {

    /* renamed from: a  reason: collision with root package name */
    static final v8 f38175a = new v8();

    /* renamed from: b  reason: collision with root package name */
    private static final xi.c f38176b;

    /* renamed from: c  reason: collision with root package name */
    private static final xi.c f38177c;

    /* renamed from: d  reason: collision with root package name */
    private static final xi.c f38178d;

    /* renamed from: e  reason: collision with root package name */
    private static final xi.c f38179e;

    /* renamed from: f  reason: collision with root package name */
    private static final xi.c f38180f;

    static {
        c.b a10 = xi.c.a("inferenceCommonLogEvent");
        l2 l2Var = new l2();
        l2Var.a(1);
        f38176b = a10.b(l2Var.b()).a();
        c.b a11 = xi.c.a("options");
        l2 l2Var2 = new l2();
        l2Var2.a(2);
        f38177c = a11.b(l2Var2.b()).a();
        c.b a12 = xi.c.a("detectedBarcodeFormats");
        l2 l2Var3 = new l2();
        l2Var3.a(3);
        f38178d = a12.b(l2Var3.b()).a();
        c.b a13 = xi.c.a("detectedBarcodeValueTypes");
        l2 l2Var4 = new l2();
        l2Var4.a(4);
        f38179e = a13.b(l2Var4.b()).a();
        c.b a14 = xi.c.a("imageInfo");
        l2 l2Var5 = new l2();
        l2Var5.a(5);
        f38180f = a14.b(l2Var5.b()).a();
    }

    private v8() {
    }

    @Override // xi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        of ofVar = (of) obj;
        xi.e eVar = (xi.e) obj2;
        eVar.d(f38176b, ofVar.d());
        eVar.d(f38177c, ofVar.e());
        eVar.d(f38178d, ofVar.a());
        eVar.d(f38179e, ofVar.b());
        eVar.d(f38180f, ofVar.c());
    }
}
