package ks;

import java.lang.reflect.Method;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.builtins.PrimitiveType;
import kotlin.reflect.jvm.internal.impl.builtins.StandardNames;
import kotlin.reflect.jvm.internal.impl.builtins.jvm.CloneableClassScope;
import kotlin.reflect.jvm.internal.impl.builtins.jvm.JavaToKotlinClassMap;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ClassDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ConstructorDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyGetterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertySetterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.SourceElement;
import kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure.ReflectClassUtilKt;
import kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure.ReflectJavaClass;
import kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure.ReflectJavaConstructor;
import kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure.ReflectJavaField;
import kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure.ReflectJavaMethod;
import kotlin.reflect.jvm.internal.impl.load.java.JvmAbi;
import kotlin.reflect.jvm.internal.impl.load.java.SpecialBuiltinMembers;
import kotlin.reflect.jvm.internal.impl.load.java.descriptors.JavaClassConstructorDescriptor;
import kotlin.reflect.jvm.internal.impl.load.java.descriptors.JavaMethodDescriptor;
import kotlin.reflect.jvm.internal.impl.load.java.descriptors.JavaPropertyDescriptor;
import kotlin.reflect.jvm.internal.impl.load.java.sources.JavaSourceElement;
import kotlin.reflect.jvm.internal.impl.load.java.structure.JavaElement;
import kotlin.reflect.jvm.internal.impl.load.kotlin.MethodSignatureMappingKt;
import kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf;
import kotlin.reflect.jvm.internal.impl.metadata.deserialization.ProtoBufUtilKt;
import kotlin.reflect.jvm.internal.impl.metadata.jvm.JvmProtoBuf;
import kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization.JvmMemberSignature;
import kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization.JvmProtoBufUtil;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite;
import kotlin.reflect.jvm.internal.impl.protobuf.MessageLite;
import kotlin.reflect.jvm.internal.impl.resolve.DescriptorFactory;
import kotlin.reflect.jvm.internal.impl.resolve.DescriptorUtils;
import kotlin.reflect.jvm.internal.impl.resolve.InlineClassesUtilsKt;
import kotlin.reflect.jvm.internal.impl.resolve.descriptorUtil.DescriptorUtilsKt;
import kotlin.reflect.jvm.internal.impl.resolve.jvm.JvmPrimitiveType;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedCallableMemberDescriptor;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedMemberDescriptor;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedPropertyDescriptor;
import kotlin.text.StringsKt;
import ks.n;
import ks.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class e3 {

    /* renamed from: a  reason: collision with root package name */
    public static final e3 f35300a = new e3();

    /* renamed from: b  reason: collision with root package name */
    private static final ClassId f35301b = ClassId.Companion.topLevel(new FqName("java.lang.Void"));

    private e3() {
    }

    private final PrimitiveType a(Class cls) {
        if (cls.isPrimitive()) {
            return JvmPrimitiveType.get(cls.getSimpleName()).getPrimitiveType();
        }
        return null;
    }

    private final boolean b(FunctionDescriptor functionDescriptor) {
        if (DescriptorFactory.isEnumValueOfMethod(functionDescriptor) || DescriptorFactory.isEnumValuesMethod(functionDescriptor)) {
            return true;
        }
        if (Intrinsics.areEqual(functionDescriptor.getName(), CloneableClassScope.Companion.getCLONE_NAME()) && functionDescriptor.getValueParameters().isEmpty()) {
            return true;
        }
        return false;
    }

    private final n.e d(FunctionDescriptor functionDescriptor) {
        return new n.e(new JvmMemberSignature.Method(e(functionDescriptor), MethodSignatureMappingKt.computeJvmDescriptor$default(functionDescriptor, false, false, 1, null)));
    }

    private final String e(CallableMemberDescriptor callableMemberDescriptor) {
        String jvmMethodNameIfSpecial = SpecialBuiltinMembers.getJvmMethodNameIfSpecial(callableMemberDescriptor);
        if (jvmMethodNameIfSpecial == null) {
            if (callableMemberDescriptor instanceof PropertyGetterDescriptor) {
                String asString = DescriptorUtilsKt.getPropertyIfAccessor(callableMemberDescriptor).getName().asString();
                Intrinsics.checkNotNullExpressionValue(asString, "asString(...)");
                return JvmAbi.getterName(asString);
            } else if (callableMemberDescriptor instanceof PropertySetterDescriptor) {
                String asString2 = DescriptorUtilsKt.getPropertyIfAccessor(callableMemberDescriptor).getName().asString();
                Intrinsics.checkNotNullExpressionValue(asString2, "asString(...)");
                return JvmAbi.setterName(asString2);
            } else {
                String asString3 = callableMemberDescriptor.getName().asString();
                Intrinsics.checkNotNullExpressionValue(asString3, "asString(...)");
                return asString3;
            }
        }
        return jvmMethodNameIfSpecial;
    }

    public final ClassId c(Class klass) {
        ClassId mapJavaToKotlin;
        Intrinsics.checkNotNullParameter(klass, "klass");
        if (klass.isArray()) {
            Class<?> componentType = klass.getComponentType();
            Intrinsics.checkNotNullExpressionValue(componentType, "getComponentType(...)");
            PrimitiveType a10 = a(componentType);
            if (a10 != null) {
                return new ClassId(StandardNames.BUILT_INS_PACKAGE_FQ_NAME, a10.getArrayTypeName());
            }
            return ClassId.Companion.topLevel(StandardNames.FqNames.array.toSafe());
        } else if (Intrinsics.areEqual(klass, Void.TYPE)) {
            return f35301b;
        } else {
            PrimitiveType a11 = a(klass);
            if (a11 != null) {
                return new ClassId(StandardNames.BUILT_INS_PACKAGE_FQ_NAME, a11.getTypeName());
            }
            ClassId classId = ReflectClassUtilKt.getClassId(klass);
            if (!classId.isLocal() && (mapJavaToKotlin = JavaToKotlinClassMap.INSTANCE.mapJavaToKotlin(classId.asSingleFqName())) != null) {
                return mapJavaToKotlin;
            }
            return classId;
        }
    }

    public final p f(PropertyDescriptor possiblyOverriddenProperty) {
        JavaSourceElement javaSourceElement;
        JavaElement javaElement;
        SourceElement sourceElement;
        JavaSourceElement javaSourceElement2;
        JavaElement javaElement2;
        ReflectJavaMethod reflectJavaMethod;
        Intrinsics.checkNotNullParameter(possiblyOverriddenProperty, "possiblyOverriddenProperty");
        PropertyDescriptor original = ((PropertyDescriptor) DescriptorUtils.unwrapFakeOverride(possiblyOverriddenProperty)).getOriginal();
        Intrinsics.checkNotNullExpressionValue(original, "getOriginal(...)");
        Method method = null;
        n.e eVar = null;
        if (original instanceof DeserializedPropertyDescriptor) {
            DeserializedPropertyDescriptor deserializedPropertyDescriptor = (DeserializedPropertyDescriptor) original;
            ProtoBuf.Property proto = deserializedPropertyDescriptor.getProto();
            GeneratedMessageLite.GeneratedExtension<ProtoBuf.Property, JvmProtoBuf.JvmPropertySignature> propertySignature = JvmProtoBuf.propertySignature;
            Intrinsics.checkNotNullExpressionValue(propertySignature, "propertySignature");
            JvmProtoBuf.JvmPropertySignature jvmPropertySignature = (JvmProtoBuf.JvmPropertySignature) ProtoBufUtilKt.getExtensionOrNull(proto, propertySignature);
            if (jvmPropertySignature != null) {
                return new p.c(original, proto, jvmPropertySignature, deserializedPropertyDescriptor.getNameResolver(), deserializedPropertyDescriptor.getTypeTable());
            }
        } else if (original instanceof JavaPropertyDescriptor) {
            JavaPropertyDescriptor javaPropertyDescriptor = (JavaPropertyDescriptor) original;
            SourceElement source = javaPropertyDescriptor.getSource();
            if (source instanceof JavaSourceElement) {
                javaSourceElement = (JavaSourceElement) source;
            } else {
                javaSourceElement = null;
            }
            if (javaSourceElement != null) {
                javaElement = javaSourceElement.getJavaElement();
            } else {
                javaElement = null;
            }
            if (javaElement instanceof ReflectJavaField) {
                return new p.a(((ReflectJavaField) javaElement).getMember());
            }
            if (javaElement instanceof ReflectJavaMethod) {
                Method member = ((ReflectJavaMethod) javaElement).getMember();
                PropertySetterDescriptor setter = javaPropertyDescriptor.getSetter();
                if (setter != null) {
                    sourceElement = setter.getSource();
                } else {
                    sourceElement = null;
                }
                if (sourceElement instanceof JavaSourceElement) {
                    javaSourceElement2 = (JavaSourceElement) sourceElement;
                } else {
                    javaSourceElement2 = null;
                }
                if (javaSourceElement2 != null) {
                    javaElement2 = javaSourceElement2.getJavaElement();
                } else {
                    javaElement2 = null;
                }
                if (javaElement2 instanceof ReflectJavaMethod) {
                    reflectJavaMethod = (ReflectJavaMethod) javaElement2;
                } else {
                    reflectJavaMethod = null;
                }
                if (reflectJavaMethod != null) {
                    method = reflectJavaMethod.getMember();
                }
                return new p.b(member, method);
            }
            throw new x2("Incorrect resolution sequence for Java field " + original + " (source = " + javaElement + ')');
        }
        PropertyGetterDescriptor getter = original.getGetter();
        Intrinsics.checkNotNull(getter);
        n.e d10 = d(getter);
        PropertySetterDescriptor setter2 = original.getSetter();
        if (setter2 != null) {
            eVar = d(setter2);
        }
        return new p.d(d10, eVar);
    }

    public final n g(FunctionDescriptor possiblySubstitutedFunction) {
        JavaSourceElement javaSourceElement;
        JavaSourceElement javaSourceElement2;
        JavaElement javaElement;
        Method member;
        JvmMemberSignature.Method jvmConstructorSignature;
        JvmMemberSignature.Method jvmMethodSignature;
        Intrinsics.checkNotNullParameter(possiblySubstitutedFunction, "possiblySubstitutedFunction");
        FunctionDescriptor original = ((FunctionDescriptor) DescriptorUtils.unwrapFakeOverride(possiblySubstitutedFunction)).getOriginal();
        Intrinsics.checkNotNullExpressionValue(original, "getOriginal(...)");
        JavaElement javaElement2 = null;
        ReflectJavaMethod reflectJavaMethod = null;
        if (original instanceof DeserializedCallableMemberDescriptor) {
            DeserializedMemberDescriptor deserializedMemberDescriptor = (DeserializedMemberDescriptor) original;
            MessageLite proto = deserializedMemberDescriptor.getProto();
            if ((proto instanceof ProtoBuf.Function) && (jvmMethodSignature = JvmProtoBufUtil.INSTANCE.getJvmMethodSignature((ProtoBuf.Function) proto, deserializedMemberDescriptor.getNameResolver(), deserializedMemberDescriptor.getTypeTable())) != null) {
                return new n.e(jvmMethodSignature);
            }
            if ((proto instanceof ProtoBuf.Constructor) && (jvmConstructorSignature = JvmProtoBufUtil.INSTANCE.getJvmConstructorSignature((ProtoBuf.Constructor) proto, deserializedMemberDescriptor.getNameResolver(), deserializedMemberDescriptor.getTypeTable())) != null) {
                DeclarationDescriptor containingDeclaration = possiblySubstitutedFunction.getContainingDeclaration();
                Intrinsics.checkNotNullExpressionValue(containingDeclaration, "getContainingDeclaration(...)");
                if (InlineClassesUtilsKt.isInlineClass(containingDeclaration)) {
                    return new n.e(jvmConstructorSignature);
                }
                DeclarationDescriptor containingDeclaration2 = possiblySubstitutedFunction.getContainingDeclaration();
                Intrinsics.checkNotNullExpressionValue(containingDeclaration2, "getContainingDeclaration(...)");
                if (InlineClassesUtilsKt.isMultiFieldValueClass(containingDeclaration2)) {
                    ConstructorDescriptor constructorDescriptor = (ConstructorDescriptor) possiblySubstitutedFunction;
                    if (constructorDescriptor.isPrimary()) {
                        if (!Intrinsics.areEqual(jvmConstructorSignature.getName(), "constructor-impl") || !StringsKt.z(jvmConstructorSignature.getDesc(), ")V", false, 2, null)) {
                            throw new IllegalArgumentException(("Invalid signature: " + jvmConstructorSignature).toString());
                        }
                    } else if (Intrinsics.areEqual(jvmConstructorSignature.getName(), "constructor-impl")) {
                        ClassDescriptor constructedClass = constructorDescriptor.getConstructedClass();
                        Intrinsics.checkNotNullExpressionValue(constructedClass, "getConstructedClass(...)");
                        String u10 = ls.o.u(constructedClass);
                        if (StringsKt.z(jvmConstructorSignature.getDesc(), ")V", false, 2, null)) {
                            jvmConstructorSignature = JvmMemberSignature.Method.copy$default(jvmConstructorSignature, null, StringsKt.D0(jvmConstructorSignature.getDesc(), "V") + u10, 1, null);
                        } else if (!StringsKt.z(jvmConstructorSignature.getDesc(), u10, false, 2, null)) {
                            throw new IllegalArgumentException(("Invalid signature: " + jvmConstructorSignature).toString());
                        }
                    } else {
                        throw new IllegalArgumentException(("Invalid signature: " + jvmConstructorSignature).toString());
                    }
                    return new n.e(jvmConstructorSignature);
                }
                return new n.d(jvmConstructorSignature);
            }
            return d(original);
        } else if (original instanceof JavaMethodDescriptor) {
            SourceElement source = ((JavaMethodDescriptor) original).getSource();
            if (source instanceof JavaSourceElement) {
                javaSourceElement2 = (JavaSourceElement) source;
            } else {
                javaSourceElement2 = null;
            }
            if (javaSourceElement2 != null) {
                javaElement = javaSourceElement2.getJavaElement();
            } else {
                javaElement = null;
            }
            if (javaElement instanceof ReflectJavaMethod) {
                reflectJavaMethod = (ReflectJavaMethod) javaElement;
            }
            if (reflectJavaMethod != null && (member = reflectJavaMethod.getMember()) != null) {
                return new n.c(member);
            }
            throw new x2("Incorrect resolution sequence for Java method " + original);
        } else if (original instanceof JavaClassConstructorDescriptor) {
            SourceElement source2 = ((JavaClassConstructorDescriptor) original).getSource();
            if (source2 instanceof JavaSourceElement) {
                javaSourceElement = (JavaSourceElement) source2;
            } else {
                javaSourceElement = null;
            }
            if (javaSourceElement != null) {
                javaElement2 = javaSourceElement.getJavaElement();
            }
            if (javaElement2 instanceof ReflectJavaConstructor) {
                return new n.b(((ReflectJavaConstructor) javaElement2).getMember());
            }
            if (javaElement2 instanceof ReflectJavaClass) {
                ReflectJavaClass reflectJavaClass = (ReflectJavaClass) javaElement2;
                if (reflectJavaClass.isAnnotationType()) {
                    return new n.a(reflectJavaClass.getElement());
                }
            }
            throw new x2("Incorrect resolution sequence for Java constructor " + original + " (" + javaElement2 + ')');
        } else if (b(original)) {
            return d(original);
        } else {
            throw new x2("Unknown origin of " + original + " (" + original.getClass() + ')');
        }
    }
}
