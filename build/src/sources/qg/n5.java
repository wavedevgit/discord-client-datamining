package qg;

import bj.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class n5 implements bj.d {

    /* renamed from: a  reason: collision with root package name */
    static final n5 f44743a = new n5();

    /* renamed from: b  reason: collision with root package name */
    private static final bj.c f44744b;

    /* renamed from: c  reason: collision with root package name */
    private static final bj.c f44745c;

    /* renamed from: d  reason: collision with root package name */
    private static final bj.c f44746d;

    /* renamed from: e  reason: collision with root package name */
    private static final bj.c f44747e;

    static {
        c.b a10 = bj.c.a("imageFormat");
        s1 s1Var = new s1();
        s1Var.a(1);
        f44744b = a10.b(s1Var.b()).a();
        c.b a11 = bj.c.a("originalImageSize");
        s1 s1Var2 = new s1();
        s1Var2.a(2);
        f44745c = a11.b(s1Var2.b()).a();
        c.b a12 = bj.c.a("compressedImageSize");
        s1 s1Var3 = new s1();
        s1Var3.a(3);
        f44746d = a12.b(s1Var3.b()).a();
        c.b a13 = bj.c.a("isOdmlImage");
        s1 s1Var4 = new s1();
        s1Var4.a(4);
        f44747e = a13.b(s1Var4.b()).a();
    }

    private n5() {
    }

    @Override // bj.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        r9 r9Var = (r9) obj;
        bj.e eVar = (bj.e) obj2;
        eVar.e(f44744b, r9Var.a());
        eVar.e(f44745c, r9Var.b());
        eVar.e(f44746d, null);
        eVar.e(f44747e, null);
    }
}
