package ym;

import java.util.Map;
import kotlin.Pair;
import kotlin.collections.o0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a0 {

    /* renamed from: a  reason: collision with root package name */
    private final Map f54584a;

    public a0(Map map) {
        Intrinsics.checkNotNullParameter(map, "map");
        this.f54584a = map;
    }

    public final Object a(b0 key) {
        Intrinsics.checkNotNullParameter(key, "key");
        Object obj = this.f54584a.get(key);
        if (obj == null) {
            obj = null;
        }
        if (obj == null) {
            return key.a();
        }
        return obj;
    }

    public final Map b() {
        return this.f54584a;
    }

    public final a0 c(Pair pair) {
        Intrinsics.checkNotNullParameter(pair, "pair");
        return new a0(o0.r(this.f54584a, pair));
    }

    public boolean equals(Object obj) {
        a0 a0Var;
        if (obj instanceof a0) {
            a0Var = (a0) obj;
        } else {
            a0Var = null;
        }
        if (a0Var == null) {
            return false;
        }
        return Intrinsics.areEqual(a0Var.b(), b());
    }

    public int hashCode() {
        return this.f54584a.hashCode();
    }

    public String toString() {
        return "ViewEnvironment(" + this.f54584a + ')';
    }

    public /* synthetic */ a0(Map map, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? o0.i() : map);
    }
}
