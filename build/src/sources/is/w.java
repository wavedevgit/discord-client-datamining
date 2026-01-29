package is;

import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function1;
import ls.d0;
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
            Object e10 = wVar.e(obj);
            if (k.i(e10)) {
                return true;
            }
            Throwable e11 = k.e(e10);
            if (e11 == null) {
                return false;
            }
            throw d0.a(e11);
        }
    }

    void b(Function1 function1);

    Object e(Object obj);

    boolean offer(Object obj);

    boolean s(Throwable th2);

    Object u(Object obj, Continuation continuation);

    boolean v();
}
