package pg;

import xi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class za implements xi.d {

    /* renamed from: a  reason: collision with root package name */
    static final za f45936a = new za();

    /* renamed from: b  reason: collision with root package name */
    private static final xi.c f45937b;

    /* renamed from: c  reason: collision with root package name */
    private static final xi.c f45938c;

    /* renamed from: d  reason: collision with root package name */
    private static final xi.c f45939d;

    static {
        c.b a10 = xi.c.a("languageOption");
        v1 v1Var = new v1();
        v1Var.a(3);
        f45937b = a10.b(v1Var.b()).a();
        c.b a11 = xi.c.a("isUsingLegacyApi");
        v1 v1Var2 = new v1();
        v1Var2.a(4);
        f45938c = a11.b(v1Var2.b()).a();
        c.b a12 = xi.c.a("sdkVersion");
        v1 v1Var3 = new v1();
        v1Var3.a(5);
        f45939d = a12.b(v1Var3.b()).a();
    }

    private za() {
    }

    @Override // xi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        xi.e eVar = (xi.e) obj2;
        eVar.d(f45937b, ((wh) obj).a());
        eVar.d(f45938c, null);
        eVar.d(f45939d, null);
    }
}
