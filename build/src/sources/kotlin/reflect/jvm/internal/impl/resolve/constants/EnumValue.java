package kotlin.reflect.jvm.internal.impl.resolve.constants;

import ir.v;
import kotlin.Pair;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.FindClassInModuleKt;
import kotlin.reflect.jvm.internal.impl.descriptors.ModuleDescriptor;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.resolve.DescriptorUtils;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import kotlin.reflect.jvm.internal.impl.types.error.ErrorTypeKind;
import kotlin.reflect.jvm.internal.impl.types.error.ErrorUtils;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nconstantValues.kt\nKotlin\n*S Kotlin\n*F\n+ 1 constantValues.kt\norg/jetbrains/kotlin/resolve/constants/EnumValue\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,320:1\n1#2:321\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class EnumValue extends ConstantValue<Pair<? extends ClassId, ? extends Name>> {

    /* renamed from: b  reason: collision with root package name */
    private final ClassId f35427b;

    /* renamed from: c  reason: collision with root package name */
    private final Name f35428c;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public EnumValue(@NotNull ClassId enumClassId, @NotNull Name enumEntryName) {
        super(v.a(enumClassId, enumEntryName));
        Intrinsics.checkNotNullParameter(enumClassId, "enumClassId");
        Intrinsics.checkNotNullParameter(enumEntryName, "enumEntryName");
        this.f35427b = enumClassId;
        this.f35428c = enumEntryName;
    }

    @NotNull
    public final Name getEnumEntryName() {
        return this.f35428c;
    }

    @Override // kotlin.reflect.jvm.internal.impl.resolve.constants.ConstantValue
    @NotNull
    public KotlinType getType(@NotNull ModuleDescriptor module) {
        SimpleType defaultType;
        Intrinsics.checkNotNullParameter(module, "module");
        ClassDescriptor findClassAcrossModuleDependencies = FindClassInModuleKt.findClassAcrossModuleDependencies(module, this.f35427b);
        if (findClassAcrossModuleDependencies != null) {
            if (!DescriptorUtils.isEnumClass(findClassAcrossModuleDependencies)) {
                findClassAcrossModuleDependencies = null;
            }
            if (findClassAcrossModuleDependencies != null && (defaultType = findClassAcrossModuleDependencies.getDefaultType()) != null) {
                return defaultType;
            }
        }
        return ErrorUtils.createErrorType(ErrorTypeKind.ERROR_ENUM_TYPE, this.f35427b.toString(), this.f35428c.toString());
    }

    @Override // kotlin.reflect.jvm.internal.impl.resolve.constants.ConstantValue
    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append(this.f35427b.getShortClassName());
        sb2.append('.');
        sb2.append(this.f35428c);
        return sb2.toString();
    }
}
