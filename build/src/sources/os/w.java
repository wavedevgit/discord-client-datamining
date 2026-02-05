package os;

import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function1;
import rs.d0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface w {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public static /* synthetic */ boolean a(w wVar, Throwable th2, int i10, Object obj) {
            if (obj == null) {
                if ((i10 & 1) != 0) {
                    th2 = null;
                }
                return wVar.t(th2);
            }
            throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: close");
        }

        public static boolean b(w wVar, Object obj) {
            Object i10 = wVar.i(obj);
            if (k.i(i10)) {
                return true;
            }
            Throwable e10 = k.e(i10);
            if (e10 == null) {
                return false;
            }
            throw d0.a(e10);
        }
    }

    void d(Function1 function1);

    Object i(Object obj);

    boolean offer(Object obj);

    boolean t(Throwable th2);

    Object v(Object obj, Continuation continuation);

    boolean w();
}
