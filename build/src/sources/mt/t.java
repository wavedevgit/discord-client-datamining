package mt;

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
    private final String f36635a;

    /* renamed from: b  reason: collision with root package name */
    private final o f36636b;

    /* renamed from: c  reason: collision with root package name */
    private final List f36637c;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: c  reason: collision with root package name */
        public static final C0519a f36638c = new C0519a(null);

        /* renamed from: a  reason: collision with root package name */
        private final mt.b f36639a;

        /* renamed from: b  reason: collision with root package name */
        private final Object f36640b;

        /* renamed from: mt.t$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0519a {
            public /* synthetic */ C0519a(DefaultConstructorMarker defaultConstructorMarker) {
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

            private C0519a() {
            }
        }

        public /* synthetic */ a(mt.b bVar, Object obj, DefaultConstructorMarker defaultConstructorMarker) {
            this(bVar, obj);
        }

        private a(mt.b bVar, Object obj) {
            this.f36639a = bVar;
            this.f36640b = obj;
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
            for (a aVar : t.this.f36637c) {
                aVar.f36639a.c(obj, aVar.f36640b);
            }
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a(obj);
            return Unit.f31987a;
        }
    }

    public t(String onZero, o format) {
        List b10;
        Intrinsics.checkNotNullParameter(onZero, "onZero");
        Intrinsics.checkNotNullParameter(format, "format");
        this.f36635a = onZero;
        this.f36636b = format;
        b10 = p.b(format);
        List<l> list = b10;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (l lVar : list) {
            arrayList.add(lVar.c());
        }
        List<n> e02 = CollectionsKt.e0(arrayList);
        ArrayList arrayList2 = new ArrayList(CollectionsKt.w(e02, 10));
        for (n nVar : e02) {
            arrayList2.add(a.f36638c.a(nVar));
        }
        this.f36637c = arrayList2;
    }

    @Override // mt.o
    public nt.e a() {
        nt.e a10 = this.f36636b.a();
        List<a> list = this.f36637c;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (a aVar : list) {
            arrayList.add(new g(aVar.f36640b, new u(aVar.f36639a)));
        }
        v a11 = w.a(arrayList);
        if (a11 instanceof a0) {
            return new nt.c(this.f36635a);
        }
        return new nt.b(CollectionsKt.o(as.v.a(new b(a11), new nt.c(this.f36635a)), as.v.a(new c(a0.f36600a), a10)));
    }

    @Override // mt.o
    public ot.q b() {
        List e10;
        List l10 = CollectionsKt.l();
        ot.q b10 = this.f36636b.b();
        ot.q b11 = new j(this.f36635a).b();
        if (this.f36637c.isEmpty()) {
            e10 = CollectionsKt.l();
        } else {
            e10 = CollectionsKt.e(new ot.u(new d()));
        }
        return new ot.q(l10, CollectionsKt.o(b10, ot.n.b(CollectionsKt.o(b11, new ot.q(e10, CollectionsKt.l())))));
    }

    public final o d() {
        return this.f36636b;
    }

    public boolean equals(Object obj) {
        if (obj instanceof t) {
            t tVar = (t) obj;
            if (Intrinsics.areEqual(this.f36635a, tVar.f36635a) && Intrinsics.areEqual(this.f36636b, tVar.f36636b)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return (this.f36635a.hashCode() * 31) + this.f36636b.hashCode();
    }

    public String toString() {
        return "Optional(" + this.f36635a + ", " + this.f36636b + ')';
    }
}
