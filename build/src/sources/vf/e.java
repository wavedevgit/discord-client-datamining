package vf;

import android.app.PendingIntent;
import com.google.android.gms.common.api.Status;
import com.google.android.gms.internal.fido.v5;
import ff.r;
import yg.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class e extends v5 {

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ k f52648c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(a aVar, k kVar) {
        this.f52648c = kVar;
    }

    @Override // com.google.android.gms.internal.fido.w5
    public final void V(Status status, PendingIntent pendingIntent) {
        r.a(status, pendingIntent, this.f52648c);
    }
}
