package wm;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlinx.coroutines.CoroutineScope;
import wm.t;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements wm.a, h {

    /* renamed from: a  reason: collision with root package name */
    private final wm.a f52521a;

    /* renamed from: b  reason: collision with root package name */
    private final t.b f52522b;

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
            return d.this.f52521a.b(iChild, obj, iKey, iHandler);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends Lambda implements Function2 {

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f52525d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Function1 f52526e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(Function1 function1, Continuation continuation) {
                super(2, continuation);
                this.f52526e = function1;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f52526e, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = rr.b.f();
                int i10 = this.f52525d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    Function1 function1 = this.f52526e;
                    this.f52525d = 1;
                    if (function1.invoke(this) == f10) {
                        return f10;
                    }
                }
                return Unit.f32464a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
            }
        }

        b() {
            super(2);
        }

        public final void a(String iKey, Function1 iSideEffect) {
            Intrinsics.checkNotNullParameter(iKey, "iKey");
            Intrinsics.checkNotNullParameter(iSideEffect, "iSideEffect");
            d.this.f52521a.a(iKey, new a(iSideEffect, null));
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            a((String) obj, (Function1) obj2);
            return Unit.f32464a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends kotlin.coroutines.jvm.internal.k implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        int f52527d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function2 f52528e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ d f52529i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(Function2 function2, d dVar, Continuation continuation) {
            super(1, continuation);
            this.f52528e = function2;
            this.f52529i = dVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Continuation continuation) {
            return new c(this.f52528e, this.f52529i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = rr.b.f();
            int i10 = this.f52527d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Function2 function2 = this.f52528e;
                CoroutineScope a10 = kotlinx.coroutines.i.a(getContext());
                this.f52527d = 1;
                if (function2.invoke(a10, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32464a;
        }

        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Continuation continuation) {
            return ((c) create(continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: wm.d$d  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0702d extends Lambda implements Function1 {
        C0702d() {
            super(1);
        }

        public final void a(r interceptedAction) {
            Intrinsics.checkNotNullParameter(interceptedAction, "interceptedAction");
            d.this.f52521a.c().d(interceptedAction);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((r) obj);
            return Unit.f32464a;
        }
    }

    public d(wm.a baseRenderContext, t.b interceptor) {
        Intrinsics.checkNotNullParameter(baseRenderContext, "baseRenderContext");
        Intrinsics.checkNotNullParameter(interceptor, "interceptor");
        this.f52521a = baseRenderContext;
        this.f52522b = interceptor;
    }

    @Override // wm.a
    public void a(String key, Function2 sideEffect) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(sideEffect, "sideEffect");
        this.f52522b.c(key, new c(sideEffect, this, null), new b());
    }

    @Override // wm.a
    public Object b(q child, Object obj, String key, Function1 handler) {
        Intrinsics.checkNotNullParameter(child, "child");
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(handler, "handler");
        return this.f52522b.a(child, obj, key, handler, new a());
    }

    @Override // wm.h
    /* renamed from: f */
    public void d(r value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f52522b.b(value, new C0702d());
    }

    @Override // wm.a
    public h c() {
        return this;
    }
}
