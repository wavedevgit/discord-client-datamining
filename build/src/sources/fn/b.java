package fn;

import en.q;
import en.r;
import en.t;
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
    private final List f23855a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends Lambda implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ t f23856d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function2 f23857e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ t.c f23858i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(t tVar, Function2 function2, t.c cVar) {
            super(2);
            this.f23856d = tVar;
            this.f23857e = function2;
            this.f23858i = cVar;
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: a */
        public final Object invoke(Object obj, en.i iVar) {
            return this.f23856d.b(obj, iVar, this.f23857e, this.f23858i);
        }
    }

    /* renamed from: fn.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class C0320b extends Lambda implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ t f23859d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function3 f23860e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ t.c f23861i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        C0320b(t tVar, Function3 function3, t.c cVar) {
            super(3);
            this.f23859d = tVar;
            this.f23860e = function3;
            this.f23861i = cVar;
        }

        @Override // kotlin.jvm.functions.Function3
        public final Object invoke(Object obj, Object obj2, Object obj3) {
            return this.f23859d.e(obj, obj2, obj3, this.f23860e, this.f23861i);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends Lambda implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ t f23862d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ en.a f23863e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ t.c f23864i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ b f23865o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ Function3 f23866p;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends Lambda implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ b f23867d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ t.b f23868e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Function3 f23869i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(b bVar, t.b bVar2, Function3 function3) {
                super(3);
                this.f23867d = bVar;
                this.f23868e = bVar2;
                this.f23869i = function3;
            }

            @Override // kotlin.jvm.functions.Function3
            /* renamed from: a */
            public final Object invoke(Object obj, Object obj2, t.b bVar) {
                return this.f23869i.invoke(obj, obj2, this.f23867d.g(this.f23868e, bVar));
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(t tVar, en.a aVar, t.c cVar, b bVar, Function3 function3) {
            super(3);
            this.f23862d = tVar;
            this.f23863e = aVar;
            this.f23864i = cVar;
            this.f23865o = bVar;
            this.f23866p = function3;
        }

        @Override // kotlin.jvm.functions.Function3
        /* renamed from: a */
        public final Object invoke(Object obj, Object obj2, t.b bVar) {
            return this.f23862d.a(obj, obj2, this.f23863e, new a(this.f23865o, bVar, this.f23866p), this.f23864i);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ t f23870d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function1 f23871e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ t.c f23872i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(t tVar, Function1 function1, t.c cVar) {
            super(1);
            this.f23870d = tVar;
            this.f23871e = function1;
            this.f23872i = cVar;
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final en.i invoke(Object obj) {
            return this.f23870d.c(obj, this.f23871e, this.f23872i);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e implements t.b {

        /* renamed from: a  reason: collision with root package name */
        private final t.b f23873a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ t.b f23874b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ t.b f23875c;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ t.b f23876d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Function1 f23877e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(t.b bVar, Function1 function1) {
                super(1);
                this.f23876d = bVar;
                this.f23877e = function1;
            }

            public final void a(r interceptedAction) {
                Intrinsics.checkNotNullParameter(interceptedAction, "interceptedAction");
                this.f23876d.c(interceptedAction, this.f23877e);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((r) obj);
                return Unit.f31987a;
            }
        }

        /* renamed from: fn.b$e$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class C0321b extends Lambda implements Function4 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ t.b f23878d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Function4 f23879e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0321b(t.b bVar, Function4 function4) {
                super(4);
                this.f23878d = bVar;
                this.f23879e = function4;
            }

            @Override // kotlin.jvm.functions.Function4
            /* renamed from: a */
            public final Object invoke(q c10, Object obj, String k10, Function1 h10) {
                Intrinsics.checkNotNullParameter(c10, "c");
                Intrinsics.checkNotNullParameter(k10, "k");
                Intrinsics.checkNotNullParameter(h10, "h");
                return this.f23878d.a(c10, obj, k10, h10, this.f23879e);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class c extends Lambda implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ t.b f23880d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Function2 f23881e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            c(t.b bVar, Function2 function2) {
                super(2);
                this.f23880d = bVar;
                this.f23881e = function2;
            }

            public final void a(String iKey, Function1 iSideEffect) {
                Intrinsics.checkNotNullParameter(iKey, "iKey");
                Intrinsics.checkNotNullParameter(iSideEffect, "iSideEffect");
                this.f23880d.b(iKey, iSideEffect, this.f23881e);
            }

            @Override // kotlin.jvm.functions.Function2
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
                a((String) obj, (Function1) obj2);
                return Unit.f31987a;
            }
        }

        e(t.b bVar, t.b bVar2) {
            this.f23874b = bVar;
            this.f23875c = bVar2;
            Intrinsics.checkNotNull(bVar);
            this.f23873a = bVar;
        }

        @Override // en.t.b
        public Object a(q child, Object obj, String key, Function1 handler, Function4 proceed) {
            Intrinsics.checkNotNullParameter(child, "child");
            Intrinsics.checkNotNullParameter(key, "key");
            Intrinsics.checkNotNullParameter(handler, "handler");
            Intrinsics.checkNotNullParameter(proceed, "proceed");
            return this.f23873a.a(child, obj, key, handler, new C0321b(this.f23875c, proceed));
        }

        @Override // en.t.b
        public void b(String key, Function1 sideEffect, Function2 proceed) {
            Intrinsics.checkNotNullParameter(key, "key");
            Intrinsics.checkNotNullParameter(sideEffect, "sideEffect");
            Intrinsics.checkNotNullParameter(proceed, "proceed");
            this.f23873a.b(key, sideEffect, new c(this.f23875c, proceed));
        }

        @Override // en.t.b
        public void c(r action, Function1 proceed) {
            Intrinsics.checkNotNullParameter(action, "action");
            Intrinsics.checkNotNullParameter(proceed, "proceed");
            this.f23873a.c(action, new a(this.f23875c, proceed));
        }
    }

    public b(List interceptors) {
        Intrinsics.checkNotNullParameter(interceptors, "interceptors");
        this.f23855a = interceptors;
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

    @Override // en.t
    public Object a(Object obj, Object obj2, en.a context, Function3 proceed, t.c session) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(proceed, "proceed");
        Intrinsics.checkNotNullParameter(session, "session");
        List list = this.f23855a;
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

    @Override // en.t
    public Object b(Object obj, en.i iVar, Function2 proceed, t.c session) {
        Intrinsics.checkNotNullParameter(proceed, "proceed");
        Intrinsics.checkNotNullParameter(session, "session");
        List list = this.f23855a;
        if (!list.isEmpty()) {
            ListIterator listIterator = list.listIterator(list.size());
            while (listIterator.hasPrevious()) {
                proceed = new a((t) listIterator.previous(), proceed, session);
            }
        }
        return proceed.invoke(obj, iVar);
    }

    @Override // en.t
    public en.i c(Object obj, Function1 proceed, t.c session) {
        Intrinsics.checkNotNullParameter(proceed, "proceed");
        Intrinsics.checkNotNullParameter(session, "session");
        List list = this.f23855a;
        if (!list.isEmpty()) {
            ListIterator listIterator = list.listIterator(list.size());
            while (listIterator.hasPrevious()) {
                proceed = new d((t) listIterator.previous(), proceed, session);
            }
        }
        return (en.i) proceed.invoke(obj);
    }

    @Override // en.t
    public void d(CoroutineScope workflowScope, t.c session) {
        Intrinsics.checkNotNullParameter(workflowScope, "workflowScope");
        Intrinsics.checkNotNullParameter(session, "session");
        for (t tVar : this.f23855a) {
            tVar.d(workflowScope, session);
        }
    }

    @Override // en.t
    public Object e(Object obj, Object obj2, Object obj3, Function3 proceed, t.c session) {
        Intrinsics.checkNotNullParameter(proceed, "proceed");
        Intrinsics.checkNotNullParameter(session, "session");
        List list = this.f23855a;
        if (!list.isEmpty()) {
            ListIterator listIterator = list.listIterator(list.size());
            while (listIterator.hasPrevious()) {
                proceed = new C0320b((t) listIterator.previous(), proceed, session);
            }
        }
        return proceed.invoke(obj, obj2, obj3);
    }
}
