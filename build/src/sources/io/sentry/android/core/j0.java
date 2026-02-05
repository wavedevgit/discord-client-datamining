package io.sentry.android.core;

import android.net.TrafficStats;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j0 implements io.sentry.c1 {

    /* renamed from: a  reason: collision with root package name */
    private static final j0 f28086a = new j0();

    private j0() {
    }

    public static j0 c() {
        return f28086a;
    }

    @Override // io.sentry.c1
    public void a() {
        TrafficStats.clearThreadStatsTag();
    }

    @Override // io.sentry.c1
    public void b() {
        TrafficStats.setThreadStatsTag(61441);
    }
}
