package og;

import ui.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class n5 implements ui.d {

    /* renamed from: a  reason: collision with root package name */
    static final n5 f43320a = new n5();

    /* renamed from: b  reason: collision with root package name */
    private static final ui.c f43321b;

    /* renamed from: c  reason: collision with root package name */
    private static final ui.c f43322c;

    /* renamed from: d  reason: collision with root package name */
    private static final ui.c f43323d;

    /* renamed from: e  reason: collision with root package name */
    private static final ui.c f43324e;

    static {
        c.b a10 = ui.c.a("imageFormat");
        s1 s1Var = new s1();
        s1Var.a(1);
        f43321b = a10.b(s1Var.b()).a();
        c.b a11 = ui.c.a("originalImageSize");
        s1 s1Var2 = new s1();
        s1Var2.a(2);
        f43322c = a11.b(s1Var2.b()).a();
        c.b a12 = ui.c.a("compressedImageSize");
        s1 s1Var3 = new s1();
        s1Var3.a(3);
        f43323d = a12.b(s1Var3.b()).a();
        c.b a13 = ui.c.a("isOdmlImage");
        s1 s1Var4 = new s1();
        s1Var4.a(4);
        f43324e = a13.b(s1Var4.b()).a();
    }

    private n5() {
    }

    @Override // ui.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        r9 r9Var = (r9) obj;
        ui.e eVar = (ui.e) obj2;
        eVar.b(f43321b, r9Var.a());
        eVar.b(f43322c, r9Var.b());
        eVar.b(f43323d, null);
        eVar.b(f43324e, null);
    }
}
