package dt;

import at.k;
import at.l;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.json.Json;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class f1 {
    public static final SerialDescriptor a(SerialDescriptor serialDescriptor, et.b module) {
        SerialDescriptor a10;
        Intrinsics.checkNotNullParameter(serialDescriptor, "<this>");
        Intrinsics.checkNotNullParameter(module, "module");
        if (Intrinsics.areEqual(serialDescriptor.getKind(), k.a.f6087a)) {
            SerialDescriptor b10 = at.b.b(module, serialDescriptor);
            if (b10 != null && (a10 = a(b10, module)) != null) {
                return a10;
            }
            return serialDescriptor;
        } else if (serialDescriptor.isInline()) {
            return a(serialDescriptor.g(0), module);
        } else {
            return serialDescriptor;
        }
    }

    public static final e1 b(Json json, SerialDescriptor desc) {
        Intrinsics.checkNotNullParameter(json, "<this>");
        Intrinsics.checkNotNullParameter(desc, "desc");
        at.k kind = desc.getKind();
        if (kind instanceof at.d) {
            return e1.f22401q;
        }
        if (Intrinsics.areEqual(kind, l.b.f6090a)) {
            return e1.f22399o;
        }
        if (Intrinsics.areEqual(kind, l.c.f6091a)) {
            SerialDescriptor a10 = a(desc.g(0), json.a());
            at.k kind2 = a10.getKind();
            if (!(kind2 instanceof at.e) && !Intrinsics.areEqual(kind2, k.b.f6088a)) {
                if (json.e().c()) {
                    return e1.f22399o;
                }
                throw g0.c(a10);
            }
            return e1.f22400p;
        }
        return e1.f22398i;
    }
}
