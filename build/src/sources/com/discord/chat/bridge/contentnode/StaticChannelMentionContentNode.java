package com.discord.chat.bridge.contentnode;

import bt.n2;
import bt.v1;
import com.discord.chat.bridge.contentnode.StaticChannelMentionType;
import com.discord.primitives.GuildId;
import com.discord.primitives.GuildId$$serializer;
import com.facebook.react.devsupport.StackTraceHelper;
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
@ys.m
@Metadata(d1 = {"\u0000Z\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0011\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 02\u00020\u0001:\u0002/0B5\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\f\u0010\b\u001a\b\u0012\u0004\u0012\u00020\n0\t¢\u0006\u0004\b\u000b\u0010\fBI\b\u0010\u0012\u0006\u0010\r\u001a\u00020\u000e\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\u000e\u0010\b\u001a\n\u0012\u0004\u0012\u00020\n\u0018\u00010\t\u0012\b\u0010\u000f\u001a\u0004\u0018\u00010\u0010¢\u0006\u0004\b\u000b\u0010\u0011J\t\u0010\u001a\u001a\u00020\u0003HÆ\u0003J\u0010\u0010\u001b\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\b\u001cJ\u000b\u0010\u001d\u001a\u0004\u0018\u00010\u0007HÆ\u0003J\u000f\u0010\u001e\u001a\b\u0012\u0004\u0012\u00020\n0\tHÆ\u0003J@\u0010\u001f\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00072\u000e\b\u0002\u0010\b\u001a\b\u0012\u0004\u0012\u00020\n0\tHÆ\u0001¢\u0006\u0002\b J\u0013\u0010!\u001a\u00020\"2\b\u0010#\u001a\u0004\u0018\u00010$HÖ\u0003J\t\u0010%\u001a\u00020\u000eHÖ\u0001J\t\u0010&\u001a\u00020\u0007HÖ\u0001J%\u0010'\u001a\u00020(2\u0006\u0010)\u001a\u00020\u00002\u0006\u0010*\u001a\u00020+2\u0006\u0010,\u001a\u00020-H\u0001¢\u0006\u0002\b.R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013R\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0015R\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0017R\u001a\u0010\b\u001a\b\u0012\u0004\u0012\u00020\n0\tX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0019¨\u00061"}, d2 = {"Lcom/discord/chat/bridge/contentnode/StaticChannelMentionContentNode;", "Lcom/discord/chat/bridge/contentnode/MentionContentNode;", StackTraceHelper.ID_KEY, "Lcom/discord/chat/bridge/contentnode/StaticChannelMentionType;", "guildId", "Lcom/discord/primitives/GuildId;", "itemId", "", "content", "", "Lcom/discord/chat/bridge/contentnode/ContentNode;", "<init>", "(Lcom/discord/chat/bridge/contentnode/StaticChannelMentionType;Lcom/discord/primitives/GuildId;Ljava/lang/String;Ljava/util/List;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILcom/discord/chat/bridge/contentnode/StaticChannelMentionType;Lcom/discord/primitives/GuildId;Ljava/lang/String;Ljava/util/List;Lkotlinx/serialization/internal/SerializationConstructorMarker;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getId", "()Lcom/discord/chat/bridge/contentnode/StaticChannelMentionType;", "getGuildId-qOKuAAo", "()Lcom/discord/primitives/GuildId;", "getItemId", "()Ljava/lang/String;", "getContent", "()Ljava/util/List;", "component1", "component2", "component2-qOKuAAo", "component3", "component4", "copy", "copy-qphDXf8", "equals", "", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class StaticChannelMentionContentNode extends MentionContentNode {
    @NotNull
    private final List<ContentNode> content;
    private final GuildId guildId;
    @NotNull

    /* renamed from: id */
    private final StaticChannelMentionType f9296id;
    private final String itemId;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final Lazy[] $childSerializers = {null, null, null, jr.l.a(jr.o.f32182e, new Function0() { // from class: com.discord.chat.bridge.contentnode.s
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            KSerializer _childSerializers$_anonymous_;
            _childSerializers$_anonymous_ = StaticChannelMentionContentNode._childSerializers$_anonymous_();
            return _childSerializers$_anonymous_;
        }
    })};

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/contentnode/StaticChannelMentionContentNode$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/contentnode/StaticChannelMentionContentNode;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return StaticChannelMentionContentNode$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ StaticChannelMentionContentNode(int i10, StaticChannelMentionType staticChannelMentionType, GuildId guildId, String str, List list, SerializationConstructorMarker serializationConstructorMarker, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, staticChannelMentionType, guildId, str, list, serializationConstructorMarker);
    }

    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_() {
        return new bt.f(ContentNodeSerializer.INSTANCE);
    }

    public static final /* synthetic */ Lazy[] access$get$childSerializers$cp() {
        return $childSerializers;
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* renamed from: copy-qphDXf8$default */
    public static /* synthetic */ StaticChannelMentionContentNode m378copyqphDXf8$default(StaticChannelMentionContentNode staticChannelMentionContentNode, StaticChannelMentionType staticChannelMentionType, GuildId guildId, String str, List list, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            staticChannelMentionType = staticChannelMentionContentNode.f9296id;
        }
        if ((i10 & 2) != 0) {
            guildId = staticChannelMentionContentNode.guildId;
        }
        if ((i10 & 4) != 0) {
            str = staticChannelMentionContentNode.itemId;
        }
        if ((i10 & 8) != 0) {
            list = staticChannelMentionContentNode.content;
        }
        return staticChannelMentionContentNode.m380copyqphDXf8(staticChannelMentionType, guildId, str, list);
    }

    public static final /* synthetic */ void write$Self$chat_release(StaticChannelMentionContentNode staticChannelMentionContentNode, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        MentionContentNode.write$Self(staticChannelMentionContentNode, compositeEncoder, serialDescriptor);
        Lazy[] lazyArr = $childSerializers;
        compositeEncoder.m(serialDescriptor, 0, StaticChannelMentionType.Serializer.INSTANCE, staticChannelMentionContentNode.f9296id);
        if (compositeEncoder.y(serialDescriptor, 1) || staticChannelMentionContentNode.guildId != null) {
            compositeEncoder.B(serialDescriptor, 1, GuildId$$serializer.INSTANCE, staticChannelMentionContentNode.guildId);
        }
        if (compositeEncoder.y(serialDescriptor, 2) || staticChannelMentionContentNode.itemId != null) {
            compositeEncoder.B(serialDescriptor, 2, n2.f7662a, staticChannelMentionContentNode.itemId);
        }
        compositeEncoder.m(serialDescriptor, 3, (ys.o) lazyArr[3].getValue(), staticChannelMentionContentNode.getContent());
    }

    @NotNull
    public final StaticChannelMentionType component1() {
        return this.f9296id;
    }

    /* renamed from: component2-qOKuAAo */
    public final GuildId m379component2qOKuAAo() {
        return this.guildId;
    }

    public final String component3() {
        return this.itemId;
    }

    @NotNull
    public final List<ContentNode> component4() {
        return this.content;
    }

    @NotNull
    /* renamed from: copy-qphDXf8 */
    public final StaticChannelMentionContentNode m380copyqphDXf8(@NotNull StaticChannelMentionType id2, GuildId guildId, String str, @NotNull List<? extends ContentNode> content) {
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(content, "content");
        return new StaticChannelMentionContentNode(id2, guildId, str, content, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof StaticChannelMentionContentNode) {
            StaticChannelMentionContentNode staticChannelMentionContentNode = (StaticChannelMentionContentNode) obj;
            return this.f9296id == staticChannelMentionContentNode.f9296id && Intrinsics.areEqual(this.guildId, staticChannelMentionContentNode.guildId) && Intrinsics.areEqual(this.itemId, staticChannelMentionContentNode.itemId) && Intrinsics.areEqual(this.content, staticChannelMentionContentNode.content);
        }
        return false;
    }

    @Override // com.discord.chat.bridge.contentnode.MentionContentNode
    @NotNull
    public List<ContentNode> getContent() {
        return this.content;
    }

    /* renamed from: getGuildId-qOKuAAo */
    public final GuildId m381getGuildIdqOKuAAo() {
        return this.guildId;
    }

    @NotNull
    public final StaticChannelMentionType getId() {
        return this.f9296id;
    }

    public final String getItemId() {
        return this.itemId;
    }

    public int hashCode() {
        int hashCode = this.f9296id.hashCode() * 31;
        GuildId guildId = this.guildId;
        int m1078hashCodeimpl = (hashCode + (guildId == null ? 0 : GuildId.m1078hashCodeimpl(guildId.m1082unboximpl()))) * 31;
        String str = this.itemId;
        return ((m1078hashCodeimpl + (str != null ? str.hashCode() : 0)) * 31) + this.content.hashCode();
    }

    @NotNull
    public String toString() {
        StaticChannelMentionType staticChannelMentionType = this.f9296id;
        GuildId guildId = this.guildId;
        String str = this.itemId;
        List<ContentNode> list = this.content;
        return "StaticChannelMentionContentNode(id=" + staticChannelMentionType + ", guildId=" + guildId + ", itemId=" + str + ", content=" + list + ")";
    }

    public /* synthetic */ StaticChannelMentionContentNode(StaticChannelMentionType staticChannelMentionType, GuildId guildId, String str, List list, DefaultConstructorMarker defaultConstructorMarker) {
        this(staticChannelMentionType, guildId, str, list);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    private /* synthetic */ StaticChannelMentionContentNode(int i10, StaticChannelMentionType staticChannelMentionType, GuildId guildId, String str, List list, SerializationConstructorMarker serializationConstructorMarker) {
        super(i10, serializationConstructorMarker);
        if (9 != (i10 & 9)) {
            v1.b(i10, 9, StaticChannelMentionContentNode$$serializer.INSTANCE.getDescriptor());
        }
        this.f9296id = staticChannelMentionType;
        if ((i10 & 2) == 0) {
            this.guildId = null;
        } else {
            this.guildId = guildId;
        }
        if ((i10 & 4) == 0) {
            this.itemId = null;
        } else {
            this.itemId = str;
        }
        this.content = list;
    }

    public /* synthetic */ StaticChannelMentionContentNode(StaticChannelMentionType staticChannelMentionType, GuildId guildId, String str, List list, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(staticChannelMentionType, (i10 & 2) != 0 ? null : guildId, (i10 & 4) != 0 ? null : str, list, null);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    /* JADX WARN: Multi-variable type inference failed */
    private StaticChannelMentionContentNode(StaticChannelMentionType id2, GuildId guildId, String str, List<? extends ContentNode> content) {
        super(null);
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(content, "content");
        this.f9296id = id2;
        this.guildId = guildId;
        this.itemId = str;
        this.content = content;
    }
}
