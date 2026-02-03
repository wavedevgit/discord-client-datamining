package io.sentry.android.core.internal.util;

import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicLong;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class n {

    /* renamed from: a  reason: collision with root package name */
    private final long f28994a;

    /* renamed from: b  reason: collision with root package name */
    private final io.sentry.transport.p f28995b;

    /* renamed from: d  reason: collision with root package name */
    private final int f28997d;

    /* renamed from: c  reason: collision with root package name */
    private final AtomicInteger f28996c = new AtomicInteger(0);

    /* renamed from: e  reason: collision with root package name */
    private final AtomicLong f28998e = new AtomicLong(0);

    public n(io.sentry.transport.p pVar, long j10, int i10) {
        this.f28995b = pVar;
        this.f28994a = j10;
        this.f28997d = i10 <= 0 ? 1 : i10;
    }

    public boolean a() {
        long a10 = this.f28995b.a();
        if (this.f28998e.get() != 0 && this.f28998e.get() + this.f28994a > a10) {
            if (this.f28996c.incrementAndGet() < this.f28997d) {
                return false;
            }
            this.f28996c.set(0);
            return true;
        }
        this.f28996c.set(0);
        this.f28998e.set(a10);
        return false;
    }
}
