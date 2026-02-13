package kotlin.reflect.jvm.internal.impl.load.kotlin;

import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class JvmDescriptorTypeWriter<T> {

    /* renamed from: a  reason: collision with root package name */
    private final JvmTypeFactory f33765a;

    /* renamed from: b  reason: collision with root package name */
    private int f33766b;

    /* renamed from: c  reason: collision with root package name */
    private Object f33767c;

    protected final void a(Object type) {
        Intrinsics.checkNotNullParameter(type, "type");
        if (this.f33767c == null) {
            if (this.f33766b > 0) {
                JvmTypeFactory jvmTypeFactory = this.f33765a;
                type = jvmTypeFactory.createFromString(StringsKt.F("[", this.f33766b) + this.f33765a.toString(type));
            }
            this.f33767c = type;
        }
    }

    public void writeArrayEnd() {
    }

    public void writeArrayType() {
        if (this.f33767c == null) {
            this.f33766b++;
        }
    }

    public void writeClass(@NotNull T objectType) {
        Intrinsics.checkNotNullParameter(objectType, "objectType");
        a(objectType);
    }

    public void writeTypeVariable(@NotNull Name name, @NotNull T type) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(type, "type");
        a(type);
    }
}
