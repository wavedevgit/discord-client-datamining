package dg;

import android.app.PendingIntent;
import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class j extends x {

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ zg.k f21674c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(k kVar, zg.k kVar2) {
        this.f21674c = kVar2;
    }

    @Override // dg.y
    public final void I0(Status status, PendingIntent pendingIntent) {
        gf.r.a(status, pendingIntent, this.f21674c);
    }
}
