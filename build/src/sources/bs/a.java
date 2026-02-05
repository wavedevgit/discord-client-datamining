package bs;

import com.withpersona.sdk2.inquiry.network.dto.InquiryField;
import java.lang.annotation.Annotation;
import kotlin.jvm.internal.ClassBasedDeclarationContainer;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {
    public static final KClass a(Annotation annotation) {
        Intrinsics.checkNotNullParameter(annotation, "<this>");
        Class<? extends Annotation> annotationType = annotation.annotationType();
        Intrinsics.checkNotNullExpressionValue(annotationType, "annotationType(...)");
        KClass e10 = e(annotationType);
        Intrinsics.checkNotNull(e10, "null cannot be cast to non-null type kotlin.reflect.KClass<out T of kotlin.jvm.JvmClassMappingKt.<get-annotationClass>>");
        return e10;
    }

    public static final Class b(KClass kClass) {
        Intrinsics.checkNotNullParameter(kClass, "<this>");
        Class<?> jClass = ((ClassBasedDeclarationContainer) kClass).getJClass();
        Intrinsics.checkNotNull(jClass, "null cannot be cast to non-null type java.lang.Class<T of kotlin.jvm.JvmClassMappingKt.<get-java>>");
        return jClass;
    }

    public static final Class c(KClass kClass) {
        Intrinsics.checkNotNullParameter(kClass, "<this>");
        Class<?> jClass = ((ClassBasedDeclarationContainer) kClass).getJClass();
        if (!jClass.isPrimitive()) {
            Intrinsics.checkNotNull(jClass, "null cannot be cast to non-null type java.lang.Class<T of kotlin.jvm.JvmClassMappingKt.<get-javaObjectType>>");
            return jClass;
        }
        String name = jClass.getName();
        switch (name.hashCode()) {
            case -1325958191:
                if (name.equals("double")) {
                    jClass = Double.class;
                    break;
                }
                break;
            case 104431:
                if (name.equals("int")) {
                    jClass = Integer.class;
                    break;
                }
                break;
            case 3039496:
                if (name.equals("byte")) {
                    jClass = Byte.class;
                    break;
                }
                break;
            case 3052374:
                if (name.equals("char")) {
                    jClass = Character.class;
                    break;
                }
                break;
            case 3327612:
                if (name.equals("long")) {
                    jClass = Long.class;
                    break;
                }
                break;
            case 3625364:
                if (name.equals("void")) {
                    jClass = Void.class;
                    break;
                }
                break;
            case 64711720:
                if (name.equals(InquiryField.BooleanField.TYPE)) {
                    jClass = Boolean.class;
                    break;
                }
                break;
            case 97526364:
                if (name.equals(InquiryField.FloatField.TYPE)) {
                    jClass = Float.class;
                    break;
                }
                break;
            case 109413500:
                if (name.equals("short")) {
                    jClass = Short.class;
                    break;
                }
                break;
        }
        Intrinsics.checkNotNull(jClass, "null cannot be cast to non-null type java.lang.Class<T of kotlin.jvm.JvmClassMappingKt.<get-javaObjectType>>");
        return jClass;
    }

    public static final Class d(KClass kClass) {
        Intrinsics.checkNotNullParameter(kClass, "<this>");
        Class<?> jClass = ((ClassBasedDeclarationContainer) kClass).getJClass();
        if (jClass.isPrimitive()) {
            Intrinsics.checkNotNull(jClass, "null cannot be cast to non-null type java.lang.Class<T of kotlin.jvm.JvmClassMappingKt.<get-javaPrimitiveType>>");
            return jClass;
        }
        String name = jClass.getName();
        switch (name.hashCode()) {
            case -2056817302:
                if (!name.equals("java.lang.Integer")) {
                    return null;
                }
                return Integer.TYPE;
            case -527879800:
                if (name.equals("java.lang.Float")) {
                    return Float.TYPE;
                }
                return null;
            case -515992664:
                if (name.equals("java.lang.Short")) {
                    return Short.TYPE;
                }
                return null;
            case 155276373:
                if (name.equals("java.lang.Character")) {
                    return Character.TYPE;
                }
                return null;
            case 344809556:
                if (name.equals("java.lang.Boolean")) {
                    return Boolean.TYPE;
                }
                return null;
            case 398507100:
                if (name.equals("java.lang.Byte")) {
                    return Byte.TYPE;
                }
                return null;
            case 398795216:
                if (name.equals("java.lang.Long")) {
                    return Long.TYPE;
                }
                return null;
            case 399092968:
                if (name.equals("java.lang.Void")) {
                    return Void.TYPE;
                }
                return null;
            case 761287205:
                if (name.equals("java.lang.Double")) {
                    return Double.TYPE;
                }
                return null;
            default:
                return null;
        }
    }

    public static final KClass e(Class cls) {
        Intrinsics.checkNotNullParameter(cls, "<this>");
        return Reflection.getOrCreateKotlinClass(cls);
    }
}
