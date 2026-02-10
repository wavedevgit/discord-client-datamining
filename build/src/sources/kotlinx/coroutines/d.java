package kotlinx.coroutines;

import kotlin.jvm.functions.Function1;
import ps.f1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface d extends f1 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements d {

        /* renamed from: d  reason: collision with root package name */
        private final Function1 f34802d;

        public a(Function1 function1) {
            this.f34802d = function1;
        }

        @Override // kotlinx.coroutines.d
        public void b(Throwable th2) {
            this.f34802d.invoke(th2);
        }

        public String toString() {
            return "CancelHandler.UserSupplied[" + ps.e0.a(this.f34802d) + '@' + ps.e0.b(this) + ']';
        }
    }

    void b(Throwable th2);
}
