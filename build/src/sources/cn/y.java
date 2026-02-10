package cn;

import cn.r;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CancellableContinuation;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract /* synthetic */ class y {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements FlowCollector {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ h f7790d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function1 f7791e;

        public a(h hVar, Function1 function1) {
            this.f7790d = hVar;
            this.f7791e = function1;
        }

        @Override // kotlinx.coroutines.flow.FlowCollector
        public Object emit(Object obj, Continuation continuation) {
            Object m10 = w.m(this.f7790d, (r) this.f7791e.invoke(obj), continuation);
            if (m10 == xr.b.f()) {
                return m10;
            }
            return Unit.f31765a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends r {

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ r f7792c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ CancellableContinuation f7793d;

        b(r rVar, CancellableContinuation cancellableContinuation) {
            this.f7792c = rVar;
            this.f7793d = cancellableContinuation;
        }

        @Override // cn.r
        public void a(r.c cVar) {
            Intrinsics.checkNotNullParameter(cVar, "<this>");
            if (!this.f7793d.a()) {
                return;
            }
            this.f7792c.a(cVar);
            CancellableContinuation cancellableContinuation = this.f7793d;
            Result.a aVar = Result.f31762e;
            cancellableContinuation.resumeWith(Result.b(Unit.f31765a));
        }

        public String toString() {
            return "sendAndAwaitApplication(" + this.f7792c + ')';
        }
    }

    public static final Object a(Flow flow, h hVar, Function1 function1, Continuation continuation) {
        Object collect = flow.collect(new a(hVar, function1), continuation);
        if (collect == xr.b.f()) {
            return collect;
        }
        return Unit.f31765a;
    }

    public static final Object b(h hVar, r rVar, Continuation continuation) {
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(xr.b.c(continuation), 1);
        eVar.H();
        hVar.d(new b(rVar, eVar));
        Object B = eVar.B();
        if (B == xr.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        if (B == xr.b.f()) {
            return B;
        }
        return Unit.f31765a;
    }
}
