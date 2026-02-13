package ys;

import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface z extends CoroutineContext.Element {

    /* renamed from: n  reason: collision with root package name */
    public static final b f56404n = b.f56405d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public static Object a(z zVar, Object obj, Function2 function2) {
            return CoroutineContext.Element.a.a(zVar, obj, function2);
        }

        public static CoroutineContext.Element b(z zVar, CoroutineContext.b bVar) {
            return CoroutineContext.Element.a.b(zVar, bVar);
        }

        public static CoroutineContext c(z zVar, CoroutineContext.b bVar) {
            return CoroutineContext.Element.a.c(zVar, bVar);
        }

        public static CoroutineContext d(z zVar, CoroutineContext coroutineContext) {
            return CoroutineContext.Element.a.d(zVar, coroutineContext);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b implements CoroutineContext.b {

        /* renamed from: d  reason: collision with root package name */
        static final /* synthetic */ b f56405d = new b();

        private b() {
        }
    }

    void N0(CoroutineContext coroutineContext, Throwable th2);
}
