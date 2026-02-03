package us;

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
    private final String f50665a;

    /* renamed from: b  reason: collision with root package name */
    private final o f50666b;

    /* renamed from: c  reason: collision with root package name */
    private final List f50667c;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: c  reason: collision with root package name */
        public static final C0674a f50668c = new C0674a(null);

        /* renamed from: a  reason: collision with root package name */
        private final us.b f50669a;

        /* renamed from: b  reason: collision with root package name */
        private final Object f50670b;

        /* renamed from: us.t$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0674a {
            public /* synthetic */ C0674a(DefaultConstructorMarker defaultConstructorMarker) {
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

            private C0674a() {
            }
        }

        public /* synthetic */ a(us.b bVar, Object obj, DefaultConstructorMarker defaultConstructorMarker) {
            this(bVar, obj);
        }

        private a(us.b bVar, Object obj) {
            this.f50669a = bVar;
            this.f50670b = obj;
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
            for (a aVar : t.this.f50667c) {
                aVar.f50669a.c(obj, aVar.f50670b);
            }
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            a(obj);
            return Unit.f33074a;
        }
    }

    public t(String onZero, o format) {
        List b10;
        Intrinsics.checkNotNullParameter(onZero, "onZero");
        Intrinsics.checkNotNullParameter(format, "format");
        this.f50665a = onZero;
        this.f50666b = format;
        b10 = p.b(format);
        List<l> list = b10;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (l lVar : list) {
            arrayList.add(lVar.c());
        }
        List<n> e02 = CollectionsKt.e0(arrayList);
        ArrayList arrayList2 = new ArrayList(CollectionsKt.w(e02, 10));
        for (n nVar : e02) {
            arrayList2.add(a.f50668c.a(nVar));
        }
        this.f50667c = arrayList2;
    }

    @Override // us.o
    public vs.e a() {
        vs.e a10 = this.f50666b.a();
        List<a> list = this.f50667c;
        ArrayList arrayList = new ArrayList(CollectionsKt.w(list, 10));
        for (a aVar : list) {
            arrayList.add(new g(aVar.f50670b, new u(aVar.f50669a)));
        }
        v a11 = w.a(arrayList);
        if (a11 instanceof a0) {
            return new vs.c(this.f50665a);
        }
        return new vs.b(CollectionsKt.o(jr.v.a(new b(a11), new vs.c(this.f50665a)), jr.v.a(new c(a0.f50630a), a10)));
    }

    @Override // us.o
    public ws.q b() {
        List e10;
        List l10 = CollectionsKt.l();
        ws.q b10 = this.f50666b.b();
        ws.q b11 = new j(this.f50665a).b();
        if (this.f50667c.isEmpty()) {
            e10 = CollectionsKt.l();
        } else {
            e10 = CollectionsKt.e(new ws.u(new d()));
        }
        return new ws.q(l10, CollectionsKt.o(b10, ws.n.b(CollectionsKt.o(b11, new ws.q(e10, CollectionsKt.l())))));
    }

    public final o d() {
        return this.f50666b;
    }

    public boolean equals(Object obj) {
        if (obj instanceof t) {
            t tVar = (t) obj;
            if (Intrinsics.areEqual(this.f50665a, tVar.f50665a) && Intrinsics.areEqual(this.f50666b, tVar.f50666b)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return (this.f50665a.hashCode() * 31) + this.f50666b.hashCode();
    }

    public String toString() {
        return "Optional(" + this.f50665a + ", " + this.f50666b + ')';
    }
}
