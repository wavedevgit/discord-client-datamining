package cg;

import android.app.PendingIntent;
import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class j extends x {

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ yg.k f7448c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(k kVar, yg.k kVar2) {
        this.f7448c = kVar2;
    }

    @Override // cg.y
    public final void G0(Status status, PendingIntent pendingIntent) {
        ff.r.a(status, pendingIntent, this.f7448c);
    }
}
