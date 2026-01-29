package kotlin.reflect.jvm.internal.impl.protobuf;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface LazyStringList extends ProtocolStringList {
    void add(ByteString byteString);

    ByteString getByteString(int i10);

    List<?> getUnderlyingElements();

    LazyStringList getUnmodifiableView();
}
