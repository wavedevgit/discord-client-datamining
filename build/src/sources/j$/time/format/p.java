package j$.time.format;

import j$.time.LocalDate;
import j$.time.chrono.ChronoLocalDate;
import j$.time.temporal.TemporalAccessor;
import j$.time.temporal.TemporalQuery;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final class p implements TemporalAccessor {

    /* renamed from: a  reason: collision with root package name */
    public final /* synthetic */ ChronoLocalDate f31615a;

    /* renamed from: b  reason: collision with root package name */
    public final /* synthetic */ TemporalAccessor f31616b;

    /* renamed from: c  reason: collision with root package name */
    public final /* synthetic */ j$.time.chrono.j f31617c;

    /* renamed from: d  reason: collision with root package name */
    public final /* synthetic */ j$.time.k f31618d;

    public p(LocalDate localDate, TemporalAccessor temporalAccessor, j$.time.chrono.j jVar, j$.time.k kVar) {
        this.f31615a = localDate;
        this.f31616b = temporalAccessor;
        this.f31617c = jVar;
        this.f31618d = kVar;
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final boolean j(j$.time.temporal.n nVar) {
        ChronoLocalDate chronoLocalDate = this.f31615a;
        if (chronoLocalDate != null && nVar.isDateBased()) {
            return chronoLocalDate.j(nVar);
        }
        return this.f31616b.j(nVar);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final j$.time.temporal.r i(j$.time.temporal.n nVar) {
        ChronoLocalDate chronoLocalDate = this.f31615a;
        if (chronoLocalDate != null && nVar.isDateBased()) {
            return chronoLocalDate.i(nVar);
        }
        return this.f31616b.i(nVar);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final long m(j$.time.temporal.n nVar) {
        ChronoLocalDate chronoLocalDate = this.f31615a;
        if (chronoLocalDate != null && nVar.isDateBased()) {
            return chronoLocalDate.m(nVar);
        }
        return this.f31616b.m(nVar);
    }

    @Override // j$.time.temporal.TemporalAccessor
    public final Object a(TemporalQuery temporalQuery) {
        if (temporalQuery == j$.time.temporal.o.f31662b) {
            return this.f31617c;
        }
        if (temporalQuery == j$.time.temporal.o.f31661a) {
            return this.f31618d;
        }
        if (temporalQuery == j$.time.temporal.o.f31663c) {
            return this.f31616b.a(temporalQuery);
        }
        return temporalQuery.queryFrom(this);
    }
}
