package j$.time.chrono;

import j$.time.DateTimeException;
import j$.time.LocalTime;
import j$.time.ZoneOffset;
import j$.time.temporal.TemporalQuery;
import j$.time.temporal.l;
import j$.time.temporal.n;
import j$.time.temporal.o;
import j$.time.temporal.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public interface g extends j$.time.temporal.k, Comparable {
    ZoneOffset n();

    c s();

    j$.time.j y();

    @Override // j$.time.temporal.TemporalAccessor
    default r i(n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            if (nVar != j$.time.temporal.a.INSTANT_SECONDS && nVar != j$.time.temporal.a.OFFSET_SECONDS) {
                return s().i(nVar);
            }
            return ((j$.time.temporal.a) nVar).f30607b;
        }
        return nVar.t(this);
    }

    @Override // j$.time.temporal.TemporalAccessor
    default int g(n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            int i10 = f.f30513a[((j$.time.temporal.a) nVar).ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    return n().getTotalSeconds();
                }
                return s().g(nVar);
            }
            throw new DateTimeException("Invalid field 'InstantSeconds' for get() method, use getLong() instead");
        }
        return super.g(nVar);
    }

    @Override // j$.time.temporal.TemporalAccessor
    default long m(n nVar) {
        if (nVar instanceof j$.time.temporal.a) {
            int i10 = f.f30513a[((j$.time.temporal.a) nVar).ordinal()];
            if (i10 != 1) {
                if (i10 == 2) {
                    return n().getTotalSeconds();
                }
                return s().m(nVar);
            }
            return D();
        }
        return nVar.B(this);
    }

    default ChronoLocalDate l() {
        return s().l();
    }

    default LocalTime e() {
        return s().e();
    }

    default j f() {
        l().f();
        return k.f30518a;
    }

    @Override // j$.time.temporal.k
    /* renamed from: k */
    default g c(l lVar) {
        f();
        return i.r(k.f30518a, lVar.d(this));
    }

    @Override // j$.time.temporal.TemporalAccessor
    default Object a(TemporalQuery temporalQuery) {
        if (temporalQuery == o.f30623e || temporalQuery == o.f30619a) {
            return y();
        }
        if (temporalQuery == o.f30622d) {
            return n();
        }
        if (temporalQuery == o.f30625g) {
            return e();
        }
        if (temporalQuery == o.f30620b) {
            f();
            return k.f30518a;
        } else if (temporalQuery == o.f30621c) {
            return j$.time.temporal.b.NANOS;
        } else {
            return temporalQuery.queryFrom(this);
        }
    }

    default long D() {
        return ((l().toEpochDay() * 86400) + e().toSecondOfDay()) - n().getTotalSeconds();
    }

    @Override // java.lang.Comparable
    /* renamed from: o */
    default int compareTo(g gVar) {
        int compare = Long.compare(D(), gVar.D());
        if (compare == 0 && (compare = e().f30494d - gVar.e().f30494d) == 0 && (compare = s().compareTo(gVar.s())) == 0 && (compare = y().r().compareTo(gVar.y().r())) == 0) {
            f();
            k kVar = k.f30518a;
            gVar.f();
            return 0;
        }
        return compare;
    }
}
