package og;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class vk implements dk {

    /* renamed from: a  reason: collision with root package name */
    private ij.b f40317a;

    /* renamed from: b  reason: collision with root package name */
    private final ij.b f40318b;

    /* renamed from: c  reason: collision with root package name */
    private final fk f40319c;

    public vk(Context context, fk fkVar) {
        this.f40319c = fkVar;
        com.google.android.datatransport.cct.a aVar = com.google.android.datatransport.cct.a.f12236g;
        ac.t.f(context);
        final yb.i g10 = ac.t.c().g(aVar);
        if (aVar.a().contains(yb.c.b("json"))) {
            this.f40317a = new xi.w(new ij.b() { // from class: og.sk
                @Override // ij.b
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
        this.f40318b = new xi.w(new ij.b() { // from class: og.tk
            @Override // ij.b
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
        if (this.f40319c.a() == 0) {
            ij.b bVar = this.f40317a;
            if (bVar != null) {
                ((yb.h) bVar.get()).a(b(this.f40319c, ckVar));
                return;
            }
            return;
        }
        ((yb.h) this.f40318b.get()).a(b(this.f40319c, ckVar));
    }
}
