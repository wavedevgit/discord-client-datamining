package pg;

import ui.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g7 implements ui.d {

    /* renamed from: a  reason: collision with root package name */
    static final g7 f45264a = new g7();

    /* renamed from: b  reason: collision with root package name */
    private static final ui.c f45265b;

    /* renamed from: c  reason: collision with root package name */
    private static final ui.c f45266c;

    /* renamed from: d  reason: collision with root package name */
    private static final ui.c f45267d;

    /* renamed from: e  reason: collision with root package name */
    private static final ui.c f45268e;

    static {
        c.b a10 = ui.c.a("imageFormat");
        v1 v1Var = new v1();
        v1Var.a(1);
        f45265b = a10.b(v1Var.b()).a();
        c.b a11 = ui.c.a("originalImageSize");
        v1 v1Var2 = new v1();
        v1Var2.a(2);
        f45266c = a11.b(v1Var2.b()).a();
        c.b a12 = ui.c.a("compressedImageSize");
        v1 v1Var3 = new v1();
        v1Var3.a(3);
        f45267d = a12.b(v1Var3.b()).a();
        c.b a13 = ui.c.a("isOdmlImage");
        v1 v1Var4 = new v1();
        v1Var4.a(4);
        f45268e = a13.b(v1Var4.b()).a();
    }

    private g7() {
    }

    @Override // ui.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        rd rdVar = (rd) obj;
        ui.e eVar = (ui.e) obj2;
        eVar.b(f45265b, rdVar.a());
        eVar.b(f45266c, rdVar.b());
        eVar.b(f45267d, null);
        eVar.b(f45268e, null);
    }
}
