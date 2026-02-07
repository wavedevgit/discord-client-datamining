package ii;

import android.content.Context;
import android.content.Intent;
import ji.q0;
import ji.r0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class l implements d {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ a f26784a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ Intent f26785b;

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ Context f26786c;

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ n f26787d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l(n nVar, a aVar, Intent intent, Context context) {
        this.f26787d = nVar;
        this.f26784a = aVar;
        this.f26785b = intent;
        this.f26786c = context;
    }

    @Override // ii.d
    public final void a() {
        r0 r0Var;
        if (this.f26785b.getBooleanExtra("triggered_from_app_after_verification", false)) {
            r0Var = ((q0) this.f26787d).f29962a;
            r0Var.b("Splits copied and verified more than once.", new Object[0]);
            return;
        }
        this.f26785b.putExtra("triggered_from_app_after_verification", true);
        this.f26786c.sendBroadcast(this.f26785b);
    }

    @Override // ii.d
    public final void b(int i10) {
        r0.f26793g.post(new m(this.f26787d, this.f26784a, 6, i10));
    }

    @Override // ii.d
    public final void zza() {
        r0.f26793g.post(new m(this.f26787d, this.f26784a, 5, 0));
    }
}
