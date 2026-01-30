package uo;

import android.net.Uri;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlinx.coroutines.flow.FlowCollector;
import kotlinx.coroutines.flow.MutableSharedFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s implements js.a0 {

    /* renamed from: e  reason: collision with root package name */
    public static final a f50535e = new a(null);

    /* renamed from: i  reason: collision with root package name */
    private static final MutableSharedFlow f50536i = js.c0.b(0, 1, is.a.f31142e, 1, null);

    /* renamed from: d  reason: collision with root package name */
    private final /* synthetic */ MutableSharedFlow f50537d = f50536i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public final boolean c(Uri uri) {
        return f50536i.b(uri);
    }

    @Override // js.a0, kotlinx.coroutines.flow.Flow
    public Object collect(FlowCollector flowCollector, Continuation continuation) {
        return this.f50537d.collect(flowCollector, continuation);
    }
}
