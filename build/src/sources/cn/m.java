package cn;

import bn.q;
import bn.t;
import java.util.concurrent.CancellationException;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import qs.v;
import rs.j0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private final bn.k f7629a;

    /* renamed from: b  reason: collision with root package name */
    private final d f7630b;

    /* renamed from: c  reason: collision with root package name */
    private Object f7631c;

    /* renamed from: d  reason: collision with root package name */
    private final v f7632d;

    /* renamed from: e  reason: collision with root package name */
    private final j f7633e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f7634d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f7635e;

        a(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(continuation);
            aVar.f7635e = obj;
            return aVar;
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            return j(((qs.k) obj).k(), (Continuation) obj2);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            wr.b.f();
            if (this.f7634d == 0) {
                kotlin.c.b(obj);
                Object k10 = ((qs.k) this.f7635e).k();
                Throwable e10 = qs.k.e(k10);
                if (e10 == null) {
                    Object f10 = qs.k.f(k10);
                    if (f10 != null) {
                        m mVar = m.this;
                        if (!Intrinsics.areEqual(mVar.f7631c, f10)) {
                            mVar.f7631c = f10;
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
            return ((a) create(qs.k.b(obj), continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f7637d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f7638e;

        b(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            b bVar = new b(continuation);
            bVar.f7638e = obj;
            return bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            wr.b.f();
            if (this.f7637d == 0) {
                kotlin.c.b(obj);
                return kotlin.coroutines.jvm.internal.b.a(Intrinsics.areEqual(this.f7638e, m.this.f7631c));
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: j */
        public final Object invoke(Object obj, Continuation continuation) {
            return ((b) create(obj, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    public m(CoroutineScope scope, q protoWorkflow, j0 props, bn.m mVar, t interceptor) {
        Intrinsics.checkNotNullParameter(scope, "scope");
        Intrinsics.checkNotNullParameter(protoWorkflow, "protoWorkflow");
        Intrinsics.checkNotNullParameter(props, "props");
        Intrinsics.checkNotNullParameter(interceptor, "interceptor");
        bn.k b10 = protoWorkflow.b();
        this.f7629a = b10;
        d dVar = new d();
        this.f7630b = dVar;
        this.f7631c = props.getValue();
        this.f7632d = rs.g.E(rs.g.n(props, new b(null)), scope);
        this.f7633e = new j(l.b(b10, null, 1, null), b10, this.f7631c, mVar, scope.getCoroutineContext(), null, null, interceptor, dVar, 96, null);
    }

    public final void e(CancellationException cancellationException) {
        this.f7633e.d(cancellationException);
    }

    public final Object f(Continuation continuation) {
        ws.e eVar = new ws.e(continuation);
        try {
            if (!this.f7632d.b()) {
                eVar.d(this.f7632d.l(), new a(null));
            }
            this.f7633e.p(eVar);
        } catch (Throwable th2) {
            eVar.C(th2);
        }
        Object B = eVar.B();
        if (B == wr.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        return B;
    }

    public final bn.g g() {
        return new bn.g(this.f7633e.m(this.f7629a, this.f7631c), this.f7633e.o(this.f7629a));
    }
}
