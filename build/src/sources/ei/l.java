package ei;

import android.content.Context;
import android.content.Intent;
import fi.q0;
import fi.r0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class l implements d {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ a f22814a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ Intent f22815b;

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ Context f22816c;

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ n f22817d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l(n nVar, a aVar, Intent intent, Context context) {
        this.f22817d = nVar;
        this.f22814a = aVar;
        this.f22815b = intent;
        this.f22816c = context;
    }

    @Override // ei.d
    public final void a() {
        r0 r0Var;
        if (this.f22815b.getBooleanExtra("triggered_from_app_after_verification", false)) {
            r0Var = ((q0) this.f22817d).f25221a;
            r0Var.b("Splits copied and verified more than once.", new Object[0]);
            return;
        }
        this.f22815b.putExtra("triggered_from_app_after_verification", true);
        this.f22816c.sendBroadcast(this.f22815b);
    }

    @Override // ei.d
    public final void b(int i10) {
        r0.f22823g.post(new m(this.f22817d, this.f22814a, 6, i10));
    }

    @Override // ei.d
    public final void zza() {
        r0.f22823g.post(new m(this.f22817d, this.f22814a, 5, 0));
    }
}
