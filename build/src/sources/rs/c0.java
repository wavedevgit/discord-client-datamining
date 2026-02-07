package rs;

import kotlin.coroutines.CoroutineContext;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableSharedFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class c0 {

    /* renamed from: a  reason: collision with root package name */
    public static final ts.e0 f49292a = new ts.e0("NO_VALUE");

    public static final MutableSharedFlow a(int i10, int i11, qs.a aVar) {
        if (i10 >= 0) {
            if (i11 >= 0) {
                if (i10 <= 0 && i11 <= 0 && aVar != qs.a.f48114d) {
                    throw new IllegalArgumentException(("replay or extraBufferCapacity must be positive with non-default onBufferOverflow strategy " + aVar).toString());
                }
                int i12 = i11 + i10;
                if (i12 < 0) {
                    i12 = Integer.MAX_VALUE;
                }
                return new b0(i10, i12, aVar);
            }
            throw new IllegalArgumentException(("extraBufferCapacity cannot be negative, but was " + i11).toString());
        }
        throw new IllegalArgumentException(("replay cannot be negative, but was " + i10).toString());
    }

    public static /* synthetic */ MutableSharedFlow b(int i10, int i11, qs.a aVar, int i12, Object obj) {
        if ((i12 & 1) != 0) {
            i10 = 0;
        }
        if ((i12 & 2) != 0) {
            i11 = 0;
        }
        if ((i12 & 4) != 0) {
            aVar = qs.a.f48114d;
        }
        return a(i10, i11, aVar);
    }

    public static final Flow e(a0 a0Var, CoroutineContext coroutineContext, int i10, qs.a aVar) {
        if ((i10 == 0 || i10 == -3) && aVar == qs.a.f48114d) {
            return a0Var;
        }
        return new ss.h(a0Var, coroutineContext, i10, aVar);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Object f(Object[] objArr, long j10) {
        return objArr[((int) j10) & (objArr.length - 1)];
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void g(Object[] objArr, long j10, Object obj) {
        objArr[((int) j10) & (objArr.length - 1)] = obj;
    }
}
