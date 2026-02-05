package ff;

import android.os.Bundle;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class h1 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ g f22939d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ String f22940e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ i1 f22941i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h1(i1 i1Var, g gVar, String str) {
        this.f22939d = gVar;
        this.f22940e = str;
        Objects.requireNonNull(i1Var);
        this.f22941i = i1Var;
    }

    @Override // java.lang.Runnable
    public final void run() {
        Bundle bundle;
        i1 i1Var = this.f22941i;
        if (i1Var.k() > 0) {
            g gVar = this.f22939d;
            if (i1Var.l() != null) {
                bundle = i1Var.l().getBundle(this.f22940e);
            } else {
                bundle = null;
            }
            gVar.f(bundle);
        }
        if (i1Var.k() >= 2) {
            this.f22939d.j();
        }
        if (i1Var.k() >= 3) {
            this.f22939d.h();
        }
        if (i1Var.k() >= 4) {
            this.f22939d.k();
        }
        if (i1Var.k() >= 5) {
            this.f22939d.g();
        }
    }
}
