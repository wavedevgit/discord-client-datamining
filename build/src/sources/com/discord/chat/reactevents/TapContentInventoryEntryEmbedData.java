package com.discord.chat.reactevents;

import bt.v1;
import com.discord.reactevents.ReactEvent;
import com.facebook.react.bridge.WritableMap;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import ys.m;
@m
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0006\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\f\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 '2\u00020\u0001:\u0002&'B'\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0003¢\u0006\u0004\b\u0007\u0010\bBC\b\u0010\u0012\u0006\u0010\t\u001a\u00020\n\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\f¢\u0006\u0004\b\u0007\u0010\rJ\t\u0010\u0013\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0014\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0015\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0016\u001a\u00020\u0003HÆ\u0003J1\u0010\u0017\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00032\b\b\u0002\u0010\u0006\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\u0018\u001a\u00020\u00192\b\u0010\u001a\u001a\u0004\u0018\u00010\u001bHÖ\u0003J\t\u0010\u001c\u001a\u00020\nHÖ\u0001J\t\u0010\u001d\u001a\u00020\u0003HÖ\u0001J%\u0010\u001e\u001a\u00020\u001f2\u0006\u0010 \u001a\u00020\u00002\u0006\u0010!\u001a\u00020\"2\u0006\u0010#\u001a\u00020$H\u0001¢\u0006\u0002\b%R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000fR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u000fR\u0011\u0010\u0005\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u000fR\u0011\u0010\u0006\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u000f¨\u0006("}, d2 = {"Lcom/discord/chat/reactevents/TapContentInventoryEntryEmbedData;", "Lcom/discord/reactevents/ReactEvent;", "messageId", "", "authorId", "contentId", "tappedElement", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getMessageId", "()Ljava/lang/String;", "getAuthorId", "getContentId", "getTappedElement", "component1", "component2", "component3", "component4", "copy", "equals", "", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class TapContentInventoryEntryEmbedData implements ReactEvent {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final String authorId;
    @NotNull
    private final String contentId;
    @NotNull
    private final String messageId;
    @NotNull
    private final String tappedElement;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/reactevents/TapContentInventoryEntryEmbedData$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/reactevents/TapContentInventoryEntryEmbedData;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return TapContentInventoryEntryEmbedData$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ TapContentInventoryEntryEmbedData(int i10, String str, String str2, String str3, String str4, SerializationConstructorMarker serializationConstructorMarker) {
        if (15 != (i10 & 15)) {
            v1.b(i10, 15, TapContentInventoryEntryEmbedData$$serializer.INSTANCE.getDescriptor());
        }
        this.messageId = str;
        this.authorId = str2;
        this.contentId = str3;
        this.tappedElement = str4;
    }

    public static /* synthetic */ TapContentInventoryEntryEmbedData copy$default(TapContentInventoryEntryEmbedData tapContentInventoryEntryEmbedData, String str, String str2, String str3, String str4, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = tapContentInventoryEntryEmbedData.messageId;
        }
        if ((i10 & 2) != 0) {
            str2 = tapContentInventoryEntryEmbedData.authorId;
        }
        if ((i10 & 4) != 0) {
            str3 = tapContentInventoryEntryEmbedData.contentId;
        }
        if ((i10 & 8) != 0) {
            str4 = tapContentInventoryEntryEmbedData.tappedElement;
        }
        return tapContentInventoryEntryEmbedData.copy(str, str2, str3, str4);
    }

    public static final /* synthetic */ void write$Self$chat_release(TapContentInventoryEntryEmbedData tapContentInventoryEntryEmbedData, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.x(serialDescriptor, 0, tapContentInventoryEntryEmbedData.messageId);
        compositeEncoder.x(serialDescriptor, 1, tapContentInventoryEntryEmbedData.authorId);
        compositeEncoder.x(serialDescriptor, 2, tapContentInventoryEntryEmbedData.contentId);
        compositeEncoder.x(serialDescriptor, 3, tapContentInventoryEntryEmbedData.tappedElement);
    }

    @NotNull
    public final String component1() {
        return this.messageId;
    }

    @NotNull
    public final String component2() {
        return this.authorId;
    }

    @NotNull
    public final String component3() {
        return this.contentId;
    }

    @NotNull
    public final String component4() {
        return this.tappedElement;
    }

    @NotNull
    public final TapContentInventoryEntryEmbedData copy(@NotNull String messageId, @NotNull String authorId, @NotNull String contentId, @NotNull String tappedElement) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(authorId, "authorId");
        Intrinsics.checkNotNullParameter(contentId, "contentId");
        Intrinsics.checkNotNullParameter(tappedElement, "tappedElement");
        return new TapContentInventoryEntryEmbedData(messageId, authorId, contentId, tappedElement);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof TapContentInventoryEntryEmbedData) {
            TapContentInventoryEntryEmbedData tapContentInventoryEntryEmbedData = (TapContentInventoryEntryEmbedData) obj;
            return Intrinsics.areEqual(this.messageId, tapContentInventoryEntryEmbedData.messageId) && Intrinsics.areEqual(this.authorId, tapContentInventoryEntryEmbedData.authorId) && Intrinsics.areEqual(this.contentId, tapContentInventoryEntryEmbedData.contentId) && Intrinsics.areEqual(this.tappedElement, tapContentInventoryEntryEmbedData.tappedElement);
        }
        return false;
    }

    @NotNull
    public final String getAuthorId() {
        return this.authorId;
    }

    @NotNull
    public final String getContentId() {
        return this.contentId;
    }

    @NotNull
    public final String getMessageId() {
        return this.messageId;
    }

    @NotNull
    public final String getTappedElement() {
        return this.tappedElement;
    }

    public int hashCode() {
        return (((((this.messageId.hashCode() * 31) + this.authorId.hashCode()) * 31) + this.contentId.hashCode()) * 31) + this.tappedElement.hashCode();
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        return ReactEvent.DefaultImpls.serialize(this);
    }

    @NotNull
    public String toString() {
        String str = this.messageId;
        String str2 = this.authorId;
        String str3 = this.contentId;
        String str4 = this.tappedElement;
        return "TapContentInventoryEntryEmbedData(messageId=" + str + ", authorId=" + str2 + ", contentId=" + str3 + ", tappedElement=" + str4 + ")";
    }

    public TapContentInventoryEntryEmbedData(@NotNull String messageId, @NotNull String authorId, @NotNull String contentId, @NotNull String tappedElement) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(authorId, "authorId");
        Intrinsics.checkNotNullParameter(contentId, "contentId");
        Intrinsics.checkNotNullParameter(tappedElement, "tappedElement");
        this.messageId = messageId;
        this.authorId = authorId;
        this.contentId = contentId;
        this.tappedElement = tappedElement;
    }
}
