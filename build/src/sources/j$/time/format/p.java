package j$.time.format;

import j$.time.LocalDate;
import j$.time.chrono.ChronoLocalDate;
import j$.time.temporal.TemporalAccessor;
import j$.time.temporal.TemporalQuery;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class p implements TemporalAccessor {

    /* renamed from: a  reason: collision with root package name */
    public final /* synthetic */ ChronoLocalDate f29774a;

    /* renamed from: b  reason: collision with root package name */
    public final /* synthetic */ TemporalAccessor f29775b;

    /* renamed from: c  reason: collision with root package name */
    public final /* synthetic */ j$.time.chrono.j f29776c;

    /* renamed from: d  reason: collision with root package name */
    public final /* synthetic */ j$.time.j f29777d;

    public p(LocalDate localDate, TemporalAccessor temporalAccessor, j$.time.chrono.j jVar, j$.time.j jVar2) {
        this.f29774a = localDate;
        this.f29775b = temporalAccessor;
        this.f29776c = jVar;
        this.f29777d = jVar2;
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final boolean j(j$.time.temporal.n nVar) {
        ChronoLocalDate chronoLocalDate = this.f29774a;
        if (chronoLocalDate != null && nVar.isDateBased()) {
            return chronoLocalDate.j(nVar);
        }
        return this.f29775b.j(nVar);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final j$.time.temporal.r i(j$.time.temporal.n nVar) {
        ChronoLocalDate chronoLocalDate = this.f29774a;
        if (chronoLocalDate != null && nVar.isDateBased()) {
            return chronoLocalDate.i(nVar);
        }
        return this.f29775b.i(nVar);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final long m(j$.time.temporal.n nVar) {
        ChronoLocalDate chronoLocalDate = this.f29774a;
        if (chronoLocalDate != null && nVar.isDateBased()) {
            return chronoLocalDate.m(nVar);
        }
        return this.f29775b.m(nVar);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final Object a(TemporalQuery temporalQuery) {
        if (temporalQuery == j$.time.temporal.o.f29820b) {
            return this.f29776c;
        }
        if (temporalQuery == j$.time.temporal.o.f29819a) {
            return this.f29777d;
        }
        if (temporalQuery == j$.time.temporal.o.f29821c) {
            return this.f29775b.a(temporalQuery);
        }
        return temporalQuery.queryFrom(this);
    }
}
