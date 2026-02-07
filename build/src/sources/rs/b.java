package rs;

import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b extends e {

    /* renamed from: p  reason: collision with root package name */
    private final Function2 f49267p;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f49268d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f49269e;

        /* renamed from: o  reason: collision with root package name */
        int f49271o;

        a(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f49269e = obj;
            this.f49271o |= Integer.MIN_VALUE;
            return b.this.e(null, this);
        }
    }

    public /* synthetic */ b(Function2 function2, CoroutineContext coroutineContext, int i10, qs.a aVar, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(function2, (i11 & 2) != 0 ? kotlin.coroutines.e.f32130d : coroutineContext, (i11 & 4) != 0 ? -2 : i10, (i11 & 8) != 0 ? qs.a.f48114d : aVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:14:0x0035  */
    /* JADX WARN: Removed duplicated region for block: B:19:0x0049  */
    /* JADX WARN: Removed duplicated region for block: B:21:0x004c  */
    @Override // rs.e, ss.e
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Object e(kotlinx.coroutines.channels.ProducerScope r5, kotlin.coroutines.Continuation r6) {
        /*
            r4 = this;
            boolean r0 = r6 instanceof rs.b.a
            if (r0 == 0) goto L13
            r0 = r6
            rs.b$a r0 = (rs.b.a) r0
            int r1 = r0.f49271o
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f49271o = r1
            goto L18
        L13:
            rs.b$a r0 = new rs.b$a
            r0.<init>(r6)
        L18:
            java.lang.Object r6 = r0.f49269e
            java.lang.Object r1 = wr.b.f()
            int r2 = r0.f49271o
            r3 = 1
            if (r2 == 0) goto L35
            if (r2 != r3) goto L2d
            java.lang.Object r5 = r0.f49268d
            kotlinx.coroutines.channels.ProducerScope r5 = (kotlinx.coroutines.channels.ProducerScope) r5
            kotlin.c.b(r6)
            goto L43
        L2d:
            java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
            java.lang.String r6 = "call to 'resume' before 'invoke' with coroutine"
            r5.<init>(r6)
            throw r5
        L35:
            kotlin.c.b(r6)
            r0.f49268d = r5
            r0.f49271o = r3
            java.lang.Object r6 = super.e(r5, r0)
            if (r6 != r1) goto L43
            return r1
        L43:
            boolean r5 = r5.y()
            if (r5 == 0) goto L4c
            kotlin.Unit r5 = kotlin.Unit.f32056a
            return r5
        L4c:
            java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
            java.lang.String r6 = "'awaitClose { yourCallbackOrListener.cancel() }' should be used in the end of callbackFlow block.\nOtherwise, a callback/listener may leak in case of external cancellation.\nSee callbackFlow API documentation for the details."
            r5.<init>(r6)
            throw r5
        */
        throw new UnsupportedOperationException("Method not decompiled: rs.b.e(kotlinx.coroutines.channels.ProducerScope, kotlin.coroutines.Continuation):java.lang.Object");
    }

    @Override // ss.e
    protected ss.e h(CoroutineContext coroutineContext, int i10, qs.a aVar) {
        return new b(this.f49267p, coroutineContext, i10, aVar);
    }

    public b(Function2 function2, CoroutineContext coroutineContext, int i10, qs.a aVar) {
        super(function2, coroutineContext, i10, aVar);
        this.f49267p = function2;
    }
}
