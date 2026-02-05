package ps;

import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class l0 {

    /* renamed from: a  reason: collision with root package name */
    private static final rs.e0 f46405a = new rs.e0("NONE");

    /* renamed from: b  reason: collision with root package name */
    private static final rs.e0 f46406b = new rs.e0("PENDING");

    public static final MutableStateFlow a(Object obj) {
        if (obj == null) {
            obj = qs.t.f48075a;
        }
        return new k0(obj);
    }

    public static final Flow d(j0 j0Var, CoroutineContext coroutineContext, int i10, os.a aVar) {
        if (((i10 >= 0 && i10 < 2) || i10 == -2) && aVar == os.a.f44351e) {
            return j0Var;
        }
        return c0.e(j0Var, coroutineContext, i10, aVar);
    }
}
