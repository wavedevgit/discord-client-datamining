package kotlin.reflect.jvm.internal.impl.load.java.typeEnhancement;

import java.util.Map;
import kotlin.reflect.jvm.internal.impl.descriptors.SourceElement;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.AnnotationDescriptor;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class d implements AnnotationDescriptor {

    /* renamed from: a  reason: collision with root package name */
    public static final d f34400a = new d();

    private d() {
    }

    private final Void a() {
        throw new IllegalStateException("No methods should be called on this descriptor. Only its presence matters");
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.AnnotationDescriptor
    public Map getAllValueArguments() {
        a();
        throw new ir.h();
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.AnnotationDescriptor
    public FqName getFqName() {
        return AnnotationDescriptor.DefaultImpls.getFqName(this);
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.AnnotationDescriptor
    public SourceElement getSource() {
        a();
        throw new ir.h();
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.AnnotationDescriptor
    public KotlinType getType() {
        a();
        throw new ir.h();
    }

    public String toString() {
        return "[EnhancedType]";
    }
}
