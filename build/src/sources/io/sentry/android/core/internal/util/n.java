package io.sentry.android.core.internal.util;

import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicLong;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class n {

    /* renamed from: a  reason: collision with root package name */
    private final long f28948a;

    /* renamed from: b  reason: collision with root package name */
    private final io.sentry.transport.p f28949b;

    /* renamed from: d  reason: collision with root package name */
    private final int f28951d;

    /* renamed from: c  reason: collision with root package name */
    private final AtomicInteger f28950c = new AtomicInteger(0);

    /* renamed from: e  reason: collision with root package name */
    private final AtomicLong f28952e = new AtomicLong(0);

    public n(io.sentry.transport.p pVar, long j10, int i10) {
        this.f28949b = pVar;
        this.f28948a = j10;
        this.f28951d = i10 <= 0 ? 1 : i10;
    }

    public boolean a() {
        long a10 = this.f28949b.a();
        if (this.f28952e.get() != 0 && this.f28952e.get() + this.f28948a > a10) {
            if (this.f28950c.incrementAndGet() < this.f28951d) {
                return false;
            }
            this.f28950c.set(0);
            return true;
        }
        this.f28950c.set(0);
        this.f28952e.set(a10);
        return false;
    }
}
