package com.discord.chat.bridge.customthemes;

import com.discord.chat.bridge.customthemes.SharedCustomThemeData;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.rnlineargradient.LinearGradientManager;
import ft.m;
import java.util.List;
import jt.f;
import jt.n2;
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
import qr.l;
import qr.o;
@m
@Metadata(d1 = {"\u0000H\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010 \n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0007\n\u0002\b\t\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0016\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\b\u0087\b\u0018\u0000 62\u00020\u0001:\u000256BM\u0012\f\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0006\u0012\u0006\u0010\u0007\u001a\u00020\u0004\u0012\u0006\u0010\b\u001a\u00020\u0004\u0012\u0006\u0010\t\u001a\u00020\u0004\u0012\u0006\u0010\n\u001a\u00020\u0004\u0012\u0006\u0010\u000b\u001a\u00020\u0004\u0012\u0006\u0010\f\u001a\u00020\u0004¢\u0006\u0004\b\r\u0010\u000eBo\b\u0010\u0012\u0006\u0010\u000f\u001a\u00020\u0010\u0012\u000e\u0010\u0002\u001a\n\u0012\u0004\u0012\u00020\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0006\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\b\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\t\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\n\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u000b\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\f\u001a\u0004\u0018\u00010\u0004\u0012\b\u0010\u0011\u001a\u0004\u0018\u00010\u0012¢\u0006\u0004\b\r\u0010\u0013J\u000f\u0010\u001f\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003HÆ\u0003J\t\u0010 \u001a\u00020\u0006HÆ\u0003J\t\u0010!\u001a\u00020\u0004HÆ\u0003J\t\u0010\"\u001a\u00020\u0004HÆ\u0003J\t\u0010#\u001a\u00020\u0004HÆ\u0003J\t\u0010$\u001a\u00020\u0004HÆ\u0003J\t\u0010%\u001a\u00020\u0004HÆ\u0003J\t\u0010&\u001a\u00020\u0004HÆ\u0003J_\u0010'\u001a\u00020\u00002\u000e\b\u0002\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00040\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00062\b\b\u0002\u0010\u0007\u001a\u00020\u00042\b\b\u0002\u0010\b\u001a\u00020\u00042\b\b\u0002\u0010\t\u001a\u00020\u00042\b\b\u0002\u0010\n\u001a\u00020\u00042\b\b\u0002\u0010\u000b\u001a\u00020\u00042\b\b\u0002\u0010\f\u001a\u00020\u0004HÆ\u0001J\u0013\u0010(\u001a\u00020)2\b\u0010*\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010+\u001a\u00020\u0010HÖ\u0001J\t\u0010,\u001a\u00020\u0004HÖ\u0001J%\u0010-\u001a\u00020.2\u0006\u0010/\u001a\u00020\u00002\u0006\u00100\u001a\u0002012\u0006\u00102\u001a\u000203H\u0001¢\u0006\u0002\b4R\u0017\u0010\u0002\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0015R\u0011\u0010\u0005\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0017R\u0011\u0010\u0007\u001a\u00020\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0019R\u0011\u0010\b\u001a\u00020\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u001a\u0010\u0019R\u0011\u0010\t\u001a\u00020\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u001b\u0010\u0019R\u0011\u0010\n\u001a\u00020\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u001c\u0010\u0019R\u0011\u0010\u000b\u001a\u00020\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u001d\u0010\u0019R\u0011\u0010\f\u001a\u00020\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u001e\u0010\u0019¨\u00067"}, d2 = {"Lcom/discord/chat/bridge/customthemes/SharedCustomThemeData;", "", LinearGradientManager.PROP_COLORS, "", "", "gradientAngle", "", "createdBy", "createdByAvatarUrl", "nitroWheelIconUrl", "previewLabel", "previewHeading", "createdByLabel", "<init>", "(Ljava/util/List;FLjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "seen0", "", "serializationConstructorMarker", "Lkotlinx/serialization/internal/SerializationConstructorMarker;", "(ILjava/util/List;FLjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lkotlinx/serialization/internal/SerializationConstructorMarker;)V", "getColors", "()Ljava/util/List;", "getGradientAngle", "()F", "getCreatedBy", "()Ljava/lang/String;", "getCreatedByAvatarUrl", "getNitroWheelIconUrl", "getPreviewLabel", "getPreviewHeading", "getCreatedByLabel", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "copy", "equals", "", "other", "hashCode", "toString", "write$Self", "", "self", "output", "Lkotlinx/serialization/encoding/CompositeEncoder;", "serialDesc", "Lkotlinx/serialization/descriptors/SerialDescriptor;", "write$Self$chat_release", "$serializer", "Companion", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class SharedCustomThemeData {
    @NotNull
    private final List<String> colors;
    @NotNull
    private final String createdBy;
    @NotNull
    private final String createdByAvatarUrl;
    @NotNull
    private final String createdByLabel;
    private final float gradientAngle;
    @NotNull
    private final String nitroWheelIconUrl;
    @NotNull
    private final String previewHeading;
    @NotNull
    private final String previewLabel;
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private static final Lazy[] $childSerializers = {l.b(o.f48044e, new Function0() { // from class: m6.a
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            KSerializer _childSerializers$_anonymous_;
            _childSerializers$_anonymous_ = SharedCustomThemeData._childSerializers$_anonymous_();
            return _childSerializers$_anonymous_;
        }
    }), null, null, null, null, null, null, null};

    @Metadata(d1 = {"\u0000\u0016\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\f\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005¨\u0006\u0007"}, d2 = {"Lcom/discord/chat/bridge/customthemes/SharedCustomThemeData$Companion;", "", "<init>", "()V", "serializer", "Lkotlinx/serialization/KSerializer;", "Lcom/discord/chat/bridge/customthemes/SharedCustomThemeData;", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        private Companion() {
        }

        @NotNull
        public final KSerializer serializer() {
            return SharedCustomThemeData$$serializer.INSTANCE;
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public /* synthetic */ SharedCustomThemeData(int i10, List list, float f10, String str, String str2, String str3, String str4, String str5, String str6, SerializationConstructorMarker serializationConstructorMarker) {
        if (255 != (i10 & SetSpanOperation.SPAN_MAX_PRIORITY)) {
            v1.b(i10, SetSpanOperation.SPAN_MAX_PRIORITY, SharedCustomThemeData$$serializer.INSTANCE.getDescriptor());
        }
        this.colors = list;
        this.gradientAngle = f10;
        this.createdBy = str;
        this.createdByAvatarUrl = str2;
        this.nitroWheelIconUrl = str3;
        this.previewLabel = str4;
        this.previewHeading = str5;
        this.createdByLabel = str6;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final /* synthetic */ KSerializer _childSerializers$_anonymous_() {
        return new f(n2.f31041a);
    }

    public static /* synthetic */ SharedCustomThemeData copy$default(SharedCustomThemeData sharedCustomThemeData, List list, float f10, String str, String str2, String str3, String str4, String str5, String str6, int i10, Object obj) {
        List<String> list2 = list;
        if ((i10 & 1) != 0) {
            list2 = sharedCustomThemeData.colors;
        }
        if ((i10 & 2) != 0) {
            f10 = sharedCustomThemeData.gradientAngle;
        }
        if ((i10 & 4) != 0) {
            str = sharedCustomThemeData.createdBy;
        }
        if ((i10 & 8) != 0) {
            str2 = sharedCustomThemeData.createdByAvatarUrl;
        }
        if ((i10 & 16) != 0) {
            str3 = sharedCustomThemeData.nitroWheelIconUrl;
        }
        if ((i10 & 32) != 0) {
            str4 = sharedCustomThemeData.previewLabel;
        }
        if ((i10 & 64) != 0) {
            str5 = sharedCustomThemeData.previewHeading;
        }
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            str6 = sharedCustomThemeData.createdByLabel;
        }
        String str7 = str5;
        String str8 = str6;
        String str9 = str3;
        String str10 = str4;
        return sharedCustomThemeData.copy(list2, f10, str, str2, str9, str10, str7, str8);
    }

    public static final /* synthetic */ void write$Self$chat_release(SharedCustomThemeData sharedCustomThemeData, CompositeEncoder compositeEncoder, SerialDescriptor serialDescriptor) {
        compositeEncoder.s(serialDescriptor, 0, (ft.o) $childSerializers[0].getValue(), sharedCustomThemeData.colors);
        compositeEncoder.r(serialDescriptor, 1, sharedCustomThemeData.gradientAngle);
        compositeEncoder.z(serialDescriptor, 2, sharedCustomThemeData.createdBy);
        compositeEncoder.z(serialDescriptor, 3, sharedCustomThemeData.createdByAvatarUrl);
        compositeEncoder.z(serialDescriptor, 4, sharedCustomThemeData.nitroWheelIconUrl);
        compositeEncoder.z(serialDescriptor, 5, sharedCustomThemeData.previewLabel);
        compositeEncoder.z(serialDescriptor, 6, sharedCustomThemeData.previewHeading);
        compositeEncoder.z(serialDescriptor, 7, sharedCustomThemeData.createdByLabel);
    }

    @NotNull
    public final List<String> component1() {
        return this.colors;
    }

    public final float component2() {
        return this.gradientAngle;
    }

    @NotNull
    public final String component3() {
        return this.createdBy;
    }

    @NotNull
    public final String component4() {
        return this.createdByAvatarUrl;
    }

    @NotNull
    public final String component5() {
        return this.nitroWheelIconUrl;
    }

    @NotNull
    public final String component6() {
        return this.previewLabel;
    }

    @NotNull
    public final String component7() {
        return this.previewHeading;
    }

    @NotNull
    public final String component8() {
        return this.createdByLabel;
    }

    @NotNull
    public final SharedCustomThemeData copy(@NotNull List<String> colors, float f10, @NotNull String createdBy, @NotNull String createdByAvatarUrl, @NotNull String nitroWheelIconUrl, @NotNull String previewLabel, @NotNull String previewHeading, @NotNull String createdByLabel) {
        Intrinsics.checkNotNullParameter(colors, "colors");
        Intrinsics.checkNotNullParameter(createdBy, "createdBy");
        Intrinsics.checkNotNullParameter(createdByAvatarUrl, "createdByAvatarUrl");
        Intrinsics.checkNotNullParameter(nitroWheelIconUrl, "nitroWheelIconUrl");
        Intrinsics.checkNotNullParameter(previewLabel, "previewLabel");
        Intrinsics.checkNotNullParameter(previewHeading, "previewHeading");
        Intrinsics.checkNotNullParameter(createdByLabel, "createdByLabel");
        return new SharedCustomThemeData(colors, f10, createdBy, createdByAvatarUrl, nitroWheelIconUrl, previewLabel, previewHeading, createdByLabel);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof SharedCustomThemeData) {
            SharedCustomThemeData sharedCustomThemeData = (SharedCustomThemeData) obj;
            return Intrinsics.areEqual(this.colors, sharedCustomThemeData.colors) && Float.compare(this.gradientAngle, sharedCustomThemeData.gradientAngle) == 0 && Intrinsics.areEqual(this.createdBy, sharedCustomThemeData.createdBy) && Intrinsics.areEqual(this.createdByAvatarUrl, sharedCustomThemeData.createdByAvatarUrl) && Intrinsics.areEqual(this.nitroWheelIconUrl, sharedCustomThemeData.nitroWheelIconUrl) && Intrinsics.areEqual(this.previewLabel, sharedCustomThemeData.previewLabel) && Intrinsics.areEqual(this.previewHeading, sharedCustomThemeData.previewHeading) && Intrinsics.areEqual(this.createdByLabel, sharedCustomThemeData.createdByLabel);
        }
        return false;
    }

    @NotNull
    public final List<String> getColors() {
        return this.colors;
    }

    @NotNull
    public final String getCreatedBy() {
        return this.createdBy;
    }

    @NotNull
    public final String getCreatedByAvatarUrl() {
        return this.createdByAvatarUrl;
    }

    @NotNull
    public final String getCreatedByLabel() {
        return this.createdByLabel;
    }

    public final float getGradientAngle() {
        return this.gradientAngle;
    }

    @NotNull
    public final String getNitroWheelIconUrl() {
        return this.nitroWheelIconUrl;
    }

    @NotNull
    public final String getPreviewHeading() {
        return this.previewHeading;
    }

    @NotNull
    public final String getPreviewLabel() {
        return this.previewLabel;
    }

    public int hashCode() {
        return (((((((((((((this.colors.hashCode() * 31) + Float.hashCode(this.gradientAngle)) * 31) + this.createdBy.hashCode()) * 31) + this.createdByAvatarUrl.hashCode()) * 31) + this.nitroWheelIconUrl.hashCode()) * 31) + this.previewLabel.hashCode()) * 31) + this.previewHeading.hashCode()) * 31) + this.createdByLabel.hashCode();
    }

    @NotNull
    public String toString() {
        List<String> list = this.colors;
        float f10 = this.gradientAngle;
        String str = this.createdBy;
        String str2 = this.createdByAvatarUrl;
        String str3 = this.nitroWheelIconUrl;
        String str4 = this.previewLabel;
        String str5 = this.previewHeading;
        String str6 = this.createdByLabel;
        return "SharedCustomThemeData(colors=" + list + ", gradientAngle=" + f10 + ", createdBy=" + str + ", createdByAvatarUrl=" + str2 + ", nitroWheelIconUrl=" + str3 + ", previewLabel=" + str4 + ", previewHeading=" + str5 + ", createdByLabel=" + str6 + ")";
    }

    public SharedCustomThemeData(@NotNull List<String> colors, float f10, @NotNull String createdBy, @NotNull String createdByAvatarUrl, @NotNull String nitroWheelIconUrl, @NotNull String previewLabel, @NotNull String previewHeading, @NotNull String createdByLabel) {
        Intrinsics.checkNotNullParameter(colors, "colors");
        Intrinsics.checkNotNullParameter(createdBy, "createdBy");
        Intrinsics.checkNotNullParameter(createdByAvatarUrl, "createdByAvatarUrl");
        Intrinsics.checkNotNullParameter(nitroWheelIconUrl, "nitroWheelIconUrl");
        Intrinsics.checkNotNullParameter(previewLabel, "previewLabel");
        Intrinsics.checkNotNullParameter(previewHeading, "previewHeading");
        Intrinsics.checkNotNullParameter(createdByLabel, "createdByLabel");
        this.colors = colors;
        this.gradientAngle = f10;
        this.createdBy = createdBy;
        this.createdByAvatarUrl = createdByAvatarUrl;
        this.nitroWheelIconUrl = nitroWheelIconUrl;
        this.previewLabel = previewLabel;
        this.previewHeading = previewHeading;
        this.createdByLabel = createdByLabel;
    }
}
