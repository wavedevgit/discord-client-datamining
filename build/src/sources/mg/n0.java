package mg;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n0 implements b0 {

    /* renamed from: a  reason: collision with root package name */
    private fj.b f37136a;

    /* renamed from: b  reason: collision with root package name */
    private final fj.b f37137b;

    /* renamed from: c  reason: collision with root package name */
    private final e0 f37138c;

    public n0(Context context, e0 e0Var) {
        this.f37138c = e0Var;
        com.google.android.datatransport.cct.a aVar = com.google.android.datatransport.cct.a.f11518g;
        zb.t.f(context);
        final xb.i g10 = zb.t.c().g(aVar);
        if (aVar.a().contains(xb.c.b("json"))) {
            this.f37136a = new ui.w(new fj.b() { // from class: mg.k0
                @Override // fj.b
                public final Object get() {
                    return xb.i.this.a("FIREBASE_ML_SDK", byte[].class, xb.c.b("json"), new xb.g() { // from class: mg.m0
                        @Override // xb.g
                        public final Object apply(Object obj) {
                            return (byte[]) obj;
                        }
                    });
                }
            });
        }
        this.f37137b = new ui.w(new fj.b() { // from class: mg.l0
            @Override // fj.b
            public final Object get() {
                return xb.i.this.a("FIREBASE_ML_SDK", byte[].class, xb.c.b("proto"), new xb.g() { // from class: mg.j0
                    @Override // xb.g
                    public final Object apply(Object obj) {
                        return (byte[]) obj;
                    }
                });
            }
        });
    }
}
