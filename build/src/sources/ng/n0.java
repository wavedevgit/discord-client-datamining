package ng;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class n0 implements b0 {

    /* renamed from: a  reason: collision with root package name */
    private gj.b f38869a;

    /* renamed from: b  reason: collision with root package name */
    private final gj.b f38870b;

    /* renamed from: c  reason: collision with root package name */
    private final e0 f38871c;

    public n0(Context context, e0 e0Var) {
        this.f38871c = e0Var;
        com.google.android.datatransport.cct.a aVar = com.google.android.datatransport.cct.a.f11658g;
        ac.t.f(context);
        final yb.i g10 = ac.t.c().g(aVar);
        if (aVar.a().contains(yb.c.b("json"))) {
            this.f38869a = new vi.w(new gj.b() { // from class: ng.k0
                @Override // gj.b
                public final Object get() {
                    return yb.i.this.a("FIREBASE_ML_SDK", byte[].class, yb.c.b("json"), new yb.g() { // from class: ng.m0
                        @Override // yb.g
                        public final Object apply(Object obj) {
                            return (byte[]) obj;
                        }
                    });
                }
            });
        }
        this.f38870b = new vi.w(new gj.b() { // from class: ng.l0
            @Override // gj.b
            public final Object get() {
                return yb.i.this.a("FIREBASE_ML_SDK", byte[].class, yb.c.b("proto"), new yb.g() { // from class: ng.j0
                    @Override // yb.g
                    public final Object apply(Object obj) {
                        return (byte[]) obj;
                    }
                });
            }
        });
    }
}
