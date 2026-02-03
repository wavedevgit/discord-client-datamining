package ws;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class q {

    /* renamed from: a  reason: collision with root package name */
    private final List f53019a;

    /* renamed from: b  reason: collision with root package name */
    private final List f53020b;

    public q(List operations, List followedBy) {
        Intrinsics.checkNotNullParameter(operations, "operations");
        Intrinsics.checkNotNullParameter(followedBy, "followedBy");
        this.f53019a = operations;
        this.f53020b = followedBy;
    }

    public final List a() {
        return this.f53020b;
    }

    public final List b() {
        return this.f53019a;
    }

    public String toString() {
        return CollectionsKt.x0(this.f53019a, ", ", null, null, 0, null, null, 62, null) + '(' + CollectionsKt.x0(this.f53020b, ";", null, null, 0, null, null, 62, null) + ')';
    }
}
