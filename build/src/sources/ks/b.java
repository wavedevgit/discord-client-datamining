package ks;

import java.util.Arrays;
import js.j0;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class b {

    /* renamed from: d  reason: collision with root package name */
    private d[] f36455d;

    /* renamed from: e  reason: collision with root package name */
    private int f36456e;

    /* renamed from: i  reason: collision with root package name */
    private int f36457i;

    /* renamed from: o  reason: collision with root package name */
    private b0 f36458o;

    public static final /* synthetic */ int c(b bVar) {
        return bVar.f36456e;
    }

    public static final /* synthetic */ d[] d(b bVar) {
        return bVar.f36455d;
    }

    public final j0 e() {
        b0 b0Var;
        synchronized (this) {
            b0Var = this.f36458o;
            if (b0Var == null) {
                b0Var = new b0(this.f36456e);
                this.f36458o = b0Var;
            }
        }
        return b0Var;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final d f() {
        d dVar;
        b0 b0Var;
        synchronized (this) {
            try {
                d[] dVarArr = this.f36455d;
                if (dVarArr == null) {
                    dVarArr = j(2);
                    this.f36455d = dVarArr;
                } else if (this.f36456e >= dVarArr.length) {
                    Object[] copyOf = Arrays.copyOf(dVarArr, dVarArr.length * 2);
                    Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
                    this.f36455d = (d[]) copyOf;
                    dVarArr = (d[]) copyOf;
                }
                int i10 = this.f36457i;
                do {
                    dVar = dVarArr[i10];
                    if (dVar == null) {
                        dVar = g();
                        dVarArr[i10] = dVar;
                    }
                    i10++;
                    if (i10 >= dVarArr.length) {
                        i10 = 0;
                    }
                    Intrinsics.checkNotNull(dVar, "null cannot be cast to non-null type kotlinx.coroutines.flow.internal.AbstractSharedFlowSlot<kotlin.Any>");
                } while (!dVar.a(this));
                this.f36457i = i10;
                this.f36456e++;
                b0Var = this.f36458o;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        if (b0Var != null) {
            b0Var.Z(1);
        }
        return dVar;
    }

    protected abstract d g();

    protected abstract d[] j(int i10);

    /* JADX INFO: Access modifiers changed from: protected */
    public final void k(d dVar) {
        b0 b0Var;
        int i10;
        Continuation[] b10;
        synchronized (this) {
            try {
                int i11 = this.f36456e - 1;
                this.f36456e = i11;
                b0Var = this.f36458o;
                if (i11 == 0) {
                    this.f36457i = 0;
                }
                Intrinsics.checkNotNull(dVar, "null cannot be cast to non-null type kotlinx.coroutines.flow.internal.AbstractSharedFlowSlot<kotlin.Any>");
                b10 = dVar.b(this);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        for (Continuation continuation : b10) {
            if (continuation != null) {
                Result.a aVar = Result.f33295e;
                continuation.resumeWith(Result.b(Unit.f33298a));
            }
        }
        if (b0Var != null) {
            b0Var.Z(-1);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final int l() {
        return this.f36456e;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final d[] m() {
        return this.f36455d;
    }
}
