package n4;

import is.s;
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
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class c {

    /* renamed from: a  reason: collision with root package name */
    private final o4.h f39743a;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f39744d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f39745e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: n4.c$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0508a extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ c f39747d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ b f39748e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0508a(c cVar, b bVar) {
                super(0);
                this.f39747d = cVar;
                this.f39748e = bVar;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1211invoke();
                return Unit.f33298a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1211invoke() {
                this.f39747d.f39743a.f(this.f39748e);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class b implements m4.a {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ c f39749a;

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ ProducerScope f39750b;

            b(c cVar, ProducerScope producerScope) {
                this.f39749a = cVar;
                this.f39750b = producerScope;
            }

            @Override // m4.a
            public void a(Object obj) {
                Object obj2;
                if (this.f39749a.d(obj)) {
                    obj2 = new b.C0491b(this.f39749a.b());
                } else {
                    obj2 = b.a.f37826a;
                }
                this.f39750b.x().e(obj2);
            }
        }

        a(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(continuation);
            aVar.f39745e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = or.b.f();
            int i10 = this.f39744d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                ProducerScope producerScope = (ProducerScope) this.f39745e;
                b bVar = new b(c.this, producerScope);
                c.this.f39743a.c(bVar);
                C0508a c0508a = new C0508a(c.this, bVar);
                this.f39744d = 1;
                if (s.a(producerScope, c0508a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f33298a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(ProducerScope producerScope, Continuation continuation) {
            return ((a) create(producerScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    public c(o4.h tracker) {
        Intrinsics.checkNotNullParameter(tracker, "tracker");
        this.f39743a = tracker;
    }

    public abstract int b();

    public abstract boolean c(u uVar);

    public abstract boolean d(Object obj);

    public final boolean e(u workSpec) {
        Intrinsics.checkNotNullParameter(workSpec, "workSpec");
        if (c(workSpec) && d(this.f39743a.e())) {
            return true;
        }
        return false;
    }

    public final Flow f() {
        return js.g.d(new a(null));
    }
}
