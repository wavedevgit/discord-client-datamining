package kotlin.reflect.jvm.internal.impl.load.kotlin;

import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class JvmDescriptorTypeWriter<T> {

    /* renamed from: a  reason: collision with root package name */
    private final JvmTypeFactory f33673a;

    /* renamed from: b  reason: collision with root package name */
    private int f33674b;

    /* renamed from: c  reason: collision with root package name */
    private Object f33675c;

    protected final void a(Object type) {
        Intrinsics.checkNotNullParameter(type, "type");
        if (this.f33675c == null) {
            if (this.f33674b > 0) {
                JvmTypeFactory jvmTypeFactory = this.f33673a;
                type = jvmTypeFactory.createFromString(StringsKt.F("[", this.f33674b) + this.f33673a.toString(type));
            }
            this.f33675c = type;
        }
    }

    public void writeArrayEnd() {
    }

    public void writeArrayType() {
        if (this.f33675c == null) {
            this.f33674b++;
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
