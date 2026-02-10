package rg;

import bj.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g7 implements bj.d {

    /* renamed from: a  reason: collision with root package name */
    static final g7 f46676a = new g7();

    /* renamed from: b  reason: collision with root package name */
    private static final bj.c f46677b;

    /* renamed from: c  reason: collision with root package name */
    private static final bj.c f46678c;

    /* renamed from: d  reason: collision with root package name */
    private static final bj.c f46679d;

    /* renamed from: e  reason: collision with root package name */
    private static final bj.c f46680e;

    static {
        c.b a10 = bj.c.a("imageFormat");
        v1 v1Var = new v1();
        v1Var.a(1);
        f46677b = a10.b(v1Var.b()).a();
        c.b a11 = bj.c.a("originalImageSize");
        v1 v1Var2 = new v1();
        v1Var2.a(2);
        f46678c = a11.b(v1Var2.b()).a();
        c.b a12 = bj.c.a("compressedImageSize");
        v1 v1Var3 = new v1();
        v1Var3.a(3);
        f46679d = a12.b(v1Var3.b()).a();
        c.b a13 = bj.c.a("isOdmlImage");
        v1 v1Var4 = new v1();
        v1Var4.a(4);
        f46680e = a13.b(v1Var4.b()).a();
    }

    private g7() {
    }

    @Override // bj.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        rd rdVar = (rd) obj;
        bj.e eVar = (bj.e) obj2;
        eVar.e(f46677b, rdVar.a());
        eVar.e(f46678c, rdVar.b());
        eVar.e(f46679d, null);
        eVar.e(f46680e, null);
    }
}
