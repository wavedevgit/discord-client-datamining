package ts;

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
    private final String f49891a;

    /* renamed from: b  reason: collision with root package name */
    private final o f49892b;

    /* renamed from: c  reason: collision with root package name */
    private final List f49893c;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: c  reason: collision with root package name */
        public static final C0653a f49894c = new C0653a(null);

        /* renamed from: a  reason: collision with root package name */
        private final ts.b f49895a;

        /* renamed from: b  reason: collision with root package name */
        private final Object f49896b;

        /* renamed from: ts.t$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0653a {
            public /* synthetic */ C0653a(DefaultConstructorMarker defaultConstructorMarker) {
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

            private C0653a() {
            }
        }

        public /* synthetic */ a(ts.b bVar, Object obj, DefaultConstructorMarker defaultConstructorMarker) {
            this(bVar, obj);
        }

        private a(ts.b bVar, Object obj) {
            this.f49895a = bVar;
            this.f49896b = obj;
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
            for (a aVar : t.this.f49893c) {
                aVar.f49895a.c(obj, aVar.f49896b);
            }
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a(obj);
            return Unit.f33282a;
        }
    }

    public t(String onZero, o format) {
        List b10;
        Intrinsics.checkNotNullParameter(onZero, "onZero");
        Intrinsics.checkNotNullParameter(format, "format");
        this.f49891a = onZero;
        this.f49892b = format;
        b10 = p.b(format);
        List<l> list = b10;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (l lVar : list) {
            arrayList.add(lVar.c());
        }
        List<n> e02 = CollectionsKt.e0(arrayList);
        ArrayList arrayList2 = new ArrayList(CollectionsKt.w(e02, 10));
        for (n nVar : e02) {
            arrayList2.add(a.f49894c.a(nVar));
        }
        this.f49893c = arrayList2;
    }

    @Override // ts.o
    public us.e a() {
        us.e a10 = this.f49892b.a();
        List<a> list = this.f49893c;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (a aVar : list) {
            arrayList.add(new g(aVar.f49896b, new u(aVar.f49895a)));
        }
        v a11 = w.a(arrayList);
        if (a11 instanceof a0) {
            return new us.c(this.f49891a);
        }
        return new us.b(CollectionsKt.o(ir.v.a(new b(a11), new us.c(this.f49891a)), ir.v.a(new c(a0.f49856a), a10)));
    }

    @Override // ts.o
    public vs.q b() {
        List e10;
        List l10 = CollectionsKt.l();
        vs.q b10 = this.f49892b.b();
        vs.q b11 = new j(this.f49891a).b();
        if (this.f49893c.isEmpty()) {
            e10 = CollectionsKt.l();
        } else {
            e10 = CollectionsKt.e(new vs.u(new d()));
        }
        return new vs.q(l10, CollectionsKt.o(b10, vs.n.b(CollectionsKt.o(b11, new vs.q(e10, CollectionsKt.l())))));
    }

    public final o d() {
        return this.f49892b;
    }

    public boolean equals(Object obj) {
        if (obj instanceof t) {
            t tVar = (t) obj;
            if (Intrinsics.areEqual(this.f49891a, tVar.f49891a) && Intrinsics.areEqual(this.f49892b, tVar.f49892b)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return (this.f49891a.hashCode() * 31) + this.f49892b.hashCode();
    }

    public String toString() {
        return "Optional(" + this.f49891a + ", " + this.f49892b + ')';
    }
}
