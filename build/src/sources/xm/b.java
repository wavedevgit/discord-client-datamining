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
    private final List f53397a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends Lambda implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ t f53398d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function2 f53399e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ t.c f53400i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(t tVar, Function2 function2, t.c cVar) {
            super(2);
            this.f53398d = tVar;
            this.f53399e = function2;
            this.f53400i = cVar;
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: a */
        public final Object invoke(Object obj, wm.i iVar) {
            return this.f53398d.a(obj, iVar, this.f53399e, this.f53400i);
        }
    }

    /* renamed from: xm.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class C0725b extends Lambda implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ t f53401d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function3 f53402e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ t.c f53403i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        C0725b(t tVar, Function3 function3, t.c cVar) {
            super(3);
            this.f53401d = tVar;
            this.f53402e = function3;
            this.f53403i = cVar;
        }

        @Override // kotlin.jvm.functions.Function3
        public final Object invoke(Object obj, Object obj2, Object obj3) {
            return this.f53401d.d(obj, obj2, obj3, this.f53402e, this.f53403i);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends Lambda implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ t f53404d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ wm.a f53405e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ t.c f53406i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ b f53407o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ Function3 f53408p;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends Lambda implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ b f53409d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ t.b f53410e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Function3 f53411i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(b bVar, t.b bVar2, Function3 function3) {
                super(3);
                this.f53409d = bVar;
                this.f53410e = bVar2;
                this.f53411i = function3;
            }

            @Override // kotlin.jvm.functions.Function3
            /* renamed from: a */
            public final Object invoke(Object obj, Object obj2, t.b bVar) {
                return this.f53411i.invoke(obj, obj2, this.f53409d.g(this.f53410e, bVar));
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(t tVar, wm.a aVar, t.c cVar, b bVar, Function3 function3) {
            super(3);
            this.f53404d = tVar;
            this.f53405e = aVar;
            this.f53406i = cVar;
            this.f53407o = bVar;
            this.f53408p = function3;
        }

        @Override // kotlin.jvm.functions.Function3
        /* renamed from: a */
        public final Object invoke(Object obj, Object obj2, t.b bVar) {
            return this.f53404d.b(obj, obj2, this.f53405e, new a(this.f53407o, bVar, this.f53408p), this.f53406i);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ t f53412d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function1 f53413e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ t.c f53414i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(t tVar, Function1 function1, t.c cVar) {
            super(1);
            this.f53412d = tVar;
            this.f53413e = function1;
            this.f53414i = cVar;
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final wm.i invoke(Object obj) {
            return this.f53412d.e(obj, this.f53413e, this.f53414i);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e implements t.b {

        /* renamed from: a  reason: collision with root package name */
        private final t.b f53415a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ t.b f53416b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ t.b f53417c;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ t.b f53418d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Function1 f53419e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(t.b bVar, Function1 function1) {
                super(1);
                this.f53418d = bVar;
                this.f53419e = function1;
            }

            public final void a(r interceptedAction) {
                Intrinsics.checkNotNullParameter(interceptedAction, "interceptedAction");
                this.f53418d.b(interceptedAction, this.f53419e);
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
            final /* synthetic */ t.b f53420d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Function4 f53421e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0726b(t.b bVar, Function4 function4) {
                super(4);
                this.f53420d = bVar;
                this.f53421e = function4;
            }

            @Override // kotlin.jvm.functions.Function4
            /* renamed from: a */
            public final Object invoke(q c10, Object obj, String k10, Function1 h10) {
                Intrinsics.checkNotNullParameter(c10, "c");
                Intrinsics.checkNotNullParameter(k10, "k");
                Intrinsics.checkNotNullParameter(h10, "h");
                return this.f53420d.a(c10, obj, k10, h10, this.f53421e);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class c extends Lambda implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ t.b f53422d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Function2 f53423e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            c(t.b bVar, Function2 function2) {
                super(2);
                this.f53422d = bVar;
                this.f53423e = function2;
            }

            public final void a(String iKey, Function1 iSideEffect) {
                Intrinsics.checkNotNullParameter(iKey, "iKey");
                Intrinsics.checkNotNullParameter(iSideEffect, "iSideEffect");
                this.f53422d.c(iKey, iSideEffect, this.f53423e);
            }

            @Override // kotlin.jvm.functions.Function2
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
                a((String) obj, (Function1) obj2);
                return Unit.f32464a;
            }
        }

        e(t.b bVar, t.b bVar2) {
            this.f53416b = bVar;
            this.f53417c = bVar2;
            Intrinsics.checkNotNull(bVar);
            this.f53415a = bVar;
        }

        @Override // wm.t.b
        public Object a(q child, Object obj, String key, Function1 handler, Function4 proceed) {
            Intrinsics.checkNotNullParameter(child, "child");
            Intrinsics.checkNotNullParameter(key, "key");
            Intrinsics.checkNotNullParameter(handler, "handler");
            Intrinsics.checkNotNullParameter(proceed, "proceed");
            return this.f53415a.a(child, obj, key, handler, new C0726b(this.f53417c, proceed));
        }

        @Override // wm.t.b
        public void b(r action, Function1 proceed) {
            Intrinsics.checkNotNullParameter(action, "action");
            Intrinsics.checkNotNullParameter(proceed, "proceed");
            this.f53415a.b(action, new a(this.f53417c, proceed));
        }

        @Override // wm.t.b
        public void c(String key, Function1 sideEffect, Function2 proceed) {
            Intrinsics.checkNotNullParameter(key, "key");
            Intrinsics.checkNotNullParameter(sideEffect, "sideEffect");
            Intrinsics.checkNotNullParameter(proceed, "proceed");
            this.f53415a.c(key, sideEffect, new c(this.f53417c, proceed));
        }
    }

    public b(List interceptors) {
        Intrinsics.checkNotNullParameter(interceptors, "interceptors");
        this.f53397a = interceptors;
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
        List list = this.f53397a;
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
        List list = this.f53397a;
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
        for (t tVar : this.f53397a) {
            tVar.c(workflowScope, session);
        }
    }

    @Override // wm.t
    public Object d(Object obj, Object obj2, Object obj3, Function3 proceed, t.c session) {
        Intrinsics.checkNotNullParameter(proceed, "proceed");
        Intrinsics.checkNotNullParameter(session, "session");
        List list = this.f53397a;
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
        List list = this.f53397a;
        if (!list.isEmpty()) {
            ListIterator listIterator = list.listIterator(list.size());
            while (listIterator.hasPrevious()) {
                proceed = new d((t) listIterator.previous(), proceed, session);
            }
        }
        return (wm.i) proceed.invoke(obj);
    }
}
