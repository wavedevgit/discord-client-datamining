package qs;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlinx.coroutines.flow.FlowCollector;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class z implements FlowCollector {

    /* renamed from: d  reason: collision with root package name */
    private final os.w f48086d;

    public z(os.w wVar) {
        this.f48086d = wVar;
    }

    @Override // kotlinx.coroutines.flow.FlowCollector
    public Object emit(Object obj, Continuation continuation) {
        Object v10 = this.f48086d.v(obj, continuation);
        if (v10 == ur.b.f()) {
            return v10;
        }
        return Unit.f31988a;
    }
}
