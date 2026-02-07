package com.discord.chat.bridge.referral;

import androidx.recyclerview.widget.RecyclerView;
import com.discord.chat.bridge.structurabletext.AnnotatedStructurableText;
import com.discord.chat.bridge.structurabletext.AnnotatedStructurableTextSerializer;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import ft.m;
import jt.h;
import jt.n2;
import jt.p0;
import jt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import org.webrtc.PeerConnection;
@m(with = ReferralEmbedSerializer.class)
@Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u000b\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\bw\u0018\u0000 \u00122\u00020\u0001:\u0003\u0010\u0011\u0012R\u0012\u0010\u0002\u001a\u00020\u0003X¦\u0004¢\u0006\u0006\u001a\u0004\b\u0004\u0010\u0005R\u0012\u0010\u0006\u001a\u00020\u0007X¦\u0004¢\u0006\u0006\u001a\u0004\b\b\u0010\tR\u0012\u0010\n\u001a\u00020\u0007X¦\u0004¢\u0006\u0006\u001a\u0004\b\u000b\u0010\tR\u0012\u0010\f\u001a\u00020\u0007X¦\u0004¢\u0006\u0006\u001a\u0004\b\r\u0010\tR\u0014\u0010\u000e\u001a\u0004\u0018\u00010\u0003X¦\u0004¢\u0006\u0006\u001a\u0004\b\u000f\u0010\u0005\u0082\u0001\u0002\u0013\u0014¨\u0006\u0015"}, d2 = {"Lcom/discord/chat/bridge/referral/ReferralEmbed;", "", "headerText", "", "getHeaderText", "()Ljava/lang/String;", "headerColor", "", "getHeaderColor", "()I", ViewProps.BACKGROUND_COLOR, "getBackgroundColor", "thumbnailCornerRadius", "getThumbnailCornerRadius", "headerLogoUrl", "getHeaderLogoUrl", "Resolving", "Resolved", "Companion", "Lcom/discord/chat/bridge/referral/ReferralEmbed$Resolved;", "Lcom/discord/chat/bridge/referral/ReferralEmbed$Resolving;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface ReferralEmbed {
    @NotNull
    public static final Companion Companion = Companion.$$INSTANCE;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/referral/ReferralEmbed$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/referral/ReferralEmbed;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        static final /* synthetic */ Companion $$INSTANCE = new Companion();

        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return ReferralEmbedSerializer.INSTANCE;
        }
    }

    @m
    @Metadata(d1 = {"\u0000N\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0002\b\t\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b8\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 e2\u00020\u0001:\u0002deBý\u0001\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\u0007\u001a\u00020\u0005\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u000e\u001a\u0004\u0018\u00010\u000f\u0012\n\b\u0002\u0010\u0010\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\u0011\u001a\u0004\u0018\u00010\u000f\u0012\n\b\u0002\u0010\u0012\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\u0013\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0014\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\u0015\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0016\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\u0017\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0018\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\u0019\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u001a\u001a\u0004\u0018\u00010\u001b¢\u0006\u0004\b\u001c\u0010\u001dBñ\u0001\b\u0010\u0012\u0006\u0010\u001e\u001a\u00020\u0005\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\u0007\u001a\u00020\u0005\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\t\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\f\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u000e\u001a\u0004\u0018\u00010\u000f\u0012\b\u0010\u0010\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0011\u001a\u0004\u0018\u00010\u000f\u0012\b\u0010\u0012\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0013\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0014\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0015\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0016\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0017\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0018\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0019\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u001a\u001a\u0004\u0018\u00010\u001b\u0012\b\u0010\u001f\u001a\u0004\u0018\u00010 ¢\u0006\u0004\b\u001c\u0010!J\t\u0010?\u001a\u00020\u0003HÆ\u0003J\t\u0010@\u001a\u00020\u0005HÆ\u0003J\t\u0010A\u001a\u00020\u0005HÆ\u0003J\t\u0010B\u001a\u00020\u0005HÆ\u0003J\u000b\u0010C\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010D\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010E\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010F\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0010\u0010G\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\u0010-J\u000b\u0010H\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010I\u001a\u0004\u0018\u00010\u000fHÆ\u0003J\u0010\u0010J\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\u0010-J\u000b\u0010K\u001a\u0004\u0018\u00010\u000fHÆ\u0003J\u0010\u0010L\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\u0010-J\u000b\u0010M\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0010\u0010N\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\u0010-J\u000b\u0010O\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0010\u0010P\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\u0010-J\u000b\u0010Q\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0010\u0010R\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\u0010-J\u000b\u0010S\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0010\u0010T\u001a\u0004\u0018\u00010\u001bHÆ\u0003¢\u0006\u0002\u0010=J\u008e\u0002\u0010U\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00052\b\b\u0002\u0010\u0007\u001a\u00020\u00052\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u000b\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\f\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u000e\u001a\u0004\u0018\u00010\u000f2\n\b\u0002\u0010\u0010\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\u0011\u001a\u0004\u0018\u00010\u000f2\n\b\u0002\u0010\u0012\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\u0013\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0014\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\u0015\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0016\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\u0017\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0018\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\u0019\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u001a\u001a\u0004\u0018\u00010\u001bHÆ\u0001¢\u0006\u0002\u0010VJ\u0013\u0010W\u001a\u00020\u001b2\b\u0010X\u001a\u0004\u0018\u00010YHÖ\u0003J\t\u0010Z\u001a\u00020\u0005HÖ\u0001J\t\u0010[\u001a\u00020\u0003HÖ\u0001J%\u0010\\\u001a\u00020]2\u0006\u0010^\u001a\u00020\u00002\u0006\u0010_\u001a\u00020`2\u0006\u0010a\u001a\u00020bH\u0001¢\u0006\u0002\bcR\u0014\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\"\u0010#R\u0014\u0010\u0004\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b$\u0010%R\u0014\u0010\u0006\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b&\u0010%R\u0014\u0010\u0007\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b'\u0010%R\u0016\u0010\b\u001a\u0004\u0018\u00010\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b(\u0010#R\u0013\u0010\t\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b)\u0010#R\u0013\u0010\n\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b*\u0010#R\u0013\u0010\u000b\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b+\u0010#R\u0015\u0010\f\u001a\u0004\u0018\u00010\u0005¢\u0006\n\n\u0002\u0010.\u001a\u0004\b,\u0010-R\u0013\u0010\r\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b/\u0010#R\u0013\u0010\u000e\u001a\u0004\u0018\u00010\u000f¢\u0006\b\n\u0000\u001a\u0004\b0\u00101R\u0015\u0010\u0010\u001a\u0004\u0018\u00010\u0005¢\u0006\n\n\u0002\u0010.\u001a\u0004\b2\u0010-R\u0013\u0010\u0011\u001a\u0004\u0018\u00010\u000f¢\u0006\b\n\u0000\u001a\u0004\b3\u00101R\u0015\u0010\u0012\u001a\u0004\u0018\u00010\u0005¢\u0006\n\n\u0002\u0010.\u001a\u0004\b4\u0010-R\u0013\u0010\u0013\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b5\u0010#R\u0015\u0010\u0014\u001a\u0004\u0018\u00010\u0005¢\u0006\n\n\u0002\u0010.\u001a\u0004\b6\u0010-R\u0013\u0010\u0015\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b7\u0010#R\u0015\u0010\u0016\u001a\u0004\u0018\u00010\u0005¢\u0006\n\n\u0002\u0010.\u001a\u0004\b8\u0010-R\u0013\u0010\u0017\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b9\u0010#R\u0015\u0010\u0018\u001a\u0004\u0018\u00010\u0005¢\u0006\n\n\u0002\u0010.\u001a\u0004\b:\u0010-R\u0013\u0010\u0019\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b;\u0010#R\u0015\u0010\u001a\u001a\u0004\u0018\u00010\u001b¢\u0006\n\n\u0002\u0010>\u001a\u0004\b<\u0010=¨\u0006f"}, d2 = {"Lcom/discord/chat/bridge/referral/ReferralEmbed$Resolved;", "Lcom/discord/chat/bridge/referral/ReferralEmbed;", "headerText", "", "headerColor", "", ViewProps.BACKGROUND_COLOR, "thumbnailCornerRadius", "headerLogoUrl", "headerUrl", "thumbnailUrl", "titleText", "titleColor", "bodyText", "structuredBodyText", "Lcom/discord/chat/bridge/structurabletext/AnnotatedStructurableText;", "bodyTextColor", "linkButtonLabel", "linkButtonColor", "subText", "subTextColor", "footerText", "footerTextColor", "acceptLabelText", "acceptLabelColor", "acceptLabelIconUrl", "canBeAccepted", "", "<init>", "(Ljava/lang/String;IIILjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Lcom/discord/chat/bridge/structurabletext/AnnotatedStructurableText;Ljava/lang/Integer;Lcom/discord/chat/bridge/structurabletext/AnnotatedStructurableText;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/Boolean;)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;IIILjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Lcom/discord/chat/bridge/structurabletext/AnnotatedStructurableText;Ljava/lang/Integer;Lcom/discord/chat/bridge/structurabletext/AnnotatedStructurableText;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/Boolean;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getHeaderText", "()Ljava/lang/String;", "getHeaderColor", "()I", "getBackgroundColor", "getThumbnailCornerRadius", "getHeaderLogoUrl", "getHeaderUrl", "getThumbnailUrl", "getTitleText", "getTitleColor", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "getBodyText", "getStructuredBodyText", "()Lcom/discord/chat/bridge/structurabletext/AnnotatedStructurableText;", "getBodyTextColor", "getLinkButtonLabel", "getLinkButtonColor", "getSubText", "getSubTextColor", "getFooterText", "getFooterTextColor", "getAcceptLabelText", "getAcceptLabelColor", "getAcceptLabelIconUrl", "getCanBeAccepted", "()Ljava/lang/Boolean;", "Ljava/lang/Boolean;", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "component10", "component11", "component12", "component13", "component14", "component15", "component16", "component17", "component18", "component19", "component20", "component21", "component22", "copy", "(Ljava/lang/String;IIILjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Lcom/discord/chat/bridge/structurabletext/AnnotatedStructurableText;Ljava/lang/Integer;Lcom/discord/chat/bridge/structurabletext/AnnotatedStructurableText;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/Boolean;)Lcom/discord/chat/bridge/referral/ReferralEmbed$Resolved;", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Resolved implements ReferralEmbed {
        @NotNull
        public static final Companion Companion = new Companion(null);
        private final Integer acceptLabelColor;
        private final String acceptLabelIconUrl;
        private final String acceptLabelText;
        private final int backgroundColor;
        private final String bodyText;
        private final Integer bodyTextColor;
        private final Boolean canBeAccepted;
        private final String footerText;
        private final Integer footerTextColor;
        private final int headerColor;
        private final String headerLogoUrl;
        @NotNull
        private final String headerText;
        private final String headerUrl;
        private final Integer linkButtonColor;
        private final AnnotatedStructurableText linkButtonLabel;
        private final AnnotatedStructurableText structuredBodyText;
        private final String subText;
        private final Integer subTextColor;
        private final int thumbnailCornerRadius;
        private final String thumbnailUrl;
        private final Integer titleColor;
        private final String titleText;

        @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/referral/ReferralEmbed$Resolved$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/referral/ReferralEmbed$Resolved;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class Companion {
            private Companion() {
            }

            @NotNull
            public final KSerializer serializer() {
                return ReferralEmbed$Resolved$$serializer.INSTANCE;
            }

            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }
        }

        public /* synthetic */ Resolved(int i10, String str, int i11, int i12, int i13, String str2, String str3, String str4, String str5, Integer num, String str6, AnnotatedStructurableText annotatedStructurableText, Integer num2, AnnotatedStructurableText annotatedStructurableText2, Integer num3, String str7, Integer num4, String str8, Integer num5, String str9, Integer num6, String str10, Boolean bool, SerializationConstructorMarker serializationConstructorMarker) {
            if (31 != (i10 & 31)) {
                v1.b(i10, 31, ReferralEmbed$Resolved$$serializer.INSTANCE.getDescriptor());
            }
            this.headerText = str;
            this.headerColor = i11;
            this.backgroundColor = i12;
            this.thumbnailCornerRadius = i13;
            this.headerLogoUrl = str2;
            if ((i10 & 32) == 0) {
                this.headerUrl = null;
            } else {
                this.headerUrl = str3;
            }
            if ((i10 & 64) == 0) {
                this.thumbnailUrl = null;
            } else {
                this.thumbnailUrl = str4;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 0) {
                this.titleText = null;
            } else {
                this.titleText = str5;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 0) {
                this.titleColor = null;
            } else {
                this.titleColor = num;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 0) {
                this.bodyText = null;
            } else {
                this.bodyText = str6;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 0) {
                this.structuredBodyText = null;
            } else {
                this.structuredBodyText = annotatedStructurableText;
            }
            if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) == 0) {
                this.bodyTextColor = null;
            } else {
                this.bodyTextColor = num2;
            }
            if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 0) {
                this.linkButtonLabel = null;
            } else {
                this.linkButtonLabel = annotatedStructurableText2;
            }
            if ((i10 & 8192) == 0) {
                this.linkButtonColor = null;
            } else {
                this.linkButtonColor = num3;
            }
            if ((i10 & 16384) == 0) {
                this.subText = null;
            } else {
                this.subText = str7;
            }
            if ((32768 & i10) == 0) {
                this.subTextColor = null;
            } else {
                this.subTextColor = num4;
            }
            if ((65536 & i10) == 0) {
                this.footerText = null;
            } else {
                this.footerText = str8;
            }
            if ((131072 & i10) == 0) {
                this.footerTextColor = null;
            } else {
                this.footerTextColor = num5;
            }
            if ((262144 & i10) == 0) {
                this.acceptLabelText = null;
            } else {
                this.acceptLabelText = str9;
            }
            if ((524288 & i10) == 0) {
                this.acceptLabelColor = null;
            } else {
                this.acceptLabelColor = num6;
            }
            if ((1048576 & i10) == 0) {
                this.acceptLabelIconUrl = null;
            } else {
                this.acceptLabelIconUrl = str10;
            }
            if ((i10 & 2097152) == 0) {
                this.canBeAccepted = null;
            } else {
                this.canBeAccepted = bool;
            }
        }

        public static /* synthetic */ Resolved copy$default(Resolved resolved, String str, int i10, int i11, int i12, String str2, String str3, String str4, String str5, Integer num, String str6, AnnotatedStructurableText annotatedStructurableText, Integer num2, AnnotatedStructurableText annotatedStructurableText2, Integer num3, String str7, Integer num4, String str8, Integer num5, String str9, Integer num6, String str10, Boolean bool, int i13, Object obj) {
            Boolean bool2;
            String str11;
            String str12 = (i13 & 1) != 0 ? resolved.headerText : str;
            int i14 = (i13 & 2) != 0 ? resolved.headerColor : i10;
            int i15 = (i13 & 4) != 0 ? resolved.backgroundColor : i11;
            int i16 = (i13 & 8) != 0 ? resolved.thumbnailCornerRadius : i12;
            String str13 = (i13 & 16) != 0 ? resolved.headerLogoUrl : str2;
            String str14 = (i13 & 32) != 0 ? resolved.headerUrl : str3;
            String str15 = (i13 & 64) != 0 ? resolved.thumbnailUrl : str4;
            String str16 = (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? resolved.titleText : str5;
            Integer num7 = (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? resolved.titleColor : num;
            String str17 = (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? resolved.bodyText : str6;
            AnnotatedStructurableText annotatedStructurableText3 = (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? resolved.structuredBodyText : annotatedStructurableText;
            Integer num8 = (i13 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? resolved.bodyTextColor : num2;
            AnnotatedStructurableText annotatedStructurableText4 = (i13 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? resolved.linkButtonLabel : annotatedStructurableText2;
            Integer num9 = (i13 & 8192) != 0 ? resolved.linkButtonColor : num3;
            String str18 = str12;
            String str19 = (i13 & 16384) != 0 ? resolved.subText : str7;
            Integer num10 = (i13 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) != 0 ? resolved.subTextColor : num4;
            String str20 = (i13 & 65536) != 0 ? resolved.footerText : str8;
            Integer num11 = (i13 & 131072) != 0 ? resolved.footerTextColor : num5;
            String str21 = (i13 & 262144) != 0 ? resolved.acceptLabelText : str9;
            Integer num12 = (i13 & 524288) != 0 ? resolved.acceptLabelColor : num6;
            String str22 = (i13 & 1048576) != 0 ? resolved.acceptLabelIconUrl : str10;
            if ((i13 & 2097152) != 0) {
                str11 = str22;
                bool2 = resolved.canBeAccepted;
            } else {
                bool2 = bool;
                str11 = str22;
            }
            return resolved.copy(str18, i14, i15, i16, str13, str14, str15, str16, num7, str17, annotatedStructurableText3, num8, annotatedStructurableText4, num9, str19, num10, str20, num11, str21, num12, str11, bool2);
        }

        public static final /* synthetic */ void write$Self$chat_release(Resolved resolved, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
            compositeEncoder.z(serialDescriptor, 0, resolved.getHeaderText());
            compositeEncoder.x(serialDescriptor, 1, resolved.getHeaderColor());
            compositeEncoder.x(serialDescriptor, 2, resolved.getBackgroundColor());
            compositeEncoder.x(serialDescriptor, 3, resolved.getThumbnailCornerRadius());
            n2 n2Var = n2.f31089a;
            compositeEncoder.l(serialDescriptor, 4, n2Var, resolved.getHeaderLogoUrl());
            if (compositeEncoder.A(serialDescriptor, 5) || resolved.headerUrl != null) {
                compositeEncoder.l(serialDescriptor, 5, n2Var, resolved.headerUrl);
            }
            if (compositeEncoder.A(serialDescriptor, 6) || resolved.thumbnailUrl != null) {
                compositeEncoder.l(serialDescriptor, 6, n2Var, resolved.thumbnailUrl);
            }
            if (compositeEncoder.A(serialDescriptor, 7) || resolved.titleText != null) {
                compositeEncoder.l(serialDescriptor, 7, n2Var, resolved.titleText);
            }
            if (compositeEncoder.A(serialDescriptor, 8) || resolved.titleColor != null) {
                compositeEncoder.l(serialDescriptor, 8, p0.f31105a, resolved.titleColor);
            }
            if (compositeEncoder.A(serialDescriptor, 9) || resolved.bodyText != null) {
                compositeEncoder.l(serialDescriptor, 9, n2Var, resolved.bodyText);
            }
            if (compositeEncoder.A(serialDescriptor, 10) || resolved.structuredBodyText != null) {
                compositeEncoder.l(serialDescriptor, 10, AnnotatedStructurableTextSerializer.INSTANCE, resolved.structuredBodyText);
            }
            if (compositeEncoder.A(serialDescriptor, 11) || resolved.bodyTextColor != null) {
                compositeEncoder.l(serialDescriptor, 11, p0.f31105a, resolved.bodyTextColor);
            }
            if (compositeEncoder.A(serialDescriptor, 12) || resolved.linkButtonLabel != null) {
                compositeEncoder.l(serialDescriptor, 12, AnnotatedStructurableTextSerializer.INSTANCE, resolved.linkButtonLabel);
            }
            if (compositeEncoder.A(serialDescriptor, 13) || resolved.linkButtonColor != null) {
                compositeEncoder.l(serialDescriptor, 13, p0.f31105a, resolved.linkButtonColor);
            }
            if (compositeEncoder.A(serialDescriptor, 14) || resolved.subText != null) {
                compositeEncoder.l(serialDescriptor, 14, n2Var, resolved.subText);
            }
            if (compositeEncoder.A(serialDescriptor, 15) || resolved.subTextColor != null) {
                compositeEncoder.l(serialDescriptor, 15, p0.f31105a, resolved.subTextColor);
            }
            if (compositeEncoder.A(serialDescriptor, 16) || resolved.footerText != null) {
                compositeEncoder.l(serialDescriptor, 16, n2Var, resolved.footerText);
            }
            if (compositeEncoder.A(serialDescriptor, 17) || resolved.footerTextColor != null) {
                compositeEncoder.l(serialDescriptor, 17, p0.f31105a, resolved.footerTextColor);
            }
            if (compositeEncoder.A(serialDescriptor, 18) || resolved.acceptLabelText != null) {
                compositeEncoder.l(serialDescriptor, 18, n2Var, resolved.acceptLabelText);
            }
            if (compositeEncoder.A(serialDescriptor, 19) || resolved.acceptLabelColor != null) {
                compositeEncoder.l(serialDescriptor, 19, p0.f31105a, resolved.acceptLabelColor);
            }
            if (compositeEncoder.A(serialDescriptor, 20) || resolved.acceptLabelIconUrl != null) {
                compositeEncoder.l(serialDescriptor, 20, n2Var, resolved.acceptLabelIconUrl);
            }
            if (compositeEncoder.A(serialDescriptor, 21) || resolved.canBeAccepted != null) {
                compositeEncoder.l(serialDescriptor, 21, h.f31053a, resolved.canBeAccepted);
            }
        }

        @NotNull
        public final String component1() {
            return this.headerText;
        }

        public final String component10() {
            return this.bodyText;
        }

        public final AnnotatedStructurableText component11() {
            return this.structuredBodyText;
        }

        public final Integer component12() {
            return this.bodyTextColor;
        }

        public final AnnotatedStructurableText component13() {
            return this.linkButtonLabel;
        }

        public final Integer component14() {
            return this.linkButtonColor;
        }

        public final String component15() {
            return this.subText;
        }

        public final Integer component16() {
            return this.subTextColor;
        }

        public final String component17() {
            return this.footerText;
        }

        public final Integer component18() {
            return this.footerTextColor;
        }

        public final String component19() {
            return this.acceptLabelText;
        }

        public final int component2() {
            return this.headerColor;
        }

        public final Integer component20() {
            return this.acceptLabelColor;
        }

        public final String component21() {
            return this.acceptLabelIconUrl;
        }

        public final Boolean component22() {
            return this.canBeAccepted;
        }

        public final int component3() {
            return this.backgroundColor;
        }

        public final int component4() {
            return this.thumbnailCornerRadius;
        }

        public final String component5() {
            return this.headerLogoUrl;
        }

        public final String component6() {
            return this.headerUrl;
        }

        public final String component7() {
            return this.thumbnailUrl;
        }

        public final String component8() {
            return this.titleText;
        }

        public final Integer component9() {
            return this.titleColor;
        }

        @NotNull
        public final Resolved copy(@NotNull String headerText, int i10, int i11, int i12, String str, String str2, String str3, String str4, Integer num, String str5, AnnotatedStructurableText annotatedStructurableText, Integer num2, AnnotatedStructurableText annotatedStructurableText2, Integer num3, String str6, Integer num4, String str7, Integer num5, String str8, Integer num6, String str9, Boolean bool) {
            Intrinsics.checkNotNullParameter(headerText, "headerText");
            return new Resolved(headerText, i10, i11, i12, str, str2, str3, str4, num, str5, annotatedStructurableText, num2, annotatedStructurableText2, num3, str6, num4, str7, num5, str8, num6, str9, bool);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof Resolved) {
                Resolved resolved = (Resolved) obj;
                return Intrinsics.areEqual(this.headerText, resolved.headerText) && this.headerColor == resolved.headerColor && this.backgroundColor == resolved.backgroundColor && this.thumbnailCornerRadius == resolved.thumbnailCornerRadius && Intrinsics.areEqual(this.headerLogoUrl, resolved.headerLogoUrl) && Intrinsics.areEqual(this.headerUrl, resolved.headerUrl) && Intrinsics.areEqual(this.thumbnailUrl, resolved.thumbnailUrl) && Intrinsics.areEqual(this.titleText, resolved.titleText) && Intrinsics.areEqual(this.titleColor, resolved.titleColor) && Intrinsics.areEqual(this.bodyText, resolved.bodyText) && Intrinsics.areEqual(this.structuredBodyText, resolved.structuredBodyText) && Intrinsics.areEqual(this.bodyTextColor, resolved.bodyTextColor) && Intrinsics.areEqual(this.linkButtonLabel, resolved.linkButtonLabel) && Intrinsics.areEqual(this.linkButtonColor, resolved.linkButtonColor) && Intrinsics.areEqual(this.subText, resolved.subText) && Intrinsics.areEqual(this.subTextColor, resolved.subTextColor) && Intrinsics.areEqual(this.footerText, resolved.footerText) && Intrinsics.areEqual(this.footerTextColor, resolved.footerTextColor) && Intrinsics.areEqual(this.acceptLabelText, resolved.acceptLabelText) && Intrinsics.areEqual(this.acceptLabelColor, resolved.acceptLabelColor) && Intrinsics.areEqual(this.acceptLabelIconUrl, resolved.acceptLabelIconUrl) && Intrinsics.areEqual(this.canBeAccepted, resolved.canBeAccepted);
            }
            return false;
        }

        public final Integer getAcceptLabelColor() {
            return this.acceptLabelColor;
        }

        public final String getAcceptLabelIconUrl() {
            return this.acceptLabelIconUrl;
        }

        public final String getAcceptLabelText() {
            return this.acceptLabelText;
        }

        @Override // com.discord.chat.bridge.referral.ReferralEmbed
        public int getBackgroundColor() {
            return this.backgroundColor;
        }

        public final String getBodyText() {
            return this.bodyText;
        }

        public final Integer getBodyTextColor() {
            return this.bodyTextColor;
        }

        public final Boolean getCanBeAccepted() {
            return this.canBeAccepted;
        }

        public final String getFooterText() {
            return this.footerText;
        }

        public final Integer getFooterTextColor() {
            return this.footerTextColor;
        }

        @Override // com.discord.chat.bridge.referral.ReferralEmbed
        public int getHeaderColor() {
            return this.headerColor;
        }

        @Override // com.discord.chat.bridge.referral.ReferralEmbed
        public String getHeaderLogoUrl() {
            return this.headerLogoUrl;
        }

        @Override // com.discord.chat.bridge.referral.ReferralEmbed
        @NotNull
        public String getHeaderText() {
            return this.headerText;
        }

        public final String getHeaderUrl() {
            return this.headerUrl;
        }

        public final Integer getLinkButtonColor() {
            return this.linkButtonColor;
        }

        public final AnnotatedStructurableText getLinkButtonLabel() {
            return this.linkButtonLabel;
        }

        public final AnnotatedStructurableText getStructuredBodyText() {
            return this.structuredBodyText;
        }

        public final String getSubText() {
            return this.subText;
        }

        public final Integer getSubTextColor() {
            return this.subTextColor;
        }

        @Override // com.discord.chat.bridge.referral.ReferralEmbed
        public int getThumbnailCornerRadius() {
            return this.thumbnailCornerRadius;
        }

        public final String getThumbnailUrl() {
            return this.thumbnailUrl;
        }

        public final Integer getTitleColor() {
            return this.titleColor;
        }

        public final String getTitleText() {
            return this.titleText;
        }

        public int hashCode() {
            int hashCode = ((((((this.headerText.hashCode() * 31) + Integer.hashCode(this.headerColor)) * 31) + Integer.hashCode(this.backgroundColor)) * 31) + Integer.hashCode(this.thumbnailCornerRadius)) * 31;
            String str = this.headerLogoUrl;
            int hashCode2 = (hashCode + (str == null ? 0 : str.hashCode())) * 31;
            String str2 = this.headerUrl;
            int hashCode3 = (hashCode2 + (str2 == null ? 0 : str2.hashCode())) * 31;
            String str3 = this.thumbnailUrl;
            int hashCode4 = (hashCode3 + (str3 == null ? 0 : str3.hashCode())) * 31;
            String str4 = this.titleText;
            int hashCode5 = (hashCode4 + (str4 == null ? 0 : str4.hashCode())) * 31;
            Integer num = this.titleColor;
            int hashCode6 = (hashCode5 + (num == null ? 0 : num.hashCode())) * 31;
            String str5 = this.bodyText;
            int hashCode7 = (hashCode6 + (str5 == null ? 0 : str5.hashCode())) * 31;
            AnnotatedStructurableText annotatedStructurableText = this.structuredBodyText;
            int hashCode8 = (hashCode7 + (annotatedStructurableText == null ? 0 : annotatedStructurableText.hashCode())) * 31;
            Integer num2 = this.bodyTextColor;
            int hashCode9 = (hashCode8 + (num2 == null ? 0 : num2.hashCode())) * 31;
            AnnotatedStructurableText annotatedStructurableText2 = this.linkButtonLabel;
            int hashCode10 = (hashCode9 + (annotatedStructurableText2 == null ? 0 : annotatedStructurableText2.hashCode())) * 31;
            Integer num3 = this.linkButtonColor;
            int hashCode11 = (hashCode10 + (num3 == null ? 0 : num3.hashCode())) * 31;
            String str6 = this.subText;
            int hashCode12 = (hashCode11 + (str6 == null ? 0 : str6.hashCode())) * 31;
            Integer num4 = this.subTextColor;
            int hashCode13 = (hashCode12 + (num4 == null ? 0 : num4.hashCode())) * 31;
            String str7 = this.footerText;
            int hashCode14 = (hashCode13 + (str7 == null ? 0 : str7.hashCode())) * 31;
            Integer num5 = this.footerTextColor;
            int hashCode15 = (hashCode14 + (num5 == null ? 0 : num5.hashCode())) * 31;
            String str8 = this.acceptLabelText;
            int hashCode16 = (hashCode15 + (str8 == null ? 0 : str8.hashCode())) * 31;
            Integer num6 = this.acceptLabelColor;
            int hashCode17 = (hashCode16 + (num6 == null ? 0 : num6.hashCode())) * 31;
            String str9 = this.acceptLabelIconUrl;
            int hashCode18 = (hashCode17 + (str9 == null ? 0 : str9.hashCode())) * 31;
            Boolean bool = this.canBeAccepted;
            return hashCode18 + (bool != null ? bool.hashCode() : 0);
        }

        @NotNull
        public String toString() {
            String str = this.headerText;
            int i10 = this.headerColor;
            int i11 = this.backgroundColor;
            int i12 = this.thumbnailCornerRadius;
            String str2 = this.headerLogoUrl;
            String str3 = this.headerUrl;
            String str4 = this.thumbnailUrl;
            String str5 = this.titleText;
            Integer num = this.titleColor;
            String str6 = this.bodyText;
            AnnotatedStructurableText annotatedStructurableText = this.structuredBodyText;
            Integer num2 = this.bodyTextColor;
            AnnotatedStructurableText annotatedStructurableText2 = this.linkButtonLabel;
            Integer num3 = this.linkButtonColor;
            String str7 = this.subText;
            Integer num4 = this.subTextColor;
            String str8 = this.footerText;
            Integer num5 = this.footerTextColor;
            String str9 = this.acceptLabelText;
            Integer num6 = this.acceptLabelColor;
            String str10 = this.acceptLabelIconUrl;
            Boolean bool = this.canBeAccepted;
            return "Resolved(headerText=" + str + ", headerColor=" + i10 + ", backgroundColor=" + i11 + ", thumbnailCornerRadius=" + i12 + ", headerLogoUrl=" + str2 + ", headerUrl=" + str3 + ", thumbnailUrl=" + str4 + ", titleText=" + str5 + ", titleColor=" + num + ", bodyText=" + str6 + ", structuredBodyText=" + annotatedStructurableText + ", bodyTextColor=" + num2 + ", linkButtonLabel=" + annotatedStructurableText2 + ", linkButtonColor=" + num3 + ", subText=" + str7 + ", subTextColor=" + num4 + ", footerText=" + str8 + ", footerTextColor=" + num5 + ", acceptLabelText=" + str9 + ", acceptLabelColor=" + num6 + ", acceptLabelIconUrl=" + str10 + ", canBeAccepted=" + bool + ")";
        }

        public Resolved(@NotNull String headerText, int i10, int i11, int i12, String str, String str2, String str3, String str4, Integer num, String str5, AnnotatedStructurableText annotatedStructurableText, Integer num2, AnnotatedStructurableText annotatedStructurableText2, Integer num3, String str6, Integer num4, String str7, Integer num5, String str8, Integer num6, String str9, Boolean bool) {
            Intrinsics.checkNotNullParameter(headerText, "headerText");
            this.headerText = headerText;
            this.headerColor = i10;
            this.backgroundColor = i11;
            this.thumbnailCornerRadius = i12;
            this.headerLogoUrl = str;
            this.headerUrl = str2;
            this.thumbnailUrl = str3;
            this.titleText = str4;
            this.titleColor = num;
            this.bodyText = str5;
            this.structuredBodyText = annotatedStructurableText;
            this.bodyTextColor = num2;
            this.linkButtonLabel = annotatedStructurableText2;
            this.linkButtonColor = num3;
            this.subText = str6;
            this.subTextColor = num4;
            this.footerText = str7;
            this.footerTextColor = num5;
            this.acceptLabelText = str8;
            this.acceptLabelColor = num6;
            this.acceptLabelIconUrl = str9;
            this.canBeAccepted = bool;
        }

        public /* synthetic */ Resolved(String str, int i10, int i11, int i12, String str2, String str3, String str4, String str5, Integer num, String str6, AnnotatedStructurableText annotatedStructurableText, Integer num2, AnnotatedStructurableText annotatedStructurableText2, Integer num3, String str7, Integer num4, String str8, Integer num5, String str9, Integer num6, String str10, Boolean bool, int i13, DefaultConstructorMarker defaultConstructorMarker) {
            this(str, i10, i11, i12, str2, (i13 & 32) != 0 ? null : str3, (i13 & 64) != 0 ? null : str4, (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str5, (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : num, (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : str6, (i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : annotatedStructurableText, (i13 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? null : num2, (i13 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? null : annotatedStructurableText2, (i13 & 8192) != 0 ? null : num3, (i13 & 16384) != 0 ? null : str7, (32768 & i13) != 0 ? null : num4, (65536 & i13) != 0 ? null : str8, (131072 & i13) != 0 ? null : num5, (262144 & i13) != 0 ? null : str9, (524288 & i13) != 0 ? null : num6, (1048576 & i13) != 0 ? null : str10, (i13 & 2097152) != 0 ? null : bool);
        }
    }

    @m
    @Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0002\b\t\n\u0002\u0018\u0002\n\u0002\b\u0013\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 12\u00020\u0001:\u000201BA\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\u0007\u001a\u00020\u0005\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\t\u001a\u00020\u0005\u0012\u0006\u0010\n\u001a\u00020\u0005¢\u0006\u0004\b\u000b\u0010\fBW\b\u0010\u0012\u0006\u0010\r\u001a\u00020\u0005\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\u0007\u001a\u00020\u0005\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\t\u001a\u00020\u0005\u0012\u0006\u0010\n\u001a\u00020\u0005\u0012\b\u0010\u000e\u001a\u0004\u0018\u00010\u000f¢\u0006\u0004\b\u000b\u0010\u0010J\t\u0010\u001a\u001a\u00020\u0003HÆ\u0003J\t\u0010\u001b\u001a\u00020\u0005HÆ\u0003J\t\u0010\u001c\u001a\u00020\u0005HÆ\u0003J\t\u0010\u001d\u001a\u00020\u0005HÆ\u0003J\u000b\u0010\u001e\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\t\u0010\u001f\u001a\u00020\u0005HÆ\u0003J\t\u0010 \u001a\u00020\u0005HÆ\u0003JQ\u0010!\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00052\b\b\u0002\u0010\u0007\u001a\u00020\u00052\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\t\u001a\u00020\u00052\b\b\u0002\u0010\n\u001a\u00020\u0005HÆ\u0001J\u0013\u0010\"\u001a\u00020#2\b\u0010$\u001a\u0004\u0018\u00010%HÖ\u0003J\t\u0010&\u001a\u00020\u0005HÖ\u0001J\t\u0010'\u001a\u00020\u0003HÖ\u0001J%\u0010(\u001a\u00020)2\u0006\u0010*\u001a\u00020\u00002\u0006\u0010+\u001a\u00020,2\u0006\u0010-\u001a\u00020.H\u0001¢\u0006\u0002\b/R\u0014\u0010\u0002\u001a\u00020\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0012R\u0014\u0010\u0004\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0014R\u0014\u0010\u0006\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0014R\u0014\u0010\u0007\u001a\u00020\u0005X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0014R\u0016\u0010\b\u001a\u0004\u0018\u00010\u0003X\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0017\u0010\u0012R\u0011\u0010\t\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0014R\u0011\u0010\n\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0019\u0010\u0014¨\u00062"}, d2 = {"Lcom/discord/chat/bridge/referral/ReferralEmbed$Resolving;", "Lcom/discord/chat/bridge/referral/ReferralEmbed;", "headerText", "", "headerColor", "", ViewProps.BACKGROUND_COLOR, "thumbnailCornerRadius", "headerLogoUrl", "resolvingGradientStart", "resolvingGradientEnd", "<init>", "(Ljava/lang/String;IIILjava/lang/String;II)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;IIILjava/lang/String;IILkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getHeaderText", "()Ljava/lang/String;", "getHeaderColor", "()I", "getBackgroundColor", "getThumbnailCornerRadius", "getHeaderLogoUrl", "getResolvingGradientStart", "getResolvingGradientEnd", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "copy", "equals", "", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Resolving implements ReferralEmbed {
        @NotNull
        public static final Companion Companion = new Companion(null);
        private final int backgroundColor;
        private final int headerColor;
        private final String headerLogoUrl;
        @NotNull
        private final String headerText;
        private final int resolvingGradientEnd;
        private final int resolvingGradientStart;
        private final int thumbnailCornerRadius;

        @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/referral/ReferralEmbed$Resolving$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/referral/ReferralEmbed$Resolving;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class Companion {
            private Companion() {
            }

            @NotNull
            public final KSerializer serializer() {
                return ReferralEmbed$Resolving$$serializer.INSTANCE;
            }

            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }
        }

        public /* synthetic */ Resolving(int i10, String str, int i11, int i12, int i13, String str2, int i14, int i15, SerializationConstructorMarker serializationConstructorMarker) {
            if (127 != (i10 & 127)) {
                v1.b(i10, 127, ReferralEmbed$Resolving$$serializer.INSTANCE.getDescriptor());
            }
            this.headerText = str;
            this.headerColor = i11;
            this.backgroundColor = i12;
            this.thumbnailCornerRadius = i13;
            this.headerLogoUrl = str2;
            this.resolvingGradientStart = i14;
            this.resolvingGradientEnd = i15;
        }

        public static /* synthetic */ Resolving copy$default(Resolving resolving, String str, int i10, int i11, int i12, String str2, int i13, int i14, int i15, Object obj) {
            if ((i15 & 1) != 0) {
                str = resolving.headerText;
            }
            if ((i15 & 2) != 0) {
                i10 = resolving.headerColor;
            }
            if ((i15 & 4) != 0) {
                i11 = resolving.backgroundColor;
            }
            if ((i15 & 8) != 0) {
                i12 = resolving.thumbnailCornerRadius;
            }
            if ((i15 & 16) != 0) {
                str2 = resolving.headerLogoUrl;
            }
            if ((i15 & 32) != 0) {
                i13 = resolving.resolvingGradientStart;
            }
            if ((i15 & 64) != 0) {
                i14 = resolving.resolvingGradientEnd;
            }
            int i16 = i13;
            int i17 = i14;
            String str3 = str2;
            int i18 = i11;
            return resolving.copy(str, i10, i18, i12, str3, i16, i17);
        }

        public static final /* synthetic */ void write$Self$chat_release(Resolving resolving, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
            compositeEncoder.z(serialDescriptor, 0, resolving.getHeaderText());
            compositeEncoder.x(serialDescriptor, 1, resolving.getHeaderColor());
            compositeEncoder.x(serialDescriptor, 2, resolving.getBackgroundColor());
            compositeEncoder.x(serialDescriptor, 3, resolving.getThumbnailCornerRadius());
            compositeEncoder.l(serialDescriptor, 4, n2.f31089a, resolving.getHeaderLogoUrl());
            compositeEncoder.x(serialDescriptor, 5, resolving.resolvingGradientStart);
            compositeEncoder.x(serialDescriptor, 6, resolving.resolvingGradientEnd);
        }

        @NotNull
        public final String component1() {
            return this.headerText;
        }

        public final int component2() {
            return this.headerColor;
        }

        public final int component3() {
            return this.backgroundColor;
        }

        public final int component4() {
            return this.thumbnailCornerRadius;
        }

        public final String component5() {
            return this.headerLogoUrl;
        }

        public final int component6() {
            return this.resolvingGradientStart;
        }

        public final int component7() {
            return this.resolvingGradientEnd;
        }

        @NotNull
        public final Resolving copy(@NotNull String headerText, int i10, int i11, int i12, String str, int i13, int i14) {
            Intrinsics.checkNotNullParameter(headerText, "headerText");
            return new Resolving(headerText, i10, i11, i12, str, i13, i14);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof Resolving) {
                Resolving resolving = (Resolving) obj;
                return Intrinsics.areEqual(this.headerText, resolving.headerText) && this.headerColor == resolving.headerColor && this.backgroundColor == resolving.backgroundColor && this.thumbnailCornerRadius == resolving.thumbnailCornerRadius && Intrinsics.areEqual(this.headerLogoUrl, resolving.headerLogoUrl) && this.resolvingGradientStart == resolving.resolvingGradientStart && this.resolvingGradientEnd == resolving.resolvingGradientEnd;
            }
            return false;
        }

        @Override // com.discord.chat.bridge.referral.ReferralEmbed
        public int getBackgroundColor() {
            return this.backgroundColor;
        }

        @Override // com.discord.chat.bridge.referral.ReferralEmbed
        public int getHeaderColor() {
            return this.headerColor;
        }

        @Override // com.discord.chat.bridge.referral.ReferralEmbed
        public String getHeaderLogoUrl() {
            return this.headerLogoUrl;
        }

        @Override // com.discord.chat.bridge.referral.ReferralEmbed
        @NotNull
        public String getHeaderText() {
            return this.headerText;
        }

        public final int getResolvingGradientEnd() {
            return this.resolvingGradientEnd;
        }

        public final int getResolvingGradientStart() {
            return this.resolvingGradientStart;
        }

        @Override // com.discord.chat.bridge.referral.ReferralEmbed
        public int getThumbnailCornerRadius() {
            return this.thumbnailCornerRadius;
        }

        public int hashCode() {
            int hashCode = ((((((this.headerText.hashCode() * 31) + Integer.hashCode(this.headerColor)) * 31) + Integer.hashCode(this.backgroundColor)) * 31) + Integer.hashCode(this.thumbnailCornerRadius)) * 31;
            String str = this.headerLogoUrl;
            return ((((hashCode + (str == null ? 0 : str.hashCode())) * 31) + Integer.hashCode(this.resolvingGradientStart)) * 31) + Integer.hashCode(this.resolvingGradientEnd);
        }

        @NotNull
        public String toString() {
            String str = this.headerText;
            int i10 = this.headerColor;
            int i11 = this.backgroundColor;
            int i12 = this.thumbnailCornerRadius;
            String str2 = this.headerLogoUrl;
            int i13 = this.resolvingGradientStart;
            int i14 = this.resolvingGradientEnd;
            return "Resolving(headerText=" + str + ", headerColor=" + i10 + ", backgroundColor=" + i11 + ", thumbnailCornerRadius=" + i12 + ", headerLogoUrl=" + str2 + ", resolvingGradientStart=" + i13 + ", resolvingGradientEnd=" + i14 + ")";
        }

        public Resolving(@NotNull String headerText, int i10, int i11, int i12, String str, int i13, int i14) {
            Intrinsics.checkNotNullParameter(headerText, "headerText");
            this.headerText = headerText;
            this.headerColor = i10;
            this.backgroundColor = i11;
            this.thumbnailCornerRadius = i12;
            this.headerLogoUrl = str;
            this.resolvingGradientStart = i13;
            this.resolvingGradientEnd = i14;
        }
    }

    int getBackgroundColor();

    int getHeaderColor();

    String getHeaderLogoUrl();

    @NotNull
    String getHeaderText();

    int getThumbnailCornerRadius();
}
