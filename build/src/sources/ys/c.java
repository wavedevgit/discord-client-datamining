package ys;

import java.util.ArrayList;
import java.util.concurrent.atomic.AtomicIntegerFieldUpdater;
import java.util.concurrent.atomic.AtomicReferenceFieldUpdater;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CancellableContinuation;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c {

    /* renamed from: b  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f56343b = AtomicIntegerFieldUpdater.newUpdater(c.class, "notCompletedCount$volatile");

    /* renamed from: a  reason: collision with root package name */
    private final g0[] f56344a;
    private volatile /* synthetic */ int notCompletedCount$volatile;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class a extends z0 {

        /* renamed from: s  reason: collision with root package name */
        private static final /* synthetic */ AtomicReferenceFieldUpdater f56345s = AtomicReferenceFieldUpdater.newUpdater(a.class, Object.class, "_disposer$volatile");
        private volatile /* synthetic */ Object _disposer$volatile;

        /* renamed from: p  reason: collision with root package name */
        private final CancellableContinuation f56346p;

        /* renamed from: q  reason: collision with root package name */
        public n0 f56347q;

        public a(CancellableContinuation cancellableContinuation) {
            this.f56346p = cancellableContinuation;
        }

        public final void B(b bVar) {
            f56345s.set(this, bVar);
        }

        public final void C(n0 n0Var) {
            this.f56347q = n0Var;
        }

        @Override // ys.z0
        public boolean v() {
            return false;
        }

        @Override // ys.z0
        public void w(Throwable th2) {
            if (th2 != null) {
                Object e10 = this.f56346p.e(th2);
                if (e10 != null) {
                    this.f56346p.A(e10);
                    b y10 = y();
                    if (y10 != null) {
                        y10.a();
                    }
                }
            } else if (c.b().decrementAndGet(c.this) == 0) {
                CancellableContinuation cancellableContinuation = this.f56346p;
                g0[] g0VarArr = c.this.f56344a;
                ArrayList arrayList = new ArrayList(g0VarArr.length);
                for (g0 g0Var : g0VarArr) {
                    arrayList.add(g0Var.p());
                }
                cancellableContinuation.resumeWith(Result.b(arrayList));
            }
        }

        public final b y() {
            return (b) f56345s.get(this);
        }

        public final n0 z() {
            n0 n0Var = this.f56347q;
            if (n0Var != null) {
                return n0Var;
            }
            Intrinsics.throwUninitializedPropertyAccessException("handle");
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class b implements kotlinx.coroutines.d {

        /* renamed from: d  reason: collision with root package name */
        private final a[] f56349d;

        public b(a[] aVarArr) {
            this.f56349d = aVarArr;
        }

        public final void a() {
            for (a aVar : this.f56349d) {
                aVar.z().dispose();
            }
        }

        @Override // kotlinx.coroutines.d
        public void c(Throwable th2) {
            a();
        }

        public String toString() {
            return "DisposeHandlersOnCancel[" + this.f56349d + ']';
        }
    }

    public c(g0[] g0VarArr) {
        this.f56344a = g0VarArr;
        this.notCompletedCount$volatile = g0VarArr.length;
    }

    public static final /* synthetic */ AtomicIntegerFieldUpdater b() {
        return f56343b;
    }

    public final Object c(Continuation continuation) {
        n0 o10;
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(gs.b.c(continuation), 1);
        eVar.H();
        int length = this.f56344a.length;
        a[] aVarArr = new a[length];
        for (int i10 = 0; i10 < length; i10++) {
            g0 g0Var = this.f56344a[i10];
            g0Var.start();
            a aVar = new a(eVar);
            o10 = kotlinx.coroutines.a0.o(g0Var, false, aVar, 1, null);
            aVar.C(o10);
            Unit unit = Unit.f32556a;
            aVarArr[i10] = aVar;
        }
        b bVar = new b(aVarArr);
        for (int i11 = 0; i11 < length; i11++) {
            aVarArr[i11].B(bVar);
        }
        if (eVar.isCompleted()) {
            bVar.a();
        } else {
            l.c(eVar, bVar);
        }
        Object B = eVar.B();
        if (B == gs.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        return B;
    }
}
