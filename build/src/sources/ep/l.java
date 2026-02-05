package ep;

import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.FlowCollector;
import kotlinx.coroutines.flow.MutableSharedFlow;
import ps.a0;
import ps.c0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l implements a0 {

    /* renamed from: e  reason: collision with root package name */
    public static final a f21708e = new a(null);

    /* renamed from: i  reason: collision with root package name */
    private static final MutableSharedFlow f21709i = c0.b(0, 1, os.a.f44351e, 1, null);

    /* renamed from: d  reason: collision with root package name */
    private final /* synthetic */ MutableSharedFlow f21710d = f21709i;

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
        return f21709i.b(output);
    }

    @Override // ps.a0, kotlinx.coroutines.flow.Flow
    public Object collect(FlowCollector flowCollector, Continuation continuation) {
        return this.f21710d.collect(flowCollector, continuation);
    }
}
