package jt;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e2 extends x0 {

    /* renamed from: c  reason: collision with root package name */
    private final String f31040c;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public e2(SerialDescriptor primitive) {
        super(primitive, null);
        Intrinsics.checkNotNullParameter(primitive, "primitive");
        this.f31040c = primitive.h() + "Array";
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public String h() {
        return this.f31040c;
    }
}
