package um;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlinx.coroutines.CoroutineScope;
import um.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements t {

    /* renamed from: a  reason: collision with root package name */
    public static final e f50472a = new e();

    private e() {
    }

    @Override // um.t
    public Object a(Object obj, Object obj2, a aVar, Function3 function3, t.c cVar) {
        return t.a.c(this, obj, obj2, aVar, function3, cVar);
    }

    @Override // um.t
    public void b(CoroutineScope coroutineScope, t.c cVar) {
        t.a.d(this, coroutineScope, cVar);
    }

    @Override // um.t
    public Object c(Object obj, Object obj2, Object obj3, Function3 function3, t.c cVar) {
        return t.a.b(this, obj, obj2, obj3, function3, cVar);
    }

    @Override // um.t
    public i d(Object obj, Function1 function1, t.c cVar) {
        return t.a.e(this, obj, function1, cVar);
    }

    @Override // um.t
    public Object e(Object obj, i iVar, Function2 function2, t.c cVar) {
        return t.a.a(this, obj, iVar, function2, cVar);
    }
}
