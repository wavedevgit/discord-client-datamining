package kotlinx.serialization;

import gt.o;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface KSerializer extends o, DeserializationStrategy {
    @Override // gt.o, kotlinx.serialization.DeserializationStrategy
    SerialDescriptor getDescriptor();
}
