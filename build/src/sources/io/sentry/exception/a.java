package io.sentry.exception;

import io.sentry.protocol.l;
import io.sentry.util.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends RuntimeException {

    /* renamed from: d  reason: collision with root package name */
    private final l f28121d;

    /* renamed from: e  reason: collision with root package name */
    private final Throwable f28122e;

    /* renamed from: i  reason: collision with root package name */
    private final Thread f28123i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f28124o;

    public a(l lVar, Throwable th2, Thread thread, boolean z10) {
        this.f28121d = (l) y.c(lVar, "Mechanism is required.");
        this.f28122e = (Throwable) y.c(th2, "Throwable is required.");
        this.f28123i = (Thread) y.c(thread, "Thread is required.");
        this.f28124o = z10;
    }

    public l a() {
        return this.f28121d;
    }

    public Thread b() {
        return this.f28123i;
    }

    public Throwable c() {
        return this.f28122e;
    }

    public boolean d() {
        return this.f28124o;
    }

    public a(l lVar, Throwable th2, Thread thread) {
        this(lVar, th2, thread, false);
    }
}
