package kotlinx.coroutines;

import kotlin.jvm.functions.Function1;
import ys.f1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface d extends f1 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements d {

        /* renamed from: d  reason: collision with root package name */
        private final Function1 f35593d;

        public a(Function1 function1) {
            this.f35593d = function1;
        }

        @Override // kotlinx.coroutines.d
        public void c(Throwable th2) {
            this.f35593d.invoke(th2);
        }

        public String toString() {
            return "CancelHandler.UserSupplied[" + ys.e0.a(this.f35593d) + '@' + ys.e0.b(this) + ']';
        }
    }

    void c(Throwable th2);
}
