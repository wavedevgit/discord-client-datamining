package io.sentry;

import j$.time.Instant;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s6 extends j5 {

    /* renamed from: d  reason: collision with root package name */
    private final Instant f29101d;

    public s6() {
        this(Instant.now());
    }

    @Override // io.sentry.j5
    public long h() {
        return k.n(this.f29101d.getEpochSecond()) + this.f29101d.getNano();
    }

    public s6(Instant instant) {
        this.f29101d = instant;
    }
}
