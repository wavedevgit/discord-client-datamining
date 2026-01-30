package pg;

import ui.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class za implements ui.d {

    /* renamed from: a  reason: collision with root package name */
    static final za f45974a = new za();

    /* renamed from: b  reason: collision with root package name */
    private static final ui.c f45975b;

    /* renamed from: c  reason: collision with root package name */
    private static final ui.c f45976c;

    /* renamed from: d  reason: collision with root package name */
    private static final ui.c f45977d;

    static {
        c.b a10 = ui.c.a("languageOption");
        v1 v1Var = new v1();
        v1Var.a(3);
        f45975b = a10.b(v1Var.b()).a();
        c.b a11 = ui.c.a("isUsingLegacyApi");
        v1 v1Var2 = new v1();
        v1Var2.a(4);
        f45976c = a11.b(v1Var2.b()).a();
        c.b a12 = ui.c.a("sdkVersion");
        v1 v1Var3 = new v1();
        v1Var3.a(5);
        f45977d = a12.b(v1Var3.b()).a();
    }

    private za() {
    }

    @Override // ui.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        ui.e eVar = (ui.e) obj2;
        eVar.b(f45975b, ((wh) obj).a());
        eVar.b(f45976c, null);
        eVar.b(f45977d, null);
    }
}
