package com.discord.chat.input.bridge;

import at.p0;
import at.v1;
import com.discord.chat.input.bridge.ChatInputNodeStyle;
import com.discord.span.utilities.common.BackgroundStyle;
import com.discord.span.utilities.common.BackgroundStyle$$serializer;
import com.facebook.react.uimanager.ViewProps;
import ir.l;
import ir.o;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import xs.m;
@Metadata(d1 = {"\u0000L\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0011\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 -2\u00020\u0001:\u0002,-B1\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0006\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\b¢\u0006\u0004\b\t\u0010\nBA\b\u0010\u0012\u0006\u0010\u000b\u001a\u00020\u0003\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\b\u0012\b\u0010\f\u001a\u0004\u0018\u00010\r¢\u0006\u0004\b\t\u0010\u000eJ\u0010\u0010\u0018\u001a\u0004\u0018\u00010\u0003HÆ\u0003¢\u0006\u0002\u0010\u0010J\t\u0010\u0019\u001a\u00020\u0003HÆ\u0003J\u000b\u0010\u001a\u001a\u0004\u0018\u00010\u0006HÆ\u0003J\u000b\u0010\u001b\u001a\u0004\u0018\u00010\bHÆ\u0003J<\u0010\u001c\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u00062\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\bHÆ\u0001¢\u0006\u0002\u0010\u001dJ\u0013\u0010\u001e\u001a\u00020\u001f2\b\u0010 \u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010!\u001a\u00020\u0003HÖ\u0001J\t\u0010\"\u001a\u00020#HÖ\u0001J%\u0010$\u001a\u00020%2\u0006\u0010&\u001a\u00020\u00002\u0006\u0010'\u001a\u00020(2\u0006\u0010)\u001a\u00020*H\u0001¢\u0006\u0002\b+R\u0015\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\n\n\u0002\u0010\u0011\u001a\u0004\b\u000f\u0010\u0010R\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013R\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0006¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0015R\u0013\u0010\u0007\u001a\u0004\u0018\u00010\b¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0017¨\u0006."}, d2 = {"Lcom/discord/chat/input/bridge/ChatInputNodeStyle;", "", ViewProps.FONT_SIZE, "", ViewProps.COLOR, "backgroundStyle", "Lcom/discord/span/utilities/common/BackgroundStyle;", ViewProps.FONT_WEIGHT, "Lcom/discord/chat/input/bridge/ChatInputNodeFontWeight;", "<init>", "(Ljava/lang/Integer;ILcom/discord/span/utilities/common/BackgroundStyle;Lcom/discord/chat/input/bridge/ChatInputNodeFontWeight;)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/Integer;ILcom/discord/span/utilities/common/BackgroundStyle;Lcom/discord/chat/input/bridge/ChatInputNodeFontWeight;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getFontSize", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "getColor", "()I", "getBackgroundStyle", "()Lcom/discord/span/utilities/common/BackgroundStyle;", "getFontWeight", "()Lcom/discord/chat/input/bridge/ChatInputNodeFontWeight;", "component1", "component2", "component3", "component4", "copy", "(Ljava/lang/Integer;ILcom/discord/span/utilities/common/BackgroundStyle;Lcom/discord/chat/input/bridge/ChatInputNodeFontWeight;)Lcom/discord/chat/input/bridge/ChatInputNodeStyle;", "equals", "", "other", "hashCode", "toString", "", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_input_release", "$serializer", "Companion", "chat_input_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ChatInputNodeStyle {
    private final BackgroundStyle backgroundStyle;
    private final int color;
    private final Integer fontSize;
    private final ChatInputNodeFontWeight fontWeight;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final Lazy[] $childSerializers = {null, null, null, l.a(o.f31103e, new Function0() { // from class: q6.b
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            KSerializer _childSerializers$_anonymous_;
            _childSerializers$_anonymous_ = ChatInputNodeStyle._childSerializers$_anonymous_();
            return _childSerializers$_anonymous_;
        }
    })};

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/input/bridge/ChatInputNodeStyle$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/input/bridge/ChatInputNodeStyle;", "chat_input_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return ChatInputNodeStyle$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ ChatInputNodeStyle(int i10, Integer num, int i11, BackgroundStyle backgroundStyle, ChatInputNodeFontWeight chatInputNodeFontWeight, SerializationConstructorMarker serializationConstructorMarker) {
        if (6 != (i10 & 6)) {
            v1.b(i10, 6, ChatInputNodeStyle$$serializer.INSTANCE.getDescriptor());
        }
        if ((i10 & 1) == 0) {
            this.fontSize = null;
        } else {
            this.fontSize = num;
        }
        this.color = i11;
        this.backgroundStyle = backgroundStyle;
        if ((i10 & 8) == 0) {
            this.fontWeight = null;
        } else {
            this.fontWeight = chatInputNodeFontWeight;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_() {
        return ChatInputNodeFontWeight.Companion.serializer();
    }

    public static /* synthetic */ ChatInputNodeStyle copy$default(ChatInputNodeStyle chatInputNodeStyle, Integer num, int i10, BackgroundStyle backgroundStyle, ChatInputNodeFontWeight chatInputNodeFontWeight, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            num = chatInputNodeStyle.fontSize;
        }
        if ((i11 & 2) != 0) {
            i10 = chatInputNodeStyle.color;
        }
        if ((i11 & 4) != 0) {
            backgroundStyle = chatInputNodeStyle.backgroundStyle;
        }
        if ((i11 & 8) != 0) {
            chatInputNodeFontWeight = chatInputNodeStyle.fontWeight;
        }
        return chatInputNodeStyle.copy(num, i10, backgroundStyle, chatInputNodeFontWeight);
    }

    public static final /* synthetic */ void write$Self$chat_input_release(ChatInputNodeStyle chatInputNodeStyle, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        Lazy[] lazyArr = $childSerializers;
        if (compositeEncoder.A(serialDescriptor, 0) || chatInputNodeStyle.fontSize != null) {
            compositeEncoder.z(serialDescriptor, 0, p0.f6864a, chatInputNodeStyle.fontSize);
        }
        compositeEncoder.w(serialDescriptor, 1, chatInputNodeStyle.color);
        compositeEncoder.z(serialDescriptor, 2, BackgroundStyle$$serializer.INSTANCE, chatInputNodeStyle.backgroundStyle);
        if (compositeEncoder.A(serialDescriptor, 3) || chatInputNodeStyle.fontWeight != null) {
            compositeEncoder.z(serialDescriptor, 3, (xs.o) lazyArr[3].getValue(), chatInputNodeStyle.fontWeight);
        }
    }

    public final Integer component1() {
        return this.fontSize;
    }

    public final int component2() {
        return this.color;
    }

    public final BackgroundStyle component3() {
        return this.backgroundStyle;
    }

    public final ChatInputNodeFontWeight component4() {
        return this.fontWeight;
    }

    @NotNull
    public final ChatInputNodeStyle copy(Integer num, int i10, BackgroundStyle backgroundStyle, ChatInputNodeFontWeight chatInputNodeFontWeight) {
        return new ChatInputNodeStyle(num, i10, backgroundStyle, chatInputNodeFontWeight);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ChatInputNodeStyle) {
            ChatInputNodeStyle chatInputNodeStyle = (ChatInputNodeStyle) obj;
            return Intrinsics.areEqual(this.fontSize, chatInputNodeStyle.fontSize) && this.color == chatInputNodeStyle.color && Intrinsics.areEqual(this.backgroundStyle, chatInputNodeStyle.backgroundStyle) && this.fontWeight == chatInputNodeStyle.fontWeight;
        }
        return false;
    }

    public final BackgroundStyle getBackgroundStyle() {
        return this.backgroundStyle;
    }

    public final int getColor() {
        return this.color;
    }

    public final Integer getFontSize() {
        return this.fontSize;
    }

    public final ChatInputNodeFontWeight getFontWeight() {
        return this.fontWeight;
    }

    public int hashCode() {
        Integer num = this.fontSize;
        int hashCode = (((num == null ? 0 : num.hashCode()) * 31) + Integer.hashCode(this.color)) * 31;
        BackgroundStyle backgroundStyle = this.backgroundStyle;
        int hashCode2 = (hashCode + (backgroundStyle == null ? 0 : backgroundStyle.hashCode())) * 31;
        ChatInputNodeFontWeight chatInputNodeFontWeight = this.fontWeight;
        return hashCode2 + (chatInputNodeFontWeight != null ? chatInputNodeFontWeight.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        Integer num = this.fontSize;
        int i10 = this.color;
        BackgroundStyle backgroundStyle = this.backgroundStyle;
        ChatInputNodeFontWeight chatInputNodeFontWeight = this.fontWeight;
        return "ChatInputNodeStyle(fontSize=" + num + ", color=" + i10 + ", backgroundStyle=" + backgroundStyle + ", fontWeight=" + chatInputNodeFontWeight + ")";
    }

    public ChatInputNodeStyle(Integer num, int i10, BackgroundStyle backgroundStyle, ChatInputNodeFontWeight chatInputNodeFontWeight) {
        this.fontSize = num;
        this.color = i10;
        this.backgroundStyle = backgroundStyle;
        this.fontWeight = chatInputNodeFontWeight;
    }

    public /* synthetic */ ChatInputNodeStyle(Integer num, int i10, BackgroundStyle backgroundStyle, ChatInputNodeFontWeight chatInputNodeFontWeight, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this((i11 & 1) != 0 ? null : num, i10, backgroundStyle, (i11 & 8) != 0 ? null : chatInputNodeFontWeight);
    }
}
