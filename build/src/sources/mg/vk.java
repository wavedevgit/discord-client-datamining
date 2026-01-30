package mg;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class vk implements dk {

    /* renamed from: a  reason: collision with root package name */
    private bj.b f38747a;

    /* renamed from: b  reason: collision with root package name */
    private final bj.b f38748b;

    /* renamed from: c  reason: collision with root package name */
    private final fk f38749c;

    public vk(Context context, fk fkVar) {
        this.f38749c = fkVar;
        com.google.android.datatransport.cct.a aVar = com.google.android.datatransport.cct.a.f12637g;
        zb.t.f(context);
        final xb.i g10 = zb.t.c().g(aVar);
        if (aVar.a().contains(xb.c.b("json"))) {
            this.f38747a = new qi.w(new bj.b() { // from class: mg.sk
                @Override // bj.b
                public final Object get() {
                    return xb.i.this.a("FIREBASE_ML_SDK", byte[].class, xb.c.b("json"), new xb.g() { // from class: mg.uk
                        @Override // xb.g
                        public final Object apply(Object obj) {
                            return (byte[]) obj;
                        }
                    });
                }
            });
        }
        this.f38748b = new qi.w(new bj.b() { // from class: mg.tk
            @Override // bj.b
            public final Object get() {
                return xb.i.this.a("FIREBASE_ML_SDK", byte[].class, xb.c.b("proto"), new xb.g() { // from class: mg.rk
                    @Override // xb.g
                    public final Object apply(Object obj) {
                        return (byte[]) obj;
                    }
                });
            }
        });
    }

    static xb.d b(fk fkVar, ck ckVar) {
        int a10 = fkVar.a();
        if (ckVar.zza() != 0) {
            return xb.d.e(ckVar.a(a10, false));
        }
        return xb.d.g(ckVar.a(a10, false));
    }

    @Override // mg.dk
    public final void a(ck ckVar) {
        if (this.f38749c.a() == 0) {
            bj.b bVar = this.f38747a;
            if (bVar != null) {
                ((xb.h) bVar.get()).a(b(this.f38749c, ckVar));
                return;
            }
            return;
        }
        ((xb.h) this.f38748b.get()).a(b(this.f38749c, ckVar));
    }
}
