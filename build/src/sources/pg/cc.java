package pg;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class cc implements pb {

    /* renamed from: a  reason: collision with root package name */
    private ij.b f42391a;

    /* renamed from: b  reason: collision with root package name */
    private final ij.b f42392b;

    /* renamed from: c  reason: collision with root package name */
    private final rb f42393c;

    public cc(Context context, rb rbVar) {
        this.f42393c = rbVar;
        com.google.android.datatransport.cct.a aVar = com.google.android.datatransport.cct.a.f12236g;
        ac.t.f(context);
        final yb.i g10 = ac.t.c().g(aVar);
        if (aVar.a().contains(yb.c.b("json"))) {
            this.f42391a = new xi.w(new ij.b() { // from class: pg.zb
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
        this.f42392b = new xi.w(new ij.b() { // from class: pg.ac
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
        if (this.f42393c.a() == 0) {
            ij.b bVar = this.f42391a;
            if (bVar != null) {
                ((yb.h) bVar.get()).a(b(this.f42393c, obVar));
                return;
            }
            return;
        }
        ((yb.h) this.f42392b.get()).a(b(this.f42393c, obVar));
    }
}
