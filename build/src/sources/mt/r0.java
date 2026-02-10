package mt;

import java.lang.annotation.Annotation;
import jt.k;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.SealedClassSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.json.Json;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class r0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f37591a;

        static {
            int[] iArr = new int[lt.a.values().length];
            try {
                iArr[lt.a.f36618d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[lt.a.f36620i.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[lt.a.f36619e.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f37591a = iArr;
        }
    }

    public static final /* synthetic */ void a(gt.o oVar, gt.o oVar2, String str) {
        d(oVar, oVar2, str);
    }

    public static final void b(jt.k kind) {
        Intrinsics.checkNotNullParameter(kind, "kind");
        if (!(kind instanceof k.b)) {
            if (!(kind instanceof jt.e)) {
                if (!(kind instanceof jt.d)) {
                    return;
                }
                throw new IllegalStateException("Actual serializer for polymorphic cannot be polymorphic itself");
            }
            throw new IllegalStateException("Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead");
        }
        throw new IllegalStateException("Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead");
    }

    public static final String c(SerialDescriptor serialDescriptor, Json json) {
        Intrinsics.checkNotNullParameter(serialDescriptor, "<this>");
        Intrinsics.checkNotNullParameter(json, "json");
        for (Annotation annotation : serialDescriptor.getAnnotations()) {
            if (annotation instanceof lt.c) {
                return ((lt.c) annotation).discriminator();
            }
        }
        return json.e().e();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void d(gt.o oVar, gt.o oVar2, String str) {
        if (!(oVar instanceof SealedClassSerializer) || !kt.q0.a(oVar2.getDescriptor()).contains(str)) {
            return;
        }
        String h10 = ((SealedClassSerializer) oVar).getDescriptor().h();
        String h11 = oVar2.getDescriptor().h();
        throw new IllegalStateException(("Sealed class '" + h11 + "' cannot be serialized as base class '" + h10 + "' because it has property name that conflicts with JSON class discriminator '" + str + "'. You can either change class discriminator in JsonConfiguration, rename property with @SerialName annotation or fall back to array polymorphism").toString());
    }
}
