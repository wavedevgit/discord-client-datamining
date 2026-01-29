package os;

import kotlin.Unit;
import kotlin.jvm.functions.Function3;
import kotlinx.coroutines.CancellableContinuation;
import ls.e0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class m {

    /* renamed from: a  reason: collision with root package name */
    private static final Function3 f44749a = a.f44755d;

    /* renamed from: b  reason: collision with root package name */
    private static final e0 f44750b = new e0("STATE_REG");

    /* renamed from: c  reason: collision with root package name */
    private static final e0 f44751c = new e0("STATE_COMPLETED");

    /* renamed from: d  reason: collision with root package name */
    private static final e0 f44752d = new e0("STATE_CANCELLED");

    /* renamed from: e  reason: collision with root package name */
    private static final e0 f44753e = new e0("NO_RESULT");

    /* renamed from: f  reason: collision with root package name */
    private static final e0 f44754f = new e0("PARAM_CLAUSE_0");

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        public static final a f44755d = new a();

        a() {
        }

        @Override // kotlin.jvm.functions.Function3
        /* renamed from: a */
        public final Void invoke(Object obj, Object obj2, Object obj3) {
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final o a(int i10) {
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        return o.f44759o;
                    }
                    throw new IllegalStateException(("Unexpected internal result: " + i10).toString());
                }
                return o.f44758i;
            }
            return o.f44757e;
        }
        return o.f44756d;
    }

    public static final e0 i() {
        return f44754f;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean j(CancellableContinuation cancellableContinuation, Function3 function3) {
        Object t10 = cancellableContinuation.t(Unit.f33282a, null, function3);
        if (t10 == null) {
            return false;
        }
        cancellableContinuation.w(t10);
        return true;
    }
}
