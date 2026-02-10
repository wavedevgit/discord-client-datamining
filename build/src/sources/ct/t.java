package ct;

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
    private final String f20237a;

    /* renamed from: b  reason: collision with root package name */
    private final o f20238b;

    /* renamed from: c  reason: collision with root package name */
    private final List f20239c;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: c  reason: collision with root package name */
        public static final C0293a f20240c = new C0293a(null);

        /* renamed from: a  reason: collision with root package name */
        private final ct.b f20241a;

        /* renamed from: b  reason: collision with root package name */
        private final Object f20242b;

        /* renamed from: ct.t$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0293a {
            public /* synthetic */ C0293a(DefaultConstructorMarker defaultConstructorMarker) {
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

            private C0293a() {
            }
        }

        public /* synthetic */ a(ct.b bVar, Object obj, DefaultConstructorMarker defaultConstructorMarker) {
            this(bVar, obj);
        }

        private a(ct.b bVar, Object obj) {
            this.f20241a = bVar;
            this.f20242b = obj;
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
            for (a aVar : t.this.f20239c) {
                aVar.f20241a.c(obj, aVar.f20242b);
            }
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a(obj);
            return Unit.f31765a;
        }
    }

    public t(String onZero, o format) {
        List b10;
        Intrinsics.checkNotNullParameter(onZero, "onZero");
        Intrinsics.checkNotNullParameter(format, "format");
        this.f20237a = onZero;
        this.f20238b = format;
        b10 = p.b(format);
        List<l> list = b10;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (l lVar : list) {
            arrayList.add(lVar.c());
        }
        List<n> e02 = CollectionsKt.e0(arrayList);
        ArrayList arrayList2 = new ArrayList(CollectionsKt.w(e02, 10));
        for (n nVar : e02) {
            arrayList2.add(a.f20240c.a(nVar));
        }
        this.f20239c = arrayList2;
    }

    @Override // ct.o
    public dt.e a() {
        dt.e a10 = this.f20238b.a();
        List<a> list = this.f20239c;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (a aVar : list) {
            arrayList.add(new g(aVar.f20242b, new u(aVar.f20241a)));
        }
        v a11 = w.a(arrayList);
        if (a11 instanceof a0) {
            return new dt.c(this.f20237a);
        }
        return new dt.b(CollectionsKt.o(rr.v.a(new b(a11), new dt.c(this.f20237a)), rr.v.a(new c(a0.f20202a), a10)));
    }

    @Override // ct.o
    public et.q b() {
        List e10;
        List l10 = CollectionsKt.l();
        et.q b10 = this.f20238b.b();
        et.q b11 = new j(this.f20237a).b();
        if (this.f20239c.isEmpty()) {
            e10 = CollectionsKt.l();
        } else {
            e10 = CollectionsKt.e(new et.u(new d()));
        }
        return new et.q(l10, CollectionsKt.o(b10, et.n.b(CollectionsKt.o(b11, new et.q(e10, CollectionsKt.l())))));
    }

    public final o d() {
        return this.f20238b;
    }

    public boolean equals(Object obj) {
        if (obj instanceof t) {
            t tVar = (t) obj;
            if (Intrinsics.areEqual(this.f20237a, tVar.f20237a) && Intrinsics.areEqual(this.f20238b, tVar.f20238b)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return (this.f20237a.hashCode() * 31) + this.f20238b.hashCode();
    }

    public String toString() {
        return "Optional(" + this.f20237a + ", " + this.f20238b + ')';
    }
}
