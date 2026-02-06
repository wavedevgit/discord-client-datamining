package qg;

import yi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class za implements yi.d {

    /* renamed from: a  reason: collision with root package name */
    static final za f47766a = new za();

    /* renamed from: b  reason: collision with root package name */
    private static final yi.c f47767b;

    /* renamed from: c  reason: collision with root package name */
    private static final yi.c f47768c;

    /* renamed from: d  reason: collision with root package name */
    private static final yi.c f47769d;

    static {
        c.b a10 = yi.c.a("languageOption");
        v1 v1Var = new v1();
        v1Var.a(3);
        f47767b = a10.b(v1Var.b()).a();
        c.b a11 = yi.c.a("isUsingLegacyApi");
        v1 v1Var2 = new v1();
        v1Var2.a(4);
        f47768c = a11.b(v1Var2.b()).a();
        c.b a12 = yi.c.a("sdkVersion");
        v1 v1Var3 = new v1();
        v1Var3.a(5);
        f47769d = a12.b(v1Var3.b()).a();
    }

    private za() {
    }

    @Override // yi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        yi.e eVar = (yi.e) obj2;
        eVar.a(f47767b, ((wh) obj).a());
        eVar.a(f47768c, null);
        eVar.a(f47769d, null);
    }
}
