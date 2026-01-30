package kotlin.reflect.jvm.internal.impl.types.checker;

import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class e {

    /* renamed from: a  reason: collision with root package name */
    private final KotlinType f35979a;

    /* renamed from: b  reason: collision with root package name */
    private final e f35980b;

    public e(KotlinType type, e eVar) {
        Intrinsics.checkNotNullParameter(type, "type");
        this.f35979a = type;
        this.f35980b = eVar;
    }

    public final e a() {
        return this.f35980b;
    }

    public final KotlinType b() {
        return this.f35979a;
    }
}
