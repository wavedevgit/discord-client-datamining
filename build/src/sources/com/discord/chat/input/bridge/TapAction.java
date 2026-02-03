package com.discord.chat.input.bridge;

import at.m;
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
@Metadata(d1 = {"\u0000>\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 #2\u00020\u0001:\u0002\"#B\u001f\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003¢\u0006\u0004\b\u0006\u0010\u0007B9\b\u0010\u0012\u0006\u0010\b\u001a\u00020\t\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b¢\u0006\u0004\b\u0006\u0010\fJ\t\u0010\u0011\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0012\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0013\u001a\u00020\u0003HÆ\u0003J'\u0010\u0014\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\u0015\u001a\u00020\u00162\b\u0010\u0017\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0018\u001a\u00020\tHÖ\u0001J\t\u0010\u0019\u001a\u00020\u0003HÖ\u0001J%\u0010\u001a\u001a\u00020\u001b2\u0006\u0010\u001c\u001a\u00020\u00002\u0006\u0010\u001d\u001a\u00020\u001e2\u0006\u0010\u001f\u001a\u00020 H\u0001¢\u0006\u0002\b!R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000eR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u000eR\u0011\u0010\u0005\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u000e¨\u0006$"}, d2 = {"Lcom/discord/chat/input/bridge/TapAction;", "", "action", "", "channelId", "optionName", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/String;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getAction", "()Ljava/lang/String;", "getChannelId", "getOptionName", "component1", "component2", "component3", "copy", "equals", "", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_input_release", "$serializer", "Companion", "chat_input_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class TapAction {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final String action;
    @NotNull
    private final String channelId;
    @NotNull
    private final String optionName;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/input/bridge/TapAction$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/input/bridge/TapAction;", "chat_input_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return TapAction$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ TapAction(int i10, String str, String str2, String str3, SerializationConstructorMarker serializationConstructorMarker) {
        if (7 != (i10 & 7)) {
            v1.b(i10, 7, TapAction$$serializer.INSTANCE.getDescriptor());
        }
        this.action = str;
        this.channelId = str2;
        this.optionName = str3;
    }

    public static /* synthetic */ TapAction copy$default(TapAction tapAction, String str, String str2, String str3, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = tapAction.action;
        }
        if ((i10 & 2) != 0) {
            str2 = tapAction.channelId;
        }
        if ((i10 & 4) != 0) {
            str3 = tapAction.optionName;
        }
        return tapAction.copy(str, str2, str3);
    }

    public static final /* synthetic */ void write$Self$chat_input_release(TapAction tapAction, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.y(serialDescriptor, 0, tapAction.action);
        compositeEncoder.y(serialDescriptor, 1, tapAction.channelId);
        compositeEncoder.y(serialDescriptor, 2, tapAction.optionName);
    }

    @NotNull
    public final String component1() {
        return this.action;
    }

    @NotNull
    public final String component2() {
        return this.channelId;
    }

    @NotNull
    public final String component3() {
        return this.optionName;
    }

    @NotNull
    public final TapAction copy(@NotNull String action, @NotNull String channelId, @NotNull String optionName) {
        Intrinsics.checkNotNullParameter(action, "action");
        Intrinsics.checkNotNullParameter(channelId, "channelId");
        Intrinsics.checkNotNullParameter(optionName, "optionName");
        return new TapAction(action, channelId, optionName);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof TapAction) {
            TapAction tapAction = (TapAction) obj;
            return Intrinsics.areEqual(this.action, tapAction.action) && Intrinsics.areEqual(this.channelId, tapAction.channelId) && Intrinsics.areEqual(this.optionName, tapAction.optionName);
        }
        return false;
    }

    @NotNull
    public final String getAction() {
        return this.action;
    }

    @NotNull
    public final String getChannelId() {
        return this.channelId;
    }

    @NotNull
    public final String getOptionName() {
        return this.optionName;
    }

    public int hashCode() {
        return (((this.action.hashCode() * 31) + this.channelId.hashCode()) * 31) + this.optionName.hashCode();
    }

    @NotNull
    public String toString() {
        String str = this.action;
        String str2 = this.channelId;
        String str3 = this.optionName;
        return "TapAction(action=" + str + ", channelId=" + str2 + ", optionName=" + str3 + ")";
    }

    public TapAction(@NotNull String action, @NotNull String channelId, @NotNull String optionName) {
        Intrinsics.checkNotNullParameter(action, "action");
        Intrinsics.checkNotNullParameter(channelId, "channelId");
        Intrinsics.checkNotNullParameter(optionName, "optionName");
        this.action = action;
        this.channelId = channelId;
        this.optionName = optionName;
    }
}
