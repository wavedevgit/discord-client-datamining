package pg;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class fk implements mj {

    /* renamed from: a  reason: collision with root package name */
    private bj.b f45235a;

    /* renamed from: b  reason: collision with root package name */
    private final bj.b f45236b;

    /* renamed from: c  reason: collision with root package name */
    private final oj f45237c;

    public fk(Context context, oj ojVar) {
        this.f45237c = ojVar;
        com.google.android.datatransport.cct.a aVar = com.google.android.datatransport.cct.a.f12637g;
        zb.t.f(context);
        final xb.i g10 = zb.t.c().g(aVar);
        if (aVar.a().contains(xb.c.b("json"))) {
            this.f45235a = new qi.w(new bj.b() { // from class: pg.ck
                @Override // bj.b
                public final Object get() {
                    return xb.i.this.a("FIREBASE_ML_SDK", byte[].class, xb.c.b("json"), new xb.g() { // from class: pg.ek
                        @Override // xb.g
                        public final Object apply(Object obj) {
                            return (byte[]) obj;
                        }
                    });
                }
            });
        }
        this.f45236b = new qi.w(new bj.b() { // from class: pg.dk
            @Override // bj.b
            public final Object get() {
                return xb.i.this.a("FIREBASE_ML_SDK", byte[].class, xb.c.b("proto"), new xb.g() { // from class: pg.bk
                    @Override // xb.g
                    public final Object apply(Object obj) {
                        return (byte[]) obj;
                    }
                });
            }
        });
    }

    static xb.d b(oj ojVar, lj ljVar) {
        int a10 = ojVar.a();
        if (ljVar.zza() != 0) {
            return xb.d.e(ljVar.a(a10, false));
        }
        return xb.d.g(ljVar.a(a10, false));
    }

    @Override // pg.mj
    public final void a(lj ljVar) {
        if (this.f45237c.a() == 0) {
            bj.b bVar = this.f45235a;
            if (bVar != null) {
                ((xb.h) bVar.get()).a(b(this.f45237c, ljVar));
                return;
            }
            return;
        }
        ((xb.h) this.f45236b.get()).a(b(this.f45237c, ljVar));
    }
}
