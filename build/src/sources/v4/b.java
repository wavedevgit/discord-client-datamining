package v4;

import a5.h;
import a5.l;
import as.v;
import g5.m;
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
    private final List f51329a;

    /* renamed from: b  reason: collision with root package name */
    private final List f51330b;

    /* renamed from: c  reason: collision with root package name */
    private final List f51331c;

    /* renamed from: d  reason: collision with root package name */
    private final List f51332d;

    /* renamed from: e  reason: collision with root package name */
    private final List f51333e;

    public /* synthetic */ b(List list, List list2, List list3, List list4, List list5, DefaultConstructorMarker defaultConstructorMarker) {
        this(list, list2, list3, list4, list5);
    }

    public final List a() {
        return this.f51333e;
    }

    public final List b() {
        return this.f51332d;
    }

    public final List c() {
        return this.f51329a;
    }

    public final List d() {
        return this.f51331c;
    }

    public final List e() {
        return this.f51330b;
    }

    public final String f(Object obj, m mVar) {
        List list = this.f51331c;
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
        List list = this.f51330b;
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
        int size = this.f51333e.size();
        while (i10 < size) {
            k a10 = ((k.a) this.f51333e.get(i10)).a(lVar, mVar, hVar);
            if (a10 != null) {
                return v.a(a10, Integer.valueOf(i10));
            }
            i10++;
        }
        return null;
    }

    public final Pair j(Object obj, m mVar, h hVar, int i10) {
        int size = this.f51332d.size();
        while (i10 < size) {
            Pair pair = (Pair) this.f51332d.get(i10);
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
        this.f51329a = list;
        this.f51330b = list2;
        this.f51331c = list3;
        this.f51332d = list4;
        this.f51333e = list5;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final List f51334a;

        /* renamed from: b  reason: collision with root package name */
        private final List f51335b;

        /* renamed from: c  reason: collision with root package name */
        private final List f51336c;

        /* renamed from: d  reason: collision with root package name */
        private final List f51337d;

        /* renamed from: e  reason: collision with root package name */
        private final List f51338e;

        public a() {
            this.f51334a = new ArrayList();
            this.f51335b = new ArrayList();
            this.f51336c = new ArrayList();
            this.f51337d = new ArrayList();
            this.f51338e = new ArrayList();
        }

        public final a a(h.a aVar, Class cls) {
            this.f51337d.add(v.a(aVar, cls));
            return this;
        }

        public final a b(c5.b bVar, Class cls) {
            this.f51336c.add(v.a(bVar, cls));
            return this;
        }

        public final a c(d5.d dVar, Class cls) {
            this.f51335b.add(v.a(dVar, cls));
            return this;
        }

        public final a d(k.a aVar) {
            this.f51338e.add(aVar);
            return this;
        }

        public final b e() {
            return new b(k5.c.a(this.f51334a), k5.c.a(this.f51335b), k5.c.a(this.f51336c), k5.c.a(this.f51337d), k5.c.a(this.f51338e), null);
        }

        public final List f() {
            return this.f51338e;
        }

        public final List g() {
            return this.f51337d;
        }

        public a(b bVar) {
            this.f51334a = CollectionsKt.j1(bVar.c());
            this.f51335b = CollectionsKt.j1(bVar.e());
            this.f51336c = CollectionsKt.j1(bVar.d());
            this.f51337d = CollectionsKt.j1(bVar.b());
            this.f51338e = CollectionsKt.j1(bVar.a());
        }
    }

    public b() {
        this(CollectionsKt.l(), CollectionsKt.l(), CollectionsKt.l(), CollectionsKt.l(), CollectionsKt.l());
    }
}
