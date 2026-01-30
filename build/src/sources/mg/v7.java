package mg;

import ui.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class v7 implements ui.d {

    /* renamed from: a  reason: collision with root package name */
    static final v7 f38731a = new v7();

    /* renamed from: b  reason: collision with root package name */
    private static final ui.c f38732b;

    /* renamed from: c  reason: collision with root package name */
    private static final ui.c f38733c;

    /* renamed from: d  reason: collision with root package name */
    private static final ui.c f38734d;

    /* renamed from: e  reason: collision with root package name */
    private static final ui.c f38735e;

    static {
        c.b a10 = ui.c.a("imageFormat");
        l2 l2Var = new l2();
        l2Var.a(1);
        f38732b = a10.b(l2Var.b()).a();
        c.b a11 = ui.c.a("originalImageSize");
        l2 l2Var2 = new l2();
        l2Var2.a(2);
        f38733c = a11.b(l2Var2.b()).a();
        c.b a12 = ui.c.a("compressedImageSize");
        l2 l2Var3 = new l2();
        l2Var3.a(3);
        f38734d = a12.b(l2Var3.b()).a();
        c.b a13 = ui.c.a("isOdmlImage");
        l2 l2Var4 = new l2();
        l2Var4.a(4);
        f38735e = a13.b(l2Var4.b()).a();
    }

    private v7() {
    }

    @Override // ui.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        fe feVar = (fe) obj;
        ui.e eVar = (ui.e) obj2;
        eVar.b(f38732b, feVar.a());
        eVar.b(f38733c, feVar.b());
        eVar.b(f38734d, null);
        eVar.b(f38735e, null);
    }
}
