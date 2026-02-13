package qg;

import bj.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i5 implements bj.d {

    /* renamed from: a  reason: collision with root package name */
    static final i5 f45128a = new i5();

    /* renamed from: b  reason: collision with root package name */
    private static final bj.c f45129b;

    /* renamed from: c  reason: collision with root package name */
    private static final bj.c f45130c;

    /* renamed from: d  reason: collision with root package name */
    private static final bj.c f45131d;

    /* renamed from: e  reason: collision with root package name */
    private static final bj.c f45132e;

    /* renamed from: f  reason: collision with root package name */
    private static final bj.c f45133f;

    /* renamed from: g  reason: collision with root package name */
    private static final bj.c f45134g;

    static {
        c.b a10 = bj.c.a("maxMs");
        s1 s1Var = new s1();
        s1Var.a(1);
        f45129b = a10.b(s1Var.b()).a();
        c.b a11 = bj.c.a("minMs");
        s1 s1Var2 = new s1();
        s1Var2.a(2);
        f45130c = a11.b(s1Var2.b()).a();
        c.b a12 = bj.c.a("avgMs");
        s1 s1Var3 = new s1();
        s1Var3.a(3);
        f45131d = a12.b(s1Var3.b()).a();
        c.b a13 = bj.c.a("firstQuartileMs");
        s1 s1Var4 = new s1();
        s1Var4.a(4);
        f45132e = a13.b(s1Var4.b()).a();
        c.b a14 = bj.c.a("medianMs");
        s1 s1Var5 = new s1();
        s1Var5.a(5);
        f45133f = a14.b(s1Var5.b()).a();
        c.b a15 = bj.c.a("thirdQuartileMs");
        s1 s1Var6 = new s1();
        s1Var6.a(6);
        f45134g = a15.b(s1Var6.b()).a();
    }

    private i5() {
    }

    @Override // bj.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        e9 e9Var = (e9) obj;
        bj.e eVar = (bj.e) obj2;
        eVar.e(f45129b, e9Var.c());
        eVar.e(f45130c, e9Var.e());
        eVar.e(f45131d, e9Var.a());
        eVar.e(f45132e, e9Var.b());
        eVar.e(f45133f, e9Var.d());
        eVar.e(f45134g, e9Var.f());
    }
}
