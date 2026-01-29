package ff;

import android.app.Dialog;
import android.app.PendingIntent;
import com.google.android.gms.common.api.GoogleApiActivity;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e1 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final c1 f25097d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ f1 f25098e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e1(f1 f1Var, c1 c1Var) {
        this.f25098e = f1Var;
        this.f25097d = c1Var;
    }

    @Override // java.lang.Runnable
    public final void run() {
        if (!this.f25098e.f25100e) {
            return;
        }
        com.google.android.gms.common.b b10 = this.f25097d.b();
        if (b10.e()) {
            f1 f1Var = this.f25098e;
            f1Var.f25104d.startActivityForResult(GoogleApiActivity.a(f1Var.b(), (PendingIntent) gf.q.l(b10.d()), this.f25097d.a(), false), 1);
            return;
        }
        f1 f1Var2 = this.f25098e;
        if (f1Var2.f25103p.b(f1Var2.b(), b10.b(), null) != null) {
            f1 f1Var3 = this.f25098e;
            f1Var3.f25103p.v(f1Var3.b(), f1Var3.f25104d, b10.b(), 2, this.f25098e);
        } else if (b10.b() != 18) {
            this.f25098e.l(b10, this.f25097d.a());
        } else {
            f1 f1Var4 = this.f25098e;
            Dialog q10 = f1Var4.f25103p.q(f1Var4.b(), f1Var4);
            f1 f1Var5 = this.f25098e;
            f1Var5.f25103p.r(f1Var5.b().getApplicationContext(), new d1(this, q10));
        }
    }
}
