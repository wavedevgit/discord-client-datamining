package rg;

import bj.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class q5 implements bj.d {

    /* renamed from: a  reason: collision with root package name */
    static final q5 f47080a = new q5();

    /* renamed from: b  reason: collision with root package name */
    private static final bj.c f47081b;

    /* renamed from: c  reason: collision with root package name */
    private static final bj.c f47082c;

    /* renamed from: d  reason: collision with root package name */
    private static final bj.c f47083d;

    /* renamed from: e  reason: collision with root package name */
    private static final bj.c f47084e;

    /* renamed from: f  reason: collision with root package name */
    private static final bj.c f47085f;

    static {
        c.b a10 = bj.c.a("errorCode");
        v1 v1Var = new v1();
        v1Var.a(1);
        f47081b = a10.b(v1Var.b()).a();
        c.b a11 = bj.c.a("hasResult");
        v1 v1Var2 = new v1();
        v1Var2.a(2);
        f47082c = a11.b(v1Var2.b()).a();
        c.b a12 = bj.c.a("isColdCall");
        v1 v1Var3 = new v1();
        v1Var3.a(3);
        f47083d = a12.b(v1Var3.b()).a();
        c.b a13 = bj.c.a("imageInfo");
        v1 v1Var4 = new v1();
        v1Var4.a(4);
        f47084e = a13.b(v1Var4.b()).a();
        c.b a14 = bj.c.a("recognizerOptions");
        v1 v1Var5 = new v1();
        v1Var5.a(5);
        f47085f = a14.b(v1Var5.b()).a();
    }

    private q5() {
    }

    @Override // bj.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        w3 w3Var = (w3) obj;
        bj.e eVar = (bj.e) obj2;
        eVar.e(f47081b, w3Var.a());
        eVar.e(f47082c, null);
        eVar.e(f47083d, w3Var.c());
        eVar.e(f47084e, null);
        eVar.e(f47085f, w3Var.b());
    }
}
