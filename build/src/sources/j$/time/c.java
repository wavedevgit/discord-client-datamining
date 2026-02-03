package j$.time;

import j$.time.format.DateTimeFormatterBuilder;
import j$.time.temporal.TemporalAccessor;
import j$.time.temporal.TemporalQuery;
import j$.time.temporal.o;
import j$.time.temporal.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public final /* synthetic */ class c implements TemporalQuery {

    /* renamed from: a  reason: collision with root package name */
    public final /* synthetic */ int f31287a;

    public /* synthetic */ c(int i10) {
        this.f31287a = i10;
    }

    @Override // j$.time.temporal.TemporalQuery
    public final Object queryFrom(TemporalAccessor temporalAccessor) {
        int i10 = this.f31287a;
        c cVar = o.f31399a;
        switch (i10) {
            case 0:
                return LocalDate.t(temporalAccessor);
            case 1:
                return LocalTime.t(temporalAccessor);
            case 2:
                c cVar2 = DateTimeFormatterBuilder.f31309f;
                k kVar = (k) temporalAccessor.a(cVar);
                if (kVar == null || (kVar instanceof ZoneOffset)) {
                    return null;
                }
                return kVar;
            case 3:
                return (k) temporalAccessor.a(cVar);
            case 4:
                return (j$.time.chrono.j) temporalAccessor.a(o.f31400b);
            case 5:
                return (p) temporalAccessor.a(o.f31401c);
            case 6:
                j$.time.temporal.a aVar = j$.time.temporal.a.OFFSET_SECONDS;
                if (temporalAccessor.j(aVar)) {
                    return ZoneOffset.ofTotalSeconds(temporalAccessor.g(aVar));
                }
                return null;
            case 7:
                k kVar2 = (k) temporalAccessor.a(cVar);
                return kVar2 != null ? kVar2 : (k) temporalAccessor.a(o.f31402d);
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
