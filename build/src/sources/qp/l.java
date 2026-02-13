package qp;

import bt.a0;
import bt.c0;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.FlowCollector;
import kotlinx.coroutines.flow.MutableSharedFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l implements a0 {

    /* renamed from: e  reason: collision with root package name */
    public static final a f46132e = new a(null);

    /* renamed from: i  reason: collision with root package name */
    private static final MutableSharedFlow f46133i = c0.b(0, 1, at.a.f6105e, 1, null);

    /* renamed from: d  reason: collision with root package name */
    private final /* synthetic */ MutableSharedFlow f46134d = f46133i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public final boolean a(k output) {
        Intrinsics.checkNotNullParameter(output, "output");
        return f46133i.b(output);
    }

    @Override // bt.a0, kotlinx.coroutines.flow.Flow
    public Object collect(FlowCollector flowCollector, Continuation continuation) {
        return this.f46134d.collect(flowCollector, continuation);
    }
}
