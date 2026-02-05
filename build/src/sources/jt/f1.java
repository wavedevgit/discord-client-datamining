package jt;

import ft.k;
import ft.l;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.json.Json;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class f1 {
    public static final SerialDescriptor a(SerialDescriptor serialDescriptor, kt.b module) {
        SerialDescriptor a10;
        Intrinsics.checkNotNullParameter(serialDescriptor, "<this>");
        Intrinsics.checkNotNullParameter(module, "module");
        if (Intrinsics.areEqual(serialDescriptor.getKind(), k.a.f23492a)) {
            SerialDescriptor b10 = ft.b.b(module, serialDescriptor);
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
        ft.k kind = desc.getKind();
        if (kind instanceof ft.d) {
            return e1.f31317q;
        }
        if (Intrinsics.areEqual(kind, l.b.f23495a)) {
            return e1.f31315o;
        }
        if (Intrinsics.areEqual(kind, l.c.f23496a)) {
            SerialDescriptor a10 = a(desc.g(0), json.a());
            ft.k kind2 = a10.getKind();
            if (!(kind2 instanceof ft.e) && !Intrinsics.areEqual(kind2, k.b.f23493a)) {
                if (json.e().c()) {
                    return e1.f31315o;
                }
                throw g0.c(a10);
            }
            return e1.f31316p;
        }
        return e1.f31314i;
    }
}
