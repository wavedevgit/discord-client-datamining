package ei;

import android.content.Context;
import android.content.Intent;
import fi.q0;
import fi.r0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class l implements d {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ a f21537a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ Intent f21538b;

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ Context f21539c;

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ n f21540d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l(n nVar, a aVar, Intent intent, Context context) {
        this.f21540d = nVar;
        this.f21537a = aVar;
        this.f21538b = intent;
        this.f21539c = context;
    }

    @Override // ei.d
    public final void a() {
        r0 r0Var;
        if (this.f21538b.getBooleanExtra("triggered_from_app_after_verification", false)) {
            r0Var = ((q0) this.f21540d).f24024a;
            r0Var.b("Splits copied and verified more than once.", new Object[0]);
            return;
        }
        this.f21538b.putExtra("triggered_from_app_after_verification", true);
        this.f21539c.sendBroadcast(this.f21538b);
    }

    @Override // ei.d
    public final void b(int i10) {
        r0.f21546g.post(new m(this.f21540d, this.f21537a, 6, i10));
    }

    @Override // ei.d
    public final void zza() {
        r0.f21546g.post(new m(this.f21540d, this.f21537a, 5, 0));
    }
}
