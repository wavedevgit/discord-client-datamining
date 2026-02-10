package cn;

import cn.t;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlinx.coroutines.CoroutineScope;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements cn.a, h {

    /* renamed from: a  reason: collision with root package name */
    private final cn.a f7720a;

    /* renamed from: b  reason: collision with root package name */
    private final t.b f7721b;

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
            return d.this.f7720a.b(iChild, obj, iKey, iHandler);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends Lambda implements Function2 {

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f7724d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Function1 f7725e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(Function1 function1, Continuation continuation) {
                super(2, continuation);
                this.f7725e = function1;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f7725e, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = xr.b.f();
                int i10 = this.f7724d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    Function1 function1 = this.f7725e;
                    this.f7724d = 1;
                    if (function1.invoke(this) == f10) {
                        return f10;
                    }
                }
                return Unit.f31765a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31765a);
            }
        }

        b() {
            super(2);
        }

        public final void a(String iKey, Function1 iSideEffect) {
            Intrinsics.checkNotNullParameter(iKey, "iKey");
            Intrinsics.checkNotNullParameter(iSideEffect, "iSideEffect");
            d.this.f7720a.a(iKey, new a(iSideEffect, null));
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            a((String) obj, (Function1) obj2);
            return Unit.f31765a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends kotlin.coroutines.jvm.internal.k implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        int f7726d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function2 f7727e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ d f7728i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(Function2 function2, d dVar, Continuation continuation) {
            super(1, continuation);
            this.f7727e = function2;
            this.f7728i = dVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Continuation continuation) {
            return new c(this.f7727e, this.f7728i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = xr.b.f();
            int i10 = this.f7726d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Function2 function2 = this.f7727e;
                CoroutineScope a10 = kotlinx.coroutines.i.a(getContext());
                this.f7726d = 1;
                if (function2.invoke(a10, this) == f10) {
                    return f10;
                }
            }
            return Unit.f31765a;
        }

        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Continuation continuation) {
            return ((c) create(continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: cn.d$d  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0156d extends Lambda implements Function1 {
        C0156d() {
            super(1);
        }

        public final void a(r interceptedAction) {
            Intrinsics.checkNotNullParameter(interceptedAction, "interceptedAction");
            d.this.f7720a.c().d(interceptedAction);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((r) obj);
            return Unit.f31765a;
        }
    }

    public d(cn.a baseRenderContext, t.b interceptor) {
        Intrinsics.checkNotNullParameter(baseRenderContext, "baseRenderContext");
        Intrinsics.checkNotNullParameter(interceptor, "interceptor");
        this.f7720a = baseRenderContext;
        this.f7721b = interceptor;
    }

    @Override // cn.a
    public void a(String key, Function2 sideEffect) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(sideEffect, "sideEffect");
        this.f7721b.b(key, new c(sideEffect, this, null), new b());
    }

    @Override // cn.a
    public Object b(q child, Object obj, String key, Function1 handler) {
        Intrinsics.checkNotNullParameter(child, "child");
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(handler, "handler");
        return this.f7721b.a(child, obj, key, handler, new a());
    }

    @Override // cn.h
    /* renamed from: f */
    public void d(r value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f7721b.c(value, new C0156d());
    }

    @Override // cn.a
    public h c() {
        return this;
    }
}
