package com.withpersona.sdk2.inquiry.network.dto;

import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.squareup.moshi.a0;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.government_id.CaptureOptionNativeMobile;
import com.withpersona.sdk2.inquiry.network.dto.government_id.Id;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StyleElements;
import java.util.List;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u009c\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\t\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\"\u0010\u0019\u001a\u0010\u0012\f\u0012\n\u0012\u0004\u0012\u00020\u0018\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0019\u0010\u001aR\u001c\u0010\u001c\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001b0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001c\u0010\u001aR\u001a\u0010\u001e\u001a\b\u0012\u0004\u0012\u00020\u001d0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001e\u0010\u001aR\"\u0010 \u001a\u0010\u0012\f\u0012\n\u0012\u0004\u0012\u00020\u001f\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b \u0010\u001aR\u001c\u0010\"\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010!0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\"\u0010\u001aR\u001c\u0010$\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010#0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b$\u0010\u001aR\u001a\u0010%\u001a\b\u0012\u0004\u0012\u00020\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b%\u0010\u001aR\"\u0010'\u001a\u0010\u0012\f\u0012\n\u0012\u0004\u0012\u00020&\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b'\u0010\u001aR\"\u0010)\u001a\u0010\u0012\f\u0012\n\u0012\u0004\u0012\u00020(\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b)\u0010\u001aR\"\u0010+\u001a\u0010\u0012\f\u0012\n\u0012\u0004\u0012\u00020*\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b+\u0010\u001aR\u001c\u0010,\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b,\u0010\u001aR\u001c\u0010.\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010-0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b.\u0010\u001aR\u001c\u00100\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010/0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b0\u0010\u001aR\u001c\u00102\u001a\n\u0012\u0006\u0012\u0004\u0018\u0001010\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b2\u0010\u001aR\u001c\u00104\u001a\n\u0012\u0006\u0012\u0004\u0018\u0001030\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b4\u0010\u001aR\u001c\u00106\u001a\n\u0012\u0006\u0012\u0004\u0018\u0001050\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b6\u0010\u001a¨\u00067"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep_GovernmentId_ConfigJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$Config;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$Config;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$Config;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "", "Lcom/withpersona/sdk2/inquiry/network/dto/government_id/Id;", "nullableListOfIdAdapter", "Lcom/squareup/moshi/h;", "", "nullableBooleanAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$Localizations;", "localizationsAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/government_id/CaptureOptionNativeMobile;", "nullableListOfCaptureOptionNativeMobileAdapter", "", "nullableIntAdapter", "", "nullableLongAdapter", "stringAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$LocalizationOverride;", "nullableListOfLocalizationOverrideAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$CaptureFileType;", "nullableListOfCaptureFileTypeAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$VideoCaptureMethod;", "nullableListOfVideoCaptureMethodAdapter", "nullableStringAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AssetConfig;", "nullableAssetConfigAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AutoClassificationConfig;", "nullableAutoClassificationConfigAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StyleElements$Axis;", "nullableAxisAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/PendingPageTextPosition;", "nullablePendingPageTextPositionAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$DigitalIdConfig;", "nullableDigitalIdConfigAdapter", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class NextStep_GovernmentId_ConfigJsonAdapter extends h {
    @NotNull
    private final h localizationsAdapter;
    @NotNull
    private final h nullableAssetConfigAdapter;
    @NotNull
    private final h nullableAutoClassificationConfigAdapter;
    @NotNull
    private final h nullableAxisAdapter;
    @NotNull
    private final h nullableBooleanAdapter;
    @NotNull
    private final h nullableDigitalIdConfigAdapter;
    @NotNull
    private final h nullableIntAdapter;
    @NotNull
    private final h nullableListOfCaptureFileTypeAdapter;
    @NotNull
    private final h nullableListOfCaptureOptionNativeMobileAdapter;
    @NotNull
    private final h nullableListOfIdAdapter;
    @NotNull
    private final h nullableListOfLocalizationOverrideAdapter;
    @NotNull
    private final h nullableListOfVideoCaptureMethodAdapter;
    @NotNull
    private final h nullableLongAdapter;
    @NotNull
    private final h nullablePendingPageTextPositionAdapter;
    @NotNull
    private final h nullableStringAdapter;
    @NotNull
    private final m.b options;
    @NotNull
    private final h stringAdapter;

    public NextStep_GovernmentId_ConfigJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("idclasses", "backStepEnabled", "cancelButtonEnabled", "localizations", "enabledCaptureOptionsNativeMobile", "imageCaptureCount", "nativeMobileCameraManualCaptureDelayMs", "fieldKeyDocument", "fieldKeyIdclass", "localizationOverrides", "shouldSkipReviewScreen", "enabledCaptureFileTypes", "videoCaptureMethods", "videoSessionJWT", "assets", "autoClassificationConfig", "reviewCaptureButtonsAxis", "pendingPageTextVerticalPosition", "audioEnabled", "mobileDriversLicense");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(a0.j(List.class, Id.class), x0.d(), "idclasses");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullableListOfIdAdapter = f10;
        h f11 = moshi.f(Boolean.class, x0.d(), "backStepEnabled");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.nullableBooleanAdapter = f11;
        h f12 = moshi.f(NextStep.GovernmentId.Localizations.class, x0.d(), "localizations");
        Intrinsics.checkNotNullExpressionValue(f12, "adapter(...)");
        this.localizationsAdapter = f12;
        h f13 = moshi.f(a0.j(List.class, CaptureOptionNativeMobile.class), x0.d(), "enabledCaptureOptionsNativeMobile");
        Intrinsics.checkNotNullExpressionValue(f13, "adapter(...)");
        this.nullableListOfCaptureOptionNativeMobileAdapter = f13;
        h f14 = moshi.f(Integer.class, x0.d(), "imageCaptureCount");
        Intrinsics.checkNotNullExpressionValue(f14, "adapter(...)");
        this.nullableIntAdapter = f14;
        h f15 = moshi.f(Long.class, x0.d(), "nativeMobileCameraManualCaptureDelayMs");
        Intrinsics.checkNotNullExpressionValue(f15, "adapter(...)");
        this.nullableLongAdapter = f15;
        h f16 = moshi.f(String.class, x0.d(), "fieldKeyDocument");
        Intrinsics.checkNotNullExpressionValue(f16, "adapter(...)");
        this.stringAdapter = f16;
        h f17 = moshi.f(a0.j(List.class, NextStep.GovernmentId.LocalizationOverride.class), x0.d(), "localizationOverrides");
        Intrinsics.checkNotNullExpressionValue(f17, "adapter(...)");
        this.nullableListOfLocalizationOverrideAdapter = f17;
        h f18 = moshi.f(a0.j(List.class, NextStep.GovernmentId.CaptureFileType.class), x0.d(), "enabledCaptureFileTypes");
        Intrinsics.checkNotNullExpressionValue(f18, "adapter(...)");
        this.nullableListOfCaptureFileTypeAdapter = f18;
        h f19 = moshi.f(a0.j(List.class, NextStep.GovernmentId.VideoCaptureMethod.class), x0.d(), "videoCaptureMethods");
        Intrinsics.checkNotNullExpressionValue(f19, "adapter(...)");
        this.nullableListOfVideoCaptureMethodAdapter = f19;
        h f20 = moshi.f(String.class, x0.d(), "videoSessionJwt");
        Intrinsics.checkNotNullExpressionValue(f20, "adapter(...)");
        this.nullableStringAdapter = f20;
        h f21 = moshi.f(NextStep.GovernmentId.AssetConfig.class, x0.d(), "assets");
        Intrinsics.checkNotNullExpressionValue(f21, "adapter(...)");
        this.nullableAssetConfigAdapter = f21;
        h f22 = moshi.f(NextStep.GovernmentId.AutoClassificationConfig.class, x0.d(), "autoClassificationConfig");
        Intrinsics.checkNotNullExpressionValue(f22, "adapter(...)");
        this.nullableAutoClassificationConfigAdapter = f22;
        h f23 = moshi.f(StyleElements.Axis.class, x0.d(), "reviewCaptureButtonsAxis");
        Intrinsics.checkNotNullExpressionValue(f23, "adapter(...)");
        this.nullableAxisAdapter = f23;
        h f24 = moshi.f(PendingPageTextPosition.class, x0.d(), "pendingPageTextVerticalPosition");
        Intrinsics.checkNotNullExpressionValue(f24, "adapter(...)");
        this.nullablePendingPageTextPositionAdapter = f24;
        h f25 = moshi.f(NextStep.GovernmentId.DigitalIdConfig.class, x0.d(), "mobileDriversLicense");
        Intrinsics.checkNotNullExpressionValue(f25, "adapter(...)");
        this.nullableDigitalIdConfigAdapter = f25;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(50);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("NextStep.GovernmentId.Config");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public NextStep.GovernmentId.Config fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.r();
        List list = null;
        Boolean bool = null;
        Boolean bool2 = null;
        NextStep.GovernmentId.Localizations localizations = null;
        List list2 = null;
        Integer num = null;
        Long l10 = null;
        String str = null;
        String str2 = null;
        List list3 = null;
        Boolean bool3 = null;
        List list4 = null;
        List list5 = null;
        String str3 = null;
        NextStep.GovernmentId.AssetConfig assetConfig = null;
        NextStep.GovernmentId.AutoClassificationConfig autoClassificationConfig = null;
        StyleElements.Axis axis = null;
        PendingPageTextPosition pendingPageTextPosition = null;
        Boolean bool4 = null;
        NextStep.GovernmentId.DigitalIdConfig digitalIdConfig = null;
        while (true) {
            List list6 = list;
            if (reader.hasNext()) {
                Boolean bool5 = bool;
                switch (reader.A0(this.options)) {
                    case -1:
                        reader.E0();
                        reader.P();
                        bool = bool5;
                        break;
                    case 0:
                        list = (List) this.nullableListOfIdAdapter.fromJson(reader);
                        bool = bool5;
                        continue;
                    case 1:
                        bool = (Boolean) this.nullableBooleanAdapter.fromJson(reader);
                        break;
                    case 2:
                        bool2 = (Boolean) this.nullableBooleanAdapter.fromJson(reader);
                        bool = bool5;
                        break;
                    case 3:
                        localizations = (NextStep.GovernmentId.Localizations) this.localizationsAdapter.fromJson(reader);
                        if (localizations == null) {
                            throw sm.c.x("localizations", "localizations", reader);
                        }
                        bool = bool5;
                        break;
                    case 4:
                        list2 = (List) this.nullableListOfCaptureOptionNativeMobileAdapter.fromJson(reader);
                        bool = bool5;
                        break;
                    case 5:
                        num = (Integer) this.nullableIntAdapter.fromJson(reader);
                        bool = bool5;
                        break;
                    case 6:
                        l10 = (Long) this.nullableLongAdapter.fromJson(reader);
                        bool = bool5;
                        break;
                    case 7:
                        str = (String) this.stringAdapter.fromJson(reader);
                        if (str == null) {
                            throw sm.c.x("fieldKeyDocument", "fieldKeyDocument", reader);
                        }
                        bool = bool5;
                        break;
                    case 8:
                        str2 = (String) this.stringAdapter.fromJson(reader);
                        if (str2 == null) {
                            throw sm.c.x("fieldKeyIdclass", "fieldKeyIdclass", reader);
                        }
                        bool = bool5;
                        break;
                    case 9:
                        list3 = (List) this.nullableListOfLocalizationOverrideAdapter.fromJson(reader);
                        bool = bool5;
                        break;
                    case 10:
                        bool3 = (Boolean) this.nullableBooleanAdapter.fromJson(reader);
                        bool = bool5;
                        break;
                    case 11:
                        list4 = (List) this.nullableListOfCaptureFileTypeAdapter.fromJson(reader);
                        bool = bool5;
                        break;
                    case 12:
                        list5 = (List) this.nullableListOfVideoCaptureMethodAdapter.fromJson(reader);
                        bool = bool5;
                        break;
                    case 13:
                        str3 = (String) this.nullableStringAdapter.fromJson(reader);
                        bool = bool5;
                        break;
                    case 14:
                        assetConfig = (NextStep.GovernmentId.AssetConfig) this.nullableAssetConfigAdapter.fromJson(reader);
                        bool = bool5;
                        break;
                    case 15:
                        autoClassificationConfig = (NextStep.GovernmentId.AutoClassificationConfig) this.nullableAutoClassificationConfigAdapter.fromJson(reader);
                        bool = bool5;
                        break;
                    case 16:
                        axis = (StyleElements.Axis) this.nullableAxisAdapter.fromJson(reader);
                        bool = bool5;
                        break;
                    case 17:
                        pendingPageTextPosition = (PendingPageTextPosition) this.nullablePendingPageTextPositionAdapter.fromJson(reader);
                        bool = bool5;
                        break;
                    case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                        bool4 = (Boolean) this.nullableBooleanAdapter.fromJson(reader);
                        bool = bool5;
                        break;
                    case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                        digitalIdConfig = (NextStep.GovernmentId.DigitalIdConfig) this.nullableDigitalIdConfigAdapter.fromJson(reader);
                        bool = bool5;
                        break;
                    default:
                        bool = bool5;
                        break;
                }
                list = list6;
            } else {
                Boolean bool6 = bool;
                reader.y();
                if (localizations != null) {
                    if (str != null) {
                        if (str2 != null) {
                            return new NextStep.GovernmentId.Config(list6, bool6, bool2, localizations, list2, num, l10, str, str2, list3, bool3, list4, list5, str3, assetConfig, autoClassificationConfig, axis, pendingPageTextPosition, bool4, digitalIdConfig);
                        }
                        throw sm.c.o("fieldKeyIdclass", "fieldKeyIdclass", reader);
                    }
                    throw sm.c.o("fieldKeyDocument", "fieldKeyDocument", reader);
                }
                throw sm.c.o("localizations", "localizations", reader);
            }
        }
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, NextStep.GovernmentId.Config config) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (config != null) {
            writer.l();
            writer.A0("idclasses");
            this.nullableListOfIdAdapter.toJson(writer, config.getIdclasses());
            writer.A0("backStepEnabled");
            this.nullableBooleanAdapter.toJson(writer, config.getBackStepEnabled());
            writer.A0("cancelButtonEnabled");
            this.nullableBooleanAdapter.toJson(writer, config.getCancelButtonEnabled());
            writer.A0("localizations");
            this.localizationsAdapter.toJson(writer, config.getLocalizations());
            writer.A0("enabledCaptureOptionsNativeMobile");
            this.nullableListOfCaptureOptionNativeMobileAdapter.toJson(writer, config.getEnabledCaptureOptionsNativeMobile());
            writer.A0("imageCaptureCount");
            this.nullableIntAdapter.toJson(writer, config.getImageCaptureCount());
            writer.A0("nativeMobileCameraManualCaptureDelayMs");
            this.nullableLongAdapter.toJson(writer, config.getNativeMobileCameraManualCaptureDelayMs());
            writer.A0("fieldKeyDocument");
            this.stringAdapter.toJson(writer, config.getFieldKeyDocument());
            writer.A0("fieldKeyIdclass");
            this.stringAdapter.toJson(writer, config.getFieldKeyIdclass());
            writer.A0("localizationOverrides");
            this.nullableListOfLocalizationOverrideAdapter.toJson(writer, config.getLocalizationOverrides());
            writer.A0("shouldSkipReviewScreen");
            this.nullableBooleanAdapter.toJson(writer, config.getShouldSkipReviewScreen());
            writer.A0("enabledCaptureFileTypes");
            this.nullableListOfCaptureFileTypeAdapter.toJson(writer, config.getEnabledCaptureFileTypes());
            writer.A0("videoCaptureMethods");
            this.nullableListOfVideoCaptureMethodAdapter.toJson(writer, config.getVideoCaptureMethods());
            writer.A0("videoSessionJWT");
            this.nullableStringAdapter.toJson(writer, config.getVideoSessionJwt());
            writer.A0("assets");
            this.nullableAssetConfigAdapter.toJson(writer, config.getAssets());
            writer.A0("autoClassificationConfig");
            this.nullableAutoClassificationConfigAdapter.toJson(writer, config.getAutoClassificationConfig());
            writer.A0("reviewCaptureButtonsAxis");
            this.nullableAxisAdapter.toJson(writer, config.getReviewCaptureButtonsAxis());
            writer.A0("pendingPageTextVerticalPosition");
            this.nullablePendingPageTextPositionAdapter.toJson(writer, config.getPendingPageTextVerticalPosition());
            writer.A0("audioEnabled");
            this.nullableBooleanAdapter.toJson(writer, config.getAudioEnabled());
            writer.A0("mobileDriversLicense");
            this.nullableDigitalIdConfigAdapter.toJson(writer, config.getMobileDriversLicense());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
