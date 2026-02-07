package io.sentry.android.core.internal.util;

import android.os.SystemClock;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements io.sentry.transport.p {

    /* renamed from: a  reason: collision with root package name */
    private static final io.sentry.transport.p f27236a = new f();

    private f() {
    }

    public static io.sentry.transport.p b() {
        return f27236a;
    }

    @Override // io.sentry.transport.p
    public long a() {
        return SystemClock.uptimeMillis();
    }
}
