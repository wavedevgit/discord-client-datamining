package j$.time.format;

import j$.time.DateTimeException;
import j$.time.LocalDate;
import j$.time.temporal.TemporalAccessor;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class q {

    /* renamed from: a  reason: collision with root package name */
    public final TemporalAccessor f31619a;

    /* renamed from: b  reason: collision with root package name */
    public final DateTimeFormatter f31620b;

    /* renamed from: c  reason: collision with root package name */
    public int f31621c;

    public q(TemporalAccessor temporalAccessor, DateTimeFormatter dateTimeFormatter) {
        j$.time.temporal.a[] values;
        j$.time.chrono.j jVar = dateTimeFormatter.f31570e;
        if (jVar != null) {
            j$.time.chrono.j jVar2 = (j$.time.chrono.j) temporalAccessor.a(j$.time.temporal.o.f31662b);
            j$.time.k kVar = (j$.time.k) temporalAccessor.a(j$.time.temporal.o.f31661a);
            LocalDate localDate = null;
            jVar = Objects.equals(jVar, jVar2) ? null : jVar;
            if (jVar != null) {
                j$.time.chrono.j jVar3 = jVar != null ? jVar : jVar2;
                if (jVar != null) {
                    if (temporalAccessor.j(j$.time.temporal.a.EPOCH_DAY)) {
                        ((j$.time.chrono.k) jVar3).getClass();
                        localDate = LocalDate.t(temporalAccessor);
                    } else if (jVar != j$.time.chrono.k.f31558a || jVar2 != null) {
                        for (j$.time.temporal.a aVar : j$.time.temporal.a.values()) {
                            if (aVar.isDateBased() && temporalAccessor.j(aVar)) {
                                throw new DateTimeException("Unable to apply override chronology '" + jVar + "' because the temporal object being formatted contains date fields but does not represent a whole date: " + temporalAccessor);
                            }
                        }
                    }
                }
                temporalAccessor = new p(localDate, temporalAccessor, jVar3, kVar);
            }
        }
        this.f31619a = temporalAccessor;
        this.f31620b = dateTimeFormatter;
    }

    public final Long a(j$.time.temporal.n nVar) {
        try {
            return Long.valueOf(this.f31619a.m(nVar));
        } catch (DateTimeException e10) {
            if (this.f31621c > 0) {
                return null;
            }
            throw e10;
        }
    }

    public final String toString() {
        return this.f31619a.toString();
    }
}
