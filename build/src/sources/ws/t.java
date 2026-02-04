package ws;

import java.util.ArrayList;
import java.util.List;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class t implements s {

    /* renamed from: a  reason: collision with root package name */
    private final String f52724a;

    /* renamed from: b  reason: collision with root package name */
    private final o f52725b;

    /* renamed from: c  reason: collision with root package name */
    private final List f52726c;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: c  reason: collision with root package name */
        public static final C0711a f52727c = new C0711a(null);

        /* renamed from: a  reason: collision with root package name */
        private final ws.b f52728a;

        /* renamed from: b  reason: collision with root package name */
        private final Object f52729b;

        /* renamed from: ws.t$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0711a {
            public /* synthetic */ C0711a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            public final a a(n field) {
                Intrinsics.checkNotNullParameter(field, "field");
                Object a10 = field.a();
                if (a10 != null) {
                    return new a(field.b(), a10, null);
                }
                throw new IllegalArgumentException(("The field '" + field.getName() + "' does not define a default value").toString());
            }

            private C0711a() {
            }
        }

        public /* synthetic */ a(ws.b bVar, Object obj, DefaultConstructorMarker defaultConstructorMarker) {
            this(bVar, obj);
        }

        private a(ws.b bVar, Object obj) {
            this.f52728a = bVar;
            this.f52729b = obj;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    /* synthetic */ class b extends FunctionReferenceImpl implements Function1 {
        b(Object obj) {
            super(1, obj, v.class, "test", "test(Ljava/lang/Object;)Z", 0);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final Boolean invoke(Object obj) {
            return Boolean.valueOf(((v) this.receiver).test(obj));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    /* synthetic */ class c extends FunctionReferenceImpl implements Function1 {
        c(Object obj) {
            super(1, obj, a0.class, "test", "test(Ljava/lang/Object;)Z", 0);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final Boolean invoke(Object obj) {
            return Boolean.valueOf(((a0) this.receiver).test(obj));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class d extends Lambda implements Function1 {
        d() {
            super(1);
        }

        public final void a(Object obj) {
            for (a aVar : t.this.f52726c) {
                aVar.f52728a.c(obj, aVar.f52729b);
            }
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a(obj);
            return Unit.f32464a;
        }
    }

    public t(String onZero, o format) {
        List b10;
        Intrinsics.checkNotNullParameter(onZero, "onZero");
        Intrinsics.checkNotNullParameter(format, "format");
        this.f52724a = onZero;
        this.f52725b = format;
        b10 = p.b(format);
        List<l> list = b10;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (l lVar : list) {
            arrayList.add(lVar.c());
        }
        List<n> e02 = CollectionsKt.e0(arrayList);
        ArrayList arrayList2 = new ArrayList(CollectionsKt.w(e02, 10));
        for (n nVar : e02) {
            arrayList2.add(a.f52727c.a(nVar));
        }
        this.f52726c = arrayList2;
    }

    @Override // ws.o
    public xs.e a() {
        xs.e a10 = this.f52725b.a();
        List<a> list = this.f52726c;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (a aVar : list) {
            arrayList.add(new g(aVar.f52729b, new u(aVar.f52728a)));
        }
        v a11 = w.a(arrayList);
        if (a11 instanceof a0) {
            return new xs.c(this.f52724a);
        }
        return new xs.b(CollectionsKt.o(lr.v.a(new b(a11), new xs.c(this.f52724a)), lr.v.a(new c(a0.f52689a), a10)));
    }

    @Override // ws.o
    public ys.q b() {
        List e10;
        List l10 = CollectionsKt.l();
        ys.q b10 = this.f52725b.b();
        ys.q b11 = new j(this.f52724a).b();
        if (this.f52726c.isEmpty()) {
            e10 = CollectionsKt.l();
        } else {
            e10 = CollectionsKt.e(new ys.u(new d()));
        }
        return new ys.q(l10, CollectionsKt.o(b10, ys.n.b(CollectionsKt.o(b11, new ys.q(e10, CollectionsKt.l())))));
    }

    public final o d() {
        return this.f52725b;
    }

    public boolean equals(Object obj) {
        if (obj instanceof t) {
            t tVar = (t) obj;
            if (Intrinsics.areEqual(this.f52724a, tVar.f52724a) && Intrinsics.areEqual(this.f52725b, tVar.f52725b)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return (this.f52724a.hashCode() * 31) + this.f52725b.hashCode();
    }

    public String toString() {
        return "Optional(" + this.f52724a + ", " + this.f52725b + ')';
    }
}
