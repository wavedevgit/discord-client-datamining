package com.discord.mobile_voice_overlay;

import com.discord.primitives.UserId;
import com.discord.primitives.UserId$$serializer;
import dt.n2;
import dt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@at.m
@Metadata(d1 = {"\u0000B\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0017\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 .2\u00020\u0001:\u0002-.B)\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\u0006\u0010\b\u001a\u00020\t¢\u0006\u0004\b\n\u0010\u000bB?\b\u0010\u0012\u0006\u0010\f\u001a\u00020\t\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u0012\u0006\u0010\b\u001a\u00020\t\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u000e¢\u0006\u0004\b\n\u0010\u000fJ\u0010\u0010\u0019\u001a\u00020\u0003HÆ\u0003¢\u0006\u0004\b\u001a\u0010\u0011J\u000b\u0010\u001b\u001a\u0004\u0018\u00010\u0005HÆ\u0003J\t\u0010\u001c\u001a\u00020\u0007HÆ\u0003J\t\u0010\u001d\u001a\u00020\tHÆ\u0003J:\u0010\u001e\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00072\b\b\u0002\u0010\b\u001a\u00020\tHÆ\u0001¢\u0006\u0004\b\u001f\u0010 J\u0013\u0010!\u001a\u00020\u00072\b\u0010\"\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010#\u001a\u00020\tHÖ\u0001J\t\u0010$\u001a\u00020\u0005HÖ\u0001J%\u0010%\u001a\u00020&2\u0006\u0010'\u001a\u00020\u00002\u0006\u0010(\u001a\u00020)2\u0006\u0010*\u001a\u00020+H\u0001¢\u0006\u0002\b,R\u0013\u0010\u0002\u001a\u00020\u0003¢\u0006\n\n\u0002\u0010\u0012\u001a\u0004\b\u0010\u0010\u0011R\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0014R\u0011\u0010\u0006\u001a\u00020\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0016R\u0011\u0010\b\u001a\u00020\t¢\u0006\b\n\u0000\u001a\u0004\b\u0017\u0010\u0018¨\u0006/"}, d2 = {"Lcom/discord/mobile_voice_overlay/MobileVoiceOverlayDataUser;", "", "userId", "Lcom/discord/primitives/UserId;", "avatar", "", "speaking", "", "discriminator", "", "<init>", "(JLjava/lang/String;ZILkotlin/jvm/internal/DefaultConstructorMarker;)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILcom/discord/primitives/UserId;Ljava/lang/String;ZILkotlinx/serialization/internal/SerializationConstructorMarker;Lkotlin/jvm/internal/DefaultConstructorMarker;)V", "getUserId-re6GcUE", "()J", "J", "getAvatar", "()Ljava/lang/String;", "getSpeaking", "()Z", "getDiscriminator", "()I", "component1", "component1-re6GcUE", "component2", "component3", "component4", "copy", "copy-ASSxI_0", "(JLjava/lang/String;ZI)Lcom/discord/mobile_voice_overlay/MobileVoiceOverlayDataUser;", "equals", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$mobile_voice_overlay_release", "$serializer", "Companion", "mobile_voice_overlay_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MobileVoiceOverlayDataUser {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final String avatar;
    private final int discriminator;
    private final boolean speaking;
    private final long userId;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/mobile_voice_overlay/MobileVoiceOverlayDataUser$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/mobile_voice_overlay/MobileVoiceOverlayDataUser;", "mobile_voice_overlay_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return MobileVoiceOverlayDataUser$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ MobileVoiceOverlayDataUser(int i10, UserId userId, String str, boolean z10, int i11, SerializationConstructorMarker serializationConstructorMarker, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, userId, str, z10, i11, serializationConstructorMarker);
    }

    /* renamed from: copy-ASSxI_0$default  reason: not valid java name */
    public static /* synthetic */ MobileVoiceOverlayDataUser m964copyASSxI_0$default(MobileVoiceOverlayDataUser mobileVoiceOverlayDataUser, long j10, String str, boolean z10, int i10, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            j10 = mobileVoiceOverlayDataUser.userId;
        }
        long j11 = j10;
        if ((i11 & 2) != 0) {
            str = mobileVoiceOverlayDataUser.avatar;
        }
        String str2 = str;
        if ((i11 & 4) != 0) {
            z10 = mobileVoiceOverlayDataUser.speaking;
        }
        boolean z11 = z10;
        if ((i11 & 8) != 0) {
            i10 = mobileVoiceOverlayDataUser.discriminator;
        }
        return mobileVoiceOverlayDataUser.m966copyASSxI_0(j11, str2, z11, i10);
    }

    public static final /* synthetic */ void write$Self$mobile_voice_overlay_release(MobileVoiceOverlayDataUser mobileVoiceOverlayDataUser, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.D(serialDescriptor, 0, UserId$$serializer.INSTANCE, UserId.m1137boximpl(mobileVoiceOverlayDataUser.userId));
        compositeEncoder.s(serialDescriptor, 1, n2.f20978a, mobileVoiceOverlayDataUser.avatar);
        compositeEncoder.x(serialDescriptor, 2, mobileVoiceOverlayDataUser.speaking);
        compositeEncoder.w(serialDescriptor, 3, mobileVoiceOverlayDataUser.discriminator);
    }

    /* renamed from: component1-re6GcUE  reason: not valid java name */
    public final long m965component1re6GcUE() {
        return this.userId;
    }

    public final String component2() {
        return this.avatar;
    }

    public final boolean component3() {
        return this.speaking;
    }

    public final int component4() {
        return this.discriminator;
    }

    @NotNull
    /* renamed from: copy-ASSxI_0  reason: not valid java name */
    public final MobileVoiceOverlayDataUser m966copyASSxI_0(long j10, String str, boolean z10, int i10) {
        return new MobileVoiceOverlayDataUser(j10, str, z10, i10, null);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof MobileVoiceOverlayDataUser) {
            MobileVoiceOverlayDataUser mobileVoiceOverlayDataUser = (MobileVoiceOverlayDataUser) obj;
            return UserId.m1141equalsimpl0(this.userId, mobileVoiceOverlayDataUser.userId) && Intrinsics.areEqual(this.avatar, mobileVoiceOverlayDataUser.avatar) && this.speaking == mobileVoiceOverlayDataUser.speaking && this.discriminator == mobileVoiceOverlayDataUser.discriminator;
        }
        return false;
    }

    public final String getAvatar() {
        return this.avatar;
    }

    public final int getDiscriminator() {
        return this.discriminator;
    }

    public final boolean getSpeaking() {
        return this.speaking;
    }

    /* renamed from: getUserId-re6GcUE  reason: not valid java name */
    public final long m967getUserIdre6GcUE() {
        return this.userId;
    }

    public int hashCode() {
        int m1142hashCodeimpl = UserId.m1142hashCodeimpl(this.userId) * 31;
        String str = this.avatar;
        return ((((m1142hashCodeimpl + (str == null ? 0 : str.hashCode())) * 31) + Boolean.hashCode(this.speaking)) * 31) + Integer.hashCode(this.discriminator);
    }

    @NotNull
    public String toString() {
        String m1144toStringimpl = UserId.m1144toStringimpl(this.userId);
        String str = this.avatar;
        boolean z10 = this.speaking;
        int i10 = this.discriminator;
        return "MobileVoiceOverlayDataUser(userId=" + m1144toStringimpl + ", avatar=" + str + ", speaking=" + z10 + ", discriminator=" + i10 + ")";
    }

    public /* synthetic */ MobileVoiceOverlayDataUser(long j10, String str, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(j10, str, z10, i10);
    }

    private /* synthetic */ MobileVoiceOverlayDataUser(int i10, UserId userId, String str, boolean z10, int i11, SerializationConstructorMarker serializationConstructorMarker) {
        if (15 != (i10 & 15)) {
            v1.b(i10, 15, MobileVoiceOverlayDataUser$$serializer.INSTANCE.getDescriptor());
        }
        this.userId = userId.m1146unboximpl();
        this.avatar = str;
        this.speaking = z10;
        this.discriminator = i11;
    }

    private MobileVoiceOverlayDataUser(long j10, String str, boolean z10, int i10) {
        this.userId = j10;
        this.avatar = str;
        this.speaking = z10;
        this.discriminator = i10;
    }
}
