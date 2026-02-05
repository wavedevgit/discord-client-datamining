package io.sentry.exception;

import io.sentry.protocol.l;
import io.sentry.util.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a extends RuntimeException {

    /* renamed from: d  reason: collision with root package name */
    private final l f28977d;

    /* renamed from: e  reason: collision with root package name */
    private final Throwable f28978e;

    /* renamed from: i  reason: collision with root package name */
    private final Thread f28979i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f28980o;

    public a(l lVar, Throwable th2, Thread thread, boolean z10) {
        this.f28977d = (l) y.c(lVar, "Mechanism is required.");
        this.f28978e = (Throwable) y.c(th2, "Throwable is required.");
        this.f28979i = (Thread) y.c(thread, "Thread is required.");
        this.f28980o = z10;
    }

    public l a() {
        return this.f28977d;
    }

    public Thread b() {
        return this.f28979i;
    }

    public Throwable c() {
        return this.f28978e;
    }

    public boolean d() {
        return this.f28980o;
    }

    public a(l lVar, Throwable th2, Thread thread) {
        this(lVar, th2, thread, false);
    }
}
