package com.discord.media_player.reactevents;

import com.discord.media_player.MediaSource;
import com.discord.primitives.MessageId;
import com.discord.primitives.MessageId$$serializer;
import com.facebook.react.devsupport.StackTraceHelper;
import ft.m;
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
@m
@Metadata(d1 = {"\u0000F\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0014\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 /2\u00020\u0001:\u0002/0B9\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t¢\u0006\u0004\b\n\u0010\u000bBM\b\u0010\u0012\u0006\u0010\f\u001a\u00020\t\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\t\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u000e¢\u0006\u0004\b\n\u0010\u000fJ\u000b\u0010\u0019\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u001a\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010\u001b\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0012\u0010\u001c\u001a\u0004\u0018\u00010\u0007HÆ\u0003¢\u0006\u0004\b\u001d\u0010\u0011J\u0010\u0010\u001e\u001a\u0004\u0018\u00010\tHÆ\u0003¢\u0006\u0002\u0010\u0017JL\u0010\u001f\u001a\u00020\u00002\n\b\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u00072\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\tHÆ\u0001¢\u0006\u0004\b \u0010!J\u0013\u0010\"\u001a\u00020#2\b\u0010$\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010%\u001a\u00020\tHÖ\u0001J\t\u0010&\u001a\u00020\u0003HÖ\u0001J%\u0010'\u001a\u00020(2\u0006\u0010)\u001a\u00020\u00002\u0006\u0010*\u001a\u00020+2\u0006\u0010,\u001a\u00020-H\u0001¢\u0006\u0002\b.R\u0013\u0010\u0002\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u0011R\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0011R\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0011R\u0015\u0010\u0006\u001a\u0004\u0018\u00010\u0007¢\u0006\n\n\u0002\u0010\u0015\u001a\u0004\b\u0014\u0010\u0011R\u0015\u0010\b\u001a\u0004\u0018\u00010\t¢\u0006\n\n\u0002\u0010\u0018\u001a\u0004\b\u0016\u0010\u0017¨\u00061"}, d2 = {"Lcom/discord/media_player/reactevents/MediaPlayerPlaybackSource;", "", StackTraceHelper.ID_KEY, "", "assetUrl", "channelId", "messageId", "Lcom/discord/primitives/MessageId;", "attachmentIndex", "", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Lkotlinx/serialization/internal/SerializationConstructorMarker;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getId", "()Ljava/lang/String;", "getAssetUrl", "getChannelId", "getMessageId-N_6c4I0", "Ljava/lang/String;", "getAttachmentIndex", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "component1", "component2", "component3", "component4", "component4-N_6c4I0", "component5", "copy", "copy-ElQ7df0", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/Integer;)Lcom/discord/media_player/reactevents/MediaPlayerPlaybackSource;", "equals", "", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$media_player_release", "Companion", "$serializer", "media_player_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MediaPlayerPlaybackSource {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final String assetUrl;
    private final Integer attachmentIndex;
    private final String channelId;

    /* renamed from: id  reason: collision with root package name */
    private final String f9466id;
    private final String messageId;

    @Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u000e\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007J\n\u0010\b\u001a\u00020\t*\u00020\u0007J\f\u0010\n\u001a\b\u0012\u0004\u0012\u00020\u00050\u000b¨\u0006\f"}, d2 = {"Lcom/discord/media_player/reactevents/MediaPlayerPlaybackSource$Companion;", "", "<init>", "()V", "fromMediaSource", "Lcom/discord/media_player/reactevents/MediaPlayerPlaybackSource;", "mediaSource", "Lcom/discord/media_player/MediaSource;", "createId", "", "serializer", "Lkotlinx/serialization/KSerializer;", "media_player_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final String createId(@NotNull MediaSource mediaSource) {
            String m1090toStringimpl;
            int i10;
            Intrinsics.checkNotNullParameter(mediaSource, "<this>");
            String m949getMessageIdN_6c4I0 = mediaSource.m949getMessageIdN_6c4I0();
            if (m949getMessageIdN_6c4I0 == null) {
                m1090toStringimpl = "null";
            } else {
                m1090toStringimpl = MessageId.m1090toStringimpl(m949getMessageIdN_6c4I0);
            }
            Integer index = mediaSource.getIndex();
            String sourceUrl = mediaSource.getSourceUrl();
            if (sourceUrl != null) {
                i10 = sourceUrl.hashCode();
            } else {
                i10 = 0;
            }
            return m1090toStringimpl + "." + index + ":" + i10;
        }

        @NotNull
        public final MediaPlayerPlaybackSource fromMediaSource(@NotNull MediaSource mediaSource) {
            Intrinsics.checkNotNullParameter(mediaSource, "mediaSource");
            return new MediaPlayerPlaybackSource(MediaPlayerPlaybackSource.Companion.createId(mediaSource), mediaSource.getSourceUrl(), String.valueOf(mediaSource.m948getChannelIdqMVnFVQ()), mediaSource.m949getMessageIdN_6c4I0(), mediaSource.getIndex(), null);
        }

        @NotNull
        public final KSerializer serializer() {
            return MediaPlayerPlaybackSource$$serializer.INSTANCE;
        }

        private Companion() {
        }
    }

    public /* synthetic */ MediaPlayerPlaybackSource(int i10, String str, String str2, String str3, String str4, Integer num, SerializationConstructorMarker serializationConstructorMarker, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, str, str2, str3, str4, num, serializationConstructorMarker);
    }

    /* renamed from: copy-ElQ7df0$default  reason: not valid java name */
    public static /* synthetic */ MediaPlayerPlaybackSource m950copyElQ7df0$default(MediaPlayerPlaybackSource mediaPlayerPlaybackSource, String str, String str2, String str3, String str4, Integer num, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = mediaPlayerPlaybackSource.f9466id;
        }
        if ((i10 & 2) != 0) {
            str2 = mediaPlayerPlaybackSource.assetUrl;
        }
        if ((i10 & 4) != 0) {
            str3 = mediaPlayerPlaybackSource.channelId;
        }
        if ((i10 & 8) != 0) {
            str4 = mediaPlayerPlaybackSource.messageId;
        }
        if ((i10 & 16) != 0) {
            num = mediaPlayerPlaybackSource.attachmentIndex;
        }
        Integer num2 = num;
        String str5 = str3;
        return mediaPlayerPlaybackSource.m952copyElQ7df0(str, str2, str5, str4, num2);
    }

    public static final /* synthetic */ void write$Self$media_player_release(MediaPlayerPlaybackSource mediaPlayerPlaybackSource, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        MessageId messageId;
        n2 n2Var = n2.f31089a;
        compositeEncoder.l(serialDescriptor, 0, n2Var, mediaPlayerPlaybackSource.f9466id);
        compositeEncoder.l(serialDescriptor, 1, n2Var, mediaPlayerPlaybackSource.assetUrl);
        compositeEncoder.l(serialDescriptor, 2, n2Var, mediaPlayerPlaybackSource.channelId);
        MessageId$$serializer messageId$$serializer = MessageId$$serializer.INSTANCE;
        String str = mediaPlayerPlaybackSource.messageId;
        if (str != null) {
            messageId = MessageId.m1083boximpl(str);
        } else {
            messageId = null;
        }
        compositeEncoder.l(serialDescriptor, 3, messageId$$serializer, messageId);
        compositeEncoder.l(serialDescriptor, 4, p0.f31105a, mediaPlayerPlaybackSource.attachmentIndex);
    }

    public final String component1() {
        return this.f9466id;
    }

    public final String component2() {
        return this.assetUrl;
    }

    public final String component3() {
        return this.channelId;
    }

    /* renamed from: component4-N_6c4I0  reason: not valid java name */
    public final String m951component4N_6c4I0() {
        return this.messageId;
    }

    public final Integer component5() {
        return this.attachmentIndex;
    }

    @NotNull
    /* renamed from: copy-ElQ7df0  reason: not valid java name */
    public final MediaPlayerPlaybackSource m952copyElQ7df0(String str, String str2, String str3, String str4, Integer num) {
        return new MediaPlayerPlaybackSource(str, str2, str3, str4, num, null);
    }

    public boolean equals(Object obj) {
        boolean m1087equalsimpl0;
        if (this == obj) {
            return true;
        }
        if (obj instanceof MediaPlayerPlaybackSource) {
            MediaPlayerPlaybackSource mediaPlayerPlaybackSource = (MediaPlayerPlaybackSource) obj;
            if (Intrinsics.areEqual(this.f9466id, mediaPlayerPlaybackSource.f9466id) && Intrinsics.areEqual(this.assetUrl, mediaPlayerPlaybackSource.assetUrl) && Intrinsics.areEqual(this.channelId, mediaPlayerPlaybackSource.channelId)) {
                String str = this.messageId;
                String str2 = mediaPlayerPlaybackSource.messageId;
                if (str == null) {
                    if (str2 == null) {
                        m1087equalsimpl0 = true;
                    }
                    m1087equalsimpl0 = false;
                } else {
                    if (str2 != null) {
                        m1087equalsimpl0 = MessageId.m1087equalsimpl0(str, str2);
                    }
                    m1087equalsimpl0 = false;
                }
                return m1087equalsimpl0 && Intrinsics.areEqual(this.attachmentIndex, mediaPlayerPlaybackSource.attachmentIndex);
            }
            return false;
        }
        return false;
    }

    public final String getAssetUrl() {
        return this.assetUrl;
    }

    public final Integer getAttachmentIndex() {
        return this.attachmentIndex;
    }

    public final String getChannelId() {
        return this.channelId;
    }

    public final String getId() {
        return this.f9466id;
    }

    /* renamed from: getMessageId-N_6c4I0  reason: not valid java name */
    public final String m953getMessageIdN_6c4I0() {
        return this.messageId;
    }

    public int hashCode() {
        String str = this.f9466id;
        int hashCode = (str == null ? 0 : str.hashCode()) * 31;
        String str2 = this.assetUrl;
        int hashCode2 = (hashCode + (str2 == null ? 0 : str2.hashCode())) * 31;
        String str3 = this.channelId;
        int hashCode3 = (hashCode2 + (str3 == null ? 0 : str3.hashCode())) * 31;
        String str4 = this.messageId;
        int m1088hashCodeimpl = (hashCode3 + (str4 == null ? 0 : MessageId.m1088hashCodeimpl(str4))) * 31;
        Integer num = this.attachmentIndex;
        return m1088hashCodeimpl + (num != null ? num.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        String str = this.f9466id;
        String str2 = this.assetUrl;
        String str3 = this.channelId;
        String str4 = this.messageId;
        String m1090toStringimpl = str4 == null ? "null" : MessageId.m1090toStringimpl(str4);
        Integer num = this.attachmentIndex;
        return "MediaPlayerPlaybackSource(id=" + str + ", assetUrl=" + str2 + ", channelId=" + str3 + ", messageId=" + m1090toStringimpl + ", attachmentIndex=" + num + ")";
    }

    public /* synthetic */ MediaPlayerPlaybackSource(String str, String str2, String str3, String str4, Integer num, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, str2, str3, str4, num);
    }

    private /* synthetic */ MediaPlayerPlaybackSource(int i10, String str, String str2, String str3, String str4, Integer num, SerializationConstructorMarker serializationConstructorMarker) {
        if (31 != (i10 & 31)) {
            v1.b(i10, 31, MediaPlayerPlaybackSource$$serializer.INSTANCE.getDescriptor());
        }
        this.f9466id = str;
        this.assetUrl = str2;
        this.channelId = str3;
        this.messageId = str4;
        this.attachmentIndex = num;
    }

    private MediaPlayerPlaybackSource(String str, String str2, String str3, String str4, Integer num) {
        this.f9466id = str;
        this.assetUrl = str2;
        this.channelId = str3;
        this.messageId = str4;
        this.attachmentIndex = num;
    }
}
