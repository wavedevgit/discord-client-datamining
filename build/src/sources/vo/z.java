package vo;

import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlinx.coroutines.flow.FlowCollector;
import kotlinx.coroutines.flow.MutableSharedFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class z implements ks.a0 {

    /* renamed from: e  reason: collision with root package name */
    public static final a f51502e = new a(null);

    /* renamed from: i  reason: collision with root package name */
    private static final MutableSharedFlow f51503i = ks.c0.b(0, 1, js.a.f32205e, 1, null);

    /* renamed from: d  reason: collision with root package name */
    private final /* synthetic */ MutableSharedFlow f51504d = f51503i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public final boolean a(boolean z10) {
        return f51503i.b(Boolean.valueOf(z10));
    }

    @Override // ks.a0, kotlinx.coroutines.flow.Flow
    public Object collect(FlowCollector flowCollector, Continuation continuation) {
        return this.f51504d.collect(flowCollector, continuation);
    }
}
