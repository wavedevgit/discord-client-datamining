package ks;

import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.coroutines.jvm.internal.CoroutineStackFrame;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import kotlinx.coroutines.flow.FlowCollector;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class v extends kotlin.coroutines.jvm.internal.d implements FlowCollector, CoroutineStackFrame {

    /* renamed from: d  reason: collision with root package name */
    public final FlowCollector f36520d;

    /* renamed from: e  reason: collision with root package name */
    public final CoroutineContext f36521e;

    /* renamed from: i  reason: collision with root package name */
    public final int f36522i;

    /* renamed from: o  reason: collision with root package name */
    private CoroutineContext f36523o;

    /* renamed from: p  reason: collision with root package name */
    private Continuation f36524p;

    public v(FlowCollector flowCollector, CoroutineContext coroutineContext) {
        super(r.f36514d, kotlin.coroutines.e.f33356d);
        this.f36520d = flowCollector;
        this.f36521e = coroutineContext;
        this.f36522i = ((Number) coroutineContext.A1(0, new Function2() { // from class: ks.u
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                int l10;
                l10 = v.l(((Integer) obj).intValue(), (CoroutineContext.Element) obj2);
                return Integer.valueOf(l10);
            }
        })).intValue();
    }

    private final void k(CoroutineContext coroutineContext, CoroutineContext coroutineContext2, Object obj) {
        if (coroutineContext2 instanceof m) {
            n((m) coroutineContext2, obj);
        }
        y.b(this, coroutineContext);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int l(int i10, CoroutineContext.Element element) {
        return i10 + 1;
    }

    private final Object m(Continuation continuation, Object obj) {
        CoroutineContext context = continuation.getContext();
        kotlinx.coroutines.z.k(context);
        CoroutineContext coroutineContext = this.f36523o;
        if (coroutineContext != context) {
            k(context, coroutineContext, obj);
            this.f36523o = context;
        }
        this.f36524p = continuation;
        Function3 a10 = w.a();
        FlowCollector flowCollector = this.f36520d;
        Intrinsics.checkNotNull(flowCollector, "null cannot be cast to non-null type kotlinx.coroutines.flow.FlowCollector<kotlin.Any?>");
        Intrinsics.checkNotNull(this, "null cannot be cast to non-null type kotlin.coroutines.Continuation<kotlin.Unit>");
        Object invoke = a10.invoke(flowCollector, obj, this);
        if (!Intrinsics.areEqual(invoke, or.b.f())) {
            this.f36524p = null;
        }
        return invoke;
    }

    private final void n(m mVar, Object obj) {
        throw new IllegalStateException(StringsKt.j("\n            Flow exception transparency is violated:\n                Previous 'emit' call has thrown exception " + mVar.f36508e + ", but then emission attempt of value '" + obj + "' has been detected.\n                Emissions from 'catch' blocks are prohibited in order to avoid unspecified behaviour, 'Flow.catch' operator can be used instead.\n                For a more detailed explanation, please refer to Flow documentation.\n            ").toString());
    }

    @Override // kotlinx.coroutines.flow.FlowCollector
    public Object emit(Object obj, Continuation continuation) {
        try {
            Object m10 = m(continuation, obj);
            if (m10 == or.b.f()) {
                kotlin.coroutines.jvm.internal.g.c(continuation);
            }
            if (m10 == or.b.f()) {
                return m10;
            }
            return Unit.f33282a;
        } catch (Throwable th2) {
            this.f36523o = new m(th2, continuation.getContext());
            throw th2;
        }
    }

    @Override // kotlin.coroutines.jvm.internal.a, kotlin.coroutines.jvm.internal.CoroutineStackFrame
    public CoroutineStackFrame getCallerFrame() {
        Continuation continuation = this.f36524p;
        if (continuation instanceof CoroutineStackFrame) {
            return (CoroutineStackFrame) continuation;
        }
        return null;
    }

    @Override // kotlin.coroutines.jvm.internal.d, kotlin.coroutines.Continuation
    public CoroutineContext getContext() {
        CoroutineContext coroutineContext = this.f36523o;
        if (coroutineContext == null) {
            return kotlin.coroutines.e.f33356d;
        }
        return coroutineContext;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    public StackTraceElement getStackTraceElement() {
        return null;
    }

    @Override // kotlin.coroutines.jvm.internal.a
    protected Object invokeSuspend(Object obj) {
        Throwable e10 = Result.e(obj);
        if (e10 != null) {
            this.f36523o = new m(e10, getContext());
        }
        Continuation continuation = this.f36524p;
        if (continuation != null) {
            continuation.resumeWith(obj);
        }
        return or.b.f();
    }

    @Override // kotlin.coroutines.jvm.internal.d, kotlin.coroutines.jvm.internal.a
    public void releaseIntercepted() {
        super.releaseIntercepted();
    }
}
