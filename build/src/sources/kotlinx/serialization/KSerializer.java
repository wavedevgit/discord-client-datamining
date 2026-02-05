package kotlinx.serialization;

import dt.o;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface KSerializer extends o, DeserializationStrategy {
    @Override // dt.o, kotlinx.serialization.DeserializationStrategy
    SerialDescriptor getDescriptor();
}
