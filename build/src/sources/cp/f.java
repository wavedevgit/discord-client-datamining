package cp;

import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlinx.coroutines.flow.FlowCollector;
import kotlinx.coroutines.flow.MutableSharedFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements rs.a0 {

    /* renamed from: e  reason: collision with root package name */
    public static final a f19984e = new a(null);

    /* renamed from: i  reason: collision with root package name */
    private static final MutableSharedFlow f19985i = rs.c0.b(0, 1, qs.a.f48115e, 1, null);

    /* renamed from: d  reason: collision with root package name */
    private final /* synthetic */ MutableSharedFlow f19986d = f19985i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public final boolean a(int i10) {
        return f19985i.b(Integer.valueOf(i10));
    }

    @Override // rs.a0, kotlinx.coroutines.flow.Flow
    public Object collect(FlowCollector flowCollector, Continuation continuation) {
        return this.f19986d.collect(flowCollector, continuation);
    }
}
