package kotlinx.serialization;

import kotlinx.serialization.descriptors.SerialDescriptor;
import qt.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface KSerializer extends o, DeserializationStrategy {
    @Override // qt.o, kotlinx.serialization.DeserializationStrategy
    SerialDescriptor getDescriptor();
}
