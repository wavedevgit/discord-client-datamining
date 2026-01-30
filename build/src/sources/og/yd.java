package og;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class yd implements pd {

    /* renamed from: a  reason: collision with root package name */
    private bj.b f43801a;

    /* renamed from: b  reason: collision with root package name */
    private final bj.b f43802b;

    /* renamed from: c  reason: collision with root package name */
    private final gd f43803c;

    public yd(Context context, gd gdVar) {
        this.f43803c = gdVar;
        com.google.android.datatransport.cct.a aVar = com.google.android.datatransport.cct.a.f12637g;
        zb.t.f(context);
        final xb.i g10 = zb.t.c().g(aVar);
        if (aVar.a().contains(xb.c.b("json"))) {
            this.f43801a = new qi.w(new bj.b() { // from class: og.vd
                @Override // bj.b
                public final Object get() {
                    return xb.i.this.a("FIREBASE_ML_SDK", byte[].class, xb.c.b("json"), new xb.g() { // from class: og.xd
                        @Override // xb.g
                        public final Object apply(Object obj) {
                            return (byte[]) obj;
                        }
                    });
                }
            });
        }
        this.f43802b = new qi.w(new bj.b() { // from class: og.wd
            @Override // bj.b
            public final Object get() {
                return xb.i.this.a("FIREBASE_ML_SDK", byte[].class, xb.c.b("proto"), new xb.g() { // from class: og.ud
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

    @Override // og.pd
    public final void a(ed edVar) {
        if (this.f43803c.a() == 0) {
            bj.b bVar = this.f43801a;
            if (bVar != null) {
                ((xb.h) bVar.get()).a(b(this.f43803c, edVar));
                return;
            }
            return;
        }
        ((xb.h) this.f43802b.get()).a(b(this.f43803c, edVar));
    }
}
