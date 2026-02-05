package pg;

import xi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g7 implements xi.d {

    /* renamed from: a  reason: collision with root package name */
    static final g7 f45226a = new g7();

    /* renamed from: b  reason: collision with root package name */
    private static final xi.c f45227b;

    /* renamed from: c  reason: collision with root package name */
    private static final xi.c f45228c;

    /* renamed from: d  reason: collision with root package name */
    private static final xi.c f45229d;

    /* renamed from: e  reason: collision with root package name */
    private static final xi.c f45230e;

    static {
        c.b a10 = xi.c.a("imageFormat");
        v1 v1Var = new v1();
        v1Var.a(1);
        f45227b = a10.b(v1Var.b()).a();
        c.b a11 = xi.c.a("originalImageSize");
        v1 v1Var2 = new v1();
        v1Var2.a(2);
        f45228c = a11.b(v1Var2.b()).a();
        c.b a12 = xi.c.a("compressedImageSize");
        v1 v1Var3 = new v1();
        v1Var3.a(3);
        f45229d = a12.b(v1Var3.b()).a();
        c.b a13 = xi.c.a("isOdmlImage");
        v1 v1Var4 = new v1();
        v1Var4.a(4);
        f45230e = a13.b(v1Var4.b()).a();
    }

    private g7() {
    }

    @Override // xi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        rd rdVar = (rd) obj;
        xi.e eVar = (xi.e) obj2;
        eVar.d(f45227b, rdVar.a());
        eVar.d(f45228c, rdVar.b());
        eVar.d(f45229d, null);
        eVar.d(f45230e, null);
    }
}
