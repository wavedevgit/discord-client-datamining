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
    public static final b f25902e = new b(null);

    /* renamed from: i  reason: collision with root package name */
    public static final n f25903i = new n();

    /* renamed from: d  reason: collision with root package name */
    private final Map f25904d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final Map f25905a;

        public a(n nVar) {
            this.f25905a = o0.y(nVar.f25904d);
        }

        public final n a() {
            return new n(k5.c.b(this.f25905a), null);
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
        Map map = this.f25904d;
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
        android.support.v4.media.session.b.a(this.f25904d.get(str));
        return null;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if ((obj instanceof n) && Intrinsics.areEqual(this.f25904d, ((n) obj).f25904d)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return this.f25904d.hashCode();
    }

    public final boolean isEmpty() {
        return this.f25904d.isEmpty();
    }

    @Override // java.lang.Iterable
    public Iterator iterator() {
        Map map = this.f25904d;
        ArrayList arrayList = new ArrayList(map.size());
        for (Map.Entry entry : map.entrySet()) {
            android.support.v4.media.session.b.a(entry.getValue());
            arrayList.add(jr.v.a((String) entry.getKey(), null));
        }
        return arrayList.iterator();
    }

    public String toString() {
        return "Parameters(entries=" + this.f25904d + ')';
    }

    private n(Map map) {
        this.f25904d = map;
    }

    public n() {
        this(o0.i());
    }
}
