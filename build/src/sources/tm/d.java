package tm;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlinx.coroutines.CoroutineScope;
import tm.t;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d implements tm.a, h {

    /* renamed from: a  reason: collision with root package name */
    private final tm.a f49704a;

    /* renamed from: b  reason: collision with root package name */
    private final t.b f49705b;

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
            return d.this.f49704a.b(iChild, obj, iKey, iHandler);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b extends Lambda implements Function2 {

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f49708d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Function1 f49709e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(Function1 function1, Continuation continuation) {
                super(2, continuation);
                this.f49709e = function1;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new a(this.f49709e, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = or.b.f();
                int i10 = this.f49708d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    Function1 function1 = this.f49709e;
                    this.f49708d = 1;
                    if (function1.invoke(this) == f10) {
                        return f10;
                    }
                }
                return Unit.f33298a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
            }
        }

        b() {
            super(2);
        }

        public final void a(String iKey, Function1 iSideEffect) {
            Intrinsics.checkNotNullParameter(iKey, "iKey");
            Intrinsics.checkNotNullParameter(iSideEffect, "iSideEffect");
            d.this.f49704a.a(iKey, new a(iSideEffect, null));
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            a((String) obj, (Function1) obj2);
            return Unit.f33298a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends kotlin.coroutines.jvm.internal.k implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        int f49710d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function2 f49711e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ d f49712i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(Function2 function2, d dVar, Continuation continuation) {
            super(1, continuation);
            this.f49711e = function2;
            this.f49712i = dVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Continuation continuation) {
            return new c(this.f49711e, this.f49712i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = or.b.f();
            int i10 = this.f49710d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Function2 function2 = this.f49711e;
                CoroutineScope a10 = kotlinx.coroutines.i.a(getContext());
                this.f49710d = 1;
                if (function2.invoke(a10, this) == f10) {
                    return f10;
                }
            }
            return Unit.f33298a;
        }

        @Override // kotlin.jvm.functions.Function1
        public final Object invoke(Continuation continuation) {
            return ((c) create(continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: tm.d$d  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0644d extends Lambda implements Function1 {
        C0644d() {
            super(1);
        }

        public final void a(r interceptedAction) {
            Intrinsics.checkNotNullParameter(interceptedAction, "interceptedAction");
            d.this.f49704a.c().d(interceptedAction);
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((r) obj);
            return Unit.f33298a;
        }
    }

    public d(tm.a baseRenderContext, t.b interceptor) {
        Intrinsics.checkNotNullParameter(baseRenderContext, "baseRenderContext");
        Intrinsics.checkNotNullParameter(interceptor, "interceptor");
        this.f49704a = baseRenderContext;
        this.f49705b = interceptor;
    }

    @Override // tm.a
    public void a(String key, Function2 sideEffect) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(sideEffect, "sideEffect");
        this.f49705b.b(key, new c(sideEffect, this, null), new b());
    }

    @Override // tm.a
    public Object b(q child, Object obj, String key, Function1 handler) {
        Intrinsics.checkNotNullParameter(child, "child");
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(handler, "handler");
        return this.f49705b.c(child, obj, key, handler, new a());
    }

    @Override // tm.h
    /* renamed from: f */
    public void d(r value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f49705b.a(value, new C0644d());
    }

    @Override // tm.a
    public h c() {
        return this;
    }
}
