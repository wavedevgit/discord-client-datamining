package rg;

import bj.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class za implements bj.d {

    /* renamed from: a  reason: collision with root package name */
    static final za f47955a = new za();

    /* renamed from: b  reason: collision with root package name */
    private static final bj.c f47956b;

    /* renamed from: c  reason: collision with root package name */
    private static final bj.c f47957c;

    /* renamed from: d  reason: collision with root package name */
    private static final bj.c f47958d;

    static {
        c.b a10 = bj.c.a("languageOption");
        v1 v1Var = new v1();
        v1Var.a(3);
        f47956b = a10.b(v1Var.b()).a();
        c.b a11 = bj.c.a("isUsingLegacyApi");
        v1 v1Var2 = new v1();
        v1Var2.a(4);
        f47957c = a11.b(v1Var2.b()).a();
        c.b a12 = bj.c.a("sdkVersion");
        v1 v1Var3 = new v1();
        v1Var3.a(5);
        f47958d = a12.b(v1Var3.b()).a();
    }

    private za() {
    }

    @Override // bj.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        bj.e eVar = (bj.e) obj2;
        eVar.e(f47956b, ((wh) obj).a());
        eVar.e(f47957c, null);
        eVar.e(f47958d, null);
    }
}
