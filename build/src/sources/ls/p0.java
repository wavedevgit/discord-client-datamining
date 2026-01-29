package ls;

import gs.k1;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class p0 {

    /* renamed from: a  reason: collision with root package name */
    public final CoroutineContext f37469a;

    /* renamed from: b  reason: collision with root package name */
    private final Object[] f37470b;

    /* renamed from: c  reason: collision with root package name */
    private final k1[] f37471c;

    /* renamed from: d  reason: collision with root package name */
    private int f37472d;

    public p0(CoroutineContext coroutineContext, int i10) {
        this.f37469a = coroutineContext;
        this.f37470b = new Object[i10];
        this.f37471c = new k1[i10];
    }

    public final void a(k1 k1Var, Object obj) {
        Object[] objArr = this.f37470b;
        int i10 = this.f37472d;
        objArr[i10] = obj;
        k1[] k1VarArr = this.f37471c;
        this.f37472d = i10 + 1;
        Intrinsics.checkNotNull(k1Var, "null cannot be cast to non-null type kotlinx.coroutines.ThreadContextElement<kotlin.Any?>");
        k1VarArr[i10] = k1Var;
    }

    public final void b(CoroutineContext coroutineContext) {
        int length = this.f37471c.length - 1;
        if (length < 0) {
            return;
        }
        while (true) {
            int i10 = length - 1;
            k1 k1Var = this.f37471c[length];
            Intrinsics.checkNotNull(k1Var);
            k1Var.F0(coroutineContext, this.f37470b[length]);
            if (i10 >= 0) {
                length = i10;
            } else {
                return;
            }
        }
    }
}
