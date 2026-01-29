package um;

import java.util.List;
import java.util.ListIterator;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.functions.Function4;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlinx.coroutines.CoroutineScope;
import tm.q;
import tm.r;
import tm.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements t {

    /* renamed from: a  reason: collision with root package name */
    private final List f50389a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends Lambda implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ t f50390d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function2 f50391e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ t.c f50392i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(t tVar, Function2 function2, t.c cVar) {
            super(2);
            this.f50390d = tVar;
            this.f50391e = function2;
            this.f50392i = cVar;
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: a */
        public final Object invoke(Object obj, tm.i iVar) {
            return this.f50390d.a(obj, iVar, this.f50391e, this.f50392i);
        }
    }

    /* renamed from: um.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class C0665b extends Lambda implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ t f50393d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function3 f50394e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ t.c f50395i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        C0665b(t tVar, Function3 function3, t.c cVar) {
            super(3);
            this.f50393d = tVar;
            this.f50394e = function3;
            this.f50395i = cVar;
        }

        @Override // kotlin.jvm.functions.Function3
        public final Object invoke(Object obj, Object obj2, Object obj3) {
            return this.f50393d.c(obj, obj2, obj3, this.f50394e, this.f50395i);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends Lambda implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ t f50396d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ tm.a f50397e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ t.c f50398i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ b f50399o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ Function3 f50400p;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends Lambda implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ b f50401d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ t.b f50402e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Function3 f50403i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(b bVar, t.b bVar2, Function3 function3) {
                super(3);
                this.f50401d = bVar;
                this.f50402e = bVar2;
                this.f50403i = function3;
            }

            @Override // kotlin.jvm.functions.Function3
            /* renamed from: a */
            public final Object invoke(Object obj, Object obj2, t.b bVar) {
                return this.f50403i.invoke(obj, obj2, this.f50401d.g(this.f50402e, bVar));
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(t tVar, tm.a aVar, t.c cVar, b bVar, Function3 function3) {
            super(3);
            this.f50396d = tVar;
            this.f50397e = aVar;
            this.f50398i = cVar;
            this.f50399o = bVar;
            this.f50400p = function3;
        }

        @Override // kotlin.jvm.functions.Function3
        /* renamed from: a */
        public final Object invoke(Object obj, Object obj2, t.b bVar) {
            return this.f50396d.e(obj, obj2, this.f50397e, new a(this.f50399o, bVar, this.f50400p), this.f50398i);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ t f50404d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function1 f50405e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ t.c f50406i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(t tVar, Function1 function1, t.c cVar) {
            super(1);
            this.f50404d = tVar;
            this.f50405e = function1;
            this.f50406i = cVar;
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final tm.i invoke(Object obj) {
            return this.f50404d.d(obj, this.f50405e, this.f50406i);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e implements t.b {

        /* renamed from: a  reason: collision with root package name */
        private final t.b f50407a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ t.b f50408b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ t.b f50409c;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ t.b f50410d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Function1 f50411e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(t.b bVar, Function1 function1) {
                super(1);
                this.f50410d = bVar;
                this.f50411e = function1;
            }

            public final void a(r interceptedAction) {
                Intrinsics.checkNotNullParameter(interceptedAction, "interceptedAction");
                this.f50410d.a(interceptedAction, this.f50411e);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((r) obj);
                return Unit.f33282a;
            }
        }

        /* renamed from: um.b$e$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class C0666b extends Lambda implements Function4 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ t.b f50412d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Function4 f50413e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0666b(t.b bVar, Function4 function4) {
                super(4);
                this.f50412d = bVar;
                this.f50413e = function4;
            }

            @Override // kotlin.jvm.functions.Function4
            /* renamed from: a */
            public final Object invoke(q c10, Object obj, String k10, Function1 h10) {
                Intrinsics.checkNotNullParameter(c10, "c");
                Intrinsics.checkNotNullParameter(k10, "k");
                Intrinsics.checkNotNullParameter(h10, "h");
                return this.f50412d.c(c10, obj, k10, h10, this.f50413e);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class c extends Lambda implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ t.b f50414d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Function2 f50415e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            c(t.b bVar, Function2 function2) {
                super(2);
                this.f50414d = bVar;
                this.f50415e = function2;
            }

            public final void a(String iKey, Function1 iSideEffect) {
                Intrinsics.checkNotNullParameter(iKey, "iKey");
                Intrinsics.checkNotNullParameter(iSideEffect, "iSideEffect");
                this.f50414d.b(iKey, iSideEffect, this.f50415e);
            }

            @Override // kotlin.jvm.functions.Function2
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
                a((String) obj, (Function1) obj2);
                return Unit.f33282a;
            }
        }

        e(t.b bVar, t.b bVar2) {
            this.f50408b = bVar;
            this.f50409c = bVar2;
            Intrinsics.checkNotNull(bVar);
            this.f50407a = bVar;
        }

        @Override // tm.t.b
        public void a(r action, Function1 proceed) {
            Intrinsics.checkNotNullParameter(action, "action");
            Intrinsics.checkNotNullParameter(proceed, "proceed");
            this.f50407a.a(action, new a(this.f50409c, proceed));
        }

        @Override // tm.t.b
        public void b(String key, Function1 sideEffect, Function2 proceed) {
            Intrinsics.checkNotNullParameter(key, "key");
            Intrinsics.checkNotNullParameter(sideEffect, "sideEffect");
            Intrinsics.checkNotNullParameter(proceed, "proceed");
            this.f50407a.b(key, sideEffect, new c(this.f50409c, proceed));
        }

        @Override // tm.t.b
        public Object c(q child, Object obj, String key, Function1 handler, Function4 proceed) {
            Intrinsics.checkNotNullParameter(child, "child");
            Intrinsics.checkNotNullParameter(key, "key");
            Intrinsics.checkNotNullParameter(handler, "handler");
            Intrinsics.checkNotNullParameter(proceed, "proceed");
            return this.f50407a.c(child, obj, key, handler, new C0666b(this.f50409c, proceed));
        }
    }

    public b(List interceptors) {
        Intrinsics.checkNotNullParameter(interceptors, "interceptors");
        this.f50389a = interceptors;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final t.b g(t.b bVar, t.b bVar2) {
        if (bVar == null && bVar2 == null) {
            return null;
        }
        if (bVar == null) {
            return bVar2;
        }
        if (bVar2 == null) {
            return bVar;
        }
        return new e(bVar, bVar2);
    }

    @Override // tm.t
    public Object a(Object obj, tm.i iVar, Function2 proceed, t.c session) {
        Intrinsics.checkNotNullParameter(proceed, "proceed");
        Intrinsics.checkNotNullParameter(session, "session");
        List list = this.f50389a;
        if (!list.isEmpty()) {
            ListIterator listIterator = list.listIterator(list.size());
            while (listIterator.hasPrevious()) {
                proceed = new a((t) listIterator.previous(), proceed, session);
            }
        }
        return proceed.invoke(obj, iVar);
    }

    @Override // tm.t
    public void b(CoroutineScope workflowScope, t.c session) {
        Intrinsics.checkNotNullParameter(workflowScope, "workflowScope");
        Intrinsics.checkNotNullParameter(session, "session");
        for (t tVar : this.f50389a) {
            tVar.b(workflowScope, session);
        }
    }

    @Override // tm.t
    public Object c(Object obj, Object obj2, Object obj3, Function3 proceed, t.c session) {
        Intrinsics.checkNotNullParameter(proceed, "proceed");
        Intrinsics.checkNotNullParameter(session, "session");
        List list = this.f50389a;
        if (!list.isEmpty()) {
            ListIterator listIterator = list.listIterator(list.size());
            while (listIterator.hasPrevious()) {
                proceed = new C0665b((t) listIterator.previous(), proceed, session);
            }
        }
        return proceed.invoke(obj, obj2, obj3);
    }

    @Override // tm.t
    public tm.i d(Object obj, Function1 proceed, t.c session) {
        Intrinsics.checkNotNullParameter(proceed, "proceed");
        Intrinsics.checkNotNullParameter(session, "session");
        List list = this.f50389a;
        if (!list.isEmpty()) {
            ListIterator listIterator = list.listIterator(list.size());
            while (listIterator.hasPrevious()) {
                proceed = new d((t) listIterator.previous(), proceed, session);
            }
        }
        return (tm.i) proceed.invoke(obj);
    }

    @Override // tm.t
    public Object e(Object obj, Object obj2, tm.a context, Function3 proceed, t.c session) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(proceed, "proceed");
        Intrinsics.checkNotNullParameter(session, "session");
        List list = this.f50389a;
        if (!list.isEmpty()) {
            ListIterator listIterator = list.listIterator(list.size());
            c cVar = proceed;
            while (listIterator.hasPrevious()) {
                cVar = new c((t) listIterator.previous(), context, session, this, cVar);
            }
            proceed = cVar;
        }
        return proceed.invoke(obj, obj2, null);
    }
}
