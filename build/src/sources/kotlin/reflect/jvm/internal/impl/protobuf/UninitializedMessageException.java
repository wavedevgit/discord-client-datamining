package kotlin.reflect.jvm.internal.impl.protobuf;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class UninitializedMessageException extends RuntimeException {

    /* renamed from: d  reason: collision with root package name */
    private final List f35255d;

    public UninitializedMessageException(MessageLite messageLite) {
        super("Message was missing required fields.  (Lite runtime could not determine which fields were missing).");
        this.f35255d = null;
    }

    public InvalidProtocolBufferException asInvalidProtocolBufferException() {
        return new InvalidProtocolBufferException(getMessage());
    }
}
