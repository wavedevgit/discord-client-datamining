package kotlin.reflect.jvm.internal.impl.load.kotlin;

import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class JvmDescriptorTypeWriter<T> {

    /* renamed from: a  reason: collision with root package name */
    private final JvmTypeFactory f32974a;

    /* renamed from: b  reason: collision with root package name */
    private int f32975b;

    /* renamed from: c  reason: collision with root package name */
    private Object f32976c;

    protected final void a(Object type) {
        Intrinsics.checkNotNullParameter(type, "type");
        if (this.f32976c == null) {
            if (this.f32975b > 0) {
                JvmTypeFactory jvmTypeFactory = this.f32974a;
                type = jvmTypeFactory.createFromString(StringsKt.F("[", this.f32975b) + this.f32974a.toString(type));
            }
            this.f32976c = type;
        }
    }

    public void writeArrayEnd() {
    }

    public void writeArrayType() {
        if (this.f32976c == null) {
            this.f32975b++;
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
