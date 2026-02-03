package ei;

import android.content.Context;
import android.content.Intent;
import fi.q0;
import fi.r0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class l implements d {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ a f22846a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ Intent f22847b;

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ Context f22848c;

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ n f22849d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l(n nVar, a aVar, Intent intent, Context context) {
        this.f22849d = nVar;
        this.f22846a = aVar;
        this.f22847b = intent;
        this.f22848c = context;
    }

    @Override // ei.d
    public final void a() {
        r0 r0Var;
        if (this.f22847b.getBooleanExtra("triggered_from_app_after_verification", false)) {
            r0Var = ((q0) this.f22849d).f24432a;
            r0Var.b("Splits copied and verified more than once.", new Object[0]);
            return;
        }
        this.f22847b.putExtra("triggered_from_app_after_verification", true);
        this.f22848c.sendBroadcast(this.f22847b);
    }

    @Override // ei.d
    public final void b(int i10) {
        r0.f22855g.post(new m(this.f22849d, this.f22846a, 6, i10));
    }

    @Override // ei.d
    public final void zza() {
        r0.f22855g.post(new m(this.f22849d, this.f22846a, 5, 0));
    }
}
