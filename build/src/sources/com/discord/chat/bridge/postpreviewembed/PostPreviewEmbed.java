package com.discord.chat.bridge.postpreviewembed;

import androidx.recyclerview.widget.RecyclerView;
import com.discord.chat.bridge.spoiler.SpoilerableData;
import com.discord.chat.bridge.structurabletext.StructurableText;
import com.discord.primitives.ChannelId;
import com.discord.primitives.GuildId;
import com.discord.primitives.MessageId;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.Footer;
import ft.m;
import jt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import org.webrtc.PeerConnection;
@m
@Metadata(d1 = {"\u0000b\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0010\u000b\n\u0002\b\n\n\u0002\u0018\u0002\n\u0002\b=\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 m2\u00020\u0001:\u0002lmBÕ\u0001\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0006\u0012\u0006\u0010\u0007\u001a\u00020\b\u0012\u0006\u0010\t\u001a\u00020\n\u0012\u0006\u0010\u000b\u001a\u00020\n\u0012\u0006\u0010\f\u001a\u00020\r\u0012\u0006\u0010\u000e\u001a\u00020\u000f\u0012\n\b\u0002\u0010\u0010\u001a\u0004\u0018\u00010\n\u0012\n\b\u0002\u0010\u0011\u001a\u0004\u0018\u00010\n\u0012\n\b\u0002\u0010\u0012\u001a\u0004\u0018\u00010\n\u0012\n\b\u0002\u0010\u0013\u001a\u0004\u0018\u00010\n\u0012\n\b\u0002\u0010\u0014\u001a\u0004\u0018\u00010\n\u0012\n\b\u0002\u0010\u0015\u001a\u0004\u0018\u00010\n\u0012\n\b\u0002\u0010\u0016\u001a\u0004\u0018\u00010\n\u0012\n\b\u0002\u0010\u0017\u001a\u0004\u0018\u00010\u0018\u0012\b\b\u0002\u0010\u0019\u001a\u00020\u0018\u0012\n\b\u0002\u0010\u001a\u001a\u0004\u0018\u00010\u0018\u0012\n\b\u0002\u0010\u001b\u001a\u0004\u0018\u00010\u0018\u0012\n\b\u0002\u0010\u001c\u001a\u0004\u0018\u00010\u0018¢\u0006\u0004\b\u001d\u0010\u001eBó\u0001\b\u0010\u0012\u0006\u0010\u001f\u001a\u00020\r\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0006\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\b\u0012\b\u0010\t\u001a\u0004\u0018\u00010\n\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\n\u0012\u0006\u0010\f\u001a\u00020\r\u0012\b\u0010\u000e\u001a\u0004\u0018\u00010\u000f\u0012\b\u0010\u0010\u001a\u0004\u0018\u00010\n\u0012\b\u0010\u0011\u001a\u0004\u0018\u00010\n\u0012\b\u0010\u0012\u001a\u0004\u0018\u00010\n\u0012\b\u0010\u0013\u001a\u0004\u0018\u00010\n\u0012\b\u0010\u0014\u001a\u0004\u0018\u00010\n\u0012\b\u0010\u0015\u001a\u0004\u0018\u00010\n\u0012\b\u0010\u0016\u001a\u0004\u0018\u00010\n\u0012\b\u0010\u0017\u001a\u0004\u0018\u00010\u0018\u0012\u0006\u0010\u0019\u001a\u00020\u0018\u0012\b\u0010\u001a\u001a\u0004\u0018\u00010\u0018\u0012\b\u0010\u001b\u001a\u0004\u0018\u00010\u0018\u0012\b\u0010\u001c\u001a\u0004\u0018\u00010\u0018\u0012\b\u0010 \u001a\u0004\u0018\u00010\n\u0012\b\u0010!\u001a\u0004\u0018\u00010\n\u0012\b\u0010\"\u001a\u0004\u0018\u00010#¢\u0006\u0004\b\u001d\u0010$J\u0010\u0010D\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\bE\u0010&J\u0010\u0010F\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\bG\u0010&J\u0010\u0010H\u001a\u00020\u0006HÆ\u0003¢\u0006\u0004\bI\u0010*J\u0010\u0010J\u001a\u00020\bHÆ\u0003¢\u0006\u0004\bK\u0010&J\t\u0010L\u001a\u00020\nHÆ\u0003J\t\u0010M\u001a\u00020\nHÆ\u0003J\t\u0010N\u001a\u00020\rHÆ\u0003J\t\u0010O\u001a\u00020\u000fHÆ\u0003J\u000b\u0010P\u001a\u0004\u0018\u00010\nHÆ\u0003J\u000b\u0010Q\u001a\u0004\u0018\u00010\nHÆ\u0003J\u000b\u0010R\u001a\u0004\u0018\u00010\nHÆ\u0003J\u000b\u0010S\u001a\u0004\u0018\u00010\nHÆ\u0003J\u000b\u0010T\u001a\u0004\u0018\u00010\nHÆ\u0003J\u000b\u0010U\u001a\u0004\u0018\u00010\nHÆ\u0003J\u000b\u0010V\u001a\u0004\u0018\u00010\nHÆ\u0003J\u0010\u0010W\u001a\u0004\u0018\u00010\u0018HÆ\u0003¢\u0006\u0002\u0010;J\t\u0010X\u001a\u00020\u0018HÆ\u0003J\u0010\u0010Y\u001a\u0004\u0018\u00010\u0018HÆ\u0003¢\u0006\u0002\u0010;J\u0010\u0010Z\u001a\u0004\u0018\u00010\u0018HÆ\u0003¢\u0006\u0002\u0010;J\u0010\u0010[\u001a\u0004\u0018\u00010\u0018HÆ\u0003¢\u0006\u0002\u0010;Jî\u0001\u0010\\\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00062\b\b\u0002\u0010\u0007\u001a\u00020\b2\b\b\u0002\u0010\t\u001a\u00020\n2\b\b\u0002\u0010\u000b\u001a\u00020\n2\b\b\u0002\u0010\f\u001a\u00020\r2\b\b\u0002\u0010\u000e\u001a\u00020\u000f2\n\b\u0002\u0010\u0010\u001a\u0004\u0018\u00010\n2\n\b\u0002\u0010\u0011\u001a\u0004\u0018\u00010\n2\n\b\u0002\u0010\u0012\u001a\u0004\u0018\u00010\n2\n\b\u0002\u0010\u0013\u001a\u0004\u0018\u00010\n2\n\b\u0002\u0010\u0014\u001a\u0004\u0018\u00010\n2\n\b\u0002\u0010\u0015\u001a\u0004\u0018\u00010\n2\n\b\u0002\u0010\u0016\u001a\u0004\u0018\u00010\n2\n\b\u0002\u0010\u0017\u001a\u0004\u0018\u00010\u00182\b\b\u0002\u0010\u0019\u001a\u00020\u00182\n\b\u0002\u0010\u001a\u001a\u0004\u0018\u00010\u00182\n\b\u0002\u0010\u001b\u001a\u0004\u0018\u00010\u00182\n\b\u0002\u0010\u001c\u001a\u0004\u0018\u00010\u0018HÆ\u0001¢\u0006\u0004\b]\u0010^J\u0013\u0010_\u001a\u00020\u00182\b\u0010`\u001a\u0004\u0018\u00010aHÖ\u0003J\t\u0010b\u001a\u00020\rHÖ\u0001J\t\u0010c\u001a\u00020\nHÖ\u0001J%\u0010d\u001a\u00020e2\u0006\u0010f\u001a\u00020\u00002\u0006\u0010g\u001a\u00020h2\u0006\u0010i\u001a\u00020jH\u0001¢\u0006\u0002\bkR\u0013\u0010\u0002\u001a\u00020\u0003¢\u0006\n\n\u0002\u0010'\u001a\u0004\b%\u0010&R\u0013\u0010\u0004\u001a\u00020\u0003¢\u0006\n\n\u0002\u0010'\u001a\u0004\b(\u0010&R\u0013\u0010\u0005\u001a\u00020\u0006¢\u0006\n\n\u0002\u0010+\u001a\u0004\b)\u0010*R\u0013\u0010\u0007\u001a\u00020\b¢\u0006\n\n\u0002\u0010'\u001a\u0004\b,\u0010&R\u0011\u0010\t\u001a\u00020\n¢\u0006\b\n\u0000\u001a\u0004\b-\u0010*R\u0011\u0010\u000b\u001a\u00020\n¢\u0006\b\n\u0000\u001a\u0004\b.\u0010*R\u0011\u0010\f\u001a\u00020\r¢\u0006\b\n\u0000\u001a\u0004\b/\u00100R\u0011\u0010\u000e\u001a\u00020\u000f¢\u0006\b\n\u0000\u001a\u0004\b1\u00102R\u0013\u0010\u0010\u001a\u0004\u0018\u00010\n¢\u0006\b\n\u0000\u001a\u0004\b3\u0010*R\u0013\u0010\u0011\u001a\u0004\u0018\u00010\n¢\u0006\b\n\u0000\u001a\u0004\b4\u0010*R\u0013\u0010\u0012\u001a\u0004\u0018\u00010\n¢\u0006\b\n\u0000\u001a\u0004\b5\u0010*R\u0013\u0010\u0013\u001a\u0004\u0018\u00010\n¢\u0006\b\n\u0000\u001a\u0004\b6\u0010*R\u0013\u0010\u0014\u001a\u0004\u0018\u00010\n¢\u0006\b\n\u0000\u001a\u0004\b7\u0010*R\u0013\u0010\u0015\u001a\u0004\u0018\u00010\n¢\u0006\b\n\u0000\u001a\u0004\b8\u0010*R\u0013\u0010\u0016\u001a\u0004\u0018\u00010\n¢\u0006\b\n\u0000\u001a\u0004\b9\u0010*R\u0015\u0010\u0017\u001a\u0004\u0018\u00010\u0018¢\u0006\n\n\u0002\u0010<\u001a\u0004\b:\u0010;R\u0011\u0010\u0019\u001a\u00020\u0018¢\u0006\b\n\u0000\u001a\u0004\b=\u0010>R\u0015\u0010\u001a\u001a\u0004\u0018\u00010\u0018¢\u0006\n\n\u0002\u0010<\u001a\u0004\b?\u0010;R\u0015\u0010\u001b\u001a\u0004\u0018\u00010\u0018¢\u0006\n\n\u0002\u0010<\u001a\u0004\b@\u0010;R\u0015\u0010\u001c\u001a\u0004\u0018\u00010\u0018¢\u0006\n\n\u0002\u0010<\u001a\u0004\bA\u0010;R\u0016\u0010 \u001a\u0004\u0018\u00010\nX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bB\u0010*R\u0016\u0010!\u001a\u0004\u0018\u00010\nX\u0096\u0004¢\u0006\b\n\u0000\u001a\u0004\bC\u0010*¨\u0006n"}, d2 = {"Lcom/discord/chat/bridge/postpreviewembed/PostPreviewEmbed;", "Lcom/discord/chat/bridge/spoiler/SpoilerableData;", "parentChannelId", "Lcom/discord/primitives/ChannelId;", "threadId", "messageId", "Lcom/discord/primitives/MessageId;", "guildId", "Lcom/discord/primitives/GuildId;", "title", "", "ctaText", "ctaButtonColor", "", Footer.type, "Lcom/discord/chat/bridge/structurabletext/StructurableText;", "subtitle", "coverImage", "blurredCoverImage", "coverImageOverlayText", "backgroundImage", "spoiler", "obscure", "obscureAwaitingScan", "", "shouldSpoiler", "obscureHideControls", "obscureIsOpaque", "verifyAge", "<init>", "(JJLjava/lang/String;JLjava/lang/String;Ljava/lang/String;ILcom/discord/chat/bridge/structurabletext/StructurableText;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;ZLjava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/Boolean;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "seen0", "spoilerOrNull", "obscureOrNull", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILcom/discord/primitives/ChannelId;Lcom/discord/primitives/ChannelId;Ljava/lang/String;Lcom/discord/primitives/GuildId;Ljava/lang/String;Ljava/lang/String;ILcom/discord/chat/bridge/structurabletext/StructurableText;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;ZLjava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/String;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getParentChannelId-o4g7jtM", "()J", "J", "getThreadId-o4g7jtM", "getMessageId-3Eiw7ao", "()Ljava/lang/String;", "Ljava/lang/String;", "getGuildId-fYKD8eg", "getTitle", "getCtaText", "getCtaButtonColor", "()I", "getFooter", "()Lcom/discord/chat/bridge/structurabletext/StructurableText;", "getSubtitle", "getCoverImage", "getBlurredCoverImage", "getCoverImageOverlayText", "getBackgroundImage", "getSpoiler", "getObscure", "getObscureAwaitingScan", "()Ljava/lang/Boolean;", "Ljava/lang/Boolean;", "getShouldSpoiler", "()Z", "getObscureHideControls", "getObscureIsOpaque", "getVerifyAge", "getSpoilerOrNull", "getObscureOrNull", "component1", "component1-o4g7jtM", "component2", "component2-o4g7jtM", "component3", "component3-3Eiw7ao", "component4", "component4-fYKD8eg", "component5", "component6", "component7", "component8", "component9", "component10", "component11", "component12", "component13", "component14", "component15", "component16", "component17", "component18", "component19", "component20", "copy", "copy-15l5paM", "(JJLjava/lang/String;JLjava/lang/String;Ljava/lang/String;ILcom/discord/chat/bridge/structurabletext/StructurableText;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Boolean;ZLjava/lang/Boolean;Ljava/lang/Boolean;Ljava/lang/Boolean;)Lcom/discord/chat/bridge/postpreviewembed/PostPreviewEmbed;", "equals", "other", "", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nPostPreviewEmbed.kt\nKotlin\n*S Kotlin\n*F\n+ 1 PostPreviewEmbed.kt\ncom/discord/chat/bridge/postpreviewembed/PostPreviewEmbed\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,36:1\n1#2:37\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class PostPreviewEmbed implements SpoilerableData {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final String backgroundImage;
    private final String blurredCoverImage;
    private final String coverImage;
    private final String coverImageOverlayText;
    private final int ctaButtonColor;
    @NotNull
    private final String ctaText;
    @NotNull
    private final StructurableText footer;
    private final long guildId;
    @NotNull
    private final String messageId;
    private final String obscure;
    private final Boolean obscureAwaitingScan;
    private final Boolean obscureHideControls;
    private final Boolean obscureIsOpaque;
    private final String obscureOrNull;
    private final long parentChannelId;
    private final boolean shouldSpoiler;
    private final String spoiler;
    private final String spoilerOrNull;
    private final String subtitle;
    private final long threadId;
    @NotNull
    private final String title;
    private final Boolean verifyAge;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/postpreviewembed/PostPreviewEmbed$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/postpreviewembed/PostPreviewEmbed;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return PostPreviewEmbed$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ PostPreviewEmbed(int i10, ChannelId channelId, ChannelId channelId2, String str, GuildId guildId, String str2, String str3, int i11, StructurableText structurableText, String str4, String str5, String str6, String str7, String str8, String str9, String str10, Boolean bool, boolean z10, Boolean bool2, Boolean bool3, Boolean bool4, String str11, String str12, SerializationConstructorMarker serializationConstructorMarker, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, channelId, channelId2, str, guildId, str2, str3, i11, structurableText, str4, str5, str6, str7, str8, str9, str10, bool, z10, bool2, bool3, bool4, str11, str12, serializationConstructorMarker);
    }

    /* renamed from: copy-15l5paM$default  reason: not valid java name */
    public static /* synthetic */ PostPreviewEmbed m396copy15l5paM$default(PostPreviewEmbed postPreviewEmbed, long j10, long j11, String str, long j12, String str2, String str3, int i10, StructurableText structurableText, String str4, String str5, String str6, String str7, String str8, String str9, String str10, Boolean bool, boolean z10, Boolean bool2, Boolean bool3, Boolean bool4, int i11, Object obj) {
        Boolean bool5;
        Boolean bool6;
        long j13 = (i11 & 1) != 0 ? postPreviewEmbed.parentChannelId : j10;
        long j14 = (i11 & 2) != 0 ? postPreviewEmbed.threadId : j11;
        String str11 = (i11 & 4) != 0 ? postPreviewEmbed.messageId : str;
        long j15 = (i11 & 8) != 0 ? postPreviewEmbed.guildId : j12;
        String str12 = (i11 & 16) != 0 ? postPreviewEmbed.title : str2;
        String str13 = (i11 & 32) != 0 ? postPreviewEmbed.ctaText : str3;
        int i12 = (i11 & 64) != 0 ? postPreviewEmbed.ctaButtonColor : i10;
        StructurableText structurableText2 = (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? postPreviewEmbed.footer : structurableText;
        String str14 = (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? postPreviewEmbed.subtitle : str4;
        String str15 = (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? postPreviewEmbed.coverImage : str5;
        String str16 = (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? postPreviewEmbed.blurredCoverImage : str6;
        long j16 = j13;
        String str17 = (i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? postPreviewEmbed.coverImageOverlayText : str7;
        String str18 = (i11 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? postPreviewEmbed.backgroundImage : str8;
        String str19 = str17;
        String str20 = (i11 & 8192) != 0 ? postPreviewEmbed.spoiler : str9;
        String str21 = (i11 & 16384) != 0 ? postPreviewEmbed.obscure : str10;
        Boolean bool7 = (i11 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) != 0 ? postPreviewEmbed.obscureAwaitingScan : bool;
        boolean z11 = (i11 & 65536) != 0 ? postPreviewEmbed.shouldSpoiler : z10;
        Boolean bool8 = (i11 & 131072) != 0 ? postPreviewEmbed.obscureHideControls : bool2;
        Boolean bool9 = (i11 & 262144) != 0 ? postPreviewEmbed.obscureIsOpaque : bool3;
        if ((i11 & 524288) != 0) {
            bool6 = bool9;
            bool5 = postPreviewEmbed.verifyAge;
        } else {
            bool5 = bool4;
            bool6 = bool9;
        }
        return postPreviewEmbed.m401copy15l5paM(j16, j14, str11, j15, str12, str13, i12, structurableText2, str14, str15, str16, str19, str18, str20, str21, bool7, z11, bool8, bool6, bool5);
    }

    /* JADX WARN: Code restructure failed: missing block: B:84:0x0154, code lost:
        if (kotlin.jvm.internal.Intrinsics.areEqual(r1, r3) == false) goto L71;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final /* synthetic */ void write$Self$chat_release(com.discord.chat.bridge.postpreviewembed.PostPreviewEmbed r5, kotlinx.serialization.encoding.CompositeEncoder r6, kotlinx.serialization.descriptors.SerialDescriptor r7) {
        /*
            Method dump skipped, instructions count: 391
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.discord.chat.bridge.postpreviewembed.PostPreviewEmbed.write$Self$chat_release(com.discord.chat.bridge.postpreviewembed.PostPreviewEmbed, kotlinx.serialization.encoding.CompositeEncoder, kotlinx.serialization.descriptors.SerialDescriptor):void");
    }

    /* renamed from: component1-o4g7jtM  reason: not valid java name */
    public final long m397component1o4g7jtM() {
        return this.parentChannelId;
    }

    public final String component10() {
        return this.coverImage;
    }

    public final String component11() {
        return this.blurredCoverImage;
    }

    public final String component12() {
        return this.coverImageOverlayText;
    }

    public final String component13() {
        return this.backgroundImage;
    }

    public final String component14() {
        return this.spoiler;
    }

    public final String component15() {
        return this.obscure;
    }

    public final Boolean component16() {
        return this.obscureAwaitingScan;
    }

    public final boolean component17() {
        return this.shouldSpoiler;
    }

    public final Boolean component18() {
        return this.obscureHideControls;
    }

    public final Boolean component19() {
        return this.obscureIsOpaque;
    }

    /* renamed from: component2-o4g7jtM  reason: not valid java name */
    public final long m398component2o4g7jtM() {
        return this.threadId;
    }

    public final Boolean component20() {
        return this.verifyAge;
    }

    @NotNull
    /* renamed from: component3-3Eiw7ao  reason: not valid java name */
    public final String m399component33Eiw7ao() {
        return this.messageId;
    }

    /* renamed from: component4-fYKD8eg  reason: not valid java name */
    public final long m400component4fYKD8eg() {
        return this.guildId;
    }

    @NotNull
    public final String component5() {
        return this.title;
    }

    @NotNull
    public final String component6() {
        return this.ctaText;
    }

    public final int component7() {
        return this.ctaButtonColor;
    }

    @NotNull
    public final StructurableText component8() {
        return this.footer;
    }

    public final String component9() {
        return this.subtitle;
    }

    @NotNull
    /* renamed from: copy-15l5paM  reason: not valid java name */
    public final PostPreviewEmbed m401copy15l5paM(long j10, long j11, @NotNull String messageId, long j12, @NotNull String title, @NotNull String ctaText, int i10, @NotNull StructurableText footer, String str, String str2, String str3, String str4, String str5, String str6, String str7, Boolean bool, boolean z10, Boolean bool2, Boolean bool3, Boolean bool4) {
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(title, "title");
        Intrinsics.checkNotNullParameter(ctaText, "ctaText");
        Intrinsics.checkNotNullParameter(footer, "footer");
        return new PostPreviewEmbed(j10, j11, messageId, j12, title, ctaText, i10, footer, str, str2, str3, str4, str5, str6, str7, bool, z10, bool2, bool3, bool4, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof PostPreviewEmbed) {
            PostPreviewEmbed postPreviewEmbed = (PostPreviewEmbed) obj;
            return ChannelId.m1061equalsimpl0(this.parentChannelId, postPreviewEmbed.parentChannelId) && ChannelId.m1061equalsimpl0(this.threadId, postPreviewEmbed.threadId) && MessageId.m1087equalsimpl0(this.messageId, postPreviewEmbed.messageId) && GuildId.m1074equalsimpl0(this.guildId, postPreviewEmbed.guildId) && Intrinsics.areEqual(this.title, postPreviewEmbed.title) && Intrinsics.areEqual(this.ctaText, postPreviewEmbed.ctaText) && this.ctaButtonColor == postPreviewEmbed.ctaButtonColor && Intrinsics.areEqual(this.footer, postPreviewEmbed.footer) && Intrinsics.areEqual(this.subtitle, postPreviewEmbed.subtitle) && Intrinsics.areEqual(this.coverImage, postPreviewEmbed.coverImage) && Intrinsics.areEqual(this.blurredCoverImage, postPreviewEmbed.blurredCoverImage) && Intrinsics.areEqual(this.coverImageOverlayText, postPreviewEmbed.coverImageOverlayText) && Intrinsics.areEqual(this.backgroundImage, postPreviewEmbed.backgroundImage) && Intrinsics.areEqual(this.spoiler, postPreviewEmbed.spoiler) && Intrinsics.areEqual(this.obscure, postPreviewEmbed.obscure) && Intrinsics.areEqual(this.obscureAwaitingScan, postPreviewEmbed.obscureAwaitingScan) && this.shouldSpoiler == postPreviewEmbed.shouldSpoiler && Intrinsics.areEqual(this.obscureHideControls, postPreviewEmbed.obscureHideControls) && Intrinsics.areEqual(this.obscureIsOpaque, postPreviewEmbed.obscureIsOpaque) && Intrinsics.areEqual(this.verifyAge, postPreviewEmbed.verifyAge);
        }
        return false;
    }

    public final String getBackgroundImage() {
        return this.backgroundImage;
    }

    public final String getBlurredCoverImage() {
        return this.blurredCoverImage;
    }

    public final String getCoverImage() {
        return this.coverImage;
    }

    public final String getCoverImageOverlayText() {
        return this.coverImageOverlayText;
    }

    public final int getCtaButtonColor() {
        return this.ctaButtonColor;
    }

    @NotNull
    public final String getCtaText() {
        return this.ctaText;
    }

    @NotNull
    public final StructurableText getFooter() {
        return this.footer;
    }

    /* renamed from: getGuildId-fYKD8eg  reason: not valid java name */
    public final long m402getGuildIdfYKD8eg() {
        return this.guildId;
    }

    @NotNull
    /* renamed from: getMessageId-3Eiw7ao  reason: not valid java name */
    public final String m403getMessageId3Eiw7ao() {
        return this.messageId;
    }

    public final String getObscure() {
        return this.obscure;
    }

    public final Boolean getObscureAwaitingScan() {
        return this.obscureAwaitingScan;
    }

    public final Boolean getObscureHideControls() {
        return this.obscureHideControls;
    }

    public final Boolean getObscureIsOpaque() {
        return this.obscureIsOpaque;
    }

    @Override // com.discord.chat.bridge.spoiler.SpoilerableData
    public String getObscureOrNull() {
        return this.obscureOrNull;
    }

    /* renamed from: getParentChannelId-o4g7jtM  reason: not valid java name */
    public final long m404getParentChannelIdo4g7jtM() {
        return this.parentChannelId;
    }

    public final boolean getShouldSpoiler() {
        return this.shouldSpoiler;
    }

    public final String getSpoiler() {
        return this.spoiler;
    }

    @Override // com.discord.chat.bridge.spoiler.SpoilerableData
    public String getSpoilerOrNull() {
        return this.spoilerOrNull;
    }

    public final String getSubtitle() {
        return this.subtitle;
    }

    /* renamed from: getThreadId-o4g7jtM  reason: not valid java name */
    public final long m405getThreadIdo4g7jtM() {
        return this.threadId;
    }

    @NotNull
    public final String getTitle() {
        return this.title;
    }

    public final Boolean getVerifyAge() {
        return this.verifyAge;
    }

    public int hashCode() {
        int m1062hashCodeimpl = ((((((((((((((ChannelId.m1062hashCodeimpl(this.parentChannelId) * 31) + ChannelId.m1062hashCodeimpl(this.threadId)) * 31) + MessageId.m1088hashCodeimpl(this.messageId)) * 31) + GuildId.m1075hashCodeimpl(this.guildId)) * 31) + this.title.hashCode()) * 31) + this.ctaText.hashCode()) * 31) + Integer.hashCode(this.ctaButtonColor)) * 31) + this.footer.hashCode()) * 31;
        String str = this.subtitle;
        int hashCode = (m1062hashCodeimpl + (str == null ? 0 : str.hashCode())) * 31;
        String str2 = this.coverImage;
        int hashCode2 = (hashCode + (str2 == null ? 0 : str2.hashCode())) * 31;
        String str3 = this.blurredCoverImage;
        int hashCode3 = (hashCode2 + (str3 == null ? 0 : str3.hashCode())) * 31;
        String str4 = this.coverImageOverlayText;
        int hashCode4 = (hashCode3 + (str4 == null ? 0 : str4.hashCode())) * 31;
        String str5 = this.backgroundImage;
        int hashCode5 = (hashCode4 + (str5 == null ? 0 : str5.hashCode())) * 31;
        String str6 = this.spoiler;
        int hashCode6 = (hashCode5 + (str6 == null ? 0 : str6.hashCode())) * 31;
        String str7 = this.obscure;
        int hashCode7 = (hashCode6 + (str7 == null ? 0 : str7.hashCode())) * 31;
        Boolean bool = this.obscureAwaitingScan;
        int hashCode8 = (((hashCode7 + (bool == null ? 0 : bool.hashCode())) * 31) + Boolean.hashCode(this.shouldSpoiler)) * 31;
        Boolean bool2 = this.obscureHideControls;
        int hashCode9 = (hashCode8 + (bool2 == null ? 0 : bool2.hashCode())) * 31;
        Boolean bool3 = this.obscureIsOpaque;
        int hashCode10 = (hashCode9 + (bool3 == null ? 0 : bool3.hashCode())) * 31;
        Boolean bool4 = this.verifyAge;
        return hashCode10 + (bool4 != null ? bool4.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        String m1064toStringimpl = ChannelId.m1064toStringimpl(this.parentChannelId);
        String m1064toStringimpl2 = ChannelId.m1064toStringimpl(this.threadId);
        String m1090toStringimpl = MessageId.m1090toStringimpl(this.messageId);
        String m1077toStringimpl = GuildId.m1077toStringimpl(this.guildId);
        String str = this.title;
        String str2 = this.ctaText;
        int i10 = this.ctaButtonColor;
        StructurableText structurableText = this.footer;
        String str3 = this.subtitle;
        String str4 = this.coverImage;
        String str5 = this.blurredCoverImage;
        String str6 = this.coverImageOverlayText;
        String str7 = this.backgroundImage;
        String str8 = this.spoiler;
        String str9 = this.obscure;
        Boolean bool = this.obscureAwaitingScan;
        boolean z10 = this.shouldSpoiler;
        Boolean bool2 = this.obscureHideControls;
        Boolean bool3 = this.obscureIsOpaque;
        Boolean bool4 = this.verifyAge;
        return "PostPreviewEmbed(parentChannelId=" + m1064toStringimpl + ", threadId=" + m1064toStringimpl2 + ", messageId=" + m1090toStringimpl + ", guildId=" + m1077toStringimpl + ", title=" + str + ", ctaText=" + str2 + ", ctaButtonColor=" + i10 + ", footer=" + structurableText + ", subtitle=" + str3 + ", coverImage=" + str4 + ", blurredCoverImage=" + str5 + ", coverImageOverlayText=" + str6 + ", backgroundImage=" + str7 + ", spoiler=" + str8 + ", obscure=" + str9 + ", obscureAwaitingScan=" + bool + ", shouldSpoiler=" + z10 + ", obscureHideControls=" + bool2 + ", obscureIsOpaque=" + bool3 + ", verifyAge=" + bool4 + ")";
    }

    public /* synthetic */ PostPreviewEmbed(long j10, long j11, String str, long j12, String str2, String str3, int i10, StructurableText structurableText, String str4, String str5, String str6, String str7, String str8, String str9, String str10, Boolean bool, boolean z10, Boolean bool2, Boolean bool3, Boolean bool4, DefaultConstructorMarker defaultConstructorMarker) {
        this(j10, j11, str, j12, str2, str3, i10, structurableText, str4, str5, str6, str7, str8, str9, str10, bool, z10, bool2, bool3, bool4);
    }

    private /* synthetic */ PostPreviewEmbed(int i10, ChannelId channelId, ChannelId channelId2, String str, GuildId guildId, String str2, String str3, int i11, StructurableText structurableText, String str4, String str5, String str6, String str7, String str8, String str9, String str10, Boolean bool, boolean z10, Boolean bool2, Boolean bool3, Boolean bool4, String str11, String str12, SerializationConstructorMarker serializationConstructorMarker) {
        String str13;
        if (255 != (i10 & SetSpanOperation.SPAN_MAX_PRIORITY)) {
            v1.b(i10, SetSpanOperation.SPAN_MAX_PRIORITY, PostPreviewEmbed$$serializer.INSTANCE.getDescriptor());
        }
        this.parentChannelId = channelId.m1066unboximpl();
        this.threadId = channelId2.m1066unboximpl();
        this.messageId = str;
        this.guildId = guildId.m1079unboximpl();
        this.title = str2;
        this.ctaText = str3;
        this.ctaButtonColor = i11;
        this.footer = structurableText;
        String str14 = null;
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 0) {
            this.subtitle = null;
        } else {
            this.subtitle = str4;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 0) {
            this.coverImage = null;
        } else {
            this.coverImage = str5;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 0) {
            this.blurredCoverImage = null;
        } else {
            this.blurredCoverImage = str6;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) == 0) {
            this.coverImageOverlayText = null;
        } else {
            this.coverImageOverlayText = str7;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 0) {
            this.backgroundImage = null;
        } else {
            this.backgroundImage = str8;
        }
        if ((i10 & 8192) == 0) {
            this.spoiler = null;
        } else {
            this.spoiler = str9;
        }
        if ((i10 & 16384) == 0) {
            this.obscure = null;
        } else {
            this.obscure = str10;
        }
        if ((32768 & i10) == 0) {
            this.obscureAwaitingScan = null;
        } else {
            this.obscureAwaitingScan = bool;
        }
        this.shouldSpoiler = (65536 & i10) == 0 ? false : z10;
        if ((131072 & i10) == 0) {
            this.obscureHideControls = null;
        } else {
            this.obscureHideControls = bool2;
        }
        if ((262144 & i10) == 0) {
            this.obscureIsOpaque = null;
        } else {
            this.obscureIsOpaque = bool3;
        }
        if ((524288 & i10) == 0) {
            this.verifyAge = null;
        } else {
            this.verifyAge = bool4;
        }
        if ((1048576 & i10) == 0) {
            str13 = this.spoiler;
            if (str13 == null || StringsKt.k0(str13)) {
                str13 = null;
            }
        } else {
            str13 = str11;
        }
        this.spoilerOrNull = str13;
        if ((i10 & 2097152) != 0) {
            this.obscureOrNull = str12;
            return;
        }
        String str15 = this.obscure;
        if (str15 != null && !StringsKt.k0(str15)) {
            str14 = str15;
        }
        this.obscureOrNull = str14;
    }

    private PostPreviewEmbed(long j10, long j11, String messageId, long j12, String title, String ctaText, int i10, StructurableText footer, String str, String str2, String str3, String str4, String str5, String str6, String str7, Boolean bool, boolean z10, Boolean bool2, Boolean bool3, Boolean bool4) {
        String str8 = str6;
        Intrinsics.checkNotNullParameter(messageId, "messageId");
        Intrinsics.checkNotNullParameter(title, "title");
        Intrinsics.checkNotNullParameter(ctaText, "ctaText");
        Intrinsics.checkNotNullParameter(footer, "footer");
        this.parentChannelId = j10;
        this.threadId = j11;
        this.messageId = messageId;
        this.guildId = j12;
        this.title = title;
        this.ctaText = ctaText;
        this.ctaButtonColor = i10;
        this.footer = footer;
        this.subtitle = str;
        this.coverImage = str2;
        this.blurredCoverImage = str3;
        this.coverImageOverlayText = str4;
        this.backgroundImage = str5;
        this.spoiler = str8;
        this.obscure = str7;
        this.obscureAwaitingScan = bool;
        this.shouldSpoiler = z10;
        this.obscureHideControls = bool2;
        this.obscureIsOpaque = bool3;
        this.verifyAge = bool4;
        String str9 = null;
        this.spoilerOrNull = (str8 == null || StringsKt.k0(str8)) ? null : str8;
        if (str7 != null && !StringsKt.k0(str7)) {
            str9 = str7;
        }
        this.obscureOrNull = str9;
    }

    public /* synthetic */ PostPreviewEmbed(long j10, long j11, String str, long j12, String str2, String str3, int i10, StructurableText structurableText, String str4, String str5, String str6, String str7, String str8, String str9, String str10, Boolean bool, boolean z10, Boolean bool2, Boolean bool3, Boolean bool4, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(j10, j11, str, j12, str2, str3, i10, structurableText, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str4, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : str5, (i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : str6, (i11 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? null : str7, (i11 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? null : str8, (i11 & 8192) != 0 ? null : str9, (i11 & 16384) != 0 ? null : str10, (32768 & i11) != 0 ? null : bool, (65536 & i11) != 0 ? false : z10, (131072 & i11) != 0 ? null : bool2, (262144 & i11) != 0 ? null : bool3, (i11 & 524288) != 0 ? null : bool4, null);
    }
}
