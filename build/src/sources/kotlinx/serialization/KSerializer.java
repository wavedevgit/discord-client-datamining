package kotlinx.serialization;

import kotlinx.serialization.descriptors.SerialDescriptor;
import ys.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface KSerializer extends o, DeserializationStrategy {
    @Override // ys.o, kotlinx.serialization.DeserializationStrategy
    SerialDescriptor getDescriptor();
}
