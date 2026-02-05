package pg;

import xi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class q5 implements xi.d {

    /* renamed from: a  reason: collision with root package name */
    static final q5 f45629a = new q5();

    /* renamed from: b  reason: collision with root package name */
    private static final xi.c f45630b;

    /* renamed from: c  reason: collision with root package name */
    private static final xi.c f45631c;

    /* renamed from: d  reason: collision with root package name */
    private static final xi.c f45632d;

    /* renamed from: e  reason: collision with root package name */
    private static final xi.c f45633e;

    /* renamed from: f  reason: collision with root package name */
    private static final xi.c f45634f;

    static {
        c.b a10 = xi.c.a("errorCode");
        v1 v1Var = new v1();
        v1Var.a(1);
        f45630b = a10.b(v1Var.b()).a();
        c.b a11 = xi.c.a("hasResult");
        v1 v1Var2 = new v1();
        v1Var2.a(2);
        f45631c = a11.b(v1Var2.b()).a();
        c.b a12 = xi.c.a("isColdCall");
        v1 v1Var3 = new v1();
        v1Var3.a(3);
        f45632d = a12.b(v1Var3.b()).a();
        c.b a13 = xi.c.a("imageInfo");
        v1 v1Var4 = new v1();
        v1Var4.a(4);
        f45633e = a13.b(v1Var4.b()).a();
        c.b a14 = xi.c.a("recognizerOptions");
        v1 v1Var5 = new v1();
        v1Var5.a(5);
        f45634f = a14.b(v1Var5.b()).a();
    }

    private q5() {
    }

    @Override // xi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        w3 w3Var = (w3) obj;
        xi.e eVar = (xi.e) obj2;
        eVar.d(f45630b, w3Var.a());
        eVar.d(f45631c, null);
        eVar.d(f45632d, w3Var.c());
        eVar.d(f45633e, null);
        eVar.d(f45634f, w3Var.b());
    }
}
