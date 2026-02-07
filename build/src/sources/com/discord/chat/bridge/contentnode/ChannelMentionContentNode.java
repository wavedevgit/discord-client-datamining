package com.discord.chat.bridge.contentnode;

import java.util.List;
import jt.n2;
import jt.v1;
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
@ft.m
@Metadata(d1 = {"\u0000P\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0004\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0011\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 02\u00020\u0001:\u0002/0BU\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0003\u0012\u0010\b\u0002\u0010\u0007\u001a\n\u0012\u0004\u0012\u00020\t\u0018\u00010\b\u0012\u000e\u0010\n\u001a\n\u0012\u0004\u0012\u00020\t\u0018\u00010\b¢\u0006\u0004\b\u000b\u0010\fBc\b\u0010\u0012\u0006\u0010\r\u001a\u00020\u000e\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0003\u0012\u000e\u0010\u0007\u001a\n\u0012\u0004\u0012\u00020\t\u0018\u00010\b\u0012\u000e\u0010\n\u001a\n\u0012\u0004\u0012\u00020\t\u0018\u00010\b\u0012\b\u0010\u000f\u001a\u0004\u0018\u00010\u0010¢\u0006\u0004\b\u000b\u0010\u0011J\t\u0010\u001a\u001a\u00020\u0003HÆ\u0003J\u000b\u0010\u001b\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u001c\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u001d\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0011\u0010\u001e\u001a\n\u0012\u0004\u0012\u00020\t\u0018\u00010\bHÆ\u0003J\u0011\u0010\u001f\u001a\n\u0012\u0004\u0012\u00020\t\u0018\u00010\bHÆ\u0003J[\u0010 \u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00032\u0010\b\u0002\u0010\u0007\u001a\n\u0012\u0004\u0012\u00020\t\u0018\u00010\b2\u0010\b\u0002\u0010\n\u001a\n\u0012\u0004\u0012\u00020\t\u0018\u00010\bHÆ\u0001J\u0013\u0010!\u001a\u00020\"2\b\u0010#\u001a\u0004\u0018\u00010$HÖ\u0003J\t\u0010%\u001a\u00020\u000eHÖ\u0001J\t\u0010&\u001a\u00020\u0003HÖ\u0001J%\u0010'\u001a\u00020(2\u0006\u0010)\u001a\u00020\u00002\u0006\u0010*\u001a\u00020+2\u0006\u0010,\u001a\u00020-H\u0001¢\u0006\u0002\b.R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013R\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0013R\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0013R\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0013R\u0019\u0010\u0007\u001a\n\u0012\u0004\u0012\u00020\t\u0018\u00010\b¢\u0006\b\n\u0000\u001a\u0004\b\u0017\u0010\u0018R\u001c\u0010\n\u001a\n\u0012\u0004\u0012\u00020\t\u0018\u00010\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0019\u0010\u0018¨\u00061"}, d2 = {"Lcom/discord/chat/bridge/contentnode/ChannelMentionContentNode;", "Lcom/discord/chat/bridge/contentnode/MentionContentNode;", "channelId", "", "guildId", "messageId", "originalLink", "inContent", "", "Lcom/discord/chat/bridge/contentnode/ContentNode;", "content", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/util/List;Ljava/util/List;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/util/List;Ljava/util/List;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getChannelId", "()Ljava/lang/String;", "getGuildId", "getMessageId", "getOriginalLink", "getInContent", "()Ljava/util/List;", "getContent", "component1", "component2", "component3", "component4", "component5", "component6", "copy", "equals", "", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ChannelMentionContentNode extends MentionContentNode {
    @NotNull
    private static final Lazy[] $childSerializers;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final String channelId;
    private final List<ContentNode> content;
    private final String guildId;
    private final List<ContentNode> inContent;
    private final String messageId;
    private final String originalLink;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/contentnode/ChannelMentionContentNode$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/contentnode/ChannelMentionContentNode;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return ChannelMentionContentNode$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    static {
        qr.o oVar = qr.o.f48092e;
        $childSerializers = new Lazy[]{null, null, null, null, qr.l.b(oVar, new Function0() { // from class: com.discord.chat.bridge.contentnode.d
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                KSerializer _childSerializers$_anonymous_;
                _childSerializers$_anonymous_ = ChannelMentionContentNode._childSerializers$_anonymous_();
                return _childSerializers$_anonymous_;
            }
        }), qr.l.b(oVar, new Function0() { // from class: com.discord.chat.bridge.contentnode.e
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                KSerializer _childSerializers$_anonymous_$0;
                _childSerializers$_anonymous_$0 = ChannelMentionContentNode._childSerializers$_anonymous_$0();
                return _childSerializers$_anonymous_$0;
            }
        })};
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public /* synthetic */ ChannelMentionContentNode(int i10, String str, String str2, String str3, String str4, List list, List list2, SerializationConstructorMarker serializationConstructorMarker) {
        super(i10, serializationConstructorMarker);
        if (33 != (i10 & 33)) {
            v1.b(i10, 33, ChannelMentionContentNode$$serializer.INSTANCE.getDescriptor());
        }
        this.channelId = str;
        if ((i10 & 2) == 0) {
            this.guildId = null;
        } else {
            this.guildId = str2;
        }
        if ((i10 & 4) == 0) {
            this.messageId = null;
        } else {
            this.messageId = str3;
        }
        if ((i10 & 8) == 0) {
            this.originalLink = null;
        } else {
            this.originalLink = str4;
        }
        if ((i10 & 16) == 0) {
            this.inContent = null;
        } else {
            this.inContent = list;
        }
        this.content = list2;
    }

    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_() {
        return new jt.f(ContentNodeSerializer.INSTANCE);
    }

    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_$0() {
        return new jt.f(ContentNodeSerializer.INSTANCE);
    }

    public static final /* synthetic */ Lazy[] access$get$childSerializers$cp() {
        return $childSerializers;
    }

    public static /* synthetic */ ChannelMentionContentNode copy$default(ChannelMentionContentNode channelMentionContentNode, String str, String str2, String str3, String str4, List list, List list2, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = channelMentionContentNode.channelId;
        }
        if ((i10 & 2) != 0) {
            str2 = channelMentionContentNode.guildId;
        }
        if ((i10 & 4) != 0) {
            str3 = channelMentionContentNode.messageId;
        }
        if ((i10 & 8) != 0) {
            str4 = channelMentionContentNode.originalLink;
        }
        List<ContentNode> list3 = list;
        if ((i10 & 16) != 0) {
            list3 = channelMentionContentNode.inContent;
        }
        List<ContentNode> list4 = list2;
        if ((i10 & 32) != 0) {
            list4 = channelMentionContentNode.content;
        }
        List list5 = list3;
        List list6 = list4;
        return channelMentionContentNode.copy(str, str2, str3, str4, list5, list6);
    }

    public static final /* synthetic */ void write$Self$chat_release(ChannelMentionContentNode channelMentionContentNode, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        MentionContentNode.write$Self(channelMentionContentNode, compositeEncoder, serialDescriptor);
        Lazy[] lazyArr = $childSerializers;
        compositeEncoder.z(serialDescriptor, 0, channelMentionContentNode.channelId);
        if (compositeEncoder.A(serialDescriptor, 1) || channelMentionContentNode.guildId != null) {
            compositeEncoder.l(serialDescriptor, 1, n2.f31089a, channelMentionContentNode.guildId);
        }
        if (compositeEncoder.A(serialDescriptor, 2) || channelMentionContentNode.messageId != null) {
            compositeEncoder.l(serialDescriptor, 2, n2.f31089a, channelMentionContentNode.messageId);
        }
        if (compositeEncoder.A(serialDescriptor, 3) || channelMentionContentNode.originalLink != null) {
            compositeEncoder.l(serialDescriptor, 3, n2.f31089a, channelMentionContentNode.originalLink);
        }
        if (compositeEncoder.A(serialDescriptor, 4) || channelMentionContentNode.inContent != null) {
            compositeEncoder.l(serialDescriptor, 4, (ft.o) lazyArr[4].getValue(), channelMentionContentNode.inContent);
        }
        compositeEncoder.l(serialDescriptor, 5, (ft.o) lazyArr[5].getValue(), channelMentionContentNode.getContent());
    }

    @NotNull
    public final String component1() {
        return this.channelId;
    }

    public final String component2() {
        return this.guildId;
    }

    public final String component3() {
        return this.messageId;
    }

    public final String component4() {
        return this.originalLink;
    }

    public final List<ContentNode> component5() {
        return this.inContent;
    }

    public final List<ContentNode> component6() {
        return this.content;
    }

    @NotNull
    public final ChannelMentionContentNode copy(@NotNull String channelId, String str, String str2, String str3, List<? extends ContentNode> list, List<? extends ContentNode> list2) {
        Intrinsics.checkNotNullParameter(channelId, "channelId");
        return new ChannelMentionContentNode(channelId, str, str2, str3, list, list2);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ChannelMentionContentNode) {
            ChannelMentionContentNode channelMentionContentNode = (ChannelMentionContentNode) obj;
            return Intrinsics.areEqual(this.channelId, channelMentionContentNode.channelId) && Intrinsics.areEqual(this.guildId, channelMentionContentNode.guildId) && Intrinsics.areEqual(this.messageId, channelMentionContentNode.messageId) && Intrinsics.areEqual(this.originalLink, channelMentionContentNode.originalLink) && Intrinsics.areEqual(this.inContent, channelMentionContentNode.inContent) && Intrinsics.areEqual(this.content, channelMentionContentNode.content);
        }
        return false;
    }

    @NotNull
    public final String getChannelId() {
        return this.channelId;
    }

    @Override // com.discord.chat.bridge.contentnode.MentionContentNode
    public List<ContentNode> getContent() {
        return this.content;
    }

    public final String getGuildId() {
        return this.guildId;
    }

    public final List<ContentNode> getInContent() {
        return this.inContent;
    }

    public final String getMessageId() {
        return this.messageId;
    }

    public final String getOriginalLink() {
        return this.originalLink;
    }

    public int hashCode() {
        int hashCode = this.channelId.hashCode() * 31;
        String str = this.guildId;
        int hashCode2 = (hashCode + (str == null ? 0 : str.hashCode())) * 31;
        String str2 = this.messageId;
        int hashCode3 = (hashCode2 + (str2 == null ? 0 : str2.hashCode())) * 31;
        String str3 = this.originalLink;
        int hashCode4 = (hashCode3 + (str3 == null ? 0 : str3.hashCode())) * 31;
        List<ContentNode> list = this.inContent;
        int hashCode5 = (hashCode4 + (list == null ? 0 : list.hashCode())) * 31;
        List<ContentNode> list2 = this.content;
        return hashCode5 + (list2 != null ? list2.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        String str = this.channelId;
        String str2 = this.guildId;
        String str3 = this.messageId;
        String str4 = this.originalLink;
        List<ContentNode> list = this.inContent;
        List<ContentNode> list2 = this.content;
        return "ChannelMentionContentNode(channelId=" + str + ", guildId=" + str2 + ", messageId=" + str3 + ", originalLink=" + str4 + ", inContent=" + list + ", content=" + list2 + ")";
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public /* synthetic */ ChannelMentionContentNode(java.lang.String r2, java.lang.String r3, java.lang.String r4, java.lang.String r5, java.util.List r6, java.util.List r7, int r8, kotlin.jvm.internal.DefaultConstructorMarker r9) {
        /*
            r1 = this;
            r9 = r8 & 2
            r0 = 0
            if (r9 == 0) goto L6
            r3 = r0
        L6:
            r9 = r8 & 4
            if (r9 == 0) goto Lb
            r4 = r0
        Lb:
            r9 = r8 & 8
            if (r9 == 0) goto L10
            r5 = r0
        L10:
            r8 = r8 & 16
            if (r8 == 0) goto L1c
            r8 = r7
            r7 = r0
        L16:
            r6 = r5
            r5 = r4
            r4 = r3
            r3 = r2
            r2 = r1
            goto L1f
        L1c:
            r8 = r7
            r7 = r6
            goto L16
        L1f:
            r2.<init>(r3, r4, r5, r6, r7, r8)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.chat.bridge.contentnode.ChannelMentionContentNode.<init>(java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.util.List, java.util.List, int, kotlin.jvm.internal.DefaultConstructorMarker):void");
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    /* JADX WARN: Multi-variable type inference failed */
    public ChannelMentionContentNode(@NotNull String channelId, String str, String str2, String str3, List<? extends ContentNode> list, List<? extends ContentNode> list2) {
        super(null);
        Intrinsics.checkNotNullParameter(channelId, "channelId");
        this.channelId = channelId;
        this.guildId = str;
        this.messageId = str2;
        this.originalLink = str3;
        this.inContent = list;
        this.content = list2;
    }
}
