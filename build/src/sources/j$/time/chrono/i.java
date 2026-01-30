package j$.time.chrono;

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
    public final transient e f31555a;

    /* renamed from: b  reason: collision with root package name */
    public final transient ZoneOffset f31556b;

    /* renamed from: c  reason: collision with root package name */
    public final transient j$.time.k f31557c;

    public static i t(j$.time.k kVar, ZoneOffset zoneOffset, e eVar) {
        Objects.requireNonNull(kVar, "zone");
        if (kVar instanceof ZoneOffset) {
            return new i(kVar, (ZoneOffset) kVar, eVar);
        }
        j$.time.zone.c t10 = kVar.t();
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
            eVar = eVar.w(eVar.f31551a, 0L, 0L, j$.time.a.r(aVar.f31674c.getTotalSeconds() - aVar.f31673b.getTotalSeconds(), 0).f31545a, 0L);
            zoneOffset = aVar.f31674c;
        }
        Objects.requireNonNull(zoneOffset, "offset");
        return new i(kVar, zoneOffset, eVar);
    }

    public static i r(j jVar, j$.time.temporal.k kVar) {
        i iVar = (i) kVar;
        iVar.f();
        if (((a) jVar).equals(k.f31558a)) {
            return iVar;
        }
        iVar.f();
        throw new ClassCastException("Chronology mismatch, required: ISO, actual: ISO");
    }

    public i(j$.time.k kVar, ZoneOffset zoneOffset, e eVar) {
        Objects.requireNonNull(eVar, "dateTime");
        this.f31555a = eVar;
        Objects.requireNonNull(zoneOffset, "offset");
        this.f31556b = zoneOffset;
        Objects.requireNonNull(kVar, "zone");
        this.f31557c = kVar;
    }

    @Override // j$.time.chrono.g
    public final ZoneOffset n() {
        return this.f31556b;
    }

    public final int hashCode() {
        return (this.f31555a.hashCode() ^ this.f31556b.hashCode()) ^ Integer.rotateLeft(this.f31557c.hashCode(), 3);
    }

    @Override // j$.time.chrono.g
    public final c s() {
        return this.f31555a;
    }

    @Override // j$.time.chrono.g
    public final j$.time.k y() {
        return this.f31557c;
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
            int i10 = h.f31554a[aVar.ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    ZoneOffset ofTotalSeconds = ZoneOffset.ofTotalSeconds(aVar.f31649b.a(j10, aVar));
                    e eVar = this.f31555a;
                    Instant ofEpochSecond = Instant.ofEpochSecond(eVar.q(ofTotalSeconds), eVar.e().f31533d);
                    j$.time.k kVar = this.f31557c;
                    f();
                    k kVar2 = k.f31558a;
                    ZoneOffset d10 = kVar.t().d(ofEpochSecond);
                    Objects.requireNonNull(d10, "offset");
                    return new i(kVar, d10, (e) LocalDateTime.t(LocalDateTime.B(ofEpochSecond.getEpochSecond(), ofEpochSecond.getNano(), d10)));
                }
                return t(this.f31557c, this.f31556b, this.f31555a.b(j10, nVar));
            }
            return h(j10 - D(), j$.time.temporal.b.SECONDS);
        }
        f();
        return r(k.f31558a, nVar.C(this, j10));
    }

    @Override // j$.time.temporal.k
    /* renamed from: w */
    public final i h(long j10, p pVar) {
        if (pVar instanceof j$.time.temporal.b) {
            return (i) c(this.f31555a.h(j10, pVar));
        }
        f();
        return r(k.f31558a, pVar.r(this, j10));
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        return (obj instanceof g) && compareTo((g) obj) == 0;
    }

    public final String toString() {
        String str = this.f31555a.toString() + this.f31556b.toString();
        if (this.f31556b != this.f31557c) {
            return str + '[' + this.f31557c.toString() + ']';
        }
        return str;
    }
}
