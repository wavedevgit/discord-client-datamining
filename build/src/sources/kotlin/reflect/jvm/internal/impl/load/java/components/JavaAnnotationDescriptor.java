package kotlin.reflect.jvm.internal.impl.load.java.components;

import java.util.Collection;
import java.util.Map;
import kotlin.collections.CollectionsKt;
import kotlin.collections.o0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.PropertyReference1Impl;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.KProperty;
import kotlin.reflect.jvm.internal.impl.descriptors.SourceElement;
import kotlin.reflect.jvm.internal.impl.load.java.descriptors.PossiblyExternalAnnotationDescriptor;
import kotlin.reflect.jvm.internal.impl.load.java.lazy.LazyJavaResolverContext;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaAnnotation;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaAnnotationArgument;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.resolve.constants.ConstantValue;
import kotlin.reflect.jvm.internal.impl.storage.NotNullLazyValue;
import kotlin.reflect.jvm.internal.impl.storage.StorageKt;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nJavaAnnotationMapper.kt\nKotlin\n*S Kotlin\n*F\n+ 1 JavaAnnotationMapper.kt\norg/jetbrains/kotlin/load/java/components/JavaAnnotationDescriptor\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,182:1\n1#2:183\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class JavaAnnotationDescriptor implements PossiblyExternalAnnotationDescriptor {

    /* renamed from: f  reason: collision with root package name */
    static final /* synthetic */ KProperty[] f32797f = {Reflection.property1(new PropertyReference1Impl(JavaAnnotationDescriptor.class, "type", "getType()Lorg/jetbrains/kotlin/types/SimpleType;", 0))};

    /* renamed from: a  reason: collision with root package name */
    private final FqName f32798a;

    /* renamed from: b  reason: collision with root package name */
    private final SourceElement f32799b;

    /* renamed from: c  reason: collision with root package name */
    private final NotNullLazyValue f32800c;

    /* renamed from: d  reason: collision with root package name */
    private final JavaAnnotationArgument f32801d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f32802e;

    public JavaAnnotationDescriptor(@NotNull LazyJavaResolverContext c10, JavaAnnotation javaAnnotation, @NotNull FqName fqName) {
        SourceElement NO_SOURCE;
        JavaAnnotationArgument javaAnnotationArgument;
        Collection<JavaAnnotationArgument> arguments;
        Intrinsics.checkNotNullParameter(c10, "c");
        Intrinsics.checkNotNullParameter(fqName, "fqName");
        this.f32798a = fqName;
        if (javaAnnotation == null || (NO_SOURCE = c10.getComponents().getSourceElementFactory().source(javaAnnotation)) == null) {
            NO_SOURCE = SourceElement.NO_SOURCE;
            Intrinsics.checkNotNullExpressionValue(NO_SOURCE, "NO_SOURCE");
        }
        this.f32799b = NO_SOURCE;
        this.f32800c = c10.getStorageManager().createLazyValue(new a(c10, this));
        if (javaAnnotation != null && (arguments = javaAnnotation.getArguments()) != null) {
            javaAnnotationArgument = (JavaAnnotationArgument) CollectionsKt.p0(arguments);
        } else {
            javaAnnotationArgument = null;
        }
        this.f32801d = javaAnnotationArgument;
        boolean z10 = false;
        if (javaAnnotation != null && javaAnnotation.isIdeExternalAnnotation()) {
            z10 = true;
        }
        this.f32802e = z10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final SimpleType c(LazyJavaResolverContext lazyJavaResolverContext, JavaAnnotationDescriptor javaAnnotationDescriptor) {
        SimpleType defaultType = lazyJavaResolverContext.getModule().getBuiltIns().getBuiltInClassByFqName(javaAnnotationDescriptor.getFqName()).getDefaultType();
        Intrinsics.checkNotNullExpressionValue(defaultType, "getDefaultType(...)");
        return defaultType;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final JavaAnnotationArgument b() {
        return this.f32801d;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.AnnotationDescriptor
    @NotNull
    public Map<Name, ConstantValue<?>> getAllValueArguments() {
        return o0.i();
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.AnnotationDescriptor
    @NotNull
    public FqName getFqName() {
        return this.f32798a;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.AnnotationDescriptor
    @NotNull
    public SourceElement getSource() {
        return this.f32799b;
    }

    @Override // kotlin.reflect.jvm.internal.impl.load.java.descriptors.PossiblyExternalAnnotationDescriptor
    public boolean isIdeExternalAnnotation() {
        return this.f32802e;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.AnnotationDescriptor
    @NotNull
    public SimpleType getType() {
        return (SimpleType) StorageKt.getValue(this.f32800c, this, f32797f[0]);
    }
}
