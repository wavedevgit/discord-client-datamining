package com.discord.chat.bridge.contentnode;

import com.discord.chat.bridge.contentnode.LinkContextData;
import com.discord.chat.bridge.rolecolors.RoleColors;
import java.util.List;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlinx.serialization.KSerializer;
import org.jetbrains.annotations.NotNull;
@ft.m
@Metadata(d1 = {"\u0000Z\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0016\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 72\u00020\u0001:\u000267B\u001f\u0012\f\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u0006\u0010\u0007Bo\b\u0010\u0012\u0006\u0010\b\u001a\u00020\t\u0012\u000e\u0010\u0002\u001a\n\u0012\u0004\u0012\u00020\u0001\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\n\u001a\u0004\u0018\u00010\t\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\f\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u000e\u0012\b\u0010\u000f\u001a\u0004\u0018\u00010\u0010\u0012\u0006\u0010\u0011\u001a\u00020\u000e\u0012\b\u0010\u0012\u001a\u0004\u0018\u00010\u0010\u0012\b\u0010\u0013\u001a\u0004\u0018\u00010\u0014¢\u0006\u0004\b\u0006\u0010\u0015J\u000f\u0010&\u001a\b\u0012\u0004\u0012\u00020\u00010\u0003HÆ\u0003J\u000b\u0010'\u001a\u0004\u0018\u00010\u0005HÆ\u0003J%\u0010(\u001a\u00020\u00002\u000e\b\u0002\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00010\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005HÆ\u0001J\u0013\u0010)\u001a\u00020\u000e2\b\u0010*\u001a\u0004\u0018\u00010+HÖ\u0003J\t\u0010,\u001a\u00020\tHÖ\u0001J\t\u0010-\u001a\u00020\u0010HÖ\u0001J%\u0010.\u001a\u00020/2\u0006\u00100\u001a\u00020\u00002\u0006\u00101\u001a\u0002022\u0006\u00103\u001a\u000204H\u0001¢\u0006\u0002\b5R\u0017\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0017R\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0019R\u0015\u0010\n\u001a\u0004\u0018\u00010\t¢\u0006\n\n\u0002\u0010\u001c\u001a\u0004\b\u001a\u0010\u001bR\u0013\u0010\u000b\u001a\u0004\u0018\u00010\f¢\u0006\b\n\u0000\u001a\u0004\b\u001d\u0010\u001eR\u0015\u0010\r\u001a\u0004\u0018\u00010\u000e¢\u0006\n\n\u0002\u0010!\u001a\u0004\b\u001f\u0010 R\u0013\u0010\u000f\u001a\u0004\u0018\u00010\u0010¢\u0006\b\n\u0000\u001a\u0004\b\"\u0010#R\u0011\u0010\u0011\u001a\u00020\u000e¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010$R\u0013\u0010\u0012\u001a\u0004\u0018\u00010\u0010¢\u0006\b\n\u0000\u001a\u0004\b%\u0010#¨\u00068"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContentNode;", "Lcom/discord/chat/bridge/contentnode/ContentNode;", "content", "", "target", "Lcom/discord/chat/bridge/contentnode/LinkContextData;", "<init>", "(Ljava/util/List;Lcom/discord/chat/bridge/contentnode/LinkContextData;)V", "seen0", "", "linkColor", "roleColors", "Lcom/discord/chat/bridge/rolecolors/RoleColors;", "shouldShowRoleDot", "", "url", "", "isUrl", "textContent", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/util/List;Lcom/discord/chat/bridge/contentnode/LinkContextData;Ljava/lang/Integer;Lcom/discord/chat/bridge/rolecolors/RoleColors;Ljava/lang/Boolean;Ljava/lang/String;ZLjava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getContent", "()Ljava/util/List;", "getTarget", "()Lcom/discord/chat/bridge/contentnode/LinkContextData;", "getLinkColor", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "getRoleColors", "()Lcom/discord/chat/bridge/rolecolors/RoleColors;", "getShouldShowRoleDot", "()Ljava/lang/Boolean;", "Ljava/lang/Boolean;", "getUrl", "()Ljava/lang/String;", "()Z", "getTextContent", "component1", "component2", "copy", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nLinkContentNode.kt\nKotlin\n*S Kotlin\n*F\n+ 1 LinkContentNode.kt\ncom/discord/chat/bridge/contentnode/LinkContentNode\n+ 2 CastUtils.kt\ncom/discord/misc/utilities/kotlin/CastUtilsKt\n*L\n1#1,268:1\n8#2:269\n*S KotlinDebug\n*F\n+ 1 LinkContentNode.kt\ncom/discord/chat/bridge/contentnode/LinkContentNode\n*L\n66#1:269\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class LinkContentNode extends ContentNode {
    @NotNull
    private final List<ContentNode> content;
    private final boolean isUrl;
    private final Integer linkColor;
    private final RoleColors roleColors;
    private final Boolean shouldShowRoleDot;
    private final LinkContextData target;
    private final String textContent;
    private final String url;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final Lazy[] $childSerializers = {qr.l.b(qr.o.f48044e, new Function0() { // from class: com.discord.chat.bridge.contentnode.m
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            KSerializer _childSerializers$_anonymous_;
            _childSerializers$_anonymous_ = LinkContentNode._childSerializers$_anonymous_();
            return _childSerializers$_anonymous_;
        }
    }), null, null, null, null, null, null, null};

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/contentnode/LinkContentNode$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/contentnode/LinkContentNode;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return LinkContentNode$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    /* JADX WARN: Code restructure failed: missing block: B:63:0x00b7, code lost:
        if (r2 != null) goto L51;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public /* synthetic */ LinkContentNode(int r2, java.util.List r3, com.discord.chat.bridge.contentnode.LinkContextData r4, java.lang.Integer r5, com.discord.chat.bridge.rolecolors.RoleColors r6, java.lang.Boolean r7, java.lang.String r8, boolean r9, java.lang.String r10, kotlinx.serialization.internal.SerializationConstructorMarker r11) {
        /*
            r1 = this;
            r11 = r2 & 3
            r0 = 3
            if (r0 == r11) goto Le
            com.discord.chat.bridge.contentnode.LinkContentNode$$serializer r11 = com.discord.chat.bridge.contentnode.LinkContentNode$$serializer.INSTANCE
            kotlinx.serialization.descriptors.SerialDescriptor r11 = r11.getDescriptor()
            jt.v1.b(r2, r0, r11)
        Le:
            r11 = 0
            r1.<init>(r11)
            r1.content = r3
            r1.target = r4
            r0 = r2 & 4
            if (r0 != 0) goto L3f
            boolean r5 = r4 instanceof com.discord.chat.bridge.contentnode.LinkContextData.BindUserMenu
            if (r5 == 0) goto L26
            r5 = r4
            com.discord.chat.bridge.contentnode.LinkContextData$BindUserMenu r5 = (com.discord.chat.bridge.contentnode.LinkContextData.BindUserMenu) r5
            java.lang.Integer r5 = r5.getLinkColor()
            goto L3f
        L26:
            boolean r5 = r4 instanceof com.discord.chat.bridge.contentnode.LinkContextData.BindOpenUrl
            if (r5 == 0) goto L32
            r5 = r4
            com.discord.chat.bridge.contentnode.LinkContextData$BindOpenUrl r5 = (com.discord.chat.bridge.contentnode.LinkContextData.BindOpenUrl) r5
            java.lang.Integer r5 = r5.getLinkColor()
            goto L3f
        L32:
            boolean r5 = r4 instanceof com.discord.chat.bridge.contentnode.LinkContextData.BindOpenGdmCustomizeActionSheet
            if (r5 == 0) goto L3e
            r5 = r4
            com.discord.chat.bridge.contentnode.LinkContextData$BindOpenGdmCustomizeActionSheet r5 = (com.discord.chat.bridge.contentnode.LinkContextData.BindOpenGdmCustomizeActionSheet) r5
            java.lang.Integer r5 = r5.getLinkColor()
            goto L3f
        L3e:
            r5 = r11
        L3f:
            r1.linkColor = r5
            r5 = r2 & 8
            if (r5 != 0) goto L55
            boolean r5 = r4 instanceof com.discord.chat.bridge.contentnode.LinkContextData.BindUserMenu
            if (r5 == 0) goto L51
            r5 = r4
            com.discord.chat.bridge.contentnode.LinkContextData$BindUserMenu r5 = (com.discord.chat.bridge.contentnode.LinkContextData.BindUserMenu) r5
            com.discord.chat.bridge.rolecolors.RoleColors r5 = r5.getRoleColors()
            goto L52
        L51:
            r5 = r11
        L52:
            r1.roleColors = r5
            goto L57
        L55:
            r1.roleColors = r6
        L57:
            r5 = r2 & 16
            if (r5 != 0) goto L6b
            boolean r5 = r4 instanceof com.discord.chat.bridge.contentnode.LinkContextData.BindUserMenu
            if (r5 == 0) goto L67
            r5 = r4
            com.discord.chat.bridge.contentnode.LinkContextData$BindUserMenu r5 = (com.discord.chat.bridge.contentnode.LinkContextData.BindUserMenu) r5
            java.lang.Boolean r5 = r5.getShouldShowRoleDot()
            goto L68
        L67:
            r5 = r11
        L68:
            r1.shouldShowRoleDot = r5
            goto L6d
        L6b:
            r1.shouldShowRoleDot = r7
        L6d:
            r5 = r2 & 32
            if (r5 != 0) goto L8b
            boolean r5 = r4 instanceof com.discord.chat.bridge.contentnode.LinkContextData.LinkUrl
            if (r5 == 0) goto L7c
            com.discord.chat.bridge.contentnode.LinkContextData$LinkUrl r4 = (com.discord.chat.bridge.contentnode.LinkContextData.LinkUrl) r4
            java.lang.String r4 = r4.getUrl()
            goto L88
        L7c:
            boolean r5 = r4 instanceof com.discord.chat.bridge.contentnode.LinkContextData.BindOpenUrl
            if (r5 == 0) goto L87
            com.discord.chat.bridge.contentnode.LinkContextData$BindOpenUrl r4 = (com.discord.chat.bridge.contentnode.LinkContextData.BindOpenUrl) r4
            java.lang.String r4 = r4.getUrl()
            goto L88
        L87:
            r4 = r11
        L88:
            r1.url = r4
            goto L8d
        L8b:
            r1.url = r8
        L8d:
            r4 = r2 & 64
            if (r4 != 0) goto L9b
            java.lang.String r4 = r1.url
            if (r4 == 0) goto L97
            r4 = 1
            goto L98
        L97:
            r4 = 0
        L98:
            r1.isUrl = r4
            goto L9d
        L9b:
            r1.isUrl = r9
        L9d:
            r2 = r2 & 128(0x80, float:1.794E-43)
            if (r2 != 0) goto Lbe
            java.lang.Object r2 = kotlin.collections.CollectionsKt.firstOrNull(r3)
            com.discord.chat.bridge.contentnode.ContentNode r2 = (com.discord.chat.bridge.contentnode.ContentNode) r2
            if (r2 == 0) goto Lb9
            boolean r3 = r2 instanceof com.discord.chat.bridge.contentnode.TextContentNode
            if (r3 != 0) goto Lae
            goto Laf
        Lae:
            r11 = r2
        Laf:
            com.discord.chat.bridge.contentnode.TextContentNode r11 = (com.discord.chat.bridge.contentnode.TextContentNode) r11
            if (r11 == 0) goto Lb9
            java.lang.String r2 = r11.getContent()
            if (r2 != 0) goto Lbb
        Lb9:
            java.lang.String r2 = r1.url
        Lbb:
            r1.textContent = r2
            return
        Lbe:
            r1.textContent = r10
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.chat.bridge.contentnode.LinkContentNode.<init>(int, java.util.List, com.discord.chat.bridge.contentnode.LinkContextData, java.lang.Integer, com.discord.chat.bridge.rolecolors.RoleColors, java.lang.Boolean, java.lang.String, boolean, java.lang.String, kotlinx.serialization.internal.SerializationConstructorMarker):void");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_() {
        return new jt.f(ContentNodeSerializer.INSTANCE);
    }

    /* JADX WARN: Multi-variable type inference failed */
    public static /* synthetic */ LinkContentNode copy$default(LinkContentNode linkContentNode, List list, LinkContextData linkContextData, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            list = linkContentNode.content;
        }
        if ((i10 & 2) != 0) {
            linkContextData = linkContentNode.target;
        }
        return linkContentNode.copy(list, linkContextData);
    }

    /* JADX WARN: Code restructure failed: missing block: B:16:0x004b, code lost:
        if (kotlin.jvm.internal.Intrinsics.areEqual(r2, r5) == false) goto L70;
     */
    /* JADX WARN: Code restructure failed: missing block: B:26:0x0070, code lost:
        if (kotlin.jvm.internal.Intrinsics.areEqual(r2, r5) == false) goto L62;
     */
    /* JADX WARN: Code restructure failed: missing block: B:36:0x0095, code lost:
        if (kotlin.jvm.internal.Intrinsics.areEqual(r2, r5) == false) goto L60;
     */
    /* JADX WARN: Code restructure failed: missing block: B:49:0x00c5, code lost:
        if (kotlin.jvm.internal.Intrinsics.areEqual(r2, r5) == false) goto L58;
     */
    /* JADX WARN: Code restructure failed: missing block: B:57:0x00dd, code lost:
        if (r2 != r1) goto L53;
     */
    /* JADX WARN: Code restructure failed: missing block: B:71:0x0106, code lost:
        if (r2 != null) goto L46;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final /* synthetic */ void write$Self$chat_release(com.discord.chat.bridge.contentnode.LinkContentNode r7, kotlinx.serialization.encoding.CompositeEncoder r8, kotlinx.serialization.descriptors.SerialDescriptor r9) {
        /*
            Method dump skipped, instructions count: 280
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.chat.bridge.contentnode.LinkContentNode.write$Self$chat_release(com.discord.chat.bridge.contentnode.LinkContentNode, kotlinx.serialization.encoding.CompositeEncoder, kotlinx.serialization.descriptors.SerialDescriptor):void");
    }

    @NotNull
    public final List<ContentNode> component1() {
        return this.content;
    }

    public final LinkContextData component2() {
        return this.target;
    }

    @NotNull
    public final LinkContentNode copy(@NotNull List<? extends ContentNode> content, LinkContextData linkContextData) {
        Intrinsics.checkNotNullParameter(content, "content");
        return new LinkContentNode(content, linkContextData);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof LinkContentNode) {
            LinkContentNode linkContentNode = (LinkContentNode) obj;
            return Intrinsics.areEqual(this.content, linkContentNode.content) && Intrinsics.areEqual(this.target, linkContentNode.target);
        }
        return false;
    }

    @NotNull
    public final List<ContentNode> getContent() {
        return this.content;
    }

    public final Integer getLinkColor() {
        return this.linkColor;
    }

    public final RoleColors getRoleColors() {
        return this.roleColors;
    }

    public final Boolean getShouldShowRoleDot() {
        return this.shouldShowRoleDot;
    }

    public final LinkContextData getTarget() {
        return this.target;
    }

    public final String getTextContent() {
        return this.textContent;
    }

    public final String getUrl() {
        return this.url;
    }

    public int hashCode() {
        int hashCode = this.content.hashCode() * 31;
        LinkContextData linkContextData = this.target;
        return hashCode + (linkContextData == null ? 0 : linkContextData.hashCode());
    }

    public final boolean isUrl() {
        return this.isUrl;
    }

    @NotNull
    public String toString() {
        List<ContentNode> list = this.content;
        LinkContextData linkContextData = this.target;
        return "LinkContentNode(content=" + list + ", target=" + linkContextData + ")";
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    /* JADX WARN: Multi-variable type inference failed */
    public LinkContentNode(@NotNull List<? extends ContentNode> content, LinkContextData linkContextData) {
        super(null);
        Integer linkColor;
        String url;
        String content2;
        Intrinsics.checkNotNullParameter(content, "content");
        this.content = content;
        this.target = linkContextData;
        if (linkContextData instanceof LinkContextData.BindUserMenu) {
            linkColor = ((LinkContextData.BindUserMenu) linkContextData).getLinkColor();
        } else if (linkContextData instanceof LinkContextData.BindOpenUrl) {
            linkColor = ((LinkContextData.BindOpenUrl) linkContextData).getLinkColor();
        } else {
            linkColor = linkContextData instanceof LinkContextData.BindOpenGdmCustomizeActionSheet ? ((LinkContextData.BindOpenGdmCustomizeActionSheet) linkContextData).getLinkColor() : null;
        }
        this.linkColor = linkColor;
        this.roleColors = linkContextData instanceof LinkContextData.BindUserMenu ? ((LinkContextData.BindUserMenu) linkContextData).getRoleColors() : null;
        this.shouldShowRoleDot = linkContextData instanceof LinkContextData.BindUserMenu ? ((LinkContextData.BindUserMenu) linkContextData).getShouldShowRoleDot() : null;
        if (linkContextData instanceof LinkContextData.LinkUrl) {
            url = ((LinkContextData.LinkUrl) linkContextData).getUrl();
        } else {
            url = linkContextData instanceof LinkContextData.BindOpenUrl ? ((LinkContextData.BindOpenUrl) linkContextData).getUrl() : null;
        }
        this.url = url;
        this.isUrl = url != null;
        ContentNode contentNode = (ContentNode) CollectionsKt.firstOrNull(content);
        if (contentNode != null) {
            TextContentNode textContentNode = contentNode instanceof TextContentNode ? contentNode : null;
            if (textContentNode != null && (content2 = textContentNode.getContent()) != null) {
                url = content2;
            }
        }
        this.textContent = url;
    }
}
