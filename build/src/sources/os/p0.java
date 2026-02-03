package os;

import js.k1;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class p0 {

    /* renamed from: a  reason: collision with root package name */
    public final CoroutineContext f44540a;

    /* renamed from: b  reason: collision with root package name */
    private final Object[] f44541b;

    /* renamed from: c  reason: collision with root package name */
    private final k1[] f44542c;

    /* renamed from: d  reason: collision with root package name */
    private int f44543d;

    public p0(CoroutineContext coroutineContext, int i10) {
        this.f44540a = coroutineContext;
        this.f44541b = new Object[i10];
        this.f44542c = new k1[i10];
    }

    public final void a(k1 k1Var, Object obj) {
        Object[] objArr = this.f44541b;
        int i10 = this.f44543d;
        objArr[i10] = obj;
        k1[] k1VarArr = this.f44542c;
        this.f44543d = i10 + 1;
        Intrinsics.checkNotNull(k1Var, "null cannot be cast to non-null type kotlinx.coroutines.ThreadContextElement<kotlin.Any?>");
        k1VarArr[i10] = k1Var;
    }

    public final void b(CoroutineContext coroutineContext) {
        int length = this.f44542c.length - 1;
        if (length < 0) {
            return;
        }
        while (true) {
            int i10 = length - 1;
            k1 k1Var = this.f44542c[length];
            Intrinsics.checkNotNull(k1Var);
            k1Var.F0(coroutineContext, this.f44541b[length]);
            if (i10 >= 0) {
                length = i10;
            } else {
                return;
            }
        }
    }
}
