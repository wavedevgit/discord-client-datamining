package rg;

import zi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class za implements zi.d {

    /* renamed from: a  reason: collision with root package name */
    static final za f48932a = new za();

    /* renamed from: b  reason: collision with root package name */
    private static final zi.c f48933b;

    /* renamed from: c  reason: collision with root package name */
    private static final zi.c f48934c;

    /* renamed from: d  reason: collision with root package name */
    private static final zi.c f48935d;

    static {
        c.b a10 = zi.c.a("languageOption");
        v1 v1Var = new v1();
        v1Var.a(3);
        f48933b = a10.b(v1Var.b()).a();
        c.b a11 = zi.c.a("isUsingLegacyApi");
        v1 v1Var2 = new v1();
        v1Var2.a(4);
        f48934c = a11.b(v1Var2.b()).a();
        c.b a12 = zi.c.a("sdkVersion");
        v1 v1Var3 = new v1();
        v1Var3.a(5);
        f48935d = a12.b(v1Var3.b()).a();
    }

    private za() {
    }

    @Override // zi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        zi.e eVar = (zi.e) obj2;
        eVar.d(f48933b, ((wh) obj).a());
        eVar.d(f48934c, null);
        eVar.d(f48935d, null);
    }
}
