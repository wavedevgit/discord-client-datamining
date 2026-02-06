package gp;

import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.FlowCollector;
import kotlinx.coroutines.flow.MutableSharedFlow;
import rs.a0;
import rs.c0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l implements a0 {

    /* renamed from: e  reason: collision with root package name */
    public static final a f25463e = new a(null);

    /* renamed from: i  reason: collision with root package name */
    private static final MutableSharedFlow f25464i = c0.b(0, 1, qs.a.f48067e, 1, null);

    /* renamed from: d  reason: collision with root package name */
    private final /* synthetic */ MutableSharedFlow f25465d = f25464i;

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
        return f25464i.b(output);
    }

    @Override // rs.a0, kotlinx.coroutines.flow.Flow
    public Object collect(FlowCollector flowCollector, Continuation continuation) {
        return this.f25465d.collect(flowCollector, continuation);
    }
}
