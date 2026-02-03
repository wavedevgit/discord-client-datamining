package j$.time.chrono;

import j$.time.LocalDate;
import j$.time.LocalTime;
import j$.time.temporal.l;
import j$.time.temporal.n;
import j$.time.temporal.p;
import j$.time.temporal.r;
import java.io.Serializable;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class e implements c, j$.time.temporal.k, l, Serializable {

    /* renamed from: a  reason: collision with root package name */
    public final transient ChronoLocalDate f31289a;

    /* renamed from: b  reason: collision with root package name */
    public final transient LocalTime f31290b;

    public static e r(j jVar, j$.time.temporal.k kVar) {
        e eVar = (e) kVar;
        eVar.l().f();
        if (((a) jVar).equals(k.f31296a)) {
            return eVar;
        }
        eVar.l().f();
        throw new ClassCastException("Chronology mismatch, required: ISO, actual: ISO");
    }

    public e(ChronoLocalDate chronoLocalDate, LocalTime localTime) {
        Objects.requireNonNull(localTime, "time");
        this.f31289a = chronoLocalDate;
        this.f31290b = localTime;
    }

    public final e B(j$.time.temporal.k kVar, LocalTime localTime) {
        ChronoLocalDate chronoLocalDate = this.f31289a;
        if (chronoLocalDate == kVar && this.f31290b == localTime) {
            return this;
        }
        chronoLocalDate.f();
        return new e(b.r(k.f31296a, kVar), localTime);
    }

    public final int hashCode() {
        return this.f31289a.hashCode() ^ this.f31290b.hashCode();
    }

    @Override // j$.time.chrono.c
    public final ChronoLocalDate l() {
        return this.f31289a;
    }

    @Override // j$.time.chrono.c
    public final LocalTime e() {
        return this.f31290b;
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final boolean j(n nVar) {
        if (!(nVar instanceof j$.time.temporal.a)) {
            return nVar != null && nVar.r(this);
        }
        j$.time.temporal.a aVar = (j$.time.temporal.a) nVar;
        return aVar.isDateBased() || aVar.F();
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final r i(n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            return (((j$.time.temporal.a) nVar).F() ? this.f31290b : this.f31289a).i(nVar);
        }
        return nVar.t(this);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final int g(n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            return ((j$.time.temporal.a) nVar).F() ? this.f31290b.g(nVar) : this.f31289a.g(nVar);
        }
        return i(nVar).a(m(nVar), nVar);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final long m(n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            return ((j$.time.temporal.a) nVar).F() ? this.f31290b.m(nVar) : this.f31289a.m(nVar);
        }
        return nVar.B(this);
    }

    @Override // j$.time.temporal.k
    public final j$.time.temporal.k c(LocalDate localDate) {
        if (localDate != null) {
            return B(localDate, this.f31290b);
        }
        this.f31289a.f();
        return r(k.f31296a, (e) localDate.d(this));
    }

    @Override // j$.time.temporal.k
    /* renamed from: x */
    public final e b(long j10, n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            if (((j$.time.temporal.a) nVar).F()) {
                return B(this.f31289a, this.f31290b.b(j10, nVar));
            }
            return B(this.f31289a.b(j10, nVar), this.f31290b);
        }
        this.f31289a.f();
        return r(k.f31296a, nVar.C(this, j10));
    }

    @Override // j$.time.temporal.k
    /* renamed from: t */
    public final e h(long j10, p pVar) {
        if (!(pVar instanceof j$.time.temporal.b)) {
            this.f31289a.f();
            return r(k.f31296a, pVar.r(this, j10));
        }
        switch (d.f31288a[((j$.time.temporal.b) pVar).ordinal()]) {
            case 1:
                return w(this.f31289a, 0L, 0L, 0L, j10);
            case 2:
                e B = B(this.f31289a.h(j10 / 86400000000L, j$.time.temporal.b.DAYS), this.f31290b);
                return B.w(B.f31289a, 0L, 0L, 0L, (j10 % 86400000000L) * 1000);
            case 3:
                e B2 = B(this.f31289a.h(j10 / 86400000, j$.time.temporal.b.DAYS), this.f31290b);
                return B2.w(B2.f31289a, 0L, 0L, 0L, (j10 % 86400000) * 1000000);
            case 4:
                return w(this.f31289a, 0L, 0L, j10, 0L);
            case 5:
                return w(this.f31289a, 0L, j10, 0L, 0L);
            case 6:
                return w(this.f31289a, j10, 0L, 0L, 0L);
            case 7:
                e B3 = B(this.f31289a.h(j10 / 256, j$.time.temporal.b.DAYS), this.f31290b);
                return B3.w(B3.f31289a, (j10 % 256) * 12, 0L, 0L, 0L);
            default:
                return B(this.f31289a.h(j10, pVar), this.f31290b);
        }
    }

    public final e w(ChronoLocalDate chronoLocalDate, long j10, long j11, long j12, long j13) {
        if ((j10 | j11 | j12 | j13) == 0) {
            return B(chronoLocalDate, this.f31290b);
        }
        long j14 = j10 / 24;
        long j15 = ((j10 % 24) * 3600000000000L) + ((j11 % 1440) * 60000000000L) + ((j12 % 86400) * 1000000000) + (j13 % 86400000000000L);
        long G = this.f31290b.G();
        long j16 = j15 + G;
        long floorDiv = Math.floorDiv(j16, 86400000000000L) + j14 + (j11 / 1440) + (j12 / 86400) + (j13 / 86400000000000L);
        long floorMod = Math.floorMod(j16, 86400000000000L);
        return B(chronoLocalDate.h(floorDiv, j$.time.temporal.b.DAYS), floorMod == G ? this.f31290b : LocalTime.x(floorMod));
    }

    @Override // j$.time.chrono.c
    public final g v(j$.time.k kVar) {
        return i.t(kVar, null, this);
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        return (obj instanceof c) && compareTo((c) obj) == 0;
    }

    public final String toString() {
        return this.f31289a.toString() + 'T' + this.f31290b.toString();
    }
}
