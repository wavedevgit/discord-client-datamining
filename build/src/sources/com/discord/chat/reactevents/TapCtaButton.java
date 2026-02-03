package com.discord.chat.reactevents;

import at.m;
import com.discord.reactevents.ReactEvent;
import com.facebook.react.bridge.WritableMap;
import dt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@m
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 $2\u00020\u0001:\u0002#$B\u001f\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003¢\u0006\u0004\b\u0006\u0010\u0007B9\b\u0010\u0012\u0006\u0010\b\u001a\u00020\t\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b¢\u0006\u0004\b\u0006\u0010\fJ\t\u0010\u0011\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0012\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0013\u001a\u00020\u0003HÆ\u0003J'\u0010\u0014\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\u0015\u001a\u00020\u00162\b\u0010\u0017\u001a\u0004\u0018\u00010\u0018HÖ\u0003J\t\u0010\u0019\u001a\u00020\tHÖ\u0001J\t\u0010\u001a\u001a\u00020\u0003HÖ\u0001J%\u0010\u001b\u001a\u00020\u001c2\u0006\u0010\u001d\u001a\u00020\u00002\u0006\u0010\u001e\u001a\u00020\u001f2\u0006\u0010 \u001a\u00020!H\u0001¢\u0006\u0002\b\"R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000eR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u000eR\u0011\u0010\u0005\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u000e¨\u0006%"}, d2 = {"Lcom/discord/chat/reactevents/TapCtaButton;", "Lcom/discord/reactevents/ReactEvent;", "channelId", "", "messageId", "callback", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/String;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getChannelId", "()Ljava/lang/String;", "getMessageId", "getCallback", "component1", "component2", "component3", "copy", "equals", "", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class TapCtaButton implements ReactEvent {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final String callback;
    @NotNull
    private final String channelId;
    @NotNull
    private final String messageId;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/reactevents/TapCtaButton$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/reactevents/TapCtaButton;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return TapCtaButton$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ TapCtaButton(int i10, String str, String str2, String str3, SerializationConstructorMarker serializationConstructorMarker) {
        if (7 != (i10 & 7)) {
            v1.b(i10, 7, TapCtaButton$$serializer.INSTANCE.getDescriptor());
        }
        this.channelId = str;
        this.messageId = str2;
        this.callback = str3;
    }

    public static /* synthetic */ TapCtaButton copy$default(TapCtaButton tapCtaButton, String str, String str2, String str3, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = tapCtaButton.channelId;
        }
        if ((i10 & 2) != 0) {
            str2 = tapCtaButton.messageId;
        }
        if ((i10 & 4) != 0) {
            str3 = tapCtaButton.callback;
        }
        return tapCtaButton.copy(str, str2, str3);
    }

    public static final /* synthetic */ void write$Self$chat_release(TapCtaButton tapCtaButton, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.y(serialDescriptor, 0, tapCtaButton.channelId);
        compositeEncoder.y(serialDescriptor, 1, tapCtaButton.messageId);
        compositeEncoder.y(serialDescriptor, 2, tapCtaButton.callback);
    }

    @NotNull
    public final String component1() {
        return this.channelId;
    }

    @NotNull
    public final String component2() {
        return this.messageId;
    }

    @NotNull
    public final String component3() {
        return this.callback;
    }

    @NotNull
    public final TapCtaButton copy(@NotNull String channelId, @NotNull String messageId, @NotNull String callback) {
        Intrinsics.checkNotNullParameter(channelId, "channelId");
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(callback, "callback");
        return new TapCtaButton(channelId, messageId, callback);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof TapCtaButton) {
            TapCtaButton tapCtaButton = (TapCtaButton) obj;
            return Intrinsics.areEqual(this.channelId, tapCtaButton.channelId) && Intrinsics.areEqual(this.messageId, tapCtaButton.messageId) && Intrinsics.areEqual(this.callback, tapCtaButton.callback);
        }
        return false;
    }

    @NotNull
    public final String getCallback() {
        return this.callback;
    }

    @NotNull
    public final String getChannelId() {
        return this.channelId;
    }

    @NotNull
    public final String getMessageId() {
        return this.messageId;
    }

    public int hashCode() {
        return (((this.channelId.hashCode() * 31) + this.messageId.hashCode()) * 31) + this.callback.hashCode();
    }

    @Override // com.discord.reactevents.ReactEvent
    @NotNull
    public WritableMap serialize() {
        return ReactEvent.DefaultImpls.serialize(this);
    }

    @NotNull
    public String toString() {
        String str = this.channelId;
        String str2 = this.messageId;
        String str3 = this.callback;
        return "TapCtaButton(channelId=" + str + ", messageId=" + str2 + ", callback=" + str3 + ")";
    }

    public TapCtaButton(@NotNull String channelId, @NotNull String messageId, @NotNull String callback) {
        Intrinsics.checkNotNullParameter(channelId, "channelId");
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(callback, "callback");
        this.channelId = channelId;
        this.messageId = messageId;
        this.callback = callback;
    }
}
