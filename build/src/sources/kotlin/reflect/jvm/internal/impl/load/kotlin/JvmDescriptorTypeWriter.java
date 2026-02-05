package kotlin.reflect.jvm.internal.impl.load.kotlin;

import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class JvmDescriptorTypeWriter<T> {

    /* renamed from: a  reason: collision with root package name */
    private final JvmTypeFactory f33197a;

    /* renamed from: b  reason: collision with root package name */
    private int f33198b;

    /* renamed from: c  reason: collision with root package name */
    private Object f33199c;

    protected final void a(Object type) {
        Intrinsics.checkNotNullParameter(type, "type");
        if (this.f33199c == null) {
            if (this.f33198b > 0) {
                JvmTypeFactory jvmTypeFactory = this.f33197a;
                type = jvmTypeFactory.createFromString(StringsKt.F("[", this.f33198b) + this.f33197a.toString(type));
            }
            this.f33199c = type;
        }
    }

    public void writeArrayEnd() {
    }

    public void writeArrayType() {
        if (this.f33199c == null) {
            this.f33198b++;
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
