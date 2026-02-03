package os;

import js.k1;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class l0 {

    /* renamed from: a  reason: collision with root package name */
    public static final e0 f44530a = new e0("NO_THREAD_ELEMENTS");

    /* renamed from: b  reason: collision with root package name */
    private static final Function2 f44531b = new Function2() { // from class: os.i0
        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(Object obj, Object obj2) {
            Object d10;
            d10 = l0.d(obj, (CoroutineContext.Element) obj2);
            return d10;
        }
    };

    /* renamed from: c  reason: collision with root package name */
    private static final Function2 f44532c = new Function2() { // from class: os.j0
        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(Object obj, Object obj2) {
            k1 e10;
            e10 = l0.e((k1) obj, (CoroutineContext.Element) obj2);
            return e10;
        }
    };

    /* renamed from: d  reason: collision with root package name */
    private static final Function2 f44533d = new Function2() { // from class: os.k0
        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(Object obj, Object obj2) {
            p0 h10;
            h10 = l0.h((p0) obj, (CoroutineContext.Element) obj2);
            return h10;
        }
    };

    /* JADX INFO: Access modifiers changed from: private */
    public static final Object d(Object obj, CoroutineContext.Element element) {
        Integer num;
        int i10;
        if (element instanceof k1) {
            if (obj instanceof Integer) {
                num = (Integer) obj;
            } else {
                num = null;
            }
            if (num != null) {
                i10 = num.intValue();
            } else {
                i10 = 1;
            }
            if (i10 == 0) {
                return element;
            }
            return Integer.valueOf(i10 + 1);
        }
        return obj;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final k1 e(k1 k1Var, CoroutineContext.Element element) {
        if (k1Var != null) {
            return k1Var;
        }
        if (element instanceof k1) {
            return (k1) element;
        }
        return null;
    }

    public static final void f(CoroutineContext coroutineContext, Object obj) {
        if (obj == f44530a) {
            return;
        }
        if (obj instanceof p0) {
            ((p0) obj).b(coroutineContext);
            return;
        }
        Object y12 = coroutineContext.y1(null, f44532c);
        Intrinsics.checkNotNull(y12, "null cannot be cast to non-null type kotlinx.coroutines.ThreadContextElement<kotlin.Any?>");
        ((k1) y12).F0(coroutineContext, obj);
    }

    public static final Object g(CoroutineContext coroutineContext) {
        Object y12 = coroutineContext.y1(0, f44531b);
        Intrinsics.checkNotNull(y12);
        return y12;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final p0 h(p0 p0Var, CoroutineContext.Element element) {
        if (element instanceof k1) {
            k1 k1Var = (k1) element;
            p0Var.a(k1Var, k1Var.A1(p0Var.f44540a));
        }
        return p0Var;
    }

    public static final Object i(CoroutineContext coroutineContext, Object obj) {
        if (obj == null) {
            obj = g(coroutineContext);
        }
        if (obj == 0) {
            return f44530a;
        }
        if (obj instanceof Integer) {
            return coroutineContext.y1(new p0(coroutineContext, ((Number) obj).intValue()), f44533d);
        }
        Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlinx.coroutines.ThreadContextElement<kotlin.Any?>");
        return ((k1) obj).A1(coroutineContext);
    }
}
