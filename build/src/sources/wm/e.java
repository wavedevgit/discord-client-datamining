package wm;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlinx.coroutines.CoroutineScope;
import wm.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements t {

    /* renamed from: a  reason: collision with root package name */
    public static final e f52534a = new e();

    private e() {
    }

    @Override // wm.t
    public Object a(Object obj, i iVar, Function2 function2, t.c cVar) {
        return t.a.a(this, obj, iVar, function2, cVar);
    }

    @Override // wm.t
    public Object b(Object obj, Object obj2, a aVar, Function3 function3, t.c cVar) {
        return t.a.c(this, obj, obj2, aVar, function3, cVar);
    }

    @Override // wm.t
    public void c(CoroutineScope coroutineScope, t.c cVar) {
        t.a.d(this, coroutineScope, cVar);
    }

    @Override // wm.t
    public Object d(Object obj, Object obj2, Object obj3, Function3 function3, t.c cVar) {
        return t.a.b(this, obj, obj2, obj3, function3, cVar);
    }

    @Override // wm.t
    public i e(Object obj, Function1 function1, t.c cVar) {
        return t.a.e(this, obj, function1, cVar);
    }
}
