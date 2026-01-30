package w0;

import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface n extends CoroutineContext.Element {

    /* renamed from: m  reason: collision with root package name */
    public static final b f52027m = b.f52028d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public static Object a(n nVar, Object obj, Function2 function2) {
            return CoroutineContext.Element.a.a(nVar, obj, function2);
        }

        public static CoroutineContext.Element b(n nVar, CoroutineContext.b bVar) {
            return CoroutineContext.Element.a.b(nVar, bVar);
        }

        public static CoroutineContext c(n nVar, CoroutineContext.b bVar) {
            return CoroutineContext.Element.a.c(nVar, bVar);
        }

        public static CoroutineContext d(n nVar, CoroutineContext coroutineContext) {
            return CoroutineContext.Element.a.d(nVar, coroutineContext);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b implements CoroutineContext.b {

        /* renamed from: d  reason: collision with root package name */
        static final /* synthetic */ b f52028d = new b();

        private b() {
        }
    }

    Object A0(Function1 function1, Continuation continuation);

    @Override // kotlin.coroutines.CoroutineContext.Element
    default CoroutineContext.b getKey() {
        return f52027m;
    }
}
