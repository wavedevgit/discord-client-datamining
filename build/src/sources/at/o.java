package at;

import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.Encoder;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface o {
    SerialDescriptor getDescriptor();

    void serialize(Encoder encoder, Object obj);
}
