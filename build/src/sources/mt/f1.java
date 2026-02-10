package mt;

import jt.k;
import jt.l;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.json.Json;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class f1 {
    public static final SerialDescriptor a(SerialDescriptor serialDescriptor, nt.b module) {
        SerialDescriptor a10;
        Intrinsics.checkNotNullParameter(serialDescriptor, "<this>");
        Intrinsics.checkNotNullParameter(module, "module");
        if (Intrinsics.areEqual(serialDescriptor.getKind(), k.a.f30493a)) {
            SerialDescriptor b10 = jt.b.b(module, serialDescriptor);
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
        jt.k kind = desc.getKind();
        if (kind instanceof jt.d) {
            return e1.f37531q;
        }
        if (Intrinsics.areEqual(kind, l.b.f30496a)) {
            return e1.f37529o;
        }
        if (Intrinsics.areEqual(kind, l.c.f30497a)) {
            SerialDescriptor a10 = a(desc.g(0), json.a());
            jt.k kind2 = a10.getKind();
            if (!(kind2 instanceof jt.e) && !Intrinsics.areEqual(kind2, k.b.f30494a)) {
                if (json.e().c()) {
                    return e1.f37529o;
                }
                throw g0.c(a10);
            }
            return e1.f37530p;
        }
        return e1.f37528i;
    }
}
