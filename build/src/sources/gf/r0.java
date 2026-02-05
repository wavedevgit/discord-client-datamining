package gf;

import android.app.PendingIntent;
import android.os.Bundle;
import java.util.Objects;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class r0 extends y0 {

    /* renamed from: d  reason: collision with root package name */
    public final int f24884d;

    /* renamed from: e  reason: collision with root package name */
    public final Bundle f24885e;

    /* renamed from: f  reason: collision with root package name */
    final /* synthetic */ c f24886f;

    /* JADX INFO: Access modifiers changed from: protected */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public r0(c cVar, int i10, Bundle bundle) {
        super(cVar, Boolean.TRUE);
        Objects.requireNonNull(cVar);
        this.f24886f = cVar;
        this.f24884d = i10;
        this.f24885e = bundle;
    }

    @Override // gf.y0
    protected final /* bridge */ /* synthetic */ void a(Object obj) {
        Boolean bool = (Boolean) obj;
        int i10 = this.f24884d;
        PendingIntent pendingIntent = null;
        if (i10 == 0) {
            if (!e()) {
                this.f24886f.U(1, null);
                f(new com.google.android.gms.common.b(8, null));
                return;
            }
            return;
        }
        this.f24886f.U(1, null);
        Bundle bundle = this.f24885e;
        if (bundle != null) {
            pendingIntent = (PendingIntent) bundle.getParcelable("pendingIntent");
        }
        f(new com.google.android.gms.common.b(i10, pendingIntent));
    }

    protected abstract boolean e();

    protected abstract void f(com.google.android.gms.common.b bVar);
}
