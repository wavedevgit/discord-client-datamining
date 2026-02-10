package com.facebook.common.time;

import android.os.SystemClock;
import java.util.concurrent.TimeUnit;
import p8.d;
import w8.b;
@d
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class RealtimeSinceBootClock implements b {

    /* renamed from: a  reason: collision with root package name */
    private static final RealtimeSinceBootClock f10562a = new RealtimeSinceBootClock();

    private RealtimeSinceBootClock() {
    }

    @d
    public static RealtimeSinceBootClock get() {
        return f10562a;
    }

    @Override // w8.b
    public long now() {
        return SystemClock.elapsedRealtime();
    }

    @Override // w8.b
    public long nowNanos() {
        return TimeUnit.MILLISECONDS.toNanos(now());
    }
}
