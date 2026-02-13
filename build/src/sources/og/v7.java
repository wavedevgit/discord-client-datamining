package og;

import bj.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class v7 implements bj.d {

    /* renamed from: a  reason: collision with root package name */
    static final v7 f40301a = new v7();

    /* renamed from: b  reason: collision with root package name */
    private static final bj.c f40302b;

    /* renamed from: c  reason: collision with root package name */
    private static final bj.c f40303c;

    /* renamed from: d  reason: collision with root package name */
    private static final bj.c f40304d;

    /* renamed from: e  reason: collision with root package name */
    private static final bj.c f40305e;

    static {
        c.b a10 = bj.c.a("imageFormat");
        l2 l2Var = new l2();
        l2Var.a(1);
        f40302b = a10.b(l2Var.b()).a();
        c.b a11 = bj.c.a("originalImageSize");
        l2 l2Var2 = new l2();
        l2Var2.a(2);
        f40303c = a11.b(l2Var2.b()).a();
        c.b a12 = bj.c.a("compressedImageSize");
        l2 l2Var3 = new l2();
        l2Var3.a(3);
        f40304d = a12.b(l2Var3.b()).a();
        c.b a13 = bj.c.a("isOdmlImage");
        l2 l2Var4 = new l2();
        l2Var4.a(4);
        f40305e = a13.b(l2Var4.b()).a();
    }

    private v7() {
    }

    @Override // bj.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        fe feVar = (fe) obj;
        bj.e eVar = (bj.e) obj2;
        eVar.e(f40302b, feVar.a());
        eVar.e(f40303c, feVar.b());
        eVar.e(f40304d, null);
        eVar.e(f40305e, null);
    }
}
