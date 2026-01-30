package pg;

import ui.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class xa implements ui.d {

    /* renamed from: a  reason: collision with root package name */
    static final xa f45921a = new xa();

    /* renamed from: b  reason: collision with root package name */
    private static final ui.c f45922b;

    static {
        c.b a10 = ui.c.a("errorCode");
        v1 v1Var = new v1();
        v1Var.a(1);
        f45922b = a10.b(v1Var.b()).a();
    }

    private xa() {
    }

    @Override // ui.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        ((ui.e) obj2).b(f45922b, ((oh) obj).a());
    }
}
