package androidx.lifecycle;

import androidx.lifecycle.Lifecycle;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class k extends j implements m {

    /* renamed from: d  reason: collision with root package name */
    private final Lifecycle f4623d;

    /* renamed from: e  reason: collision with root package name */
    private final CoroutineContext f4624e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f4625d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f4626e;

        a(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(continuation);
            aVar.f4626e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            ur.b.f();
            if (this.f4625d == 0) {
                kotlin.c.b(obj);
                CoroutineScope coroutineScope = (CoroutineScope) this.f4626e;
                if (k.this.a().b().compareTo(Lifecycle.State.f4518e) < 0) {
                    kotlinx.coroutines.a0.e(coroutineScope.getCoroutineContext(), null, 1, null);
                } else {
                    k.this.a().a(k.this);
                }
                return Unit.f31988a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    public k(Lifecycle lifecycle, CoroutineContext coroutineContext) {
        Intrinsics.checkNotNullParameter(lifecycle, "lifecycle");
        Intrinsics.checkNotNullParameter(coroutineContext, "coroutineContext");
        this.f4623d = lifecycle;
        this.f4624e = coroutineContext;
        if (a().b() == Lifecycle.State.f4517d) {
            kotlinx.coroutines.a0.e(getCoroutineContext(), null, 1, null);
        }
    }

    public Lifecycle a() {
        return this.f4623d;
    }

    public final void b() {
        ms.g.d(this, ms.m0.c().f2(), null, new a(null), 2, null);
    }

    @Override // kotlinx.coroutines.CoroutineScope
    public CoroutineContext getCoroutineContext() {
        return this.f4624e;
    }

    @Override // androidx.lifecycle.m
    public void h(LifecycleOwner source, Lifecycle.a event) {
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(event, "event");
        if (a().b().compareTo(Lifecycle.State.f4517d) <= 0) {
            a().d(this);
            kotlinx.coroutines.a0.e(getCoroutineContext(), null, 1, null);
        }
    }
}
