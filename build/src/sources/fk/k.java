package fk;

import java.util.concurrent.atomic.AtomicReference;
import qg.ba;
import qg.ca;
import qg.da;
import qg.ea;
import qg.ed;
import qg.g9;
import qg.h9;
import qg.i9;
import qg.k9;
import qg.l9;
import qg.n9;
import qg.od;
import qg.qd;
import qg.td;
import qg.xa;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class k {

    /* renamed from: a  reason: collision with root package name */
    static final AtomicReference f23790a = new AtomicReference();

    public static n9 a(ek.e eVar) {
        k9 k9Var;
        h9 h9Var;
        l9 l9Var;
        i9 i9Var;
        g9 g9Var = new g9();
        int d10 = eVar.d();
        if (d10 != 1) {
            if (d10 != 2) {
                k9Var = k9.UNKNOWN_LANDMARKS;
            } else {
                k9Var = k9.ALL_LANDMARKS;
            }
        } else {
            k9Var = k9.NO_LANDMARKS;
        }
        g9Var.d(k9Var);
        int b10 = eVar.b();
        if (b10 != 1) {
            if (b10 != 2) {
                h9Var = h9.UNKNOWN_CLASSIFICATIONS;
            } else {
                h9Var = h9.ALL_CLASSIFICATIONS;
            }
        } else {
            h9Var = h9.NO_CLASSIFICATIONS;
        }
        g9Var.a(h9Var);
        int e10 = eVar.e();
        if (e10 != 1) {
            if (e10 != 2) {
                l9Var = l9.UNKNOWN_PERFORMANCE;
            } else {
                l9Var = l9.ACCURATE;
            }
        } else {
            l9Var = l9.FAST;
        }
        g9Var.f(l9Var);
        int c10 = eVar.c();
        if (c10 != 1) {
            if (c10 != 2) {
                i9Var = i9.UNKNOWN_CONTOURS;
            } else {
                i9Var = i9.ALL_CONTOURS;
            }
        } else {
            i9Var = i9.NO_CONTOURS;
        }
        g9Var.b(i9Var);
        g9Var.c(Boolean.valueOf(eVar.g()));
        g9Var.e(Float.valueOf(eVar.a()));
        return g9Var.k();
    }

    public static String b() {
        if (true != d()) {
            return "play-services-mlkit-face-detection";
        }
        return "face-detection";
    }

    public static void c(qd qdVar, final boolean z10, final ca caVar) {
        qdVar.f(new od() { // from class: fk.j
            @Override // qg.od
            public final ed zza() {
                ba baVar;
                boolean z11 = z10;
                ca caVar2 = caVar;
                ea eaVar = new ea();
                if (z11) {
                    baVar = ba.TYPE_THICK;
                } else {
                    baVar = ba.TYPE_THIN;
                }
                eaVar.e(baVar);
                xa xaVar = new xa();
                xaVar.b(caVar2);
                eaVar.h(xaVar.c());
                return td.e(eaVar);
            }
        }, da.ON_DEVICE_FACE_LOAD);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean d() {
        AtomicReference atomicReference = f23790a;
        if (atomicReference.get() != null) {
            return ((Boolean) atomicReference.get()).booleanValue();
        }
        boolean a10 = b.a(wj.i.c().b());
        atomicReference.set(Boolean.valueOf(a10));
        return a10;
    }
}
