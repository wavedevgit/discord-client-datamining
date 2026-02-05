package kotlinx.coroutines;

import kotlin.jvm.functions.Function1;
import ms.f1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface d extends f1 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements d {

        /* renamed from: d  reason: collision with root package name */
        private final Function1 f35025d;

        public a(Function1 function1) {
            this.f35025d = function1;
        }

        @Override // kotlinx.coroutines.d
        public void c(Throwable th2) {
            this.f35025d.invoke(th2);
        }

        public String toString() {
            return "CancelHandler.UserSupplied[" + ms.e0.a(this.f35025d) + '@' + ms.e0.b(this) + ']';
        }
    }

    void c(Throwable th2);
}
