package io.sentry.android.core.internal.util;

import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicLong;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class n {

    /* renamed from: a  reason: collision with root package name */
    private final long f28380a;

    /* renamed from: b  reason: collision with root package name */
    private final io.sentry.transport.p f28381b;

    /* renamed from: d  reason: collision with root package name */
    private final int f28383d;

    /* renamed from: c  reason: collision with root package name */
    private final AtomicInteger f28382c = new AtomicInteger(0);

    /* renamed from: e  reason: collision with root package name */
    private final AtomicLong f28384e = new AtomicLong(0);

    public n(io.sentry.transport.p pVar, long j10, int i10) {
        this.f28381b = pVar;
        this.f28380a = j10;
        this.f28383d = i10 <= 0 ? 1 : i10;
    }

    public boolean a() {
        long a10 = this.f28381b.a();
        if (this.f28384e.get() != 0 && this.f28384e.get() + this.f28380a > a10) {
            if (this.f28382c.incrementAndGet() < this.f28383d) {
                return false;
            }
            this.f28382c.set(0);
            return true;
        }
        this.f28382c.set(0);
        this.f28384e.set(a10);
        return false;
    }
}
