package ff;

import android.app.Dialog;
import android.app.PendingIntent;
import com.google.android.gms.common.api.GoogleApiActivity;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e1 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final c1 f22925d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ f1 f22926e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e1(f1 f1Var, c1 c1Var) {
        this.f22926e = f1Var;
        this.f22925d = c1Var;
    }

    @Override // java.lang.Runnable
    public final void run() {
        if (!this.f22926e.f22928e) {
            return;
        }
        com.google.android.gms.common.b b10 = this.f22925d.b();
        if (b10.f()) {
            f1 f1Var = this.f22926e;
            f1Var.f22932d.startActivityForResult(GoogleApiActivity.a(f1Var.b(), (PendingIntent) gf.q.l(b10.e()), this.f22925d.a(), false), 1);
            return;
        }
        f1 f1Var2 = this.f22926e;
        if (f1Var2.f22931p.b(f1Var2.b(), b10.c(), null) != null) {
            f1 f1Var3 = this.f22926e;
            f1Var3.f22931p.v(f1Var3.b(), f1Var3.f22932d, b10.c(), 2, this.f22926e);
        } else if (b10.c() != 18) {
            this.f22926e.l(b10, this.f22925d.a());
        } else {
            f1 f1Var4 = this.f22926e;
            Dialog q10 = f1Var4.f22931p.q(f1Var4.b(), f1Var4);
            f1 f1Var5 = this.f22926e;
            f1Var5.f22931p.r(f1Var5.b().getApplicationContext(), new d1(this, q10));
        }
    }
}
