package pg;

import ui.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g7 implements ui.d {

    /* renamed from: a  reason: collision with root package name */
    static final g7 f45296a = new g7();

    /* renamed from: b  reason: collision with root package name */
    private static final ui.c f45297b;

    /* renamed from: c  reason: collision with root package name */
    private static final ui.c f45298c;

    /* renamed from: d  reason: collision with root package name */
    private static final ui.c f45299d;

    /* renamed from: e  reason: collision with root package name */
    private static final ui.c f45300e;

    static {
        c.b a10 = ui.c.a("imageFormat");
        v1 v1Var = new v1();
        v1Var.a(1);
        f45297b = a10.b(v1Var.b()).a();
        c.b a11 = ui.c.a("originalImageSize");
        v1 v1Var2 = new v1();
        v1Var2.a(2);
        f45298c = a11.b(v1Var2.b()).a();
        c.b a12 = ui.c.a("compressedImageSize");
        v1 v1Var3 = new v1();
        v1Var3.a(3);
        f45299d = a12.b(v1Var3.b()).a();
        c.b a13 = ui.c.a("isOdmlImage");
        v1 v1Var4 = new v1();
        v1Var4.a(4);
        f45300e = a13.b(v1Var4.b()).a();
    }

    private g7() {
    }

    @Override // ui.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        rd rdVar = (rd) obj;
        ui.e eVar = (ui.e) obj2;
        eVar.b(f45297b, rdVar.a());
        eVar.b(f45298c, rdVar.b());
        eVar.b(f45299d, null);
        eVar.b(f45300e, null);
    }
}
