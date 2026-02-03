package com.discord.chat.bridge.contentnode;

import com.discord.primitives.ChannelId;
import com.discord.primitives.ChannelId$$serializer;
import dt.n2;
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
@Metadata(d1 = {"\u0000V\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0012\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 02\u00020\u0001:\u0002/0B1\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\f\u0010\u0007\u001a\b\u0012\u0004\u0012\u00020\t0\b¢\u0006\u0004\b\n\u0010\u000bBI\b\u0010\u0012\u0006\u0010\f\u001a\u00020\r\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0005\u0012\u000e\u0010\u0007\u001a\n\u0012\u0004\u0012\u00020\t\u0018\u00010\b\u0012\b\u0010\u000e\u001a\u0004\u0018\u00010\u000f¢\u0006\u0004\b\n\u0010\u0010J\u0010\u0010\u0019\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b\u001a\u0010\u0012J\u000b\u0010\u001b\u001a\u0004\u0018\u00010\u0005HÆ\u0003J\t\u0010\u001c\u001a\u00020\u0005HÆ\u0003J\u000f\u0010\u001d\u001a\b\u0012\u0004\u0012\u00020\t0\bHÆ\u0003J@\u0010\u001e\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00052\u000e\b\u0002\u0010\u0007\u001a\b\u0012\u0004\u0012\u00020\t0\bHÆ\u0001¢\u0006\u0004\b\u001f\u0010 J\u0013\u0010!\u001a\u00020\"2\b\u0010#\u001a\u0004\u0018\u00010$HÖ\u0003J\t\u0010%\u001a\u00020\rHÖ\u0001J\t\u0010&\u001a\u00020\u0005HÖ\u0001J%\u0010'\u001a\u00020(2\u0006\u0010)\u001a\u00020\u00002\u0006\u0010*\u001a\u00020+2\u0006\u0010,\u001a\u00020-H\u0001¢\u0006\u0002\b.R\u0013\u0010\u0002\u001a\u00020\u0003¢\u0006\n\n\u0002\u0010\u0013\u001a\u0004\b\u0011\u0010\u0012R\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0015R\u0011\u0010\u0006\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0015R\u001a\u0010\u0007\u001a\b\u0012\u0004\u0012\u00020\t0\bX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0017\u0010\u0018¨\u00061"}, d2 = {"Lcom/discord/chat/bridge/contentnode/GameMentionContentNode;", "Lcom/discord/chat/bridge/contentnode/MentionContentNode;", "channelId", "Lcom/discord/primitives/ChannelId;", "icon", "", "applicationId", "content", "", "Lcom/discord/chat/bridge/contentnode/ContentNode;", "<init>", "(JLjava/lang/String;Ljava/lang/String;Ljava/util/List;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILcom/discord/primitives/ChannelId;Ljava/lang/String;Ljava/lang/String;Ljava/util/List;Lkotlinx/serialization/internal/SerializationConstructorMarker;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getChannelId-o4g7jtM", "()J", "J", "getIcon", "()Ljava/lang/String;", "getApplicationId", "getContent", "()Ljava/util/List;", "component1", "component1-o4g7jtM", "component2", "component3", "component4", "copy", "copy-E-s9QsQ", "(JLjava/lang/String;Ljava/lang/String;Ljava/util/List;)Lcom/discord/chat/bridge/contentnode/GameMentionContentNode;", "equals", "", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class GameMentionContentNode extends MentionContentNode {
    @NotNull
    private final String applicationId;
    private final long channelId;
    @NotNull
    private final List<ContentNode> content;
    private final String icon;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final Lazy[] $childSerializers = {null, null, null, lr.l.b(lr.o.f37120e, new Function0() { // from class: com.discord.chat.bridge.contentnode.j
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            KSerializer _childSerializers$_anonymous_;
            _childSerializers$_anonymous_ = GameMentionContentNode._childSerializers$_anonymous_();
            return _childSerializers$_anonymous_;
        }
    })};

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/contentnode/GameMentionContentNode$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/contentnode/GameMentionContentNode;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return GameMentionContentNode$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ GameMentionContentNode(int i10, ChannelId channelId, String str, String str2, List list, SerializationConstructorMarker serializationConstructorMarker, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, channelId, str, str2, list, serializationConstructorMarker);
    }

    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_() {
        return new dt.f(ContentNodeSerializer.INSTANCE);
    }

    public static final /* synthetic */ Lazy[] access$get$childSerializers$cp() {
        return $childSerializers;
    }

    /* renamed from: copy-E-s9QsQ$default */
    public static /* synthetic */ GameMentionContentNode m298copyEs9QsQ$default(GameMentionContentNode gameMentionContentNode, long j10, String str, String str2, List list, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            j10 = gameMentionContentNode.channelId;
        }
        long j11 = j10;
        if ((i10 & 2) != 0) {
            str = gameMentionContentNode.icon;
        }
        String str3 = str;
        if ((i10 & 4) != 0) {
            str2 = gameMentionContentNode.applicationId;
        }
        String str4 = str2;
        List<ContentNode> list2 = list;
        if ((i10 & 8) != 0) {
            list2 = gameMentionContentNode.content;
        }
        return gameMentionContentNode.m300copyEs9QsQ(j11, str3, str4, list2);
    }

    public static final /* synthetic */ void write$Self$chat_release(GameMentionContentNode gameMentionContentNode, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        MentionContentNode.write$Self(gameMentionContentNode, compositeEncoder, serialDescriptor);
        Lazy[] lazyArr = $childSerializers;
        compositeEncoder.D(serialDescriptor, 0, ChannelId$$serializer.INSTANCE, ChannelId.m1059boximpl(gameMentionContentNode.channelId));
        if (compositeEncoder.z(serialDescriptor, 1) || gameMentionContentNode.icon != null) {
            compositeEncoder.s(serialDescriptor, 1, n2.f20978a, gameMentionContentNode.icon);
        }
        compositeEncoder.y(serialDescriptor, 2, gameMentionContentNode.applicationId);
        compositeEncoder.D(serialDescriptor, 3, (at.o) lazyArr[3].getValue(), gameMentionContentNode.getContent());
    }

    /* renamed from: component1-o4g7jtM */
    public final long m299component1o4g7jtM() {
        return this.channelId;
    }

    public final String component2() {
        return this.icon;
    }

    @NotNull
    public final String component3() {
        return this.applicationId;
    }

    @NotNull
    public final List<ContentNode> component4() {
        return this.content;
    }

    @NotNull
    /* renamed from: copy-E-s9QsQ */
    public final GameMentionContentNode m300copyEs9QsQ(long j10, String str, @NotNull String applicationId, @NotNull List<? extends ContentNode> content) {
        Intrinsics.checkNotNullParameter(applicationId, "applicationId");
        Intrinsics.checkNotNullParameter(content, "content");
        return new GameMentionContentNode(j10, str, applicationId, content, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof GameMentionContentNode) {
            GameMentionContentNode gameMentionContentNode = (GameMentionContentNode) obj;
            return ChannelId.m1063equalsimpl0(this.channelId, gameMentionContentNode.channelId) && Intrinsics.areEqual(this.icon, gameMentionContentNode.icon) && Intrinsics.areEqual(this.applicationId, gameMentionContentNode.applicationId) && Intrinsics.areEqual(this.content, gameMentionContentNode.content);
        }
        return false;
    }

    @NotNull
    public final String getApplicationId() {
        return this.applicationId;
    }

    /* renamed from: getChannelId-o4g7jtM */
    public final long m301getChannelIdo4g7jtM() {
        return this.channelId;
    }

    @Override // com.discord.chat.bridge.contentnode.MentionContentNode
    @NotNull
    public List<ContentNode> getContent() {
        return this.content;
    }

    public final String getIcon() {
        return this.icon;
    }

    public int hashCode() {
        int m1064hashCodeimpl = ChannelId.m1064hashCodeimpl(this.channelId) * 31;
        String str = this.icon;
        return ((((m1064hashCodeimpl + (str == null ? 0 : str.hashCode())) * 31) + this.applicationId.hashCode()) * 31) + this.content.hashCode();
    }

    @NotNull
    public String toString() {
        String m1066toStringimpl = ChannelId.m1066toStringimpl(this.channelId);
        String str = this.icon;
        String str2 = this.applicationId;
        List<ContentNode> list = this.content;
        return "GameMentionContentNode(channelId=" + m1066toStringimpl + ", icon=" + str + ", applicationId=" + str2 + ", content=" + list + ")";
    }

    public /* synthetic */ GameMentionContentNode(long j10, String str, String str2, List list, DefaultConstructorMarker defaultConstructorMarker) {
        this(j10, str, str2, list);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    private /* synthetic */ GameMentionContentNode(int i10, ChannelId channelId, String str, String str2, List list, SerializationConstructorMarker serializationConstructorMarker) {
        super(i10, serializationConstructorMarker);
        if (13 != (i10 & 13)) {
            v1.b(i10, 13, GameMentionContentNode$$serializer.INSTANCE.getDescriptor());
        }
        this.channelId = channelId.m1068unboximpl();
        if ((i10 & 2) == 0) {
            this.icon = null;
        } else {
            this.icon = str;
        }
        this.applicationId = str2;
        this.content = list;
    }

    public /* synthetic */ GameMentionContentNode(long j10, String str, String str2, List list, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(j10, (i10 & 2) != 0 ? null : str, str2, list, null);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    /* JADX WARN: Multi-variable type inference failed */
    private GameMentionContentNode(long j10, String str, String applicationId, List<? extends ContentNode> content) {
        super(null);
        Intrinsics.checkNotNullParameter(applicationId, "applicationId");
        Intrinsics.checkNotNullParameter(content, "content");
        this.channelId = j10;
        this.icon = str;
        this.applicationId = applicationId;
        this.content = content;
    }
}
