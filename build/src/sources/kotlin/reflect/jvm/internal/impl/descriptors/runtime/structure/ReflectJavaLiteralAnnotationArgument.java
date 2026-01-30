package kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure;

import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaLiteralAnnotationArgument;
import kotlin.reflect.jvm.internal.impl.name.Name;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class ReflectJavaLiteralAnnotationArgument extends ReflectJavaAnnotationArgument implements JavaLiteralAnnotationArgument {

    /* renamed from: b  reason: collision with root package name */
    private final Object f33943b;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ReflectJavaLiteralAnnotationArgument(Name name, @NotNull Object value) {
        super(name, null);
        Intrinsics.checkNotNullParameter(value, "value");
        this.f33943b = value;
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.structure.JavaLiteralAnnotationArgument
    @NotNull
    public Object getValue() {
        return this.f33943b;
    }
}
