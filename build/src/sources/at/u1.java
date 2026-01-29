package at;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KClass;
import kotlin.reflect.KType;
import kotlin.reflect.KTypeProjection;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class u1 {

    /* renamed from: a  reason: collision with root package name */
    private static final SerialDescriptor[] f6890a = new SerialDescriptor[0];

    public static final Set a(SerialDescriptor serialDescriptor) {
        Intrinsics.checkNotNullParameter(serialDescriptor, "<this>");
        if (serialDescriptor instanceof l) {
            return ((l) serialDescriptor).a();
        }
        HashSet hashSet = new HashSet(serialDescriptor.d());
        int d10 = serialDescriptor.d();
        for (int i10 = 0; i10 < d10; i10++) {
            hashSet.add(serialDescriptor.e(i10));
        }
        return hashSet;
    }

    public static final SerialDescriptor[] b(List list) {
        SerialDescriptor[] serialDescriptorArr;
        List list2 = list;
        list = (list2 == null || list2.isEmpty()) ? null : null;
        if (list != null && (serialDescriptorArr = (SerialDescriptor[]) list.toArray(new SerialDescriptor[0])) != null) {
            return serialDescriptorArr;
        }
        return f6890a;
    }

    public static final KClass c(KType kType) {
        Intrinsics.checkNotNullParameter(kType, "<this>");
        kotlin.reflect.d classifier = kType.getClassifier();
        if (classifier instanceof KClass) {
            return (KClass) classifier;
        }
        if (classifier instanceof kotlin.reflect.l) {
            throw new IllegalArgumentException("Captured type parameter " + classifier + " from generic non-reified function. Such functionality cannot be supported because " + classifier + " is erased, either specify serializer explicitly or make calling function inline with reified " + classifier + '.');
        }
        throw new IllegalArgumentException("Only KClass supported as classifier, got " + classifier);
    }

    public static final String d(String className) {
        Intrinsics.checkNotNullParameter(className, "className");
        return "Serializer for class '" + className + "' is not found.\nPlease ensure that class is marked as '@Serializable' and that the serialization compiler plugin is applied.\n";
    }

    public static final String e(KClass kClass) {
        Intrinsics.checkNotNullParameter(kClass, "<this>");
        String simpleName = kClass.getSimpleName();
        if (simpleName == null) {
            simpleName = "<local class name not available>";
        }
        return d(simpleName);
    }

    public static final Void f(KClass kClass) {
        Intrinsics.checkNotNullParameter(kClass, "<this>");
        throw new xs.n(e(kClass));
    }

    public static final KType g(KTypeProjection kTypeProjection) {
        Intrinsics.checkNotNullParameter(kTypeProjection, "<this>");
        KType c10 = kTypeProjection.c();
        if (c10 != null) {
            return c10;
        }
        throw new IllegalArgumentException(("Star projections in type arguments are not allowed, but had " + kTypeProjection.c()).toString());
    }
}
