package k5;

import androidx.lifecycle.DefaultLifecycleObserver;
import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleOwner;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlinx.coroutines.CancellableContinuation;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class g {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f32169d;

        /* renamed from: e  reason: collision with root package name */
        Object f32170e;

        /* renamed from: i  reason: collision with root package name */
        /* synthetic */ Object f32171i;

        /* renamed from: o  reason: collision with root package name */
        int f32172o;

        a(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f32171i = obj;
            this.f32172o |= Integer.MIN_VALUE;
            return g.a(null, this);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b implements DefaultLifecycleObserver {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ CancellableContinuation f32173d;

        b(CancellableContinuation cancellableContinuation) {
            this.f32173d = cancellableContinuation;
        }

        @Override // androidx.lifecycle.DefaultLifecycleObserver
        public void onStart(LifecycleOwner lifecycleOwner) {
            CancellableContinuation cancellableContinuation = this.f32173d;
            Result.a aVar = Result.f32461e;
            cancellableContinuation.resumeWith(Result.b(Unit.f32464a));
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:18:0x003b  */
    /* JADX WARN: Removed duplicated region for block: B:34:0x0092  */
    /* JADX WARN: Removed duplicated region for block: B:39:0x009e  */
    /* JADX WARN: Type inference failed for: r3v1, types: [T, k5.g$b, java.lang.Object] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final java.lang.Object a(androidx.lifecycle.Lifecycle r6, kotlin.coroutines.Continuation r7) {
        /*
            boolean r0 = r7 instanceof k5.g.a
            if (r0 == 0) goto L13
            r0 = r7
            k5.g$a r0 = (k5.g.a) r0
            int r1 = r0.f32172o
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f32172o = r1
            goto L18
        L13:
            k5.g$a r0 = new k5.g$a
            r0.<init>(r7)
        L18:
            java.lang.Object r7 = r0.f32171i
            java.lang.Object r1 = rr.b.f()
            int r2 = r0.f32172o
            r3 = 1
            if (r2 == 0) goto L3b
            if (r2 != r3) goto L33
            java.lang.Object r6 = r0.f32170e
            kotlin.jvm.internal.Ref$ObjectRef r6 = (kotlin.jvm.internal.Ref.ObjectRef) r6
            java.lang.Object r0 = r0.f32169d
            androidx.lifecycle.Lifecycle r0 = (androidx.lifecycle.Lifecycle) r0
            kotlin.c.b(r7)     // Catch: java.lang.Throwable -> L31
            goto L8c
        L31:
            r7 = move-exception
            goto L98
        L33:
            java.lang.IllegalStateException r6 = new java.lang.IllegalStateException
            java.lang.String r7 = "call to 'resume' before 'invoke' with coroutine"
            r6.<init>(r7)
            throw r6
        L3b:
            kotlin.c.b(r7)
            androidx.lifecycle.Lifecycle$State r7 = r6.b()
            androidx.lifecycle.Lifecycle$State r2 = androidx.lifecycle.Lifecycle.State.f4408o
            boolean r7 = r7.d(r2)
            if (r7 == 0) goto L4d
            kotlin.Unit r6 = kotlin.Unit.f32464a
            return r6
        L4d:
            kotlin.jvm.internal.Ref$ObjectRef r7 = new kotlin.jvm.internal.Ref$ObjectRef
            r7.<init>()
            r0.f32169d = r6     // Catch: java.lang.Throwable -> L81
            r0.f32170e = r7     // Catch: java.lang.Throwable -> L81
            r0.f32172o = r3     // Catch: java.lang.Throwable -> L81
            kotlinx.coroutines.e r2 = new kotlinx.coroutines.e     // Catch: java.lang.Throwable -> L81
            kotlin.coroutines.Continuation r4 = rr.b.c(r0)     // Catch: java.lang.Throwable -> L81
            r2.<init>(r4, r3)     // Catch: java.lang.Throwable -> L81
            r2.H()     // Catch: java.lang.Throwable -> L81
            k5.g$b r3 = new k5.g$b     // Catch: java.lang.Throwable -> L81
            r3.<init>(r2)     // Catch: java.lang.Throwable -> L81
            r7.element = r3     // Catch: java.lang.Throwable -> L81
            kotlin.jvm.internal.Intrinsics.checkNotNull(r3)     // Catch: java.lang.Throwable -> L81
            androidx.lifecycle.o r3 = (androidx.lifecycle.o) r3     // Catch: java.lang.Throwable -> L81
            r6.a(r3)     // Catch: java.lang.Throwable -> L81
            java.lang.Object r2 = r2.B()     // Catch: java.lang.Throwable -> L81
            java.lang.Object r3 = rr.b.f()     // Catch: java.lang.Throwable -> L81
            if (r2 != r3) goto L87
            kotlin.coroutines.jvm.internal.g.c(r0)     // Catch: java.lang.Throwable -> L81
            goto L87
        L81:
            r0 = move-exception
            r5 = r0
            r0 = r6
            r6 = r7
            r7 = r5
            goto L98
        L87:
            if (r2 != r1) goto L8a
            return r1
        L8a:
            r0 = r6
            r6 = r7
        L8c:
            T r6 = r6.element
            androidx.lifecycle.o r6 = (androidx.lifecycle.o) r6
            if (r6 == 0) goto L95
            r0.d(r6)
        L95:
            kotlin.Unit r6 = kotlin.Unit.f32464a
            return r6
        L98:
            T r6 = r6.element
            androidx.lifecycle.o r6 = (androidx.lifecycle.o) r6
            if (r6 == 0) goto La1
            r0.d(r6)
        La1:
            throw r7
        */
        throw new UnsupportedOperationException("Method not decompiled: k5.g.a(androidx.lifecycle.Lifecycle, kotlin.coroutines.Continuation):java.lang.Object");
    }

    public static final void b(Lifecycle lifecycle, androidx.lifecycle.o oVar) {
        lifecycle.d(oVar);
        lifecycle.a(oVar);
    }
}
