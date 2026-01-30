package kotlin.reflect.jvm.internal.impl.load.java.components;

import ir.v;
import java.util.Map;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.PropertyReference1Impl;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.KProperty;
import kotlin.reflect.jvm.internal.impl.builtins.StandardNames;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.LazyJavaResolverContext;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaAnnotation;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaAnnotationArgument;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaArrayAnnotationArgument;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaEnumValueAnnotationArgument;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.resolve.constants.ConstantValue;
import kotlin.reflect.jvm.internal.impl.storage.NotNullLazyValue;
import kotlin.reflect.jvm.internal.impl.storage.StorageKt;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nJavaAnnotationMapper.kt\nKotlin\n*S Kotlin\n*F\n+ 1 JavaAnnotationMapper.kt\norg/jetbrains/kotlin/load/java/components/JavaTargetAnnotationDescriptor\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,182:1\n1#2:183\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JavaTargetAnnotationDescriptor extends JavaAnnotationDescriptor {

    /* renamed from: h  reason: collision with root package name */
    static final /* synthetic */ KProperty[] f34103h = {Reflection.property1(new PropertyReference1Impl(JavaTargetAnnotationDescriptor.class, "allValueArguments", "getAllValueArguments()Ljava/util/Map;", 0))};

    /* renamed from: g  reason: collision with root package name */
    private final NotNullLazyValue f34104g;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public JavaTargetAnnotationDescriptor(@NotNull JavaAnnotation annotation, @NotNull LazyJavaResolverContext c10) {
        super(c10, annotation, StandardNames.FqNames.target);
        Intrinsics.checkNotNullParameter(annotation, "annotation");
        Intrinsics.checkNotNullParameter(c10, "c");
        this.f34104g = c10.getStorageManager().createLazyValue(new e(this));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Map e(JavaTargetAnnotationDescriptor javaTargetAnnotationDescriptor) {
        ConstantValue<?> constantValue;
        JavaAnnotationArgument b10 = javaTargetAnnotationDescriptor.b();
        Map map = null;
        if (b10 instanceof JavaArrayAnnotationArgument) {
            constantValue = JavaAnnotationTargetMapper.INSTANCE.mapJavaTargetArguments$descriptors_jvm(((JavaArrayAnnotationArgument) javaTargetAnnotationDescriptor.b()).getElements());
        } else if (b10 instanceof JavaEnumValueAnnotationArgument) {
            constantValue = JavaAnnotationTargetMapper.INSTANCE.mapJavaTargetArguments$descriptors_jvm(CollectionsKt.e(javaTargetAnnotationDescriptor.b()));
        } else {
            constantValue = null;
        }
        if (constantValue != null) {
            map = o0.f(v.a(JavaAnnotationMapper.INSTANCE.getTARGET_ANNOTATION_ALLOWED_TARGETS$descriptors_jvm(), constantValue));
        }
        if (map == null) {
            return o0.i();
        }
        return map;
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.components.JavaAnnotationDescriptor, kotlin.reflect.jvm.internal.impl.descriptors.annotations.AnnotationDescriptor
    @NotNull
    public Map<Name, ConstantValue<Object>> getAllValueArguments() {
        return (Map) StorageKt.getValue(this.f34104g, this, f34103h[0]);
    }
}
