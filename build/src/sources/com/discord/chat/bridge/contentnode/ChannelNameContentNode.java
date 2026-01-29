package com.discord.chat.bridge.contentnode;

import at.n2;
import at.v1;
import com.discord.chat.bridge.ChannelType;
import java.util.List;
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
@Metadata(d1 = {"\u0000R\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010 \n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000e\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 +2\u00020\u0001:\u0002*+B5\u0012\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0005\u0012\f\u0010\u0007\u001a\b\u0012\u0004\u0012\u00020\u00010\b¢\u0006\u0004\b\t\u0010\nBI\b\u0010\u0012\u0006\u0010\u000b\u001a\u00020\f\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0005\u0012\u000e\u0010\u0007\u001a\n\u0012\u0004\u0012\u00020\u0001\u0018\u00010\b\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u000e¢\u0006\u0004\b\t\u0010\u000fJ\u000b\u0010\u0017\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\t\u0010\u0018\u001a\u00020\u0005HÆ\u0003J\u000b\u0010\u0019\u001a\u0004\u0018\u00010\u0005HÆ\u0003J\u000f\u0010\u001a\u001a\b\u0012\u0004\u0012\u00020\u00010\bHÆ\u0003J;\u0010\u001b\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00052\u000e\b\u0002\u0010\u0007\u001a\b\u0012\u0004\u0012\u00020\u00010\bHÆ\u0001J\u0013\u0010\u001c\u001a\u00020\u001d2\b\u0010\u001e\u001a\u0004\u0018\u00010\u001fHÖ\u0003J\t\u0010 \u001a\u00020\fHÖ\u0001J\t\u0010!\u001a\u00020\u0005HÖ\u0001J%\u0010\"\u001a\u00020#2\u0006\u0010$\u001a\u00020\u00002\u0006\u0010%\u001a\u00020&2\u0006\u0010'\u001a\u00020(H\u0001¢\u0006\u0002\b)R\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u0011R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013R\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0013R\u0017\u0010\u0007\u001a\b\u0012\u0004\u0012\u00020\u00010\b¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0016¨\u0006,"}, d2 = {"Lcom/discord/chat/bridge/contentnode/ChannelNameContentNode;", "Lcom/discord/chat/bridge/contentnode/ContentNode;", "channelType", "Lcom/discord/chat/bridge/ChannelType;", "iconType", "", "icon", "content", "", "<init>", "(Lcom/discord/chat/bridge/ChannelType;Ljava/lang/String;Ljava/lang/String;Ljava/util/List;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILcom/discord/chat/bridge/ChannelType;Ljava/lang/String;Ljava/lang/String;Ljava/util/List;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getChannelType", "()Lcom/discord/chat/bridge/ChannelType;", "getIconType", "()Ljava/lang/String;", "getIcon", "getContent", "()Ljava/util/List;", "component1", "component2", "component3", "component4", "copy", "equals", "", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@xs.m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ChannelNameContentNode extends ContentNode {
    private final ChannelType channelType;
    @NotNull
    private final List<ContentNode> content;
    private final String icon;
    @NotNull
    private final String iconType;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final Lazy[] $childSerializers = {null, null, null, ir.l.a(ir.o.f31103e, new Function0() { // from class: com.discord.chat.bridge.contentnode.f
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            KSerializer _childSerializers$_anonymous_;
            _childSerializers$_anonymous_ = ChannelNameContentNode._childSerializers$_anonymous_();
            return _childSerializers$_anonymous_;
        }
    })};

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/contentnode/ChannelNameContentNode$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/contentnode/ChannelNameContentNode;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return ChannelNameContentNode$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public /* synthetic */ ChannelNameContentNode(int i10, ChannelType channelType, String str, String str2, List list, SerializationConstructorMarker serializationConstructorMarker) {
        super(null);
        if (10 != (i10 & 10)) {
            v1.b(i10, 10, ChannelNameContentNode$$serializer.INSTANCE.getDescriptor());
        }
        if ((i10 & 1) == 0) {
            this.channelType = null;
        } else {
            this.channelType = channelType;
        }
        this.iconType = str;
        if ((i10 & 4) == 0) {
            this.icon = null;
        } else {
            this.icon = str2;
        }
        this.content = list;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_() {
        return new at.f(ContentNodeSerializer.INSTANCE);
    }

    /* JADX WARN: Multi-variable type inference failed */
    public static /* synthetic */ ChannelNameContentNode copy$default(ChannelNameContentNode channelNameContentNode, ChannelType channelType, String str, String str2, List list, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            channelType = channelNameContentNode.channelType;
        }
        if ((i10 & 2) != 0) {
            str = channelNameContentNode.iconType;
        }
        if ((i10 & 4) != 0) {
            str2 = channelNameContentNode.icon;
        }
        if ((i10 & 8) != 0) {
            list = channelNameContentNode.content;
        }
        return channelNameContentNode.copy(channelType, str, str2, list);
    }

    public static final /* synthetic */ void write$Self$chat_release(ChannelNameContentNode channelNameContentNode, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        Lazy[] lazyArr = $childSerializers;
        if (compositeEncoder.A(serialDescriptor, 0) || channelNameContentNode.channelType != null) {
            compositeEncoder.z(serialDescriptor, 0, ChannelType.Serializer.INSTANCE, channelNameContentNode.channelType);
        }
        compositeEncoder.y(serialDescriptor, 1, channelNameContentNode.iconType);
        if (compositeEncoder.A(serialDescriptor, 2) || channelNameContentNode.icon != null) {
            compositeEncoder.z(serialDescriptor, 2, n2.f6848a, channelNameContentNode.icon);
        }
        compositeEncoder.j(serialDescriptor, 3, (xs.o) lazyArr[3].getValue(), channelNameContentNode.content);
    }

    public final ChannelType component1() {
        return this.channelType;
    }

    @NotNull
    public final String component2() {
        return this.iconType;
    }

    public final String component3() {
        return this.icon;
    }

    @NotNull
    public final List<ContentNode> component4() {
        return this.content;
    }

    @NotNull
    public final ChannelNameContentNode copy(ChannelType channelType, @NotNull String iconType, String str, @NotNull List<? extends ContentNode> content) {
        Intrinsics.checkNotNullParameter(iconType, "iconType");
        Intrinsics.checkNotNullParameter(content, "content");
        return new ChannelNameContentNode(channelType, iconType, str, content);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ChannelNameContentNode) {
            ChannelNameContentNode channelNameContentNode = (ChannelNameContentNode) obj;
            return this.channelType == channelNameContentNode.channelType && Intrinsics.areEqual(this.iconType, channelNameContentNode.iconType) && Intrinsics.areEqual(this.icon, channelNameContentNode.icon) && Intrinsics.areEqual(this.content, channelNameContentNode.content);
        }
        return false;
    }

    public final ChannelType getChannelType() {
        return this.channelType;
    }

    @NotNull
    public final List<ContentNode> getContent() {
        return this.content;
    }

    public final String getIcon() {
        return this.icon;
    }

    @NotNull
    public final String getIconType() {
        return this.iconType;
    }

    public int hashCode() {
        ChannelType channelType = this.channelType;
        int hashCode = (((channelType == null ? 0 : channelType.hashCode()) * 31) + this.iconType.hashCode()) * 31;
        String str = this.icon;
        return ((hashCode + (str != null ? str.hashCode() : 0)) * 31) + this.content.hashCode();
    }

    @NotNull
    public String toString() {
        ChannelType channelType = this.channelType;
        String str = this.iconType;
        String str2 = this.icon;
        List<ContentNode> list = this.content;
        return "ChannelNameContentNode(channelType=" + channelType + ", iconType=" + str + ", icon=" + str2 + ", content=" + list + ")";
    }

    public /* synthetic */ ChannelNameContentNode(ChannelType channelType, String str, String str2, List list, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? null : channelType, str, (i10 & 4) != 0 ? null : str2, list);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    /* JADX WARN: Multi-variable type inference failed */
    public ChannelNameContentNode(ChannelType channelType, @NotNull String iconType, String str, @NotNull List<? extends ContentNode> content) {
        super(null);
        Intrinsics.checkNotNullParameter(iconType, "iconType");
        Intrinsics.checkNotNullParameter(content, "content");
        this.channelType = channelType;
        this.iconType = iconType;
        this.icon = str;
        this.content = content;
    }
}
