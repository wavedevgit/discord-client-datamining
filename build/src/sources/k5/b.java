package k5;

import kotlin.coroutines.Continuation;
import okhttp3.Call;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {
    public static final Object a(Call call, Continuation continuation) {
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(rr.b.c(continuation), 1);
        eVar.H();
        m mVar = new m(call, eVar);
        call.M0(mVar);
        eVar.c(mVar);
        Object B = eVar.B();
        if (B == rr.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        return B;
    }
}
