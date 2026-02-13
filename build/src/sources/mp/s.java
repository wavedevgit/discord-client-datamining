package mp;

import android.net.Uri;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlinx.coroutines.flow.FlowCollector;
import kotlinx.coroutines.flow.MutableSharedFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s implements bt.a0 {

    /* renamed from: e  reason: collision with root package name */
    public static final a f37153e = new a(null);

    /* renamed from: i  reason: collision with root package name */
    private static final MutableSharedFlow f37154i = bt.c0.b(0, 1, at.a.f6105e, 1, null);

    /* renamed from: d  reason: collision with root package name */
    private final /* synthetic */ MutableSharedFlow f37155d = f37154i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public final boolean a(Uri uri) {
        return f37154i.b(uri);
    }

    @Override // bt.a0, kotlinx.coroutines.flow.Flow
    public Object collect(FlowCollector flowCollector, Continuation continuation) {
        return this.f37155d.collect(flowCollector, continuation);
    }
}
