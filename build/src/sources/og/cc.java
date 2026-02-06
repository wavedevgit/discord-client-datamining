package og;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class cc implements pb {

    /* renamed from: a  reason: collision with root package name */
    private fj.b f41856a;

    /* renamed from: b  reason: collision with root package name */
    private final fj.b f41857b;

    /* renamed from: c  reason: collision with root package name */
    private final rb f41858c;

    public cc(Context context, rb rbVar) {
        this.f41858c = rbVar;
        com.google.android.datatransport.cct.a aVar = com.google.android.datatransport.cct.a.f11518g;
        zb.t.f(context);
        final xb.i g10 = zb.t.c().g(aVar);
        if (aVar.a().contains(xb.c.b("json"))) {
            this.f41856a = new ui.w(new fj.b() { // from class: og.zb
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
        this.f41857b = new ui.w(new fj.b() { // from class: og.ac
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
        if (this.f41858c.a() == 0) {
            fj.b bVar = this.f41856a;
            if (bVar != null) {
                ((xb.h) bVar.get()).a(b(this.f41858c, obVar));
                return;
            }
            return;
        }
        ((xb.h) this.f41857b.get()).a(b(this.f41858c, obVar));
    }
}
