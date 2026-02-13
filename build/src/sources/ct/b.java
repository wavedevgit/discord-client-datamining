package ct;

import bt.j0;
import java.util.Arrays;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class b {

    /* renamed from: d  reason: collision with root package name */
    private d[] f21020d;

    /* renamed from: e  reason: collision with root package name */
    private int f21021e;

    /* renamed from: i  reason: collision with root package name */
    private int f21022i;

    /* renamed from: o  reason: collision with root package name */
    private b0 f21023o;

    public static final /* synthetic */ int a(b bVar) {
        return bVar.f21021e;
    }

    public static final /* synthetic */ d[] c(b bVar) {
        return bVar.f21020d;
    }

    public final j0 d() {
        b0 b0Var;
        synchronized (this) {
            b0Var = this.f21023o;
            if (b0Var == null) {
                b0Var = new b0(this.f21021e);
                this.f21023o = b0Var;
            }
        }
        return b0Var;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final d e() {
        d dVar;
        b0 b0Var;
        synchronized (this) {
            try {
                d[] dVarArr = this.f21020d;
                if (dVarArr == null) {
                    dVarArr = j(2);
                    this.f21020d = dVarArr;
                } else if (this.f21021e >= dVarArr.length) {
                    Object[] copyOf = Arrays.copyOf(dVarArr, dVarArr.length * 2);
                    Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
                    this.f21020d = (d[]) copyOf;
                    dVarArr = (d[]) copyOf;
                }
                int i10 = this.f21022i;
                do {
                    dVar = dVarArr[i10];
                    if (dVar == null) {
                        dVar = f();
                        dVarArr[i10] = dVar;
                    }
                    i10++;
                    if (i10 >= dVarArr.length) {
                        i10 = 0;
                    }
                    Intrinsics.checkNotNull(dVar, "null cannot be cast to non-null type kotlinx.coroutines.flow.internal.AbstractSharedFlowSlot<kotlin.Any>");
                } while (!dVar.a(this));
                this.f21022i = i10;
                this.f21021e++;
                b0Var = this.f21023o;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        if (b0Var != null) {
            b0Var.Z(1);
        }
        return dVar;
    }

    protected abstract d f();

    protected abstract d[] j(int i10);

    /* JADX INFO: Access modifiers changed from: protected */
    public final void k(d dVar) {
        b0 b0Var;
        int i10;
        Continuation[] b10;
        synchronized (this) {
            try {
                int i11 = this.f21021e - 1;
                this.f21021e = i11;
                b0Var = this.f21023o;
                if (i11 == 0) {
                    this.f21022i = 0;
                }
                Intrinsics.checkNotNull(dVar, "null cannot be cast to non-null type kotlinx.coroutines.flow.internal.AbstractSharedFlowSlot<kotlin.Any>");
                b10 = dVar.b(this);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        for (Continuation continuation : b10) {
            if (continuation != null) {
                Result.a aVar = Result.f32553e;
                continuation.resumeWith(Result.b(Unit.f32556a));
            }
        }
        if (b0Var != null) {
            b0Var.Z(-1);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final int l() {
        return this.f21021e;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final d[] m() {
        return this.f21020d;
    }
}
