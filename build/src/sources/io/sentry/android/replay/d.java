package io.sentry.android.replay;

import io.sentry.l7;
import java.util.Date;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final s f29090a;

    /* renamed from: b  reason: collision with root package name */
    private final i f29091b;

    /* renamed from: c  reason: collision with root package name */
    private final Date f29092c;

    /* renamed from: d  reason: collision with root package name */
    private final int f29093d;

    /* renamed from: e  reason: collision with root package name */
    private final long f29094e;

    /* renamed from: f  reason: collision with root package name */
    private final l7.b f29095f;

    /* renamed from: g  reason: collision with root package name */
    private final String f29096g;

    /* renamed from: h  reason: collision with root package name */
    private final List f29097h;

    public d(s recorderConfig, i cache, Date timestamp, int i10, long j10, l7.b replayType, String str, List events) {
        Intrinsics.checkNotNullParameter(recorderConfig, "recorderConfig");
        Intrinsics.checkNotNullParameter(cache, "cache");
        Intrinsics.checkNotNullParameter(timestamp, "timestamp");
        Intrinsics.checkNotNullParameter(replayType, "replayType");
        Intrinsics.checkNotNullParameter(events, "events");
        this.f29090a = recorderConfig;
        this.f29091b = cache;
        this.f29092c = timestamp;
        this.f29093d = i10;
        this.f29094e = j10;
        this.f29095f = replayType;
        this.f29096g = str;
        this.f29097h = events;
    }

    public final i a() {
        return this.f29091b;
    }

    public final long b() {
        return this.f29094e;
    }

    public final List c() {
        return this.f29097h;
    }

    public final int d() {
        return this.f29093d;
    }

    public final s e() {
        return this.f29090a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof d) {
            d dVar = (d) obj;
            return Intrinsics.areEqual(this.f29090a, dVar.f29090a) && Intrinsics.areEqual(this.f29091b, dVar.f29091b) && Intrinsics.areEqual(this.f29092c, dVar.f29092c) && this.f29093d == dVar.f29093d && this.f29094e == dVar.f29094e && this.f29095f == dVar.f29095f && Intrinsics.areEqual(this.f29096g, dVar.f29096g) && Intrinsics.areEqual(this.f29097h, dVar.f29097h);
        }
        return false;
    }

    public final l7.b f() {
        return this.f29095f;
    }

    public final String g() {
        return this.f29096g;
    }

    public final Date h() {
        return this.f29092c;
    }

    public int hashCode() {
        int hashCode = ((((((((((this.f29090a.hashCode() * 31) + this.f29091b.hashCode()) * 31) + this.f29092c.hashCode()) * 31) + Integer.hashCode(this.f29093d)) * 31) + Long.hashCode(this.f29094e)) * 31) + this.f29095f.hashCode()) * 31;
        String str = this.f29096g;
        return ((hashCode + (str == null ? 0 : str.hashCode())) * 31) + this.f29097h.hashCode();
    }

    public String toString() {
        return "LastSegmentData(recorderConfig=" + this.f29090a + ", cache=" + this.f29091b + ", timestamp=" + this.f29092c + ", id=" + this.f29093d + ", duration=" + this.f29094e + ", replayType=" + this.f29095f + ", screenAtStart=" + this.f29096g + ", events=" + this.f29097h + ')';
    }
}
