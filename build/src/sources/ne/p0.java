package ne;

import android.os.Handler;
import android.os.Looper;
import android.os.SystemClock;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class p0 implements e {
    @Override // ne.e
    public long a() {
        return SystemClock.uptimeMillis();
    }

    @Override // ne.e
    public long b() {
        return SystemClock.elapsedRealtime();
    }

    @Override // ne.e
    public u c(Looper looper, Handler.Callback callback) {
        return new q0(new Handler(looper, callback));
    }

    @Override // ne.e
    public void d() {
    }
}
