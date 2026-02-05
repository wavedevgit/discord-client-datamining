package zs;

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
    private final String f56253a;

    /* renamed from: b  reason: collision with root package name */
    private final o f56254b;

    /* renamed from: c  reason: collision with root package name */
    private final List f56255c;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: c  reason: collision with root package name */
        public static final C0795a f56256c = new C0795a(null);

        /* renamed from: a  reason: collision with root package name */
        private final zs.b f56257a;

        /* renamed from: b  reason: collision with root package name */
        private final Object f56258b;

        /* renamed from: zs.t$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0795a {
            public /* synthetic */ C0795a(DefaultConstructorMarker defaultConstructorMarker) {
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

            private C0795a() {
            }
        }

        public /* synthetic */ a(zs.b bVar, Object obj, DefaultConstructorMarker defaultConstructorMarker) {
            this(bVar, obj);
        }

        private a(zs.b bVar, Object obj) {
            this.f56257a = bVar;
            this.f56258b = obj;
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
            for (a aVar : t.this.f56255c) {
                aVar.f56257a.c(obj, aVar.f56258b);
            }
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a(obj);
            return Unit.f31988a;
        }
    }

    public t(String onZero, o format) {
        List b10;
        Intrinsics.checkNotNullParameter(onZero, "onZero");
        Intrinsics.checkNotNullParameter(format, "format");
        this.f56253a = onZero;
        this.f56254b = format;
        b10 = p.b(format);
        List<l> list = b10;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (l lVar : list) {
            arrayList.add(lVar.c());
        }
        List<n> e02 = CollectionsKt.e0(arrayList);
        ArrayList arrayList2 = new ArrayList(CollectionsKt.w(e02, 10));
        for (n nVar : e02) {
            arrayList2.add(a.f56256c.a(nVar));
        }
        this.f56255c = arrayList2;
    }

    @Override // zs.o
    public at.e a() {
        at.e a10 = this.f56254b.a();
        List<a> list = this.f56255c;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (a aVar : list) {
            arrayList.add(new g(aVar.f56258b, new u(aVar.f56257a)));
        }
        v a11 = w.a(arrayList);
        if (a11 instanceof a0) {
            return new at.c(this.f56253a);
        }
        return new at.b(CollectionsKt.o(or.v.a(new b(a11), new at.c(this.f56253a)), or.v.a(new c(a0.f56218a), a10)));
    }

    @Override // zs.o
    public bt.q b() {
        List e10;
        List l10 = CollectionsKt.l();
        bt.q b10 = this.f56254b.b();
        bt.q b11 = new j(this.f56253a).b();
        if (this.f56255c.isEmpty()) {
            e10 = CollectionsKt.l();
        } else {
            e10 = CollectionsKt.e(new bt.u(new d()));
        }
        return new bt.q(l10, CollectionsKt.o(b10, bt.n.b(CollectionsKt.o(b11, new bt.q(e10, CollectionsKt.l())))));
    }

    public final o d() {
        return this.f56254b;
    }

    public boolean equals(Object obj) {
        if (obj instanceof t) {
            t tVar = (t) obj;
            if (Intrinsics.areEqual(this.f56253a, tVar.f56253a) && Intrinsics.areEqual(this.f56254b, tVar.f56254b)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return (this.f56253a.hashCode() * 31) + this.f56254b.hashCode();
    }

    public String toString() {
        return "Optional(" + this.f56253a + ", " + this.f56254b + ')';
    }
}
