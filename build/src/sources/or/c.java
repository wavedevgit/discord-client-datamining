package or;

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
        private int f44634d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function2 f44635e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Object f44636i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(Continuation continuation, Function2 function2, Object obj) {
            super(continuation);
            this.f44635e = function2;
            this.f44636i = obj;
            Intrinsics.checkNotNull(continuation, "null cannot be cast to non-null type kotlin.coroutines.Continuation<kotlin.Any?>");
        }

        @Override // kotlin.coroutines.jvm.internal.a
        protected Object invokeSuspend(Object obj) {
            int i10 = this.f44634d;
            if (i10 != 0) {
                if (i10 == 1) {
                    this.f44634d = 2;
                    kotlin.c.b(obj);
                    return obj;
                }
                throw new IllegalStateException("This coroutine had already completed");
            }
            this.f44634d = 1;
            kotlin.c.b(obj);
            Intrinsics.checkNotNull(this.f44635e, "null cannot be cast to non-null type kotlin.Function2<R of kotlin.coroutines.intrinsics.IntrinsicsKt__IntrinsicsJvmKt.createCoroutineUnintercepted, kotlin.coroutines.Continuation<T of kotlin.coroutines.intrinsics.IntrinsicsKt__IntrinsicsJvmKt.createCoroutineUnintercepted>, kotlin.Any?>");
            return ((Function2) TypeIntrinsics.beforeCheckcastToFunctionOfArity(this.f44635e, 2)).invoke(this.f44636i, this);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        private int f44637d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function2 f44638e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Object f44639i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(Continuation continuation, CoroutineContext coroutineContext, Function2 function2, Object obj) {
            super(continuation, coroutineContext);
            this.f44638e = function2;
            this.f44639i = obj;
            Intrinsics.checkNotNull(continuation, "null cannot be cast to non-null type kotlin.coroutines.Continuation<kotlin.Any?>");
        }

        @Override // kotlin.coroutines.jvm.internal.a
        protected Object invokeSuspend(Object obj) {
            int i10 = this.f44637d;
            if (i10 != 0) {
                if (i10 == 1) {
                    this.f44637d = 2;
                    kotlin.c.b(obj);
                    return obj;
                }
                throw new IllegalStateException("This coroutine had already completed");
            }
            this.f44637d = 1;
            kotlin.c.b(obj);
            Intrinsics.checkNotNull(this.f44638e, "null cannot be cast to non-null type kotlin.Function2<R of kotlin.coroutines.intrinsics.IntrinsicsKt__IntrinsicsJvmKt.createCoroutineUnintercepted, kotlin.coroutines.Continuation<T of kotlin.coroutines.intrinsics.IntrinsicsKt__IntrinsicsJvmKt.createCoroutineUnintercepted>, kotlin.Any?>");
            return ((Function2) TypeIntrinsics.beforeCheckcastToFunctionOfArity(this.f44638e, 2)).invoke(this.f44639i, this);
        }
    }

    /* renamed from: or.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0549c extends i {
        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        C0549c(Continuation continuation) {
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
        if (context == e.f33372d) {
            return new a(a10, function2, obj);
        }
        return new b(a10, context, function2, obj);
    }

    private static final Continuation b(Continuation continuation) {
        CoroutineContext context = continuation.getContext();
        if (context == e.f33372d) {
            return new C0549c(continuation);
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
