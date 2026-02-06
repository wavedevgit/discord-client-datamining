package ng;

import yi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class v7 implements yi.d {

    /* renamed from: a  reason: collision with root package name */
    static final v7 f40333a = new v7();

    /* renamed from: b  reason: collision with root package name */
    private static final yi.c f40334b;

    /* renamed from: c  reason: collision with root package name */
    private static final yi.c f40335c;

    /* renamed from: d  reason: collision with root package name */
    private static final yi.c f40336d;

    /* renamed from: e  reason: collision with root package name */
    private static final yi.c f40337e;

    static {
        c.b a10 = yi.c.a("imageFormat");
        l2 l2Var = new l2();
        l2Var.a(1);
        f40334b = a10.b(l2Var.b()).a();
        c.b a11 = yi.c.a("originalImageSize");
        l2 l2Var2 = new l2();
        l2Var2.a(2);
        f40335c = a11.b(l2Var2.b()).a();
        c.b a12 = yi.c.a("compressedImageSize");
        l2 l2Var3 = new l2();
        l2Var3.a(3);
        f40336d = a12.b(l2Var3.b()).a();
        c.b a13 = yi.c.a("isOdmlImage");
        l2 l2Var4 = new l2();
        l2Var4.a(4);
        f40337e = a13.b(l2Var4.b()).a();
    }

    private v7() {
    }

    @Override // yi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        fe feVar = (fe) obj;
        yi.e eVar = (yi.e) obj2;
        eVar.a(f40334b, feVar.a());
        eVar.a(f40335c, feVar.b());
        eVar.a(f40336d, null);
        eVar.a(f40337e, null);
    }
}
