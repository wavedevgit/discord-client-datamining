package kotlinx.serialization.encoding;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.DeserializationStrategy;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface Decoder {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public static Object a(Decoder decoder, DeserializationStrategy deserializer) {
            Intrinsics.checkNotNullParameter(deserializer, "deserializer");
            return deserializer.deserialize(decoder);
        }
    }

    boolean D();

    Object G(DeserializationStrategy deserializationStrategy);

    byte H();

    gt.b a();

    c b(SerialDescriptor serialDescriptor);

    int e(SerialDescriptor serialDescriptor);

    int h();

    Void j();

    long l();

    Decoder q(SerialDescriptor serialDescriptor);

    short s();

    float t();

    double v();

    boolean w();

    char x();

    String z();
}
