package j$.time;

import j$.time.format.DateTimeFormatterBuilder;
import j$.time.temporal.TemporalAccessor;
import j$.time.temporal.TemporalQuery;
import j$.time.temporal.o;
import j$.time.temporal.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final /* synthetic */ class b implements TemporalQuery {

    /* renamed from: a  reason: collision with root package name */
    public final /* synthetic */ int f29453a;

    public /* synthetic */ b(int i10) {
        this.f29453a = i10;
    }

    @Override // j$.time.temporal.TemporalQuery
    public final Object queryFrom(TemporalAccessor temporalAccessor) {
        int i10 = this.f29453a;
        b bVar = o.f29565a;
        switch (i10) {
            case 0:
                return LocalDate.t(temporalAccessor);
            case 1:
                return LocalTime.t(temporalAccessor);
            case 2:
                b bVar2 = DateTimeFormatterBuilder.f29476f;
                j jVar = (j) temporalAccessor.a(bVar);
                if (jVar == null || (jVar instanceof ZoneOffset)) {
                    return null;
                }
                return jVar;
            case 3:
                return (j) temporalAccessor.a(bVar);
            case 4:
                return (j$.time.chrono.j) temporalAccessor.a(o.f29566b);
            case 5:
                return (p) temporalAccessor.a(o.f29567c);
            case 6:
                j$.time.temporal.a aVar = j$.time.temporal.a.OFFSET_SECONDS;
                if (temporalAccessor.j(aVar)) {
                    return ZoneOffset.ofTotalSeconds(temporalAccessor.g(aVar));
                }
                return null;
            case 7:
                j jVar2 = (j) temporalAccessor.a(bVar);
                return jVar2 != null ? jVar2 : (j) temporalAccessor.a(o.f29568d);
            case 8:
                j$.time.temporal.a aVar2 = j$.time.temporal.a.EPOCH_DAY;
                if (temporalAccessor.j(aVar2)) {
                    return LocalDate.ofEpochDay(temporalAccessor.m(aVar2));
                }
                return null;
            default:
                j$.time.temporal.a aVar3 = j$.time.temporal.a.NANO_OF_DAY;
                if (temporalAccessor.j(aVar3)) {
                    return LocalTime.x(temporalAccessor.m(aVar3));
                }
                return null;
        }
    }
}
