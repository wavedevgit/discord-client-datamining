package androidx.work.impl;

import android.os.Handler;
import android.os.Looper;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e implements k4.u {

    /* renamed from: a  reason: collision with root package name */
    private final Handler f6059a = w1.g.a(Looper.getMainLooper());

    @Override // k4.u
    public void a(Runnable runnable) {
        this.f6059a.removeCallbacks(runnable);
    }

    @Override // k4.u
    public void b(long j10, Runnable runnable) {
        this.f6059a.postDelayed(runnable, j10);
    }
}
