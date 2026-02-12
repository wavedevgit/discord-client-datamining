package li;

import android.content.Context;
import android.content.Intent;
import mi.q0;
import mi.r0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class l implements d {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ a f35845a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ Intent f35846b;

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ Context f35847c;

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ n f35848d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l(n nVar, a aVar, Intent intent, Context context) {
        this.f35848d = nVar;
        this.f35845a = aVar;
        this.f35846b = intent;
        this.f35847c = context;
    }

    @Override // li.d
    public final void a() {
        r0 r0Var;
        if (this.f35846b.getBooleanExtra("triggered_from_app_after_verification", false)) {
            r0Var = ((q0) this.f35848d).f36515a;
            r0Var.b("Splits copied and verified more than once.", new Object[0]);
            return;
        }
        this.f35846b.putExtra("triggered_from_app_after_verification", true);
        this.f35847c.sendBroadcast(this.f35846b);
    }

    @Override // li.d
    public final void b(int i10) {
        r0.f35854g.post(new m(this.f35848d, this.f35845a, 6, i10));
    }

    @Override // li.d
    public final void zza() {
        r0.f35854g.post(new m(this.f35848d, this.f35845a, 5, 0));
    }
}
