package fs;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KType;
import kotlin.reflect.jvm.internal.impl.builtins.jvm.JavaToKotlinClassMap;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.resolve.descriptorUtil.DescriptorUtilsKt;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.KotlinTypeFactory;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import kotlin.reflect.jvm.internal.impl.types.TypeAttributes;
import kotlin.reflect.jvm.internal.impl.types.TypeConstructor;
import kotlin.reflect.jvm.internal.impl.types.typeUtil.TypeUtilsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class h3 {
    public static final KType a(KType type) {
        ClassDescriptor classDescriptor;
        Intrinsics.checkNotNullParameter(type, "type");
        KotlinType l10 = ((t2) type).l();
        if (l10 instanceof SimpleType) {
            ClassifierDescriptor mo1197getDeclarationDescriptor = l10.getConstructor().mo1197getDeclarationDescriptor();
            if (mo1197getDeclarationDescriptor instanceof ClassDescriptor) {
                classDescriptor = (ClassDescriptor) mo1197getDeclarationDescriptor;
            } else {
                classDescriptor = null;
            }
            if (classDescriptor != null) {
                SimpleType simpleType = (SimpleType) l10;
                TypeConstructor typeConstructor = d(classDescriptor).getTypeConstructor();
                Intrinsics.checkNotNullExpressionValue(typeConstructor, "getTypeConstructor(...)");
                return new t2(KotlinTypeFactory.simpleType$default(simpleType, (TypeAttributes) null, typeConstructor, (List) null, false, 26, (Object) null), null, 2, null);
            }
            throw new IllegalArgumentException("Non-class type cannot be a mutable collection type: " + type);
        }
        throw new IllegalArgumentException(("Non-simple type cannot be a mutable collection type: " + type).toString());
    }

    public static final KType b(KType type) {
        Intrinsics.checkNotNullParameter(type, "type");
        KotlinType l10 = ((t2) type).l();
        if (l10 instanceof SimpleType) {
            SimpleType simpleType = (SimpleType) l10;
            TypeConstructor typeConstructor = TypeUtilsKt.getBuiltIns(l10).getNothing().getTypeConstructor();
            Intrinsics.checkNotNullExpressionValue(typeConstructor, "getTypeConstructor(...)");
            return new t2(KotlinTypeFactory.simpleType$default(simpleType, (TypeAttributes) null, typeConstructor, (List) null, false, 26, (Object) null), null, 2, null);
        }
        throw new IllegalArgumentException(("Non-simple type cannot be a Nothing type: " + type).toString());
    }

    public static final KType c(KType lowerBound, KType upperBound) {
        Intrinsics.checkNotNullParameter(lowerBound, "lowerBound");
        Intrinsics.checkNotNullParameter(upperBound, "upperBound");
        KotlinType l10 = ((t2) lowerBound).l();
        Intrinsics.checkNotNull(l10, "null cannot be cast to non-null type org.jetbrains.kotlin.types.SimpleType");
        KotlinType l11 = ((t2) upperBound).l();
        Intrinsics.checkNotNull(l11, "null cannot be cast to non-null type org.jetbrains.kotlin.types.SimpleType");
        return new t2(KotlinTypeFactory.flexibleType((SimpleType) l10, (SimpleType) l11), null, 2, null);
    }

    private static final ClassDescriptor d(ClassDescriptor classDescriptor) {
        FqName readOnlyToMutable = JavaToKotlinClassMap.INSTANCE.readOnlyToMutable(DescriptorUtilsKt.getFqNameUnsafe(classDescriptor));
        if (readOnlyToMutable != null) {
            ClassDescriptor builtInClassByFqName = DescriptorUtilsKt.getBuiltIns(classDescriptor).getBuiltInClassByFqName(readOnlyToMutable);
            Intrinsics.checkNotNullExpressionValue(builtInClassByFqName, "getBuiltInClassByFqName(...)");
            return builtInClassByFqName;
        }
        throw new IllegalArgumentException("Not a readonly collection: " + classDescriptor);
    }
}
