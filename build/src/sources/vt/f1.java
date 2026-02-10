package vt;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.json.Json;
import st.k;
import st.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class f1 {
    public static final SerialDescriptor a(SerialDescriptor serialDescriptor, wt.b module) {
        SerialDescriptor a10;
        Intrinsics.checkNotNullParameter(serialDescriptor, "<this>");
        Intrinsics.checkNotNullParameter(module, "module");
        if (Intrinsics.areEqual(serialDescriptor.getKind(), k.a.f48377a)) {
            SerialDescriptor b10 = st.b.b(module, serialDescriptor);
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
        st.k kind = desc.getKind();
        if (kind instanceof st.d) {
            return e1.f51891q;
        }
        if (Intrinsics.areEqual(kind, l.b.f48380a)) {
            return e1.f51889o;
        }
        if (Intrinsics.areEqual(kind, l.c.f48381a)) {
            SerialDescriptor a10 = a(desc.g(0), json.a());
            st.k kind2 = a10.getKind();
            if (!(kind2 instanceof st.e) && !Intrinsics.areEqual(kind2, k.b.f48378a)) {
                if (json.e().c()) {
                    return e1.f51889o;
                }
                throw g0.c(a10);
            }
            return e1.f51890p;
        }
        return e1.f51888i;
    }
}
