package io.sentry.android.replay;

import io.sentry.l7;
import java.util.Date;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final s f27901a;

    /* renamed from: b  reason: collision with root package name */
    private final i f27902b;

    /* renamed from: c  reason: collision with root package name */
    private final Date f27903c;

    /* renamed from: d  reason: collision with root package name */
    private final int f27904d;

    /* renamed from: e  reason: collision with root package name */
    private final long f27905e;

    /* renamed from: f  reason: collision with root package name */
    private final l7.b f27906f;

    /* renamed from: g  reason: collision with root package name */
    private final String f27907g;

    /* renamed from: h  reason: collision with root package name */
    private final List f27908h;

    public d(s recorderConfig, i cache, Date timestamp, int i10, long j10, l7.b replayType, String str, List events) {
        Intrinsics.checkNotNullParameter(recorderConfig, "recorderConfig");
        Intrinsics.checkNotNullParameter(cache, "cache");
        Intrinsics.checkNotNullParameter(timestamp, "timestamp");
        Intrinsics.checkNotNullParameter(replayType, "replayType");
        Intrinsics.checkNotNullParameter(events, "events");
        this.f27901a = recorderConfig;
        this.f27902b = cache;
        this.f27903c = timestamp;
        this.f27904d = i10;
        this.f27905e = j10;
        this.f27906f = replayType;
        this.f27907g = str;
        this.f27908h = events;
    }

    public final i a() {
        return this.f27902b;
    }

    public final long b() {
        return this.f27905e;
    }

    public final List c() {
        return this.f27908h;
    }

    public final int d() {
        return this.f27904d;
    }

    public final s e() {
        return this.f27901a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof d) {
            d dVar = (d) obj;
            return Intrinsics.areEqual(this.f27901a, dVar.f27901a) && Intrinsics.areEqual(this.f27902b, dVar.f27902b) && Intrinsics.areEqual(this.f27903c, dVar.f27903c) && this.f27904d == dVar.f27904d && this.f27905e == dVar.f27905e && this.f27906f == dVar.f27906f && Intrinsics.areEqual(this.f27907g, dVar.f27907g) && Intrinsics.areEqual(this.f27908h, dVar.f27908h);
        }
        return false;
    }

    public final l7.b f() {
        return this.f27906f;
    }

    public final String g() {
        return this.f27907g;
    }

    public final Date h() {
        return this.f27903c;
    }

    public int hashCode() {
        int hashCode = ((((((((((this.f27901a.hashCode() * 31) + this.f27902b.hashCode()) * 31) + this.f27903c.hashCode()) * 31) + Integer.hashCode(this.f27904d)) * 31) + Long.hashCode(this.f27905e)) * 31) + this.f27906f.hashCode()) * 31;
        String str = this.f27907g;
        return ((hashCode + (str == null ? 0 : str.hashCode())) * 31) + this.f27908h.hashCode();
    }

    public String toString() {
        return "LastSegmentData(recorderConfig=" + this.f27901a + ", cache=" + this.f27902b + ", timestamp=" + this.f27903c + ", id=" + this.f27904d + ", duration=" + this.f27905e + ", replayType=" + this.f27906f + ", screenAtStart=" + this.f27907g + ", events=" + this.f27908h + ')';
    }
}
