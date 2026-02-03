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
    private final Lifecycle f4511d;

    /* renamed from: e  reason: collision with root package name */
    private final CoroutineContext f4512e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f4513d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f4514e;

        a(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(continuation);
            aVar.f4514e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            rr.b.f();
            if (this.f4513d == 0) {
                kotlin.c.b(obj);
                CoroutineScope coroutineScope = (CoroutineScope) this.f4514e;
                if (k.this.a().b().compareTo(Lifecycle.State.f4406e) < 0) {
                    kotlinx.coroutines.a0.e(coroutineScope.getCoroutineContext(), null, 1, null);
                } else {
                    k.this.a().a(k.this);
                }
                return Unit.f32464a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    public k(Lifecycle lifecycle, CoroutineContext coroutineContext) {
        Intrinsics.checkNotNullParameter(lifecycle, "lifecycle");
        Intrinsics.checkNotNullParameter(coroutineContext, "coroutineContext");
        this.f4511d = lifecycle;
        this.f4512e = coroutineContext;
        if (a().b() == Lifecycle.State.f4405d) {
            kotlinx.coroutines.a0.e(getCoroutineContext(), null, 1, null);
        }
    }

    public Lifecycle a() {
        return this.f4511d;
    }

    public final void b() {
        js.g.d(this, js.m0.c().f2(), null, new a(null), 2, null);
    }

    @Override // kotlinx.coroutines.CoroutineScope
    public CoroutineContext getCoroutineContext() {
        return this.f4512e;
    }

    @Override // androidx.lifecycle.m
    public void h(LifecycleOwner source, Lifecycle.a event) {
        Intrinsics.checkNotNullParameter(source, "source");
        Intrinsics.checkNotNullParameter(event, "event");
        if (a().b().compareTo(Lifecycle.State.f4405d) <= 0) {
            a().d(this);
            kotlinx.coroutines.a0.e(getCoroutineContext(), null, 1, null);
        }
    }
}
