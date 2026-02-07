package un;

import android.content.Context;
import com.google.common.util.concurrent.ListenableFuture;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    public static final m f51792a = new m();

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        /* synthetic */ Object f51793d;

        /* renamed from: i  reason: collision with root package name */
        int f51795i;

        a(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f51793d = obj;
            this.f51795i |= Integer.MIN_VALUE;
            return m.this.b(null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f51796d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ o0.g f51797e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(o0.g gVar, Continuation continuation) {
            super(2, continuation);
            this.f51797e = gVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new b(this.f51797e, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            wr.b.f();
            if (this.f51796d == 0) {
                kotlin.c.b(obj);
                try {
                    this.f51797e.y();
                } catch (x.o0 unused) {
                }
                return Unit.f32056a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f51798d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Context f51799e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(Context context, Continuation continuation) {
            super(2, continuation);
            this.f51799e = context;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new c(this.f51799e, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            wr.b.f();
            if (this.f51798d == 0) {
                kotlin.c.b(obj);
                return o0.g.f41349i.b(this.f51799e);
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    private m() {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final o0.g c(ListenableFuture listenableFuture) {
        return (o0.g) listenableFuture.get();
    }

    /* JADX WARN: Code restructure failed: missing block: B:19:0x0052, code lost:
        if (r9 == r1) goto L20;
     */
    /* JADX WARN: Code restructure failed: missing block: B:22:0x0066, code lost:
        if (r9 != r1) goto L18;
     */
    /* JADX WARN: Code restructure failed: missing block: B:25:0x007a, code lost:
        if (os.g.g(r8, r2, r0) == r1) goto L20;
     */
    /* JADX WARN: Code restructure failed: missing block: B:26:0x007c, code lost:
        return r1;
     */
    /* JADX WARN: Removed duplicated region for block: B:10:0x0026  */
    /* JADX WARN: Removed duplicated region for block: B:18:0x0040  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final java.lang.Object b(android.content.Context r8, kotlin.coroutines.Continuation r9) {
        /*
            r7 = this;
            boolean r0 = r9 instanceof un.m.a
            if (r0 == 0) goto L13
            r0 = r9
            un.m$a r0 = (un.m.a) r0
            int r1 = r0.f51795i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f51795i = r1
            goto L18
        L13:
            un.m$a r0 = new un.m$a
            r0.<init>(r9)
        L18:
            java.lang.Object r9 = r0.f51793d
            java.lang.Object r1 = wr.b.f()
            int r2 = r0.f51795i
            r3 = 0
            r4 = 3
            r5 = 2
            r6 = 1
            if (r2 == 0) goto L40
            if (r2 == r6) goto L3c
            if (r2 == r5) goto L38
            if (r2 != r4) goto L30
            kotlin.c.b(r9)
            goto L7d
        L30:
            java.lang.IllegalStateException r8 = new java.lang.IllegalStateException
            java.lang.String r9 = "call to 'resume' before 'invoke' with coroutine"
            r8.<init>(r9)
            throw r8
        L38:
            kotlin.c.b(r9)
            goto L69
        L3c:
            kotlin.c.b(r9)
            goto L55
        L40:
            kotlin.c.b(r9)
            os.c1 r9 = os.m0.c()
            un.m$c r2 = new un.m$c
            r2.<init>(r8, r3)
            r0.f51795i = r6
            java.lang.Object r9 = os.g.g(r9, r2, r0)
            if (r9 != r1) goto L55
            goto L7c
        L55:
            com.google.common.util.concurrent.ListenableFuture r9 = (com.google.common.util.concurrent.ListenableFuture) r9
            kotlinx.coroutines.CoroutineDispatcher r8 = os.m0.b()
            un.l r2 = new un.l
            r2.<init>()
            r0.f51795i = r5
            java.lang.Object r9 = os.x0.b(r8, r2, r0)
            if (r9 != r1) goto L69
            goto L7c
        L69:
            o0.g r9 = (o0.g) r9
            os.c1 r8 = os.m0.c()
            un.m$b r2 = new un.m$b
            r2.<init>(r9, r3)
            r0.f51795i = r4
            java.lang.Object r8 = os.g.g(r8, r2, r0)
            if (r8 != r1) goto L7d
        L7c:
            return r1
        L7d:
            kotlin.Unit r8 = kotlin.Unit.f32056a
            return r8
        */
        throw new UnsupportedOperationException("Method not decompiled: un.m.b(android.content.Context, kotlin.coroutines.Continuation):java.lang.Object");
    }
}
