package oe;

import android.os.Handler;
import android.os.Looper;
import android.os.SystemClock;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class p0 implements e {
    @Override // oe.e
    public long a() {
        return SystemClock.uptimeMillis();
    }

    @Override // oe.e
    public long b() {
        return SystemClock.elapsedRealtime();
    }

    @Override // oe.e
    public u c(Looper looper, Handler.Callback callback) {
        return new q0(new Handler(looper, callback));
    }

    @Override // oe.e
    public void d() {
    }
}
