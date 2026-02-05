package hi;

import android.content.Context;
import android.content.Intent;
import ii.q0;
import ii.r0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class l implements d {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ a f25881a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ Intent f25882b;

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ Context f25883c;

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ n f25884d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l(n nVar, a aVar, Intent intent, Context context) {
        this.f25884d = nVar;
        this.f25881a = aVar;
        this.f25882b = intent;
        this.f25883c = context;
    }

    @Override // hi.d
    public final void a() {
        r0 r0Var;
        if (this.f25882b.getBooleanExtra("triggered_from_app_after_verification", false)) {
            r0Var = ((q0) this.f25884d).f27416a;
            r0Var.b("Splits copied and verified more than once.", new Object[0]);
            return;
        }
        this.f25882b.putExtra("triggered_from_app_after_verification", true);
        this.f25883c.sendBroadcast(this.f25882b);
    }

    @Override // hi.d
    public final void b(int i10) {
        r0.f25890g.post(new m(this.f25884d, this.f25881a, 6, i10));
    }

    @Override // hi.d
    public final void zza() {
        r0.f25890g.post(new m(this.f25884d, this.f25881a, 5, 0));
    }
}
