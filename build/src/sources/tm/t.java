package tm;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface t {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public static Object a(t tVar, Object obj, i iVar, Function2 proceed, c session) {
            Intrinsics.checkNotNullParameter(tVar, "this");
            Intrinsics.checkNotNullParameter(proceed, "proceed");
            Intrinsics.checkNotNullParameter(session, "session");
            return proceed.invoke(obj, iVar);
        }

        public static Object b(t tVar, Object obj, Object obj2, Object obj3, Function3 proceed, c session) {
            Intrinsics.checkNotNullParameter(tVar, "this");
            Intrinsics.checkNotNullParameter(proceed, "proceed");
            Intrinsics.checkNotNullParameter(session, "session");
            return proceed.invoke(obj, obj2, obj3);
        }

        public static Object c(t tVar, Object obj, Object obj2, tm.a context, Function3 proceed, c session) {
            Intrinsics.checkNotNullParameter(tVar, "this");
            Intrinsics.checkNotNullParameter(context, "context");
            Intrinsics.checkNotNullParameter(proceed, "proceed");
            Intrinsics.checkNotNullParameter(session, "session");
            return proceed.invoke(obj, obj2, null);
        }

        public static void d(t tVar, CoroutineScope workflowScope, c session) {
            Intrinsics.checkNotNullParameter(tVar, "this");
            Intrinsics.checkNotNullParameter(workflowScope, "workflowScope");
            Intrinsics.checkNotNullParameter(session, "session");
        }

        public static i e(t tVar, Object obj, Function1 proceed, c session) {
            Intrinsics.checkNotNullParameter(tVar, "this");
            Intrinsics.checkNotNullParameter(proceed, "proceed");
            Intrinsics.checkNotNullParameter(session, "session");
            return (i) proceed.invoke(obj);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface b {
        void a(r rVar, Function1 function1);

        void b(String str, Function1 function1, Function2 function2);

        Object c(q qVar, Object obj, String str, Function1 function1, Function4 function4);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface c {
    }

    Object a(Object obj, i iVar, Function2 function2, c cVar);

    void b(CoroutineScope coroutineScope, c cVar);

    Object c(Object obj, Object obj2, Object obj3, Function3 function3, c cVar);

    i d(Object obj, Function1 function1, c cVar);

    Object e(Object obj, Object obj2, tm.a aVar, Function3 function3, c cVar);
}
