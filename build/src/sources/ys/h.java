package ys;

import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Reflection;
import kotlinx.serialization.DeserializationStrategy;
import kotlinx.serialization.encoding.Encoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class h {
    public static final DeserializationStrategy a(bt.b bVar, kotlinx.serialization.encoding.c decoder, String str) {
        Intrinsics.checkNotNullParameter(bVar, "<this>");
        Intrinsics.checkNotNullParameter(decoder, "decoder");
        DeserializationStrategy c10 = bVar.c(decoder, str);
        if (c10 != null) {
            return c10;
        }
        bt.c.a(str, bVar.e());
        throw new jr.h();
    }

    public static final o b(bt.b bVar, Encoder encoder, Object value) {
        Intrinsics.checkNotNullParameter(bVar, "<this>");
        Intrinsics.checkNotNullParameter(encoder, "encoder");
        Intrinsics.checkNotNullParameter(value, "value");
        o d10 = bVar.d(encoder, value);
        if (d10 != null) {
            return d10;
        }
        bt.c.b(Reflection.getOrCreateKotlinClass(value.getClass()), bVar.e());
        throw new jr.h();
    }
}
