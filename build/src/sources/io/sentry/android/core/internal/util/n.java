package io.sentry.android.core.internal.util;

import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicLong;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class n {

    /* renamed from: a  reason: collision with root package name */
    private final long f27444a;

    /* renamed from: b  reason: collision with root package name */
    private final io.sentry.transport.p f27445b;

    /* renamed from: d  reason: collision with root package name */
    private final int f27447d;

    /* renamed from: c  reason: collision with root package name */
    private final AtomicInteger f27446c = new AtomicInteger(0);

    /* renamed from: e  reason: collision with root package name */
    private final AtomicLong f27448e = new AtomicLong(0);

    public n(io.sentry.transport.p pVar, long j10, int i10) {
        this.f27445b = pVar;
        this.f27444a = j10;
        this.f27447d = i10 <= 0 ? 1 : i10;
    }

    public boolean a() {
        long a10 = this.f27445b.a();
        if (this.f27448e.get() != 0 && this.f27448e.get() + this.f27444a > a10) {
            if (this.f27446c.incrementAndGet() < this.f27447d) {
                return false;
            }
            this.f27446c.set(0);
            return true;
        }
        this.f27446c.set(0);
        this.f27448e.set(a10);
        return false;
    }
}
