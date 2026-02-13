package li;

import android.content.Context;
import android.content.Intent;
import mi.q0;
import mi.r0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class l implements d {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ a f36413a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ Intent f36414b;

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ Context f36415c;

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ n f36416d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l(n nVar, a aVar, Intent intent, Context context) {
        this.f36416d = nVar;
        this.f36413a = aVar;
        this.f36414b = intent;
        this.f36415c = context;
    }

    @Override // li.d
    public final void a() {
        r0 r0Var;
        if (this.f36414b.getBooleanExtra("triggered_from_app_after_verification", false)) {
            r0Var = ((q0) this.f36416d).f37083a;
            r0Var.b("Splits copied and verified more than once.", new Object[0]);
            return;
        }
        this.f36414b.putExtra("triggered_from_app_after_verification", true);
        this.f36415c.sendBroadcast(this.f36414b);
    }

    @Override // li.d
    public final void b(int i10) {
        r0.f36422g.post(new m(this.f36416d, this.f36413a, 6, i10));
    }

    @Override // li.d
    public final void zza() {
        r0.f36422g.post(new m(this.f36416d, this.f36413a, 5, 0));
    }
}
