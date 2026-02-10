package dn;

import cn.q;
import cn.r;
import cn.t;
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
    private final List f20839a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends Lambda implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ t f20840d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function2 f20841e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ t.c f20842i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(t tVar, Function2 function2, t.c cVar) {
            super(2);
            this.f20840d = tVar;
            this.f20841e = function2;
            this.f20842i = cVar;
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: a */
        public final Object invoke(Object obj, cn.i iVar) {
            return this.f20840d.a(obj, iVar, this.f20841e, this.f20842i);
        }
    }

    /* renamed from: dn.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class C0309b extends Lambda implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ t f20843d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function3 f20844e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ t.c f20845i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        C0309b(t tVar, Function3 function3, t.c cVar) {
            super(3);
            this.f20843d = tVar;
            this.f20844e = function3;
            this.f20845i = cVar;
        }

        @Override // kotlin.jvm.functions.Function3
        public final Object invoke(Object obj, Object obj2, Object obj3) {
            return this.f20843d.e(obj, obj2, obj3, this.f20844e, this.f20845i);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends Lambda implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ t f20846d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ cn.a f20847e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ t.c f20848i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ b f20849o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ Function3 f20850p;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends Lambda implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ b f20851d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ t.b f20852e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Function3 f20853i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(b bVar, t.b bVar2, Function3 function3) {
                super(3);
                this.f20851d = bVar;
                this.f20852e = bVar2;
                this.f20853i = function3;
            }

            @Override // kotlin.jvm.functions.Function3
            /* renamed from: a */
            public final Object invoke(Object obj, Object obj2, t.b bVar) {
                return this.f20853i.invoke(obj, obj2, this.f20851d.g(this.f20852e, bVar));
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(t tVar, cn.a aVar, t.c cVar, b bVar, Function3 function3) {
            super(3);
            this.f20846d = tVar;
            this.f20847e = aVar;
            this.f20848i = cVar;
            this.f20849o = bVar;
            this.f20850p = function3;
        }

        @Override // kotlin.jvm.functions.Function3
        /* renamed from: a */
        public final Object invoke(Object obj, Object obj2, t.b bVar) {
            return this.f20846d.c(obj, obj2, this.f20847e, new a(this.f20849o, bVar, this.f20850p), this.f20848i);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ t f20854d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function1 f20855e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ t.c f20856i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(t tVar, Function1 function1, t.c cVar) {
            super(1);
            this.f20854d = tVar;
            this.f20855e = function1;
            this.f20856i = cVar;
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final cn.i invoke(Object obj) {
            return this.f20854d.b(obj, this.f20855e, this.f20856i);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e implements t.b {

        /* renamed from: a  reason: collision with root package name */
        private final t.b f20857a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ t.b f20858b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ t.b f20859c;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ t.b f20860d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Function1 f20861e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(t.b bVar, Function1 function1) {
                super(1);
                this.f20860d = bVar;
                this.f20861e = function1;
            }

            public final void a(r interceptedAction) {
                Intrinsics.checkNotNullParameter(interceptedAction, "interceptedAction");
                this.f20860d.c(interceptedAction, this.f20861e);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((r) obj);
                return Unit.f31765a;
            }
        }

        /* renamed from: dn.b$e$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class C0310b extends Lambda implements Function4 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ t.b f20862d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Function4 f20863e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0310b(t.b bVar, Function4 function4) {
                super(4);
                this.f20862d = bVar;
                this.f20863e = function4;
            }

            @Override // kotlin.jvm.functions.Function4
            /* renamed from: a */
            public final Object invoke(q c10, Object obj, String k10, Function1 h10) {
                Intrinsics.checkNotNullParameter(c10, "c");
                Intrinsics.checkNotNullParameter(k10, "k");
                Intrinsics.checkNotNullParameter(h10, "h");
                return this.f20862d.a(c10, obj, k10, h10, this.f20863e);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class c extends Lambda implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ t.b f20864d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Function2 f20865e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            c(t.b bVar, Function2 function2) {
                super(2);
                this.f20864d = bVar;
                this.f20865e = function2;
            }

            public final void a(String iKey, Function1 iSideEffect) {
                Intrinsics.checkNotNullParameter(iKey, "iKey");
                Intrinsics.checkNotNullParameter(iSideEffect, "iSideEffect");
                this.f20864d.b(iKey, iSideEffect, this.f20865e);
            }

            @Override // kotlin.jvm.functions.Function2
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
                a((String) obj, (Function1) obj2);
                return Unit.f31765a;
            }
        }

        e(t.b bVar, t.b bVar2) {
            this.f20858b = bVar;
            this.f20859c = bVar2;
            Intrinsics.checkNotNull(bVar);
            this.f20857a = bVar;
        }

        @Override // cn.t.b
        public Object a(q child, Object obj, String key, Function1 handler, Function4 proceed) {
            Intrinsics.checkNotNullParameter(child, "child");
            Intrinsics.checkNotNullParameter(key, "key");
            Intrinsics.checkNotNullParameter(handler, "handler");
            Intrinsics.checkNotNullParameter(proceed, "proceed");
            return this.f20857a.a(child, obj, key, handler, new C0310b(this.f20859c, proceed));
        }

        @Override // cn.t.b
        public void b(String key, Function1 sideEffect, Function2 proceed) {
            Intrinsics.checkNotNullParameter(key, "key");
            Intrinsics.checkNotNullParameter(sideEffect, "sideEffect");
            Intrinsics.checkNotNullParameter(proceed, "proceed");
            this.f20857a.b(key, sideEffect, new c(this.f20859c, proceed));
        }

        @Override // cn.t.b
        public void c(r action, Function1 proceed) {
            Intrinsics.checkNotNullParameter(action, "action");
            Intrinsics.checkNotNullParameter(proceed, "proceed");
            this.f20857a.c(action, new a(this.f20859c, proceed));
        }
    }

    public b(List interceptors) {
        Intrinsics.checkNotNullParameter(interceptors, "interceptors");
        this.f20839a = interceptors;
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

    @Override // cn.t
    public Object a(Object obj, cn.i iVar, Function2 proceed, t.c session) {
        Intrinsics.checkNotNullParameter(proceed, "proceed");
        Intrinsics.checkNotNullParameter(session, "session");
        List list = this.f20839a;
        if (!list.isEmpty()) {
            ListIterator listIterator = list.listIterator(list.size());
            while (listIterator.hasPrevious()) {
                proceed = new a((t) listIterator.previous(), proceed, session);
            }
        }
        return proceed.invoke(obj, iVar);
    }

    @Override // cn.t
    public cn.i b(Object obj, Function1 proceed, t.c session) {
        Intrinsics.checkNotNullParameter(proceed, "proceed");
        Intrinsics.checkNotNullParameter(session, "session");
        List list = this.f20839a;
        if (!list.isEmpty()) {
            ListIterator listIterator = list.listIterator(list.size());
            while (listIterator.hasPrevious()) {
                proceed = new d((t) listIterator.previous(), proceed, session);
            }
        }
        return (cn.i) proceed.invoke(obj);
    }

    @Override // cn.t
    public Object c(Object obj, Object obj2, cn.a context, Function3 proceed, t.c session) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(proceed, "proceed");
        Intrinsics.checkNotNullParameter(session, "session");
        List list = this.f20839a;
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

    @Override // cn.t
    public void d(CoroutineScope workflowScope, t.c session) {
        Intrinsics.checkNotNullParameter(workflowScope, "workflowScope");
        Intrinsics.checkNotNullParameter(session, "session");
        for (t tVar : this.f20839a) {
            tVar.d(workflowScope, session);
        }
    }

    @Override // cn.t
    public Object e(Object obj, Object obj2, Object obj3, Function3 proceed, t.c session) {
        Intrinsics.checkNotNullParameter(proceed, "proceed");
        Intrinsics.checkNotNullParameter(session, "session");
        List list = this.f20839a;
        if (!list.isEmpty()) {
            ListIterator listIterator = list.listIterator(list.size());
            while (listIterator.hasPrevious()) {
                proceed = new C0309b((t) listIterator.previous(), proceed, session);
            }
        }
        return proceed.invoke(obj, obj2, obj3);
    }
}
