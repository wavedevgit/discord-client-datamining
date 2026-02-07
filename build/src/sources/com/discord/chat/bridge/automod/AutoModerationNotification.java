package com.discord.chat.bridge.automod;

import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
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
@Metadata(d1 = {"\u0000>\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\b\n\u0002\b\u0006\n\u0002\u0010\u000b\n\u0002\b\t\n\u0002\u0018\u0002\n\u0002\b'\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 F2\u00020\u0001:\u0002EFB\u008f\u0001\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0003\u0012\u0006\u0010\u0007\u001a\u00020\u0005\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u000b\u001a\u00020\f\u0012\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u000e\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u0005\u0012\n\b\u0002\u0010\u0010\u001a\u0004\u0018\u00010\u0003\u0012\n\b\u0002\u0010\u0011\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0012\u0010\u0013B\u0097\u0001\b\u0010\u0012\u0006\u0010\u0014\u001a\u00020\u0005\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0007\u001a\u00020\u0005\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\t\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u000b\u001a\u00020\f\u0012\b\u0010\r\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u000e\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u000f\u001a\u0004\u0018\u00010\u0005\u0012\b\u0010\u0010\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0011\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0015\u001a\u0004\u0018\u00010\u0016¢\u0006\u0004\b\u0012\u0010\u0017J\t\u0010*\u001a\u00020\u0003HÆ\u0003J\t\u0010+\u001a\u00020\u0005HÆ\u0003J\t\u0010,\u001a\u00020\u0003HÆ\u0003J\t\u0010-\u001a\u00020\u0005HÆ\u0003J\u000b\u0010.\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u0010/\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u00100\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\t\u00101\u001a\u00020\fHÆ\u0003J\u000b\u00102\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u00103\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0010\u00104\u001a\u0004\u0018\u00010\u0005HÆ\u0003¢\u0006\u0002\u0010&J\u000b\u00105\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u000b\u00106\u001a\u0004\u0018\u00010\u0003HÆ\u0003J \u0001\u00107\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00032\b\b\u0002\u0010\u0007\u001a\u00020\u00052\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u000b\u001a\u00020\f2\n\b\u0002\u0010\r\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u000e\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u000f\u001a\u0004\u0018\u00010\u00052\n\b\u0002\u0010\u0010\u001a\u0004\u0018\u00010\u00032\n\b\u0002\u0010\u0011\u001a\u0004\u0018\u00010\u0003HÆ\u0001¢\u0006\u0002\u00108J\u0013\u00109\u001a\u00020\f2\b\u0010:\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010;\u001a\u00020\u0005HÖ\u0001J\t\u0010<\u001a\u00020\u0003HÖ\u0001J%\u0010=\u001a\u00020>2\u0006\u0010?\u001a\u00020\u00002\u0006\u0010@\u001a\u00020A2\u0006\u0010B\u001a\u00020CH\u0001¢\u0006\u0002\bDR\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0019R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u001a\u0010\u001bR\u0011\u0010\u0006\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001c\u0010\u0019R\u0011\u0010\u0007\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u001d\u0010\u001bR\u0013\u0010\b\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001e\u0010\u0019R\u0013\u0010\t\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u001f\u0010\u0019R\u0013\u0010\n\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b \u0010\u0019R\u0011\u0010\u000b\u001a\u00020\f¢\u0006\b\n\u0000\u001a\u0004\b!\u0010\"R\u0013\u0010\r\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b#\u0010\u0019R\u0013\u0010\u000e\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b$\u0010\u0019R\u0015\u0010\u000f\u001a\u0004\u0018\u00010\u0005¢\u0006\n\n\u0002\u0010'\u001a\u0004\b%\u0010&R\u0013\u0010\u0010\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b(\u0010\u0019R\u0013\u0010\u0011\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b)\u0010\u0019¨\u0006G"}, d2 = {"Lcom/discord/chat/bridge/automod/AutoModerationNotification;", "", "header", "", "headerColor", "", "headerIconURL", "headerIconColor", "subtitleLeft", "subtitleRight", "body", "shouldShowActions", "", "enabledByUsername", "enabledByAvatarURL", "enabledByColor", "severity", "startTime", "<init>", "(Ljava/lang/String;ILjava/lang/String;ILjava/lang/String;Ljava/lang/String;Ljava/lang/String;ZLjava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;)V", "seen0", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;ILjava/lang/String;ILjava/lang/String;Ljava/lang/String;Ljava/lang/String;ZLjava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getHeader", "()Ljava/lang/String;", "getHeaderColor", "()I", "getHeaderIconURL", "getHeaderIconColor", "getSubtitleLeft", "getSubtitleRight", "getBody", "getShouldShowActions", "()Z", "getEnabledByUsername", "getEnabledByAvatarURL", "getEnabledByColor", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "getSeverity", "getStartTime", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "component9", "component10", "component11", "component12", "component13", "copy", "(Ljava/lang/String;ILjava/lang/String;ILjava/lang/String;Ljava/lang/String;Ljava/lang/String;ZLjava/lang/String;Ljava/lang/String;Ljava/lang/Integer;Ljava/lang/String;Ljava/lang/String;)Lcom/discord/chat/bridge/automod/AutoModerationNotification;", "equals", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AutoModerationNotification {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private final String body;
    private final String enabledByAvatarURL;
    private final Integer enabledByColor;
    private final String enabledByUsername;
    @NotNull
    private final String header;
    private final int headerColor;
    private final int headerIconColor;
    @NotNull
    private final String headerIconURL;
    private final String severity;
    private final boolean shouldShowActions;
    private final String startTime;
    private final String subtitleLeft;
    private final String subtitleRight;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/automod/AutoModerationNotification$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/automod/AutoModerationNotification;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return AutoModerationNotification$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ AutoModerationNotification(int i10, String str, int i11, String str2, int i12, String str3, String str4, String str5, boolean z10, String str6, String str7, Integer num, String str8, String str9, SerializationConstructorMarker serializationConstructorMarker) {
        if (143 != (i10 & 143)) {
            v1.b(i10, 143, AutoModerationNotification$$serializer.INSTANCE.getDescriptor());
        }
        this.header = str;
        this.headerColor = i11;
        this.headerIconURL = str2;
        this.headerIconColor = i12;
        if ((i10 & 16) == 0) {
            this.subtitleLeft = null;
        } else {
            this.subtitleLeft = str3;
        }
        if ((i10 & 32) == 0) {
            this.subtitleRight = null;
        } else {
            this.subtitleRight = str4;
        }
        if ((i10 & 64) == 0) {
            this.body = null;
        } else {
            this.body = str5;
        }
        this.shouldShowActions = z10;
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 0) {
            this.enabledByUsername = null;
        } else {
            this.enabledByUsername = str6;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 0) {
            this.enabledByAvatarURL = null;
        } else {
            this.enabledByAvatarURL = str7;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 0) {
            this.enabledByColor = null;
        } else {
            this.enabledByColor = num;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) == 0) {
            this.severity = null;
        } else {
            this.severity = str8;
        }
        if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 0) {
            this.startTime = null;
        } else {
            this.startTime = str9;
        }
    }

    public static /* synthetic */ AutoModerationNotification copy$default(AutoModerationNotification autoModerationNotification, String str, int i10, String str2, int i11, String str3, String str4, String str5, boolean z10, String str6, String str7, Integer num, String str8, String str9, int i12, Object obj) {
        if ((i12 & 1) != 0) {
            str = autoModerationNotification.header;
        }
        return autoModerationNotification.copy(str, (i12 & 2) != 0 ? autoModerationNotification.headerColor : i10, (i12 & 4) != 0 ? autoModerationNotification.headerIconURL : str2, (i12 & 8) != 0 ? autoModerationNotification.headerIconColor : i11, (i12 & 16) != 0 ? autoModerationNotification.subtitleLeft : str3, (i12 & 32) != 0 ? autoModerationNotification.subtitleRight : str4, (i12 & 64) != 0 ? autoModerationNotification.body : str5, (i12 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? autoModerationNotification.shouldShowActions : z10, (i12 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? autoModerationNotification.enabledByUsername : str6, (i12 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? autoModerationNotification.enabledByAvatarURL : str7, (i12 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? autoModerationNotification.enabledByColor : num, (i12 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? autoModerationNotification.severity : str8, (i12 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? autoModerationNotification.startTime : str9);
    }

    public static final /* synthetic */ void write$Self$chat_release(AutoModerationNotification autoModerationNotification, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.z(serialDescriptor, 0, autoModerationNotification.header);
        compositeEncoder.x(serialDescriptor, 1, autoModerationNotification.headerColor);
        compositeEncoder.z(serialDescriptor, 2, autoModerationNotification.headerIconURL);
        compositeEncoder.x(serialDescriptor, 3, autoModerationNotification.headerIconColor);
        if (compositeEncoder.A(serialDescriptor, 4) || autoModerationNotification.subtitleLeft != null) {
            compositeEncoder.l(serialDescriptor, 4, n2.f31089a, autoModerationNotification.subtitleLeft);
        }
        if (compositeEncoder.A(serialDescriptor, 5) || autoModerationNotification.subtitleRight != null) {
            compositeEncoder.l(serialDescriptor, 5, n2.f31089a, autoModerationNotification.subtitleRight);
        }
        if (compositeEncoder.A(serialDescriptor, 6) || autoModerationNotification.body != null) {
            compositeEncoder.l(serialDescriptor, 6, n2.f31089a, autoModerationNotification.body);
        }
        compositeEncoder.y(serialDescriptor, 7, autoModerationNotification.shouldShowActions);
        if (compositeEncoder.A(serialDescriptor, 8) || autoModerationNotification.enabledByUsername != null) {
            compositeEncoder.l(serialDescriptor, 8, n2.f31089a, autoModerationNotification.enabledByUsername);
        }
        if (compositeEncoder.A(serialDescriptor, 9) || autoModerationNotification.enabledByAvatarURL != null) {
            compositeEncoder.l(serialDescriptor, 9, n2.f31089a, autoModerationNotification.enabledByAvatarURL);
        }
        if (compositeEncoder.A(serialDescriptor, 10) || autoModerationNotification.enabledByColor != null) {
            compositeEncoder.l(serialDescriptor, 10, p0.f31105a, autoModerationNotification.enabledByColor);
        }
        if (compositeEncoder.A(serialDescriptor, 11) || autoModerationNotification.severity != null) {
            compositeEncoder.l(serialDescriptor, 11, n2.f31089a, autoModerationNotification.severity);
        }
        if (compositeEncoder.A(serialDescriptor, 12) || autoModerationNotification.startTime != null) {
            compositeEncoder.l(serialDescriptor, 12, n2.f31089a, autoModerationNotification.startTime);
        }
    }

    @NotNull
    public final String component1() {
        return this.header;
    }

    public final String component10() {
        return this.enabledByAvatarURL;
    }

    public final Integer component11() {
        return this.enabledByColor;
    }

    public final String component12() {
        return this.severity;
    }

    public final String component13() {
        return this.startTime;
    }

    public final int component2() {
        return this.headerColor;
    }

    @NotNull
    public final String component3() {
        return this.headerIconURL;
    }

    public final int component4() {
        return this.headerIconColor;
    }

    public final String component5() {
        return this.subtitleLeft;
    }

    public final String component6() {
        return this.subtitleRight;
    }

    public final String component7() {
        return this.body;
    }

    public final boolean component8() {
        return this.shouldShowActions;
    }

    public final String component9() {
        return this.enabledByUsername;
    }

    @NotNull
    public final AutoModerationNotification copy(@NotNull String header, int i10, @NotNull String headerIconURL, int i11, String str, String str2, String str3, boolean z10, String str4, String str5, Integer num, String str6, String str7) {
        Intrinsics.checkNotNullParameter(header, "header");
        Intrinsics.checkNotNullParameter(headerIconURL, "headerIconURL");
        return new AutoModerationNotification(header, i10, headerIconURL, i11, str, str2, str3, z10, str4, str5, num, str6, str7);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof AutoModerationNotification) {
            AutoModerationNotification autoModerationNotification = (AutoModerationNotification) obj;
            return Intrinsics.areEqual(this.header, autoModerationNotification.header) && this.headerColor == autoModerationNotification.headerColor && Intrinsics.areEqual(this.headerIconURL, autoModerationNotification.headerIconURL) && this.headerIconColor == autoModerationNotification.headerIconColor && Intrinsics.areEqual(this.subtitleLeft, autoModerationNotification.subtitleLeft) && Intrinsics.areEqual(this.subtitleRight, autoModerationNotification.subtitleRight) && Intrinsics.areEqual(this.body, autoModerationNotification.body) && this.shouldShowActions == autoModerationNotification.shouldShowActions && Intrinsics.areEqual(this.enabledByUsername, autoModerationNotification.enabledByUsername) && Intrinsics.areEqual(this.enabledByAvatarURL, autoModerationNotification.enabledByAvatarURL) && Intrinsics.areEqual(this.enabledByColor, autoModerationNotification.enabledByColor) && Intrinsics.areEqual(this.severity, autoModerationNotification.severity) && Intrinsics.areEqual(this.startTime, autoModerationNotification.startTime);
        }
        return false;
    }

    public final String getBody() {
        return this.body;
    }

    public final String getEnabledByAvatarURL() {
        return this.enabledByAvatarURL;
    }

    public final Integer getEnabledByColor() {
        return this.enabledByColor;
    }

    public final String getEnabledByUsername() {
        return this.enabledByUsername;
    }

    @NotNull
    public final String getHeader() {
        return this.header;
    }

    public final int getHeaderColor() {
        return this.headerColor;
    }

    public final int getHeaderIconColor() {
        return this.headerIconColor;
    }

    @NotNull
    public final String getHeaderIconURL() {
        return this.headerIconURL;
    }

    public final String getSeverity() {
        return this.severity;
    }

    public final boolean getShouldShowActions() {
        return this.shouldShowActions;
    }

    public final String getStartTime() {
        return this.startTime;
    }

    public final String getSubtitleLeft() {
        return this.subtitleLeft;
    }

    public final String getSubtitleRight() {
        return this.subtitleRight;
    }

    public int hashCode() {
        int hashCode = ((((((this.header.hashCode() * 31) + Integer.hashCode(this.headerColor)) * 31) + this.headerIconURL.hashCode()) * 31) + Integer.hashCode(this.headerIconColor)) * 31;
        String str = this.subtitleLeft;
        int hashCode2 = (hashCode + (str == null ? 0 : str.hashCode())) * 31;
        String str2 = this.subtitleRight;
        int hashCode3 = (hashCode2 + (str2 == null ? 0 : str2.hashCode())) * 31;
        String str3 = this.body;
        int hashCode4 = (((hashCode3 + (str3 == null ? 0 : str3.hashCode())) * 31) + Boolean.hashCode(this.shouldShowActions)) * 31;
        String str4 = this.enabledByUsername;
        int hashCode5 = (hashCode4 + (str4 == null ? 0 : str4.hashCode())) * 31;
        String str5 = this.enabledByAvatarURL;
        int hashCode6 = (hashCode5 + (str5 == null ? 0 : str5.hashCode())) * 31;
        Integer num = this.enabledByColor;
        int hashCode7 = (hashCode6 + (num == null ? 0 : num.hashCode())) * 31;
        String str6 = this.severity;
        int hashCode8 = (hashCode7 + (str6 == null ? 0 : str6.hashCode())) * 31;
        String str7 = this.startTime;
        return hashCode8 + (str7 != null ? str7.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        String str = this.header;
        int i10 = this.headerColor;
        String str2 = this.headerIconURL;
        int i11 = this.headerIconColor;
        String str3 = this.subtitleLeft;
        String str4 = this.subtitleRight;
        String str5 = this.body;
        boolean z10 = this.shouldShowActions;
        String str6 = this.enabledByUsername;
        String str7 = this.enabledByAvatarURL;
        Integer num = this.enabledByColor;
        String str8 = this.severity;
        String str9 = this.startTime;
        return "AutoModerationNotification(header=" + str + ", headerColor=" + i10 + ", headerIconURL=" + str2 + ", headerIconColor=" + i11 + ", subtitleLeft=" + str3 + ", subtitleRight=" + str4 + ", body=" + str5 + ", shouldShowActions=" + z10 + ", enabledByUsername=" + str6 + ", enabledByAvatarURL=" + str7 + ", enabledByColor=" + num + ", severity=" + str8 + ", startTime=" + str9 + ")";
    }

    public AutoModerationNotification(@NotNull String header, int i10, @NotNull String headerIconURL, int i11, String str, String str2, String str3, boolean z10, String str4, String str5, Integer num, String str6, String str7) {
        Intrinsics.checkNotNullParameter(header, "header");
        Intrinsics.checkNotNullParameter(headerIconURL, "headerIconURL");
        this.header = header;
        this.headerColor = i10;
        this.headerIconURL = headerIconURL;
        this.headerIconColor = i11;
        this.subtitleLeft = str;
        this.subtitleRight = str2;
        this.body = str3;
        this.shouldShowActions = z10;
        this.enabledByUsername = str4;
        this.enabledByAvatarURL = str5;
        this.enabledByColor = num;
        this.severity = str6;
        this.startTime = str7;
    }

    public /* synthetic */ AutoModerationNotification(String str, int i10, String str2, int i11, String str3, String str4, String str5, boolean z10, String str6, String str7, Integer num, String str8, String str9, int i12, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, i10, str2, i11, (i12 & 16) != 0 ? null : str3, (i12 & 32) != 0 ? null : str4, (i12 & 64) != 0 ? null : str5, z10, (i12 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? null : str6, (i12 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 0 ? null : str7, (i12 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 0 ? null : num, (i12 & RecyclerView.ItemAnimator.FLAG_MOVED) != 0 ? null : str8, (i12 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0 ? null : str9);
    }
}
