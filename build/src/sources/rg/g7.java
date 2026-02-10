package rg;

import zi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g7 implements zi.d {

    /* renamed from: a  reason: collision with root package name */
    static final g7 f48222a = new g7();

    /* renamed from: b  reason: collision with root package name */
    private static final zi.c f48223b;

    /* renamed from: c  reason: collision with root package name */
    private static final zi.c f48224c;

    /* renamed from: d  reason: collision with root package name */
    private static final zi.c f48225d;

    /* renamed from: e  reason: collision with root package name */
    private static final zi.c f48226e;

    static {
        c.b a10 = zi.c.a("imageFormat");
        v1 v1Var = new v1();
        v1Var.a(1);
        f48223b = a10.b(v1Var.b()).a();
        c.b a11 = zi.c.a("originalImageSize");
        v1 v1Var2 = new v1();
        v1Var2.a(2);
        f48224c = a11.b(v1Var2.b()).a();
        c.b a12 = zi.c.a("compressedImageSize");
        v1 v1Var3 = new v1();
        v1Var3.a(3);
        f48225d = a12.b(v1Var3.b()).a();
        c.b a13 = zi.c.a("isOdmlImage");
        v1 v1Var4 = new v1();
        v1Var4.a(4);
        f48226e = a13.b(v1Var4.b()).a();
    }

    private g7() {
    }

    @Override // zi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        rd rdVar = (rd) obj;
        zi.e eVar = (zi.e) obj2;
        eVar.d(f48223b, rdVar.a());
        eVar.d(f48224c, rdVar.b());
        eVar.d(f48225d, null);
        eVar.d(f48226e, null);
    }
}
