package gf;

import android.app.Dialog;
import android.app.PendingIntent;
import com.google.android.gms.common.api.GoogleApiActivity;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e1 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final c1 f24311d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ f1 f24312e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e1(f1 f1Var, c1 c1Var) {
        this.f24312e = f1Var;
        this.f24311d = c1Var;
    }

    @Override // java.lang.Runnable
    public final void run() {
        if (!this.f24312e.f24314e) {
            return;
        }
        com.google.android.gms.common.b b10 = this.f24311d.b();
        if (b10.f()) {
            f1 f1Var = this.f24312e;
            f1Var.f24318d.startActivityForResult(GoogleApiActivity.a(f1Var.b(), (PendingIntent) hf.q.l(b10.e()), this.f24311d.a(), false), 1);
            return;
        }
        f1 f1Var2 = this.f24312e;
        if (f1Var2.f24317p.b(f1Var2.b(), b10.c(), null) != null) {
            f1 f1Var3 = this.f24312e;
            f1Var3.f24317p.w(f1Var3.b(), f1Var3.f24318d, b10.c(), 2, this.f24312e);
        } else if (b10.c() != 18) {
            this.f24312e.l(b10, this.f24311d.a());
        } else {
            f1 f1Var4 = this.f24312e;
            Dialog r10 = f1Var4.f24317p.r(f1Var4.b(), f1Var4);
            f1 f1Var5 = this.f24312e;
            f1Var5.f24317p.s(f1Var5.b().getApplicationContext(), new d1(this, r10));
        }
    }
}
