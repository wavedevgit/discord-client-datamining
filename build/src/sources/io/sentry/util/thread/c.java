package io.sentry.util.thread;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements a {

    /* renamed from: a  reason: collision with root package name */
    private static final long f30768a = Thread.currentThread().getId();

    /* renamed from: b  reason: collision with root package name */
    private static final c f30769b = new c();

    private c() {
    }

    public static c d() {
        return f30769b;
    }

    @Override // io.sentry.util.thread.a
    public boolean a() {
        return f(Thread.currentThread());
    }

    @Override // io.sentry.util.thread.a
    public String b() {
        return Thread.currentThread().getName();
    }

    @Override // io.sentry.util.thread.a
    public long c() {
        return Thread.currentThread().getId();
    }

    public boolean e(long j10) {
        if (f30768a == j10) {
            return true;
        }
        return false;
    }

    public boolean f(Thread thread) {
        return e(thread.getId());
    }
}
