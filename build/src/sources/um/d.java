package um;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlinx.coroutines.CoroutineScope;
import um.t;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements um.a, h {

    /* renamed from: a  reason: collision with root package name */
    private final um.a f50462a;

    /* renamed from: b  reason: collision with root package name */
    private final t.b f50463b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends Lambda implements Function4 {
        a() {
            super(4);
        }

        @Override // kotlin.jvm.functions.Function4
        /* renamed from: a */
        public final Object invoke(q iChild, Object obj, String iKey, Function1 iHandler) {
            Intrinsics.checkNotNullParameter(iChild, "iChild");
            Intrinsics.checkNotNullParameter(iKey, "iKey");
            Intrinsics.checkNotNullParameter(iHandler, "iHandler");
            return d.this.f50462a.b(iChild, obj, iKey, iHandler);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends Lambda implements Function2 {

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f50466d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Function1 f50467e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(Function1 function1, Continuation continuation) {
                super(2, continuation);
                this.f50467e = function1;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f50467e, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = pr.b.f();
                int i10 = this.f50466d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    Function1 function1 = this.f50467e;
                    this.f50466d = 1;
                    if (function1.invoke(this) == f10) {
                        return f10;
                    }
                }
                return Unit.f33074a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
            }
        }

        b() {
            super(2);
        }

        public final void a(String iKey, Function1 iSideEffect) {
            Intrinsics.checkNotNullParameter(iKey, "iKey");
            Intrinsics.checkNotNullParameter(iSideEffect, "iSideEffect");
            d.this.f50462a.a(iKey, new a(iSideEffect, null));
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            a((String) obj, (Function1) obj2);
            return Unit.f33074a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends kotlin.coroutines.jvm.internal.k implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        int f50468d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function2 f50469e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ d f50470i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(Function2 function2, d dVar, Continuation continuation) {
            super(1, continuation);
            this.f50469e = function2;
            this.f50470i = dVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Continuation continuation) {
            return new c(this.f50469e, this.f50470i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = pr.b.f();
            int i10 = this.f50468d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Function2 function2 = this.f50469e;
                CoroutineScope a10 = kotlinx.coroutines.i.a(getContext());
                this.f50468d = 1;
                if (function2.invoke(a10, this) == f10) {
                    return f10;
                }
            }
            return Unit.f33074a;
        }

        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Continuation continuation) {
            return ((c) create(continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: um.d$d  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0665d extends Lambda implements Function1 {
        C0665d() {
            super(1);
        }

        public final void a(r interceptedAction) {
            Intrinsics.checkNotNullParameter(interceptedAction, "interceptedAction");
            d.this.f50462a.c().d(interceptedAction);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((r) obj);
            return Unit.f33074a;
        }
    }

    public d(um.a baseRenderContext, t.b interceptor) {
        Intrinsics.checkNotNullParameter(baseRenderContext, "baseRenderContext");
        Intrinsics.checkNotNullParameter(interceptor, "interceptor");
        this.f50462a = baseRenderContext;
        this.f50463b = interceptor;
    }

    @Override // um.a
    public void a(String key, Function2 sideEffect) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(sideEffect, "sideEffect");
        this.f50463b.c(key, new c(sideEffect, this, null), new b());
    }

    @Override // um.a
    public Object b(q child, Object obj, String key, Function1 handler) {
        Intrinsics.checkNotNullParameter(child, "child");
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(handler, "handler");
        return this.f50463b.b(child, obj, key, handler, new a());
    }

    @Override // um.h
    /* renamed from: f */
    public void d(r value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f50463b.a(value, new C0665d());
    }

    @Override // um.a
    public h c() {
        return this;
    }
}
