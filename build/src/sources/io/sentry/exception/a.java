package io.sentry.exception;

import io.sentry.protocol.l;
import io.sentry.util.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends RuntimeException {

    /* renamed from: d  reason: collision with root package name */
    private final l f29873d;

    /* renamed from: e  reason: collision with root package name */
    private final Throwable f29874e;

    /* renamed from: i  reason: collision with root package name */
    private final Thread f29875i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f29876o;

    public a(l lVar, Throwable th2, Thread thread, boolean z10) {
        this.f29873d = (l) y.c(lVar, "Mechanism is required.");
        this.f29874e = (Throwable) y.c(th2, "Throwable is required.");
        this.f29875i = (Thread) y.c(thread, "Thread is required.");
        this.f29876o = z10;
    }

    public l a() {
        return this.f29873d;
    }

    public Thread b() {
        return this.f29875i;
    }

    public Throwable c() {
        return this.f29874e;
    }

    public boolean d() {
        return this.f29876o;
    }

    public a(l lVar, Throwable th2, Thread thread) {
        this(lVar, th2, thread, false);
    }
}
