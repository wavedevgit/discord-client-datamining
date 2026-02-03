package com.discord.chat.reactevents;

import at.m;
import com.discord.primitives.MessageId;
import com.discord.primitives.MessageId$$serializer;
import com.discord.reactevents.ReactEvent;
import com.facebook.react.bridge.WritableMap;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@m
@Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 #2\u00020\u0001:\u0002\"#B\u0013\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0004\u0010\u0005B%\b\u0010\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t¢\u0006\u0004\b\u0004\u0010\nJ\u0012\u0010\u000e\u001a\u0004\u0018\u00010\u0003HÆ\u0003¢\u0006\u0004\b\u000f\u0010\fJ\u001c\u0010\u0010\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003HÆ\u0001¢\u0006\u0004\b\u0011\u0010\u0012J\u0013\u0010\u0013\u001a\u00020\u00142\b\u0010\u0015\u001a\u0004\u0018\u00010\u0016HÖ\u0003J\t\u0010\u0017\u001a\u00020\u0007HÖ\u0001J\t\u0010\u0018\u001a\u00020\u0019HÖ\u0001J%\u0010\u001a\u001a\u00020\u001b2\u0006\u0010\u001c\u001a\u00020\u00002\u0006\u0010\u001d\u001a\u00020\u001e2\u0006\u0010\u001f\u001a\u00020 H\u0001¢\u0006\u0002\b!R\u0015\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\n\n\u0002\u0010\r\u001a\u0004\b\u000b\u0010\f¨\u0006$"}, d2 = {"Lcom/discord/chat/reactevents/TapPreviewSharedClientThemeData;", "Lcom/discord/reactevents/ReactEvent;", "messageId", "Lcom/discord/primitives/MessageId;", "<init>", "(Ljava/lang/String;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getMessageId-N_6c4I0", "()Ljava/lang/String;", "Ljava/lang/String;", "component1", "component1-N_6c4I0", "copy", "copy-tEk1XsE", "(Ljava/lang/String;)Lcom/discord/chat/reactevents/TapPreviewSharedClientThemeData;", "equals", "", "other", "", "hashCode", "toString", "", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class TapPreviewSharedClientThemeData implements ReactEvent {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final String messageId;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/reactevents/TapPreviewSharedClientThemeData$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/reactevents/TapPreviewSharedClientThemeData;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return TapPreviewSharedClientThemeData$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ TapPreviewSharedClientThemeData(int i10, String str, SerializationConstructorMarker serializationConstructorMarker, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, str, serializationConstructorMarker);
    }

    /* renamed from: copy-tEk1XsE$default  reason: not valid java name */
    public static /* synthetic */ TapPreviewSharedClientThemeData m824copytEk1XsE$default(TapPreviewSharedClientThemeData tapPreviewSharedClientThemeData, String str, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = tapPreviewSharedClientThemeData.messageId;
        }
        return tapPreviewSharedClientThemeData.m826copytEk1XsE(str);
    }

    public static final /* synthetic */ void write$Self$chat_release(TapPreviewSharedClientThemeData tapPreviewSharedClientThemeData, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        MessageId messageId;
        if (compositeEncoder.z(serialDescriptor, 0) || tapPreviewSharedClientThemeData.messageId != null) {
            MessageId$$serializer messageId$$serializer = MessageId$$serializer.INSTANCE;
            String str = tapPreviewSharedClientThemeData.messageId;
            if (str != null) {
                messageId = MessageId.m1085boximpl(str);
            } else {
                messageId = null;
            }
            compositeEncoder.s(serialDescriptor, 0, messageId$$serializer, messageId);
        }
    }

    /* renamed from: component1-N_6c4I0  reason: not valid java name */
    public final String m825component1N_6c4I0() {
        return this.messageId;
    }

    @NotNull
    /* renamed from: copy-tEk1XsE  reason: not valid java name */
    public final TapPreviewSharedClientThemeData m826copytEk1XsE(String str) {
        return new TapPreviewSharedClientThemeData(str, null);
    }

    public boolean equals(Object obj) {
        boolean m1089equalsimpl0;
        if (this == obj) {
            return true;
        }
        if (obj instanceof TapPreviewSharedClientThemeData) {
            String str = this.messageId;
            String str2 = ((TapPreviewSharedClientThemeData) obj).messageId;
            if (str == null) {
                if (str2 == null) {
                    m1089equalsimpl0 = true;
                }
                m1089equalsimpl0 = false;
            } else {
                if (str2 != null) {
                    m1089equalsimpl0 = MessageId.m1089equalsimpl0(str, str2);
                }
                m1089equalsimpl0 = false;
            }
            return m1089equalsimpl0;
        }
        return false;
    }

    /* renamed from: getMessageId-N_6c4I0  reason: not valid java name */
    public final String m827getMessageIdN_6c4I0() {
        return this.messageId;
    }

    public int hashCode() {
        String str = this.messageId;
        if (str == null) {
            return 0;
        }
        return MessageId.m1090hashCodeimpl(str);
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        return ReactEvent.DefaultImpls.serialize(this);
    }

    @NotNull
    public String toString() {
        String str = this.messageId;
        String m1092toStringimpl = str == null ? "null" : MessageId.m1092toStringimpl(str);
        return "TapPreviewSharedClientThemeData(messageId=" + m1092toStringimpl + ")";
    }

    public /* synthetic */ TapPreviewSharedClientThemeData(String str, DefaultConstructorMarker defaultConstructorMarker) {
        this(str);
    }

    private /* synthetic */ TapPreviewSharedClientThemeData(int i10, String str, SerializationConstructorMarker serializationConstructorMarker) {
        if ((i10 & 1) == 0) {
            this.messageId = null;
        } else {
            this.messageId = str;
        }
    }

    private TapPreviewSharedClientThemeData(String str) {
        this.messageId = str;
    }

    public /* synthetic */ TapPreviewSharedClientThemeData(String str, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : str, null);
    }
}
