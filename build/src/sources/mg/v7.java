package mg;

import xi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class v7 implements xi.d {

    /* renamed from: a  reason: collision with root package name */
    static final v7 f38170a = new v7();

    /* renamed from: b  reason: collision with root package name */
    private static final xi.c f38171b;

    /* renamed from: c  reason: collision with root package name */
    private static final xi.c f38172c;

    /* renamed from: d  reason: collision with root package name */
    private static final xi.c f38173d;

    /* renamed from: e  reason: collision with root package name */
    private static final xi.c f38174e;

    static {
        c.b a10 = xi.c.a("imageFormat");
        l2 l2Var = new l2();
        l2Var.a(1);
        f38171b = a10.b(l2Var.b()).a();
        c.b a11 = xi.c.a("originalImageSize");
        l2 l2Var2 = new l2();
        l2Var2.a(2);
        f38172c = a11.b(l2Var2.b()).a();
        c.b a12 = xi.c.a("compressedImageSize");
        l2 l2Var3 = new l2();
        l2Var3.a(3);
        f38173d = a12.b(l2Var3.b()).a();
        c.b a13 = xi.c.a("isOdmlImage");
        l2 l2Var4 = new l2();
        l2Var4.a(4);
        f38174e = a13.b(l2Var4.b()).a();
    }

    private v7() {
    }

    @Override // xi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        fe feVar = (fe) obj;
        xi.e eVar = (xi.e) obj2;
        eVar.d(f38171b, feVar.a());
        eVar.d(f38172c, feVar.b());
        eVar.d(f38173d, null);
        eVar.d(f38174e, null);
    }
}
