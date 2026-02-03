package ff;

import android.app.Dialog;
import android.app.PendingIntent;
import com.google.android.gms.common.api.GoogleApiActivity;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e1 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final c1 f23900d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ f1 f23901e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e1(f1 f1Var, c1 c1Var) {
        this.f23901e = f1Var;
        this.f23900d = c1Var;
    }

    @Override // java.lang.Runnable
    public final void run() {
        if (!this.f23901e.f23903e) {
            return;
        }
        com.google.android.gms.common.b b10 = this.f23900d.b();
        if (b10.e()) {
            f1 f1Var = this.f23901e;
            f1Var.f23907d.startActivityForResult(GoogleApiActivity.a(f1Var.b(), (PendingIntent) gf.q.l(b10.d()), this.f23900d.a(), false), 1);
            return;
        }
        f1 f1Var2 = this.f23901e;
        if (f1Var2.f23906p.b(f1Var2.b(), b10.b(), null) != null) {
            f1 f1Var3 = this.f23901e;
            f1Var3.f23906p.v(f1Var3.b(), f1Var3.f23907d, b10.b(), 2, this.f23901e);
        } else if (b10.b() != 18) {
            this.f23901e.l(b10, this.f23900d.a());
        } else {
            f1 f1Var4 = this.f23901e;
            Dialog q10 = f1Var4.f23906p.q(f1Var4.b(), f1Var4);
            f1 f1Var5 = this.f23901e;
            f1Var5.f23906p.r(f1Var5.b().getApplicationContext(), new d1(this, q10));
        }
    }
}
