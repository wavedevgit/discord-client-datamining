package mg;

import ui.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class w8 implements ui.d {

    /* renamed from: a  reason: collision with root package name */
    static final w8 f38539a = new w8();

    /* renamed from: b  reason: collision with root package name */
    private static final ui.c f38540b;

    static {
        c.b a10 = ui.c.a("errorCode");
        l2 l2Var = new l2();
        l2Var.a(1);
        f38540b = a10.b(l2Var.b()).a();
    }

    private w8() {
    }

    @Override // ui.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        ((ui.e) obj2).b(f38540b, ((rf) obj).a());
    }
}
