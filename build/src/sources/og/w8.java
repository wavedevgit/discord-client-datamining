package og;

import bj.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class w8 implements bj.d {

    /* renamed from: a  reason: collision with root package name */
    static final w8 f39764a = new w8();

    /* renamed from: b  reason: collision with root package name */
    private static final bj.c f39765b;

    static {
        c.b a10 = bj.c.a("errorCode");
        l2 l2Var = new l2();
        l2Var.a(1);
        f39765b = a10.b(l2Var.b()).a();
    }

    private w8() {
    }

    @Override // bj.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        ((bj.e) obj2).e(f39765b, ((rf) obj).a());
    }
}
