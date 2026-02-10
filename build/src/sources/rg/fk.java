package rg;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class fk implements mj {

    /* renamed from: a  reason: collision with root package name */
    private ij.b f46663a;

    /* renamed from: b  reason: collision with root package name */
    private final ij.b f46664b;

    /* renamed from: c  reason: collision with root package name */
    private final oj f46665c;

    public fk(Context context, oj ojVar) {
        this.f46665c = ojVar;
        com.google.android.datatransport.cct.a aVar = com.google.android.datatransport.cct.a.f12235g;
        ac.t.f(context);
        final yb.i g10 = ac.t.c().g(aVar);
        if (aVar.a().contains(yb.c.b("json"))) {
            this.f46663a = new xi.w(new ij.b() { // from class: rg.ck
                @Override // ij.b
                public final Object get() {
                    return yb.i.this.a("FIREBASE_ML_SDK", byte[].class, yb.c.b("json"), new yb.g() { // from class: rg.ek
                        @Override // yb.g
                        public final Object apply(Object obj) {
                            return (byte[]) obj;
                        }
                    });
                }
            });
        }
        this.f46664b = new xi.w(new ij.b() { // from class: rg.dk
            @Override // ij.b
            public final Object get() {
                return yb.i.this.a("FIREBASE_ML_SDK", byte[].class, yb.c.b("proto"), new yb.g() { // from class: rg.bk
                    @Override // yb.g
                    public final Object apply(Object obj) {
                        return (byte[]) obj;
                    }
                });
            }
        });
    }

    static yb.d b(oj ojVar, lj ljVar) {
        int a10 = ojVar.a();
        if (ljVar.zza() != 0) {
            return yb.d.e(ljVar.a(a10, false));
        }
        return yb.d.g(ljVar.a(a10, false));
    }

    @Override // rg.mj
    public final void a(lj ljVar) {
        if (this.f46665c.a() == 0) {
            ij.b bVar = this.f46663a;
            if (bVar != null) {
                ((yb.h) bVar.get()).a(b(this.f46665c, ljVar));
                return;
            }
            return;
        }
        ((yb.h) this.f46664b.get()).a(b(this.f46665c, ljVar));
    }
}
