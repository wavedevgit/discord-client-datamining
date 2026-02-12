package io.sentry.android.replay;

import io.sentry.l7;
import java.util.Date;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final s f28837a;

    /* renamed from: b  reason: collision with root package name */
    private final i f28838b;

    /* renamed from: c  reason: collision with root package name */
    private final Date f28839c;

    /* renamed from: d  reason: collision with root package name */
    private final int f28840d;

    /* renamed from: e  reason: collision with root package name */
    private final long f28841e;

    /* renamed from: f  reason: collision with root package name */
    private final l7.b f28842f;

    /* renamed from: g  reason: collision with root package name */
    private final String f28843g;

    /* renamed from: h  reason: collision with root package name */
    private final List f28844h;

    public d(s recorderConfig, i cache, Date timestamp, int i10, long j10, l7.b replayType, String str, List events) {
        Intrinsics.checkNotNullParameter(recorderConfig, "recorderConfig");
        Intrinsics.checkNotNullParameter(cache, "cache");
        Intrinsics.checkNotNullParameter(timestamp, "timestamp");
        Intrinsics.checkNotNullParameter(replayType, "replayType");
        Intrinsics.checkNotNullParameter(events, "events");
        this.f28837a = recorderConfig;
        this.f28838b = cache;
        this.f28839c = timestamp;
        this.f28840d = i10;
        this.f28841e = j10;
        this.f28842f = replayType;
        this.f28843g = str;
        this.f28844h = events;
    }

    public final i a() {
        return this.f28838b;
    }

    public final long b() {
        return this.f28841e;
    }

    public final List c() {
        return this.f28844h;
    }

    public final int d() {
        return this.f28840d;
    }

    public final s e() {
        return this.f28837a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof d) {
            d dVar = (d) obj;
            return Intrinsics.areEqual(this.f28837a, dVar.f28837a) && Intrinsics.areEqual(this.f28838b, dVar.f28838b) && Intrinsics.areEqual(this.f28839c, dVar.f28839c) && this.f28840d == dVar.f28840d && this.f28841e == dVar.f28841e && this.f28842f == dVar.f28842f && Intrinsics.areEqual(this.f28843g, dVar.f28843g) && Intrinsics.areEqual(this.f28844h, dVar.f28844h);
        }
        return false;
    }

    public final l7.b f() {
        return this.f28842f;
    }

    public final String g() {
        return this.f28843g;
    }

    public final Date h() {
        return this.f28839c;
    }

    public int hashCode() {
        int hashCode = ((((((((((this.f28837a.hashCode() * 31) + this.f28838b.hashCode()) * 31) + this.f28839c.hashCode()) * 31) + Integer.hashCode(this.f28840d)) * 31) + Long.hashCode(this.f28841e)) * 31) + this.f28842f.hashCode()) * 31;
        String str = this.f28843g;
        return ((hashCode + (str == null ? 0 : str.hashCode())) * 31) + this.f28844h.hashCode();
    }

    public String toString() {
        return "LastSegmentData(recorderConfig=" + this.f28837a + ", cache=" + this.f28838b + ", timestamp=" + this.f28839c + ", id=" + this.f28840d + ", duration=" + this.f28841e + ", replayType=" + this.f28842f + ", screenAtStart=" + this.f28843g + ", events=" + this.f28844h + ')';
    }
}
