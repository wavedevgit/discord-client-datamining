package rg;

import zi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class ya implements zi.d {

    /* renamed from: a  reason: collision with root package name */
    static final ya f48915a = new ya();

    /* renamed from: b  reason: collision with root package name */
    private static final zi.c f48916b;

    /* renamed from: c  reason: collision with root package name */
    private static final zi.c f48917c;

    /* renamed from: d  reason: collision with root package name */
    private static final zi.c f48918d;

    static {
        c.b a10 = zi.c.a("inferenceCommonLogEvent");
        v1 v1Var = new v1();
        v1Var.a(1);
        f48916b = a10.b(v1Var.b()).a();
        c.b a11 = zi.c.a("imageInfo");
        v1 v1Var2 = new v1();
        v1Var2.a(2);
        f48917c = a11.b(v1Var2.b()).a();
        c.b a12 = zi.c.a("recognizerOptions");
        v1 v1Var3 = new v1();
        v1Var3.a(3);
        f48918d = a12.b(v1Var3.b()).a();
    }

    private ya() {
    }

    @Override // zi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        rh rhVar = (rh) obj;
        zi.e eVar = (zi.e) obj2;
        eVar.d(f48916b, rhVar.b());
        eVar.d(f48917c, rhVar.a());
        eVar.d(f48918d, rhVar.c());
    }
}
