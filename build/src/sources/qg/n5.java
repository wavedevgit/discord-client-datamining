package qg;

import zi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class n5 implements zi.d {

    /* renamed from: a  reason: collision with root package name */
    static final n5 f46074a = new n5();

    /* renamed from: b  reason: collision with root package name */
    private static final zi.c f46075b;

    /* renamed from: c  reason: collision with root package name */
    private static final zi.c f46076c;

    /* renamed from: d  reason: collision with root package name */
    private static final zi.c f46077d;

    /* renamed from: e  reason: collision with root package name */
    private static final zi.c f46078e;

    static {
        c.b a10 = zi.c.a("imageFormat");
        s1 s1Var = new s1();
        s1Var.a(1);
        f46075b = a10.b(s1Var.b()).a();
        c.b a11 = zi.c.a("originalImageSize");
        s1 s1Var2 = new s1();
        s1Var2.a(2);
        f46076c = a11.b(s1Var2.b()).a();
        c.b a12 = zi.c.a("compressedImageSize");
        s1 s1Var3 = new s1();
        s1Var3.a(3);
        f46077d = a12.b(s1Var3.b()).a();
        c.b a13 = zi.c.a("isOdmlImage");
        s1 s1Var4 = new s1();
        s1Var4.a(4);
        f46078e = a13.b(s1Var4.b()).a();
    }

    private n5() {
    }

    @Override // zi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        r9 r9Var = (r9) obj;
        zi.e eVar = (zi.e) obj2;
        eVar.d(f46075b, r9Var.a());
        eVar.d(f46076c, r9Var.b());
        eVar.d(f46077d, null);
        eVar.d(f46078e, null);
    }
}
