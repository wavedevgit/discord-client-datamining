package io.sentry;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b2 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final k7 f27943d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b2(k7 k7Var) {
        this.f27943d = k7Var;
    }

    @Override // java.lang.Runnable
    public void run() {
        String cacheDirPath = this.f27943d.getCacheDirPath();
        if (cacheDirPath == null) {
            this.f27943d.getLogger().c(SentryLevel.INFO, "Cache dir is not set, not moving the previous session.", new Object[0]);
        } else if (!this.f27943d.isEnableAutoSessionTracking()) {
            this.f27943d.getLogger().c(SentryLevel.DEBUG, "Session tracking is disabled, bailing from previous session mover.", new Object[0]);
        } else {
            io.sentry.cache.g envelopeDiskCache = this.f27943d.getEnvelopeDiskCache();
            if (envelopeDiskCache instanceof io.sentry.cache.f) {
                io.sentry.cache.f fVar = (io.sentry.cache.f) envelopeDiskCache;
                fVar.B(io.sentry.cache.f.w(cacheDirPath), io.sentry.cache.f.A(cacheDirPath));
                fVar.v();
            }
        }
    }
}
