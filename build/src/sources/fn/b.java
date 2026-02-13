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
    private final List f23856a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends Lambda implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ t f23857d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function2 f23858e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ t.c f23859i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(t tVar, Function2 function2, t.c cVar) {
            super(2);
            this.f23857d = tVar;
            this.f23858e = function2;
            this.f23859i = cVar;
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: a */
        public final Object invoke(Object obj, en.i iVar) {
            return this.f23857d.b(obj, iVar, this.f23858e, this.f23859i);
        }
    }

    /* renamed from: fn.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class C0320b extends Lambda implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ t f23860d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function3 f23861e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ t.c f23862i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        C0320b(t tVar, Function3 function3, t.c cVar) {
            super(3);
            this.f23860d = tVar;
            this.f23861e = function3;
            this.f23862i = cVar;
        }

        @Override // kotlin.jvm.functions.Function3
        public final Object invoke(Object obj, Object obj2, Object obj3) {
            return this.f23860d.e(obj, obj2, obj3, this.f23861e, this.f23862i);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends Lambda implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ t f23863d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ en.a f23864e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ t.c f23865i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ b f23866o;

        /* renamed from: p  reason: collision with root package name */
        final /* synthetic */ Function3 f23867p;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a extends Lambda implements Function3 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ b f23868d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ t.b f23869e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ Function3 f23870i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(b bVar, t.b bVar2, Function3 function3) {
                super(3);
                this.f23868d = bVar;
                this.f23869e = bVar2;
                this.f23870i = function3;
            }

            @Override // kotlin.jvm.functions.Function3
            /* renamed from: a */
            public final Object invoke(Object obj, Object obj2, t.b bVar) {
                return this.f23870i.invoke(obj, obj2, this.f23868d.g(this.f23869e, bVar));
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(t tVar, en.a aVar, t.c cVar, b bVar, Function3 function3) {
            super(3);
            this.f23863d = tVar;
            this.f23864e = aVar;
            this.f23865i = cVar;
            this.f23866o = bVar;
            this.f23867p = function3;
        }

        @Override // kotlin.jvm.functions.Function3
        /* renamed from: a */
        public final Object invoke(Object obj, Object obj2, t.b bVar) {
            return this.f23863d.a(obj, obj2, this.f23864e, new a(this.f23866o, bVar, this.f23867p), this.f23865i);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class d extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ t f23871d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function1 f23872e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ t.c f23873i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        d(t tVar, Function1 function1, t.c cVar) {
            super(1);
            this.f23871d = tVar;
            this.f23872e = function1;
            this.f23873i = cVar;
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final en.i invoke(Object obj) {
            return this.f23871d.c(obj, this.f23872e, this.f23873i);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e implements t.b {

        /* renamed from: a  reason: collision with root package name */
        private final t.b f23874a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ t.b f23875b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ t.b f23876c;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class a extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ t.b f23877d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Function1 f23878e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(t.b bVar, Function1 function1) {
                super(1);
                this.f23877d = bVar;
                this.f23878e = function1;
            }

            public final void a(r interceptedAction) {
                Intrinsics.checkNotNullParameter(interceptedAction, "interceptedAction");
                this.f23877d.c(interceptedAction, this.f23878e);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((r) obj);
                return Unit.f32556a;
            }
        }

        /* renamed from: fn.b$e$b  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class C0321b extends Lambda implements Function4 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ t.b f23879d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Function4 f23880e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0321b(t.b bVar, Function4 function4) {
                super(4);
                this.f23879d = bVar;
                this.f23880e = function4;
            }

            @Override // kotlin.jvm.functions.Function4
            /* renamed from: a */
            public final Object invoke(q c10, Object obj, String k10, Function1 h10) {
                Intrinsics.checkNotNullParameter(c10, "c");
                Intrinsics.checkNotNullParameter(k10, "k");
                Intrinsics.checkNotNullParameter(h10, "h");
                return this.f23879d.a(c10, obj, k10, h10, this.f23880e);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        static final class c extends Lambda implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ t.b f23881d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Function2 f23882e;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            c(t.b bVar, Function2 function2) {
                super(2);
                this.f23881d = bVar;
                this.f23882e = function2;
            }

            public final void a(String iKey, Function1 iSideEffect) {
                Intrinsics.checkNotNullParameter(iKey, "iKey");
                Intrinsics.checkNotNullParameter(iSideEffect, "iSideEffect");
                this.f23881d.b(iKey, iSideEffect, this.f23882e);
            }

            @Override // kotlin.jvm.functions.Function2
            public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
                a((String) obj, (Function1) obj2);
                return Unit.f32556a;
            }
        }

        e(t.b bVar, t.b bVar2) {
            this.f23875b = bVar;
            this.f23876c = bVar2;
            Intrinsics.checkNotNull(bVar);
            this.f23874a = bVar;
        }

        @Override // en.t.b
        public Object a(q child, Object obj, String key, Function1 handler, Function4 proceed) {
            Intrinsics.checkNotNullParameter(child, "child");
            Intrinsics.checkNotNullParameter(key, "key");
            Intrinsics.checkNotNullParameter(handler, "handler");
            Intrinsics.checkNotNullParameter(proceed, "proceed");
            return this.f23874a.a(child, obj, key, handler, new C0321b(this.f23876c, proceed));
        }

        @Override // en.t.b
        public void b(String key, Function1 sideEffect, Function2 proceed) {
            Intrinsics.checkNotNullParameter(key, "key");
            Intrinsics.checkNotNullParameter(sideEffect, "sideEffect");
            Intrinsics.checkNotNullParameter(proceed, "proceed");
            this.f23874a.b(key, sideEffect, new c(this.f23876c, proceed));
        }

        @Override // en.t.b
        public void c(r action, Function1 proceed) {
            Intrinsics.checkNotNullParameter(action, "action");
            Intrinsics.checkNotNullParameter(proceed, "proceed");
            this.f23874a.c(action, new a(this.f23876c, proceed));
        }
    }

    public b(List interceptors) {
        Intrinsics.checkNotNullParameter(interceptors, "interceptors");
        this.f23856a = interceptors;
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
        List list = this.f23856a;
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
        List list = this.f23856a;
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
        List list = this.f23856a;
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
        for (t tVar : this.f23856a) {
            tVar.d(workflowScope, session);
        }
    }

    @Override // en.t
    public Object e(Object obj, Object obj2, Object obj3, Function3 proceed, t.c session) {
        Intrinsics.checkNotNullParameter(proceed, "proceed");
        Intrinsics.checkNotNullParameter(session, "session");
        List list = this.f23856a;
        if (!list.isEmpty()) {
            ListIterator listIterator = list.listIterator(list.size());
            while (listIterator.hasPrevious()) {
                proceed = new C0320b((t) listIterator.previous(), proceed, session);
            }
        }
        return proceed.invoke(obj, obj2, obj3);
    }
}
