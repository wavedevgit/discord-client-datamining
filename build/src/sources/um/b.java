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
    private final List f50405a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends Lambda implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ t f50406d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function2 f50407e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ t.c f50408i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(t tVar, Function2 function2, t.c cVar) {
            super(2);
            this.f50406d = tVar;
            this.f50407e = function2;
            this.f50408i = cVar;
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: a */
        public final Object invoke(Object obj, tm.i iVar) {
            return this.f50406d.a(obj, iVar, this.f50407e, this.f50408i);
        }
    }

    /* renamed from: um.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class C0665b extends Lambda implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ t f50409d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function3 f50410e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ t.c f50411i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        C0665b(t tVar, Function3 function3, t.c cVar) {
            super(3);
            this.f50409d = tVar;
            this.f50410e = function3;
            this.f50411i = cVar;
        }

        @Override // kotlin.jvm.functions.Function3
        public final Object invoke(Object obj, Object obj2, Object obj3) {
            return this.f50409d.c(obj, obj2, obj3, this.f50410e, this.f50411i);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends Lambda implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ t f50412d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ tm.a f50413e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ t.c f50414i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ b f50415o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ Function3 f50416p;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends Lambda implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ b f50417d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ t.b f50418e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Function3 f50419i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(b bVar, t.b bVar2, Function3 function3) {
                super(3);
                this.f50417d = bVar;
                this.f50418e = bVar2;
                this.f50419i = function3;
            }

            @Override // kotlin.jvm.functions.Function3
            /* renamed from: a */
            public final Object invoke(Object obj, Object obj2, t.b bVar) {
                return this.f50419i.invoke(obj, obj2, this.f50417d.g(this.f50418e, bVar));
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(t tVar, tm.a aVar, t.c cVar, b bVar, Function3 function3) {
            super(3);
            this.f50412d = tVar;
            this.f50413e = aVar;
            this.f50414i = cVar;
            this.f50415o = bVar;
            this.f50416p = function3;
        }

        @Override // kotlin.jvm.functions.Function3
        /* renamed from: a */
        public final Object invoke(Object obj, Object obj2, t.b bVar) {
            return this.f50412d.e(obj, obj2, this.f50413e, new a(this.f50415o, bVar, this.f50416p), this.f50414i);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ t f50420d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function1 f50421e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ t.c f50422i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(t tVar, Function1 function1, t.c cVar) {
            super(1);
            this.f50420d = tVar;
            this.f50421e = function1;
            this.f50422i = cVar;
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final tm.i invoke(Object obj) {
            return this.f50420d.d(obj, this.f50421e, this.f50422i);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e implements t.b {

        /* renamed from: a  reason: collision with root package name */
        private final t.b f50423a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ t.b f50424b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ t.b f50425c;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ t.b f50426d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Function1 f50427e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(t.b bVar, Function1 function1) {
                super(1);
                this.f50426d = bVar;
                this.f50427e = function1;
            }

            public final void a(r interceptedAction) {
                Intrinsics.checkNotNullParameter(interceptedAction, "interceptedAction");
                this.f50426d.a(interceptedAction, this.f50427e);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((r) obj);
                return Unit.f33298a;
            }
        }

        /* renamed from: um.b$e$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class C0666b extends Lambda implements Function4 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ t.b f50428d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Function4 f50429e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0666b(t.b bVar, Function4 function4) {
                super(4);
                this.f50428d = bVar;
                this.f50429e = function4;
            }

            @Override // kotlin.jvm.functions.Function4
            /* renamed from: a */
            public final Object invoke(q c10, Object obj, String k10, Function1 h10) {
                Intrinsics.checkNotNullParameter(c10, "c");
                Intrinsics.checkNotNullParameter(k10, "k");
                Intrinsics.checkNotNullParameter(h10, "h");
                return this.f50428d.c(c10, obj, k10, h10, this.f50429e);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class c extends Lambda implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ t.b f50430d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Function2 f50431e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            c(t.b bVar, Function2 function2) {
                super(2);
                this.f50430d = bVar;
                this.f50431e = function2;
            }

            public final void a(String iKey, Function1 iSideEffect) {
                Intrinsics.checkNotNullParameter(iKey, "iKey");
                Intrinsics.checkNotNullParameter(iSideEffect, "iSideEffect");
                this.f50430d.b(iKey, iSideEffect, this.f50431e);
            }

            @Override // kotlin.jvm.functions.Function2
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
                a((String) obj, (Function1) obj2);
                return Unit.f33298a;
            }
        }

        e(t.b bVar, t.b bVar2) {
            this.f50424b = bVar;
            this.f50425c = bVar2;
            Intrinsics.checkNotNull(bVar);
            this.f50423a = bVar;
        }

        @Override // tm.t.b
        public void a(r action, Function1 proceed) {
            Intrinsics.checkNotNullParameter(action, "action");
            Intrinsics.checkNotNullParameter(proceed, "proceed");
            this.f50423a.a(action, new a(this.f50425c, proceed));
        }

        @Override // tm.t.b
        public void b(String key, Function1 sideEffect, Function2 proceed) {
            Intrinsics.checkNotNullParameter(key, "key");
            Intrinsics.checkNotNullParameter(sideEffect, "sideEffect");
            Intrinsics.checkNotNullParameter(proceed, "proceed");
            this.f50423a.b(key, sideEffect, new c(this.f50425c, proceed));
        }

        @Override // tm.t.b
        public Object c(q child, Object obj, String key, Function1 handler, Function4 proceed) {
            Intrinsics.checkNotNullParameter(child, "child");
            Intrinsics.checkNotNullParameter(key, "key");
            Intrinsics.checkNotNullParameter(handler, "handler");
            Intrinsics.checkNotNullParameter(proceed, "proceed");
            return this.f50423a.c(child, obj, key, handler, new C0666b(this.f50425c, proceed));
        }
    }

    public b(List interceptors) {
        Intrinsics.checkNotNullParameter(interceptors, "interceptors");
        this.f50405a = interceptors;
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
        List list = this.f50405a;
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
        for (t tVar : this.f50405a) {
            tVar.b(workflowScope, session);
        }
    }

    @Override // tm.t
    public Object c(Object obj, Object obj2, Object obj3, Function3 proceed, t.c session) {
        Intrinsics.checkNotNullParameter(proceed, "proceed");
        Intrinsics.checkNotNullParameter(session, "session");
        List list = this.f50405a;
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
        List list = this.f50405a;
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
        List list = this.f50405a;
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
