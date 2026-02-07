package og;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class cc implements pb {

    /* renamed from: a  reason: collision with root package name */
    private fj.b f41904a;

    /* renamed from: b  reason: collision with root package name */
    private final fj.b f41905b;

    /* renamed from: c  reason: collision with root package name */
    private final rb f41906c;

    public cc(Context context, rb rbVar) {
        this.f41906c = rbVar;
        com.google.android.datatransport.cct.a aVar = com.google.android.datatransport.cct.a.f11518g;
        zb.t.f(context);
        final xb.i g10 = zb.t.c().g(aVar);
        if (aVar.a().contains(xb.c.b("json"))) {
            this.f41904a = new ui.w(new fj.b() { // from class: og.zb
                @Override // fj.b
                public final Object get() {
                    return xb.i.this.a("FIREBASE_ML_SDK", byte[].class, xb.c.b("json"), new xb.g() { // from class: og.bc
                        @Override // xb.g
                        public final Object apply(Object obj) {
                            return (byte[]) obj;
                        }
                    });
                }
            });
        }
        this.f41905b = new ui.w(new fj.b() { // from class: og.ac
            @Override // fj.b
            public final Object get() {
                return xb.i.this.a("FIREBASE_ML_SDK", byte[].class, xb.c.b("proto"), new xb.g() { // from class: og.yb
                    @Override // xb.g
                    public final Object apply(Object obj) {
                        return (byte[]) obj;
                    }
                });
            }
        });
    }

    static xb.d b(rb rbVar, ob obVar) {
        return xb.d.g(obVar.b(rbVar.a(), false));
    }

    @Override // og.pb
    public final void a(ob obVar) {
        if (this.f41906c.a() == 0) {
            fj.b bVar = this.f41904a;
            if (bVar != null) {
                ((xb.h) bVar.get()).a(b(this.f41906c, obVar));
                return;
            }
            return;
        }
        ((xb.h) this.f41905b.get()).a(b(this.f41906c, obVar));
    }
}
