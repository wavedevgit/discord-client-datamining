package pg;

import ui.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class q5 implements ui.d {

    /* renamed from: a  reason: collision with root package name */
    static final q5 f45651a = new q5();

    /* renamed from: b  reason: collision with root package name */
    private static final ui.c f45652b;

    /* renamed from: c  reason: collision with root package name */
    private static final ui.c f45653c;

    /* renamed from: d  reason: collision with root package name */
    private static final ui.c f45654d;

    /* renamed from: e  reason: collision with root package name */
    private static final ui.c f45655e;

    /* renamed from: f  reason: collision with root package name */
    private static final ui.c f45656f;

    static {
        c.b a10 = ui.c.a("errorCode");
        v1 v1Var = new v1();
        v1Var.a(1);
        f45652b = a10.b(v1Var.b()).a();
        c.b a11 = ui.c.a("hasResult");
        v1 v1Var2 = new v1();
        v1Var2.a(2);
        f45653c = a11.b(v1Var2.b()).a();
        c.b a12 = ui.c.a("isColdCall");
        v1 v1Var3 = new v1();
        v1Var3.a(3);
        f45654d = a12.b(v1Var3.b()).a();
        c.b a13 = ui.c.a("imageInfo");
        v1 v1Var4 = new v1();
        v1Var4.a(4);
        f45655e = a13.b(v1Var4.b()).a();
        c.b a14 = ui.c.a("recognizerOptions");
        v1 v1Var5 = new v1();
        v1Var5.a(5);
        f45656f = a14.b(v1Var5.b()).a();
    }

    private q5() {
    }

    @Override // ui.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        w3 w3Var = (w3) obj;
        ui.e eVar = (ui.e) obj2;
        eVar.b(f45652b, w3Var.a());
        eVar.b(f45653c, null);
        eVar.b(f45654d, w3Var.c());
        eVar.b(f45655e, null);
        eVar.b(f45656f, w3Var.b());
    }
}
