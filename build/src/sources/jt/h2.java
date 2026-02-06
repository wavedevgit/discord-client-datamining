package jt;

import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlin.reflect.KClass;
import kotlin.text.StringsKt;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class h2 {

    /* renamed from: a  reason: collision with root package name */
    private static final Map f31007a = t1.i();

    public static final SerialDescriptor a(String serialName, ht.e kind) {
        Intrinsics.checkNotNullParameter(serialName, "serialName");
        Intrinsics.checkNotNullParameter(kind, "kind");
        c(serialName);
        return new g2(serialName, kind);
    }

    public static final KSerializer b(KClass kClass) {
        Intrinsics.checkNotNullParameter(kClass, "<this>");
        return (KSerializer) f31007a.get(kClass);
    }

    private static final void c(String str) {
        for (KSerializer kSerializer : f31007a.values()) {
            if (Intrinsics.areEqual(str, kSerializer.getDescriptor().h())) {
                throw new IllegalArgumentException(StringsKt.j("\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name " + str + " there already exists " + Reflection.getOrCreateKotlinClass(kSerializer.getClass()).getSimpleName() + ".\n                Please refer to SerialDescriptor documentation for additional information.\n            "));
            }
        }
    }
}
