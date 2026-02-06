package pg;

import yi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class n5 implements yi.d {

    /* renamed from: a  reason: collision with root package name */
    static final n5 f44512a = new n5();

    /* renamed from: b  reason: collision with root package name */
    private static final yi.c f44513b;

    /* renamed from: c  reason: collision with root package name */
    private static final yi.c f44514c;

    /* renamed from: d  reason: collision with root package name */
    private static final yi.c f44515d;

    /* renamed from: e  reason: collision with root package name */
    private static final yi.c f44516e;

    static {
        c.b a10 = yi.c.a("imageFormat");
        s1 s1Var = new s1();
        s1Var.a(1);
        f44513b = a10.b(s1Var.b()).a();
        c.b a11 = yi.c.a("originalImageSize");
        s1 s1Var2 = new s1();
        s1Var2.a(2);
        f44514c = a11.b(s1Var2.b()).a();
        c.b a12 = yi.c.a("compressedImageSize");
        s1 s1Var3 = new s1();
        s1Var3.a(3);
        f44515d = a12.b(s1Var3.b()).a();
        c.b a13 = yi.c.a("isOdmlImage");
        s1 s1Var4 = new s1();
        s1Var4.a(4);
        f44516e = a13.b(s1Var4.b()).a();
    }

    private n5() {
    }

    @Override // yi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        r9 r9Var = (r9) obj;
        yi.e eVar = (yi.e) obj2;
        eVar.a(f44513b, r9Var.a());
        eVar.a(f44514c, r9Var.b());
        eVar.a(f44515d, null);
        eVar.a(f44516e, null);
    }
}
