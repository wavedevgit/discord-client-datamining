package qg;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class fk implements mj {

    /* renamed from: a  reason: collision with root package name */
    private fj.b f47091a;

    /* renamed from: b  reason: collision with root package name */
    private final fj.b f47092b;

    /* renamed from: c  reason: collision with root package name */
    private final oj f47093c;

    public fk(Context context, oj ojVar) {
        this.f47093c = ojVar;
        com.google.android.datatransport.cct.a aVar = com.google.android.datatransport.cct.a.f11518g;
        zb.t.f(context);
        final xb.i g10 = zb.t.c().g(aVar);
        if (aVar.a().contains(xb.c.b("json"))) {
            this.f47091a = new ui.w(new fj.b() { // from class: qg.ck
                @Override // fj.b
                public final Object get() {
                    return xb.i.this.a("FIREBASE_ML_SDK", byte[].class, xb.c.b("json"), new xb.g() { // from class: qg.ek
                        @Override // xb.g
                        public final Object apply(Object obj) {
                            return (byte[]) obj;
                        }
                    });
                }
            });
        }
        this.f47092b = new ui.w(new fj.b() { // from class: qg.dk
            @Override // fj.b
            public final Object get() {
                return xb.i.this.a("FIREBASE_ML_SDK", byte[].class, xb.c.b("proto"), new xb.g() { // from class: qg.bk
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

    @Override // qg.mj
    public final void a(lj ljVar) {
        if (this.f47093c.a() == 0) {
            fj.b bVar = this.f47091a;
            if (bVar != null) {
                ((xb.h) bVar.get()).a(b(this.f47093c, ljVar));
                return;
            }
            return;
        }
        ((xb.h) this.f47092b.get()).a(b(this.f47093c, ljVar));
    }
}
