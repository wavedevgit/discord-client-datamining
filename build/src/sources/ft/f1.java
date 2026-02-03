package ft;

import ct.k;
import ct.l;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.json.Json;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class f1 {
    public static final SerialDescriptor a(SerialDescriptor serialDescriptor, gt.b module) {
        SerialDescriptor a10;
        Intrinsics.checkNotNullParameter(serialDescriptor, "<this>");
        Intrinsics.checkNotNullParameter(module, "module");
        if (Intrinsics.areEqual(serialDescriptor.getKind(), k.a.f19851a)) {
            SerialDescriptor b10 = ct.b.b(module, serialDescriptor);
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
        ct.k kind = desc.getKind();
        if (kind instanceof ct.d) {
            return e1.f24719q;
        }
        if (Intrinsics.areEqual(kind, l.b.f19854a)) {
            return e1.f24717o;
        }
        if (Intrinsics.areEqual(kind, l.c.f19855a)) {
            SerialDescriptor a10 = a(desc.g(0), json.a());
            ct.k kind2 = a10.getKind();
            if (!(kind2 instanceof ct.e) && !Intrinsics.areEqual(kind2, k.b.f19852a)) {
                if (json.e().c()) {
                    return e1.f24717o;
                }
                throw g0.c(a10);
            }
            return e1.f24718p;
        }
        return e1.f24716i;
    }
}
