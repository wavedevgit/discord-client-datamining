package z2;

import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.atomic.AtomicBoolean;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import z2.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a extends d {

    /* renamed from: a  reason: collision with root package name */
    private final Map f56625a;

    /* renamed from: b  reason: collision with root package name */
    private final AtomicBoolean f56626b;

    /* renamed from: z2.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class C0789a extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        public static final C0789a f56627d = new C0789a();

        C0789a() {
            super(1);
        }

        @Override // kotlin.jvm.functions.Function1
        /* renamed from: a */
        public final CharSequence invoke(Map.Entry entry) {
            Intrinsics.checkNotNullParameter(entry, "entry");
            return "  " + ((d.a) entry.getKey()).a() + " = " + entry.getValue();
        }
    }

    public /* synthetic */ a(Map map, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? new LinkedHashMap() : map, (i10 & 2) != 0 ? true : z10);
    }

    @Override // z2.d
    public Map a() {
        Map unmodifiableMap = Collections.unmodifiableMap(this.f56625a);
        Intrinsics.checkNotNullExpressionValue(unmodifiableMap, "unmodifiableMap(preferencesMap)");
        return unmodifiableMap;
    }

    @Override // z2.d
    public Object b(d.a key) {
        Intrinsics.checkNotNullParameter(key, "key");
        return this.f56625a.get(key);
    }

    public final void e() {
        if (!this.f56626b.get()) {
            return;
        }
        throw new IllegalStateException("Do mutate preferences once returned to DataStore.");
    }

    public boolean equals(Object obj) {
        if (obj instanceof a) {
            return Intrinsics.areEqual(this.f56625a, ((a) obj).f56625a);
        }
        return false;
    }

    public final void f() {
        this.f56626b.set(true);
    }

    public final void g(d.b... pairs) {
        Intrinsics.checkNotNullParameter(pairs, "pairs");
        e();
        if (pairs.length <= 0) {
            return;
        }
        d.b bVar = pairs[0];
        throw null;
    }

    public final Object h(d.a key) {
        Intrinsics.checkNotNullParameter(key, "key");
        e();
        return this.f56625a.remove(key);
    }

    public int hashCode() {
        return this.f56625a.hashCode();
    }

    public final void i(d.a key, Object obj) {
        Intrinsics.checkNotNullParameter(key, "key");
        j(key, obj);
    }

    public final void j(d.a key, Object obj) {
        Intrinsics.checkNotNullParameter(key, "key");
        e();
        if (obj == null) {
            h(key);
        } else if (obj instanceof Set) {
            Map map = this.f56625a;
            Set unmodifiableSet = Collections.unmodifiableSet(CollectionsKt.l1((Iterable) obj));
            Intrinsics.checkNotNullExpressionValue(unmodifiableSet, "unmodifiableSet(value.toSet())");
            map.put(key, unmodifiableSet);
        } else {
            this.f56625a.put(key, obj);
        }
    }

    public String toString() {
        return CollectionsKt.x0(this.f56625a.entrySet(), ",\n", "{\n", "\n}", 0, null, C0789a.f56627d, 24, null);
    }

    public a(Map preferencesMap, boolean z10) {
        Intrinsics.checkNotNullParameter(preferencesMap, "preferencesMap");
        this.f56625a = preferencesMap;
        this.f56626b = new AtomicBoolean(z10);
    }
}
