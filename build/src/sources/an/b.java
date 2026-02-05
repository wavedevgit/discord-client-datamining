package an;

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
import zm.q;
import zm.r;
import zm.t;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b implements t {

    /* renamed from: a  reason: collision with root package name */
    private final List f764a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends Lambda implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ t f765d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function2 f766e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ t.c f767i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(t tVar, Function2 function2, t.c cVar) {
            super(2);
            this.f765d = tVar;
            this.f766e = function2;
            this.f767i = cVar;
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: a */
        public final Object invoke(Object obj, zm.i iVar) {
            return this.f765d.a(obj, iVar, this.f766e, this.f767i);
        }
    }

    /* renamed from: an.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class C0012b extends Lambda implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ t f768d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function3 f769e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ t.c f770i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        C0012b(t tVar, Function3 function3, t.c cVar) {
            super(3);
            this.f768d = tVar;
            this.f769e = function3;
            this.f770i = cVar;
        }

        @Override // kotlin.jvm.functions.Function3
        public final Object invoke(Object obj, Object obj2, Object obj3) {
            return this.f768d.e(obj, obj2, obj3, this.f769e, this.f770i);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends Lambda implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ t f771d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ zm.a f772e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ t.c f773i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ b f774o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ Function3 f775p;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends Lambda implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ b f776d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ t.b f777e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Function3 f778i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(b bVar, t.b bVar2, Function3 function3) {
                super(3);
                this.f776d = bVar;
                this.f777e = bVar2;
                this.f778i = function3;
            }

            @Override // kotlin.jvm.functions.Function3
            /* renamed from: a */
            public final Object invoke(Object obj, Object obj2, t.b bVar) {
                return this.f778i.invoke(obj, obj2, this.f776d.g(this.f777e, bVar));
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(t tVar, zm.a aVar, t.c cVar, b bVar, Function3 function3) {
            super(3);
            this.f771d = tVar;
            this.f772e = aVar;
            this.f773i = cVar;
            this.f774o = bVar;
            this.f775p = function3;
        }

        @Override // kotlin.jvm.functions.Function3
        /* renamed from: a */
        public final Object invoke(Object obj, Object obj2, t.b bVar) {
            return this.f771d.c(obj, obj2, this.f772e, new a(this.f774o, bVar, this.f775p), this.f773i);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ t f779d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function1 f780e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ t.c f781i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(t tVar, Function1 function1, t.c cVar) {
            super(1);
            this.f779d = tVar;
            this.f780e = function1;
            this.f781i = cVar;
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final zm.i invoke(Object obj) {
            return this.f779d.b(obj, this.f780e, this.f781i);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e implements t.b {

        /* renamed from: a  reason: collision with root package name */
        private final t.b f782a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ t.b f783b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ t.b f784c;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ t.b f785d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Function1 f786e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(t.b bVar, Function1 function1) {
                super(1);
                this.f785d = bVar;
                this.f786e = function1;
            }

            public final void a(r interceptedAction) {
                Intrinsics.checkNotNullParameter(interceptedAction, "interceptedAction");
                this.f785d.a(interceptedAction, this.f786e);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((r) obj);
                return Unit.f31988a;
            }
        }

        /* renamed from: an.b$e$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class C0013b extends Lambda implements Function4 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ t.b f787d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Function4 f788e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0013b(t.b bVar, Function4 function4) {
                super(4);
                this.f787d = bVar;
                this.f788e = function4;
            }

            @Override // kotlin.jvm.functions.Function4
            /* renamed from: a */
            public final Object invoke(q c10, Object obj, String k10, Function1 h10) {
                Intrinsics.checkNotNullParameter(c10, "c");
                Intrinsics.checkNotNullParameter(k10, "k");
                Intrinsics.checkNotNullParameter(h10, "h");
                return this.f787d.b(c10, obj, k10, h10, this.f788e);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class c extends Lambda implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ t.b f789d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Function2 f790e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            c(t.b bVar, Function2 function2) {
                super(2);
                this.f789d = bVar;
                this.f790e = function2;
            }

            public final void a(String iKey, Function1 iSideEffect) {
                Intrinsics.checkNotNullParameter(iKey, "iKey");
                Intrinsics.checkNotNullParameter(iSideEffect, "iSideEffect");
                this.f789d.c(iKey, iSideEffect, this.f790e);
            }

            @Override // kotlin.jvm.functions.Function2
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
                a((String) obj, (Function1) obj2);
                return Unit.f31988a;
            }
        }

        e(t.b bVar, t.b bVar2) {
            this.f783b = bVar;
            this.f784c = bVar2;
            Intrinsics.checkNotNull(bVar);
            this.f782a = bVar;
        }

        @Override // zm.t.b
        public void a(r action, Function1 proceed) {
            Intrinsics.checkNotNullParameter(action, "action");
            Intrinsics.checkNotNullParameter(proceed, "proceed");
            this.f782a.a(action, new a(this.f784c, proceed));
        }

        @Override // zm.t.b
        public Object b(q child, Object obj, String key, Function1 handler, Function4 proceed) {
            Intrinsics.checkNotNullParameter(child, "child");
            Intrinsics.checkNotNullParameter(key, "key");
            Intrinsics.checkNotNullParameter(handler, "handler");
            Intrinsics.checkNotNullParameter(proceed, "proceed");
            return this.f782a.b(child, obj, key, handler, new C0013b(this.f784c, proceed));
        }

        @Override // zm.t.b
        public void c(String key, Function1 sideEffect, Function2 proceed) {
            Intrinsics.checkNotNullParameter(key, "key");
            Intrinsics.checkNotNullParameter(sideEffect, "sideEffect");
            Intrinsics.checkNotNullParameter(proceed, "proceed");
            this.f782a.c(key, sideEffect, new c(this.f784c, proceed));
        }
    }

    public b(List interceptors) {
        Intrinsics.checkNotNullParameter(interceptors, "interceptors");
        this.f764a = interceptors;
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

    @Override // zm.t
    public Object a(Object obj, zm.i iVar, Function2 proceed, t.c session) {
        Intrinsics.checkNotNullParameter(proceed, "proceed");
        Intrinsics.checkNotNullParameter(session, "session");
        List list = this.f764a;
        if (!list.isEmpty()) {
            ListIterator listIterator = list.listIterator(list.size());
            while (listIterator.hasPrevious()) {
                proceed = new a((t) listIterator.previous(), proceed, session);
            }
        }
        return proceed.invoke(obj, iVar);
    }

    @Override // zm.t
    public zm.i b(Object obj, Function1 proceed, t.c session) {
        Intrinsics.checkNotNullParameter(proceed, "proceed");
        Intrinsics.checkNotNullParameter(session, "session");
        List list = this.f764a;
        if (!list.isEmpty()) {
            ListIterator listIterator = list.listIterator(list.size());
            while (listIterator.hasPrevious()) {
                proceed = new d((t) listIterator.previous(), proceed, session);
            }
        }
        return (zm.i) proceed.invoke(obj);
    }

    @Override // zm.t
    public Object c(Object obj, Object obj2, zm.a context, Function3 proceed, t.c session) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(proceed, "proceed");
        Intrinsics.checkNotNullParameter(session, "session");
        List list = this.f764a;
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

    @Override // zm.t
    public void d(CoroutineScope workflowScope, t.c session) {
        Intrinsics.checkNotNullParameter(workflowScope, "workflowScope");
        Intrinsics.checkNotNullParameter(session, "session");
        for (t tVar : this.f764a) {
            tVar.d(workflowScope, session);
        }
    }

    @Override // zm.t
    public Object e(Object obj, Object obj2, Object obj3, Function3 proceed, t.c session) {
        Intrinsics.checkNotNullParameter(proceed, "proceed");
        Intrinsics.checkNotNullParameter(session, "session");
        List list = this.f764a;
        if (!list.isEmpty()) {
            ListIterator listIterator = list.listIterator(list.size());
            while (listIterator.hasPrevious()) {
                proceed = new C0012b((t) listIterator.previous(), proceed, session);
            }
        }
        return proceed.invoke(obj, obj2, obj3);
    }
}
