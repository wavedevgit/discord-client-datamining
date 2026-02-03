package xo;

import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlinx.coroutines.flow.FlowCollector;
import kotlinx.coroutines.flow.MutableSharedFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements ms.a0 {

    /* renamed from: e  reason: collision with root package name */
    public static final a f53516e = new a(null);

    /* renamed from: i  reason: collision with root package name */
    private static final MutableSharedFlow f53517i = ms.c0.b(0, 1, ls.a.f37143e, 1, null);

    /* renamed from: d  reason: collision with root package name */
    private final /* synthetic */ MutableSharedFlow f53518d = f53517i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public final boolean a(int i10) {
        return f53517i.b(Integer.valueOf(i10));
    }

    @Override // ms.a0, kotlinx.coroutines.flow.Flow
    public Object collect(FlowCollector flowCollector, Continuation continuation) {
        return this.f53518d.collect(flowCollector, continuation);
    }
}
