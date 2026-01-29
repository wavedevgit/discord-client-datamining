package gf;

import android.app.PendingIntent;
import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class r0 extends a1 {

    /* renamed from: d  reason: collision with root package name */
    public final int f26870d;

    /* renamed from: e  reason: collision with root package name */
    public final Bundle f26871e;

    /* renamed from: f  reason: collision with root package name */
    final /* synthetic */ c f26872f;

    /* JADX INFO: Access modifiers changed from: protected */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public r0(c cVar, int i10, Bundle bundle) {
        super(cVar, Boolean.TRUE);
        this.f26872f = cVar;
        this.f26870d = i10;
        this.f26871e = bundle;
    }

    @Override // gf.a1
    protected final /* bridge */ /* synthetic */ void a(Object obj) {
        Boolean bool = (Boolean) obj;
        PendingIntent pendingIntent = null;
        if (this.f26870d != 0) {
            this.f26872f.g0(1, null);
            Bundle bundle = this.f26871e;
            if (bundle != null) {
                pendingIntent = (PendingIntent) bundle.getParcelable("pendingIntent");
            }
            f(new com.google.android.gms.common.b(this.f26870d, pendingIntent));
        } else if (!g()) {
            this.f26872f.g0(1, null);
            f(new com.google.android.gms.common.b(8, null));
        }
    }

    protected abstract void f(com.google.android.gms.common.b bVar);

    protected abstract boolean g();

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gf.a1
    public final void b() {
    }
}
