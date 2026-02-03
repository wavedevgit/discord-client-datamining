package kotlin.reflect.jvm.internal.impl.resolve.constants;

import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class ConstantValue<T> {

    /* renamed from: a  reason: collision with root package name */
    private final Object f34592a;

    public ConstantValue(T t10) {
        this.f34592a = t10;
    }

    public boolean equals(Object obj) {
        ConstantValue constantValue;
        if (this != obj) {
            T value = getValue();
            Object obj2 = null;
            if (obj instanceof ConstantValue) {
                constantValue = (ConstantValue) obj;
            } else {
                constantValue = null;
            }
            if (constantValue != null) {
                obj2 = constantValue.getValue();
            }
            if (!Intrinsics.areEqual(value, obj2)) {
                return false;
            }
            return true;
        }
        return true;
    }

    @NotNull
    public abstract KotlinType getType(@NotNull ModuleDescriptor moduleDescriptor);

    public T getValue() {
        return (T) this.f34592a;
    }

    public int hashCode() {
        T value = getValue();
        if (value != null) {
            return value.hashCode();
        }
        return 0;
    }

    @NotNull
    public String toString() {
        return String.valueOf(getValue());
    }
}
