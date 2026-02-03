package kotlin.reflect.jvm.internal.impl.protobuf;

import java.io.IOException;
import java.io.InputStream;
import kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite;
import kotlin.reflect.jvm.internal.impl.protobuf.MessageLite;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class AbstractParser<MessageType extends MessageLite> implements Parser<MessageType> {

    /* renamed from: a  reason: collision with root package name */
    private static final ExtensionRegistryLite f34357a = ExtensionRegistryLite.getEmptyRegistry();

    private MessageLite a(MessageLite messageLite) {
        if (messageLite != null && !messageLite.isInitialized()) {
            throw b(messageLite).asInvalidProtocolBufferException().setUnfinishedMessage(messageLite);
        }
        return messageLite;
    }

    private UninitializedMessageException b(MessageLite messageLite) {
        if (messageLite instanceof AbstractMessageLite) {
            return ((AbstractMessageLite) messageLite).a();
        }
        return new UninitializedMessageException(messageLite);
    }

    public MessageType parsePartialDelimitedFrom(InputStream inputStream, ExtensionRegistryLite extensionRegistryLite) {
        try {
            int read = inputStream.read();
            if (read == -1) {
                return null;
            }
            return parsePartialFrom(new AbstractMessageLite.Builder.a(inputStream, CodedInputStream.readRawVarint32(read, inputStream)), extensionRegistryLite);
        } catch (IOException e10) {
            throw new InvalidProtocolBufferException(e10.getMessage());
        }
    }

    public MessageType parsePartialFrom(ByteString byteString, ExtensionRegistryLite extensionRegistryLite) {
        CodedInputStream newCodedInput = byteString.newCodedInput();
        MessageType messagetype = (MessageType) parsePartialFrom(newCodedInput, extensionRegistryLite);
        try {
            newCodedInput.checkLastTagWas(0);
            return messagetype;
        } catch (InvalidProtocolBufferException e10) {
            throw e10.setUnfinishedMessage(messagetype);
        }
    }

    @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
    public MessageType parseDelimitedFrom(InputStream inputStream, ExtensionRegistryLite extensionRegistryLite) {
        return (MessageType) a(parsePartialDelimitedFrom(inputStream, extensionRegistryLite));
    }

    @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
    public MessageType parseFrom(ByteString byteString, ExtensionRegistryLite extensionRegistryLite) {
        return (MessageType) a(parsePartialFrom(byteString, extensionRegistryLite));
    }

    @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
    public MessageType parseFrom(InputStream inputStream, ExtensionRegistryLite extensionRegistryLite) {
        return (MessageType) a(parsePartialFrom(inputStream, extensionRegistryLite));
    }

    public MessageType parsePartialFrom(InputStream inputStream, ExtensionRegistryLite extensionRegistryLite) {
        CodedInputStream newInstance = CodedInputStream.newInstance(inputStream);
        MessageType messagetype = (MessageType) parsePartialFrom(newInstance, extensionRegistryLite);
        try {
            newInstance.checkLastTagWas(0);
            return messagetype;
        } catch (InvalidProtocolBufferException e10) {
            throw e10.setUnfinishedMessage(messagetype);
        }
    }
}
