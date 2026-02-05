package pg;

import xi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class a7 implements xi.d {

    /* renamed from: a  reason: collision with root package name */
    static final a7 f45101a = new a7();

    /* renamed from: b  reason: collision with root package name */
    private static final xi.c f45102b;

    /* renamed from: c  reason: collision with root package name */
    private static final xi.c f45103c;

    /* renamed from: d  reason: collision with root package name */
    private static final xi.c f45104d;

    /* renamed from: e  reason: collision with root package name */
    private static final xi.c f45105e;

    /* renamed from: f  reason: collision with root package name */
    private static final xi.c f45106f;

    /* renamed from: g  reason: collision with root package name */
    private static final xi.c f45107g;

    static {
        c.b a10 = xi.c.a("maxMs");
        v1 v1Var = new v1();
        v1Var.a(1);
        f45102b = a10.b(v1Var.b()).a();
        c.b a11 = xi.c.a("minMs");
        v1 v1Var2 = new v1();
        v1Var2.a(2);
        f45103c = a11.b(v1Var2.b()).a();
        c.b a12 = xi.c.a("avgMs");
        v1 v1Var3 = new v1();
        v1Var3.a(3);
        f45104d = a12.b(v1Var3.b()).a();
        c.b a13 = xi.c.a("firstQuartileMs");
        v1 v1Var4 = new v1();
        v1Var4.a(4);
        f45105e = a13.b(v1Var4.b()).a();
        c.b a14 = xi.c.a("medianMs");
        v1 v1Var5 = new v1();
        v1Var5.a(5);
        f45106f = a14.b(v1Var5.b()).a();
        c.b a15 = xi.c.a("thirdQuartileMs");
        v1 v1Var6 = new v1();
        v1Var6.a(6);
        f45107g = a15.b(v1Var6.b()).a();
    }

    private a7() {
    }

    @Override // xi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        jd jdVar = (jd) obj;
        xi.e eVar = (xi.e) obj2;
        eVar.d(f45102b, jdVar.c());
        eVar.d(f45103c, jdVar.e());
        eVar.d(f45104d, jdVar.a());
        eVar.d(f45105e, jdVar.b());
        eVar.d(f45106f, jdVar.d());
        eVar.d(f45107g, jdVar.f());
    }
}
