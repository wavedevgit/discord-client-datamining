package io.sentry.android.replay;

import io.sentry.l7;
import java.util.Date;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final s f27653a;

    /* renamed from: b  reason: collision with root package name */
    private final i f27654b;

    /* renamed from: c  reason: collision with root package name */
    private final Date f27655c;

    /* renamed from: d  reason: collision with root package name */
    private final int f27656d;

    /* renamed from: e  reason: collision with root package name */
    private final long f27657e;

    /* renamed from: f  reason: collision with root package name */
    private final l7.b f27658f;

    /* renamed from: g  reason: collision with root package name */
    private final String f27659g;

    /* renamed from: h  reason: collision with root package name */
    private final List f27660h;

    public d(s recorderConfig, i cache, Date timestamp, int i10, long j10, l7.b replayType, String str, List events) {
        Intrinsics.checkNotNullParameter(recorderConfig, "recorderConfig");
        Intrinsics.checkNotNullParameter(cache, "cache");
        Intrinsics.checkNotNullParameter(timestamp, "timestamp");
        Intrinsics.checkNotNullParameter(replayType, "replayType");
        Intrinsics.checkNotNullParameter(events, "events");
        this.f27653a = recorderConfig;
        this.f27654b = cache;
        this.f27655c = timestamp;
        this.f27656d = i10;
        this.f27657e = j10;
        this.f27658f = replayType;
        this.f27659g = str;
        this.f27660h = events;
    }

    public final i a() {
        return this.f27654b;
    }

    public final long b() {
        return this.f27657e;
    }

    public final List c() {
        return this.f27660h;
    }

    public final int d() {
        return this.f27656d;
    }

    public final s e() {
        return this.f27653a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof d) {
            d dVar = (d) obj;
            return Intrinsics.areEqual(this.f27653a, dVar.f27653a) && Intrinsics.areEqual(this.f27654b, dVar.f27654b) && Intrinsics.areEqual(this.f27655c, dVar.f27655c) && this.f27656d == dVar.f27656d && this.f27657e == dVar.f27657e && this.f27658f == dVar.f27658f && Intrinsics.areEqual(this.f27659g, dVar.f27659g) && Intrinsics.areEqual(this.f27660h, dVar.f27660h);
        }
        return false;
    }

    public final l7.b f() {
        return this.f27658f;
    }

    public final String g() {
        return this.f27659g;
    }

    public final Date h() {
        return this.f27655c;
    }

    public int hashCode() {
        int hashCode = ((((((((((this.f27653a.hashCode() * 31) + this.f27654b.hashCode()) * 31) + this.f27655c.hashCode()) * 31) + Integer.hashCode(this.f27656d)) * 31) + Long.hashCode(this.f27657e)) * 31) + this.f27658f.hashCode()) * 31;
        String str = this.f27659g;
        return ((hashCode + (str == null ? 0 : str.hashCode())) * 31) + this.f27660h.hashCode();
    }

    public String toString() {
        return "LastSegmentData(recorderConfig=" + this.f27653a + ", cache=" + this.f27654b + ", timestamp=" + this.f27655c + ", id=" + this.f27656d + ", duration=" + this.f27657e + ", replayType=" + this.f27658f + ", screenAtStart=" + this.f27659g + ", events=" + this.f27660h + ')';
    }
}
