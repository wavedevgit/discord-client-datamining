package kotlin.reflect.jvm.internal.impl.resolve.jvm;

import java.util.Collection;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.reflect.jvm.internal.impl.builtins.StandardNames;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassConstructorDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DescriptorVisibilities;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ValueParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.resolve.DescriptorUtils;
import kotlin.reflect.jvm.internal.impl.resolve.InlineClassesUtilsKt;
import kotlin.reflect.jvm.internal.impl.resolve.descriptorUtil.DescriptorUtilsKt;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.typeUtil.TypeUtilsKt;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\ninlineClassManglingRules.kt\nKotlin\n*S Kotlin\n*F\n+ 1 inlineClassManglingRules.kt\norg/jetbrains/kotlin/resolve/jvm/InlineClassManglingRulesKt\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,53:1\n1761#2,3:54\n1761#2,3:57\n1#3:60\n*S KotlinDebug\n*F\n+ 1 inlineClassManglingRules.kt\norg/jetbrains/kotlin/resolve/jvm/InlineClassManglingRulesKt\n*L\n21#1:54,3\n27#1:57,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class InlineClassManglingRulesKt {
    private static final boolean a(ClassDescriptor classDescriptor) {
        return Intrinsics.areEqual(DescriptorUtilsKt.getFqNameSafe(classDescriptor), StandardNames.RESULT_FQ_NAME);
    }

    private static final boolean b(KotlinType kotlinType, boolean z10) {
        TypeParameterDescriptor typeParameterDescriptor;
        ClassifierDescriptor mo1199getDeclarationDescriptor = kotlinType.getConstructor().mo1199getDeclarationDescriptor();
        if (mo1199getDeclarationDescriptor instanceof TypeParameterDescriptor) {
            typeParameterDescriptor = (TypeParameterDescriptor) mo1199getDeclarationDescriptor;
        } else {
            typeParameterDescriptor = null;
        }
        if (typeParameterDescriptor == null) {
            return false;
        }
        if ((!z10 && InlineClassesUtilsKt.isMultiFieldValueClass(typeParameterDescriptor)) || !c(TypeUtilsKt.getRepresentativeUpperBound(typeParameterDescriptor))) {
            return false;
        }
        return true;
    }

    private static final boolean c(KotlinType kotlinType) {
        if (isValueClassThatRequiresMangling(kotlinType) || b(kotlinType, true)) {
            return true;
        }
        return false;
    }

    public static final boolean isValueClassThatRequiresMangling(@NotNull DeclarationDescriptor declarationDescriptor) {
        Intrinsics.checkNotNullParameter(declarationDescriptor, "<this>");
        return InlineClassesUtilsKt.isValueClass(declarationDescriptor) && !a((ClassDescriptor) declarationDescriptor);
    }

    public static final boolean shouldHideConstructorDueToValueClassTypeValueParameters(@NotNull CallableMemberDescriptor descriptor) {
        ClassConstructorDescriptor classConstructorDescriptor;
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        if (descriptor instanceof ClassConstructorDescriptor) {
            classConstructorDescriptor = (ClassConstructorDescriptor) descriptor;
        } else {
            classConstructorDescriptor = null;
        }
        if (classConstructorDescriptor == null || DescriptorVisibilities.isPrivate(classConstructorDescriptor.getVisibility())) {
            return false;
        }
        ClassDescriptor constructedClass = classConstructorDescriptor.getConstructedClass();
        Intrinsics.checkNotNullExpressionValue(constructedClass, "getConstructedClass(...)");
        if (InlineClassesUtilsKt.isValueClass(constructedClass) || DescriptorUtils.isSealedClass(classConstructorDescriptor.getConstructedClass())) {
            return false;
        }
        List<ValueParameterDescriptor> valueParameters = classConstructorDescriptor.getValueParameters();
        Intrinsics.checkNotNullExpressionValue(valueParameters, "getValueParameters(...)");
        List<ValueParameterDescriptor> list = valueParameters;
        if ((list instanceof Collection) && list.isEmpty()) {
            return false;
        }
        for (ValueParameterDescriptor valueParameterDescriptor : list) {
            KotlinType type = valueParameterDescriptor.getType();
            Intrinsics.checkNotNullExpressionValue(type, "getType(...)");
            if (c(type)) {
                return true;
            }
        }
        return false;
    }

    public static final boolean isValueClassThatRequiresMangling(@NotNull KotlinType kotlinType) {
        Intrinsics.checkNotNullParameter(kotlinType, "<this>");
        ClassifierDescriptor mo1199getDeclarationDescriptor = kotlinType.getConstructor().mo1199getDeclarationDescriptor();
        return mo1199getDeclarationDescriptor != null && ((InlineClassesUtilsKt.isInlineClass(mo1199getDeclarationDescriptor) && isValueClassThatRequiresMangling(mo1199getDeclarationDescriptor)) || InlineClassesUtilsKt.needsMfvcFlattening(kotlinType));
    }
}
