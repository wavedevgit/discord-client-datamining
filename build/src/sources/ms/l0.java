package ms;

import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class l0 {

    /* renamed from: a  reason: collision with root package name */
    private static final os.e0 f39208a = new os.e0("NONE");

    /* renamed from: b  reason: collision with root package name */
    private static final os.e0 f39209b = new os.e0("PENDING");

    public static final MutableStateFlow a(Object obj) {
        if (obj == null) {
            obj = ns.t.f42015a;
        }
        return new k0(obj);
    }

    public static final Flow d(j0 j0Var, CoroutineContext coroutineContext, int i10, ls.a aVar) {
        if (((i10 >= 0 && i10 < 2) || i10 == -2) && aVar == ls.a.f37143e) {
            return j0Var;
        }
        return c0.e(j0Var, coroutineContext, i10, aVar);
    }
}
