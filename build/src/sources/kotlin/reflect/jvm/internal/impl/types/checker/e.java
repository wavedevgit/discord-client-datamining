package kotlin.reflect.jvm.internal.impl.types.checker;

import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class e {

    /* renamed from: a  reason: collision with root package name */
    private final KotlinType f34446a;

    /* renamed from: b  reason: collision with root package name */
    private final e f34447b;

    public e(KotlinType type, e eVar) {
        Intrinsics.checkNotNullParameter(type, "type");
        this.f34446a = type;
        this.f34447b = eVar;
    }

    public final e a() {
        return this.f34447b;
    }

    public final KotlinType b() {
        return this.f34446a;
    }
}
