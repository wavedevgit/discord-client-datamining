package wm;

import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CancellableContinuation;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import wm.r;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract /* synthetic */ class y {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements FlowCollector {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ h f52594d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function1 f52595e;

        public a(h hVar, Function1 function1) {
            this.f52594d = hVar;
            this.f52595e = function1;
        }

        @Override // kotlinx.coroutines.flow.FlowCollector
        public Object emit(Object obj, Continuation continuation) {
            Object m10 = w.m(this.f52594d, (r) this.f52595e.invoke(obj), continuation);
            if (m10 == rr.b.f()) {
                return m10;
            }
            return Unit.f32464a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends r {

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ r f52596c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ CancellableContinuation f52597d;

        b(r rVar, CancellableContinuation cancellableContinuation) {
            this.f52596c = rVar;
            this.f52597d = cancellableContinuation;
        }

        @Override // wm.r
        public void a(r.c cVar) {
            Intrinsics.checkNotNullParameter(cVar, "<this>");
            if (!this.f52597d.a()) {
                return;
            }
            this.f52596c.a(cVar);
            CancellableContinuation cancellableContinuation = this.f52597d;
            Result.a aVar = Result.f32461e;
            cancellableContinuation.resumeWith(Result.b(Unit.f32464a));
        }

        public String toString() {
            return "sendAndAwaitApplication(" + this.f52596c + ')';
        }
    }

    public static final Object a(Flow flow, h hVar, Function1 function1, Continuation continuation) {
        Object collect = flow.collect(new a(hVar, function1), continuation);
        if (collect == rr.b.f()) {
            return collect;
        }
        return Unit.f32464a;
    }

    public static final Object b(h hVar, r rVar, Continuation continuation) {
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(rr.b.c(continuation), 1);
        eVar.H();
        hVar.d(new b(rVar, eVar));
        Object B = eVar.B();
        if (B == rr.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        if (B == rr.b.f()) {
            return B;
        }
        return Unit.f32464a;
    }
}
