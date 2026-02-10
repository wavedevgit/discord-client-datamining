package rg;

import zi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class q5 implements zi.d {

    /* renamed from: a  reason: collision with root package name */
    static final q5 f48625a = new q5();

    /* renamed from: b  reason: collision with root package name */
    private static final zi.c f48626b;

    /* renamed from: c  reason: collision with root package name */
    private static final zi.c f48627c;

    /* renamed from: d  reason: collision with root package name */
    private static final zi.c f48628d;

    /* renamed from: e  reason: collision with root package name */
    private static final zi.c f48629e;

    /* renamed from: f  reason: collision with root package name */
    private static final zi.c f48630f;

    static {
        c.b a10 = zi.c.a("errorCode");
        v1 v1Var = new v1();
        v1Var.a(1);
        f48626b = a10.b(v1Var.b()).a();
        c.b a11 = zi.c.a("hasResult");
        v1 v1Var2 = new v1();
        v1Var2.a(2);
        f48627c = a11.b(v1Var2.b()).a();
        c.b a12 = zi.c.a("isColdCall");
        v1 v1Var3 = new v1();
        v1Var3.a(3);
        f48628d = a12.b(v1Var3.b()).a();
        c.b a13 = zi.c.a("imageInfo");
        v1 v1Var4 = new v1();
        v1Var4.a(4);
        f48629e = a13.b(v1Var4.b()).a();
        c.b a14 = zi.c.a("recognizerOptions");
        v1 v1Var5 = new v1();
        v1Var5.a(5);
        f48630f = a14.b(v1Var5.b()).a();
    }

    private q5() {
    }

    @Override // zi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        w3 w3Var = (w3) obj;
        zi.e eVar = (zi.e) obj2;
        eVar.d(f48626b, w3Var.a());
        eVar.d(f48627c, null);
        eVar.d(f48628d, w3Var.c());
        eVar.d(f48629e, null);
        eVar.d(f48630f, w3Var.b());
    }
}
