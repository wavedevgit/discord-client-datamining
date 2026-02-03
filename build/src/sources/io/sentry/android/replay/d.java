package io.sentry.android.replay;

import io.sentry.l7;
import java.util.Date;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final s f29451a;

    /* renamed from: b  reason: collision with root package name */
    private final i f29452b;

    /* renamed from: c  reason: collision with root package name */
    private final Date f29453c;

    /* renamed from: d  reason: collision with root package name */
    private final int f29454d;

    /* renamed from: e  reason: collision with root package name */
    private final long f29455e;

    /* renamed from: f  reason: collision with root package name */
    private final l7.b f29456f;

    /* renamed from: g  reason: collision with root package name */
    private final String f29457g;

    /* renamed from: h  reason: collision with root package name */
    private final List f29458h;

    public d(s recorderConfig, i cache, Date timestamp, int i10, long j10, l7.b replayType, String str, List events) {
        Intrinsics.checkNotNullParameter(recorderConfig, "recorderConfig");
        Intrinsics.checkNotNullParameter(cache, "cache");
        Intrinsics.checkNotNullParameter(timestamp, "timestamp");
        Intrinsics.checkNotNullParameter(replayType, "replayType");
        Intrinsics.checkNotNullParameter(events, "events");
        this.f29451a = recorderConfig;
        this.f29452b = cache;
        this.f29453c = timestamp;
        this.f29454d = i10;
        this.f29455e = j10;
        this.f29456f = replayType;
        this.f29457g = str;
        this.f29458h = events;
    }

    public final i a() {
        return this.f29452b;
    }

    public final long b() {
        return this.f29455e;
    }

    public final List c() {
        return this.f29458h;
    }

    public final int d() {
        return this.f29454d;
    }

    public final s e() {
        return this.f29451a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof d) {
            d dVar = (d) obj;
            return Intrinsics.areEqual(this.f29451a, dVar.f29451a) && Intrinsics.areEqual(this.f29452b, dVar.f29452b) && Intrinsics.areEqual(this.f29453c, dVar.f29453c) && this.f29454d == dVar.f29454d && this.f29455e == dVar.f29455e && this.f29456f == dVar.f29456f && Intrinsics.areEqual(this.f29457g, dVar.f29457g) && Intrinsics.areEqual(this.f29458h, dVar.f29458h);
        }
        return false;
    }

    public final l7.b f() {
        return this.f29456f;
    }

    public final String g() {
        return this.f29457g;
    }

    public final Date h() {
        return this.f29453c;
    }

    public int hashCode() {
        int hashCode = ((((((((((this.f29451a.hashCode() * 31) + this.f29452b.hashCode()) * 31) + this.f29453c.hashCode()) * 31) + Integer.hashCode(this.f29454d)) * 31) + Long.hashCode(this.f29455e)) * 31) + this.f29456f.hashCode()) * 31;
        String str = this.f29457g;
        return ((hashCode + (str == null ? 0 : str.hashCode())) * 31) + this.f29458h.hashCode();
    }

    public String toString() {
        return "LastSegmentData(recorderConfig=" + this.f29451a + ", cache=" + this.f29452b + ", timestamp=" + this.f29453c + ", id=" + this.f29454d + ", duration=" + this.f29455e + ", replayType=" + this.f29456f + ", screenAtStart=" + this.f29457g + ", events=" + this.f29458h + ')';
    }
}
