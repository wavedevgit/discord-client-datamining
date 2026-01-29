package js;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract /* synthetic */ class h {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Flow {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Object f32515d;

        public a(Object obj) {
            this.f32515d = obj;
        }

        @Override // kotlinx.coroutines.flow.Flow
        public Object collect(FlowCollector flowCollector, Continuation continuation) {
            Object emit = flowCollector.emit(this.f32515d, continuation);
            if (emit == or.b.f()) {
                return emit;
            }
            return Unit.f33282a;
        }
    }

    public static final Flow a(Function2 function2) {
        return new b(function2, null, 0, null, 14, null);
    }

    public static final Flow b(Function2 function2) {
        return new z(function2);
    }

    public static final Flow c(Object obj) {
        return new a(obj);
    }
}
