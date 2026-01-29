package ct;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.json.Json;
import zs.k;
import zs.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class f1 {
    public static final SerialDescriptor a(SerialDescriptor serialDescriptor, dt.b module) {
        SerialDescriptor a10;
        Intrinsics.checkNotNullParameter(serialDescriptor, "<this>");
        Intrinsics.checkNotNullParameter(module, "module");
        if (Intrinsics.areEqual(serialDescriptor.getKind(), k.a.f56100a)) {
            SerialDescriptor b10 = zs.b.b(module, serialDescriptor);
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
        zs.k kind = desc.getKind();
        if (kind instanceof zs.d) {
            return e1.f21342q;
        }
        if (Intrinsics.areEqual(kind, l.b.f56103a)) {
            return e1.f21340o;
        }
        if (Intrinsics.areEqual(kind, l.c.f56104a)) {
            SerialDescriptor a10 = a(desc.g(0), json.a());
            zs.k kind2 = a10.getKind();
            if (!(kind2 instanceof zs.e) && !Intrinsics.areEqual(kind2, k.b.f56101a)) {
                if (json.e().c()) {
                    return e1.f21340o;
                }
                throw g0.c(a10);
            }
            return e1.f21341p;
        }
        return e1.f21339i;
    }
}
