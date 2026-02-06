package ii;

import android.content.Context;
import android.content.Intent;
import ji.q0;
import ji.r0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class l implements d {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ a f26736a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ Intent f26737b;

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ Context f26738c;

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ n f26739d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l(n nVar, a aVar, Intent intent, Context context) {
        this.f26739d = nVar;
        this.f26736a = aVar;
        this.f26737b = intent;
        this.f26738c = context;
    }

    @Override // ii.d
    public final void a() {
        r0 r0Var;
        if (this.f26737b.getBooleanExtra("triggered_from_app_after_verification", false)) {
            r0Var = ((q0) this.f26739d).f29914a;
            r0Var.b("Splits copied and verified more than once.", new Object[0]);
            return;
        }
        this.f26737b.putExtra("triggered_from_app_after_verification", true);
        this.f26738c.sendBroadcast(this.f26737b);
    }

    @Override // ii.d
    public final void b(int i10) {
        r0.f26745g.post(new m(this.f26739d, this.f26736a, 6, i10));
    }

    @Override // ii.d
    public final void zza() {
        r0.f26745g.post(new m(this.f26739d, this.f26736a, 5, 0));
    }
}
