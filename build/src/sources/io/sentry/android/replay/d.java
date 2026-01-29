package io.sentry.android.replay;

import io.sentry.l7;
import java.util.Date;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final s f29508a;

    /* renamed from: b  reason: collision with root package name */
    private final i f29509b;

    /* renamed from: c  reason: collision with root package name */
    private final Date f29510c;

    /* renamed from: d  reason: collision with root package name */
    private final int f29511d;

    /* renamed from: e  reason: collision with root package name */
    private final long f29512e;

    /* renamed from: f  reason: collision with root package name */
    private final l7.b f29513f;

    /* renamed from: g  reason: collision with root package name */
    private final String f29514g;

    /* renamed from: h  reason: collision with root package name */
    private final List f29515h;

    public d(s recorderConfig, i cache, Date timestamp, int i10, long j10, l7.b replayType, String str, List events) {
        Intrinsics.checkNotNullParameter(recorderConfig, "recorderConfig");
        Intrinsics.checkNotNullParameter(cache, "cache");
        Intrinsics.checkNotNullParameter(timestamp, "timestamp");
        Intrinsics.checkNotNullParameter(replayType, "replayType");
        Intrinsics.checkNotNullParameter(events, "events");
        this.f29508a = recorderConfig;
        this.f29509b = cache;
        this.f29510c = timestamp;
        this.f29511d = i10;
        this.f29512e = j10;
        this.f29513f = replayType;
        this.f29514g = str;
        this.f29515h = events;
    }

    public final i a() {
        return this.f29509b;
    }

    public final long b() {
        return this.f29512e;
    }

    public final List c() {
        return this.f29515h;
    }

    public final int d() {
        return this.f29511d;
    }

    public final s e() {
        return this.f29508a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof d) {
            d dVar = (d) obj;
            return Intrinsics.areEqual(this.f29508a, dVar.f29508a) && Intrinsics.areEqual(this.f29509b, dVar.f29509b) && Intrinsics.areEqual(this.f29510c, dVar.f29510c) && this.f29511d == dVar.f29511d && this.f29512e == dVar.f29512e && this.f29513f == dVar.f29513f && Intrinsics.areEqual(this.f29514g, dVar.f29514g) && Intrinsics.areEqual(this.f29515h, dVar.f29515h);
        }
        return false;
    }

    public final l7.b f() {
        return this.f29513f;
    }

    public final String g() {
        return this.f29514g;
    }

    public final Date h() {
        return this.f29510c;
    }

    public int hashCode() {
        int hashCode = ((((((((((this.f29508a.hashCode() * 31) + this.f29509b.hashCode()) * 31) + this.f29510c.hashCode()) * 31) + Integer.hashCode(this.f29511d)) * 31) + Long.hashCode(this.f29512e)) * 31) + this.f29513f.hashCode()) * 31;
        String str = this.f29514g;
        return ((hashCode + (str == null ? 0 : str.hashCode())) * 31) + this.f29515h.hashCode();
    }

    public String toString() {
        return "LastSegmentData(recorderConfig=" + this.f29508a + ", cache=" + this.f29509b + ", timestamp=" + this.f29510c + ", id=" + this.f29511d + ", duration=" + this.f29512e + ", replayType=" + this.f29513f + ", screenAtStart=" + this.f29514g + ", events=" + this.f29515h + ')';
    }
}
