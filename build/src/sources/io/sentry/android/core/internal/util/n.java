package io.sentry.android.core.internal.util;

import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicLong;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class n {

    /* renamed from: a  reason: collision with root package name */
    private final long f27196a;

    /* renamed from: b  reason: collision with root package name */
    private final io.sentry.transport.p f27197b;

    /* renamed from: d  reason: collision with root package name */
    private final int f27199d;

    /* renamed from: c  reason: collision with root package name */
    private final AtomicInteger f27198c = new AtomicInteger(0);

    /* renamed from: e  reason: collision with root package name */
    private final AtomicLong f27200e = new AtomicLong(0);

    public n(io.sentry.transport.p pVar, long j10, int i10) {
        this.f27197b = pVar;
        this.f27196a = j10;
        this.f27199d = i10 <= 0 ? 1 : i10;
    }

    public boolean a() {
        long a10 = this.f27197b.a();
        if (this.f27200e.get() != 0 && this.f27200e.get() + this.f27196a > a10) {
            if (this.f27198c.incrementAndGet() < this.f27199d) {
                return false;
            }
            this.f27198c.set(0);
            return true;
        }
        this.f27198c.set(0);
        this.f27200e.set(a10);
        return false;
    }
}
