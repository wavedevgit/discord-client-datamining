package ts;

import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import os.k1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class l0 {

    /* renamed from: a  reason: collision with root package name */
    public static final e0 f50842a = new e0("NO_THREAD_ELEMENTS");

    /* renamed from: b  reason: collision with root package name */
    private static final Function2 f50843b = new Function2() { // from class: ts.i0
        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(Object obj, Object obj2) {
            Object d10;
            d10 = l0.d(obj, (CoroutineContext.Element) obj2);
            return d10;
        }
    };

    /* renamed from: c  reason: collision with root package name */
    private static final Function2 f50844c = new Function2() { // from class: ts.j0
        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(Object obj, Object obj2) {
            k1 e10;
            e10 = l0.e((k1) obj, (CoroutineContext.Element) obj2);
            return e10;
        }
    };

    /* renamed from: d  reason: collision with root package name */
    private static final Function2 f50845d = new Function2() { // from class: ts.k0
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
        if (obj == f50842a) {
            return;
        }
        if (obj instanceof p0) {
            ((p0) obj).b(coroutineContext);
            return;
        }
        Object z12 = coroutineContext.z1(null, f50844c);
        Intrinsics.checkNotNull(z12, "null cannot be cast to non-null type kotlinx.coroutines.ThreadContextElement<kotlin.Any?>");
        ((k1) z12).I0(coroutineContext, obj);
    }

    public static final Object g(CoroutineContext coroutineContext) {
        Object z12 = coroutineContext.z1(0, f50843b);
        Intrinsics.checkNotNull(z12);
        return z12;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final p0 h(p0 p0Var, CoroutineContext.Element element) {
        if (element instanceof k1) {
            k1 k1Var = (k1) element;
            p0Var.a(k1Var, k1Var.A1(p0Var.f50852a));
        }
        return p0Var;
    }

    public static final Object i(CoroutineContext coroutineContext, Object obj) {
        if (obj == null) {
            obj = g(coroutineContext);
        }
        if (obj == 0) {
            return f50842a;
        }
        if (obj instanceof Integer) {
            return coroutineContext.z1(new p0(coroutineContext, ((Number) obj).intValue()), f50845d);
        }
        Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlinx.coroutines.ThreadContextElement<kotlin.Any?>");
        return ((k1) obj).A1(coroutineContext);
    }
}
