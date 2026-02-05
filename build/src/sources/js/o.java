package js;

import is.j3;
import is.x2;
import java.lang.reflect.Member;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import kotlin.Pair;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.builtins.KotlinBuiltIns;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassifierDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ConstructorDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.MultiFieldValueClassRepresentation;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ReceiverParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ValueParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.VariableDescriptor;
import kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization.ClassMapperLite;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.resolve.InlineClassesUtilsKt;
import kotlin.reflect.jvm.internal.impl.resolve.descriptorUtil.DescriptorUtilsKt;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.SimpleType;
import kotlin.reflect.jvm.internal.impl.types.TypeSubstitutionKt;
import kotlin.reflect.jvm.internal.impl.types.TypeUtils;
import kotlin.reflect.jvm.internal.impl.types.typeUtil.TypeUtilsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class o {
    private static final boolean a(Member member) {
        Class<?> declaringClass = member.getDeclaringClass();
        if (declaringClass == null) {
            return false;
        }
        return !bs.a.e(declaringClass).isValue();
    }

    public static final void g(h hVar, int i10, CallableMemberDescriptor callableMemberDescriptor, boolean z10) {
        if (j.a(hVar) == i10) {
            return;
        }
        throw new x2("Inconsistent number of parameters in the descriptor and Java reflection object: " + j.a(hVar) + " != " + i10 + "\nCalling: " + callableMemberDescriptor + "\nParameter types: " + hVar.a() + ")\nDefault: " + z10);
    }

    public static final Object h(Object obj, CallableMemberDescriptor descriptor) {
        KotlinType l10;
        Class t10;
        Method m10;
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        if ((!(descriptor instanceof PropertyDescriptor) || !InlineClassesUtilsKt.isUnderlyingPropertyOfInlineClass((VariableDescriptor) descriptor)) && (l10 = l(descriptor)) != null && (t10 = t(l10)) != null && (m10 = m(t10, descriptor)) != null) {
            return m10.invoke(obj, null);
        }
        return obj;
    }

    public static final h i(h hVar, CallableMemberDescriptor descriptor, boolean z10) {
        Intrinsics.checkNotNullParameter(hVar, "<this>");
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        if (!InlineClassesUtilsKt.isGetterOfUnderlyingPropertyOfValueClass(descriptor)) {
            List<ReceiverParameterDescriptor> contextReceiverParameters = descriptor.getContextReceiverParameters();
            Intrinsics.checkNotNullExpressionValue(contextReceiverParameters, "getContextReceiverParameters(...)");
            List<ReceiverParameterDescriptor> list = contextReceiverParameters;
            if (!(list instanceof Collection) || !list.isEmpty()) {
                for (ReceiverParameterDescriptor receiverParameterDescriptor : list) {
                    KotlinType type = receiverParameterDescriptor.getType();
                    Intrinsics.checkNotNullExpressionValue(type, "getType(...)");
                    if (InlineClassesUtilsKt.isValueClassType(type)) {
                        break;
                    }
                }
            }
            List<ValueParameterDescriptor> valueParameters = descriptor.getValueParameters();
            Intrinsics.checkNotNullExpressionValue(valueParameters, "getValueParameters(...)");
            List<ValueParameterDescriptor> list2 = valueParameters;
            if (!(list2 instanceof Collection) || !list2.isEmpty()) {
                for (ValueParameterDescriptor valueParameterDescriptor : list2) {
                    KotlinType type2 = valueParameterDescriptor.getType();
                    Intrinsics.checkNotNullExpressionValue(type2, "getType(...)");
                    if (InlineClassesUtilsKt.isValueClassType(type2)) {
                        break;
                    }
                }
            }
            KotlinType returnType = descriptor.getReturnType();
            if ((returnType == null || !InlineClassesUtilsKt.isInlineClassType(returnType)) && !q(descriptor)) {
                return hVar;
            }
        }
        return new n(descriptor, hVar, z10);
    }

    public static /* synthetic */ h j(h hVar, CallableMemberDescriptor callableMemberDescriptor, boolean z10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            z10 = false;
        }
        return i(hVar, callableMemberDescriptor, z10);
    }

    public static final Method k(Class cls, CallableMemberDescriptor callableMemberDescriptor) {
        try {
            Method declaredMethod = cls.getDeclaredMethod("box-impl", m(cls, callableMemberDescriptor).getReturnType());
            Intrinsics.checkNotNull(declaredMethod);
            return declaredMethod;
        } catch (NoSuchMethodException unused) {
            throw new x2("No box method found in inline class: " + cls + " (calling " + callableMemberDescriptor + ')');
        }
    }

    private static final KotlinType l(CallableMemberDescriptor callableMemberDescriptor) {
        ClassDescriptor classDescriptor;
        ReceiverParameterDescriptor extensionReceiverParameter = callableMemberDescriptor.getExtensionReceiverParameter();
        ReceiverParameterDescriptor dispatchReceiverParameter = callableMemberDescriptor.getDispatchReceiverParameter();
        if (extensionReceiverParameter != null) {
            return extensionReceiverParameter.getType();
        }
        if (dispatchReceiverParameter == null) {
            return null;
        }
        if (callableMemberDescriptor instanceof ConstructorDescriptor) {
            return dispatchReceiverParameter.getType();
        }
        DeclarationDescriptor containingDeclaration = callableMemberDescriptor.getContainingDeclaration();
        if (containingDeclaration instanceof ClassDescriptor) {
            classDescriptor = (ClassDescriptor) containingDeclaration;
        } else {
            classDescriptor = null;
        }
        if (classDescriptor == null) {
            return null;
        }
        return classDescriptor.getDefaultType();
    }

    public static final Method m(Class cls, CallableMemberDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(cls, "<this>");
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        try {
            Method declaredMethod = cls.getDeclaredMethod("unbox-impl", null);
            Intrinsics.checkNotNull(declaredMethod);
            return declaredMethod;
        } catch (NoSuchMethodException unused) {
            throw new x2("No unbox method found in inline class: " + cls + " (calling " + descriptor + ')');
        }
    }

    public static final List n(SimpleType type) {
        Intrinsics.checkNotNullParameter(type, "type");
        List o10 = o(TypeSubstitutionKt.asSimpleType(type));
        if (o10 == null) {
            return null;
        }
        List list = o10;
        ArrayList<String> arrayList = new ArrayList(CollectionsKt.w(list, 10));
        Iterator it = list.iterator();
        while (it.hasNext()) {
            arrayList.add("unbox-impl-" + ((String) it.next()));
        }
        ClassifierDescriptor mo1199getDeclarationDescriptor = type.getConstructor().mo1199getDeclarationDescriptor();
        Intrinsics.checkNotNull(mo1199getDeclarationDescriptor, "null cannot be cast to non-null type org.jetbrains.kotlin.descriptors.ClassDescriptor");
        Class q10 = j3.q((ClassDescriptor) mo1199getDeclarationDescriptor);
        Intrinsics.checkNotNull(q10);
        ArrayList arrayList2 = new ArrayList(CollectionsKt.w(arrayList, 10));
        for (String str : arrayList) {
            arrayList2.add(q10.getDeclaredMethod(str, null));
        }
        return arrayList2;
    }

    private static final List o(SimpleType simpleType) {
        Collection e10;
        if (InlineClassesUtilsKt.needsMfvcFlattening(simpleType)) {
            ClassifierDescriptor mo1199getDeclarationDescriptor = simpleType.getConstructor().mo1199getDeclarationDescriptor();
            Intrinsics.checkNotNull(mo1199getDeclarationDescriptor, "null cannot be cast to non-null type org.jetbrains.kotlin.descriptors.ClassDescriptor");
            MultiFieldValueClassRepresentation<SimpleType> multiFieldValueClassRepresentation = DescriptorUtilsKt.getMultiFieldValueClassRepresentation((ClassDescriptor) mo1199getDeclarationDescriptor);
            Intrinsics.checkNotNull(multiFieldValueClassRepresentation);
            ArrayList arrayList = new ArrayList();
            Iterator<T> it = multiFieldValueClassRepresentation.getUnderlyingPropertyNamesToTypes().iterator();
            while (it.hasNext()) {
                Pair pair = (Pair) it.next();
                Name name = (Name) pair.a();
                List o10 = o((SimpleType) pair.b());
                if (o10 != null) {
                    List list = o10;
                    e10 = new ArrayList(CollectionsKt.w(list, 10));
                    Iterator it2 = list.iterator();
                    while (it2.hasNext()) {
                        e10.add(name.getIdentifier() + '-' + ((String) it2.next()));
                    }
                } else {
                    e10 = CollectionsKt.e(name.getIdentifier());
                }
                CollectionsKt.B(arrayList, e10);
            }
            return arrayList;
        }
        return null;
    }

    public static final List p(SimpleType simpleType, CallableMemberDescriptor callableMemberDescriptor) {
        Method m10;
        List n10 = n(simpleType);
        if (n10 == null) {
            Class t10 = t(simpleType);
            if (t10 != null && (m10 = m(t10, callableMemberDescriptor)) != null) {
                return CollectionsKt.e(m10);
            }
            return null;
        }
        return n10;
    }

    private static final boolean q(CallableMemberDescriptor callableMemberDescriptor) {
        KotlinType l10 = l(callableMemberDescriptor);
        if (l10 == null || !InlineClassesUtilsKt.isValueClassType(l10)) {
            return false;
        }
        return true;
    }

    public static final List r(CallableMemberDescriptor callableMemberDescriptor, Member member, Function1 function1) {
        KotlinType kotlinType;
        ArrayList arrayList = new ArrayList();
        ReceiverParameterDescriptor extensionReceiverParameter = callableMemberDescriptor.getExtensionReceiverParameter();
        if (extensionReceiverParameter != null) {
            kotlinType = extensionReceiverParameter.getType();
        } else {
            kotlinType = null;
        }
        if (kotlinType != null) {
            arrayList.add(kotlinType);
        } else if (callableMemberDescriptor instanceof ConstructorDescriptor) {
            ClassDescriptor constructedClass = ((ConstructorDescriptor) callableMemberDescriptor).getConstructedClass();
            Intrinsics.checkNotNullExpressionValue(constructedClass, "getConstructedClass(...)");
            if (constructedClass.isInner()) {
                DeclarationDescriptor containingDeclaration = constructedClass.getContainingDeclaration();
                Intrinsics.checkNotNull(containingDeclaration, "null cannot be cast to non-null type org.jetbrains.kotlin.descriptors.ClassDescriptor");
                arrayList.add(((ClassDescriptor) containingDeclaration).getDefaultType());
            }
        } else {
            DeclarationDescriptor containingDeclaration2 = callableMemberDescriptor.getContainingDeclaration();
            Intrinsics.checkNotNullExpressionValue(containingDeclaration2, "getContainingDeclaration(...)");
            if ((containingDeclaration2 instanceof ClassDescriptor) && ((Boolean) function1.invoke(containingDeclaration2)).booleanValue()) {
                if (member != null && a(member)) {
                    SimpleType defaultType = ((ClassDescriptor) containingDeclaration2).getDefaultType();
                    Intrinsics.checkNotNullExpressionValue(defaultType, "getDefaultType(...)");
                    arrayList.add(TypeUtilsKt.makeNullable(defaultType));
                } else {
                    arrayList.add(((ClassDescriptor) containingDeclaration2).getDefaultType());
                }
            }
        }
        List<ValueParameterDescriptor> valueParameters = callableMemberDescriptor.getValueParameters();
        Intrinsics.checkNotNullExpressionValue(valueParameters, "getValueParameters(...)");
        for (ValueParameterDescriptor valueParameterDescriptor : valueParameters) {
            arrayList.add(valueParameterDescriptor.getType());
        }
        return arrayList;
    }

    public static final Class s(DeclarationDescriptor declarationDescriptor) {
        if ((declarationDescriptor instanceof ClassDescriptor) && InlineClassesUtilsKt.isInlineClass(declarationDescriptor)) {
            ClassDescriptor classDescriptor = (ClassDescriptor) declarationDescriptor;
            Class q10 = j3.q(classDescriptor);
            if (q10 != null) {
                return q10;
            }
            throw new x2("Class object for the class " + classDescriptor.getName() + " cannot be found (classId=" + DescriptorUtilsKt.getClassId((ClassifierDescriptor) declarationDescriptor) + ')');
        }
        return null;
    }

    public static final Class t(KotlinType kotlinType) {
        KotlinType unsubstitutedUnderlyingType;
        Class s10 = s(kotlinType.getConstructor().mo1199getDeclarationDescriptor());
        if (s10 == null) {
            return null;
        }
        if (TypeUtils.isNullableType(kotlinType) && ((unsubstitutedUnderlyingType = InlineClassesUtilsKt.unsubstitutedUnderlyingType(kotlinType)) == null || TypeUtils.isNullableType(unsubstitutedUnderlyingType) || KotlinBuiltIns.isPrimitiveType(unsubstitutedUnderlyingType))) {
            return null;
        }
        return s10;
    }

    public static final String u(ClassifierDescriptor classifierDescriptor) {
        Intrinsics.checkNotNullParameter(classifierDescriptor, "<this>");
        ClassId classId = DescriptorUtilsKt.getClassId(classifierDescriptor);
        Intrinsics.checkNotNull(classId);
        return ClassMapperLite.mapClass(classId.asString());
    }
}
