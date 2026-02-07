package bt;

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
    private final String f7082a;

    /* renamed from: b  reason: collision with root package name */
    private final o f7083b;

    /* renamed from: c  reason: collision with root package name */
    private final List f7084c;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: c  reason: collision with root package name */
        public static final C0115a f7085c = new C0115a(null);

        /* renamed from: a  reason: collision with root package name */
        private final bt.b f7086a;

        /* renamed from: b  reason: collision with root package name */
        private final Object f7087b;

        /* renamed from: bt.t$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0115a {
            public /* synthetic */ C0115a(DefaultConstructorMarker defaultConstructorMarker) {
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

            private C0115a() {
            }
        }

        public /* synthetic */ a(bt.b bVar, Object obj, DefaultConstructorMarker defaultConstructorMarker) {
            this(bVar, obj);
        }

        private a(bt.b bVar, Object obj) {
            this.f7086a = bVar;
            this.f7087b = obj;
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
            for (a aVar : t.this.f7084c) {
                aVar.f7086a.c(obj, aVar.f7087b);
            }
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a(obj);
            return Unit.f32056a;
        }
    }

    public t(String onZero, o format) {
        List b10;
        Intrinsics.checkNotNullParameter(onZero, "onZero");
        Intrinsics.checkNotNullParameter(format, "format");
        this.f7082a = onZero;
        this.f7083b = format;
        b10 = p.b(format);
        List<l> list = b10;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (l lVar : list) {
            arrayList.add(lVar.c());
        }
        List<n> e02 = CollectionsKt.e0(arrayList);
        ArrayList arrayList2 = new ArrayList(CollectionsKt.w(e02, 10));
        for (n nVar : e02) {
            arrayList2.add(a.f7085c.a(nVar));
        }
        this.f7084c = arrayList2;
    }

    @Override // bt.o
    public ct.e a() {
        ct.e a10 = this.f7083b.a();
        List<a> list = this.f7084c;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (a aVar : list) {
            arrayList.add(new g(aVar.f7087b, new u(aVar.f7086a)));
        }
        v a11 = w.a(arrayList);
        if (a11 instanceof a0) {
            return new ct.c(this.f7082a);
        }
        return new ct.b(CollectionsKt.o(qr.v.a(new b(a11), new ct.c(this.f7082a)), qr.v.a(new c(a0.f7047a), a10)));
    }

    @Override // bt.o
    public dt.q b() {
        List e10;
        List l10 = CollectionsKt.l();
        dt.q b10 = this.f7083b.b();
        dt.q b11 = new j(this.f7082a).b();
        if (this.f7084c.isEmpty()) {
            e10 = CollectionsKt.l();
        } else {
            e10 = CollectionsKt.e(new dt.u(new d()));
        }
        return new dt.q(l10, CollectionsKt.o(b10, dt.n.b(CollectionsKt.o(b11, new dt.q(e10, CollectionsKt.l())))));
    }

    public final o d() {
        return this.f7083b;
    }

    public boolean equals(Object obj) {
        if (obj instanceof t) {
            t tVar = (t) obj;
            if (Intrinsics.areEqual(this.f7082a, tVar.f7082a) && Intrinsics.areEqual(this.f7083b, tVar.f7083b)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return (this.f7082a.hashCode() * 31) + this.f7083b.hashCode();
    }

    public String toString() {
        return "Optional(" + this.f7082a + ", " + this.f7083b + ')';
    }
}
