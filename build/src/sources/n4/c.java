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
import os.s;
import p4.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class c {

    /* renamed from: a  reason: collision with root package name */
    private final o4.h f39105a;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f39106d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f39107e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: n4.c$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0516a extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ c f39109d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ b f39110e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0516a(c cVar, b bVar) {
                super(0);
                this.f39109d = cVar;
                this.f39110e = bVar;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1212invoke();
                return Unit.f31988a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1212invoke() {
                this.f39109d.f39105a.f(this.f39110e);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class b implements m4.a {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ c f39111a;

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ ProducerScope f39112b;

            b(c cVar, ProducerScope producerScope) {
                this.f39111a = cVar;
                this.f39112b = producerScope;
            }

            @Override // m4.a
            public void a(Object obj) {
                Object obj2;
                if (this.f39111a.d(obj)) {
                    obj2 = new b.C0493b(this.f39111a.b());
                } else {
                    obj2 = b.a.f37265a;
                }
                this.f39112b.m().i(obj2);
            }
        }

        a(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(continuation);
            aVar.f39107e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = ur.b.f();
            int i10 = this.f39106d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                ProducerScope producerScope = (ProducerScope) this.f39107e;
                b bVar = new b(c.this, producerScope);
                c.this.f39105a.c(bVar);
                C0516a c0516a = new C0516a(c.this, bVar);
                this.f39106d = 1;
                if (s.a(producerScope, c0516a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f31988a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(ProducerScope producerScope, Continuation continuation) {
            return ((a) create(producerScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    public c(o4.h tracker) {
        Intrinsics.checkNotNullParameter(tracker, "tracker");
        this.f39105a = tracker;
    }

    public abstract int b();

    public abstract boolean c(u uVar);

    public abstract boolean d(Object obj);

    public final boolean e(u workSpec) {
        Intrinsics.checkNotNullParameter(workSpec, "workSpec");
        if (c(workSpec) && d(this.f39105a.e())) {
            return true;
        }
        return false;
    }

    public final Flow f() {
        return ps.g.d(new a(null));
    }
}
