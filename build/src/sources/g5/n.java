package g5;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;
import kotlin.collections.o0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMappedMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class n implements Iterable, KMappedMarker {

    /* renamed from: e  reason: collision with root package name */
    public static final b f23798e = new b(null);

    /* renamed from: i  reason: collision with root package name */
    public static final n f23799i = new n();

    /* renamed from: d  reason: collision with root package name */
    private final Map f23800d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final Map f23801a;

        public a(n nVar) {
            this.f23801a = o0.y(nVar.f23800d);
        }

        public final n a() {
            return new n(k5.c.b(this.f23801a), null);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private b() {
        }
    }

    public /* synthetic */ n(Map map, DefaultConstructorMarker defaultConstructorMarker) {
        this(map);
    }

    public final Map c() {
        if (isEmpty()) {
            return o0.i();
        }
        Map map = this.f23800d;
        LinkedHashMap linkedHashMap = new LinkedHashMap();
        Iterator it = map.entrySet().iterator();
        if (!it.hasNext()) {
            return linkedHashMap;
        }
        android.support.v4.media.session.b.a(((Map.Entry) it.next()).getValue());
        throw null;
    }

    public final a d() {
        return new a(this);
    }

    public final Object e(String str) {
        android.support.v4.media.session.b.a(this.f23800d.get(str));
        return null;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if ((obj instanceof n) && Intrinsics.areEqual(this.f23800d, ((n) obj).f23800d)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f23800d.hashCode();
    }

    public final boolean isEmpty() {
        return this.f23800d.isEmpty();
    }

    @Override // java.lang.Iterable
    public Iterator iterator() {
        Map map = this.f23800d;
        ArrayList arrayList = new ArrayList(map.size());
        for (Map.Entry entry : map.entrySet()) {
            android.support.v4.media.session.b.a(entry.getValue());
            arrayList.add(or.v.a((String) entry.getKey(), null));
        }
        return arrayList.iterator();
    }

    public String toString() {
        return "Parameters(entries=" + this.f23800d + ')';
    }

    private n(Map map) {
        this.f23800d = map;
    }

    public n() {
        this(o0.i());
    }
}
