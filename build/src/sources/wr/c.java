package wr;

import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.coroutines.e;
import kotlin.coroutines.jvm.internal.g;
import kotlin.coroutines.jvm.internal.i;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.TypeIntrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends i {

        /* renamed from: d  reason: collision with root package name */
        private int f54059d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function2 f54060e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Object f54061i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(Continuation continuation, Function2 function2, Object obj) {
            super(continuation);
            this.f54060e = function2;
            this.f54061i = obj;
            Intrinsics.checkNotNull(continuation, "null cannot be cast to non-null type kotlin.coroutines.Continuation<kotlin.Any?>");
        }

        @Override // kotlin.coroutines.jvm.internal.a
        protected Object invokeSuspend(Object obj) {
            int i10 = this.f54059d;
            if (i10 != 0) {
                if (i10 == 1) {
                    this.f54059d = 2;
                    kotlin.c.b(obj);
                    return obj;
                }
                throw new IllegalStateException("This coroutine had already completed");
            }
            this.f54059d = 1;
            kotlin.c.b(obj);
            Intrinsics.checkNotNull(this.f54060e, "null cannot be cast to non-null type kotlin.Function2<R of kotlin.coroutines.intrinsics.IntrinsicsKt__IntrinsicsJvmKt.createCoroutineUnintercepted, kotlin.coroutines.Continuation<T of kotlin.coroutines.intrinsics.IntrinsicsKt__IntrinsicsJvmKt.createCoroutineUnintercepted>, kotlin.Any?>");
            return ((Function2) TypeIntrinsics.beforeCheckcastToFunctionOfArity(this.f54060e, 2)).invoke(this.f54061i, this);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        private int f54062d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function2 f54063e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Object f54064i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(Continuation continuation, CoroutineContext coroutineContext, Function2 function2, Object obj) {
            super(continuation, coroutineContext);
            this.f54063e = function2;
            this.f54064i = obj;
            Intrinsics.checkNotNull(continuation, "null cannot be cast to non-null type kotlin.coroutines.Continuation<kotlin.Any?>");
        }

        @Override // kotlin.coroutines.jvm.internal.a
        protected Object invokeSuspend(Object obj) {
            int i10 = this.f54062d;
            if (i10 != 0) {
                if (i10 == 1) {
                    this.f54062d = 2;
                    kotlin.c.b(obj);
                    return obj;
                }
                throw new IllegalStateException("This coroutine had already completed");
            }
            this.f54062d = 1;
            kotlin.c.b(obj);
            Intrinsics.checkNotNull(this.f54063e, "null cannot be cast to non-null type kotlin.Function2<R of kotlin.coroutines.intrinsics.IntrinsicsKt__IntrinsicsJvmKt.createCoroutineUnintercepted, kotlin.coroutines.Continuation<T of kotlin.coroutines.intrinsics.IntrinsicsKt__IntrinsicsJvmKt.createCoroutineUnintercepted>, kotlin.Any?>");
            return ((Function2) TypeIntrinsics.beforeCheckcastToFunctionOfArity(this.f54063e, 2)).invoke(this.f54064i, this);
        }
    }

    /* renamed from: wr.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0726c extends i {
        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        C0726c(Continuation continuation) {
            super(continuation);
            Intrinsics.checkNotNull(continuation, "null cannot be cast to non-null type kotlin.coroutines.Continuation<kotlin.Any?>");
        }

        @Override // kotlin.coroutines.jvm.internal.a
        protected Object invokeSuspend(Object obj) {
            kotlin.c.b(obj);
            return obj;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.d {
        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(Continuation continuation, CoroutineContext coroutineContext) {
            super(continuation, coroutineContext);
            Intrinsics.checkNotNull(continuation, "null cannot be cast to non-null type kotlin.coroutines.Continuation<kotlin.Any?>");
        }

        @Override // kotlin.coroutines.jvm.internal.a
        protected Object invokeSuspend(Object obj) {
            kotlin.c.b(obj);
            return obj;
        }
    }

    public static Continuation a(Function2 function2, Object obj, Continuation completion) {
        Intrinsics.checkNotNullParameter(function2, "<this>");
        Intrinsics.checkNotNullParameter(completion, "completion");
        Continuation<?> a10 = g.a(completion);
        if (function2 instanceof kotlin.coroutines.jvm.internal.a) {
            return ((kotlin.coroutines.jvm.internal.a) function2).create(obj, a10);
        }
        CoroutineContext context = a10.getContext();
        if (context == e.f32082d) {
            return new a(a10, function2, obj);
        }
        return new b(a10, context, function2, obj);
    }

    private static final Continuation b(Continuation continuation) {
        CoroutineContext context = continuation.getContext();
        if (context == e.f32082d) {
            return new C0726c(continuation);
        }
        return new d(continuation, context);
    }

    public static Continuation c(Continuation continuation) {
        kotlin.coroutines.jvm.internal.d dVar;
        Continuation<Object> intercepted;
        Intrinsics.checkNotNullParameter(continuation, "<this>");
        if (continuation instanceof kotlin.coroutines.jvm.internal.d) {
            dVar = (kotlin.coroutines.jvm.internal.d) continuation;
        } else {
            dVar = null;
        }
        if (dVar != null && (intercepted = dVar.intercepted()) != null) {
            return intercepted;
        }
        return continuation;
    }

    public static Object d(Function2 function2, Object obj, Continuation completion) {
        Intrinsics.checkNotNullParameter(function2, "<this>");
        Intrinsics.checkNotNullParameter(completion, "completion");
        return ((Function2) TypeIntrinsics.beforeCheckcastToFunctionOfArity(function2, 2)).invoke(obj, b(g.a(completion)));
    }

    public static Object e(Function3 function3, Object obj, Object obj2, Continuation completion) {
        Intrinsics.checkNotNullParameter(function3, "<this>");
        Intrinsics.checkNotNullParameter(completion, "completion");
        return ((Function3) TypeIntrinsics.beforeCheckcastToFunctionOfArity(function3, 3)).invoke(obj, obj2, b(g.a(completion)));
    }
}
