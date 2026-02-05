package com.discord.chat.bridge.forwarding;

import com.facebook.react.uimanager.ViewProps;
import dt.m;
import gt.n2;
import gt.v1;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.internal.SerializationConstructorMarker;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000>\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0006\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\f\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 &2\u00020\u0001:\u0002%&B+\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0003¢\u0006\u0004\b\u0007\u0010\bBC\b\u0010\u0012\u0006\u0010\t\u001a\u00020\n\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\f¢\u0006\u0004\b\u0007\u0010\rJ\t\u0010\u0013\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0014\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0015\u001a\u00020\u0003HÆ\u0003J\u000b\u0010\u0016\u001a\u0004\u0018\u00010\u0003HÆ\u0003J3\u0010\u0017\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00032\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0003HÆ\u0001J\u0013\u0010\u0018\u001a\u00020\u00192\b\u0010\u001a\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u001b\u001a\u00020\nHÖ\u0001J\t\u0010\u001c\u001a\u00020\u0003HÖ\u0001J%\u0010\u001d\u001a\u00020\u001e2\u0006\u0010\u001f\u001a\u00020\u00002\u0006\u0010 \u001a\u00020!2\u0006\u0010\"\u001a\u00020#H\u0001¢\u0006\u0002\b$R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000fR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u000fR\u0011\u0010\u0005\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u000fR\u0013\u0010\u0006\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u000f¨\u0006'"}, d2 = {"Lcom/discord/chat/bridge/forwarding/ForwardFooterInfo;", "", "timestampLabel", "", "originLabel", ViewProps.ACCESSIBILITY_LABEL, "originIconUrl", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getTimestampLabel", "()Ljava/lang/String;", "getOriginLabel", "getAccessibilityLabel", "getOriginIconUrl", "component1", "component2", "component3", "component4", "copy", "equals", "", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@m
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ForwardFooterInfo {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final String accessibilityLabel;
    private final String originIconUrl;
    @NotNull
    private final String originLabel;
    @NotNull
    private final String timestampLabel;

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/forwarding/ForwardFooterInfo$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/forwarding/ForwardFooterInfo;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return ForwardFooterInfo$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ ForwardFooterInfo(int i10, String str, String str2, String str3, String str4, SerializationConstructorMarker serializationConstructorMarker) {
        if (7 != (i10 & 7)) {
            v1.b(i10, 7, ForwardFooterInfo$$serializer.INSTANCE.getDescriptor());
        }
        this.timestampLabel = str;
        this.originLabel = str2;
        this.accessibilityLabel = str3;
        if ((i10 & 8) == 0) {
            this.originIconUrl = null;
        } else {
            this.originIconUrl = str4;
        }
    }

    public static /* synthetic */ ForwardFooterInfo copy$default(ForwardFooterInfo forwardFooterInfo, String str, String str2, String str3, String str4, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = forwardFooterInfo.timestampLabel;
        }
        if ((i10 & 2) != 0) {
            str2 = forwardFooterInfo.originLabel;
        }
        if ((i10 & 4) != 0) {
            str3 = forwardFooterInfo.accessibilityLabel;
        }
        if ((i10 & 8) != 0) {
            str4 = forwardFooterInfo.originIconUrl;
        }
        return forwardFooterInfo.copy(str, str2, str3, str4);
    }

    public static final /* synthetic */ void write$Self$chat_release(ForwardFooterInfo forwardFooterInfo, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.x(serialDescriptor, 0, forwardFooterInfo.timestampLabel);
        compositeEncoder.x(serialDescriptor, 1, forwardFooterInfo.originLabel);
        compositeEncoder.x(serialDescriptor, 2, forwardFooterInfo.accessibilityLabel);
        if (compositeEncoder.z(serialDescriptor, 3) || forwardFooterInfo.originIconUrl != null) {
            compositeEncoder.A(serialDescriptor, 3, n2.f25302a, forwardFooterInfo.originIconUrl);
        }
    }

    @NotNull
    public final String component1() {
        return this.timestampLabel;
    }

    @NotNull
    public final String component2() {
        return this.originLabel;
    }

    @NotNull
    public final String component3() {
        return this.accessibilityLabel;
    }

    public final String component4() {
        return this.originIconUrl;
    }

    @NotNull
    public final ForwardFooterInfo copy(@NotNull String timestampLabel, @NotNull String originLabel, @NotNull String accessibilityLabel, String str) {
        Intrinsics.checkNotNullParameter(timestampLabel, "timestampLabel");
        Intrinsics.checkNotNullParameter(originLabel, "originLabel");
        Intrinsics.checkNotNullParameter(accessibilityLabel, "accessibilityLabel");
        return new ForwardFooterInfo(timestampLabel, originLabel, accessibilityLabel, str);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ForwardFooterInfo) {
            ForwardFooterInfo forwardFooterInfo = (ForwardFooterInfo) obj;
            return Intrinsics.areEqual(this.timestampLabel, forwardFooterInfo.timestampLabel) && Intrinsics.areEqual(this.originLabel, forwardFooterInfo.originLabel) && Intrinsics.areEqual(this.accessibilityLabel, forwardFooterInfo.accessibilityLabel) && Intrinsics.areEqual(this.originIconUrl, forwardFooterInfo.originIconUrl);
        }
        return false;
    }

    @NotNull
    public final String getAccessibilityLabel() {
        return this.accessibilityLabel;
    }

    public final String getOriginIconUrl() {
        return this.originIconUrl;
    }

    @NotNull
    public final String getOriginLabel() {
        return this.originLabel;
    }

    @NotNull
    public final String getTimestampLabel() {
        return this.timestampLabel;
    }

    public int hashCode() {
        int hashCode = ((((this.timestampLabel.hashCode() * 31) + this.originLabel.hashCode()) * 31) + this.accessibilityLabel.hashCode()) * 31;
        String str = this.originIconUrl;
        return hashCode + (str == null ? 0 : str.hashCode());
    }

    @NotNull
    public String toString() {
        String str = this.timestampLabel;
        String str2 = this.originLabel;
        String str3 = this.accessibilityLabel;
        String str4 = this.originIconUrl;
        return "ForwardFooterInfo(timestampLabel=" + str + ", originLabel=" + str2 + ", accessibilityLabel=" + str3 + ", originIconUrl=" + str4 + ")";
    }

    public ForwardFooterInfo(@NotNull String timestampLabel, @NotNull String originLabel, @NotNull String accessibilityLabel, String str) {
        Intrinsics.checkNotNullParameter(timestampLabel, "timestampLabel");
        Intrinsics.checkNotNullParameter(originLabel, "originLabel");
        Intrinsics.checkNotNullParameter(accessibilityLabel, "accessibilityLabel");
        this.timestampLabel = timestampLabel;
        this.originLabel = originLabel;
        this.accessibilityLabel = accessibilityLabel;
        this.originIconUrl = str;
    }

    public /* synthetic */ ForwardFooterInfo(String str, String str2, String str3, String str4, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, str2, str3, (i10 & 8) != 0 ? null : str4);
    }
}
