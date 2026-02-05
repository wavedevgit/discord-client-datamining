package mg;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class vk implements dk {

    /* renamed from: a  reason: collision with root package name */
    private ej.b f38186a;

    /* renamed from: b  reason: collision with root package name */
    private final ej.b f38187b;

    /* renamed from: c  reason: collision with root package name */
    private final fk f38188c;

    public vk(Context context, fk fkVar) {
        this.f38188c = fkVar;
        com.google.android.datatransport.cct.a aVar = com.google.android.datatransport.cct.a.f11619g;
        zb.t.f(context);
        final xb.i g10 = zb.t.c().g(aVar);
        if (aVar.a().contains(xb.c.b("json"))) {
            this.f38186a = new ti.w(new ej.b() { // from class: mg.sk
                @Override // ej.b
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
        this.f38187b = new ti.w(new ej.b() { // from class: mg.tk
            @Override // ej.b
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
        if (this.f38188c.a() == 0) {
            ej.b bVar = this.f38186a;
            if (bVar != null) {
                ((xb.h) bVar.get()).a(b(this.f38188c, ckVar));
                return;
            }
            return;
        }
        ((xb.h) this.f38187b.get()).a(b(this.f38188c, ckVar));
    }
}
