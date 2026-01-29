package uo;

import java.util.List;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.FlowCollector;
import kotlinx.coroutines.flow.MutableSharedFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class t implements js.a0 {

    /* renamed from: e  reason: collision with root package name */
    public static final a f50522e = new a(null);

    /* renamed from: i  reason: collision with root package name */
    private static final MutableSharedFlow f50523i = js.c0.b(0, 1, is.a.f31126e, 1, null);

    /* renamed from: d  reason: collision with root package name */
    private final /* synthetic */ MutableSharedFlow f50524d = f50523i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public final boolean c(List uri) {
        Intrinsics.checkNotNullParameter(uri, "uri");
        return f50523i.b(uri);
    }

    @Override // js.a0, kotlinx.coroutines.flow.Flow
    public Object collect(FlowCollector flowCollector, Continuation continuation) {
        return this.f50524d.collect(flowCollector, continuation);
    }
}
