package pg;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class yd implements pd {

    /* renamed from: a  reason: collision with root package name */
    private fj.b f44977a;

    /* renamed from: b  reason: collision with root package name */
    private final fj.b f44978b;

    /* renamed from: c  reason: collision with root package name */
    private final gd f44979c;

    public yd(Context context, gd gdVar) {
        this.f44979c = gdVar;
        com.google.android.datatransport.cct.a aVar = com.google.android.datatransport.cct.a.f11518g;
        zb.t.f(context);
        final xb.i g10 = zb.t.c().g(aVar);
        if (aVar.a().contains(xb.c.b("json"))) {
            this.f44977a = new ui.w(new fj.b() { // from class: pg.vd
                @Override // fj.b
                public final Object get() {
                    return xb.i.this.a("FIREBASE_ML_SDK", byte[].class, xb.c.b("json"), new xb.g() { // from class: pg.xd
                        @Override // xb.g
                        public final Object apply(Object obj) {
                            return (byte[]) obj;
                        }
                    });
                }
            });
        }
        this.f44978b = new ui.w(new fj.b() { // from class: pg.wd
            @Override // fj.b
            public final Object get() {
                return xb.i.this.a("FIREBASE_ML_SDK", byte[].class, xb.c.b("proto"), new xb.g() { // from class: pg.ud
                    @Override // xb.g
                    public final Object apply(Object obj) {
                        return (byte[]) obj;
                    }
                });
            }
        });
    }

    static xb.d b(gd gdVar, ed edVar) {
        int a10 = gdVar.a();
        if (edVar.zza() != 0) {
            return xb.d.e(edVar.a(a10, false));
        }
        return xb.d.g(edVar.a(a10, false));
    }

    @Override // pg.pd
    public final void a(ed edVar) {
        if (this.f44979c.a() == 0) {
            fj.b bVar = this.f44977a;
            if (bVar != null) {
                ((xb.h) bVar.get()).a(b(this.f44979c, edVar));
                return;
            }
            return;
        }
        ((xb.h) this.f44978b.get()).a(b(this.f44979c, edVar));
    }
}
