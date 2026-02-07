package kotlinx.coroutines;

import kotlin.jvm.functions.Function1;
import os.f1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface d extends f1 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements d {

        /* renamed from: d  reason: collision with root package name */
        private final Function1 f35093d;

        public a(Function1 function1) {
            this.f35093d = function1;
        }

        @Override // kotlinx.coroutines.d
        public void b(Throwable th2) {
            this.f35093d.invoke(th2);
        }

        public String toString() {
            return "CancelHandler.UserSupplied[" + os.e0.a(this.f35093d) + '@' + os.e0.b(this) + ']';
        }
    }

    void b(Throwable th2);
}
