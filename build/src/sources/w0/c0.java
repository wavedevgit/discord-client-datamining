package w0;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
import w0.a;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract /* synthetic */ class c0 {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f51995d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f51996e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Function2 f51997i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ q f51998o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Function2 function2, q qVar, Continuation continuation) {
            super(2, continuation);
            this.f51997i = function2;
            this.f51998o = qVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(this.f51997i, this.f51998o, continuation);
            aVar.f51996e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = or.b.f();
            int i10 = this.f51995d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Function2 function2 = this.f51997i;
                v vVar = new v(this.f51998o, ((CoroutineScope) this.f51996e).getCoroutineContext());
                this.f51995d = 1;
                if (function2.invoke(vVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f33282a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f51999d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f52000e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Function2 f52001i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ q f52002o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(Function2 function2, q qVar, Continuation continuation) {
            super(2, continuation);
            this.f52001i = function2;
            this.f52002o = qVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            b bVar = new b(this.f52001i, this.f52002o, continuation);
            bVar.f52000e = obj;
            return bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = or.b.f();
            int i10 = this.f51999d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Function2 function2 = this.f52001i;
                v vVar = new v(this.f52002o, ((CoroutineScope) this.f52000e).getCoroutineContext());
                this.f51999d = 1;
                if (function2.invoke(vVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f33282a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f33282a);
        }
    }

    public static final g0 a(Object obj, Object obj2, Object obj3, Object obj4, Function2 function2, w0.a aVar, int i10) {
        if (c.c()) {
            c.e(1807205155, i10, -1, "androidx.compose.runtime.produceState (ProduceState.kt:170)");
        }
        Object d10 = aVar.d();
        a.C0708a c0708a = w0.a.f51985a;
        if (d10 == c0708a.a()) {
            d10 = e0.b(obj, null, 2, null);
            aVar.c(d10);
        }
        q qVar = (q) d10;
        boolean e10 = aVar.e(function2);
        Object d11 = aVar.d();
        if (e10 || d11 == c0708a.a()) {
            d11 = new b(function2, qVar, null);
            aVar.c(d11);
        }
        i.b(obj2, obj3, obj4, (Function2) d11, aVar, (i10 >> 3) & 1022);
        if (c.c()) {
            c.d();
        }
        return qVar;
    }

    public static final g0 b(Object obj, Object obj2, Function2 function2, w0.a aVar, int i10) {
        if (c.c()) {
            c.e(-1928268701, i10, -1, "androidx.compose.runtime.produceState (ProduceState.kt:107)");
        }
        Object d10 = aVar.d();
        a.C0708a c0708a = w0.a.f51985a;
        if (d10 == c0708a.a()) {
            d10 = e0.b(obj, null, 2, null);
            aVar.c(d10);
        }
        q qVar = (q) d10;
        boolean e10 = aVar.e(function2);
        Object d11 = aVar.d();
        if (e10 || d11 == c0708a.a()) {
            d11 = new a(function2, qVar, null);
            aVar.c(d11);
        }
        i.d(obj2, (Function2) d11, aVar, (i10 >> 3) & 14);
        if (c.c()) {
            c.d();
        }
        return qVar;
    }
}
