package kotlin.reflect.jvm.internal.impl.load.java.structure;

import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JavaLoadingKt {
    private static final boolean a(JavaMethod javaMethod) {
        JavaType javaType;
        FqName fqName;
        JavaValueParameter javaValueParameter = (JavaValueParameter) CollectionsKt.S0(javaMethod.getValueParameters());
        JavaClassifierType javaClassifierType = null;
        if (javaValueParameter != null) {
            javaType = javaValueParameter.getType();
        } else {
            javaType = null;
        }
        if (javaType instanceof JavaClassifierType) {
            javaClassifierType = (JavaClassifierType) javaType;
        }
        if (javaClassifierType == null) {
            return false;
        }
        JavaClassifier classifier = javaClassifierType.getClassifier();
        if (!(classifier instanceof JavaClass) || (fqName = ((JavaClass) classifier).getFqName()) == null || !Intrinsics.areEqual(fqName.asString(), "java.lang.Object")) {
            return false;
        }
        return true;
    }

    private static final boolean b(JavaMethod javaMethod) {
        String asString = javaMethod.getName().asString();
        int hashCode = asString.hashCode();
        if (hashCode != -1776922004) {
            if (hashCode != -1295482945) {
                if (hashCode != 147696667 || !asString.equals("hashCode")) {
                    return false;
                }
            } else if (asString.equals("equals")) {
                return a(javaMethod);
            } else {
                return false;
            }
        } else if (!asString.equals("toString")) {
            return false;
        }
        return javaMethod.getValueParameters().isEmpty();
    }

    public static final boolean isObjectMethodInInterface(@NotNull JavaMember javaMember) {
        Intrinsics.checkNotNullParameter(javaMember, "<this>");
        if (javaMember.getContainingClass().isInterface() && (javaMember instanceof JavaMethod) && b((JavaMethod) javaMember)) {
            return true;
        }
        return false;
    }
}
