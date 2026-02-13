package io.sentry.android.replay;

import io.sentry.l7;
import java.util.Date;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final s f29405a;

    /* renamed from: b  reason: collision with root package name */
    private final i f29406b;

    /* renamed from: c  reason: collision with root package name */
    private final Date f29407c;

    /* renamed from: d  reason: collision with root package name */
    private final int f29408d;

    /* renamed from: e  reason: collision with root package name */
    private final long f29409e;

    /* renamed from: f  reason: collision with root package name */
    private final l7.b f29410f;

    /* renamed from: g  reason: collision with root package name */
    private final String f29411g;

    /* renamed from: h  reason: collision with root package name */
    private final List f29412h;

    public d(s recorderConfig, i cache, Date timestamp, int i10, long j10, l7.b replayType, String str, List events) {
        Intrinsics.checkNotNullParameter(recorderConfig, "recorderConfig");
        Intrinsics.checkNotNullParameter(cache, "cache");
        Intrinsics.checkNotNullParameter(timestamp, "timestamp");
        Intrinsics.checkNotNullParameter(replayType, "replayType");
        Intrinsics.checkNotNullParameter(events, "events");
        this.f29405a = recorderConfig;
        this.f29406b = cache;
        this.f29407c = timestamp;
        this.f29408d = i10;
        this.f29409e = j10;
        this.f29410f = replayType;
        this.f29411g = str;
        this.f29412h = events;
    }

    public final i a() {
        return this.f29406b;
    }

    public final long b() {
        return this.f29409e;
    }

    public final List c() {
        return this.f29412h;
    }

    public final int d() {
        return this.f29408d;
    }

    public final s e() {
        return this.f29405a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof d) {
            d dVar = (d) obj;
            return Intrinsics.areEqual(this.f29405a, dVar.f29405a) && Intrinsics.areEqual(this.f29406b, dVar.f29406b) && Intrinsics.areEqual(this.f29407c, dVar.f29407c) && this.f29408d == dVar.f29408d && this.f29409e == dVar.f29409e && this.f29410f == dVar.f29410f && Intrinsics.areEqual(this.f29411g, dVar.f29411g) && Intrinsics.areEqual(this.f29412h, dVar.f29412h);
        }
        return false;
    }

    public final l7.b f() {
        return this.f29410f;
    }

    public final String g() {
        return this.f29411g;
    }

    public final Date h() {
        return this.f29407c;
    }

    public int hashCode() {
        int hashCode = ((((((((((this.f29405a.hashCode() * 31) + this.f29406b.hashCode()) * 31) + this.f29407c.hashCode()) * 31) + Integer.hashCode(this.f29408d)) * 31) + Long.hashCode(this.f29409e)) * 31) + this.f29410f.hashCode()) * 31;
        String str = this.f29411g;
        return ((hashCode + (str == null ? 0 : str.hashCode())) * 31) + this.f29412h.hashCode();
    }

    public String toString() {
        return "LastSegmentData(recorderConfig=" + this.f29405a + ", cache=" + this.f29406b + ", timestamp=" + this.f29407c + ", id=" + this.f29408d + ", duration=" + this.f29409e + ", replayType=" + this.f29410f + ", screenAtStart=" + this.f29411g + ", events=" + this.f29412h + ')';
    }
}
