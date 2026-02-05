package ff;

import android.app.PendingIntent;
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import java.util.concurrent.atomic.AtomicReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class f1 extends g implements DialogInterface.OnCancelListener {

    /* renamed from: e  reason: collision with root package name */
    protected volatile boolean f22928e;

    /* renamed from: i  reason: collision with root package name */
    protected final AtomicReference f22929i;

    /* renamed from: o  reason: collision with root package name */
    private final Handler f22930o;

    /* renamed from: p  reason: collision with root package name */
    protected final com.google.android.gms.common.f f22931p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f1(h hVar, com.google.android.gms.common.f fVar) {
        super(hVar);
        this.f22929i = new AtomicReference(null);
        this.f22930o = new fg.h(Looper.getMainLooper());
        this.f22931p = fVar;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void l(com.google.android.gms.common.b bVar, int i10) {
        this.f22929i.set(null);
        m(bVar, i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void o() {
        this.f22929i.set(null);
        n();
    }

    private static final int p(c1 c1Var) {
        if (c1Var == null) {
            return -1;
        }
        return c1Var.a();
    }

    @Override // ff.g
    public final void e(int i10, int i11, Intent intent) {
        c1 c1Var = (c1) this.f22929i.get();
        if (i10 != 1) {
            if (i10 == 2) {
                int g10 = this.f22931p.g(b());
                if (g10 == 0) {
                    o();
                    return;
                } else if (c1Var != null) {
                    if (c1Var.b().c() == 18 && g10 == 18) {
                        return;
                    }
                } else {
                    return;
                }
            }
        } else if (i11 == -1) {
            o();
            return;
        } else if (i11 == 0) {
            if (c1Var != null) {
                int i12 = 13;
                if (intent != null) {
                    i12 = intent.getIntExtra("<<ResolutionFailureErrorDetail>>", 13);
                }
                l(new com.google.android.gms.common.b(i12, null, c1Var.b().toString()), p(c1Var));
                return;
            }
            return;
        }
        if (c1Var != null) {
            l(c1Var.b(), c1Var.a());
        }
    }

    @Override // ff.g
    public final void f(Bundle bundle) {
        c1 c1Var;
        super.f(bundle);
        if (bundle != null) {
            AtomicReference atomicReference = this.f22929i;
            if (bundle.getBoolean("resolving_error", false)) {
                c1Var = new c1(new com.google.android.gms.common.b(bundle.getInt("failed_status"), (PendingIntent) bundle.getParcelable("failed_resolution")), bundle.getInt("failed_client_id", -1));
            } else {
                c1Var = null;
            }
            atomicReference.set(c1Var);
        }
    }

    @Override // ff.g
    public final void i(Bundle bundle) {
        super.i(bundle);
        c1 c1Var = (c1) this.f22929i.get();
        if (c1Var == null) {
            return;
        }
        bundle.putBoolean("resolving_error", true);
        bundle.putInt("failed_client_id", c1Var.a());
        bundle.putInt("failed_status", c1Var.b().c());
        bundle.putParcelable("failed_resolution", c1Var.b().e());
    }

    @Override // ff.g
    public void j() {
        super.j();
        this.f22928e = true;
    }

    @Override // ff.g
    public void k() {
        super.k();
        this.f22928e = false;
    }

    protected abstract void m(com.google.android.gms.common.b bVar, int i10);

    protected abstract void n();

    @Override // android.content.DialogInterface.OnCancelListener
    public final void onCancel(DialogInterface dialogInterface) {
        l(new com.google.android.gms.common.b(13, null), p((c1) this.f22929i.get()));
    }

    public final void s(com.google.android.gms.common.b bVar, int i10) {
        AtomicReference atomicReference;
        c1 c1Var = new c1(bVar, i10);
        do {
            atomicReference = this.f22929i;
            if (p0.d.a(atomicReference, null, c1Var)) {
                this.f22930o.post(new e1(this, c1Var));
                return;
            }
        } while (atomicReference.get() == null);
    }
}
