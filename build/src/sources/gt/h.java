package gt;

import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlinx.serialization.DeserializationStrategy;
import kotlinx.serialization.encoding.Encoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class h {
    public static final o a(kt.b bVar, Encoder encoder, Object value) {
        Intrinsics.checkNotNullParameter(bVar, "<this>");
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        o c10 = bVar.c(encoder, value);
        if (c10 != null) {
            return c10;
        }
        kt.c.b(Reflection.getOrCreateKotlinClass(value.getClass()), bVar.e());
        throw new rr.h();
    }

    public static final DeserializationStrategy b(kt.b bVar, kotlinx.serialization.encoding.c decoder, String str) {
        Intrinsics.checkNotNullParameter(bVar, "<this>");
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        DeserializationStrategy d10 = bVar.d(decoder, str);
        if (d10 != null) {
            return d10;
        }
        kt.c.a(str, bVar.e());
        throw new rr.h();
    }
}
