package pg;

import ui.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class za implements ui.d {

    /* renamed from: a  reason: collision with root package name */
    static final za f46048a = new za();

    /* renamed from: b  reason: collision with root package name */
    private static final ui.c f46049b;

    /* renamed from: c  reason: collision with root package name */
    private static final ui.c f46050c;

    /* renamed from: d  reason: collision with root package name */
    private static final ui.c f46051d;

    static {
        c.b a10 = ui.c.a("languageOption");
        v1 v1Var = new v1();
        v1Var.a(3);
        f46049b = a10.b(v1Var.b()).a();
        c.b a11 = ui.c.a("isUsingLegacyApi");
        v1 v1Var2 = new v1();
        v1Var2.a(4);
        f46050c = a11.b(v1Var2.b()).a();
        c.b a12 = ui.c.a("sdkVersion");
        v1 v1Var3 = new v1();
        v1Var3.a(5);
        f46051d = a12.b(v1Var3.b()).a();
    }

    private za() {
    }

    @Override // ui.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        ui.e eVar = (ui.e) obj2;
        eVar.b(f46049b, ((wh) obj).a());
        eVar.b(f46050c, null);
        eVar.b(f46051d, null);
    }
}
