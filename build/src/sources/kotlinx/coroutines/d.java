package kotlinx.coroutines;

import hs.f1;
import kotlin.jvm.functions.Function1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface d extends f1 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements d {

        /* renamed from: d  reason: collision with root package name */
        private final Function1 f36111d;

        public a(Function1 function1) {
            this.f36111d = function1;
        }

        @Override // kotlinx.coroutines.d
        public void a(Throwable th2) {
            this.f36111d.invoke(th2);
        }

        public String toString() {
            return "CancelHandler.UserSupplied[" + hs.e0.a(this.f36111d) + '@' + hs.e0.b(this) + ']';
        }
    }

    void a(Throwable th2);
}
