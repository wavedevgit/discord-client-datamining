package kotlin.reflect.jvm.internal.impl.descriptors;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.storage.StorageManager;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import kotlin.reflect.jvm.internal.impl.types.TypeConstructor;
import kotlin.reflect.jvm.internal.impl.types.Variance;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class a implements TypeParameterDescriptor {

    /* renamed from: d  reason: collision with root package name */
    private final TypeParameterDescriptor f32318d;

    /* renamed from: e  reason: collision with root package name */
    private final DeclarationDescriptor f32319e;

    /* renamed from: i  reason: collision with root package name */
    private final int f32320i;

    public a(TypeParameterDescriptor originalDescriptor, DeclarationDescriptor declarationDescriptor, int i10) {
        Intrinsics.checkNotNullParameter(originalDescriptor, "originalDescriptor");
        Intrinsics.checkNotNullParameter(declarationDescriptor, "declarationDescriptor");
        this.f32318d = originalDescriptor;
        this.f32319e = declarationDescriptor;
        this.f32320i = i10;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor
    public Object accept(DeclarationDescriptorVisitor declarationDescriptorVisitor, Object obj) {
        return this.f32318d.accept(declarationDescriptorVisitor, obj);
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotated
    public Annotations getAnnotations() {
        return this.f32318d.getAnnotations();
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptorNonRoot, kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor
    public DeclarationDescriptor getContainingDeclaration() {
        return this.f32319e;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor
    public SimpleType getDefaultType() {
        SimpleType defaultType = this.f32318d.getDefaultType();
        Intrinsics.checkNotNullExpressionValue(defaultType, "getDefaultType(...)");
        return defaultType;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor
    public int getIndex() {
        return this.f32320i + this.f32318d.getIndex();
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.Named
    public Name getName() {
        Name name = this.f32318d.getName();
        Intrinsics.checkNotNullExpressionValue(name, "getName(...)");
        return name;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptorWithSource
    public SourceElement getSource() {
        SourceElement source = this.f32318d.getSource();
        Intrinsics.checkNotNullExpressionValue(source, "getSource(...)");
        return source;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor
    public StorageManager getStorageManager() {
        StorageManager storageManager = this.f32318d.getStorageManager();
        Intrinsics.checkNotNullExpressionValue(storageManager, "getStorageManager(...)");
        return storageManager;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor, kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor
    public TypeConstructor getTypeConstructor() {
        TypeConstructor typeConstructor = this.f32318d.getTypeConstructor();
        Intrinsics.checkNotNullExpressionValue(typeConstructor, "getTypeConstructor(...)");
        return typeConstructor;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor
    public List getUpperBounds() {
        List<KotlinType> upperBounds = this.f32318d.getUpperBounds();
        Intrinsics.checkNotNullExpressionValue(upperBounds, "getUpperBounds(...)");
        return upperBounds;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor
    public Variance getVariance() {
        Variance variance = this.f32318d.getVariance();
        Intrinsics.checkNotNullExpressionValue(variance, "getVariance(...)");
        return variance;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor
    public boolean isCapturedFromOuterDeclaration() {
        return true;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor
    public boolean isReified() {
        return this.f32318d.isReified();
    }

    public String toString() {
        return this.f32318d + "[inner-copy]";
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor
    public TypeParameterDescriptor getOriginal() {
        TypeParameterDescriptor original = this.f32318d.getOriginal();
        Intrinsics.checkNotNullExpressionValue(original, "getOriginal(...)");
        return original;
    }
}
