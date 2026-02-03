package kotlin.reflect.jvm.internal.impl.descriptors.runtime.components;

import java.lang.annotation.Annotation;
import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.Iterator;
import java.util.Set;
import kotlin.collections.i;
import kotlin.jvm.internal.ArrayIteratorKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.builtins.PrimitiveType;
import kotlin.reflect.jvm.internal.impl.builtins.StandardNames;
import kotlin.reflect.jvm.internal.impl.builtins.jvm.JavaToKotlinClassMap;
import kotlin.reflect.jvm.internal.impl.descriptors.runtime.structure.ReflectClassUtilKt;
import kotlin.reflect.jvm.internal.impl.load.kotlin.KotlinJvmBinaryClass;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.name.SpecialNames;
import kotlin.reflect.jvm.internal.impl.resolve.constants.ClassLiteralValue;
import kotlin.reflect.jvm.internal.impl.resolve.jvm.JvmPrimitiveType;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    public static final a f33679a = new a();

    private a() {
    }

    private final ClassLiteralValue a(Class cls) {
        int i10 = 0;
        while (cls.isArray()) {
            i10++;
            cls = cls.getComponentType();
            Intrinsics.checkNotNullExpressionValue(cls, "getComponentType(...)");
        }
        if (cls.isPrimitive()) {
            if (Intrinsics.areEqual(cls, Void.TYPE)) {
                return new ClassLiteralValue(ClassId.Companion.topLevel(StandardNames.FqNames.unit.toSafe()), i10);
            }
            PrimitiveType primitiveType = JvmPrimitiveType.get(cls.getName()).getPrimitiveType();
            Intrinsics.checkNotNullExpressionValue(primitiveType, "getPrimitiveType(...)");
            if (i10 > 0) {
                return new ClassLiteralValue(ClassId.Companion.topLevel(primitiveType.getArrayTypeFqName()), i10 - 1);
            }
            return new ClassLiteralValue(ClassId.Companion.topLevel(primitiveType.getTypeFqName()), i10);
        }
        ClassId classId = ReflectClassUtilKt.getClassId(cls);
        ClassId mapJavaToKotlin = JavaToKotlinClassMap.INSTANCE.mapJavaToKotlin(classId.asSingleFqName());
        if (mapJavaToKotlin != null) {
            classId = mapJavaToKotlin;
        }
        return new ClassLiteralValue(classId, i10);
    }

    private final void c(Class cls, KotlinJvmBinaryClass.MemberVisitor memberVisitor) {
        boolean z10;
        Iterator it = ArrayIteratorKt.iterator(cls.getDeclaredConstructors());
        while (it.hasNext()) {
            Constructor constructor = (Constructor) it.next();
            Name name = SpecialNames.INIT;
            b bVar = b.f33680a;
            Intrinsics.checkNotNull(constructor);
            KotlinJvmBinaryClass.MethodAnnotationVisitor visitMethod = memberVisitor.visitMethod(name, bVar.a(constructor));
            if (visitMethod != null) {
                Iterator it2 = ArrayIteratorKt.iterator(constructor.getDeclaredAnnotations());
                while (it2.hasNext()) {
                    Annotation annotation = (Annotation) it2.next();
                    Intrinsics.checkNotNull(annotation);
                    f(visitMethod, annotation);
                }
                Annotation[][] parameterAnnotations = constructor.getParameterAnnotations();
                Intrinsics.checkNotNull(parameterAnnotations);
                if (parameterAnnotations.length == 0) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                if (!z10) {
                    int length = constructor.getParameterTypes().length - parameterAnnotations.length;
                    int length2 = parameterAnnotations.length;
                    for (int i10 = 0; i10 < length2; i10++) {
                        Iterator it3 = ArrayIteratorKt.iterator(parameterAnnotations[i10]);
                        while (it3.hasNext()) {
                            Annotation annotation2 = (Annotation) it3.next();
                            Class b10 = wr.a.b(wr.a.a(annotation2));
                            ClassId classId = ReflectClassUtilKt.getClassId(b10);
                            Intrinsics.checkNotNull(annotation2);
                            KotlinJvmBinaryClass.AnnotationArgumentVisitor visitParameterAnnotation = visitMethod.visitParameterAnnotation(i10 + length, classId, new ReflectAnnotationSource(annotation2));
                            if (visitParameterAnnotation != null) {
                                f33679a.h(visitParameterAnnotation, annotation2, b10);
                            }
                        }
                    }
                }
                visitMethod.visitEnd();
            }
        }
    }

    private final void d(Class cls, KotlinJvmBinaryClass.MemberVisitor memberVisitor) {
        Iterator it = ArrayIteratorKt.iterator(cls.getDeclaredFields());
        while (it.hasNext()) {
            Field field = (Field) it.next();
            Name identifier = Name.identifier(field.getName());
            Intrinsics.checkNotNullExpressionValue(identifier, "identifier(...)");
            b bVar = b.f33680a;
            Intrinsics.checkNotNull(field);
            KotlinJvmBinaryClass.AnnotationVisitor visitField = memberVisitor.visitField(identifier, bVar.b(field), null);
            if (visitField != null) {
                Iterator it2 = ArrayIteratorKt.iterator(field.getDeclaredAnnotations());
                while (it2.hasNext()) {
                    Annotation annotation = (Annotation) it2.next();
                    Intrinsics.checkNotNull(annotation);
                    f(visitField, annotation);
                }
                visitField.visitEnd();
            }
        }
    }

    private final void e(Class cls, KotlinJvmBinaryClass.MemberVisitor memberVisitor) {
        Iterator it = ArrayIteratorKt.iterator(cls.getDeclaredMethods());
        while (it.hasNext()) {
            Method method = (Method) it.next();
            Name identifier = Name.identifier(method.getName());
            Intrinsics.checkNotNullExpressionValue(identifier, "identifier(...)");
            b bVar = b.f33680a;
            Intrinsics.checkNotNull(method);
            KotlinJvmBinaryClass.MethodAnnotationVisitor visitMethod = memberVisitor.visitMethod(identifier, bVar.c(method));
            if (visitMethod != null) {
                Iterator it2 = ArrayIteratorKt.iterator(method.getDeclaredAnnotations());
                while (it2.hasNext()) {
                    Annotation annotation = (Annotation) it2.next();
                    Intrinsics.checkNotNull(annotation);
                    f(visitMethod, annotation);
                }
                Annotation[][] parameterAnnotations = method.getParameterAnnotations();
                Intrinsics.checkNotNullExpressionValue(parameterAnnotations, "getParameterAnnotations(...)");
                Annotation[][] annotationArr = parameterAnnotations;
                int length = annotationArr.length;
                for (int i10 = 0; i10 < length; i10++) {
                    Iterator it3 = ArrayIteratorKt.iterator(annotationArr[i10]);
                    while (it3.hasNext()) {
                        Annotation annotation2 = (Annotation) it3.next();
                        Class b10 = wr.a.b(wr.a.a(annotation2));
                        ClassId classId = ReflectClassUtilKt.getClassId(b10);
                        Intrinsics.checkNotNull(annotation2);
                        KotlinJvmBinaryClass.AnnotationArgumentVisitor visitParameterAnnotation = visitMethod.visitParameterAnnotation(i10, classId, new ReflectAnnotationSource(annotation2));
                        if (visitParameterAnnotation != null) {
                            f33679a.h(visitParameterAnnotation, annotation2, b10);
                        }
                    }
                }
                visitMethod.visitEnd();
            }
        }
    }

    private final void f(KotlinJvmBinaryClass.AnnotationVisitor annotationVisitor, Annotation annotation) {
        Class b10 = wr.a.b(wr.a.a(annotation));
        KotlinJvmBinaryClass.AnnotationArgumentVisitor visitAnnotation = annotationVisitor.visitAnnotation(ReflectClassUtilKt.getClassId(b10), new ReflectAnnotationSource(annotation));
        if (visitAnnotation != null) {
            f33679a.h(visitAnnotation, annotation, b10);
        }
    }

    private final void g(KotlinJvmBinaryClass.AnnotationArgumentVisitor annotationArgumentVisitor, Name name, Object obj) {
        Set set;
        Class<?> cls = obj.getClass();
        if (!Intrinsics.areEqual(cls, Class.class)) {
            set = ReflectKotlinClassKt.f33675a;
            if (set.contains(cls)) {
                annotationArgumentVisitor.visit(name, obj);
                return;
            } else if (ReflectClassUtilKt.isEnumClassOrSpecializedEnumEntryClass(cls)) {
                if (!cls.isEnum()) {
                    cls = cls.getEnclosingClass();
                }
                Intrinsics.checkNotNull(cls);
                ClassId classId = ReflectClassUtilKt.getClassId(cls);
                Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlin.Enum<*>");
                Name identifier = Name.identifier(((Enum) obj).name());
                Intrinsics.checkNotNullExpressionValue(identifier, "identifier(...)");
                annotationArgumentVisitor.visitEnum(name, classId, identifier);
                return;
            } else if (Annotation.class.isAssignableFrom(cls)) {
                Class<?>[] interfaces = cls.getInterfaces();
                Intrinsics.checkNotNullExpressionValue(interfaces, "getInterfaces(...)");
                Class cls2 = (Class) i.C0(interfaces);
                Intrinsics.checkNotNull(cls2);
                KotlinJvmBinaryClass.AnnotationArgumentVisitor visitAnnotation = annotationArgumentVisitor.visitAnnotation(name, ReflectClassUtilKt.getClassId(cls2));
                if (visitAnnotation != null) {
                    Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlin.Annotation");
                    h(visitAnnotation, (Annotation) obj, cls2);
                    return;
                }
                return;
            } else if (cls.isArray()) {
                KotlinJvmBinaryClass.AnnotationArrayArgumentVisitor visitArray = annotationArgumentVisitor.visitArray(name);
                if (visitArray == null) {
                    return;
                }
                Class<?> componentType = cls.getComponentType();
                int i10 = 0;
                if (componentType.isEnum()) {
                    Intrinsics.checkNotNull(componentType);
                    ClassId classId2 = ReflectClassUtilKt.getClassId(componentType);
                    Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlin.Array<*>");
                    Object[] objArr = (Object[]) obj;
                    int length = objArr.length;
                    while (i10 < length) {
                        Object obj2 = objArr[i10];
                        Intrinsics.checkNotNull(obj2, "null cannot be cast to non-null type kotlin.Enum<*>");
                        Name identifier2 = Name.identifier(((Enum) obj2).name());
                        Intrinsics.checkNotNullExpressionValue(identifier2, "identifier(...)");
                        visitArray.visitEnum(classId2, identifier2);
                        i10++;
                    }
                } else if (Intrinsics.areEqual(componentType, Class.class)) {
                    Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlin.Array<*>");
                    Object[] objArr2 = (Object[]) obj;
                    int length2 = objArr2.length;
                    while (i10 < length2) {
                        Object obj3 = objArr2[i10];
                        Intrinsics.checkNotNull(obj3, "null cannot be cast to non-null type java.lang.Class<*>");
                        visitArray.visitClassLiteral(a((Class) obj3));
                        i10++;
                    }
                } else if (Annotation.class.isAssignableFrom(componentType)) {
                    Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlin.Array<*>");
                    Object[] objArr3 = (Object[]) obj;
                    int length3 = objArr3.length;
                    while (i10 < length3) {
                        Object obj4 = objArr3[i10];
                        Intrinsics.checkNotNull(componentType);
                        KotlinJvmBinaryClass.AnnotationArgumentVisitor visitAnnotation2 = visitArray.visitAnnotation(ReflectClassUtilKt.getClassId(componentType));
                        if (visitAnnotation2 != null) {
                            Intrinsics.checkNotNull(obj4, "null cannot be cast to non-null type kotlin.Annotation");
                            h(visitAnnotation2, (Annotation) obj4, componentType);
                        }
                        i10++;
                    }
                } else {
                    Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlin.Array<*>");
                    Object[] objArr4 = (Object[]) obj;
                    int length4 = objArr4.length;
                    while (i10 < length4) {
                        visitArray.visit(objArr4[i10]);
                        i10++;
                    }
                }
                visitArray.visitEnd();
                return;
            } else {
                throw new UnsupportedOperationException("Unsupported annotation argument value (" + cls + "): " + obj);
            }
        }
        Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type java.lang.Class<*>");
        annotationArgumentVisitor.visitClassLiteral(name, a((Class) obj));
    }

    private final void h(KotlinJvmBinaryClass.AnnotationArgumentVisitor annotationArgumentVisitor, Annotation annotation, Class cls) {
        Iterator it = ArrayIteratorKt.iterator(cls.getDeclaredMethods());
        while (it.hasNext()) {
            Method method = (Method) it.next();
            try {
                Object invoke = method.invoke(annotation, null);
                Intrinsics.checkNotNull(invoke);
                Name identifier = Name.identifier(method.getName());
                Intrinsics.checkNotNullExpressionValue(identifier, "identifier(...)");
                g(annotationArgumentVisitor, identifier, invoke);
            } catch (IllegalAccessException unused) {
            }
        }
        annotationArgumentVisitor.visitEnd();
    }

    public final void b(Class klass, KotlinJvmBinaryClass.AnnotationVisitor visitor) {
        Intrinsics.checkNotNullParameter(klass, "klass");
        Intrinsics.checkNotNullParameter(visitor, "visitor");
        Iterator it = ArrayIteratorKt.iterator(klass.getDeclaredAnnotations());
        while (it.hasNext()) {
            Annotation annotation = (Annotation) it.next();
            Intrinsics.checkNotNull(annotation);
            f(visitor, annotation);
        }
        visitor.visitEnd();
    }

    public final void i(Class klass, KotlinJvmBinaryClass.MemberVisitor memberVisitor) {
        Intrinsics.checkNotNullParameter(klass, "klass");
        Intrinsics.checkNotNullParameter(memberVisitor, "memberVisitor");
        e(klass, memberVisitor);
        c(klass, memberVisitor);
        d(klass, memberVisitor);
    }
}
