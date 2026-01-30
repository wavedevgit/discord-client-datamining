package androidx.core.view;

import android.view.View;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.sequences.Sequence;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class o0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class a extends kotlin.coroutines.jvm.internal.j implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f3388d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f3389e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ View f3390i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(View view, Continuation continuation) {
            super(2, continuation);
            this.f3390i = view;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(this.f3390i, continuation);
            aVar.f3389e = obj;
            return aVar;
        }

        /* JADX WARN: Code restructure failed: missing block: B:11:0x0034, code lost:
            if (r1.b(r5, r4) == r0) goto L16;
         */
        /* JADX WARN: Code restructure failed: missing block: B:16:0x004c, code lost:
            if (r1.h(r5, r4) == r0) goto L16;
         */
        /* JADX WARN: Code restructure failed: missing block: B:17:0x004e, code lost:
            return r0;
         */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r5) {
            /*
                r4 = this;
                java.lang.Object r0 = or.b.f()
                int r1 = r4.f3388d
                r2 = 2
                r3 = 1
                if (r1 == 0) goto L22
                if (r1 == r3) goto L1a
                if (r1 != r2) goto L12
                kotlin.c.b(r5)
                goto L4f
            L12:
                java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r5.<init>(r0)
                throw r5
            L1a:
                java.lang.Object r1 = r4.f3389e
                kotlin.sequences.j r1 = (kotlin.sequences.j) r1
                kotlin.c.b(r5)
                goto L37
            L22:
                kotlin.c.b(r5)
                java.lang.Object r5 = r4.f3389e
                r1 = r5
                kotlin.sequences.j r1 = (kotlin.sequences.j) r1
                android.view.View r5 = r4.f3390i
                r4.f3389e = r1
                r4.f3388d = r3
                java.lang.Object r5 = r1.b(r5, r4)
                if (r5 != r0) goto L37
                goto L4e
            L37:
                android.view.View r5 = r4.f3390i
                boolean r3 = r5 instanceof android.view.ViewGroup
                if (r3 == 0) goto L4f
                android.view.ViewGroup r5 = (android.view.ViewGroup) r5
                kotlin.sequences.Sequence r5 = androidx.core.view.n0.b(r5)
                r3 = 0
                r4.f3389e = r3
                r4.f3388d = r2
                java.lang.Object r5 = r1.h(r5, r4)
                if (r5 != r0) goto L4f
            L4e:
                return r0
            L4f:
                kotlin.Unit r5 = kotlin.Unit.f33298a
                return r5
            */
            throw new UnsupportedOperationException("Method not decompiled: androidx.core.view.o0.a.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: j */
        public final Object invoke(kotlin.sequences.j jVar, Continuation continuation) {
            return ((a) create(jVar, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    public static final Sequence a(View view) {
        return kotlin.sequences.k.b(new a(view, null));
    }
}
