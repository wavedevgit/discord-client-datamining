package zm;

import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CancellableContinuation;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import zm.r;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract /* synthetic */ class y {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements FlowCollector {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ h f56120d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function1 f56121e;

        public a(h hVar, Function1 function1) {
            this.f56120d = hVar;
            this.f56121e = function1;
        }

        @Override // kotlinx.coroutines.flow.FlowCollector
        public Object emit(Object obj, Continuation continuation) {
            Object m10 = w.m(this.f56120d, (r) this.f56121e.invoke(obj), continuation);
            if (m10 == ur.b.f()) {
                return m10;
            }
            return Unit.f31988a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends r {

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ r f56122c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ CancellableContinuation f56123d;

        b(r rVar, CancellableContinuation cancellableContinuation) {
            this.f56122c = rVar;
            this.f56123d = cancellableContinuation;
        }

        @Override // zm.r
        public void a(r.c cVar) {
            Intrinsics.checkNotNullParameter(cVar, "<this>");
            if (!this.f56123d.a()) {
                return;
            }
            this.f56122c.a(cVar);
            CancellableContinuation cancellableContinuation = this.f56123d;
            Result.a aVar = Result.f31985e;
            cancellableContinuation.resumeWith(Result.b(Unit.f31988a));
        }

        public String toString() {
            return "sendAndAwaitApplication(" + this.f56122c + ')';
        }
    }

    public static final Object a(Flow flow, h hVar, Function1 function1, Continuation continuation) {
        Object collect = flow.collect(new a(hVar, function1), continuation);
        if (collect == ur.b.f()) {
            return collect;
        }
        return Unit.f31988a;
    }

    public static final Object b(h hVar, r rVar, Continuation continuation) {
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(ur.b.c(continuation), 1);
        eVar.H();
        hVar.d(new b(rVar, eVar));
        Object B = eVar.B();
        if (B == ur.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        if (B == ur.b.f()) {
            return B;
        }
        return Unit.f31988a;
    }
}
