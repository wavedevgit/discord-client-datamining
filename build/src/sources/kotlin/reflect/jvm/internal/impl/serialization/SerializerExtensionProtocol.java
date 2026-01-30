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
    private final ExtensionRegistryLite f35546a;

    /* renamed from: b  reason: collision with root package name */
    private final GeneratedMessageLite.GeneratedExtension f35547b;

    /* renamed from: c  reason: collision with root package name */
    private final GeneratedMessageLite.GeneratedExtension f35548c;

    /* renamed from: d  reason: collision with root package name */
    private final GeneratedMessageLite.GeneratedExtension f35549d;

    /* renamed from: e  reason: collision with root package name */
    private final GeneratedMessageLite.GeneratedExtension f35550e;

    /* renamed from: f  reason: collision with root package name */
    private final GeneratedMessageLite.GeneratedExtension f35551f;

    /* renamed from: g  reason: collision with root package name */
    private final GeneratedMessageLite.GeneratedExtension f35552g;

    /* renamed from: h  reason: collision with root package name */
    private final GeneratedMessageLite.GeneratedExtension f35553h;

    /* renamed from: i  reason: collision with root package name */
    private final GeneratedMessageLite.GeneratedExtension f35554i;

    /* renamed from: j  reason: collision with root package name */
    private final GeneratedMessageLite.GeneratedExtension f35555j;

    /* renamed from: k  reason: collision with root package name */
    private final GeneratedMessageLite.GeneratedExtension f35556k;

    /* renamed from: l  reason: collision with root package name */
    private final GeneratedMessageLite.GeneratedExtension f35557l;

    /* renamed from: m  reason: collision with root package name */
    private final GeneratedMessageLite.GeneratedExtension f35558m;

    /* renamed from: n  reason: collision with root package name */
    private final GeneratedMessageLite.GeneratedExtension f35559n;

    /* renamed from: o  reason: collision with root package name */
    private final GeneratedMessageLite.GeneratedExtension f35560o;

    /* renamed from: p  reason: collision with root package name */
    private final GeneratedMessageLite.GeneratedExtension f35561p;

    /* renamed from: q  reason: collision with root package name */
    private final GeneratedMessageLite.GeneratedExtension f35562q;

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
        this.f35546a = extensionRegistry;
        this.f35547b = packageFqName;
        this.f35548c = constructorAnnotation;
        this.f35549d = classAnnotation;
        this.f35550e = functionAnnotation;
        this.f35551f = generatedExtension;
        this.f35552g = propertyAnnotation;
        this.f35553h = propertyGetterAnnotation;
        this.f35554i = propertySetterAnnotation;
        this.f35555j = generatedExtension2;
        this.f35556k = generatedExtension3;
        this.f35557l = generatedExtension4;
        this.f35558m = enumEntryAnnotation;
        this.f35559n = compileTimeValue;
        this.f35560o = parameterAnnotation;
        this.f35561p = typeAnnotation;
        this.f35562q = typeParameterAnnotation;
    }

    @NotNull
    public final GeneratedMessageLite.GeneratedExtension<ProtoBuf.Class, List<ProtoBuf.Annotation>> getClassAnnotation() {
        return this.f35549d;
    }

    @NotNull
    public final GeneratedMessageLite.GeneratedExtension<ProtoBuf.Property, ProtoBuf.Annotation.Argument.Value> getCompileTimeValue() {
        return this.f35559n;
    }

    @NotNull
    public final GeneratedMessageLite.GeneratedExtension<ProtoBuf.Constructor, List<ProtoBuf.Annotation>> getConstructorAnnotation() {
        return this.f35548c;
    }

    @NotNull
    public final GeneratedMessageLite.GeneratedExtension<ProtoBuf.EnumEntry, List<ProtoBuf.Annotation>> getEnumEntryAnnotation() {
        return this.f35558m;
    }

    @NotNull
    public final ExtensionRegistryLite getExtensionRegistry() {
        return this.f35546a;
    }

    @NotNull
    public final GeneratedMessageLite.GeneratedExtension<ProtoBuf.Function, List<ProtoBuf.Annotation>> getFunctionAnnotation() {
        return this.f35550e;
    }

    public final GeneratedMessageLite.GeneratedExtension<ProtoBuf.Function, List<ProtoBuf.Annotation>> getFunctionExtensionReceiverAnnotation() {
        return this.f35551f;
    }

    @NotNull
    public final GeneratedMessageLite.GeneratedExtension<ProtoBuf.ValueParameter, List<ProtoBuf.Annotation>> getParameterAnnotation() {
        return this.f35560o;
    }

    @NotNull
    public final GeneratedMessageLite.GeneratedExtension<ProtoBuf.Property, List<ProtoBuf.Annotation>> getPropertyAnnotation() {
        return this.f35552g;
    }

    public final GeneratedMessageLite.GeneratedExtension<ProtoBuf.Property, List<ProtoBuf.Annotation>> getPropertyBackingFieldAnnotation() {
        return this.f35556k;
    }

    public final GeneratedMessageLite.GeneratedExtension<ProtoBuf.Property, List<ProtoBuf.Annotation>> getPropertyDelegatedFieldAnnotation() {
        return this.f35557l;
    }

    public final GeneratedMessageLite.GeneratedExtension<ProtoBuf.Property, List<ProtoBuf.Annotation>> getPropertyExtensionReceiverAnnotation() {
        return this.f35555j;
    }

    @NotNull
    public final GeneratedMessageLite.GeneratedExtension<ProtoBuf.Property, List<ProtoBuf.Annotation>> getPropertyGetterAnnotation() {
        return this.f35553h;
    }

    @NotNull
    public final GeneratedMessageLite.GeneratedExtension<ProtoBuf.Property, List<ProtoBuf.Annotation>> getPropertySetterAnnotation() {
        return this.f35554i;
    }

    @NotNull
    public final GeneratedMessageLite.GeneratedExtension<ProtoBuf.Type, List<ProtoBuf.Annotation>> getTypeAnnotation() {
        return this.f35561p;
    }

    @NotNull
    public final GeneratedMessageLite.GeneratedExtension<ProtoBuf.TypeParameter, List<ProtoBuf.Annotation>> getTypeParameterAnnotation() {
        return this.f35562q;
    }
}
