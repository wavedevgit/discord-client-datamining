package com.github.yamill.orientation;

import gs.i;
import gs.i0;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Ref;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class f {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f12628d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ long f12629e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Function2 f12630i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Ref.ObjectRef f12631o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ Ref.ObjectRef f12632p;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(long j10, Function2 function2, Ref.ObjectRef objectRef, Ref.ObjectRef objectRef2, Continuation continuation) {
            super(2, continuation);
            this.f12629e = j10;
            this.f12630i = function2;
            this.f12631o = objectRef;
            this.f12632p = objectRef2;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f12629e, this.f12630i, this.f12631o, this.f12632p, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = or.b.f();
            int i10 = this.f12628d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                long j10 = this.f12629e;
                this.f12628d = 1;
                if (i0.a(j10, this) == f10) {
                    return f10;
                }
            }
            this.f12630i.invoke(this.f12631o.element, this.f12632p.element);
            return Unit.f33298a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    public static final Function2 b(final long j10, final CoroutineScope coroutineScope, final Function2 destinationFunction) {
        Intrinsics.checkNotNullParameter(coroutineScope, "coroutineScope");
        Intrinsics.checkNotNullParameter(destinationFunction, "destinationFunction");
        final Ref.ObjectRef objectRef = new Ref.ObjectRef();
        final Ref.ObjectRef objectRef2 = new Ref.ObjectRef();
        final Ref.ObjectRef objectRef3 = new Ref.ObjectRef();
        return new Function2() { // from class: com.github.yamill.orientation.e
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit c10;
                c10 = f.c(Ref.ObjectRef.this, objectRef3, objectRef, coroutineScope, j10, destinationFunction, obj, obj2);
                return c10;
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r7v1, types: [T, kotlinx.coroutines.Job] */
    public static final Unit c(Ref.ObjectRef objectRef, Ref.ObjectRef objectRef2, Ref.ObjectRef objectRef3, CoroutineScope coroutineScope, long j10, Function2 function2, Object obj, Object obj2) {
        ?? d10;
        objectRef.element = obj;
        objectRef2.element = obj2;
        Job job = (Job) objectRef3.element;
        if (job == null || job.isCompleted()) {
            d10 = i.d(coroutineScope, null, null, new a(j10, function2, objectRef, objectRef2, null), 3, null);
            objectRef3.element = d10;
        }
        return Unit.f33298a;
    }
}
