package ff;

import android.app.Dialog;
import android.app.PendingIntent;
import com.google.android.gms.common.api.GoogleApiActivity;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e1 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final c1 f24308d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ f1 f24309e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e1(f1 f1Var, c1 c1Var) {
        this.f24309e = f1Var;
        this.f24308d = c1Var;
    }

    @Override // java.lang.Runnable
    public final void run() {
        if (!this.f24309e.f24311e) {
            return;
        }
        com.google.android.gms.common.b b10 = this.f24308d.b();
        if (b10.e()) {
            f1 f1Var = this.f24309e;
            f1Var.f24315d.startActivityForResult(GoogleApiActivity.a(f1Var.b(), (PendingIntent) gf.q.l(b10.d()), this.f24308d.a(), false), 1);
            return;
        }
        f1 f1Var2 = this.f24309e;
        if (f1Var2.f24314p.b(f1Var2.b(), b10.b(), null) != null) {
            f1 f1Var3 = this.f24309e;
            f1Var3.f24314p.v(f1Var3.b(), f1Var3.f24315d, b10.b(), 2, this.f24309e);
        } else if (b10.b() != 18) {
            this.f24309e.l(b10, this.f24308d.a());
        } else {
            f1 f1Var4 = this.f24309e;
            Dialog q10 = f1Var4.f24314p.q(f1Var4.b(), f1Var4);
            f1 f1Var5 = this.f24309e;
            f1Var5.f24314p.r(f1Var5.b().getApplicationContext(), new d1(this, q10));
        }
    }
}
