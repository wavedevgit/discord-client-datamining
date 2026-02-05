package og;

import xi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class n5 implements xi.d {

    /* renamed from: a  reason: collision with root package name */
    static final n5 f43170a = new n5();

    /* renamed from: b  reason: collision with root package name */
    private static final xi.c f43171b;

    /* renamed from: c  reason: collision with root package name */
    private static final xi.c f43172c;

    /* renamed from: d  reason: collision with root package name */
    private static final xi.c f43173d;

    /* renamed from: e  reason: collision with root package name */
    private static final xi.c f43174e;

    static {
        c.b a10 = xi.c.a("imageFormat");
        s1 s1Var = new s1();
        s1Var.a(1);
        f43171b = a10.b(s1Var.b()).a();
        c.b a11 = xi.c.a("originalImageSize");
        s1 s1Var2 = new s1();
        s1Var2.a(2);
        f43172c = a11.b(s1Var2.b()).a();
        c.b a12 = xi.c.a("compressedImageSize");
        s1 s1Var3 = new s1();
        s1Var3.a(3);
        f43173d = a12.b(s1Var3.b()).a();
        c.b a13 = xi.c.a("isOdmlImage");
        s1 s1Var4 = new s1();
        s1Var4.a(4);
        f43174e = a13.b(s1Var4.b()).a();
    }

    private n5() {
    }

    @Override // xi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        r9 r9Var = (r9) obj;
        xi.e eVar = (xi.e) obj2;
        eVar.d(f43171b, r9Var.a());
        eVar.d(f43172c, r9Var.b());
        eVar.d(f43173d, null);
        eVar.d(f43174e, null);
    }
}
