package hp;

import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.FlowCollector;
import kotlinx.coroutines.flow.MutableSharedFlow;
import ss.a0;
import ss.c0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l implements a0 {

    /* renamed from: e  reason: collision with root package name */
    public static final a f26422e = new a(null);

    /* renamed from: i  reason: collision with root package name */
    private static final MutableSharedFlow f26423i = c0.b(0, 1, rs.a.f49233e, 1, null);

    /* renamed from: d  reason: collision with root package name */
    private final /* synthetic */ MutableSharedFlow f26424d = f26423i;

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
        return f26423i.b(output);
    }

    @Override // ss.a0, kotlinx.coroutines.flow.Flow
    public Object collect(FlowCollector flowCollector, Continuation continuation) {
        return this.f26424d.collect(flowCollector, continuation);
    }
}
