package ff;

import android.app.Dialog;
import android.app.PendingIntent;
import com.google.android.gms.common.api.GoogleApiActivity;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e1 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final c1 f23226d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ f1 f23227e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e1(f1 f1Var, c1 c1Var) {
        this.f23227e = f1Var;
        this.f23226d = c1Var;
    }

    @Override // java.lang.Runnable
    public final void run() {
        if (!this.f23227e.f23229e) {
            return;
        }
        com.google.android.gms.common.b b10 = this.f23226d.b();
        if (b10.f()) {
            f1 f1Var = this.f23227e;
            f1Var.f23233d.startActivityForResult(GoogleApiActivity.a(f1Var.b(), (PendingIntent) gf.q.l(b10.e()), this.f23226d.a(), false), 1);
            return;
        }
        f1 f1Var2 = this.f23227e;
        if (f1Var2.f23232p.b(f1Var2.b(), b10.c(), null) != null) {
            f1 f1Var3 = this.f23227e;
            f1Var3.f23232p.w(f1Var3.b(), f1Var3.f23233d, b10.c(), 2, this.f23227e);
        } else if (b10.c() != 18) {
            this.f23227e.l(b10, this.f23226d.a());
        } else {
            f1 f1Var4 = this.f23227e;
            Dialog r10 = f1Var4.f23232p.r(f1Var4.b(), f1Var4);
            f1 f1Var5 = this.f23227e;
            f1Var5.f23232p.s(f1Var5.b().getApplicationContext(), new d1(this, r10));
        }
    }
}
