package j$.time.chrono;

import j$.time.Duration;
import j$.time.Instant;
import j$.time.LocalDateTime;
import j$.time.ZoneOffset;
import j$.time.temporal.n;
import j$.time.temporal.p;
import java.io.Serializable;
import java.util.List;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class i implements g, Serializable {

    /* renamed from: a  reason: collision with root package name */
    public final transient e f29413a;

    /* renamed from: b  reason: collision with root package name */
    public final transient ZoneOffset f29414b;

    /* renamed from: c  reason: collision with root package name */
    public final transient j$.time.j f29415c;

    public static i t(j$.time.j jVar, ZoneOffset zoneOffset, e eVar) {
        Objects.requireNonNull(jVar, "zone");
        if (jVar instanceof ZoneOffset) {
            return new i(jVar, (ZoneOffset) jVar, eVar);
        }
        j$.time.zone.c t10 = jVar.t();
        LocalDateTime t11 = LocalDateTime.t(eVar);
        List f10 = t10.f(t11);
        if (f10.size() == 1) {
            zoneOffset = (ZoneOffset) f10.get(0);
        } else if (f10.size() != 0) {
            if (zoneOffset == null || !f10.contains(zoneOffset)) {
                zoneOffset = (ZoneOffset) f10.get(0);
            }
            eVar = eVar;
        } else {
            Object e10 = t10.e(t11);
            j$.time.zone.a aVar = e10 instanceof j$.time.zone.a ? (j$.time.zone.a) e10 : null;
            eVar = eVar.w(eVar.f29409a, 0L, 0L, Duration.r(aVar.f29530c.getTotalSeconds() - aVar.f29529b.getTotalSeconds(), 0).f29375a, 0L);
            zoneOffset = aVar.f29530c;
        }
        Objects.requireNonNull(zoneOffset, "offset");
        return new i(jVar, zoneOffset, eVar);
    }

    public static i r(j jVar, j$.time.temporal.k kVar) {
        i iVar = (i) kVar;
        iVar.f();
        if (((a) jVar).equals(k.f29416a)) {
            return iVar;
        }
        iVar.f();
        throw new ClassCastException("Chronology mismatch, required: ISO, actual: ISO");
    }

    public i(j$.time.j jVar, ZoneOffset zoneOffset, e eVar) {
        Objects.requireNonNull(eVar, "dateTime");
        this.f29413a = eVar;
        Objects.requireNonNull(zoneOffset, "offset");
        this.f29414b = zoneOffset;
        Objects.requireNonNull(jVar, "zone");
        this.f29415c = jVar;
    }

    @Override // j$.time.chrono.g
    public final ZoneOffset n() {
        return this.f29414b;
    }

    public final int hashCode() {
        return (this.f29413a.hashCode() ^ this.f29414b.hashCode()) ^ Integer.rotateLeft(this.f29415c.hashCode(), 3);
    }

    @Override // j$.time.chrono.g
    public final c s() {
        return this.f29413a;
    }

    @Override // j$.time.chrono.g
    public final j$.time.j y() {
        return this.f29415c;
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final boolean j(n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            return true;
        }
        return nVar != null && nVar.r(this);
    }

    @Override // j$.time.temporal.k
    public final j$.time.temporal.k b(long j10, n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            j$.time.temporal.a aVar = (j$.time.temporal.a) nVar;
            int i10 = h.f29412a[aVar.ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    ZoneOffset ofTotalSeconds = ZoneOffset.ofTotalSeconds(aVar.f29505b.a(j10, aVar));
                    e eVar = this.f29413a;
                    Instant ofEpochSecond = Instant.ofEpochSecond(eVar.q(ofTotalSeconds), eVar.e().f29392d);
                    j$.time.j jVar = this.f29415c;
                    f();
                    k kVar = k.f29416a;
                    ZoneOffset d10 = jVar.t().d(ofEpochSecond);
                    Objects.requireNonNull(d10, "offset");
                    return new i(jVar, d10, (e) LocalDateTime.t(LocalDateTime.B(ofEpochSecond.getEpochSecond(), ofEpochSecond.getNano(), d10)));
                }
                return t(this.f29415c, this.f29414b, this.f29413a.b(j10, nVar));
            }
            return h(j10 - D(), j$.time.temporal.b.SECONDS);
        }
        f();
        return r(k.f29416a, nVar.C(this, j10));
    }

    @Override // j$.time.temporal.k
    /* renamed from: w */
    public final i h(long j10, p pVar) {
        if (pVar instanceof j$.time.temporal.b) {
            return (i) c(this.f29413a.h(j10, pVar));
        }
        f();
        return r(k.f29416a, pVar.r(this, j10));
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        return (obj instanceof g) && compareTo((g) obj) == 0;
    }

    public final String toString() {
        String str = this.f29413a.toString() + this.f29414b.toString();
        if (this.f29414b != this.f29415c) {
            return str + '[' + this.f29415c.toString() + ']';
        }
        return str;
    }
}
