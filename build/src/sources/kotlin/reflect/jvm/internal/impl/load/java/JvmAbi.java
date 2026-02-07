package kotlin.reflect.jvm.internal.impl.load.java;

import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.name.ClassId;
import kotlin.reflect.jvm.internal.impl.name.FqName;
import kotlin.reflect.jvm.internal.impl.util.capitalizeDecapitalize.CapitalizeDecapitalizeKt;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JvmAbi {
    @NotNull
    public static final JvmAbi INSTANCE = new JvmAbi();
    @NotNull
    public static final ClassId JVM_FIELD_ANNOTATION_CLASS_ID;
    @NotNull
    public static final FqName JVM_FIELD_ANNOTATION_FQ_NAME;

    /* renamed from: a  reason: collision with root package name */
    private static final ClassId f32778a;

    /* renamed from: b  reason: collision with root package name */
    private static final ClassId f32779b;

    static {
        FqName fqName = new FqName("kotlin.jvm.JvmField");
        JVM_FIELD_ANNOTATION_FQ_NAME = fqName;
        ClassId.Companion companion = ClassId.Companion;
        JVM_FIELD_ANNOTATION_CLASS_ID = companion.topLevel(fqName);
        f32778a = companion.topLevel(new FqName("kotlin.reflect.jvm.internal.ReflectionFactoryImpl"));
        f32779b = ClassId.Companion.fromString$default(companion, "kotlin/jvm/internal/RepeatableContainer", false, 2, null);
    }

    private JvmAbi() {
    }

    @NotNull
    public static final String getterName(@NotNull String propertyName) {
        Intrinsics.checkNotNullParameter(propertyName, "propertyName");
        if (startsWithIsPrefix(propertyName)) {
            return propertyName;
        }
        return "get" + CapitalizeDecapitalizeKt.capitalizeAsciiOnly(propertyName);
    }

    public static final boolean isGetterName(@NotNull String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        if (!StringsKt.P(name, "get", false, 2, null) && !StringsKt.P(name, "is", false, 2, null)) {
            return false;
        }
        return true;
    }

    public static final boolean isSetterName(@NotNull String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        return StringsKt.P(name, "set", false, 2, null);
    }

    @NotNull
    public static final String setterName(@NotNull String propertyName) {
        String capitalizeAsciiOnly;
        Intrinsics.checkNotNullParameter(propertyName, "propertyName");
        StringBuilder sb2 = new StringBuilder();
        sb2.append("set");
        if (startsWithIsPrefix(propertyName)) {
            capitalizeAsciiOnly = propertyName.substring(2);
            Intrinsics.checkNotNullExpressionValue(capitalizeAsciiOnly, "substring(...)");
        } else {
            capitalizeAsciiOnly = CapitalizeDecapitalizeKt.capitalizeAsciiOnly(propertyName);
        }
        sb2.append(capitalizeAsciiOnly);
        return sb2.toString();
    }

    public static final boolean startsWithIsPrefix(@NotNull String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        if (!StringsKt.P(name, "is", false, 2, null) || name.length() == 2) {
            return false;
        }
        char charAt = name.charAt(2);
        if (Intrinsics.compare(97, (int) charAt) <= 0 && Intrinsics.compare((int) charAt, 122) <= 0) {
            return false;
        }
        return true;
    }

    @NotNull
    public final ClassId getREPEATABLE_ANNOTATION_CONTAINER_META_ANNOTATION() {
        return f32779b;
    }
}
