package n4;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlinx.coroutines.channels.ProducerScope;
import kotlinx.coroutines.flow.Flow;
import ls.s;
import m4.b;
import p4.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class c {

    /* renamed from: a  reason: collision with root package name */
    private final o4.h f39645a;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f39646d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f39647e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: n4.c$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0514a extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ c f39649d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ b f39650e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0514a(c cVar, b bVar) {
                super(0);
                this.f39649d = cVar;
                this.f39650e = bVar;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1212invoke();
                return Unit.f32464a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1212invoke() {
                this.f39649d.f39645a.f(this.f39650e);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class b implements m4.a {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ c f39651a;

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ ProducerScope f39652b;

            b(c cVar, ProducerScope producerScope) {
                this.f39651a = cVar;
                this.f39652b = producerScope;
            }

            @Override // m4.a
            public void a(Object obj) {
                Object obj2;
                if (this.f39651a.d(obj)) {
                    obj2 = new b.C0481b(this.f39651a.b());
                } else {
                    obj2 = b.a.f37603a;
                }
                this.f39652b.x().i(obj2);
            }
        }

        a(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(continuation);
            aVar.f39647e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = rr.b.f();
            int i10 = this.f39646d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                ProducerScope producerScope = (ProducerScope) this.f39647e;
                b bVar = new b(c.this, producerScope);
                c.this.f39645a.c(bVar);
                C0514a c0514a = new C0514a(c.this, bVar);
                this.f39646d = 1;
                if (s.a(producerScope, c0514a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32464a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(ProducerScope producerScope, Continuation continuation) {
            return ((a) create(producerScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    public c(o4.h tracker) {
        Intrinsics.checkNotNullParameter(tracker, "tracker");
        this.f39645a = tracker;
    }

    public abstract int b();

    public abstract boolean c(u uVar);

    public abstract boolean d(Object obj);

    public final boolean e(u workSpec) {
        Intrinsics.checkNotNullParameter(workSpec, "workSpec");
        if (c(workSpec) && d(this.f39645a.e())) {
            return true;
        }
        return false;
    }

    public final Flow f() {
        return ms.g.d(new a(null));
    }
}
