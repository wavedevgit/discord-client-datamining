package um;

import is.v;
import java.util.concurrent.CancellationException;
import js.j0;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import tm.q;
import tm.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private final tm.k f50458a;

    /* renamed from: b  reason: collision with root package name */
    private final d f50459b;

    /* renamed from: c  reason: collision with root package name */
    private Object f50460c;

    /* renamed from: d  reason: collision with root package name */
    private final v f50461d;

    /* renamed from: e  reason: collision with root package name */
    private final j f50462e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f50463d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f50464e;

        a(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(continuation);
            aVar.f50464e = obj;
            return aVar;
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            return j(((is.k) obj).k(), (Continuation) obj2);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            or.b.f();
            if (this.f50463d == 0) {
                kotlin.c.b(obj);
                Object k10 = ((is.k) this.f50464e).k();
                Throwable e10 = is.k.e(k10);
                if (e10 == null) {
                    Object f10 = is.k.f(k10);
                    if (f10 != null) {
                        m mVar = m.this;
                        if (!Intrinsics.areEqual(mVar.f50460c, f10)) {
                            mVar.f50460c = f10;
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
            return ((a) create(is.k.b(obj), continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f50466d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f50467e;

        b(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            b bVar = new b(continuation);
            bVar.f50467e = obj;
            return bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            or.b.f();
            if (this.f50466d == 0) {
                kotlin.c.b(obj);
                return kotlin.coroutines.jvm.internal.b.a(Intrinsics.areEqual(this.f50467e, m.this.f50460c));
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: j */
        public final Object invoke(Object obj, Continuation continuation) {
            return ((b) create(obj, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    public m(CoroutineScope scope, q protoWorkflow, j0 props, tm.m mVar, t interceptor) {
        Intrinsics.checkNotNullParameter(scope, "scope");
        Intrinsics.checkNotNullParameter(protoWorkflow, "protoWorkflow");
        Intrinsics.checkNotNullParameter(props, "props");
        Intrinsics.checkNotNullParameter(interceptor, "interceptor");
        tm.k b10 = protoWorkflow.b();
        this.f50458a = b10;
        d dVar = new d();
        this.f50459b = dVar;
        this.f50460c = props.getValue();
        this.f50461d = js.g.E(js.g.n(props, new b(null)), scope);
        this.f50462e = new j(l.b(b10, null, 1, null), b10, this.f50460c, mVar, scope.getCoroutineContext(), null, null, interceptor, dVar, 96, null);
    }

    public final void e(CancellationException cancellationException) {
        this.f50462e.d(cancellationException);
    }

    public final Object f(Continuation continuation) {
        os.e eVar = new os.e(continuation);
        try {
            if (!this.f50461d.i()) {
                eVar.a(this.f50461d.k(), new a(null));
            }
            this.f50462e.o(eVar);
        } catch (Throwable th2) {
            eVar.C(th2);
        }
        Object B = eVar.B();
        if (B == or.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        return B;
    }

    public final tm.g g() {
        return new tm.g(this.f50462e.l(this.f50458a, this.f50460c), this.f50462e.n(this.f50458a));
    }
}
