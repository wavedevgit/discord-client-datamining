package zs;

import at.h2;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import kotlinx.serialization.descriptors.SerialDescriptor;
import zs.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class j {
    public static final SerialDescriptor b(String serialName, e kind) {
        Intrinsics.checkNotNullParameter(serialName, "serialName");
        Intrinsics.checkNotNullParameter(kind, "kind");
        if (!StringsKt.k0(serialName)) {
            return h2.a(serialName, kind);
        }
        throw new IllegalArgumentException("Blank serial names are prohibited");
    }

    public static final SerialDescriptor c(String serialName, SerialDescriptor[] typeParameters, Function1 builderAction) {
        Intrinsics.checkNotNullParameter(serialName, "serialName");
        Intrinsics.checkNotNullParameter(typeParameters, "typeParameters");
        Intrinsics.checkNotNullParameter(builderAction, "builderAction");
        if (!StringsKt.k0(serialName)) {
            a aVar = new a(serialName);
            builderAction.invoke(aVar);
            return new kotlinx.serialization.descriptors.a(serialName, l.a.f56102a, aVar.f().size(), kotlin.collections.i.R0(typeParameters), aVar);
        }
        throw new IllegalArgumentException("Blank serial names are prohibited");
    }

    public static final SerialDescriptor d(String serialName, k kind, SerialDescriptor[] typeParameters, Function1 builder) {
        Intrinsics.checkNotNullParameter(serialName, "serialName");
        Intrinsics.checkNotNullParameter(kind, "kind");
        Intrinsics.checkNotNullParameter(typeParameters, "typeParameters");
        Intrinsics.checkNotNullParameter(builder, "builder");
        if (!StringsKt.k0(serialName)) {
            if (!Intrinsics.areEqual(kind, l.a.f56102a)) {
                a aVar = new a(serialName);
                builder.invoke(aVar);
                return new kotlinx.serialization.descriptors.a(serialName, kind, aVar.f().size(), kotlin.collections.i.R0(typeParameters), aVar);
            }
            throw new IllegalArgumentException("For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead");
        }
        throw new IllegalArgumentException("Blank serial names are prohibited");
    }

    public static /* synthetic */ SerialDescriptor e(String str, k kVar, SerialDescriptor[] serialDescriptorArr, Function1 function1, int i10, Object obj) {
        if ((i10 & 8) != 0) {
            function1 = new Function1() { // from class: zs.i
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj2) {
                    Unit f10;
                    f10 = j.f((a) obj2);
                    return f10;
                }
            };
        }
        return d(str, kVar, serialDescriptorArr, function1);
    }

    public static final Unit f(a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return Unit.f33282a;
    }
}
