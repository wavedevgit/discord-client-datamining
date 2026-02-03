package vm;

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
import um.q;
import um.r;
import um.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements t {

    /* renamed from: a  reason: collision with root package name */
    private final List f51361a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends Lambda implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ t f51362d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function2 f51363e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ t.c f51364i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(t tVar, Function2 function2, t.c cVar) {
            super(2);
            this.f51362d = tVar;
            this.f51363e = function2;
            this.f51364i = cVar;
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: a */
        public final Object invoke(Object obj, um.i iVar) {
            return this.f51362d.e(obj, iVar, this.f51363e, this.f51364i);
        }
    }

    /* renamed from: vm.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class C0692b extends Lambda implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ t f51365d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function3 f51366e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ t.c f51367i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        C0692b(t tVar, Function3 function3, t.c cVar) {
            super(3);
            this.f51365d = tVar;
            this.f51366e = function3;
            this.f51367i = cVar;
        }

        @Override // kotlin.jvm.functions.Function3
        public final Object invoke(Object obj, Object obj2, Object obj3) {
            return this.f51365d.c(obj, obj2, obj3, this.f51366e, this.f51367i);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends Lambda implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ t f51368d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ um.a f51369e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ t.c f51370i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ b f51371o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ Function3 f51372p;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends Lambda implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ b f51373d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ t.b f51374e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Function3 f51375i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(b bVar, t.b bVar2, Function3 function3) {
                super(3);
                this.f51373d = bVar;
                this.f51374e = bVar2;
                this.f51375i = function3;
            }

            @Override // kotlin.jvm.functions.Function3
            /* renamed from: a */
            public final Object invoke(Object obj, Object obj2, t.b bVar) {
                return this.f51375i.invoke(obj, obj2, this.f51373d.g(this.f51374e, bVar));
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(t tVar, um.a aVar, t.c cVar, b bVar, Function3 function3) {
            super(3);
            this.f51368d = tVar;
            this.f51369e = aVar;
            this.f51370i = cVar;
            this.f51371o = bVar;
            this.f51372p = function3;
        }

        @Override // kotlin.jvm.functions.Function3
        /* renamed from: a */
        public final Object invoke(Object obj, Object obj2, t.b bVar) {
            return this.f51368d.a(obj, obj2, this.f51369e, new a(this.f51371o, bVar, this.f51372p), this.f51370i);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ t f51376d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function1 f51377e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ t.c f51378i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(t tVar, Function1 function1, t.c cVar) {
            super(1);
            this.f51376d = tVar;
            this.f51377e = function1;
            this.f51378i = cVar;
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final um.i invoke(Object obj) {
            return this.f51376d.d(obj, this.f51377e, this.f51378i);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e implements t.b {

        /* renamed from: a  reason: collision with root package name */
        private final t.b f51379a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ t.b f51380b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ t.b f51381c;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ t.b f51382d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Function1 f51383e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(t.b bVar, Function1 function1) {
                super(1);
                this.f51382d = bVar;
                this.f51383e = function1;
            }

            public final void a(r interceptedAction) {
                Intrinsics.checkNotNullParameter(interceptedAction, "interceptedAction");
                this.f51382d.a(interceptedAction, this.f51383e);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((r) obj);
                return Unit.f33074a;
            }
        }

        /* renamed from: vm.b$e$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class C0693b extends Lambda implements Function4 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ t.b f51384d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Function4 f51385e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0693b(t.b bVar, Function4 function4) {
                super(4);
                this.f51384d = bVar;
                this.f51385e = function4;
            }

            @Override // kotlin.jvm.functions.Function4
            /* renamed from: a */
            public final Object invoke(q c10, Object obj, String k10, Function1 h10) {
                Intrinsics.checkNotNullParameter(c10, "c");
                Intrinsics.checkNotNullParameter(k10, "k");
                Intrinsics.checkNotNullParameter(h10, "h");
                return this.f51384d.b(c10, obj, k10, h10, this.f51385e);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class c extends Lambda implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ t.b f51386d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Function2 f51387e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            c(t.b bVar, Function2 function2) {
                super(2);
                this.f51386d = bVar;
                this.f51387e = function2;
            }

            public final void a(String iKey, Function1 iSideEffect) {
                Intrinsics.checkNotNullParameter(iKey, "iKey");
                Intrinsics.checkNotNullParameter(iSideEffect, "iSideEffect");
                this.f51386d.c(iKey, iSideEffect, this.f51387e);
            }

            @Override // kotlin.jvm.functions.Function2
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
                a((String) obj, (Function1) obj2);
                return Unit.f33074a;
            }
        }

        e(t.b bVar, t.b bVar2) {
            this.f51380b = bVar;
            this.f51381c = bVar2;
            Intrinsics.checkNotNull(bVar);
            this.f51379a = bVar;
        }

        @Override // um.t.b
        public void a(r action, Function1 proceed) {
            Intrinsics.checkNotNullParameter(action, "action");
            Intrinsics.checkNotNullParameter(proceed, "proceed");
            this.f51379a.a(action, new a(this.f51381c, proceed));
        }

        @Override // um.t.b
        public Object b(q child, Object obj, String key, Function1 handler, Function4 proceed) {
            Intrinsics.checkNotNullParameter(child, "child");
            Intrinsics.checkNotNullParameter(key, "key");
            Intrinsics.checkNotNullParameter(handler, "handler");
            Intrinsics.checkNotNullParameter(proceed, "proceed");
            return this.f51379a.b(child, obj, key, handler, new C0693b(this.f51381c, proceed));
        }

        @Override // um.t.b
        public void c(String key, Function1 sideEffect, Function2 proceed) {
            Intrinsics.checkNotNullParameter(key, "key");
            Intrinsics.checkNotNullParameter(sideEffect, "sideEffect");
            Intrinsics.checkNotNullParameter(proceed, "proceed");
            this.f51379a.c(key, sideEffect, new c(this.f51381c, proceed));
        }
    }

    public b(List interceptors) {
        Intrinsics.checkNotNullParameter(interceptors, "interceptors");
        this.f51361a = interceptors;
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

    @Override // um.t
    public Object a(Object obj, Object obj2, um.a context, Function3 proceed, t.c session) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(proceed, "proceed");
        Intrinsics.checkNotNullParameter(session, "session");
        List list = this.f51361a;
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

    @Override // um.t
    public void b(CoroutineScope workflowScope, t.c session) {
        Intrinsics.checkNotNullParameter(workflowScope, "workflowScope");
        Intrinsics.checkNotNullParameter(session, "session");
        for (t tVar : this.f51361a) {
            tVar.b(workflowScope, session);
        }
    }

    @Override // um.t
    public Object c(Object obj, Object obj2, Object obj3, Function3 proceed, t.c session) {
        Intrinsics.checkNotNullParameter(proceed, "proceed");
        Intrinsics.checkNotNullParameter(session, "session");
        List list = this.f51361a;
        if (!list.isEmpty()) {
            ListIterator listIterator = list.listIterator(list.size());
            while (listIterator.hasPrevious()) {
                proceed = new C0692b((t) listIterator.previous(), proceed, session);
            }
        }
        return proceed.invoke(obj, obj2, obj3);
    }

    @Override // um.t
    public um.i d(Object obj, Function1 proceed, t.c session) {
        Intrinsics.checkNotNullParameter(proceed, "proceed");
        Intrinsics.checkNotNullParameter(session, "session");
        List list = this.f51361a;
        if (!list.isEmpty()) {
            ListIterator listIterator = list.listIterator(list.size());
            while (listIterator.hasPrevious()) {
                proceed = new d((t) listIterator.previous(), proceed, session);
            }
        }
        return (um.i) proceed.invoke(obj);
    }

    @Override // um.t
    public Object e(Object obj, um.i iVar, Function2 proceed, t.c session) {
        Intrinsics.checkNotNullParameter(proceed, "proceed");
        Intrinsics.checkNotNullParameter(session, "session");
        List list = this.f51361a;
        if (!list.isEmpty()) {
            ListIterator listIterator = list.listIterator(list.size());
            while (listIterator.hasPrevious()) {
                proceed = new a((t) listIterator.previous(), proceed, session);
            }
        }
        return proceed.invoke(obj, iVar);
    }
}
