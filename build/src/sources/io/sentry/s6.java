package io.sentry;

import j$.time.Instant;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s6 extends j5 {

    /* renamed from: d  reason: collision with root package name */
    private final Instant f28901d;

    public s6() {
        this(Instant.now());
    }

    @Override // io.sentry.j5
    public long h() {
        return k.n(this.f28901d.getEpochSecond()) + this.f28901d.getNano();
    }

    public s6(Instant instant) {
        this.f28901d = instant;
    }
}
