package qg;

import yi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g7 implements yi.d {

    /* renamed from: a  reason: collision with root package name */
    static final g7 f47104a = new g7();

    /* renamed from: b  reason: collision with root package name */
    private static final yi.c f47105b;

    /* renamed from: c  reason: collision with root package name */
    private static final yi.c f47106c;

    /* renamed from: d  reason: collision with root package name */
    private static final yi.c f47107d;

    /* renamed from: e  reason: collision with root package name */
    private static final yi.c f47108e;

    static {
        c.b a10 = yi.c.a("imageFormat");
        v1 v1Var = new v1();
        v1Var.a(1);
        f47105b = a10.b(v1Var.b()).a();
        c.b a11 = yi.c.a("originalImageSize");
        v1 v1Var2 = new v1();
        v1Var2.a(2);
        f47106c = a11.b(v1Var2.b()).a();
        c.b a12 = yi.c.a("compressedImageSize");
        v1 v1Var3 = new v1();
        v1Var3.a(3);
        f47107d = a12.b(v1Var3.b()).a();
        c.b a13 = yi.c.a("isOdmlImage");
        v1 v1Var4 = new v1();
        v1Var4.a(4);
        f47108e = a13.b(v1Var4.b()).a();
    }

    private g7() {
    }

    @Override // yi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        rd rdVar = (rd) obj;
        yi.e eVar = (yi.e) obj2;
        eVar.a(f47105b, rdVar.a());
        eVar.a(f47106c, rdVar.b());
        eVar.a(f47107d, null);
        eVar.a(f47108e, null);
    }
}
