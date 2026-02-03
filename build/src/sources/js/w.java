package js;

import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function1;
import ms.d0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface w {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public static /* synthetic */ boolean a(w wVar, Throwable th2, int i10, Object obj) {
            if (obj == null) {
                if ((i10 & 1) != 0) {
                    th2 = null;
                }
                return wVar.s(th2);
            }
            throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: close");
        }

        public static boolean b(w wVar, Object obj) {
            Object d10 = wVar.d(obj);
            if (k.i(d10)) {
                return true;
            }
            Throwable e10 = k.e(d10);
            if (e10 == null) {
                return false;
            }
            throw d0.a(e10);
        }
    }

    void b(Function1 function1);

    Object d(Object obj);

    boolean offer(Object obj);

    boolean s(Throwable th2);

    Object u(Object obj, Continuation continuation);

    boolean v();
}
