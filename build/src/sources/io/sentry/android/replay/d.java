package io.sentry.android.replay;

import io.sentry.l7;
import java.util.Date;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final s f28509a;

    /* renamed from: b  reason: collision with root package name */
    private final i f28510b;

    /* renamed from: c  reason: collision with root package name */
    private final Date f28511c;

    /* renamed from: d  reason: collision with root package name */
    private final int f28512d;

    /* renamed from: e  reason: collision with root package name */
    private final long f28513e;

    /* renamed from: f  reason: collision with root package name */
    private final l7.b f28514f;

    /* renamed from: g  reason: collision with root package name */
    private final String f28515g;

    /* renamed from: h  reason: collision with root package name */
    private final List f28516h;

    public d(s recorderConfig, i cache, Date timestamp, int i10, long j10, l7.b replayType, String str, List events) {
        Intrinsics.checkNotNullParameter(recorderConfig, "recorderConfig");
        Intrinsics.checkNotNullParameter(cache, "cache");
        Intrinsics.checkNotNullParameter(timestamp, "timestamp");
        Intrinsics.checkNotNullParameter(replayType, "replayType");
        Intrinsics.checkNotNullParameter(events, "events");
        this.f28509a = recorderConfig;
        this.f28510b = cache;
        this.f28511c = timestamp;
        this.f28512d = i10;
        this.f28513e = j10;
        this.f28514f = replayType;
        this.f28515g = str;
        this.f28516h = events;
    }

    public final i a() {
        return this.f28510b;
    }

    public final long b() {
        return this.f28513e;
    }

    public final List c() {
        return this.f28516h;
    }

    public final int d() {
        return this.f28512d;
    }

    public final s e() {
        return this.f28509a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof d) {
            d dVar = (d) obj;
            return Intrinsics.areEqual(this.f28509a, dVar.f28509a) && Intrinsics.areEqual(this.f28510b, dVar.f28510b) && Intrinsics.areEqual(this.f28511c, dVar.f28511c) && this.f28512d == dVar.f28512d && this.f28513e == dVar.f28513e && this.f28514f == dVar.f28514f && Intrinsics.areEqual(this.f28515g, dVar.f28515g) && Intrinsics.areEqual(this.f28516h, dVar.f28516h);
        }
        return false;
    }

    public final l7.b f() {
        return this.f28514f;
    }

    public final String g() {
        return this.f28515g;
    }

    public final Date h() {
        return this.f28511c;
    }

    public int hashCode() {
        int hashCode = ((((((((((this.f28509a.hashCode() * 31) + this.f28510b.hashCode()) * 31) + this.f28511c.hashCode()) * 31) + Integer.hashCode(this.f28512d)) * 31) + Long.hashCode(this.f28513e)) * 31) + this.f28514f.hashCode()) * 31;
        String str = this.f28515g;
        return ((hashCode + (str == null ? 0 : str.hashCode())) * 31) + this.f28516h.hashCode();
    }

    public String toString() {
        return "LastSegmentData(recorderConfig=" + this.f28509a + ", cache=" + this.f28510b + ", timestamp=" + this.f28511c + ", id=" + this.f28512d + ", duration=" + this.f28513e + ", replayType=" + this.f28514f + ", screenAtStart=" + this.f28515g + ", events=" + this.f28516h + ')';
    }
}
