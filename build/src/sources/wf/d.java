package wf;

import android.app.PendingIntent;
import com.google.android.gms.common.api.Status;
import com.google.android.gms.internal.fido.v5;
import gf.r;
import zg.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d extends v5 {

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ k f53320c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(a aVar, k kVar) {
        this.f53320c = kVar;
    }

    @Override // com.google.android.gms.internal.fido.w5
    public final void W(Status status, PendingIntent pendingIntent) {
        r.a(status, pendingIntent, this.f53320c);
    }
}
