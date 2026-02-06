package cn;

import bn.q;
import bn.r;
import bn.t;
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
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements t {

    /* renamed from: a  reason: collision with root package name */
    private final List f7560a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends Lambda implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ t f7561d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function2 f7562e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ t.c f7563i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(t tVar, Function2 function2, t.c cVar) {
            super(2);
            this.f7561d = tVar;
            this.f7562e = function2;
            this.f7563i = cVar;
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: a */
        public final Object invoke(Object obj, bn.i iVar) {
            return this.f7561d.e(obj, iVar, this.f7562e, this.f7563i);
        }
    }

    /* renamed from: cn.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class C0132b extends Lambda implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ t f7564d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function3 f7565e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ t.c f7566i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        C0132b(t tVar, Function3 function3, t.c cVar) {
            super(3);
            this.f7564d = tVar;
            this.f7565e = function3;
            this.f7566i = cVar;
        }

        @Override // kotlin.jvm.functions.Function3
        public final Object invoke(Object obj, Object obj2, Object obj3) {
            return this.f7564d.d(obj, obj2, obj3, this.f7565e, this.f7566i);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends Lambda implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ t f7567d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ bn.a f7568e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ t.c f7569i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ b f7570o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ Function3 f7571p;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends Lambda implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ b f7572d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ t.b f7573e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Function3 f7574i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(b bVar, t.b bVar2, Function3 function3) {
                super(3);
                this.f7572d = bVar;
                this.f7573e = bVar2;
                this.f7574i = function3;
            }

            @Override // kotlin.jvm.functions.Function3
            /* renamed from: a */
            public final Object invoke(Object obj, Object obj2, t.b bVar) {
                return this.f7574i.invoke(obj, obj2, this.f7572d.g(this.f7573e, bVar));
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(t tVar, bn.a aVar, t.c cVar, b bVar, Function3 function3) {
            super(3);
            this.f7567d = tVar;
            this.f7568e = aVar;
            this.f7569i = cVar;
            this.f7570o = bVar;
            this.f7571p = function3;
        }

        @Override // kotlin.jvm.functions.Function3
        /* renamed from: a */
        public final Object invoke(Object obj, Object obj2, t.b bVar) {
            return this.f7567d.b(obj, obj2, this.f7568e, new a(this.f7570o, bVar, this.f7571p), this.f7569i);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ t f7575d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function1 f7576e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ t.c f7577i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(t tVar, Function1 function1, t.c cVar) {
            super(1);
            this.f7575d = tVar;
            this.f7576e = function1;
            this.f7577i = cVar;
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final bn.i invoke(Object obj) {
            return this.f7575d.a(obj, this.f7576e, this.f7577i);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e implements t.b {

        /* renamed from: a  reason: collision with root package name */
        private final t.b f7578a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ t.b f7579b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ t.b f7580c;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ t.b f7581d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Function1 f7582e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(t.b bVar, Function1 function1) {
                super(1);
                this.f7581d = bVar;
                this.f7582e = function1;
            }

            public final void a(r interceptedAction) {
                Intrinsics.checkNotNullParameter(interceptedAction, "interceptedAction");
                this.f7581d.a(interceptedAction, this.f7582e);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((r) obj);
                return Unit.f32008a;
            }
        }

        /* renamed from: cn.b$e$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class C0133b extends Lambda implements Function4 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ t.b f7583d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Function4 f7584e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0133b(t.b bVar, Function4 function4) {
                super(4);
                this.f7583d = bVar;
                this.f7584e = function4;
            }

            @Override // kotlin.jvm.functions.Function4
            /* renamed from: a */
            public final Object invoke(q c10, Object obj, String k10, Function1 h10) {
                Intrinsics.checkNotNullParameter(c10, "c");
                Intrinsics.checkNotNullParameter(k10, "k");
                Intrinsics.checkNotNullParameter(h10, "h");
                return this.f7583d.c(c10, obj, k10, h10, this.f7584e);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class c extends Lambda implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ t.b f7585d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Function2 f7586e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            c(t.b bVar, Function2 function2) {
                super(2);
                this.f7585d = bVar;
                this.f7586e = function2;
            }

            public final void a(String iKey, Function1 iSideEffect) {
                Intrinsics.checkNotNullParameter(iKey, "iKey");
                Intrinsics.checkNotNullParameter(iSideEffect, "iSideEffect");
                this.f7585d.b(iKey, iSideEffect, this.f7586e);
            }

            @Override // kotlin.jvm.functions.Function2
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
                a((String) obj, (Function1) obj2);
                return Unit.f32008a;
            }
        }

        e(t.b bVar, t.b bVar2) {
            this.f7579b = bVar;
            this.f7580c = bVar2;
            Intrinsics.checkNotNull(bVar);
            this.f7578a = bVar;
        }

        @Override // bn.t.b
        public void a(r action, Function1 proceed) {
            Intrinsics.checkNotNullParameter(action, "action");
            Intrinsics.checkNotNullParameter(proceed, "proceed");
            this.f7578a.a(action, new a(this.f7580c, proceed));
        }

        @Override // bn.t.b
        public void b(String key, Function1 sideEffect, Function2 proceed) {
            Intrinsics.checkNotNullParameter(key, "key");
            Intrinsics.checkNotNullParameter(sideEffect, "sideEffect");
            Intrinsics.checkNotNullParameter(proceed, "proceed");
            this.f7578a.b(key, sideEffect, new c(this.f7580c, proceed));
        }

        @Override // bn.t.b
        public Object c(q child, Object obj, String key, Function1 handler, Function4 proceed) {
            Intrinsics.checkNotNullParameter(child, "child");
            Intrinsics.checkNotNullParameter(key, "key");
            Intrinsics.checkNotNullParameter(handler, "handler");
            Intrinsics.checkNotNullParameter(proceed, "proceed");
            return this.f7578a.c(child, obj, key, handler, new C0133b(this.f7580c, proceed));
        }
    }

    public b(List interceptors) {
        Intrinsics.checkNotNullParameter(interceptors, "interceptors");
        this.f7560a = interceptors;
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

    @Override // bn.t
    public bn.i a(Object obj, Function1 proceed, t.c session) {
        Intrinsics.checkNotNullParameter(proceed, "proceed");
        Intrinsics.checkNotNullParameter(session, "session");
        List list = this.f7560a;
        if (!list.isEmpty()) {
            ListIterator listIterator = list.listIterator(list.size());
            while (listIterator.hasPrevious()) {
                proceed = new d((t) listIterator.previous(), proceed, session);
            }
        }
        return (bn.i) proceed.invoke(obj);
    }

    @Override // bn.t
    public Object b(Object obj, Object obj2, bn.a context, Function3 proceed, t.c session) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(proceed, "proceed");
        Intrinsics.checkNotNullParameter(session, "session");
        List list = this.f7560a;
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

    @Override // bn.t
    public void c(CoroutineScope workflowScope, t.c session) {
        Intrinsics.checkNotNullParameter(workflowScope, "workflowScope");
        Intrinsics.checkNotNullParameter(session, "session");
        for (t tVar : this.f7560a) {
            tVar.c(workflowScope, session);
        }
    }

    @Override // bn.t
    public Object d(Object obj, Object obj2, Object obj3, Function3 proceed, t.c session) {
        Intrinsics.checkNotNullParameter(proceed, "proceed");
        Intrinsics.checkNotNullParameter(session, "session");
        List list = this.f7560a;
        if (!list.isEmpty()) {
            ListIterator listIterator = list.listIterator(list.size());
            while (listIterator.hasPrevious()) {
                proceed = new C0132b((t) listIterator.previous(), proceed, session);
            }
        }
        return proceed.invoke(obj, obj2, obj3);
    }

    @Override // bn.t
    public Object e(Object obj, bn.i iVar, Function2 proceed, t.c session) {
        Intrinsics.checkNotNullParameter(proceed, "proceed");
        Intrinsics.checkNotNullParameter(session, "session");
        List list = this.f7560a;
        if (!list.isEmpty()) {
            ListIterator listIterator = list.listIterator(list.size());
            while (listIterator.hasPrevious()) {
                proceed = new a((t) listIterator.previous(), proceed, session);
            }
        }
        return proceed.invoke(obj, iVar);
    }
}
