package kotlin.reflect.jvm.internal.impl.load.kotlin;

import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class JvmDescriptorTypeWriter<T> {

    /* renamed from: a  reason: collision with root package name */
    private final JvmTypeFactory f34507a;

    /* renamed from: b  reason: collision with root package name */
    private int f34508b;

    /* renamed from: c  reason: collision with root package name */
    private Object f34509c;

    protected final void a(Object type) {
        Intrinsics.checkNotNullParameter(type, "type");
        if (this.f34509c == null) {
            if (this.f34508b > 0) {
                JvmTypeFactory jvmTypeFactory = this.f34507a;
                type = jvmTypeFactory.createFromString(StringsKt.F("[", this.f34508b) + this.f34507a.toString(type));
            }
            this.f34509c = type;
        }
    }

    public void writeArrayEnd() {
    }

    public void writeArrayType() {
        if (this.f34509c == null) {
            this.f34508b++;
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
