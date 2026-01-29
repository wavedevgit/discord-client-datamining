package cs;

import cs.j2;
import ds.i;
import java.lang.reflect.Field;
import java.lang.reflect.Modifier;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.PropertyDescriptor;
import kotlin.reflect.jvm.internal.impl.metadata.jvm.deserialization.JvmProtoBufUtil;
import kotlin.reflect.jvm.internal.impl.resolve.DescriptorUtils;
import kotlin.reflect.jvm.internal.impl.serialization.deserialization.descriptors.DeserializedPropertyDescriptor;
import kotlin.reflect.jvm.internal.impl.types.TypeUtils;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class o2 {
    /* JADX WARN: Removed duplicated region for block: B:112:0x004c  */
    /* JADX WARN: Removed duplicated region for block: B:113:0x0071  */
    /* JADX WARN: Removed duplicated region for block: B:115:0x0074  */
    /* JADX WARN: Removed duplicated region for block: B:134:0x0119  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final ds.h b(cs.j2.a r7, boolean r8) {
        /*
            Method dump skipped, instructions count: 587
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: cs.o2.b(cs.j2$a, boolean):ds.h");
    }

    private static final ds.i c(j2.a aVar, boolean z10, Field field) {
        if (!g(aVar.J().D()) && Modifier.isStatic(field.getModifiers())) {
            if (d(aVar)) {
                if (z10) {
                    if (aVar.G()) {
                        return new i.f.b(field);
                    }
                    return new i.f.d(field);
                } else if (aVar.G()) {
                    return new i.g.b(field, e(aVar));
                } else {
                    return new i.g.d(field, e(aVar));
                }
            } else if (z10) {
                return new i.f.e(field);
            } else {
                return new i.g.e(field, e(aVar));
            }
        } else if (z10) {
            if (aVar.G()) {
                return new i.f.a(field, f(aVar));
            }
            return new i.f.c(field);
        } else if (aVar.G()) {
            return new i.g.a(field, e(aVar), f(aVar));
        } else {
            return new i.g.c(field, e(aVar));
        }
    }

    private static final boolean d(j2.a aVar) {
        return aVar.J().D().getAnnotations().hasAnnotation(j3.j());
    }

    private static final boolean e(j2.a aVar) {
        return !TypeUtils.isNullableType(aVar.J().D().getType());
    }

    public static final Object f(j2.a aVar) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        return aVar.J().N();
    }

    private static final boolean g(PropertyDescriptor propertyDescriptor) {
        DeclarationDescriptor containingDeclaration = propertyDescriptor.getContainingDeclaration();
        Intrinsics.checkNotNullExpressionValue(containingDeclaration, "getContainingDeclaration(...)");
        if (!DescriptorUtils.isCompanionObject(containingDeclaration)) {
            return false;
        }
        DeclarationDescriptor containingDeclaration2 = containingDeclaration.getContainingDeclaration();
        if (!DescriptorUtils.isInterface(containingDeclaration2) && !DescriptorUtils.isAnnotationClass(containingDeclaration2)) {
            return true;
        }
        if (!(propertyDescriptor instanceof DeserializedPropertyDescriptor) || !JvmProtoBufUtil.isMovedFromInterfaceCompanion(((DeserializedPropertyDescriptor) propertyDescriptor).getProto())) {
            return false;
        }
        return true;
    }
}
