package j$.time.format;

import j$.time.LocalDate;
import j$.time.chrono.ChronoLocalDate;
import j$.time.temporal.TemporalAccessor;
import j$.time.temporal.TemporalQuery;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class p implements TemporalAccessor {

    /* renamed from: a  reason: collision with root package name */
    public final /* synthetic */ ChronoLocalDate f31149a;

    /* renamed from: b  reason: collision with root package name */
    public final /* synthetic */ TemporalAccessor f31150b;

    /* renamed from: c  reason: collision with root package name */
    public final /* synthetic */ j$.time.chrono.j f31151c;

    /* renamed from: d  reason: collision with root package name */
    public final /* synthetic */ j$.time.k f31152d;

    public p(LocalDate localDate, TemporalAccessor temporalAccessor, j$.time.chrono.j jVar, j$.time.k kVar) {
        this.f31149a = localDate;
        this.f31150b = temporalAccessor;
        this.f31151c = jVar;
        this.f31152d = kVar;
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final boolean j(j$.time.temporal.n nVar) {
        ChronoLocalDate chronoLocalDate = this.f31149a;
        if (chronoLocalDate != null && nVar.isDateBased()) {
            return chronoLocalDate.j(nVar);
        }
        return this.f31150b.j(nVar);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final j$.time.temporal.r i(j$.time.temporal.n nVar) {
        ChronoLocalDate chronoLocalDate = this.f31149a;
        if (chronoLocalDate != null && nVar.isDateBased()) {
            return chronoLocalDate.i(nVar);
        }
        return this.f31150b.i(nVar);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final long m(j$.time.temporal.n nVar) {
        ChronoLocalDate chronoLocalDate = this.f31149a;
        if (chronoLocalDate != null && nVar.isDateBased()) {
            return chronoLocalDate.m(nVar);
        }
        return this.f31150b.m(nVar);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final Object a(TemporalQuery temporalQuery) {
        if (temporalQuery == j$.time.temporal.o.f31196b) {
            return this.f31151c;
        }
        if (temporalQuery == j$.time.temporal.o.f31195a) {
            return this.f31152d;
        }
        if (temporalQuery == j$.time.temporal.o.f31197c) {
            return this.f31150b.a(temporalQuery);
        }
        return temporalQuery.queryFrom(this);
    }
}
