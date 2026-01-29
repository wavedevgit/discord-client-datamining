package j$.time.temporal;

import j$.time.format.u;
import j$.time.format.v;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes2.dex */
public interface n {
    long B(TemporalAccessor temporalAccessor);

    k C(k kVar, long j10);

    boolean isDateBased();

    boolean r(TemporalAccessor temporalAccessor);

    r t(TemporalAccessor temporalAccessor);

    r x();

    default TemporalAccessor w(Map map, u uVar, v vVar) {
        return null;
    }
}
