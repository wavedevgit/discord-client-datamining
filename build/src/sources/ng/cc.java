package ng;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class cc implements pb {

    /* renamed from: a  reason: collision with root package name */
    private bj.b f40944a;

    /* renamed from: b  reason: collision with root package name */
    private final bj.b f40945b;

    /* renamed from: c  reason: collision with root package name */
    private final rb f40946c;

    public cc(Context context, rb rbVar) {
        this.f40946c = rbVar;
        com.google.android.datatransport.cct.a aVar = com.google.android.datatransport.cct.a.f11234g;
        zb.t.f(context);
        final xb.i g10 = zb.t.c().g(aVar);
        if (aVar.a().contains(xb.c.b("json"))) {
            this.f40944a = new qi.w(new bj.b() { // from class: ng.zb
                @Override // bj.b
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
        this.f40945b = new qi.w(new bj.b() { // from class: ng.ac
            @Override // bj.b
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
        if (this.f40946c.a() == 0) {
            bj.b bVar = this.f40944a;
            if (bVar != null) {
                ((xb.h) bVar.get()).a(b(this.f40946c, obVar));
                return;
            }
            return;
        }
        ((xb.h) this.f40945b.get()).a(b(this.f40946c, obVar));
    }
}
