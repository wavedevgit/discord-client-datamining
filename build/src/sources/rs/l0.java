package rs;

import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class l0 {

    /* renamed from: a  reason: collision with root package name */
    private static final ts.e0 f49306a = new ts.e0("NONE");

    /* renamed from: b  reason: collision with root package name */
    private static final ts.e0 f49307b = new ts.e0("PENDING");

    public static final MutableStateFlow a(Object obj) {
        if (obj == null) {
            obj = ss.t.f50099a;
        }
        return new k0(obj);
    }

    public static final Flow d(j0 j0Var, CoroutineContext coroutineContext, int i10, qs.a aVar) {
        if (((i10 >= 0 && i10 < 2) || i10 == -2) && aVar == qs.a.f48067e) {
            return j0Var;
        }
        return c0.e(j0Var, coroutineContext, i10, aVar);
    }
}
