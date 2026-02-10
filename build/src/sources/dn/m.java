package dn;

import cn.q;
import cn.t;
import java.util.concurrent.CancellationException;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import rs.v;
import ss.j0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private final cn.k f20908a;

    /* renamed from: b  reason: collision with root package name */
    private final d f20909b;

    /* renamed from: c  reason: collision with root package name */
    private Object f20910c;

    /* renamed from: d  reason: collision with root package name */
    private final v f20911d;

    /* renamed from: e  reason: collision with root package name */
    private final j f20912e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f20913d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f20914e;

        a(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(continuation);
            aVar.f20914e = obj;
            return aVar;
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            return j(((rs.k) obj).k(), (Continuation) obj2);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            xr.b.f();
            if (this.f20913d == 0) {
                kotlin.c.b(obj);
                Object k10 = ((rs.k) this.f20914e).k();
                Throwable e10 = rs.k.e(k10);
                if (e10 == null) {
                    Object f10 = rs.k.f(k10);
                    if (f10 != null) {
                        m mVar = m.this;
                        if (!Intrinsics.areEqual(mVar.f20910c, f10)) {
                            mVar.f20910c = f10;
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
            return ((a) create(rs.k.b(obj), continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f20916d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f20917e;

        b(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            b bVar = new b(continuation);
            bVar.f20917e = obj;
            return bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            xr.b.f();
            if (this.f20916d == 0) {
                kotlin.c.b(obj);
                return kotlin.coroutines.jvm.internal.b.a(Intrinsics.areEqual(this.f20917e, m.this.f20910c));
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: j */
        public final Object invoke(Object obj, Continuation continuation) {
            return ((b) create(obj, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    public m(CoroutineScope scope, q protoWorkflow, j0 props, cn.m mVar, t interceptor) {
        Intrinsics.checkNotNullParameter(scope, "scope");
        Intrinsics.checkNotNullParameter(protoWorkflow, "protoWorkflow");
        Intrinsics.checkNotNullParameter(props, "props");
        Intrinsics.checkNotNullParameter(interceptor, "interceptor");
        cn.k b10 = protoWorkflow.b();
        this.f20908a = b10;
        d dVar = new d();
        this.f20909b = dVar;
        this.f20910c = props.getValue();
        this.f20911d = ss.g.E(ss.g.n(props, new b(null)), scope);
        this.f20912e = new j(l.b(b10, null, 1, null), b10, this.f20910c, mVar, scope.getCoroutineContext(), null, null, interceptor, dVar, 96, null);
    }

    public final void e(CancellationException cancellationException) {
        this.f20912e.d(cancellationException);
    }

    public final Object f(Continuation continuation) {
        xs.e eVar = new xs.e(continuation);
        try {
            if (!this.f20911d.b()) {
                eVar.f(this.f20911d.l(), new a(null));
            }
            this.f20912e.p(eVar);
        } catch (Throwable th2) {
            eVar.C(th2);
        }
        Object B = eVar.B();
        if (B == xr.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        return B;
    }

    public final cn.g g() {
        return new cn.g(this.f20912e.m(this.f20908a, this.f20910c), this.f20912e.o(this.f20908a));
    }
}
