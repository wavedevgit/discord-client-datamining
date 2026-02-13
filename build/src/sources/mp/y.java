package mp;

import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlinx.coroutines.flow.FlowCollector;
import kotlinx.coroutines.flow.MutableSharedFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y implements bt.a0 {

    /* renamed from: e  reason: collision with root package name */
    public static final a f37161e = new a(null);

    /* renamed from: i  reason: collision with root package name */
    private static final MutableSharedFlow f37162i = bt.c0.b(0, 1, at.a.f6105e, 1, null);

    /* renamed from: d  reason: collision with root package name */
    private final /* synthetic */ MutableSharedFlow f37163d = f37162i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public final boolean a(boolean z10) {
        return f37162i.b(Boolean.valueOf(z10));
    }

    @Override // bt.a0, kotlinx.coroutines.flow.Flow
    public Object collect(FlowCollector flowCollector, Continuation continuation) {
        return this.f37163d.collect(flowCollector, continuation);
    }
}
