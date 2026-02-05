package ap;

import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlinx.coroutines.flow.FlowCollector;
import kotlinx.coroutines.flow.MutableSharedFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements ps.a0 {

    /* renamed from: e  reason: collision with root package name */
    public static final a f5933e = new a(null);

    /* renamed from: i  reason: collision with root package name */
    private static final MutableSharedFlow f5934i = ps.c0.b(0, 1, os.a.f44351e, 1, null);

    /* renamed from: d  reason: collision with root package name */
    private final /* synthetic */ MutableSharedFlow f5935d = f5934i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public final boolean a(int i10) {
        return f5934i.b(Integer.valueOf(i10));
    }

    @Override // ps.a0, kotlinx.coroutines.flow.Flow
    public Object collect(FlowCollector flowCollector, Continuation continuation) {
        return this.f5935d.collect(flowCollector, continuation);
    }
}
