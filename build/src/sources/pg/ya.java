package pg;

import ui.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class ya implements ui.d {

    /* renamed from: a  reason: collision with root package name */
    static final ya f45989a = new ya();

    /* renamed from: b  reason: collision with root package name */
    private static final ui.c f45990b;

    /* renamed from: c  reason: collision with root package name */
    private static final ui.c f45991c;

    /* renamed from: d  reason: collision with root package name */
    private static final ui.c f45992d;

    static {
        c.b a10 = ui.c.a("inferenceCommonLogEvent");
        v1 v1Var = new v1();
        v1Var.a(1);
        f45990b = a10.b(v1Var.b()).a();
        c.b a11 = ui.c.a("imageInfo");
        v1 v1Var2 = new v1();
        v1Var2.a(2);
        f45991c = a11.b(v1Var2.b()).a();
        c.b a12 = ui.c.a("recognizerOptions");
        v1 v1Var3 = new v1();
        v1Var3.a(3);
        f45992d = a12.b(v1Var3.b()).a();
    }

    private ya() {
    }

    @Override // ui.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        rh rhVar = (rh) obj;
        ui.e eVar = (ui.e) obj2;
        eVar.b(f45990b, rhVar.b());
        eVar.b(f45991c, rhVar.a());
        eVar.b(f45992d, rhVar.c());
    }
}
