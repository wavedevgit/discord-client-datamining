package com.discord.chat.input.bridge;

import dt.m;
import gt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0018\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 42\u00020\u0001:\u000234BK\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\b\u0002\u0010\b\u001a\u00020\t\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u000b\u0012\b\b\u0002\u0010\f\u001a\u00020\t¢\u0006\u0004\b\r\u0010\u000eBW\b\u0010\u0012\u0006\u0010\u000f\u001a\u00020\u0003\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\u0006\u0010\b\u001a\u00020\t\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u000b\u0012\u0006\u0010\f\u001a\u00020\t\u0012\b\u0010\u0010\u001a\u0004\u0018\u00010\u0011¢\u0006\u0004\b\r\u0010\u0012J\t\u0010\u001e\u001a\u00020\u0003HÆ\u0003J\t\u0010\u001f\u001a\u00020\u0003HÆ\u0003J\t\u0010 \u001a\u00020\u0003HÆ\u0003J\u000b\u0010!\u001a\u0004\u0018\u00010\u0007HÆ\u0003J\t\u0010\"\u001a\u00020\tHÆ\u0003J\u000b\u0010#\u001a\u0004\u0018\u00010\u000bHÆ\u0003J\t\u0010$\u001a\u00020\tHÆ\u0003JS\u0010%\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00032\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00072\b\b\u0002\u0010\b\u001a\u00020\t2\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u000b2\b\b\u0002\u0010\f\u001a\u00020\tHÆ\u0001J\u0013\u0010&\u001a\u00020\t2\b\u0010'\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010(\u001a\u00020\u0003HÖ\u0001J\t\u0010)\u001a\u00020*HÖ\u0001J%\u0010+\u001a\u00020,2\u0006\u0010-\u001a\u00020\u00002\u0006\u0010.\u001a\u00020/2\u0006\u00100\u001a\u000201H\u0001¢\u0006\u0002\b2R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0014R\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0014R\u0011\u0010\u0005\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0014R\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0017\u0010\u0018R\u0011\u0010\b\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b\u0019\u0010\u001aR\u0013\u0010\n\u001a\u0004\u0018\u00010\u000b¢\u0006\b\n\u0000\u001a\u0004\b\u001b\u0010\u001cR\u0011\u0010\f\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b\u001d\u0010\u001a¨\u00065"}, d2 = {"Lcom/discord/chat/input/bridge/ChatInputNode;", "", "type", "", "location", "length", "style", "Lcom/discord/chat/input/bridge/ChatInputNodeStyle;", "deleteNodeOnBackspace", "", "tapAction", "Lcom/discord/chat/input/bridge/TapAction;", "editDisabled", "<init>", "(IIILcom/discord/chat/input/bridge/ChatInputNodeStyle;ZLcom/discord/chat/input/bridge/TapAction;Z)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IIIILcom/discord/chat/input/bridge/ChatInputNodeStyle;ZLcom/discord/chat/input/bridge/TapAction;ZLkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getType", "()I", "getLocation", "getLength", "getStyle", "()Lcom/discord/chat/input/bridge/ChatInputNodeStyle;", "getDeleteNodeOnBackspace", "()Z", "getTapAction", "()Lcom/discord/chat/input/bridge/TapAction;", "getEditDisabled", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "copy", "equals", "other", "hashCode", "toString", "", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_input_release", "$serializer", "Companion", "chat_input_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ChatInputNode {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final boolean deleteNodeOnBackspace;
    private final boolean editDisabled;
    private final int length;
    private final int location;
    private final ChatInputNodeStyle style;
    private final TapAction tapAction;
    private final int type;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/input/bridge/ChatInputNode$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/input/bridge/ChatInputNode;", "chat_input_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return ChatInputNode$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ ChatInputNode(int i10, int i11, int i12, int i13, ChatInputNodeStyle chatInputNodeStyle, boolean z10, TapAction tapAction, boolean z11, SerializationConstructorMarker serializationConstructorMarker) {
        if (7 != (i10 & 7)) {
            v1.b(i10, 7, ChatInputNode$$serializer.INSTANCE.getDescriptor());
        }
        this.type = i11;
        this.location = i12;
        this.length = i13;
        if ((i10 & 8) == 0) {
            this.style = null;
        } else {
            this.style = chatInputNodeStyle;
        }
        if ((i10 & 16) == 0) {
            this.deleteNodeOnBackspace = false;
        } else {
            this.deleteNodeOnBackspace = z10;
        }
        if ((i10 & 32) == 0) {
            this.tapAction = null;
        } else {
            this.tapAction = tapAction;
        }
        if ((i10 & 64) == 0) {
            this.editDisabled = false;
        } else {
            this.editDisabled = z11;
        }
    }

    public static /* synthetic */ ChatInputNode copy$default(ChatInputNode chatInputNode, int i10, int i11, int i12, ChatInputNodeStyle chatInputNodeStyle, boolean z10, TapAction tapAction, boolean z11, int i13, Object obj) {
        if ((i13 & 1) != 0) {
            i10 = chatInputNode.type;
        }
        if ((i13 & 2) != 0) {
            i11 = chatInputNode.location;
        }
        if ((i13 & 4) != 0) {
            i12 = chatInputNode.length;
        }
        if ((i13 & 8) != 0) {
            chatInputNodeStyle = chatInputNode.style;
        }
        if ((i13 & 16) != 0) {
            z10 = chatInputNode.deleteNodeOnBackspace;
        }
        if ((i13 & 32) != 0) {
            tapAction = chatInputNode.tapAction;
        }
        if ((i13 & 64) != 0) {
            z11 = chatInputNode.editDisabled;
        }
        TapAction tapAction2 = tapAction;
        boolean z12 = z11;
        boolean z13 = z10;
        int i14 = i12;
        return chatInputNode.copy(i10, i11, i14, chatInputNodeStyle, z13, tapAction2, z12);
    }

    public static final /* synthetic */ void write$Self$chat_input_release(ChatInputNode chatInputNode, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.v(serialDescriptor, 0, chatInputNode.type);
        compositeEncoder.v(serialDescriptor, 1, chatInputNode.location);
        compositeEncoder.v(serialDescriptor, 2, chatInputNode.length);
        if (compositeEncoder.z(serialDescriptor, 3) || chatInputNode.style != null) {
            compositeEncoder.A(serialDescriptor, 3, ChatInputNodeStyle$$serializer.INSTANCE, chatInputNode.style);
        }
        if (compositeEncoder.z(serialDescriptor, 4) || chatInputNode.deleteNodeOnBackspace) {
            compositeEncoder.w(serialDescriptor, 4, chatInputNode.deleteNodeOnBackspace);
        }
        if (compositeEncoder.z(serialDescriptor, 5) || chatInputNode.tapAction != null) {
            compositeEncoder.A(serialDescriptor, 5, TapAction$$serializer.INSTANCE, chatInputNode.tapAction);
        }
        if (compositeEncoder.z(serialDescriptor, 6) || chatInputNode.editDisabled) {
            compositeEncoder.w(serialDescriptor, 6, chatInputNode.editDisabled);
        }
    }

    public final int component1() {
        return this.type;
    }

    public final int component2() {
        return this.location;
    }

    public final int component3() {
        return this.length;
    }

    public final ChatInputNodeStyle component4() {
        return this.style;
    }

    public final boolean component5() {
        return this.deleteNodeOnBackspace;
    }

    public final TapAction component6() {
        return this.tapAction;
    }

    public final boolean component7() {
        return this.editDisabled;
    }

    @NotNull
    public final ChatInputNode copy(int i10, int i11, int i12, ChatInputNodeStyle chatInputNodeStyle, boolean z10, TapAction tapAction, boolean z11) {
        return new ChatInputNode(i10, i11, i12, chatInputNodeStyle, z10, tapAction, z11);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ChatInputNode) {
            ChatInputNode chatInputNode = (ChatInputNode) obj;
            return this.type == chatInputNode.type && this.location == chatInputNode.location && this.length == chatInputNode.length && Intrinsics.areEqual(this.style, chatInputNode.style) && this.deleteNodeOnBackspace == chatInputNode.deleteNodeOnBackspace && Intrinsics.areEqual(this.tapAction, chatInputNode.tapAction) && this.editDisabled == chatInputNode.editDisabled;
        }
        return false;
    }

    public final boolean getDeleteNodeOnBackspace() {
        return this.deleteNodeOnBackspace;
    }

    public final boolean getEditDisabled() {
        return this.editDisabled;
    }

    public final int getLength() {
        return this.length;
    }

    public final int getLocation() {
        return this.location;
    }

    public final ChatInputNodeStyle getStyle() {
        return this.style;
    }

    public final TapAction getTapAction() {
        return this.tapAction;
    }

    public final int getType() {
        return this.type;
    }

    public int hashCode() {
        int hashCode = ((((Integer.hashCode(this.type) * 31) + Integer.hashCode(this.location)) * 31) + Integer.hashCode(this.length)) * 31;
        ChatInputNodeStyle chatInputNodeStyle = this.style;
        int hashCode2 = (((hashCode + (chatInputNodeStyle == null ? 0 : chatInputNodeStyle.hashCode())) * 31) + Boolean.hashCode(this.deleteNodeOnBackspace)) * 31;
        TapAction tapAction = this.tapAction;
        return ((hashCode2 + (tapAction != null ? tapAction.hashCode() : 0)) * 31) + Boolean.hashCode(this.editDisabled);
    }

    @NotNull
    public String toString() {
        int i10 = this.type;
        int i11 = this.location;
        int i12 = this.length;
        ChatInputNodeStyle chatInputNodeStyle = this.style;
        boolean z10 = this.deleteNodeOnBackspace;
        TapAction tapAction = this.tapAction;
        boolean z11 = this.editDisabled;
        return "ChatInputNode(type=" + i10 + ", location=" + i11 + ", length=" + i12 + ", style=" + chatInputNodeStyle + ", deleteNodeOnBackspace=" + z10 + ", tapAction=" + tapAction + ", editDisabled=" + z11 + ")";
    }

    public ChatInputNode(int i10, int i11, int i12, ChatInputNodeStyle chatInputNodeStyle, boolean z10, TapAction tapAction, boolean z11) {
        this.type = i10;
        this.location = i11;
        this.length = i12;
        this.style = chatInputNodeStyle;
        this.deleteNodeOnBackspace = z10;
        this.tapAction = tapAction;
        this.editDisabled = z11;
    }

    public /* synthetic */ ChatInputNode(int i10, int i11, int i12, ChatInputNodeStyle chatInputNodeStyle, boolean z10, TapAction tapAction, boolean z11, int i13, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, i11, i12, (i13 & 8) != 0 ? null : chatInputNodeStyle, (i13 & 16) != 0 ? false : z10, (i13 & 32) != 0 ? null : tapAction, (i13 & 64) != 0 ? false : z11);
    }
}
