package io.sentry.android.replay;

import io.sentry.l7;
import java.util.Date;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final s f29524a;

    /* renamed from: b  reason: collision with root package name */
    private final i f29525b;

    /* renamed from: c  reason: collision with root package name */
    private final Date f29526c;

    /* renamed from: d  reason: collision with root package name */
    private final int f29527d;

    /* renamed from: e  reason: collision with root package name */
    private final long f29528e;

    /* renamed from: f  reason: collision with root package name */
    private final l7.b f29529f;

    /* renamed from: g  reason: collision with root package name */
    private final String f29530g;

    /* renamed from: h  reason: collision with root package name */
    private final List f29531h;

    public d(s recorderConfig, i cache, Date timestamp, int i10, long j10, l7.b replayType, String str, List events) {
        Intrinsics.checkNotNullParameter(recorderConfig, "recorderConfig");
        Intrinsics.checkNotNullParameter(cache, "cache");
        Intrinsics.checkNotNullParameter(timestamp, "timestamp");
        Intrinsics.checkNotNullParameter(replayType, "replayType");
        Intrinsics.checkNotNullParameter(events, "events");
        this.f29524a = recorderConfig;
        this.f29525b = cache;
        this.f29526c = timestamp;
        this.f29527d = i10;
        this.f29528e = j10;
        this.f29529f = replayType;
        this.f29530g = str;
        this.f29531h = events;
    }

    public final i a() {
        return this.f29525b;
    }

    public final long b() {
        return this.f29528e;
    }

    public final List c() {
        return this.f29531h;
    }

    public final int d() {
        return this.f29527d;
    }

    public final s e() {
        return this.f29524a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof d) {
            d dVar = (d) obj;
            return Intrinsics.areEqual(this.f29524a, dVar.f29524a) && Intrinsics.areEqual(this.f29525b, dVar.f29525b) && Intrinsics.areEqual(this.f29526c, dVar.f29526c) && this.f29527d == dVar.f29527d && this.f29528e == dVar.f29528e && this.f29529f == dVar.f29529f && Intrinsics.areEqual(this.f29530g, dVar.f29530g) && Intrinsics.areEqual(this.f29531h, dVar.f29531h);
        }
        return false;
    }

    public final l7.b f() {
        return this.f29529f;
    }

    public final String g() {
        return this.f29530g;
    }

    public final Date h() {
        return this.f29526c;
    }

    public int hashCode() {
        int hashCode = ((((((((((this.f29524a.hashCode() * 31) + this.f29525b.hashCode()) * 31) + this.f29526c.hashCode()) * 31) + Integer.hashCode(this.f29527d)) * 31) + Long.hashCode(this.f29528e)) * 31) + this.f29529f.hashCode()) * 31;
        String str = this.f29530g;
        return ((hashCode + (str == null ? 0 : str.hashCode())) * 31) + this.f29531h.hashCode();
    }

    public String toString() {
        return "LastSegmentData(recorderConfig=" + this.f29524a + ", cache=" + this.f29525b + ", timestamp=" + this.f29526c + ", id=" + this.f29527d + ", duration=" + this.f29528e + ", replayType=" + this.f29529f + ", screenAtStart=" + this.f29530g + ", events=" + this.f29531h + ')';
    }
}
