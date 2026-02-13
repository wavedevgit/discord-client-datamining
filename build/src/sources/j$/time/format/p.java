package j$.time.format;

import j$.time.LocalDate;
import j$.time.chrono.ChronoLocalDate;
import j$.time.temporal.TemporalAccessor;
import j$.time.temporal.TemporalQuery;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class p implements TemporalAccessor {

    /* renamed from: a  reason: collision with root package name */
    public final /* synthetic */ ChronoLocalDate f31143a;

    /* renamed from: b  reason: collision with root package name */
    public final /* synthetic */ TemporalAccessor f31144b;

    /* renamed from: c  reason: collision with root package name */
    public final /* synthetic */ j$.time.chrono.j f31145c;

    /* renamed from: d  reason: collision with root package name */
    public final /* synthetic */ j$.time.j f31146d;

    public p(LocalDate localDate, TemporalAccessor temporalAccessor, j$.time.chrono.j jVar, j$.time.j jVar2) {
        this.f31143a = localDate;
        this.f31144b = temporalAccessor;
        this.f31145c = jVar;
        this.f31146d = jVar2;
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final boolean j(j$.time.temporal.n nVar) {
        ChronoLocalDate chronoLocalDate = this.f31143a;
        if (chronoLocalDate != null && nVar.isDateBased()) {
            return chronoLocalDate.j(nVar);
        }
        return this.f31144b.j(nVar);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final j$.time.temporal.r i(j$.time.temporal.n nVar) {
        ChronoLocalDate chronoLocalDate = this.f31143a;
        if (chronoLocalDate != null && nVar.isDateBased()) {
            return chronoLocalDate.i(nVar);
        }
        return this.f31144b.i(nVar);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final long m(j$.time.temporal.n nVar) {
        ChronoLocalDate chronoLocalDate = this.f31143a;
        if (chronoLocalDate != null && nVar.isDateBased()) {
            return chronoLocalDate.m(nVar);
        }
        return this.f31144b.m(nVar);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final Object a(TemporalQuery temporalQuery) {
        if (temporalQuery == j$.time.temporal.o.f31189b) {
            return this.f31145c;
        }
        if (temporalQuery == j$.time.temporal.o.f31188a) {
            return this.f31146d;
        }
        if (temporalQuery == j$.time.temporal.o.f31190c) {
            return this.f31144b.a(temporalQuery);
        }
        return temporalQuery.queryFrom(this);
    }
}
