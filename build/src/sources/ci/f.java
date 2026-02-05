package ci;

import android.os.Bundle;
import android.os.Handler;
import android.os.ResultReceiver;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class f extends ResultReceiver {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ xg.k f7623d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public f(g gVar, Handler handler, xg.k kVar) {
        super(handler);
        this.f7623d = kVar;
    }

    @Override // android.os.ResultReceiver
    public final void onReceiveResult(int i10, Bundle bundle) {
        this.f7623d.e(null);
    }
}
