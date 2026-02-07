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
import m4.b;
import p4.u;
import qs.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class c {

    /* renamed from: a  reason: collision with root package name */
    private final o4.h f38508a;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f38509d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f38510e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: n4.c$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0530a extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ c f38512d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ b f38513e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0530a(c cVar, b bVar) {
                super(0);
                this.f38512d = cVar;
                this.f38513e = bVar;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1212invoke();
                return Unit.f32056a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1212invoke() {
                this.f38512d.f38508a.f(this.f38513e);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class b implements m4.a {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ c f38514a;

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ ProducerScope f38515b;

            b(c cVar, ProducerScope producerScope) {
                this.f38514a = cVar;
                this.f38515b = producerScope;
            }

            @Override // m4.a
            public void a(Object obj) {
                Object obj2;
                if (this.f38514a.d(obj)) {
                    obj2 = new b.C0497b(this.f38514a.b());
                } else {
                    obj2 = b.a.f36895a;
                }
                this.f38515b.g().i(obj2);
            }
        }

        a(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(continuation);
            aVar.f38510e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = wr.b.f();
            int i10 = this.f38509d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                ProducerScope producerScope = (ProducerScope) this.f38510e;
                b bVar = new b(c.this, producerScope);
                c.this.f38508a.c(bVar);
                C0530a c0530a = new C0530a(c.this, bVar);
                this.f38509d = 1;
                if (s.a(producerScope, c0530a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32056a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(ProducerScope producerScope, Continuation continuation) {
            return ((a) create(producerScope, continuation)).invokeSuspend(Unit.f32056a);
        }
    }

    public c(o4.h tracker) {
        Intrinsics.checkNotNullParameter(tracker, "tracker");
        this.f38508a = tracker;
    }

    public abstract int b();

    public abstract boolean c(u uVar);

    public abstract boolean d(Object obj);

    public final boolean e(u workSpec) {
        Intrinsics.checkNotNullParameter(workSpec, "workSpec");
        if (c(workSpec) && d(this.f38508a.e())) {
            return true;
        }
        return false;
    }

    public final Flow f() {
        return rs.g.d(new a(null));
    }
}
