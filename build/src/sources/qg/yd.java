package qg;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class yd implements pd {

    /* renamed from: a  reason: collision with root package name */
    private gj.b f46539a;

    /* renamed from: b  reason: collision with root package name */
    private final gj.b f46540b;

    /* renamed from: c  reason: collision with root package name */
    private final gd f46541c;

    public yd(Context context, gd gdVar) {
        this.f46541c = gdVar;
        com.google.android.datatransport.cct.a aVar = com.google.android.datatransport.cct.a.f11658g;
        ac.t.f(context);
        final yb.i g10 = ac.t.c().g(aVar);
        if (aVar.a().contains(yb.c.b("json"))) {
            this.f46539a = new vi.w(new gj.b() { // from class: qg.vd
                @Override // gj.b
                public final Object get() {
                    return yb.i.this.a("FIREBASE_ML_SDK", byte[].class, yb.c.b("json"), new yb.g() { // from class: qg.xd
                        @Override // yb.g
                        public final Object apply(Object obj) {
                            return (byte[]) obj;
                        }
                    });
                }
            });
        }
        this.f46540b = new vi.w(new gj.b() { // from class: qg.wd
            @Override // gj.b
            public final Object get() {
                return yb.i.this.a("FIREBASE_ML_SDK", byte[].class, yb.c.b("proto"), new yb.g() { // from class: qg.ud
                    @Override // yb.g
                    public final Object apply(Object obj) {
                        return (byte[]) obj;
                    }
                });
            }
        });
    }

    static yb.d b(gd gdVar, ed edVar) {
        int a10 = gdVar.a();
        if (edVar.zza() != 0) {
            return yb.d.e(edVar.a(a10, false));
        }
        return yb.d.g(edVar.a(a10, false));
    }

    @Override // qg.pd
    public final void a(ed edVar) {
        if (this.f46541c.a() == 0) {
            gj.b bVar = this.f46539a;
            if (bVar != null) {
                ((yb.h) bVar.get()).a(b(this.f46541c, edVar));
                return;
            }
            return;
        }
        ((yb.h) this.f46540b.get()).a(b(this.f46541c, edVar));
    }
}
