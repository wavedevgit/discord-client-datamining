package vm;

import java.util.concurrent.CancellationException;
import js.v;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import ks.j0;
import um.q;
import um.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private final um.k f51430a;

    /* renamed from: b  reason: collision with root package name */
    private final d f51431b;

    /* renamed from: c  reason: collision with root package name */
    private Object f51432c;

    /* renamed from: d  reason: collision with root package name */
    private final v f51433d;

    /* renamed from: e  reason: collision with root package name */
    private final j f51434e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f51435d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f51436e;

        a(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(continuation);
            aVar.f51436e = obj;
            return aVar;
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            return j(((js.k) obj).k(), (Continuation) obj2);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            pr.b.f();
            if (this.f51435d == 0) {
                kotlin.c.b(obj);
                Object k10 = ((js.k) this.f51436e).k();
                Throwable e10 = js.k.e(k10);
                if (e10 == null) {
                    Object f10 = js.k.f(k10);
                    if (f10 != null) {
                        m mVar = m.this;
                        if (!Intrinsics.areEqual(mVar.f51432c, f10)) {
                            mVar.f51432c = f10;
                            return null;
                        }
                        return null;
                    }
                    return null;
                }
                throw e10;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        public final Object j(Object obj, Continuation continuation) {
            return ((a) create(js.k.b(obj), continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f51438d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f51439e;

        b(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            b bVar = new b(continuation);
            bVar.f51439e = obj;
            return bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            pr.b.f();
            if (this.f51438d == 0) {
                kotlin.c.b(obj);
                return kotlin.coroutines.jvm.internal.b.a(Intrinsics.areEqual(this.f51439e, m.this.f51432c));
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: j */
        public final Object invoke(Object obj, Continuation continuation) {
            return ((b) create(obj, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    public m(CoroutineScope scope, q protoWorkflow, j0 props, um.m mVar, t interceptor) {
        Intrinsics.checkNotNullParameter(scope, "scope");
        Intrinsics.checkNotNullParameter(protoWorkflow, "protoWorkflow");
        Intrinsics.checkNotNullParameter(props, "props");
        Intrinsics.checkNotNullParameter(interceptor, "interceptor");
        um.k b10 = protoWorkflow.b();
        this.f51430a = b10;
        d dVar = new d();
        this.f51431b = dVar;
        this.f51432c = props.getValue();
        this.f51433d = ks.g.E(ks.g.n(props, new b(null)), scope);
        this.f51434e = new j(l.b(b10, null, 1, null), b10, this.f51432c, mVar, scope.getCoroutineContext(), null, null, interceptor, dVar, 96, null);
    }

    public final void e(CancellationException cancellationException) {
        this.f51434e.d(cancellationException);
    }

    public final Object f(Continuation continuation) {
        ps.e eVar = new ps.e(continuation);
        try {
            if (!this.f51433d.i()) {
                eVar.e(this.f51433d.k(), new a(null));
            }
            this.f51434e.o(eVar);
        } catch (Throwable th2) {
            eVar.C(th2);
        }
        Object B = eVar.B();
        if (B == pr.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        return B;
    }

    public final um.g g() {
        return new um.g(this.f51434e.l(this.f51430a, this.f51432c), this.f51434e.n(this.f51430a));
    }
}
