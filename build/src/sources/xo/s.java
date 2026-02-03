package xo;

import android.net.Uri;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlinx.coroutines.flow.FlowCollector;
import kotlinx.coroutines.flow.MutableSharedFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s implements ms.a0 {

    /* renamed from: e  reason: collision with root package name */
    public static final a f53530e = new a(null);

    /* renamed from: i  reason: collision with root package name */
    private static final MutableSharedFlow f53531i = ms.c0.b(0, 1, ls.a.f37143e, 1, null);

    /* renamed from: d  reason: collision with root package name */
    private final /* synthetic */ MutableSharedFlow f53532d = f53531i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public final boolean a(Uri uri) {
        return f53531i.b(uri);
    }

    @Override // ms.a0, kotlinx.coroutines.flow.Flow
    public Object collect(FlowCollector flowCollector, Continuation continuation) {
        return this.f53532d.collect(flowCollector, continuation);
    }
}
