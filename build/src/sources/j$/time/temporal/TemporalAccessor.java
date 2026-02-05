package j$.time.temporal;

import j$.time.DateTimeException;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public interface TemporalAccessor {
    boolean j(n nVar);

    long m(n nVar);

    default r i(n nVar) {
        if (nVar instanceof a) {
            if (!j(nVar)) {
                throw new DateTimeException("Unsupported field: " + nVar);
            }
            return ((a) nVar).f30532b;
        }
        Objects.requireNonNull(nVar, "field");
        return nVar.t(this);
    }

    default int g(n nVar) {
        r i10 = i(nVar);
        if (i10.f30551a < -2147483648L || i10.f30554d > 2147483647L) {
            throw new DateTimeException("Invalid field " + nVar + " for get() method, use getLong() instead");
        }
        long m10 = m(nVar);
        if (i10.d(m10)) {
            return (int) m10;
        }
        throw new DateTimeException("Invalid value for " + nVar + " (valid values " + i10 + "): " + m10);
    }

    default Object a(TemporalQuery temporalQuery) {
        if (temporalQuery == o.f30544a || temporalQuery == o.f30545b || temporalQuery == o.f30546c) {
            return null;
        }
        return temporalQuery.queryFrom(this);
    }
}
