package com.discord.chat.bridge.contentnode;

import dt.v1;
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
@at.m
@Metadata(d1 = {"\u0000P\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 '2\u00020\u0001:\u0002&'B'\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u000e\u0010\u0005\u001a\n\u0012\u0004\u0012\u00020\u0007\u0018\u00010\u0006¢\u0006\u0004\b\b\u0010\tB?\b\u0010\u0012\u0006\u0010\n\u001a\u00020\u000b\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\u000e\u0010\u0005\u001a\n\u0012\u0004\u0012\u00020\u0007\u0018\u00010\u0006\u0012\b\u0010\f\u001a\u0004\u0018\u00010\r¢\u0006\u0004\b\b\u0010\u000eJ\t\u0010\u0014\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0015\u001a\u00020\u0003HÆ\u0003J\u0011\u0010\u0016\u001a\n\u0012\u0004\u0012\u00020\u0007\u0018\u00010\u0006HÆ\u0003J/\u0010\u0017\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\u0010\b\u0002\u0010\u0005\u001a\n\u0012\u0004\u0012\u00020\u0007\u0018\u00010\u0006HÆ\u0001J\u0013\u0010\u0018\u001a\u00020\u00192\b\u0010\u001a\u001a\u0004\u0018\u00010\u001bHÖ\u0003J\t\u0010\u001c\u001a\u00020\u000bHÖ\u0001J\t\u0010\u001d\u001a\u00020\u0003HÖ\u0001J%\u0010\u001e\u001a\u00020\u001f2\u0006\u0010 \u001a\u00020\u00002\u0006\u0010!\u001a\u00020\"2\u0006\u0010#\u001a\u00020$H\u0001¢\u0006\u0002\b%R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010R\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0010R\u001c\u0010\u0005\u001a\n\u0012\u0004\u0012\u00020\u0007\u0018\u00010\u0006X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013¨\u0006("}, d2 = {"Lcom/discord/chat/bridge/contentnode/AttachmentLinkContentNode;", "Lcom/discord/chat/bridge/contentnode/MentionContentNode;", "attachmentUrl", "", "attachmentName", "content", "", "Lcom/discord/chat/bridge/contentnode/ContentNode;", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/util/List;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/String;Ljava/util/List;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getAttachmentUrl", "()Ljava/lang/String;", "getAttachmentName", "getContent", "()Ljava/util/List;", "component1", "component2", "component3", "copy", "equals", "", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AttachmentLinkContentNode extends MentionContentNode {
    @NotNull
    private final String attachmentName;
    @NotNull
    private final String attachmentUrl;
    private final List<ContentNode> content;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final Lazy[] $childSerializers = {null, null, lr.l.b(lr.o.f37120e, new Function0() { // from class: com.discord.chat.bridge.contentnode.a
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            KSerializer _childSerializers$_anonymous_;
            _childSerializers$_anonymous_ = AttachmentLinkContentNode._childSerializers$_anonymous_();
            return _childSerializers$_anonymous_;
        }
    })};

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/contentnode/AttachmentLinkContentNode$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/contentnode/AttachmentLinkContentNode;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return AttachmentLinkContentNode$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public /* synthetic */ AttachmentLinkContentNode(int i10, String str, String str2, List list, SerializationConstructorMarker serializationConstructorMarker) {
        super(i10, serializationConstructorMarker);
        if (7 != (i10 & 7)) {
            v1.b(i10, 7, AttachmentLinkContentNode$$serializer.INSTANCE.getDescriptor());
        }
        this.attachmentUrl = str;
        this.attachmentName = str2;
        this.content = list;
    }

    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_() {
        return new dt.f(ContentNodeSerializer.INSTANCE);
    }

    public static final /* synthetic */ Lazy[] access$get$childSerializers$cp() {
        return $childSerializers;
    }

    /* JADX WARN: Multi-variable type inference failed */
    public static /* synthetic */ AttachmentLinkContentNode copy$default(AttachmentLinkContentNode attachmentLinkContentNode, String str, String str2, List list, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = attachmentLinkContentNode.attachmentUrl;
        }
        if ((i10 & 2) != 0) {
            str2 = attachmentLinkContentNode.attachmentName;
        }
        if ((i10 & 4) != 0) {
            list = attachmentLinkContentNode.content;
        }
        return attachmentLinkContentNode.copy(str, str2, list);
    }

    public static final /* synthetic */ void write$Self$chat_release(AttachmentLinkContentNode attachmentLinkContentNode, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        MentionContentNode.write$Self(attachmentLinkContentNode, compositeEncoder, serialDescriptor);
        Lazy[] lazyArr = $childSerializers;
        compositeEncoder.y(serialDescriptor, 0, attachmentLinkContentNode.attachmentUrl);
        compositeEncoder.y(serialDescriptor, 1, attachmentLinkContentNode.attachmentName);
        compositeEncoder.s(serialDescriptor, 2, (at.o) lazyArr[2].getValue(), attachmentLinkContentNode.getContent());
    }

    @NotNull
    public final String component1() {
        return this.attachmentUrl;
    }

    @NotNull
    public final String component2() {
        return this.attachmentName;
    }

    public final List<ContentNode> component3() {
        return this.content;
    }

    @NotNull
    public final AttachmentLinkContentNode copy(@NotNull String attachmentUrl, @NotNull String attachmentName, List<? extends ContentNode> list) {
        Intrinsics.checkNotNullParameter(attachmentUrl, "attachmentUrl");
        Intrinsics.checkNotNullParameter(attachmentName, "attachmentName");
        return new AttachmentLinkContentNode(attachmentUrl, attachmentName, list);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof AttachmentLinkContentNode) {
            AttachmentLinkContentNode attachmentLinkContentNode = (AttachmentLinkContentNode) obj;
            return Intrinsics.areEqual(this.attachmentUrl, attachmentLinkContentNode.attachmentUrl) && Intrinsics.areEqual(this.attachmentName, attachmentLinkContentNode.attachmentName) && Intrinsics.areEqual(this.content, attachmentLinkContentNode.content);
        }
        return false;
    }

    @NotNull
    public final String getAttachmentName() {
        return this.attachmentName;
    }

    @NotNull
    public final String getAttachmentUrl() {
        return this.attachmentUrl;
    }

    @Override // com.discord.chat.bridge.contentnode.MentionContentNode
    public List<ContentNode> getContent() {
        return this.content;
    }

    public int hashCode() {
        int hashCode = ((this.attachmentUrl.hashCode() * 31) + this.attachmentName.hashCode()) * 31;
        List<ContentNode> list = this.content;
        return hashCode + (list == null ? 0 : list.hashCode());
    }

    @NotNull
    public String toString() {
        String str = this.attachmentUrl;
        String str2 = this.attachmentName;
        List<ContentNode> list = this.content;
        return "AttachmentLinkContentNode(attachmentUrl=" + str + ", attachmentName=" + str2 + ", content=" + list + ")";
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    /* JADX WARN: Multi-variable type inference failed */
    public AttachmentLinkContentNode(@NotNull String attachmentUrl, @NotNull String attachmentName, List<? extends ContentNode> list) {
        super(null);
        Intrinsics.checkNotNullParameter(attachmentUrl, "attachmentUrl");
        Intrinsics.checkNotNullParameter(attachmentName, "attachmentName");
        this.attachmentUrl = attachmentUrl;
        this.attachmentName = attachmentName;
        this.content = list;
    }
}
