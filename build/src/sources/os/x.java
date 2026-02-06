package os;

import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.coroutines.jvm.internal.CoroutineStackFrame;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Ref;
import kotlinx.coroutines.CoroutineScope;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class x {
    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r4v4, types: [T, java.lang.Object] */
    private static final CoroutineContext d(CoroutineContext coroutineContext, CoroutineContext coroutineContext2, final boolean z10) {
        boolean h10 = h(coroutineContext);
        boolean h11 = h(coroutineContext2);
        if (!h10 && !h11) {
            return coroutineContext.Y0(coroutineContext2);
        }
        final Ref.ObjectRef objectRef = new Ref.ObjectRef();
        objectRef.element = coroutineContext2;
        kotlin.coroutines.e eVar = kotlin.coroutines.e.f32082d;
        CoroutineContext coroutineContext3 = (CoroutineContext) coroutineContext.z1(eVar, new Function2() { // from class: os.v
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                CoroutineContext e10;
                e10 = x.e(Ref.ObjectRef.this, z10, (CoroutineContext) obj, (CoroutineContext.Element) obj2);
                return e10;
            }
        });
        if (h11) {
            objectRef.element = ((CoroutineContext) objectRef.element).z1(eVar, new Function2() { // from class: os.w
                @Override // kotlin.jvm.functions.Function2
                public final Object invoke(Object obj, Object obj2) {
                    CoroutineContext f10;
                    f10 = x.f((CoroutineContext) obj, (CoroutineContext.Element) obj2);
                    return f10;
                }
            });
        }
        return coroutineContext3.Y0((CoroutineContext) objectRef.element);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final CoroutineContext e(Ref.ObjectRef objectRef, boolean z10, CoroutineContext coroutineContext, CoroutineContext.Element element) {
        return coroutineContext.Y0(element);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final CoroutineContext f(CoroutineContext coroutineContext, CoroutineContext.Element element) {
        return coroutineContext.Y0(element);
    }

    public static final String g(CoroutineContext coroutineContext) {
        return null;
    }

    private static final boolean h(CoroutineContext coroutineContext) {
        return ((Boolean) coroutineContext.z1(Boolean.FALSE, new Function2() { // from class: os.u
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                boolean i10;
                i10 = x.i(((Boolean) obj).booleanValue(), (CoroutineContext.Element) obj2);
                return Boolean.valueOf(i10);
            }
        })).booleanValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean i(boolean z10, CoroutineContext.Element element) {
        if (!z10) {
            return false;
        }
        return true;
    }

    public static final CoroutineContext j(CoroutineContext coroutineContext, CoroutineContext coroutineContext2) {
        if (!h(coroutineContext2)) {
            return coroutineContext.Y0(coroutineContext2);
        }
        return d(coroutineContext, coroutineContext2, false);
    }

    public static final CoroutineContext k(CoroutineScope coroutineScope, CoroutineContext coroutineContext) {
        CoroutineContext d10 = d(coroutineScope.getCoroutineContext(), coroutineContext, true);
        if (d10 != m0.a() && d10.m(kotlin.coroutines.d.f32080g) == null) {
            return d10.Y0(m0.a());
        }
        return d10;
    }

    public static final u1 l(CoroutineStackFrame coroutineStackFrame) {
        while (!(coroutineStackFrame instanceof kotlinx.coroutines.l) && (coroutineStackFrame = coroutineStackFrame.getCallerFrame()) != null) {
            if (coroutineStackFrame instanceof u1) {
                return (u1) coroutineStackFrame;
            }
        }
        return null;
    }

    public static final u1 m(Continuation continuation, CoroutineContext coroutineContext, Object obj) {
        if (!(continuation instanceof CoroutineStackFrame) || coroutineContext.m(v1.f43539d) == null) {
            return null;
        }
        u1 l10 = l((CoroutineStackFrame) continuation);
        if (l10 != null) {
            l10.b1(coroutineContext, obj);
        }
        return l10;
    }
}
