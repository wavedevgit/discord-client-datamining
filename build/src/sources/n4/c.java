package n4;

import at.s;
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
    private final o4.h f37378a;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f37379d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f37380e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: n4.c$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class C0525a extends Lambda implements Function0 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ c f37382d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ b f37383e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0525a(c cVar, b bVar) {
                super(0);
                this.f37382d = cVar;
                this.f37383e = bVar;
            }

            @Override // kotlin.jvm.functions.Function0
            public /* bridge */ /* synthetic */ Object invoke() {
                m1214invoke();
                return Unit.f32556a;
            }

            /* renamed from: invoke  reason: collision with other method in class */
            public final void m1214invoke() {
                this.f37382d.f37378a.f(this.f37383e);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class b implements m4.a {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ c f37384a;

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ ProducerScope f37385b;

            b(c cVar, ProducerScope producerScope) {
                this.f37384a = cVar;
                this.f37385b = producerScope;
            }

            @Override // m4.a
            public void a(Object obj) {
                Object obj2;
                if (this.f37384a.d(obj)) {
                    obj2 = new b.C0511b(this.f37384a.b());
                } else {
                    obj2 = b.a.f36698a;
                }
                this.f37385b.h().d(obj2);
            }
        }

        a(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(continuation);
            aVar.f37380e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = gs.b.f();
            int i10 = this.f37379d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                ProducerScope producerScope = (ProducerScope) this.f37380e;
                b bVar = new b(c.this, producerScope);
                c.this.f37378a.c(bVar);
                C0525a c0525a = new C0525a(c.this, bVar);
                this.f37379d = 1;
                if (s.a(producerScope, c0525a, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32556a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(ProducerScope producerScope, Continuation continuation) {
            return ((a) create(producerScope, continuation)).invokeSuspend(Unit.f32556a);
        }
    }

    public c(o4.h tracker) {
        Intrinsics.checkNotNullParameter(tracker, "tracker");
        this.f37378a = tracker;
    }

    public abstract int b();

    public abstract boolean c(u uVar);

    public abstract boolean d(Object obj);

    public final boolean e(u workSpec) {
        Intrinsics.checkNotNullParameter(workSpec, "workSpec");
        if (c(workSpec) && d(this.f37378a.e())) {
            return true;
        }
        return false;
    }

    public final Flow f() {
        return bt.g.d(new a(null));
    }
}
