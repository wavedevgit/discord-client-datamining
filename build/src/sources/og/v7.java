package og;

import zi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class v7 implements zi.d {

    /* renamed from: a  reason: collision with root package name */
    static final v7 f41406a = new v7();

    /* renamed from: b  reason: collision with root package name */
    private static final zi.c f41407b;

    /* renamed from: c  reason: collision with root package name */
    private static final zi.c f41408c;

    /* renamed from: d  reason: collision with root package name */
    private static final zi.c f41409d;

    /* renamed from: e  reason: collision with root package name */
    private static final zi.c f41410e;

    static {
        c.b a10 = zi.c.a("imageFormat");
        l2 l2Var = new l2();
        l2Var.a(1);
        f41407b = a10.b(l2Var.b()).a();
        c.b a11 = zi.c.a("originalImageSize");
        l2 l2Var2 = new l2();
        l2Var2.a(2);
        f41408c = a11.b(l2Var2.b()).a();
        c.b a12 = zi.c.a("compressedImageSize");
        l2 l2Var3 = new l2();
        l2Var3.a(3);
        f41409d = a12.b(l2Var3.b()).a();
        c.b a13 = zi.c.a("isOdmlImage");
        l2 l2Var4 = new l2();
        l2Var4.a(4);
        f41410e = a13.b(l2Var4.b()).a();
    }

    private v7() {
    }

    @Override // zi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        fe feVar = (fe) obj;
        zi.e eVar = (zi.e) obj2;
        eVar.d(f41407b, feVar.a());
        eVar.d(f41408c, feVar.b());
        eVar.d(f41409d, null);
        eVar.d(f41410e, null);
    }
}
