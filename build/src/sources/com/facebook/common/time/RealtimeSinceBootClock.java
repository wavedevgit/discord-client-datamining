package com.facebook.common.time;

import android.os.SystemClock;
import java.util.concurrent.TimeUnit;
import o8.d;
import v8.b;
@d
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class RealtimeSinceBootClock implements b {

    /* renamed from: a  reason: collision with root package name */
    private static final RealtimeSinceBootClock f9946a = new RealtimeSinceBootClock();

    private RealtimeSinceBootClock() {
    }

    @d
    public static RealtimeSinceBootClock get() {
        return f9946a;
    }

    @Override // v8.b
    public long now() {
        return SystemClock.elapsedRealtime();
    }

    @Override // v8.b
    public long nowNanos() {
        return TimeUnit.MILLISECONDS.toNanos(now());
    }
}
