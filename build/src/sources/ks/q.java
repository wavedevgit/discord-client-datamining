package ks;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.Flow;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract /* synthetic */ class q {

    /* renamed from: a  reason: collision with root package name */
    private static final Function1 f36530a = new Function1() { // from class: ks.o
        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Object obj) {
            Object d10;
            d10 = q.d(obj);
            return d10;
        }
    };

    /* renamed from: b  reason: collision with root package name */
    private static final Function2 f36531b = new Function2() { // from class: ks.p
        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(Object obj, Object obj2) {
            boolean c10;
            c10 = q.c(obj, obj2);
            return Boolean.valueOf(c10);
        }
    };

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean c(Object obj, Object obj2) {
        return Intrinsics.areEqual(obj, obj2);
    }

    public static final Flow e(Flow flow) {
        if (flow instanceof j0) {
            return flow;
        }
        return f(flow, f36530a, f36531b);
    }

    private static final Flow f(Flow flow, Function1 function1, Function2 function2) {
        if (flow instanceof f) {
            f fVar = (f) flow;
            if (fVar.f36434e == function1 && fVar.f36435i == function2) {
                return flow;
            }
        }
        return new f(flow, function1, function2);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Object d(Object obj) {
        return obj;
    }
}
