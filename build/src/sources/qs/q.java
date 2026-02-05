package qs;

import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.flow.Flow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface q extends Flow {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public static /* synthetic */ Flow a(q qVar, CoroutineContext coroutineContext, int i10, os.a aVar, int i11, Object obj) {
            if (obj == null) {
                if ((i11 & 1) != 0) {
                    coroutineContext = kotlin.coroutines.e.f32062d;
                }
                if ((i11 & 2) != 0) {
                    i10 = -3;
                }
                if ((i11 & 4) != 0) {
                    aVar = os.a.f44350d;
                }
                return qVar.f(coroutineContext, i10, aVar);
            }
            throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: fuse");
        }
    }

    Flow f(CoroutineContext coroutineContext, int i10, os.a aVar);
}
