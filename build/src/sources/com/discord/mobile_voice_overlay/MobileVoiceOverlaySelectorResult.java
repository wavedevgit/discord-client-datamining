package com.discord.mobile_voice_overlay;

import at.v1;
import com.discord.notifications.renderer.NotificationRenderer;
import com.discord.primitives.ChannelId;
import com.discord.primitives.ChannelId$$serializer;
import com.discord.primitives.GuildId;
import com.discord.primitives.GuildId$$serializer;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000J\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0014\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 12\u00020\u0001:\u000201B/\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\u0006\u0010\b\u001a\u00020\u0007\u0012\u0006\u0010\t\u001a\u00020\u0007¢\u0006\u0004\b\n\u0010\u000bBM\b\u0010\u0012\u0006\u0010\f\u001a\u00020\r\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\t\u001a\u0004\u0018\u00010\u0007\u0012\b\u0010\u000e\u001a\u0004\u0018\u00010\u000f¢\u0006\u0004\b\n\u0010\u0010J\u0010\u0010\u0019\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b\u001a\u0010\u0012J\u0010\u0010\u001b\u001a\u00020\u0005HÆ\u0003¢\u0006\u0004\b\u001c\u0010\u0012J\t\u0010\u001d\u001a\u00020\u0007HÆ\u0003J\t\u0010\u001e\u001a\u00020\u0007HÆ\u0003J\t\u0010\u001f\u001a\u00020\u0007HÆ\u0003JB\u0010 \u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00072\b\b\u0002\u0010\b\u001a\u00020\u00072\b\b\u0002\u0010\t\u001a\u00020\u0007HÆ\u0001¢\u0006\u0004\b!\u0010\"J\u0013\u0010#\u001a\u00020$2\b\u0010%\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010&\u001a\u00020\rHÖ\u0001J\t\u0010'\u001a\u00020\u0007HÖ\u0001J%\u0010(\u001a\u00020)2\u0006\u0010*\u001a\u00020\u00002\u0006\u0010+\u001a\u00020,2\u0006\u0010-\u001a\u00020.H\u0001¢\u0006\u0002\b/R\u0013\u0010\u0002\u001a\u00020\u0003¢\u0006\n\n\u0002\u0010\u0013\u001a\u0004\b\u0011\u0010\u0012R\u0013\u0010\u0004\u001a\u00020\u0005¢\u0006\n\n\u0002\u0010\u0013\u001a\u0004\b\u0014\u0010\u0012R\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0016R\u0011\u0010\b\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0017\u0010\u0016R\u0011\u0010\t\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0016¨\u00062"}, d2 = {"Lcom/discord/mobile_voice_overlay/MobileVoiceOverlaySelectorResult;", "", "guildId", "Lcom/discord/primitives/GuildId;", "channelId", "Lcom/discord/primitives/ChannelId;", NotificationRenderer.CHANNEL_NAME, "", "guildName", "categoryName", "<init>", "(JJLjava/lang/String;Ljava/lang/String;Ljava/lang/String;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILcom/discord/primitives/GuildId;Lcom/discord/primitives/ChannelId;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getGuildId-fYKD8eg", "()J", "J", "getChannelId-o4g7jtM", "getChannelName", "()Ljava/lang/String;", "getGuildName", "getCategoryName", "component1", "component1-fYKD8eg", "component2", "component2-o4g7jtM", "component3", "component4", "component5", "copy", "copy-c25twaQ", "(JJLjava/lang/String;Ljava/lang/String;Ljava/lang/String;)Lcom/discord/mobile_voice_overlay/MobileVoiceOverlaySelectorResult;", "equals", "", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$mobile_voice_overlay_release", "$serializer", "Companion", "mobile_voice_overlay_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@xs.m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MobileVoiceOverlaySelectorResult {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final String categoryName;
    private final long channelId;
    @NotNull
    private final String channelName;
    private final long guildId;
    @NotNull
    private final String guildName;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/mobile_voice_overlay/MobileVoiceOverlaySelectorResult$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/mobile_voice_overlay/MobileVoiceOverlaySelectorResult;", "mobile_voice_overlay_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return MobileVoiceOverlaySelectorResult$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ MobileVoiceOverlaySelectorResult(int i10, GuildId guildId, ChannelId channelId, String str, String str2, String str3, SerializationConstructorMarker serializationConstructorMarker, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, guildId, channelId, str, str2, str3, serializationConstructorMarker);
    }

    /* renamed from: copy-c25twaQ$default  reason: not valid java name */
    public static /* synthetic */ MobileVoiceOverlaySelectorResult m966copyc25twaQ$default(MobileVoiceOverlaySelectorResult mobileVoiceOverlaySelectorResult, long j10, long j11, String str, String str2, String str3, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            j10 = mobileVoiceOverlaySelectorResult.guildId;
        }
        long j12 = j10;
        if ((i10 & 2) != 0) {
            j11 = mobileVoiceOverlaySelectorResult.channelId;
        }
        long j13 = j11;
        if ((i10 & 4) != 0) {
            str = mobileVoiceOverlaySelectorResult.channelName;
        }
        String str4 = str;
        if ((i10 & 8) != 0) {
            str2 = mobileVoiceOverlaySelectorResult.guildName;
        }
        String str5 = str2;
        if ((i10 & 16) != 0) {
            str3 = mobileVoiceOverlaySelectorResult.categoryName;
        }
        return mobileVoiceOverlaySelectorResult.m969copyc25twaQ(j12, j13, str4, str5, str3);
    }

    public static final /* synthetic */ void write$Self$mobile_voice_overlay_release(MobileVoiceOverlaySelectorResult mobileVoiceOverlaySelectorResult, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.j(serialDescriptor, 0, GuildId$$serializer.INSTANCE, GuildId.m1071boximpl(mobileVoiceOverlaySelectorResult.guildId));
        compositeEncoder.j(serialDescriptor, 1, ChannelId$$serializer.INSTANCE, ChannelId.m1058boximpl(mobileVoiceOverlaySelectorResult.channelId));
        compositeEncoder.y(serialDescriptor, 2, mobileVoiceOverlaySelectorResult.channelName);
        compositeEncoder.y(serialDescriptor, 3, mobileVoiceOverlaySelectorResult.guildName);
        compositeEncoder.y(serialDescriptor, 4, mobileVoiceOverlaySelectorResult.categoryName);
    }

    /* renamed from: component1-fYKD8eg  reason: not valid java name */
    public final long m967component1fYKD8eg() {
        return this.guildId;
    }

    /* renamed from: component2-o4g7jtM  reason: not valid java name */
    public final long m968component2o4g7jtM() {
        return this.channelId;
    }

    @NotNull
    public final String component3() {
        return this.channelName;
    }

    @NotNull
    public final String component4() {
        return this.guildName;
    }

    @NotNull
    public final String component5() {
        return this.categoryName;
    }

    @NotNull
    /* renamed from: copy-c25twaQ  reason: not valid java name */
    public final MobileVoiceOverlaySelectorResult m969copyc25twaQ(long j10, long j11, @NotNull String channelName, @NotNull String guildName, @NotNull String categoryName) {
        Intrinsics.checkNotNullParameter(channelName, "channelName");
        Intrinsics.checkNotNullParameter(guildName, "guildName");
        Intrinsics.checkNotNullParameter(categoryName, "categoryName");
        return new MobileVoiceOverlaySelectorResult(j10, j11, channelName, guildName, categoryName, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof MobileVoiceOverlaySelectorResult) {
            MobileVoiceOverlaySelectorResult mobileVoiceOverlaySelectorResult = (MobileVoiceOverlaySelectorResult) obj;
            return GuildId.m1075equalsimpl0(this.guildId, mobileVoiceOverlaySelectorResult.guildId) && ChannelId.m1062equalsimpl0(this.channelId, mobileVoiceOverlaySelectorResult.channelId) && Intrinsics.areEqual(this.channelName, mobileVoiceOverlaySelectorResult.channelName) && Intrinsics.areEqual(this.guildName, mobileVoiceOverlaySelectorResult.guildName) && Intrinsics.areEqual(this.categoryName, mobileVoiceOverlaySelectorResult.categoryName);
        }
        return false;
    }

    @NotNull
    public final String getCategoryName() {
        return this.categoryName;
    }

    /* renamed from: getChannelId-o4g7jtM  reason: not valid java name */
    public final long m970getChannelIdo4g7jtM() {
        return this.channelId;
    }

    @NotNull
    public final String getChannelName() {
        return this.channelName;
    }

    /* renamed from: getGuildId-fYKD8eg  reason: not valid java name */
    public final long m971getGuildIdfYKD8eg() {
        return this.guildId;
    }

    @NotNull
    public final String getGuildName() {
        return this.guildName;
    }

    public int hashCode() {
        return (((((((GuildId.m1076hashCodeimpl(this.guildId) * 31) + ChannelId.m1063hashCodeimpl(this.channelId)) * 31) + this.channelName.hashCode()) * 31) + this.guildName.hashCode()) * 31) + this.categoryName.hashCode();
    }

    @NotNull
    public String toString() {
        String m1078toStringimpl = GuildId.m1078toStringimpl(this.guildId);
        String m1065toStringimpl = ChannelId.m1065toStringimpl(this.channelId);
        String str = this.channelName;
        String str2 = this.guildName;
        String str3 = this.categoryName;
        return "MobileVoiceOverlaySelectorResult(guildId=" + m1078toStringimpl + ", channelId=" + m1065toStringimpl + ", channelName=" + str + ", guildName=" + str2 + ", categoryName=" + str3 + ")";
    }

    public /* synthetic */ MobileVoiceOverlaySelectorResult(long j10, long j11, String str, String str2, String str3, DefaultConstructorMarker defaultConstructorMarker) {
        this(j10, j11, str, str2, str3);
    }

    private /* synthetic */ MobileVoiceOverlaySelectorResult(int i10, GuildId guildId, ChannelId channelId, String str, String str2, String str3, SerializationConstructorMarker serializationConstructorMarker) {
        if (31 != (i10 & 31)) {
            v1.b(i10, 31, MobileVoiceOverlaySelectorResult$$serializer.INSTANCE.getDescriptor());
        }
        this.guildId = guildId.m1080unboximpl();
        this.channelId = channelId.m1067unboximpl();
        this.channelName = str;
        this.guildName = str2;
        this.categoryName = str3;
    }

    private MobileVoiceOverlaySelectorResult(long j10, long j11, String channelName, String guildName, String categoryName) {
        Intrinsics.checkNotNullParameter(channelName, "channelName");
        Intrinsics.checkNotNullParameter(guildName, "guildName");
        Intrinsics.checkNotNullParameter(categoryName, "categoryName");
        this.guildId = j10;
        this.channelId = j11;
        this.channelName = channelName;
        this.guildName = guildName;
        this.categoryName = categoryName;
    }
}
