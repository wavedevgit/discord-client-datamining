package ng;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class cc implements pb {

    /* renamed from: a  reason: collision with root package name */
    private ej.b f40404a;

    /* renamed from: b  reason: collision with root package name */
    private final ej.b f40405b;

    /* renamed from: c  reason: collision with root package name */
    private final rb f40406c;

    public cc(Context context, rb rbVar) {
        this.f40406c = rbVar;
        com.google.android.datatransport.cct.a aVar = com.google.android.datatransport.cct.a.f11619g;
        zb.t.f(context);
        final xb.i g10 = zb.t.c().g(aVar);
        if (aVar.a().contains(xb.c.b("json"))) {
            this.f40404a = new ti.w(new ej.b() { // from class: ng.zb
                @Override // ej.b
                public final Object get() {
                    return xb.i.this.a("FIREBASE_ML_SDK", byte[].class, xb.c.b("json"), new xb.g() { // from class: ng.bc
                        @Override // xb.g
                        public final Object apply(Object obj) {
                            return (byte[]) obj;
                        }
                    });
                }
            });
        }
        this.f40405b = new ti.w(new ej.b() { // from class: ng.ac
            @Override // ej.b
            public final Object get() {
                return xb.i.this.a("FIREBASE_ML_SDK", byte[].class, xb.c.b("proto"), new xb.g() { // from class: ng.yb
                    @Override // xb.g
                    public final Object apply(Object obj) {
                        return (byte[]) obj;
                    }
                });
            }
        });
    }

    static xb.d b(rb rbVar, ob obVar) {
        return xb.d.g(obVar.c(rbVar.a(), false));
    }

    @Override // ng.pb
    public final void a(ob obVar) {
        if (this.f40406c.a() == 0) {
            ej.b bVar = this.f40404a;
            if (bVar != null) {
                ((xb.h) bVar.get()).a(b(this.f40406c, obVar));
                return;
            }
            return;
        }
        ((xb.h) this.f40405b.get()).a(b(this.f40406c, obVar));
    }
}
