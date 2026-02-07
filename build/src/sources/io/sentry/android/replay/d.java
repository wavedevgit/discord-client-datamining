package io.sentry.android.replay;

import io.sentry.l7;
import java.util.Date;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final s f27701a;

    /* renamed from: b  reason: collision with root package name */
    private final i f27702b;

    /* renamed from: c  reason: collision with root package name */
    private final Date f27703c;

    /* renamed from: d  reason: collision with root package name */
    private final int f27704d;

    /* renamed from: e  reason: collision with root package name */
    private final long f27705e;

    /* renamed from: f  reason: collision with root package name */
    private final l7.b f27706f;

    /* renamed from: g  reason: collision with root package name */
    private final String f27707g;

    /* renamed from: h  reason: collision with root package name */
    private final List f27708h;

    public d(s recorderConfig, i cache, Date timestamp, int i10, long j10, l7.b replayType, String str, List events) {
        Intrinsics.checkNotNullParameter(recorderConfig, "recorderConfig");
        Intrinsics.checkNotNullParameter(cache, "cache");
        Intrinsics.checkNotNullParameter(timestamp, "timestamp");
        Intrinsics.checkNotNullParameter(replayType, "replayType");
        Intrinsics.checkNotNullParameter(events, "events");
        this.f27701a = recorderConfig;
        this.f27702b = cache;
        this.f27703c = timestamp;
        this.f27704d = i10;
        this.f27705e = j10;
        this.f27706f = replayType;
        this.f27707g = str;
        this.f27708h = events;
    }

    public final i a() {
        return this.f27702b;
    }

    public final long b() {
        return this.f27705e;
    }

    public final List c() {
        return this.f27708h;
    }

    public final int d() {
        return this.f27704d;
    }

    public final s e() {
        return this.f27701a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof d) {
            d dVar = (d) obj;
            return Intrinsics.areEqual(this.f27701a, dVar.f27701a) && Intrinsics.areEqual(this.f27702b, dVar.f27702b) && Intrinsics.areEqual(this.f27703c, dVar.f27703c) && this.f27704d == dVar.f27704d && this.f27705e == dVar.f27705e && this.f27706f == dVar.f27706f && Intrinsics.areEqual(this.f27707g, dVar.f27707g) && Intrinsics.areEqual(this.f27708h, dVar.f27708h);
        }
        return false;
    }

    public final l7.b f() {
        return this.f27706f;
    }

    public final String g() {
        return this.f27707g;
    }

    public final Date h() {
        return this.f27703c;
    }

    public int hashCode() {
        int hashCode = ((((((((((this.f27701a.hashCode() * 31) + this.f27702b.hashCode()) * 31) + this.f27703c.hashCode()) * 31) + Integer.hashCode(this.f27704d)) * 31) + Long.hashCode(this.f27705e)) * 31) + this.f27706f.hashCode()) * 31;
        String str = this.f27707g;
        return ((hashCode + (str == null ? 0 : str.hashCode())) * 31) + this.f27708h.hashCode();
    }

    public String toString() {
        return "LastSegmentData(recorderConfig=" + this.f27701a + ", cache=" + this.f27702b + ", timestamp=" + this.f27703c + ", id=" + this.f27704d + ", duration=" + this.f27705e + ", replayType=" + this.f27706f + ", screenAtStart=" + this.f27707g + ", events=" + this.f27708h + ')';
    }
}
