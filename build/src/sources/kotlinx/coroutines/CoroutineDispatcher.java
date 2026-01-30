package kotlinx.coroutines;

import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.coroutines.d;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class CoroutineDispatcher extends kotlin.coroutines.a implements kotlin.coroutines.d {

    /* renamed from: e  reason: collision with root package name */
    public static final a f36306e = new a(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends kotlin.coroutines.b {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final CoroutineDispatcher d(CoroutineContext.Element element) {
            if (element instanceof CoroutineDispatcher) {
                return (CoroutineDispatcher) element;
            }
            return null;
        }

        private a() {
            super(kotlin.coroutines.d.f33370h, new Function1() { // from class: gs.y
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    CoroutineDispatcher d10;
                    d10 = CoroutineDispatcher.a.d((CoroutineContext.Element) obj);
                    return d10;
                }
            });
        }
    }

    public CoroutineDispatcher() {
        super(kotlin.coroutines.d.f33370h);
    }

    public static /* synthetic */ CoroutineDispatcher c2(CoroutineDispatcher coroutineDispatcher, int i10, String str, int i11, Object obj) {
        if (obj == null) {
            if ((i11 & 2) != 0) {
                str = null;
            }
            return coroutineDispatcher.b2(i10, str);
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: limitedParallelism");
    }

    @Override // kotlin.coroutines.d
    public final Continuation E(Continuation continuation) {
        return new ls.i(this, continuation);
    }

    public abstract void E1(CoroutineContext coroutineContext, Runnable runnable);

    public void U1(CoroutineContext coroutineContext, Runnable runnable) {
        ls.j.c(this, coroutineContext, runnable);
    }

    public boolean W1(CoroutineContext coroutineContext) {
        return true;
    }

    public /* synthetic */ CoroutineDispatcher Y1(int i10) {
        return b2(i10, null);
    }

    public CoroutineDispatcher b2(int i10, String str) {
        ls.m.a(i10);
        return new ls.l(this, i10, str);
    }

    @Override // kotlin.coroutines.a, kotlin.coroutines.CoroutineContext.Element, kotlin.coroutines.CoroutineContext
    public CoroutineContext.Element l(CoroutineContext.b bVar) {
        return d.a.a(this, bVar);
    }

    @Override // kotlin.coroutines.d
    public final void n(Continuation continuation) {
        Intrinsics.checkNotNull(continuation, "null cannot be cast to non-null type kotlinx.coroutines.internal.DispatchedContinuation<*>");
        ((ls.i) continuation).x();
    }

    public String toString() {
        return gs.e0.a(this) + '@' + gs.e0.b(this);
    }

    @Override // kotlin.coroutines.a, kotlin.coroutines.CoroutineContext
    public CoroutineContext x1(CoroutineContext.b bVar) {
        return d.a.b(this, bVar);
    }
}
