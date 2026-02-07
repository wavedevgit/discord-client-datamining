package cp;

import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlinx.coroutines.flow.FlowCollector;
import kotlinx.coroutines.flow.MutableSharedFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class z implements rs.a0 {

    /* renamed from: e  reason: collision with root package name */
    public static final a f20009e = new a(null);

    /* renamed from: i  reason: collision with root package name */
    private static final MutableSharedFlow f20010i = rs.c0.b(0, 1, qs.a.f48115e, 1, null);

    /* renamed from: d  reason: collision with root package name */
    private final /* synthetic */ MutableSharedFlow f20011d = f20010i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public final boolean a(boolean z10) {
        return f20010i.b(Boolean.valueOf(z10));
    }

    @Override // rs.a0, kotlinx.coroutines.flow.Flow
    public Object collect(FlowCollector flowCollector, Continuation continuation) {
        return this.f20011d.collect(flowCollector, continuation);
    }
}
