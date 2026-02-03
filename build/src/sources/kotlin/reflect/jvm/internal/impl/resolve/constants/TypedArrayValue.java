package kotlin.reflect.jvm.internal.impl.resolve.constants;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class TypedArrayValue extends ArrayValue {

    /* renamed from: c  reason: collision with root package name */
    private final KotlinType f35220c;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public TypedArrayValue(@NotNull List<? extends ConstantValue<?>> value, @NotNull KotlinType type) {
        super(value, new d(type));
        Intrinsics.checkNotNullParameter(value, "value");
        Intrinsics.checkNotNullParameter(type, "type");
        this.f35220c = type;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final KotlinType a(KotlinType kotlinType, ModuleDescriptor it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return kotlinType;
    }

    @NotNull
    public final KotlinType getType() {
        return this.f35220c;
    }
}
