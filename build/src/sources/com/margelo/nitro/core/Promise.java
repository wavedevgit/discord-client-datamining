package com.margelo.nitro.core;

import androidx.annotation.Keep;
import com.facebook.jni.HybridData;
import kotlin.Metadata;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.g;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.i;
import ms.m0;
import org.jetbrains.annotations.NotNull;
import tr.d;
@Keep
@Metadata(d1 = {"\u0000>\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\u0003\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\r\b\u0007\u0018\u0000 $*\u0004\b\u0000\u0010\u00012\u00020\u0002:\u0003%&'B\t\b\u0016¢\u0006\u0004\b\u0003\u0010\u0004B\u0011\b\u0013\u0012\u0006\u0010\u0006\u001a\u00020\u0005¢\u0006\u0004\b\u0003\u0010\u0007J\u001a\u0010\n\u001a\u00020\t2\b\u0010\b\u001a\u0004\u0018\u00010\u0002H\u0082 ¢\u0006\u0004\b\n\u0010\u000bJ\u0018\u0010\u000e\u001a\u00020\t2\u0006\u0010\r\u001a\u00020\fH\u0082 ¢\u0006\u0004\b\u000e\u0010\u000fJ\u0018\u0010\u0012\u001a\u00020\t2\u0006\u0010\u0011\u001a\u00020\u0010H\u0082 ¢\u0006\u0004\b\u0012\u0010\u0013J\u0018\u0010\u0015\u001a\u00020\t2\u0006\u0010\u0011\u001a\u00020\u0014H\u0082 ¢\u0006\u0004\b\u0015\u0010\u0016J\u0010\u0010\u0017\u001a\u00020\u0005H\u0082 ¢\u0006\u0004\b\u0017\u0010\u0018J\u0015\u0010\u0019\u001a\u00020\t2\u0006\u0010\b\u001a\u00028\u0000¢\u0006\u0004\b\u0019\u0010\u000bJ\u0015\u0010\u001a\u001a\u00020\t2\u0006\u0010\r\u001a\u00020\f¢\u0006\u0004\b\u001a\u0010\u000fJ'\u0010\u001d\u001a\b\u0012\u0004\u0012\u00028\u00000\u00002\u0012\u0010\u001c\u001a\u000e\u0012\u0004\u0012\u00028\u0000\u0012\u0004\u0012\u00020\t0\u001b¢\u0006\u0004\b\u001d\u0010\u001eJ'\u0010\u001f\u001a\b\u0012\u0004\u0012\u00028\u00000\u00002\u0012\u0010\u001c\u001a\u000e\u0012\u0004\u0012\u00020\f\u0012\u0004\u0012\u00020\t0\u001b¢\u0006\u0004\b\u001f\u0010\u001eJ\u0010\u0010 \u001a\u00028\u0000H\u0086@¢\u0006\u0004\b \u0010!R\u0014\u0010\"\u001a\u00020\u00058\u0002X\u0083\u0004¢\u0006\u0006\n\u0004\b\"\u0010#¨\u0006("}, d2 = {"Lcom/margelo/nitro/core/Promise;", "T", "", "<init>", "()V", "Lcom/facebook/jni/HybridData;", "hybridData", "(Lcom/facebook/jni/HybridData;)V", "result", "", "nativeResolve", "(Ljava/lang/Object;)V", "", "error", "nativeReject", "(Ljava/lang/Throwable;)V", "Lcom/margelo/nitro/core/Promise$OnResolvedCallback;", "callback", "addOnResolvedListener", "(Lcom/margelo/nitro/core/Promise$OnResolvedCallback;)V", "Lcom/margelo/nitro/core/Promise$OnRejectedCallback;", "addOnRejectedListener", "(Lcom/margelo/nitro/core/Promise$OnRejectedCallback;)V", "initHybrid", "()Lcom/facebook/jni/HybridData;", "resolve", "reject", "Lkotlin/Function1;", "listener", "then", "(Lkotlin/jvm/functions/Function1;)Lcom/margelo/nitro/core/Promise;", "catch", "await", "(Lkotlin/coroutines/Continuation;)Ljava/lang/Object;", "mHybridData", "Lcom/facebook/jni/HybridData;", "Companion", "OnResolvedCallback", "OnRejectedCallback", "a", "react-native-nitro-modules_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@fb.a
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class Promise<T> {
    @NotNull
    public static final a Companion = new a(null);
    @NotNull
    private static final CoroutineScope defaultScope = i.a(m0.a());
    @Keep
    @fb.a
    @NotNull
    private final HybridData mHybridData;

    /* JADX INFO: Access modifiers changed from: private */
    @Keep
    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u0003\n\u0000\bã\u0080\u0001\u0018\u00002\u00020\u0001J\u0010\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u0005H'¨\u0006\u0006"}, d2 = {"Lcom/margelo/nitro/core/Promise$OnRejectedCallback;", "", "onRejected", "", "error", "", "react-native-nitro-modules_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @fb.a
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface OnRejectedCallback {
        @Keep
        @fb.a
        void onRejected(@NotNull Throwable th2);
    }

    /* JADX INFO: Access modifiers changed from: private */
    @Keep
    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\bã\u0080\u0001\u0018\u00002\u00020\u0001J\u0012\u0010\u0002\u001a\u00020\u00032\b\u0010\u0004\u001a\u0004\u0018\u00010\u0001H'¨\u0006\u0005"}, d2 = {"Lcom/margelo/nitro/core/Promise$OnResolvedCallback;", "", "onResolved", "", "result", "react-native-nitro-modules_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    @fb.a
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface OnResolvedCallback {
        @Keep
        @fb.a
        void onResolved(Object obj);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: com.margelo.nitro.core.Promise$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0206a extends k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f17251d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Function1 f17252e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Promise f17253i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0206a(Function1 function1, Promise promise, Continuation continuation) {
                super(2, continuation);
                this.f17252e = function1;
                this.f17253i = promise;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new C0206a(this.f17252e, this.f17253i, continuation);
            }

            /* JADX WARN: Multi-variable type inference failed */
            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = ur.b.f();
                int i10 = this.f17251d;
                try {
                    if (i10 != 0) {
                        if (i10 == 1) {
                            kotlin.c.b(obj);
                        } else {
                            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                        }
                    } else {
                        kotlin.c.b(obj);
                        Function1 function1 = this.f17252e;
                        this.f17251d = 1;
                        obj = function1.invoke(this);
                        if (obj == f10) {
                            return f10;
                        }
                    }
                    this.f17253i.resolve(obj);
                } catch (Throwable th2) {
                    this.f17253i.reject(th2);
                }
                return Unit.f31988a;
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((C0206a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public static /* synthetic */ Promise b(a aVar, CoroutineScope coroutineScope, Function1 function1, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                coroutineScope = Promise.defaultScope;
            }
            return aVar.a(coroutineScope, function1);
        }

        public final Promise a(CoroutineScope scope, Function1 run) {
            Intrinsics.checkNotNullParameter(scope, "scope");
            Intrinsics.checkNotNullParameter(run, "run");
            Promise promise = new Promise();
            ms.i.d(scope, null, null, new C0206a(run, promise, null), 3, null);
            return promise;
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class b implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Continuation f17254d;

        b(Continuation continuation) {
            this.f17254d = continuation;
        }

        public final void a(Object obj) {
            this.f17254d.resumeWith(Result.b(obj));
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a(obj);
            return Unit.f31988a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Continuation f17255d;

        c(Continuation continuation) {
            this.f17255d = continuation;
        }

        public final void a(Throwable error) {
            Intrinsics.checkNotNullParameter(error, "error");
            Continuation continuation = this.f17255d;
            Result.a aVar = Result.f31985e;
            continuation.resumeWith(Result.b(kotlin.c.a(error)));
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a((Throwable) obj);
            return Unit.f31988a;
        }
    }

    public Promise() {
        this.mHybridData = initHybrid();
    }

    private final native void addOnRejectedListener(OnRejectedCallback onRejectedCallback);

    private final native void addOnResolvedListener(OnResolvedCallback onResolvedCallback);

    private final native HybridData initHybrid();

    private final native void nativeReject(Throwable th2);

    private final native void nativeResolve(Object obj);

    /* JADX INFO: Access modifiers changed from: private */
    public static final void then$lambda$0(Function1 function1, Object obj) {
        if (obj == null) {
            obj = null;
        }
        if (obj != null) {
            function1.invoke(obj);
            return;
        }
        throw new Error("Failed to cast Object to T!");
    }

    public final Object await(@NotNull Continuation<? super T> continuation) {
        d dVar = new d(ur.b.c(continuation));
        then(new b(dVar));
        m1171catch(new c(dVar));
        Object b10 = dVar.b();
        if (b10 == ur.b.f()) {
            g.c(continuation);
        }
        return b10;
    }

    @NotNull
    /* renamed from: catch  reason: not valid java name */
    public final Promise<T> m1171catch(@NotNull Function1<? super Throwable, Unit> listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        addOnRejectedListener(new com.margelo.nitro.core.c(listener));
        return this;
    }

    public final void reject(@NotNull Throwable error) {
        Intrinsics.checkNotNullParameter(error, "error");
        nativeReject(error);
    }

    public final void resolve(T t10) {
        nativeResolve(t10);
    }

    @NotNull
    public final Promise<T> then(@NotNull final Function1<? super T, Unit> listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        addOnResolvedListener(new OnResolvedCallback() { // from class: com.margelo.nitro.core.b
            @Override // com.margelo.nitro.core.Promise.OnResolvedCallback
            public final void onResolved(Object obj) {
                Promise.then$lambda$0(Function1.this, obj);
            }
        });
        return this;
    }

    @Keep
    @fb.a
    private Promise(HybridData hybridData) {
        this.mHybridData = hybridData;
    }
}
