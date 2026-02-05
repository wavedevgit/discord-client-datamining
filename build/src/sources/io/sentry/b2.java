package io.sentry;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b2 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final k7 f28751d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b2(k7 k7Var) {
        this.f28751d = k7Var;
    }

    @Override // java.lang.Runnable
    public void run() {
        String cacheDirPath = this.f28751d.getCacheDirPath();
        if (cacheDirPath == null) {
            this.f28751d.getLogger().c(SentryLevel.INFO, "Cache dir is not set, not moving the previous session.", new Object[0]);
        } else if (!this.f28751d.isEnableAutoSessionTracking()) {
            this.f28751d.getLogger().c(SentryLevel.DEBUG, "Session tracking is disabled, bailing from previous session mover.", new Object[0]);
        } else {
            io.sentry.cache.g envelopeDiskCache = this.f28751d.getEnvelopeDiskCache();
            if (envelopeDiskCache instanceof io.sentry.cache.f) {
                io.sentry.cache.f fVar = (io.sentry.cache.f) envelopeDiskCache;
                fVar.y(io.sentry.cache.f.v(cacheDirPath), io.sentry.cache.f.x(cacheDirPath));
                fVar.u();
            }
        }
    }
}
