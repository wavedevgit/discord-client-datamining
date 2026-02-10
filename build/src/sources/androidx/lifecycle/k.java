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
    private final Lifecycle f4649d;

    /* renamed from: e  reason: collision with root package name */
    private final CoroutineContext f4650e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f4651d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f4652e;

        a(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(continuation);
            aVar.f4652e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            xr.b.f();
            if (this.f4651d == 0) {
                kotlin.c.b(obj);
                CoroutineScope coroutineScope = (CoroutineScope) this.f4652e;
                if (k.this.a().b().compareTo(Lifecycle.State.f4544e) < 0) {
                    kotlinx.coroutines.a0.e(coroutineScope.getCoroutineContext(), null, 1, null);
                } else {
                    k.this.a().a(k.this);
                }
                return Unit.f31765a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    public k(Lifecycle lifecycle, CoroutineContext coroutineContext) {
        Intrinsics.checkNotNullParameter(lifecycle, "lifecycle");
        Intrinsics.checkNotNullParameter(coroutineContext, "coroutineContext");
        this.f4649d = lifecycle;
        this.f4650e = coroutineContext;
        if (a().b() == Lifecycle.State.f4543d) {
            kotlinx.coroutines.a0.e(getCoroutineContext(), null, 1, null);
        }
    }

    public Lifecycle a() {
        return this.f4649d;
    }

    public final void b() {
        ps.g.d(this, ps.m0.c().e2(), null, new a(null), 2, null);
    }

    @Override // kotlinx.coroutines.CoroutineScope
    public CoroutineContext getCoroutineContext() {
        return this.f4650e;
    }

    @Override // androidx.lifecycle.m
    public void k(LifecycleOwner source, Lifecycle.a event) {
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(event, "event");
        if (a().b().compareTo(Lifecycle.State.f4543d) <= 0) {
            a().d(this);
            kotlinx.coroutines.a0.e(getCoroutineContext(), null, 1, null);
        }
    }
}
