package cp;

import java.util.List;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.FlowCollector;
import kotlinx.coroutines.flow.MutableSharedFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class t implements rs.a0 {

    /* renamed from: e  reason: collision with root package name */
    public static final a f20001e = new a(null);

    /* renamed from: i  reason: collision with root package name */
    private static final MutableSharedFlow f20002i = rs.c0.b(0, 1, qs.a.f48115e, 1, null);

    /* renamed from: d  reason: collision with root package name */
    private final /* synthetic */ MutableSharedFlow f20003d = f20002i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public final boolean a(List uri) {
        Intrinsics.checkNotNullParameter(uri, "uri");
        return f20002i.b(uri);
    }

    @Override // rs.a0, kotlinx.coroutines.flow.Flow
    public Object collect(FlowCollector flowCollector, Continuation continuation) {
        return this.f20003d.collect(flowCollector, continuation);
    }
}
