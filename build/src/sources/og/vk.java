package og;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class vk implements dk {

    /* renamed from: a  reason: collision with root package name */
    private gj.b f41422a;

    /* renamed from: b  reason: collision with root package name */
    private final gj.b f41423b;

    /* renamed from: c  reason: collision with root package name */
    private final fk f41424c;

    public vk(Context context, fk fkVar) {
        this.f41424c = fkVar;
        com.google.android.datatransport.cct.a aVar = com.google.android.datatransport.cct.a.f11658g;
        ac.t.f(context);
        final yb.i g10 = ac.t.c().g(aVar);
        if (aVar.a().contains(yb.c.b("json"))) {
            this.f41422a = new vi.w(new gj.b() { // from class: og.sk
                @Override // gj.b
                public final Object get() {
                    return yb.i.this.a("FIREBASE_ML_SDK", byte[].class, yb.c.b("json"), new yb.g() { // from class: og.uk
                        @Override // yb.g
                        public final Object apply(Object obj) {
                            return (byte[]) obj;
                        }
                    });
                }
            });
        }
        this.f41423b = new vi.w(new gj.b() { // from class: og.tk
            @Override // gj.b
            public final Object get() {
                return yb.i.this.a("FIREBASE_ML_SDK", byte[].class, yb.c.b("proto"), new yb.g() { // from class: og.rk
                    @Override // yb.g
                    public final Object apply(Object obj) {
                        return (byte[]) obj;
                    }
                });
            }
        });
    }

    static yb.d b(fk fkVar, ck ckVar) {
        int a10 = fkVar.a();
        if (ckVar.zza() != 0) {
            return yb.d.e(ckVar.a(a10, false));
        }
        return yb.d.g(ckVar.a(a10, false));
    }

    @Override // og.dk
    public final void a(ck ckVar) {
        if (this.f41424c.a() == 0) {
            gj.b bVar = this.f41422a;
            if (bVar != null) {
                ((yb.h) bVar.get()).a(b(this.f41424c, ckVar));
                return;
            }
            return;
        }
        ((yb.h) this.f41423b.get()).a(b(this.f41424c, ckVar));
    }
}
