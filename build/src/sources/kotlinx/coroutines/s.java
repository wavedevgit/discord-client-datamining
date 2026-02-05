package kotlinx.coroutines;

import java.io.Closeable;
import java.util.concurrent.Executor;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlinx.coroutines.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class s extends CoroutineDispatcher implements Closeable, AutoCloseable {

    /* renamed from: i  reason: collision with root package name */
    public static final a f35062i = new a(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends kotlin.coroutines.b {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final s d(CoroutineContext.Element element) {
            if (element instanceof s) {
                return (s) element;
            }
            return null;
        }

        private a() {
            super(CoroutineDispatcher.f34996e, new Function1() { // from class: ms.t0
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    kotlinx.coroutines.s d10;
                    d10 = s.a.d((CoroutineContext.Element) obj);
                    return d10;
                }
            });
        }
    }

    public abstract Executor f2();
}
