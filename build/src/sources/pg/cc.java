package pg;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class cc implements pb {

    /* renamed from: a  reason: collision with root package name */
    private ij.b f41823a;

    /* renamed from: b  reason: collision with root package name */
    private final ij.b f41824b;

    /* renamed from: c  reason: collision with root package name */
    private final rb f41825c;

    public cc(Context context, rb rbVar) {
        this.f41825c = rbVar;
        com.google.android.datatransport.cct.a aVar = com.google.android.datatransport.cct.a.f12236g;
        ac.t.f(context);
        final yb.i g10 = ac.t.c().g(aVar);
        if (aVar.a().contains(yb.c.b("json"))) {
            this.f41823a = new xi.w(new ij.b() { // from class: pg.zb
                @Override // ij.b
                public final Object get() {
                    return yb.i.this.a("FIREBASE_ML_SDK", byte[].class, yb.c.b("json"), new yb.g() { // from class: pg.bc
                        @Override // yb.g
                        public final Object apply(Object obj) {
                            return (byte[]) obj;
                        }
                    });
                }
            });
        }
        this.f41824b = new xi.w(new ij.b() { // from class: pg.ac
            @Override // ij.b
            public final Object get() {
                return yb.i.this.a("FIREBASE_ML_SDK", byte[].class, yb.c.b("proto"), new yb.g() { // from class: pg.yb
                    @Override // yb.g
                    public final Object apply(Object obj) {
                        return (byte[]) obj;
                    }
                });
            }
        });
    }

    static yb.d b(rb rbVar, ob obVar) {
        return yb.d.g(obVar.c(rbVar.a(), false));
    }

    @Override // pg.pb
    public final void a(ob obVar) {
        if (this.f41825c.a() == 0) {
            ij.b bVar = this.f41823a;
            if (bVar != null) {
                ((yb.h) bVar.get()).a(b(this.f41825c, obVar));
                return;
            }
            return;
        }
        ((yb.h) this.f41824b.get()).a(b(this.f41825c, obVar));
    }
}
