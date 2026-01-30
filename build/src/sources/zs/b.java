package zs;

import at.j2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KClass;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class b {
    public static final KClass a(SerialDescriptor serialDescriptor) {
        Intrinsics.checkNotNullParameter(serialDescriptor, "<this>");
        if (serialDescriptor instanceof c) {
            return ((c) serialDescriptor).f56095b;
        }
        if (serialDescriptor instanceof j2) {
            return a(((j2) serialDescriptor).j());
        }
        return null;
    }

    public static final SerialDescriptor b(dt.b bVar, SerialDescriptor descriptor) {
        KSerializer c10;
        Intrinsics.checkNotNullParameter(bVar, "<this>");
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        KClass a10 = a(descriptor);
        if (a10 == null || (c10 = dt.b.c(bVar, a10, null, 2, null)) == null) {
            return null;
        }
        return c10.getDescriptor();
    }

    public static final SerialDescriptor c(SerialDescriptor serialDescriptor, KClass context) {
        Intrinsics.checkNotNullParameter(serialDescriptor, "<this>");
        Intrinsics.checkNotNullParameter(context, "context");
        return new c(serialDescriptor, context);
    }
}
