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
import rs.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class c {

    /* renamed from: a  reason: collision with root package name */
    private final o4.h f37805a;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f37806d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f37807e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: n4.c$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0548a extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ c f37809d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ b f37810e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0548a(c cVar, b bVar) {
                super(0);
                this.f37809d = cVar;
                this.f37810e = bVar;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1212invoke();
                return Unit.f31765a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1212invoke() {
                this.f37809d.f37805a.f(this.f37810e);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class b implements m4.a {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ c f37811a;

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ ProducerScope f37812b;

            b(c cVar, ProducerScope producerScope) {
                this.f37811a = cVar;
                this.f37812b = producerScope;
            }

            @Override // m4.a
            public void a(Object obj) {
                Object obj2;
                if (this.f37811a.d(obj)) {
                    obj2 = new b.C0529b(this.f37811a.b());
                } else {
                    obj2 = b.a.f36754a;
                }
                this.f37812b.g().i(obj2);
            }
        }

        a(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(continuation);
            aVar.f37807e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = xr.b.f();
            int i10 = this.f37806d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                ProducerScope producerScope = (ProducerScope) this.f37807e;
                b bVar = new b(c.this, producerScope);
                c.this.f37805a.c(bVar);
                C0548a c0548a = new C0548a(c.this, bVar);
                this.f37806d = 1;
                if (s.a(producerScope, c0548a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f31765a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(ProducerScope producerScope, Continuation continuation) {
            return ((a) create(producerScope, continuation)).invokeSuspend(Unit.f31765a);
        }
    }

    public c(o4.h tracker) {
        Intrinsics.checkNotNullParameter(tracker, "tracker");
        this.f37805a = tracker;
    }

    public abstract int b();

    public abstract boolean c(u uVar);

    public abstract boolean d(Object obj);

    public final boolean e(u workSpec) {
        Intrinsics.checkNotNullParameter(workSpec, "workSpec");
        if (c(workSpec) && d(this.f37805a.e())) {
            return true;
        }
        return false;
    }

    public final Flow f() {
        return ss.g.d(new a(null));
    }
}
