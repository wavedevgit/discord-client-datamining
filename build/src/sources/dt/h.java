package dt;

import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlinx.serialization.DeserializationStrategy;
import kotlinx.serialization.encoding.Encoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class h {
    public static final o a(gt.b bVar, Encoder encoder, Object value) {
        Intrinsics.checkNotNullParameter(bVar, "<this>");
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        o c10 = bVar.c(encoder, value);
        if (c10 != null) {
            return c10;
        }
        gt.c.b(Reflection.getOrCreateKotlinClass(value.getClass()), bVar.e());
        throw new or.h();
    }

    public static final DeserializationStrategy b(gt.b bVar, kotlinx.serialization.encoding.c decoder, String str) {
        Intrinsics.checkNotNullParameter(bVar, "<this>");
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        DeserializationStrategy d10 = bVar.d(decoder, str);
        if (d10 != null) {
            return d10;
        }
        gt.c.a(str, bVar.e());
        throw new or.h();
    }
}
