package og;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class yd implements pd {

    /* renamed from: a  reason: collision with root package name */
    private ej.b f43635a;

    /* renamed from: b  reason: collision with root package name */
    private final ej.b f43636b;

    /* renamed from: c  reason: collision with root package name */
    private final gd f43637c;

    public yd(Context context, gd gdVar) {
        this.f43637c = gdVar;
        com.google.android.datatransport.cct.a aVar = com.google.android.datatransport.cct.a.f11619g;
        zb.t.f(context);
        final xb.i g10 = zb.t.c().g(aVar);
        if (aVar.a().contains(xb.c.b("json"))) {
            this.f43635a = new ti.w(new ej.b() { // from class: og.vd
                @Override // ej.b
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
        this.f43636b = new ti.w(new ej.b() { // from class: og.wd
            @Override // ej.b
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
        if (this.f43637c.a() == 0) {
            ej.b bVar = this.f43635a;
            if (bVar != null) {
                ((xb.h) bVar.get()).a(b(this.f43637c, edVar));
                return;
            }
            return;
        }
        ((xb.h) this.f43636b.get()).a(b(this.f43637c, edVar));
    }
}
