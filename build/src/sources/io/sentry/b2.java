package io.sentry;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b2 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final k7 f29766d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b2(k7 k7Var) {
        this.f29766d = k7Var;
    }

    @Override // java.lang.Runnable
    public void run() {
        String cacheDirPath = this.f29766d.getCacheDirPath();
        if (cacheDirPath == null) {
            this.f29766d.getLogger().c(SentryLevel.INFO, "Cache dir is not set, not moving the previous session.", new Object[0]);
        } else if (!this.f29766d.isEnableAutoSessionTracking()) {
            this.f29766d.getLogger().c(SentryLevel.DEBUG, "Session tracking is disabled, bailing from previous session mover.", new Object[0]);
        } else {
            io.sentry.cache.g envelopeDiskCache = this.f29766d.getEnvelopeDiskCache();
            if (envelopeDiskCache instanceof io.sentry.cache.f) {
                io.sentry.cache.f fVar = (io.sentry.cache.f) envelopeDiskCache;
                fVar.x(io.sentry.cache.f.u(cacheDirPath), io.sentry.cache.f.w(cacheDirPath));
                fVar.t();
            }
        }
    }
}
