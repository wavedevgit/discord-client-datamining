package kotlin;

import kotlin.Result;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.coroutines.e;
import kotlin.coroutines.jvm.internal.g;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.TypeIntrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b extends lr.b implements Continuation {

    /* renamed from: d  reason: collision with root package name */
    private Function3 f32466d;

    /* renamed from: e  reason: collision with root package name */
    private Object f32467e;

    /* renamed from: i  reason: collision with root package name */
    private Continuation f32468i;

    /* renamed from: o  reason: collision with root package name */
    private Object f32469o;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public b(Function3 block, Object obj) {
        super(null);
        Object obj2;
        Intrinsics.checkNotNullParameter(block, "block");
        this.f32466d = block;
        this.f32467e = obj;
        Intrinsics.checkNotNull(this, "null cannot be cast to non-null type kotlin.coroutines.Continuation<kotlin.Any?>");
        this.f32468i = this;
        obj2 = a.f32465a;
        this.f32469o = obj2;
    }

    @Override // lr.b
    public Object b(Object obj, Continuation continuation) {
        Intrinsics.checkNotNull(continuation, "null cannot be cast to non-null type kotlin.coroutines.Continuation<kotlin.Any?>");
        this.f32468i = continuation;
        this.f32467e = obj;
        Object f10 = rr.b.f();
        if (f10 == rr.b.f()) {
            g.c(continuation);
        }
        return f10;
    }

    public final Object d() {
        Object obj;
        Object obj2;
        Object invoke;
        while (true) {
            Object obj3 = this.f32469o;
            Continuation continuation = this.f32468i;
            if (continuation != null) {
                obj = a.f32465a;
                if (!Result.d(obj, obj3)) {
                    obj2 = a.f32465a;
                    this.f32469o = obj2;
                    continuation.resumeWith(obj3);
                } else {
                    try {
                        Function3 function3 = this.f32466d;
                        Object obj4 = this.f32467e;
                        if (!(function3 instanceof kotlin.coroutines.jvm.internal.a)) {
                            invoke = rr.b.e(function3, this, obj4, continuation);
                        } else {
                            invoke = ((Function3) TypeIntrinsics.beforeCheckcastToFunctionOfArity(function3, 3)).invoke(this, obj4, continuation);
                        }
                        if (invoke != rr.b.f()) {
                            continuation.resumeWith(Result.b(invoke));
                        }
                    } catch (Throwable th2) {
                        Result.a aVar = Result.f32461e;
                        continuation.resumeWith(Result.b(c.a(th2)));
                    }
                }
            } else {
                c.b(obj3);
                return obj3;
            }
        }
    }

    @Override // kotlin.coroutines.Continuation
    public CoroutineContext getContext() {
        return e.f32538d;
    }

    @Override // kotlin.coroutines.Continuation
    public void resumeWith(Object obj) {
        this.f32468i = null;
        this.f32469o = obj;
    }
}
