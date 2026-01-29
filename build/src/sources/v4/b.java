package v4;

import a5.h;
import a5.l;
import g5.m;
import ir.v;
import java.util.ArrayList;
import java.util.List;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import x4.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final List f50598a;

    /* renamed from: b  reason: collision with root package name */
    private final List f50599b;

    /* renamed from: c  reason: collision with root package name */
    private final List f50600c;

    /* renamed from: d  reason: collision with root package name */
    private final List f50601d;

    /* renamed from: e  reason: collision with root package name */
    private final List f50602e;

    public /* synthetic */ b(List list, List list2, List list3, List list4, List list5, DefaultConstructorMarker defaultConstructorMarker) {
        this(list, list2, list3, list4, list5);
    }

    public final List a() {
        return this.f50602e;
    }

    public final List b() {
        return this.f50601d;
    }

    public final List c() {
        return this.f50598a;
    }

    public final List d() {
        return this.f50600c;
    }

    public final List e() {
        return this.f50599b;
    }

    public final String f(Object obj, m mVar) {
        List list = this.f50600c;
        int size = list.size();
        for (int i10 = 0; i10 < size; i10++) {
            Pair pair = (Pair) list.get(i10);
            c5.b bVar = (c5.b) pair.a();
            if (((Class) pair.b()).isAssignableFrom(obj.getClass())) {
                Intrinsics.checkNotNull(bVar, "null cannot be cast to non-null type coil.key.Keyer<kotlin.Any>");
                String a10 = bVar.a(obj, mVar);
                if (a10 != null) {
                    return a10;
                }
            }
        }
        return null;
    }

    public final Object g(Object obj, m mVar) {
        List list = this.f50599b;
        int size = list.size();
        for (int i10 = 0; i10 < size; i10++) {
            Pair pair = (Pair) list.get(i10);
            d5.d dVar = (d5.d) pair.a();
            if (((Class) pair.b()).isAssignableFrom(obj.getClass())) {
                Intrinsics.checkNotNull(dVar, "null cannot be cast to non-null type coil.map.Mapper<kotlin.Any, *>");
                Object a10 = dVar.a(obj, mVar);
                if (a10 != null) {
                    obj = a10;
                }
            }
        }
        return obj;
    }

    public final a h() {
        return new a(this);
    }

    public final Pair i(l lVar, m mVar, h hVar, int i10) {
        int size = this.f50602e.size();
        while (i10 < size) {
            k a10 = ((k.a) this.f50602e.get(i10)).a(lVar, mVar, hVar);
            if (a10 != null) {
                return v.a(a10, Integer.valueOf(i10));
            }
            i10++;
        }
        return null;
    }

    public final Pair j(Object obj, m mVar, h hVar, int i10) {
        int size = this.f50601d.size();
        while (i10 < size) {
            Pair pair = (Pair) this.f50601d.get(i10);
            h.a aVar = (h.a) pair.a();
            if (((Class) pair.b()).isAssignableFrom(obj.getClass())) {
                Intrinsics.checkNotNull(aVar, "null cannot be cast to non-null type coil.fetch.Fetcher.Factory<kotlin.Any>");
                a5.h a10 = aVar.a(obj, mVar, hVar);
                if (a10 != null) {
                    return v.a(a10, Integer.valueOf(i10));
                }
            }
            i10++;
        }
        return null;
    }

    private b(List list, List list2, List list3, List list4, List list5) {
        this.f50598a = list;
        this.f50599b = list2;
        this.f50600c = list3;
        this.f50601d = list4;
        this.f50602e = list5;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final List f50603a;

        /* renamed from: b  reason: collision with root package name */
        private final List f50604b;

        /* renamed from: c  reason: collision with root package name */
        private final List f50605c;

        /* renamed from: d  reason: collision with root package name */
        private final List f50606d;

        /* renamed from: e  reason: collision with root package name */
        private final List f50607e;

        public a() {
            this.f50603a = new ArrayList();
            this.f50604b = new ArrayList();
            this.f50605c = new ArrayList();
            this.f50606d = new ArrayList();
            this.f50607e = new ArrayList();
        }

        public final a a(h.a aVar, Class cls) {
            this.f50606d.add(v.a(aVar, cls));
            return this;
        }

        public final a b(c5.b bVar, Class cls) {
            this.f50605c.add(v.a(bVar, cls));
            return this;
        }

        public final a c(d5.d dVar, Class cls) {
            this.f50604b.add(v.a(dVar, cls));
            return this;
        }

        public final a d(k.a aVar) {
            this.f50607e.add(aVar);
            return this;
        }

        public final b e() {
            return new b(k5.c.a(this.f50603a), k5.c.a(this.f50604b), k5.c.a(this.f50605c), k5.c.a(this.f50606d), k5.c.a(this.f50607e), null);
        }

        public final List f() {
            return this.f50607e;
        }

        public final List g() {
            return this.f50606d;
        }

        public a(b bVar) {
            this.f50603a = CollectionsKt.j1(bVar.c());
            this.f50604b = CollectionsKt.j1(bVar.e());
            this.f50605c = CollectionsKt.j1(bVar.d());
            this.f50606d = CollectionsKt.j1(bVar.b());
            this.f50607e = CollectionsKt.j1(bVar.a());
        }
    }

    public b() {
        this(CollectionsKt.l(), CollectionsKt.l(), CollectionsKt.l(), CollectionsKt.l(), CollectionsKt.l());
    }
}
