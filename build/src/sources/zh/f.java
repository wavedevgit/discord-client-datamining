package zh;

import android.os.Bundle;
import android.os.Handler;
import android.os.ResultReceiver;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class f extends ResultReceiver {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ wg.k f55829d;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public f(g gVar, Handler handler, wg.k kVar) {
        super(handler);
        this.f55829d = kVar;
    }

    @Override // android.os.ResultReceiver
    public final void onReceiveResult(int i10, Bundle bundle) {
        this.f55829d.e(null);
    }
}
