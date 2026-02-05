package lg;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n0 implements b0 {

    /* renamed from: a  reason: collision with root package name */
    private ej.b f36847a;

    /* renamed from: b  reason: collision with root package name */
    private final ej.b f36848b;

    /* renamed from: c  reason: collision with root package name */
    private final e0 f36849c;

    public n0(Context context, e0 e0Var) {
        this.f36849c = e0Var;
        com.google.android.datatransport.cct.a aVar = com.google.android.datatransport.cct.a.f11619g;
        zb.t.f(context);
        final xb.i g10 = zb.t.c().g(aVar);
        if (aVar.a().contains(xb.c.b("json"))) {
            this.f36847a = new ti.w(new ej.b() { // from class: lg.k0
                @Override // ej.b
                public final Object get() {
                    return xb.i.this.a("FIREBASE_ML_SDK", byte[].class, xb.c.b("json"), new xb.g() { // from class: lg.m0
                        @Override // xb.g
                        public final Object apply(Object obj) {
                            return (byte[]) obj;
                        }
                    });
                }
            });
        }
        this.f36848b = new ti.w(new ej.b() { // from class: lg.l0
            @Override // ej.b
            public final Object get() {
                return xb.i.this.a("FIREBASE_ML_SDK", byte[].class, xb.c.b("proto"), new xb.g() { // from class: lg.j0
                    @Override // xb.g
                    public final Object apply(Object obj) {
                        return (byte[]) obj;
                    }
                });
            }
        });
    }
}
