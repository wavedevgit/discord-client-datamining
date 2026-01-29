package io.sentry.android.core.internal.util;

import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicLong;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class n {

    /* renamed from: a  reason: collision with root package name */
    private final long f29051a;

    /* renamed from: b  reason: collision with root package name */
    private final io.sentry.transport.p f29052b;

    /* renamed from: d  reason: collision with root package name */
    private final int f29054d;

    /* renamed from: c  reason: collision with root package name */
    private final AtomicInteger f29053c = new AtomicInteger(0);

    /* renamed from: e  reason: collision with root package name */
    private final AtomicLong f29055e = new AtomicLong(0);

    public n(io.sentry.transport.p pVar, long j10, int i10) {
        this.f29052b = pVar;
        this.f29051a = j10;
        this.f29054d = i10 <= 0 ? 1 : i10;
    }

    public boolean a() {
        long a10 = this.f29052b.a();
        if (this.f29055e.get() != 0 && this.f29055e.get() + this.f29051a > a10) {
            if (this.f29053c.incrementAndGet() < this.f29054d) {
                return false;
            }
            this.f29053c.set(0);
            return true;
        }
        this.f29053c.set(0);
        this.f29055e.set(a10);
        return false;
    }
}
