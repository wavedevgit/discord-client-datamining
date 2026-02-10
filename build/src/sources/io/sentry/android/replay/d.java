package io.sentry.android.replay;

import io.sentry.l7;
import java.util.Date;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final s f28836a;

    /* renamed from: b  reason: collision with root package name */
    private final i f28837b;

    /* renamed from: c  reason: collision with root package name */
    private final Date f28838c;

    /* renamed from: d  reason: collision with root package name */
    private final int f28839d;

    /* renamed from: e  reason: collision with root package name */
    private final long f28840e;

    /* renamed from: f  reason: collision with root package name */
    private final l7.b f28841f;

    /* renamed from: g  reason: collision with root package name */
    private final String f28842g;

    /* renamed from: h  reason: collision with root package name */
    private final List f28843h;

    public d(s recorderConfig, i cache, Date timestamp, int i10, long j10, l7.b replayType, String str, List events) {
        Intrinsics.checkNotNullParameter(recorderConfig, "recorderConfig");
        Intrinsics.checkNotNullParameter(cache, "cache");
        Intrinsics.checkNotNullParameter(timestamp, "timestamp");
        Intrinsics.checkNotNullParameter(replayType, "replayType");
        Intrinsics.checkNotNullParameter(events, "events");
        this.f28836a = recorderConfig;
        this.f28837b = cache;
        this.f28838c = timestamp;
        this.f28839d = i10;
        this.f28840e = j10;
        this.f28841f = replayType;
        this.f28842g = str;
        this.f28843h = events;
    }

    public final i a() {
        return this.f28837b;
    }

    public final long b() {
        return this.f28840e;
    }

    public final List c() {
        return this.f28843h;
    }

    public final int d() {
        return this.f28839d;
    }

    public final s e() {
        return this.f28836a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof d) {
            d dVar = (d) obj;
            return Intrinsics.areEqual(this.f28836a, dVar.f28836a) && Intrinsics.areEqual(this.f28837b, dVar.f28837b) && Intrinsics.areEqual(this.f28838c, dVar.f28838c) && this.f28839d == dVar.f28839d && this.f28840e == dVar.f28840e && this.f28841f == dVar.f28841f && Intrinsics.areEqual(this.f28842g, dVar.f28842g) && Intrinsics.areEqual(this.f28843h, dVar.f28843h);
        }
        return false;
    }

    public final l7.b f() {
        return this.f28841f;
    }

    public final String g() {
        return this.f28842g;
    }

    public final Date h() {
        return this.f28838c;
    }

    public int hashCode() {
        int hashCode = ((((((((((this.f28836a.hashCode() * 31) + this.f28837b.hashCode()) * 31) + this.f28838c.hashCode()) * 31) + Integer.hashCode(this.f28839d)) * 31) + Long.hashCode(this.f28840e)) * 31) + this.f28841f.hashCode()) * 31;
        String str = this.f28842g;
        return ((hashCode + (str == null ? 0 : str.hashCode())) * 31) + this.f28843h.hashCode();
    }

    public String toString() {
        return "LastSegmentData(recorderConfig=" + this.f28836a + ", cache=" + this.f28837b + ", timestamp=" + this.f28838c + ", id=" + this.f28839d + ", duration=" + this.f28840e + ", replayType=" + this.f28841f + ", screenAtStart=" + this.f28842g + ", events=" + this.f28843h + ')';
    }
}
