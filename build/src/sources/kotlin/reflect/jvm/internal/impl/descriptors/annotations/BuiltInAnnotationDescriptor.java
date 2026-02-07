package kotlin.reflect.jvm.internal.impl.descriptors.annotations;

import java.util.Map;
import kotlin.Lazy;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.builtins.KotlinBuiltIns;
import kotlin.reflect.jvm.internal.impl.descriptors.SourceElement;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.resolve.constants.ConstantValue;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import org.jetbrains.annotations.NotNull;
import qr.l;
import qr.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class BuiltInAnnotationDescriptor implements AnnotationDescriptor {

    /* renamed from: a  reason: collision with root package name */
    private final KotlinBuiltIns f32404a;

    /* renamed from: b  reason: collision with root package name */
    private final FqName f32405b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f32406c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f32407d;

    /* renamed from: e  reason: collision with root package name */
    private final Lazy f32408e;

    public BuiltInAnnotationDescriptor(@NotNull KotlinBuiltIns builtIns, @NotNull FqName fqName, @NotNull Map<Name, ? extends ConstantValue<?>> allValueArguments, boolean z10) {
        Intrinsics.checkNotNullParameter(builtIns, "builtIns");
        Intrinsics.checkNotNullParameter(fqName, "fqName");
        Intrinsics.checkNotNullParameter(allValueArguments, "allValueArguments");
        this.f32404a = builtIns;
        this.f32405b = fqName;
        this.f32406c = allValueArguments;
        this.f32407d = z10;
        this.f32408e = l.b(o.f48092e, new b(this));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final SimpleType b(BuiltInAnnotationDescriptor builtInAnnotationDescriptor) {
        return builtInAnnotationDescriptor.f32404a.getBuiltInClassByFqName(builtInAnnotationDescriptor.getFqName()).getDefaultType();
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.AnnotationDescriptor
    @NotNull
    public Map<Name, ConstantValue<?>> getAllValueArguments() {
        return this.f32406c;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.AnnotationDescriptor
    @NotNull
    public FqName getFqName() {
        return this.f32405b;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.AnnotationDescriptor
    @NotNull
    public SourceElement getSource() {
        SourceElement NO_SOURCE = SourceElement.NO_SOURCE;
        Intrinsics.checkNotNullExpressionValue(NO_SOURCE, "NO_SOURCE");
        return NO_SOURCE;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.AnnotationDescriptor
    @NotNull
    public KotlinType getType() {
        Object value = this.f32408e.getValue();
        Intrinsics.checkNotNullExpressionValue(value, "getValue(...)");
        return (KotlinType) value;
    }

    public /* synthetic */ BuiltInAnnotationDescriptor(KotlinBuiltIns kotlinBuiltIns, FqName fqName, Map map, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(kotlinBuiltIns, fqName, map, (i10 & 8) != 0 ? false : z10);
    }
}
