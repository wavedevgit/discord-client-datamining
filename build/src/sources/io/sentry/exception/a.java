package io.sentry.exception;

import io.sentry.protocol.l;
import io.sentry.util.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends RuntimeException {

    /* renamed from: d  reason: collision with root package name */
    private final l f29992d;

    /* renamed from: e  reason: collision with root package name */
    private final Throwable f29993e;

    /* renamed from: i  reason: collision with root package name */
    private final Thread f29994i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f29995o;

    public a(l lVar, Throwable th2, Thread thread, boolean z10) {
        this.f29992d = (l) y.c(lVar, "Mechanism is required.");
        this.f29993e = (Throwable) y.c(th2, "Throwable is required.");
        this.f29994i = (Thread) y.c(thread, "Thread is required.");
        this.f29995o = z10;
    }

    public l a() {
        return this.f29992d;
    }

    public Thread b() {
        return this.f29994i;
    }

    public Throwable c() {
        return this.f29993e;
    }

    public boolean d() {
        return this.f29995o;
    }

    public a(l lVar, Throwable th2, Thread thread) {
        this(lVar, th2, thread, false);
    }
}
