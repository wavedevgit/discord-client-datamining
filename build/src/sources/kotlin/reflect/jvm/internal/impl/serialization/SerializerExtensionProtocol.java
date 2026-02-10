package kotlin.reflect.jvm.internal.impl.serialization;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
import kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite;
import kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class SerializerExtensionProtocol {

    /* renamed from: a  reason: collision with root package name */
    private final ExtensionRegistryLite f34013a;

    /* renamed from: b  reason: collision with root package name */
    private final GeneratedMessageLite.GeneratedExtension f34014b;

    /* renamed from: c  reason: collision with root package name */
    private final GeneratedMessageLite.GeneratedExtension f34015c;

    /* renamed from: d  reason: collision with root package name */
    private final GeneratedMessageLite.GeneratedExtension f34016d;

    /* renamed from: e  reason: collision with root package name */
    private final GeneratedMessageLite.GeneratedExtension f34017e;

    /* renamed from: f  reason: collision with root package name */
    private final GeneratedMessageLite.GeneratedExtension f34018f;

    /* renamed from: g  reason: collision with root package name */
    private final GeneratedMessageLite.GeneratedExtension f34019g;

    /* renamed from: h  reason: collision with root package name */
    private final GeneratedMessageLite.GeneratedExtension f34020h;

    /* renamed from: i  reason: collision with root package name */
    private final GeneratedMessageLite.GeneratedExtension f34021i;

    /* renamed from: j  reason: collision with root package name */
    private final GeneratedMessageLite.GeneratedExtension f34022j;

    /* renamed from: k  reason: collision with root package name */
    private final GeneratedMessageLite.GeneratedExtension f34023k;

    /* renamed from: l  reason: collision with root package name */
    private final GeneratedMessageLite.GeneratedExtension f34024l;

    /* renamed from: m  reason: collision with root package name */
    private final GeneratedMessageLite.GeneratedExtension f34025m;

    /* renamed from: n  reason: collision with root package name */
    private final GeneratedMessageLite.GeneratedExtension f34026n;

    /* renamed from: o  reason: collision with root package name */
    private final GeneratedMessageLite.GeneratedExtension f34027o;

    /* renamed from: p  reason: collision with root package name */
    private final GeneratedMessageLite.GeneratedExtension f34028p;

    /* renamed from: q  reason: collision with root package name */
    private final GeneratedMessageLite.GeneratedExtension f34029q;

    public SerializerExtensionProtocol(@NotNull ExtensionRegistryLite extensionRegistry, @NotNull GeneratedMessageLite.GeneratedExtension<ProtoBuf.Package, Integer> packageFqName, @NotNull GeneratedMessageLite.GeneratedExtension<ProtoBuf.Constructor, List<ProtoBuf.Annotation>> constructorAnnotation, @NotNull GeneratedMessageLite.GeneratedExtension<ProtoBuf.Class, List<ProtoBuf.Annotation>> classAnnotation, @NotNull GeneratedMessageLite.GeneratedExtension<ProtoBuf.Function, List<ProtoBuf.Annotation>> functionAnnotation, GeneratedMessageLite.GeneratedExtension<ProtoBuf.Function, List<ProtoBuf.Annotation>> generatedExtension, @NotNull GeneratedMessageLite.GeneratedExtension<ProtoBuf.Property, List<ProtoBuf.Annotation>> propertyAnnotation, @NotNull GeneratedMessageLite.GeneratedExtension<ProtoBuf.Property, List<ProtoBuf.Annotation>> propertyGetterAnnotation, @NotNull GeneratedMessageLite.GeneratedExtension<ProtoBuf.Property, List<ProtoBuf.Annotation>> propertySetterAnnotation, GeneratedMessageLite.GeneratedExtension<ProtoBuf.Property, List<ProtoBuf.Annotation>> generatedExtension2, GeneratedMessageLite.GeneratedExtension<ProtoBuf.Property, List<ProtoBuf.Annotation>> generatedExtension3, GeneratedMessageLite.GeneratedExtension<ProtoBuf.Property, List<ProtoBuf.Annotation>> generatedExtension4, @NotNull GeneratedMessageLite.GeneratedExtension<ProtoBuf.EnumEntry, List<ProtoBuf.Annotation>> enumEntryAnnotation, @NotNull GeneratedMessageLite.GeneratedExtension<ProtoBuf.Property, ProtoBuf.Annotation.Argument.Value> compileTimeValue, @NotNull GeneratedMessageLite.GeneratedExtension<ProtoBuf.ValueParameter, List<ProtoBuf.Annotation>> parameterAnnotation, @NotNull GeneratedMessageLite.GeneratedExtension<ProtoBuf.Type, List<ProtoBuf.Annotation>> typeAnnotation, @NotNull GeneratedMessageLite.GeneratedExtension<ProtoBuf.TypeParameter, List<ProtoBuf.Annotation>> typeParameterAnnotation) {
        Intrinsics.checkNotNullParameter(extensionRegistry, "extensionRegistry");
        Intrinsics.checkNotNullParameter(packageFqName, "packageFqName");
        Intrinsics.checkNotNullParameter(constructorAnnotation, "constructorAnnotation");
        Intrinsics.checkNotNullParameter(classAnnotation, "classAnnotation");
        Intrinsics.checkNotNullParameter(functionAnnotation, "functionAnnotation");
        Intrinsics.checkNotNullParameter(propertyAnnotation, "propertyAnnotation");
        Intrinsics.checkNotNullParameter(propertyGetterAnnotation, "propertyGetterAnnotation");
        Intrinsics.checkNotNullParameter(propertySetterAnnotation, "propertySetterAnnotation");
        Intrinsics.checkNotNullParameter(enumEntryAnnotation, "enumEntryAnnotation");
        Intrinsics.checkNotNullParameter(compileTimeValue, "compileTimeValue");
        Intrinsics.checkNotNullParameter(parameterAnnotation, "parameterAnnotation");
        Intrinsics.checkNotNullParameter(typeAnnotation, "typeAnnotation");
        Intrinsics.checkNotNullParameter(typeParameterAnnotation, "typeParameterAnnotation");
        this.f34013a = extensionRegistry;
        this.f34014b = packageFqName;
        this.f34015c = constructorAnnotation;
        this.f34016d = classAnnotation;
        this.f34017e = functionAnnotation;
        this.f34018f = generatedExtension;
        this.f34019g = propertyAnnotation;
        this.f34020h = propertyGetterAnnotation;
        this.f34021i = propertySetterAnnotation;
        this.f34022j = generatedExtension2;
        this.f34023k = generatedExtension3;
        this.f34024l = generatedExtension4;
        this.f34025m = enumEntryAnnotation;
        this.f34026n = compileTimeValue;
        this.f34027o = parameterAnnotation;
        this.f34028p = typeAnnotation;
        this.f34029q = typeParameterAnnotation;
    }

    @NotNull
    public final GeneratedMessageLite.GeneratedExtension<ProtoBuf.Class, List<ProtoBuf.Annotation>> getClassAnnotation() {
        return this.f34016d;
    }

    @NotNull
    public final GeneratedMessageLite.GeneratedExtension<ProtoBuf.Property, ProtoBuf.Annotation.Argument.Value> getCompileTimeValue() {
        return this.f34026n;
    }

    @NotNull
    public final GeneratedMessageLite.GeneratedExtension<ProtoBuf.Constructor, List<ProtoBuf.Annotation>> getConstructorAnnotation() {
        return this.f34015c;
    }

    @NotNull
    public final GeneratedMessageLite.GeneratedExtension<ProtoBuf.EnumEntry, List<ProtoBuf.Annotation>> getEnumEntryAnnotation() {
        return this.f34025m;
    }

    @NotNull
    public final ExtensionRegistryLite getExtensionRegistry() {
        return this.f34013a;
    }

    @NotNull
    public final GeneratedMessageLite.GeneratedExtension<ProtoBuf.Function, List<ProtoBuf.Annotation>> getFunctionAnnotation() {
        return this.f34017e;
    }

    public final GeneratedMessageLite.GeneratedExtension<ProtoBuf.Function, List<ProtoBuf.Annotation>> getFunctionExtensionReceiverAnnotation() {
        return this.f34018f;
    }

    @NotNull
    public final GeneratedMessageLite.GeneratedExtension<ProtoBuf.ValueParameter, List<ProtoBuf.Annotation>> getParameterAnnotation() {
        return this.f34027o;
    }

    @NotNull
    public final GeneratedMessageLite.GeneratedExtension<ProtoBuf.Property, List<ProtoBuf.Annotation>> getPropertyAnnotation() {
        return this.f34019g;
    }

    public final GeneratedMessageLite.GeneratedExtension<ProtoBuf.Property, List<ProtoBuf.Annotation>> getPropertyBackingFieldAnnotation() {
        return this.f34023k;
    }

    public final GeneratedMessageLite.GeneratedExtension<ProtoBuf.Property, List<ProtoBuf.Annotation>> getPropertyDelegatedFieldAnnotation() {
        return this.f34024l;
    }

    public final GeneratedMessageLite.GeneratedExtension<ProtoBuf.Property, List<ProtoBuf.Annotation>> getPropertyExtensionReceiverAnnotation() {
        return this.f34022j;
    }

    @NotNull
    public final GeneratedMessageLite.GeneratedExtension<ProtoBuf.Property, List<ProtoBuf.Annotation>> getPropertyGetterAnnotation() {
        return this.f34020h;
    }

    @NotNull
    public final GeneratedMessageLite.GeneratedExtension<ProtoBuf.Property, List<ProtoBuf.Annotation>> getPropertySetterAnnotation() {
        return this.f34021i;
    }

    @NotNull
    public final GeneratedMessageLite.GeneratedExtension<ProtoBuf.Type, List<ProtoBuf.Annotation>> getTypeAnnotation() {
        return this.f34028p;
    }

    @NotNull
    public final GeneratedMessageLite.GeneratedExtension<ProtoBuf.TypeParameter, List<ProtoBuf.Annotation>> getTypeParameterAnnotation() {
        return this.f34029q;
    }
}
