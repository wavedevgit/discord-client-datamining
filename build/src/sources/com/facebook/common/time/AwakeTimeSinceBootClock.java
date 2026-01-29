package com.facebook.common.time;

import o8.d;
import v8.c;
@d
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class AwakeTimeSinceBootClock implements c {
    @d
    private static final AwakeTimeSinceBootClock INSTANCE = new AwakeTimeSinceBootClock();

    private AwakeTimeSinceBootClock() {
    }

    @d
    public static AwakeTimeSinceBootClock get() {
        return INSTANCE;
    }

    @Override // v8.c, v8.b
    @d
    public /* bridge */ /* synthetic */ long now() {
        return super.now();
    }

    @Override // v8.c, v8.b
    @d
    public long nowNanos() {
        return System.nanoTime();
    }
}
