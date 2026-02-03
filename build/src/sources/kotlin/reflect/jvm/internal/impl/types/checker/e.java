package kotlin.reflect.jvm.internal.impl.types.checker;

import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class e {

    /* renamed from: a  reason: collision with root package name */
    private final KotlinType f35755a;

    /* renamed from: b  reason: collision with root package name */
    private final e f35756b;

    public e(KotlinType type, e eVar) {
        Intrinsics.checkNotNullParameter(type, "type");
        this.f35755a = type;
        this.f35756b = eVar;
    }

    public final e a() {
        return this.f35756b;
    }

    public final KotlinType b() {
        return this.f35755a;
    }
}
