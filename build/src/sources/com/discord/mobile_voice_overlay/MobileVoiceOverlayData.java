package com.discord.mobile_voice_overlay;

import com.discord.notifications.renderer.NotificationRenderer;
import com.discord.primitives.ChannelId;
import com.discord.primitives.ChannelId$$serializer;
import com.discord.primitives.GuildId;
import com.discord.primitives.GuildId$$serializer;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.List;
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
@Metadata(d1 = {"\u0000d\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b)\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 L2\u00020\u0001:\u0002KLBm\u0012\f\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0006\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\b\u0012\u0006\u0010\t\u001a\u00020\n\u0012\u0006\u0010\u000b\u001a\u00020\f\u0012\u0006\u0010\r\u001a\u00020\f\u0012\u0006\u0010\u000e\u001a\u00020\u000f\u0012\u0006\u0010\u0010\u001a\u00020\u000f\u0012\u0006\u0010\u0011\u001a\u00020\u0012\u0012\u0006\u0010\u0013\u001a\u00020\u000f\u0012\f\u0010\u0014\u001a\b\u0012\u0004\u0012\u00020\u00150\u0003¢\u0006\u0004\b\u0016\u0010\u0017B\u008d\u0001\b\u0010\u0012\u0006\u0010\u0018\u001a\u00020\u0006\u0012\u000e\u0010\u0002\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0006\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\b\u0012\b\u0010\t\u001a\u0004\u0018\u00010\n\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\f\u0012\b\u0010\r\u001a\u0004\u0018\u00010\f\u0012\u0006\u0010\u000e\u001a\u00020\u000f\u0012\u0006\u0010\u0010\u001a\u00020\u000f\u0012\b\u0010\u0011\u001a\u0004\u0018\u00010\u0012\u0012\u0006\u0010\u0013\u001a\u00020\u000f\u0012\u000e\u0010\u0014\u001a\n\u0012\u0004\u0012\u00020\u0015\u0018\u00010\u0003\u0012\b\u0010\u0019\u001a\u0004\u0018\u00010\u001a¢\u0006\u0004\b\u0016\u0010\u001bJ\u000f\u0010/\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003HÆ\u0003J\t\u00100\u001a\u00020\u0006HÆ\u0003J\u0010\u00101\u001a\u0004\u0018\u00010\bHÆ\u0003¢\u0006\u0002\b2J\u0010\u00103\u001a\u00020\nHÆ\u0003¢\u0006\u0004\b4\u0010#J\t\u00105\u001a\u00020\fHÆ\u0003J\t\u00106\u001a\u00020\fHÆ\u0003J\t\u00107\u001a\u00020\u000fHÆ\u0003J\t\u00108\u001a\u00020\u000fHÆ\u0003J\t\u00109\u001a\u00020\u0012HÆ\u0003J\t\u0010:\u001a\u00020\u000fHÆ\u0003J\u000f\u0010;\u001a\b\u0012\u0004\u0012\u00020\u00150\u0003HÆ\u0003J\u008c\u0001\u0010<\u001a\u00020\u00002\u000e\b\u0002\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00040\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00062\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\b2\b\b\u0002\u0010\t\u001a\u00020\n2\b\b\u0002\u0010\u000b\u001a\u00020\f2\b\b\u0002\u0010\r\u001a\u00020\f2\b\b\u0002\u0010\u000e\u001a\u00020\u000f2\b\b\u0002\u0010\u0010\u001a\u00020\u000f2\b\b\u0002\u0010\u0011\u001a\u00020\u00122\b\b\u0002\u0010\u0013\u001a\u00020\u000f2\u000e\b\u0002\u0010\u0014\u001a\b\u0012\u0004\u0012\u00020\u00150\u0003HÆ\u0001¢\u0006\u0004\b=\u0010>J\u0013\u0010?\u001a\u00020\u000f2\b\u0010@\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010A\u001a\u00020\u0006HÖ\u0001J\t\u0010B\u001a\u00020\fHÖ\u0001J%\u0010C\u001a\u00020D2\u0006\u0010E\u001a\u00020\u00002\u0006\u0010F\u001a\u00020G2\u0006\u0010H\u001a\u00020IH\u0001¢\u0006\u0002\bJR\u0017\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001c\u0010\u001dR\u0011\u0010\u0005\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b\u001e\u0010\u001fR\u0013\u0010\u0007\u001a\u0004\u0018\u00010\b¢\u0006\b\n\u0000\u001a\u0004\b \u0010!R\u0013\u0010\t\u001a\u00020\n¢\u0006\n\n\u0002\u0010$\u001a\u0004\b\"\u0010#R\u0011\u0010\u000b\u001a\u00020\f¢\u0006\b\n\u0000\u001a\u0004\b%\u0010&R\u0011\u0010\r\u001a\u00020\f¢\u0006\b\n\u0000\u001a\u0004\b'\u0010&R\u0011\u0010\u000e\u001a\u00020\u000f¢\u0006\b\n\u0000\u001a\u0004\b(\u0010)R\u0011\u0010\u0010\u001a\u00020\u000f¢\u0006\b\n\u0000\u001a\u0004\b*\u0010)R\u0011\u0010\u0011\u001a\u00020\u0012¢\u0006\b\n\u0000\u001a\u0004\b+\u0010,R\u0011\u0010\u0013\u001a\u00020\u000f¢\u0006\b\n\u0000\u001a\u0004\b-\u0010)R\u0017\u0010\u0014\u001a\b\u0012\u0004\u0012\u00020\u00150\u0003¢\u0006\b\n\u0000\u001a\u0004\b.\u0010\u001d¨\u0006M"}, d2 = {"Lcom/discord/mobile_voice_overlay/MobileVoiceOverlayData;", "", "users", "", "Lcom/discord/mobile_voice_overlay/MobileVoiceOverlayDataUser;", "extraUsers", "", "guildId", "Lcom/discord/primitives/GuildId;", "channelId", "Lcom/discord/primitives/ChannelId;", NotificationRenderer.CHANNEL_NAME, "", "guildName", "deafened", "", "muted", "connectionQuality", "Lcom/discord/mobile_voice_overlay/ConnectionQuality;", "canGenerateInvite", "channelSelectorResults", "Lcom/discord/mobile_voice_overlay/MobileVoiceOverlaySelectorResult;", "<init>", "(Ljava/util/List;ILcom/discord/primitives/GuildId;JLjava/lang/String;Ljava/lang/String;ZZLcom/discord/mobile_voice_overlay/ConnectionQuality;ZLjava/util/List;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/util/List;ILcom/discord/primitives/GuildId;Lcom/discord/primitives/ChannelId;Ljava/lang/String;Ljava/lang/String;ZZLcom/discord/mobile_voice_overlay/ConnectionQuality;ZLjava/util/List;Lkotlinx/serialization/internal/SerializationConstructorMarker;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getUsers", "()Ljava/util/List;", "getExtraUsers", "()I", "getGuildId-qOKuAAo", "()Lcom/discord/primitives/GuildId;", "getChannelId-o4g7jtM", "()J", "J", "getChannelName", "()Ljava/lang/String;", "getGuildName", "getDeafened", "()Z", "getMuted", "getConnectionQuality", "()Lcom/discord/mobile_voice_overlay/ConnectionQuality;", "getCanGenerateInvite", "getChannelSelectorResults", "component1", "component2", "component3", "component3-qOKuAAo", "component4", "component4-o4g7jtM", "component5", "component6", "component7", "component8", "component9", "component10", "component11", "copy", "copy-HeAh3Ug", "(Ljava/util/List;ILcom/discord/primitives/GuildId;JLjava/lang/String;Ljava/lang/String;ZZLcom/discord/mobile_voice_overlay/ConnectionQuality;ZLjava/util/List;)Lcom/discord/mobile_voice_overlay/MobileVoiceOverlayData;", "equals", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$mobile_voice_overlay_release", "$serializer", "Companion", "mobile_voice_overlay_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MobileVoiceOverlayData {
    @NotNull
    private static final Lazy[] $childSerializers;
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final boolean canGenerateInvite;
    private final long channelId;
    @NotNull
    private final String channelName;
    @NotNull
    private final List<MobileVoiceOverlaySelectorResult> channelSelectorResults;
    @NotNull
    private final ConnectionQuality connectionQuality;
    private final boolean deafened;
    private final int extraUsers;
    private final GuildId guildId;
    @NotNull
    private final String guildName;
    private final boolean muted;
    @NotNull
    private final List<MobileVoiceOverlayDataUser> users;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/mobile_voice_overlay/MobileVoiceOverlayData$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/mobile_voice_overlay/MobileVoiceOverlayData;", "mobile_voice_overlay_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return MobileVoiceOverlayData$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    static {
        qr.o oVar = qr.o.f48092e;
        $childSerializers = new Lazy[]{qr.l.b(oVar, new Function0() { // from class: com.discord.mobile_voice_overlay.s
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                KSerializer _childSerializers$_anonymous_;
                _childSerializers$_anonymous_ = MobileVoiceOverlayData._childSerializers$_anonymous_();
                return _childSerializers$_anonymous_;
            }
        }), null, null, null, null, null, null, null, qr.l.b(oVar, new Function0() { // from class: com.discord.mobile_voice_overlay.t
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                KSerializer _childSerializers$_anonymous_$0;
                _childSerializers$_anonymous_$0 = MobileVoiceOverlayData._childSerializers$_anonymous_$0();
                return _childSerializers$_anonymous_$0;
            }
        }), null, qr.l.b(oVar, new Function0() { // from class: com.discord.mobile_voice_overlay.u
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                KSerializer _childSerializers$_anonymous_$1;
                _childSerializers$_anonymous_$1 = MobileVoiceOverlayData._childSerializers$_anonymous_$1();
                return _childSerializers$_anonymous_$1;
            }
        })};
    }

    public /* synthetic */ MobileVoiceOverlayData(int i10, List list, int i11, GuildId guildId, ChannelId channelId, String str, String str2, boolean z10, boolean z11, ConnectionQuality connectionQuality, boolean z12, List list2, SerializationConstructorMarker serializationConstructorMarker, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, list, i11, guildId, channelId, str, str2, z10, z11, connectionQuality, z12, list2, serializationConstructorMarker);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_() {
        return new jt.f(MobileVoiceOverlayDataUser$$serializer.INSTANCE);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_$0() {
        return ConnectionQuality.Companion.serializer();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_$1() {
        return new jt.f(MobileVoiceOverlaySelectorResult$$serializer.INSTANCE);
    }

    /* renamed from: copy-HeAh3Ug$default  reason: not valid java name */
    public static /* synthetic */ MobileVoiceOverlayData m956copyHeAh3Ug$default(MobileVoiceOverlayData mobileVoiceOverlayData, List list, int i10, GuildId guildId, long j10, String str, String str2, boolean z10, boolean z11, ConnectionQuality connectionQuality, boolean z12, List list2, int i11, Object obj) {
        List<MobileVoiceOverlayDataUser> list3 = list;
        if ((i11 & 1) != 0) {
            list3 = mobileVoiceOverlayData.users;
        }
        if ((i11 & 2) != 0) {
            i10 = mobileVoiceOverlayData.extraUsers;
        }
        if ((i11 & 4) != 0) {
            guildId = mobileVoiceOverlayData.guildId;
        }
        if ((i11 & 8) != 0) {
            j10 = mobileVoiceOverlayData.channelId;
        }
        if ((i11 & 16) != 0) {
            str = mobileVoiceOverlayData.channelName;
        }
        if ((i11 & 32) != 0) {
            str2 = mobileVoiceOverlayData.guildName;
        }
        if ((i11 & 64) != 0) {
            z10 = mobileVoiceOverlayData.deafened;
        }
        if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            z11 = mobileVoiceOverlayData.muted;
        }
        if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
            connectionQuality = mobileVoiceOverlayData.connectionQuality;
        }
        if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0) {
            z12 = mobileVoiceOverlayData.canGenerateInvite;
        }
        List<MobileVoiceOverlaySelectorResult> list4 = list2;
        if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0) {
            list4 = mobileVoiceOverlayData.channelSelectorResults;
        }
        boolean z13 = z12;
        List list5 = list4;
        ConnectionQuality connectionQuality2 = connectionQuality;
        boolean z14 = z10;
        String str3 = str;
        long j11 = j10;
        GuildId guildId2 = guildId;
        return mobileVoiceOverlayData.m959copyHeAh3Ug(list3, i10, guildId2, j11, str3, str2, z14, z11, connectionQuality2, z13, list5);
    }

    public static final /* synthetic */ void write$Self$mobile_voice_overlay_release(MobileVoiceOverlayData mobileVoiceOverlayData, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        Lazy[] lazyArr = $childSerializers;
        compositeEncoder.s(serialDescriptor, 0, (ft.o) lazyArr[0].getValue(), mobileVoiceOverlayData.users);
        compositeEncoder.x(serialDescriptor, 1, mobileVoiceOverlayData.extraUsers);
        compositeEncoder.l(serialDescriptor, 2, GuildId$$serializer.INSTANCE, mobileVoiceOverlayData.guildId);
        compositeEncoder.s(serialDescriptor, 3, ChannelId$$serializer.INSTANCE, ChannelId.m1057boximpl(mobileVoiceOverlayData.channelId));
        compositeEncoder.z(serialDescriptor, 4, mobileVoiceOverlayData.channelName);
        compositeEncoder.z(serialDescriptor, 5, mobileVoiceOverlayData.guildName);
        compositeEncoder.y(serialDescriptor, 6, mobileVoiceOverlayData.deafened);
        compositeEncoder.y(serialDescriptor, 7, mobileVoiceOverlayData.muted);
        compositeEncoder.s(serialDescriptor, 8, (ft.o) lazyArr[8].getValue(), mobileVoiceOverlayData.connectionQuality);
        compositeEncoder.y(serialDescriptor, 9, mobileVoiceOverlayData.canGenerateInvite);
        compositeEncoder.s(serialDescriptor, 10, (ft.o) lazyArr[10].getValue(), mobileVoiceOverlayData.channelSelectorResults);
    }

    @NotNull
    public final List<MobileVoiceOverlayDataUser> component1() {
        return this.users;
    }

    public final boolean component10() {
        return this.canGenerateInvite;
    }

    @NotNull
    public final List<MobileVoiceOverlaySelectorResult> component11() {
        return this.channelSelectorResults;
    }

    public final int component2() {
        return this.extraUsers;
    }

    /* renamed from: component3-qOKuAAo  reason: not valid java name */
    public final GuildId m957component3qOKuAAo() {
        return this.guildId;
    }

    /* renamed from: component4-o4g7jtM  reason: not valid java name */
    public final long m958component4o4g7jtM() {
        return this.channelId;
    }

    @NotNull
    public final String component5() {
        return this.channelName;
    }

    @NotNull
    public final String component6() {
        return this.guildName;
    }

    public final boolean component7() {
        return this.deafened;
    }

    public final boolean component8() {
        return this.muted;
    }

    @NotNull
    public final ConnectionQuality component9() {
        return this.connectionQuality;
    }

    @NotNull
    /* renamed from: copy-HeAh3Ug  reason: not valid java name */
    public final MobileVoiceOverlayData m959copyHeAh3Ug(@NotNull List<MobileVoiceOverlayDataUser> users, int i10, GuildId guildId, long j10, @NotNull String channelName, @NotNull String guildName, boolean z10, boolean z11, @NotNull ConnectionQuality connectionQuality, boolean z12, @NotNull List<MobileVoiceOverlaySelectorResult> channelSelectorResults) {
        Intrinsics.checkNotNullParameter(users, "users");
        Intrinsics.checkNotNullParameter(channelName, "channelName");
        Intrinsics.checkNotNullParameter(guildName, "guildName");
        Intrinsics.checkNotNullParameter(connectionQuality, "connectionQuality");
        Intrinsics.checkNotNullParameter(channelSelectorResults, "channelSelectorResults");
        return new MobileVoiceOverlayData(users, i10, guildId, j10, channelName, guildName, z10, z11, connectionQuality, z12, channelSelectorResults, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof MobileVoiceOverlayData) {
            MobileVoiceOverlayData mobileVoiceOverlayData = (MobileVoiceOverlayData) obj;
            return Intrinsics.areEqual(this.users, mobileVoiceOverlayData.users) && this.extraUsers == mobileVoiceOverlayData.extraUsers && Intrinsics.areEqual(this.guildId, mobileVoiceOverlayData.guildId) && ChannelId.m1061equalsimpl0(this.channelId, mobileVoiceOverlayData.channelId) && Intrinsics.areEqual(this.channelName, mobileVoiceOverlayData.channelName) && Intrinsics.areEqual(this.guildName, mobileVoiceOverlayData.guildName) && this.deafened == mobileVoiceOverlayData.deafened && this.muted == mobileVoiceOverlayData.muted && this.connectionQuality == mobileVoiceOverlayData.connectionQuality && this.canGenerateInvite == mobileVoiceOverlayData.canGenerateInvite && Intrinsics.areEqual(this.channelSelectorResults, mobileVoiceOverlayData.channelSelectorResults);
        }
        return false;
    }

    public final boolean getCanGenerateInvite() {
        return this.canGenerateInvite;
    }

    /* renamed from: getChannelId-o4g7jtM  reason: not valid java name */
    public final long m960getChannelIdo4g7jtM() {
        return this.channelId;
    }

    @NotNull
    public final String getChannelName() {
        return this.channelName;
    }

    @NotNull
    public final List<MobileVoiceOverlaySelectorResult> getChannelSelectorResults() {
        return this.channelSelectorResults;
    }

    @NotNull
    public final ConnectionQuality getConnectionQuality() {
        return this.connectionQuality;
    }

    public final boolean getDeafened() {
        return this.deafened;
    }

    public final int getExtraUsers() {
        return this.extraUsers;
    }

    /* renamed from: getGuildId-qOKuAAo  reason: not valid java name */
    public final GuildId m961getGuildIdqOKuAAo() {
        return this.guildId;
    }

    @NotNull
    public final String getGuildName() {
        return this.guildName;
    }

    public final boolean getMuted() {
        return this.muted;
    }

    @NotNull
    public final List<MobileVoiceOverlayDataUser> getUsers() {
        return this.users;
    }

    public int hashCode() {
        int hashCode = ((this.users.hashCode() * 31) + Integer.hashCode(this.extraUsers)) * 31;
        GuildId guildId = this.guildId;
        return ((((((((((((((((hashCode + (guildId == null ? 0 : GuildId.m1075hashCodeimpl(guildId.m1079unboximpl()))) * 31) + ChannelId.m1062hashCodeimpl(this.channelId)) * 31) + this.channelName.hashCode()) * 31) + this.guildName.hashCode()) * 31) + Boolean.hashCode(this.deafened)) * 31) + Boolean.hashCode(this.muted)) * 31) + this.connectionQuality.hashCode()) * 31) + Boolean.hashCode(this.canGenerateInvite)) * 31) + this.channelSelectorResults.hashCode();
    }

    @NotNull
    public String toString() {
        List<MobileVoiceOverlayDataUser> list = this.users;
        int i10 = this.extraUsers;
        GuildId guildId = this.guildId;
        String m1064toStringimpl = ChannelId.m1064toStringimpl(this.channelId);
        String str = this.channelName;
        String str2 = this.guildName;
        boolean z10 = this.deafened;
        boolean z11 = this.muted;
        ConnectionQuality connectionQuality = this.connectionQuality;
        boolean z12 = this.canGenerateInvite;
        List<MobileVoiceOverlaySelectorResult> list2 = this.channelSelectorResults;
        return "MobileVoiceOverlayData(users=" + list + ", extraUsers=" + i10 + ", guildId=" + guildId + ", channelId=" + m1064toStringimpl + ", channelName=" + str + ", guildName=" + str2 + ", deafened=" + z10 + ", muted=" + z11 + ", connectionQuality=" + connectionQuality + ", canGenerateInvite=" + z12 + ", channelSelectorResults=" + list2 + ")";
    }

    public /* synthetic */ MobileVoiceOverlayData(List list, int i10, GuildId guildId, long j10, String str, String str2, boolean z10, boolean z11, ConnectionQuality connectionQuality, boolean z12, List list2, DefaultConstructorMarker defaultConstructorMarker) {
        this(list, i10, guildId, j10, str, str2, z10, z11, connectionQuality, z12, list2);
    }

    private /* synthetic */ MobileVoiceOverlayData(int i10, List list, int i11, GuildId guildId, ChannelId channelId, String str, String str2, boolean z10, boolean z11, ConnectionQuality connectionQuality, boolean z12, List list2, SerializationConstructorMarker serializationConstructorMarker) {
        if (2047 != (i10 & 2047)) {
            v1.b(i10, 2047, MobileVoiceOverlayData$$serializer.INSTANCE.getDescriptor());
        }
        this.users = list;
        this.extraUsers = i11;
        this.guildId = guildId;
        this.channelId = channelId.m1066unboximpl();
        this.channelName = str;
        this.guildName = str2;
        this.deafened = z10;
        this.muted = z11;
        this.connectionQuality = connectionQuality;
        this.canGenerateInvite = z12;
        this.channelSelectorResults = list2;
    }

    private MobileVoiceOverlayData(List<MobileVoiceOverlayDataUser> users, int i10, GuildId guildId, long j10, String channelName, String guildName, boolean z10, boolean z11, ConnectionQuality connectionQuality, boolean z12, List<MobileVoiceOverlaySelectorResult> channelSelectorResults) {
        Intrinsics.checkNotNullParameter(users, "users");
        Intrinsics.checkNotNullParameter(channelName, "channelName");
        Intrinsics.checkNotNullParameter(guildName, "guildName");
        Intrinsics.checkNotNullParameter(connectionQuality, "connectionQuality");
        Intrinsics.checkNotNullParameter(channelSelectorResults, "channelSelectorResults");
        this.users = users;
        this.extraUsers = i10;
        this.guildId = guildId;
        this.channelId = j10;
        this.channelName = channelName;
        this.guildName = guildName;
        this.deafened = z10;
        this.muted = z11;
        this.connectionQuality = connectionQuality;
        this.canGenerateInvite = z12;
        this.channelSelectorResults = channelSelectorResults;
    }
}
