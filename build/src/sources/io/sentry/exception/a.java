package io.sentry.exception;

import io.sentry.protocol.l;
import io.sentry.util.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends RuntimeException {

    /* renamed from: d  reason: collision with root package name */
    private final l f29305d;

    /* renamed from: e  reason: collision with root package name */
    private final Throwable f29306e;

    /* renamed from: i  reason: collision with root package name */
    private final Thread f29307i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f29308o;

    public a(l lVar, Throwable th2, Thread thread, boolean z10) {
        this.f29305d = (l) y.c(lVar, "Mechanism is required.");
        this.f29306e = (Throwable) y.c(th2, "Throwable is required.");
        this.f29307i = (Thread) y.c(thread, "Thread is required.");
        this.f29308o = z10;
    }

    public l a() {
        return this.f29305d;
    }

    public Thread b() {
        return this.f29307i;
    }

    public Throwable c() {
        return this.f29306e;
    }

    public boolean d() {
        return this.f29308o;
    }

    public a(l lVar, Throwable th2, Thread thread) {
        this(lVar, th2, thread, false);
    }
}
