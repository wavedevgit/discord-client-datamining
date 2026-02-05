package v0;

import java.util.LinkedHashMap;
import java.util.Set;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final LinkedHashMap f51739a;

    public c(int i10, float f10) {
        this.f51739a = new LinkedHashMap(i10, f10, true);
    }

    public final Object a(Object key) {
        Intrinsics.checkNotNullParameter(key, "key");
        return this.f51739a.get(key);
    }

    public final Set b() {
        Set entrySet = this.f51739a.entrySet();
        Intrinsics.checkNotNullExpressionValue(entrySet, "<get-entries>(...)");
        return entrySet;
    }

    public final boolean c() {
        return this.f51739a.isEmpty();
    }

    public final Object d(Object key, Object value) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(value, "value");
        return this.f51739a.put(key, value);
    }

    public final Object e(Object key) {
        Intrinsics.checkNotNullParameter(key, "key");
        return this.f51739a.remove(key);
    }
}
