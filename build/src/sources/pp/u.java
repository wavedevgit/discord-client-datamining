package pp;

import kotlin.coroutines.Continuation;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class u {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        int f46240d;

        /* renamed from: e  reason: collision with root package name */
        int f46241e;

        /* renamed from: i  reason: collision with root package name */
        Object f46242i;

        /* renamed from: o  reason: collision with root package name */
        /* synthetic */ Object f46243o;

        /* renamed from: p  reason: collision with root package name */
        int f46244p;

        a(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f46243o = obj;
            this.f46244p |= Integer.MIN_VALUE;
            return u.a(0, null, this);
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:14:0x0039  */
    /* JADX WARN: Removed duplicated region for block: B:16:0x0043  */
    /* JADX WARN: Removed duplicated region for block: B:23:0x0062  */
    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:19:0x0056 -> B:20:0x0059). Please submit an issue!!! */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final java.lang.Object a(int r5, kotlin.jvm.functions.Function2 r6, kotlin.coroutines.Continuation r7) {
        /*
            boolean r0 = r7 instanceof pp.u.a
            if (r0 == 0) goto L13
            r0 = r7
            pp.u$a r0 = (pp.u.a) r0
            int r1 = r0.f46244p
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f46244p = r1
            goto L18
        L13:
            pp.u$a r0 = new pp.u$a
            r0.<init>(r7)
        L18:
            java.lang.Object r7 = r0.f46243o
            java.lang.Object r1 = ur.b.f()
            int r2 = r0.f46244p
            r3 = 1
            if (r2 == 0) goto L39
            if (r2 != r3) goto L31
            int r5 = r0.f46241e
            int r6 = r0.f46240d
            java.lang.Object r2 = r0.f46242i
            kotlin.jvm.functions.Function2 r2 = (kotlin.jvm.functions.Function2) r2
            kotlin.c.b(r7)
            goto L59
        L31:
            java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
            java.lang.String r6 = "call to 'resume' before 'invoke' with coroutine"
            r5.<init>(r6)
            throw r5
        L39:
            kotlin.c.b(r7)
            r7 = 0
            r4 = r6
            r6 = r5
            r5 = r7
            r7 = r4
        L41:
            if (r5 >= r6) goto L65
            java.lang.Integer r2 = kotlin.coroutines.jvm.internal.b.e(r5)
            r0.f46242i = r7
            r0.f46240d = r6
            r0.f46241e = r5
            r0.f46244p = r3
            java.lang.Object r2 = r7.invoke(r2, r0)
            if (r2 != r1) goto L56
            return r1
        L56:
            r4 = r2
            r2 = r7
            r7 = r4
        L59:
            java.lang.Boolean r7 = (java.lang.Boolean) r7
            boolean r7 = r7.booleanValue()
            if (r7 != 0) goto L62
            goto L65
        L62:
            int r5 = r5 + r3
            r7 = r2
            goto L41
        L65:
            kotlin.Unit r5 = kotlin.Unit.f31988a
            return r5
        */
        throw new UnsupportedOperationException("Method not decompiled: pp.u.a(int, kotlin.jvm.functions.Function2, kotlin.coroutines.Continuation):java.lang.Object");
    }
}
