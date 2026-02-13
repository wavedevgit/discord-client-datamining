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
    private final String f37204a;

    /* renamed from: b  reason: collision with root package name */
    private final o f37205b;

    /* renamed from: c  reason: collision with root package name */
    private final List f37206c;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: c  reason: collision with root package name */
        public static final C0519a f37207c = new C0519a(null);

        /* renamed from: a  reason: collision with root package name */
        private final mt.b f37208a;

        /* renamed from: b  reason: collision with root package name */
        private final Object f37209b;

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
            this.f37208a = bVar;
            this.f37209b = obj;
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
            for (a aVar : t.this.f37206c) {
                aVar.f37208a.c(obj, aVar.f37209b);
            }
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a(obj);
            return Unit.f32556a;
        }
    }

    public t(String onZero, o format) {
        List b10;
        Intrinsics.checkNotNullParameter(onZero, "onZero");
        Intrinsics.checkNotNullParameter(format, "format");
        this.f37204a = onZero;
        this.f37205b = format;
        b10 = p.b(format);
        List<l> list = b10;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (l lVar : list) {
            arrayList.add(lVar.c());
        }
        List<n> e02 = CollectionsKt.e0(arrayList);
        ArrayList arrayList2 = new ArrayList(CollectionsKt.w(e02, 10));
        for (n nVar : e02) {
            arrayList2.add(a.f37207c.a(nVar));
        }
        this.f37206c = arrayList2;
    }

    @Override // mt.o
    public nt.e a() {
        nt.e a10 = this.f37205b.a();
        List<a> list = this.f37206c;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (a aVar : list) {
            arrayList.add(new g(aVar.f37209b, new u(aVar.f37208a)));
        }
        v a11 = w.a(arrayList);
        if (a11 instanceof a0) {
            return new nt.c(this.f37204a);
        }
        return new nt.b(CollectionsKt.o(as.v.a(new b(a11), new nt.c(this.f37204a)), as.v.a(new c(a0.f37169a), a10)));
    }

    @Override // mt.o
    public ot.q b() {
        List e10;
        List l10 = CollectionsKt.l();
        ot.q b10 = this.f37205b.b();
        ot.q b11 = new j(this.f37204a).b();
        if (this.f37206c.isEmpty()) {
            e10 = CollectionsKt.l();
        } else {
            e10 = CollectionsKt.e(new ot.u(new d()));
        }
        return new ot.q(l10, CollectionsKt.o(b10, ot.n.b(CollectionsKt.o(b11, new ot.q(e10, CollectionsKt.l())))));
    }

    public final o d() {
        return this.f37205b;
    }

    public boolean equals(Object obj) {
        if (obj instanceof t) {
            t tVar = (t) obj;
            if (Intrinsics.areEqual(this.f37204a, tVar.f37204a) && Intrinsics.areEqual(this.f37205b, tVar.f37205b)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return (this.f37204a.hashCode() * 31) + this.f37205b.hashCode();
    }

    public String toString() {
        return "Optional(" + this.f37204a + ", " + this.f37205b + ')';
    }
}
