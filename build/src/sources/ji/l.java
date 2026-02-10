package ji;

import android.content.Context;
import android.content.Intent;
import ki.q0;
import ki.r0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class l implements d {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ a f30188a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ Intent f30189b;

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ Context f30190c;

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ n f30191d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l(n nVar, a aVar, Intent intent, Context context) {
        this.f30191d = nVar;
        this.f30188a = aVar;
        this.f30189b = intent;
        this.f30190c = context;
    }

    @Override // ji.d
    public final void a() {
        r0 r0Var;
        if (this.f30189b.getBooleanExtra("triggered_from_app_after_verification", false)) {
            r0Var = ((q0) this.f30191d).f30913a;
            r0Var.b("Splits copied and verified more than once.", new Object[0]);
            return;
        }
        this.f30189b.putExtra("triggered_from_app_after_verification", true);
        this.f30190c.sendBroadcast(this.f30189b);
    }

    @Override // ji.d
    public final void b(int i10) {
        r0.f30197g.post(new m(this.f30191d, this.f30188a, 6, i10));
    }

    @Override // ji.d
    public final void zza() {
        r0.f30197g.post(new m(this.f30191d, this.f30188a, 5, 0));
    }
}
