package pg;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class cc implements pb {

    /* renamed from: a  reason: collision with root package name */
    private gj.b f43364a;

    /* renamed from: b  reason: collision with root package name */
    private final gj.b f43365b;

    /* renamed from: c  reason: collision with root package name */
    private final rb f43366c;

    public cc(Context context, rb rbVar) {
        this.f43366c = rbVar;
        com.google.android.datatransport.cct.a aVar = com.google.android.datatransport.cct.a.f11658g;
        ac.t.f(context);
        final yb.i g10 = ac.t.c().g(aVar);
        if (aVar.a().contains(yb.c.b("json"))) {
            this.f43364a = new vi.w(new gj.b() { // from class: pg.zb
                @Override // gj.b
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
        this.f43365b = new vi.w(new gj.b() { // from class: pg.ac
            @Override // gj.b
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
        if (this.f43366c.a() == 0) {
            gj.b bVar = this.f43364a;
            if (bVar != null) {
                ((yb.h) bVar.get()).a(b(this.f43366c, obVar));
                return;
            }
            return;
        }
        ((yb.h) this.f43365b.get()).a(b(this.f43366c, obVar));
    }
}
