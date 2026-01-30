package pg;

import ui.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class q5 implements ui.d {

    /* renamed from: a  reason: collision with root package name */
    static final q5 f45667a = new q5();

    /* renamed from: b  reason: collision with root package name */
    private static final ui.c f45668b;

    /* renamed from: c  reason: collision with root package name */
    private static final ui.c f45669c;

    /* renamed from: d  reason: collision with root package name */
    private static final ui.c f45670d;

    /* renamed from: e  reason: collision with root package name */
    private static final ui.c f45671e;

    /* renamed from: f  reason: collision with root package name */
    private static final ui.c f45672f;

    static {
        c.b a10 = ui.c.a("errorCode");
        v1 v1Var = new v1();
        v1Var.a(1);
        f45668b = a10.b(v1Var.b()).a();
        c.b a11 = ui.c.a("hasResult");
        v1 v1Var2 = new v1();
        v1Var2.a(2);
        f45669c = a11.b(v1Var2.b()).a();
        c.b a12 = ui.c.a("isColdCall");
        v1 v1Var3 = new v1();
        v1Var3.a(3);
        f45670d = a12.b(v1Var3.b()).a();
        c.b a13 = ui.c.a("imageInfo");
        v1 v1Var4 = new v1();
        v1Var4.a(4);
        f45671e = a13.b(v1Var4.b()).a();
        c.b a14 = ui.c.a("recognizerOptions");
        v1 v1Var5 = new v1();
        v1Var5.a(5);
        f45672f = a14.b(v1Var5.b()).a();
    }

    private q5() {
    }

    @Override // ui.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        w3 w3Var = (w3) obj;
        ui.e eVar = (ui.e) obj2;
        eVar.b(f45668b, w3Var.a());
        eVar.b(f45669c, null);
        eVar.b(f45670d, w3Var.c());
        eVar.b(f45671e, null);
        eVar.b(f45672f, w3Var.b());
    }
}
