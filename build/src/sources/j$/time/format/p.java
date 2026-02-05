package j$.time.format;

import j$.time.LocalDate;
import j$.time.chrono.ChronoLocalDate;
import j$.time.temporal.TemporalAccessor;
import j$.time.temporal.TemporalQuery;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class p implements TemporalAccessor {

    /* renamed from: a  reason: collision with root package name */
    public final /* synthetic */ ChronoLocalDate f30498a;

    /* renamed from: b  reason: collision with root package name */
    public final /* synthetic */ TemporalAccessor f30499b;

    /* renamed from: c  reason: collision with root package name */
    public final /* synthetic */ j$.time.chrono.j f30500c;

    /* renamed from: d  reason: collision with root package name */
    public final /* synthetic */ j$.time.k f30501d;

    public p(LocalDate localDate, TemporalAccessor temporalAccessor, j$.time.chrono.j jVar, j$.time.k kVar) {
        this.f30498a = localDate;
        this.f30499b = temporalAccessor;
        this.f30500c = jVar;
        this.f30501d = kVar;
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final boolean j(j$.time.temporal.n nVar) {
        ChronoLocalDate chronoLocalDate = this.f30498a;
        if (chronoLocalDate != null && nVar.isDateBased()) {
            return chronoLocalDate.j(nVar);
        }
        return this.f30499b.j(nVar);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final j$.time.temporal.r i(j$.time.temporal.n nVar) {
        ChronoLocalDate chronoLocalDate = this.f30498a;
        if (chronoLocalDate != null && nVar.isDateBased()) {
            return chronoLocalDate.i(nVar);
        }
        return this.f30499b.i(nVar);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final long m(j$.time.temporal.n nVar) {
        ChronoLocalDate chronoLocalDate = this.f30498a;
        if (chronoLocalDate != null && nVar.isDateBased()) {
            return chronoLocalDate.m(nVar);
        }
        return this.f30499b.m(nVar);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final Object a(TemporalQuery temporalQuery) {
        if (temporalQuery == j$.time.temporal.o.f30545b) {
            return this.f30500c;
        }
        if (temporalQuery == j$.time.temporal.o.f30544a) {
            return this.f30501d;
        }
        if (temporalQuery == j$.time.temporal.o.f30546c) {
            return this.f30499b.a(temporalQuery);
        }
        return temporalQuery.queryFrom(this);
    }
}
