package com.discord.chat.bridge.rolecolors;

import bt.p0;
import bt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
import ys.m;
@m
@Metadata(d1 = {"\u0000>\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\r\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 &2\u00020\u0001:\u0002%&B'\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0006\u0010\u0007B7\b\u0010\u0012\u0006\u0010\b\u001a\u00020\u0003\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\t\u001a\u0004\u0018\u00010\n¢\u0006\u0004\b\u0006\u0010\u000bJ\t\u0010\u0012\u001a\u00020\u0003HÆ\u0003J\u0010\u0010\u0013\u001a\u0004\u0018\u00010\u0003HÆ\u0003¢\u0006\u0002\u0010\u000fJ\u0010\u0010\u0014\u001a\u0004\u0018\u00010\u0003HÆ\u0003¢\u0006\u0002\u0010\u000fJ0\u0010\u0015\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0003HÆ\u0001¢\u0006\u0002\u0010\u0016J\u0013\u0010\u0017\u001a\u00020\u00182\b\u0010\u0019\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u001a\u001a\u00020\u0003HÖ\u0001J\t\u0010\u001b\u001a\u00020\u001cHÖ\u0001J%\u0010\u001d\u001a\u00020\u001e2\u0006\u0010\u001f\u001a\u00020\u00002\u0006\u0010 \u001a\u00020!2\u0006\u0010\"\u001a\u00020#H\u0001¢\u0006\u0002\b$R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\rR\u0015\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\n\n\u0002\u0010\u0010\u001a\u0004\b\u000e\u0010\u000fR\u0015\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\n\n\u0002\u0010\u0010\u001a\u0004\b\u0011\u0010\u000f¨\u0006'"}, d2 = {"Lcom/discord/chat/bridge/rolecolors/RoleColors;", "", "primaryColor", "", "secondaryColor", "tertiaryColor", "<init>", "(ILjava/lang/Integer;Ljava/lang/Integer;)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(IILjava/lang/Integer;Ljava/lang/Integer;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getPrimaryColor", "()I", "getSecondaryColor", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "getTertiaryColor", "component1", "component2", "component3", "copy", "(ILjava/lang/Integer;Ljava/lang/Integer;)Lcom/discord/chat/bridge/rolecolors/RoleColors;", "equals", "", "other", "hashCode", "toString", "", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class RoleColors {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final int primaryColor;
    private final Integer secondaryColor;
    private final Integer tertiaryColor;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/rolecolors/RoleColors$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/rolecolors/RoleColors;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return RoleColors$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ RoleColors(int i10, int i11, Integer num, Integer num2, SerializationConstructorMarker serializationConstructorMarker) {
        if (1 != (i10 & 1)) {
            v1.b(i10, 1, RoleColors$$serializer.INSTANCE.getDescriptor());
        }
        this.primaryColor = i11;
        if ((i10 & 2) == 0) {
            this.secondaryColor = null;
        } else {
            this.secondaryColor = num;
        }
        if ((i10 & 4) == 0) {
            this.tertiaryColor = null;
        } else {
            this.tertiaryColor = num2;
        }
    }

    public static /* synthetic */ RoleColors copy$default(RoleColors roleColors, int i10, Integer num, Integer num2, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            i10 = roleColors.primaryColor;
        }
        if ((i11 & 2) != 0) {
            num = roleColors.secondaryColor;
        }
        if ((i11 & 4) != 0) {
            num2 = roleColors.tertiaryColor;
        }
        return roleColors.copy(i10, num, num2);
    }

    public static final /* synthetic */ void write$Self$chat_release(RoleColors roleColors, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.v(serialDescriptor, 0, roleColors.primaryColor);
        if (compositeEncoder.y(serialDescriptor, 1) || roleColors.secondaryColor != null) {
            compositeEncoder.B(serialDescriptor, 1, p0.f7678a, roleColors.secondaryColor);
        }
        if (compositeEncoder.y(serialDescriptor, 2) || roleColors.tertiaryColor != null) {
            compositeEncoder.B(serialDescriptor, 2, p0.f7678a, roleColors.tertiaryColor);
        }
    }

    public final int component1() {
        return this.primaryColor;
    }

    public final Integer component2() {
        return this.secondaryColor;
    }

    public final Integer component3() {
        return this.tertiaryColor;
    }

    @NotNull
    public final RoleColors copy(int i10, Integer num, Integer num2) {
        return new RoleColors(i10, num, num2);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof RoleColors) {
            RoleColors roleColors = (RoleColors) obj;
            return this.primaryColor == roleColors.primaryColor && Intrinsics.areEqual(this.secondaryColor, roleColors.secondaryColor) && Intrinsics.areEqual(this.tertiaryColor, roleColors.tertiaryColor);
        }
        return false;
    }

    public final int getPrimaryColor() {
        return this.primaryColor;
    }

    public final Integer getSecondaryColor() {
        return this.secondaryColor;
    }

    public final Integer getTertiaryColor() {
        return this.tertiaryColor;
    }

    public int hashCode() {
        int hashCode = Integer.hashCode(this.primaryColor) * 31;
        Integer num = this.secondaryColor;
        int hashCode2 = (hashCode + (num == null ? 0 : num.hashCode())) * 31;
        Integer num2 = this.tertiaryColor;
        return hashCode2 + (num2 != null ? num2.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        int i10 = this.primaryColor;
        Integer num = this.secondaryColor;
        Integer num2 = this.tertiaryColor;
        return "RoleColors(primaryColor=" + i10 + ", secondaryColor=" + num + ", tertiaryColor=" + num2 + ")";
    }

    public RoleColors(int i10, Integer num, Integer num2) {
        this.primaryColor = i10;
        this.secondaryColor = num;
        this.tertiaryColor = num2;
    }

    public /* synthetic */ RoleColors(int i10, Integer num, Integer num2, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(i10, (i11 & 2) != 0 ? null : num, (i11 & 4) != 0 ? null : num2);
    }
}
