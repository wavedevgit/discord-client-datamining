package kotlinx.serialization;

import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Decoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface DeserializationStrategy {
    Object deserialize(Decoder decoder);

    SerialDescriptor getDescriptor();
}
