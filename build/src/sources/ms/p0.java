package ms;

import hs.k1;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class p0 {

    /* renamed from: a  reason: collision with root package name */
    public final CoroutineContext f39185a;

    /* renamed from: b  reason: collision with root package name */
    private final Object[] f39186b;

    /* renamed from: c  reason: collision with root package name */
    private final k1[] f39187c;

    /* renamed from: d  reason: collision with root package name */
    private int f39188d;

    public p0(CoroutineContext coroutineContext, int i10) {
        this.f39185a = coroutineContext;
        this.f39186b = new Object[i10];
        this.f39187c = new k1[i10];
    }

    public final void a(k1 k1Var, Object obj) {
        Object[] objArr = this.f39186b;
        int i10 = this.f39188d;
        objArr[i10] = obj;
        k1[] k1VarArr = this.f39187c;
        this.f39188d = i10 + 1;
        Intrinsics.checkNotNull(k1Var, "null cannot be cast to non-null type kotlinx.coroutines.ThreadContextElement<kotlin.Any?>");
        k1VarArr[i10] = k1Var;
    }

    public final void b(CoroutineContext coroutineContext) {
        int length = this.f39187c.length - 1;
        if (length < 0) {
            return;
        }
        while (true) {
            int i10 = length - 1;
            k1 k1Var = this.f39187c[length];
            Intrinsics.checkNotNull(k1Var);
            k1Var.G0(coroutineContext, this.f39186b[length]);
            if (i10 >= 0) {
                length = i10;
            } else {
                return;
            }
        }
    }
}
