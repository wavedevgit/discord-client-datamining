package ng;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class vk implements dk {

    /* renamed from: a  reason: collision with root package name */
    private fj.b f40349a;

    /* renamed from: b  reason: collision with root package name */
    private final fj.b f40350b;

    /* renamed from: c  reason: collision with root package name */
    private final fk f40351c;

    public vk(Context context, fk fkVar) {
        this.f40351c = fkVar;
        com.google.android.datatransport.cct.a aVar = com.google.android.datatransport.cct.a.f11518g;
        zb.t.f(context);
        final xb.i g10 = zb.t.c().g(aVar);
        if (aVar.a().contains(xb.c.b("json"))) {
            this.f40349a = new ui.w(new fj.b() { // from class: ng.sk
                @Override // fj.b
                public final Object get() {
                    return xb.i.this.a("FIREBASE_ML_SDK", byte[].class, xb.c.b("json"), new xb.g() { // from class: ng.uk
                        @Override // xb.g
                        public final Object apply(Object obj) {
                            return (byte[]) obj;
                        }
                    });
                }
            });
        }
        this.f40350b = new ui.w(new fj.b() { // from class: ng.tk
            @Override // fj.b
            public final Object get() {
                return xb.i.this.a("FIREBASE_ML_SDK", byte[].class, xb.c.b("proto"), new xb.g() { // from class: ng.rk
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

    @Override // ng.dk
    public final void a(ck ckVar) {
        if (this.f40351c.a() == 0) {
            fj.b bVar = this.f40349a;
            if (bVar != null) {
                ((xb.h) bVar.get()).a(b(this.f40351c, ckVar));
                return;
            }
            return;
        }
        ((xb.h) this.f40350b.get()).a(b(this.f40351c, ckVar));
    }
}
