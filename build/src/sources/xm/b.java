package xm;

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
import wm.q;
import wm.r;
import wm.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements t {

    /* renamed from: a  reason: collision with root package name */
    private final List f53400a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends Lambda implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ t f53401d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function2 f53402e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ t.c f53403i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(t tVar, Function2 function2, t.c cVar) {
            super(2);
            this.f53401d = tVar;
            this.f53402e = function2;
            this.f53403i = cVar;
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: a */
        public final Object invoke(Object obj, wm.i iVar) {
            return this.f53401d.a(obj, iVar, this.f53402e, this.f53403i);
        }
    }

    /* renamed from: xm.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class C0725b extends Lambda implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ t f53404d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function3 f53405e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ t.c f53406i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        C0725b(t tVar, Function3 function3, t.c cVar) {
            super(3);
            this.f53404d = tVar;
            this.f53405e = function3;
            this.f53406i = cVar;
        }

        @Override // kotlin.jvm.functions.Function3
        public final Object invoke(Object obj, Object obj2, Object obj3) {
            return this.f53404d.d(obj, obj2, obj3, this.f53405e, this.f53406i);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends Lambda implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ t f53407d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ wm.a f53408e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ t.c f53409i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ b f53410o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ Function3 f53411p;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends Lambda implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ b f53412d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ t.b f53413e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Function3 f53414i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(b bVar, t.b bVar2, Function3 function3) {
                super(3);
                this.f53412d = bVar;
                this.f53413e = bVar2;
                this.f53414i = function3;
            }

            @Override // kotlin.jvm.functions.Function3
            /* renamed from: a */
            public final Object invoke(Object obj, Object obj2, t.b bVar) {
                return this.f53414i.invoke(obj, obj2, this.f53412d.g(this.f53413e, bVar));
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(t tVar, wm.a aVar, t.c cVar, b bVar, Function3 function3) {
            super(3);
            this.f53407d = tVar;
            this.f53408e = aVar;
            this.f53409i = cVar;
            this.f53410o = bVar;
            this.f53411p = function3;
        }

        @Override // kotlin.jvm.functions.Function3
        /* renamed from: a */
        public final Object invoke(Object obj, Object obj2, t.b bVar) {
            return this.f53407d.b(obj, obj2, this.f53408e, new a(this.f53410o, bVar, this.f53411p), this.f53409i);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ t f53415d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function1 f53416e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ t.c f53417i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(t tVar, Function1 function1, t.c cVar) {
            super(1);
            this.f53415d = tVar;
            this.f53416e = function1;
            this.f53417i = cVar;
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final wm.i invoke(Object obj) {
            return this.f53415d.e(obj, this.f53416e, this.f53417i);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e implements t.b {

        /* renamed from: a  reason: collision with root package name */
        private final t.b f53418a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ t.b f53419b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ t.b f53420c;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ t.b f53421d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Function1 f53422e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(t.b bVar, Function1 function1) {
                super(1);
                this.f53421d = bVar;
                this.f53422e = function1;
            }

            public final void a(r interceptedAction) {
                Intrinsics.checkNotNullParameter(interceptedAction, "interceptedAction");
                this.f53421d.b(interceptedAction, this.f53422e);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((r) obj);
                return Unit.f32464a;
            }
        }

        /* renamed from: xm.b$e$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class C0726b extends Lambda implements Function4 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ t.b f53423d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Function4 f53424e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0726b(t.b bVar, Function4 function4) {
                super(4);
                this.f53423d = bVar;
                this.f53424e = function4;
            }

            @Override // kotlin.jvm.functions.Function4
            /* renamed from: a */
            public final Object invoke(q c10, Object obj, String k10, Function1 h10) {
                Intrinsics.checkNotNullParameter(c10, "c");
                Intrinsics.checkNotNullParameter(k10, "k");
                Intrinsics.checkNotNullParameter(h10, "h");
                return this.f53423d.a(c10, obj, k10, h10, this.f53424e);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class c extends Lambda implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ t.b f53425d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Function2 f53426e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            c(t.b bVar, Function2 function2) {
                super(2);
                this.f53425d = bVar;
                this.f53426e = function2;
            }

            public final void a(String iKey, Function1 iSideEffect) {
                Intrinsics.checkNotNullParameter(iKey, "iKey");
                Intrinsics.checkNotNullParameter(iSideEffect, "iSideEffect");
                this.f53425d.c(iKey, iSideEffect, this.f53426e);
            }

            @Override // kotlin.jvm.functions.Function2
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
                a((String) obj, (Function1) obj2);
                return Unit.f32464a;
            }
        }

        e(t.b bVar, t.b bVar2) {
            this.f53419b = bVar;
            this.f53420c = bVar2;
            Intrinsics.checkNotNull(bVar);
            this.f53418a = bVar;
        }

        @Override // wm.t.b
        public Object a(q child, Object obj, String key, Function1 handler, Function4 proceed) {
            Intrinsics.checkNotNullParameter(child, "child");
            Intrinsics.checkNotNullParameter(key, "key");
            Intrinsics.checkNotNullParameter(handler, "handler");
            Intrinsics.checkNotNullParameter(proceed, "proceed");
            return this.f53418a.a(child, obj, key, handler, new C0726b(this.f53420c, proceed));
        }

        @Override // wm.t.b
        public void b(r action, Function1 proceed) {
            Intrinsics.checkNotNullParameter(action, "action");
            Intrinsics.checkNotNullParameter(proceed, "proceed");
            this.f53418a.b(action, new a(this.f53420c, proceed));
        }

        @Override // wm.t.b
        public void c(String key, Function1 sideEffect, Function2 proceed) {
            Intrinsics.checkNotNullParameter(key, "key");
            Intrinsics.checkNotNullParameter(sideEffect, "sideEffect");
            Intrinsics.checkNotNullParameter(proceed, "proceed");
            this.f53418a.c(key, sideEffect, new c(this.f53420c, proceed));
        }
    }

    public b(List interceptors) {
        Intrinsics.checkNotNullParameter(interceptors, "interceptors");
        this.f53400a = interceptors;
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

    @Override // wm.t
    public Object a(Object obj, wm.i iVar, Function2 proceed, t.c session) {
        Intrinsics.checkNotNullParameter(proceed, "proceed");
        Intrinsics.checkNotNullParameter(session, "session");
        List list = this.f53400a;
        if (!list.isEmpty()) {
            ListIterator listIterator = list.listIterator(list.size());
            while (listIterator.hasPrevious()) {
                proceed = new a((t) listIterator.previous(), proceed, session);
            }
        }
        return proceed.invoke(obj, iVar);
    }

    @Override // wm.t
    public Object b(Object obj, Object obj2, wm.a context, Function3 proceed, t.c session) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(proceed, "proceed");
        Intrinsics.checkNotNullParameter(session, "session");
        List list = this.f53400a;
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

    @Override // wm.t
    public void c(CoroutineScope workflowScope, t.c session) {
        Intrinsics.checkNotNullParameter(workflowScope, "workflowScope");
        Intrinsics.checkNotNullParameter(session, "session");
        for (t tVar : this.f53400a) {
            tVar.c(workflowScope, session);
        }
    }

    @Override // wm.t
    public Object d(Object obj, Object obj2, Object obj3, Function3 proceed, t.c session) {
        Intrinsics.checkNotNullParameter(proceed, "proceed");
        Intrinsics.checkNotNullParameter(session, "session");
        List list = this.f53400a;
        if (!list.isEmpty()) {
            ListIterator listIterator = list.listIterator(list.size());
            while (listIterator.hasPrevious()) {
                proceed = new C0725b((t) listIterator.previous(), proceed, session);
            }
        }
        return proceed.invoke(obj, obj2, obj3);
    }

    @Override // wm.t
    public wm.i e(Object obj, Function1 proceed, t.c session) {
        Intrinsics.checkNotNullParameter(proceed, "proceed");
        Intrinsics.checkNotNullParameter(session, "session");
        List list = this.f53400a;
        if (!list.isEmpty()) {
            ListIterator listIterator = list.listIterator(list.size());
            while (listIterator.hasPrevious()) {
                proceed = new d((t) listIterator.previous(), proceed, session);
            }
        }
        return (wm.i) proceed.invoke(obj);
    }
}
