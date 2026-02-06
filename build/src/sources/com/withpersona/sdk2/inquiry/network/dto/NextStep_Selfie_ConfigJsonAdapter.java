package com.withpersona.sdk2.inquiry.network.dto;

import com.squareup.moshi.a0;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.selfie.PoseConfig;
import java.util.List;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0084\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001a\u0010\u0018\u001a\b\u0012\u0004\u0012\u00020\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019R\u001c\u0010\u001b\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001a0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001b\u0010\u0019R\u001a\u0010\u001d\u001a\b\u0012\u0004\u0012\u00020\u001c0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001d\u0010\u0019R\u001a\u0010\u001e\u001a\b\u0012\u0004\u0012\u00020\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001e\u0010\u0019R\u001a\u0010\u001f\u001a\b\u0012\u0004\u0012\u00020\u001a0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001f\u0010\u0019R\"\u0010\"\u001a\u0010\u0012\f\u0012\n\u0012\u0004\u0012\u00020!\u0018\u00010 0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\"\u0010\u0019R\"\u0010$\u001a\u0010\u0012\f\u0012\n\u0012\u0004\u0012\u00020#\u0018\u00010 0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b$\u0010\u0019R\u001a\u0010&\u001a\b\u0012\u0004\u0012\u00020%0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b&\u0010\u0019R\u001c\u0010'\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b'\u0010\u0019R\"\u0010)\u001a\u0010\u0012\f\u0012\n\u0012\u0004\u0012\u00020(\u0018\u00010 0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b)\u0010\u0019R\u001c\u0010+\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010*0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b+\u0010\u0019R\"\u0010-\u001a\u0010\u0012\f\u0012\n\u0012\u0004\u0012\u00020,\u0018\u00010 0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b-\u0010\u0019R\u001c\u0010/\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010.0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b/\u0010\u0019¨\u00060"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep_Selfie_ConfigJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$Config;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$Config;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$Config;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$CaptureMethod;", "captureMethodAdapter", "Lcom/squareup/moshi/h;", "", "nullableBooleanAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$Localizations;", "localizationsAdapter", "stringAdapter", "booleanAdapter", "", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$CaptureFileType;", "nullableListOfCaptureFileTypeAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$VideoCaptureMethod;", "nullableListOfVideoCaptureMethodAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$AssetConfig;", "assetConfigAdapter", "nullableStringAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$SelfiePose;", "nullableListOfSelfiePoseAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/PendingPageTextPosition;", "nullablePendingPageTextPositionAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/selfie/PoseConfig;", "nullableListOfPoseConfigAdapter", "", "nullableIntAdapter", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class NextStep_Selfie_ConfigJsonAdapter extends h {
    @NotNull
    private final h assetConfigAdapter;
    @NotNull
    private final h booleanAdapter;
    @NotNull
    private final h captureMethodAdapter;
    @NotNull
    private final h localizationsAdapter;
    @NotNull
    private final h nullableBooleanAdapter;
    @NotNull
    private final h nullableIntAdapter;
    @NotNull
    private final h nullableListOfCaptureFileTypeAdapter;
    @NotNull
    private final h nullableListOfPoseConfigAdapter;
    @NotNull
    private final h nullableListOfSelfiePoseAdapter;
    @NotNull
    private final h nullableListOfVideoCaptureMethodAdapter;
    @NotNull
    private final h nullablePendingPageTextPositionAdapter;
    @NotNull
    private final h nullableStringAdapter;
    @NotNull
    private final m.b options;
    @NotNull
    private final h stringAdapter;

    public NextStep_Selfie_ConfigJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("selfieType", "backStepEnabled", "cancelButtonEnabled", "localizations", "fieldKeySelfie", "requireStrictSelfieCapture", "skipPromptPage", "enabledCaptureFileTypes", "videoCaptureMethods", "assets", "videoSessionJWT", "orderedPoses", "pendingPageTextVerticalPosition", "audioEnabled", "poseConfigs", "designVersion");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(NextStep.Selfie.CaptureMethod.class, x0.d(), "selfieType");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.captureMethodAdapter = f10;
        h f11 = moshi.f(Boolean.class, x0.d(), "backStepEnabled");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.nullableBooleanAdapter = f11;
        h f12 = moshi.f(NextStep.Selfie.Localizations.class, x0.d(), "localizations");
        Intrinsics.checkNotNullExpressionValue(f12, "adapter(...)");
        this.localizationsAdapter = f12;
        h f13 = moshi.f(String.class, x0.d(), "fieldKeySelfie");
        Intrinsics.checkNotNullExpressionValue(f13, "adapter(...)");
        this.stringAdapter = f13;
        h f14 = moshi.f(Boolean.TYPE, x0.d(), "requireStrictSelfieCapture");
        Intrinsics.checkNotNullExpressionValue(f14, "adapter(...)");
        this.booleanAdapter = f14;
        h f15 = moshi.f(a0.j(List.class, NextStep.Selfie.CaptureFileType.class), x0.d(), "enabledCaptureFileTypes");
        Intrinsics.checkNotNullExpressionValue(f15, "adapter(...)");
        this.nullableListOfCaptureFileTypeAdapter = f15;
        h f16 = moshi.f(a0.j(List.class, NextStep.Selfie.VideoCaptureMethod.class), x0.d(), "videoCaptureMethods");
        Intrinsics.checkNotNullExpressionValue(f16, "adapter(...)");
        this.nullableListOfVideoCaptureMethodAdapter = f16;
        h f17 = moshi.f(NextStep.Selfie.AssetConfig.class, x0.d(), "assets");
        Intrinsics.checkNotNullExpressionValue(f17, "adapter(...)");
        this.assetConfigAdapter = f17;
        h f18 = moshi.f(String.class, x0.d(), "videoSessionJwt");
        Intrinsics.checkNotNullExpressionValue(f18, "adapter(...)");
        this.nullableStringAdapter = f18;
        h f19 = moshi.f(a0.j(List.class, NextStep.Selfie.SelfiePose.class), x0.d(), "orderedPoses");
        Intrinsics.checkNotNullExpressionValue(f19, "adapter(...)");
        this.nullableListOfSelfiePoseAdapter = f19;
        h f20 = moshi.f(PendingPageTextPosition.class, x0.d(), "pendingPageTextVerticalPosition");
        Intrinsics.checkNotNullExpressionValue(f20, "adapter(...)");
        this.nullablePendingPageTextPositionAdapter = f20;
        h f21 = moshi.f(a0.j(List.class, PoseConfig.class), x0.d(), "poseConfigs");
        Intrinsics.checkNotNullExpressionValue(f21, "adapter(...)");
        this.nullableListOfPoseConfigAdapter = f21;
        h f22 = moshi.f(Integer.class, x0.d(), "designVersion");
        Intrinsics.checkNotNullExpressionValue(f22, "adapter(...)");
        this.nullableIntAdapter = f22;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(44);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("NextStep.Selfie.Config");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public NextStep.Selfie.Config fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.u();
        Boolean bool = null;
        NextStep.Selfie.CaptureMethod captureMethod = null;
        Boolean bool2 = null;
        Boolean bool3 = null;
        NextStep.Selfie.Localizations localizations = null;
        String str = null;
        Boolean bool4 = null;
        List list = null;
        List list2 = null;
        NextStep.Selfie.AssetConfig assetConfig = null;
        String str2 = null;
        List list3 = null;
        PendingPageTextPosition pendingPageTextPosition = null;
        Boolean bool5 = null;
        List list4 = null;
        Integer num = null;
        while (true) {
            Boolean bool6 = bool;
            NextStep.Selfie.CaptureMethod captureMethod2 = captureMethod;
            Boolean bool7 = bool2;
            if (reader.hasNext()) {
                Boolean bool8 = bool3;
                switch (reader.J(this.options)) {
                    case -1:
                        reader.E0();
                        reader.S();
                        bool = bool6;
                        bool3 = bool8;
                        captureMethod = captureMethod2;
                        break;
                    case 0:
                        captureMethod = (NextStep.Selfie.CaptureMethod) this.captureMethodAdapter.fromJson(reader);
                        if (captureMethod != null) {
                            bool = bool6;
                            bool3 = bool8;
                            break;
                        } else {
                            throw an.c.x("selfieType", "selfieType", reader);
                        }
                    case 1:
                        bool2 = (Boolean) this.nullableBooleanAdapter.fromJson(reader);
                        bool = bool6;
                        bool3 = bool8;
                        captureMethod = captureMethod2;
                        continue;
                    case 2:
                        bool3 = (Boolean) this.nullableBooleanAdapter.fromJson(reader);
                        bool = bool6;
                        captureMethod = captureMethod2;
                        break;
                    case 3:
                        localizations = (NextStep.Selfie.Localizations) this.localizationsAdapter.fromJson(reader);
                        if (localizations == null) {
                            throw an.c.x("localizations", "localizations", reader);
                        }
                        bool = bool6;
                        bool3 = bool8;
                        captureMethod = captureMethod2;
                        break;
                    case 4:
                        str = (String) this.stringAdapter.fromJson(reader);
                        if (str == null) {
                            throw an.c.x("fieldKeySelfie", "fieldKeySelfie", reader);
                        }
                        bool = bool6;
                        bool3 = bool8;
                        captureMethod = captureMethod2;
                        break;
                    case 5:
                        bool = (Boolean) this.booleanAdapter.fromJson(reader);
                        if (bool == null) {
                            throw an.c.x("requireStrictSelfieCapture", "requireStrictSelfieCapture", reader);
                        }
                        bool3 = bool8;
                        captureMethod = captureMethod2;
                        break;
                    case 6:
                        bool4 = (Boolean) this.nullableBooleanAdapter.fromJson(reader);
                        bool = bool6;
                        bool3 = bool8;
                        captureMethod = captureMethod2;
                        break;
                    case 7:
                        list = (List) this.nullableListOfCaptureFileTypeAdapter.fromJson(reader);
                        bool = bool6;
                        bool3 = bool8;
                        captureMethod = captureMethod2;
                        break;
                    case 8:
                        list2 = (List) this.nullableListOfVideoCaptureMethodAdapter.fromJson(reader);
                        bool = bool6;
                        bool3 = bool8;
                        captureMethod = captureMethod2;
                        break;
                    case 9:
                        assetConfig = (NextStep.Selfie.AssetConfig) this.assetConfigAdapter.fromJson(reader);
                        if (assetConfig == null) {
                            throw an.c.x("assets", "assets", reader);
                        }
                        bool = bool6;
                        bool3 = bool8;
                        captureMethod = captureMethod2;
                        break;
                    case 10:
                        str2 = (String) this.nullableStringAdapter.fromJson(reader);
                        bool = bool6;
                        bool3 = bool8;
                        captureMethod = captureMethod2;
                        break;
                    case 11:
                        list3 = (List) this.nullableListOfSelfiePoseAdapter.fromJson(reader);
                        bool = bool6;
                        bool3 = bool8;
                        captureMethod = captureMethod2;
                        break;
                    case 12:
                        pendingPageTextPosition = (PendingPageTextPosition) this.nullablePendingPageTextPositionAdapter.fromJson(reader);
                        bool = bool6;
                        bool3 = bool8;
                        captureMethod = captureMethod2;
                        break;
                    case 13:
                        bool5 = (Boolean) this.nullableBooleanAdapter.fromJson(reader);
                        bool = bool6;
                        bool3 = bool8;
                        captureMethod = captureMethod2;
                        break;
                    case 14:
                        list4 = (List) this.nullableListOfPoseConfigAdapter.fromJson(reader);
                        bool = bool6;
                        bool3 = bool8;
                        captureMethod = captureMethod2;
                        break;
                    case 15:
                        num = (Integer) this.nullableIntAdapter.fromJson(reader);
                        bool = bool6;
                        bool3 = bool8;
                        captureMethod = captureMethod2;
                        break;
                    default:
                        bool = bool6;
                        bool3 = bool8;
                        captureMethod = captureMethod2;
                        break;
                }
                bool2 = bool7;
            } else {
                Boolean bool9 = bool3;
                reader.D();
                if (captureMethod2 != null) {
                    if (localizations != null) {
                        if (str != null) {
                            if (bool6 != null) {
                                boolean booleanValue = bool6.booleanValue();
                                if (assetConfig != null) {
                                    return new NextStep.Selfie.Config(captureMethod2, bool7, bool9, localizations, str, booleanValue, bool4, list, list2, assetConfig, str2, list3, pendingPageTextPosition, bool5, list4, num);
                                }
                                throw an.c.o("assets", "assets", reader);
                            }
                            throw an.c.o("requireStrictSelfieCapture", "requireStrictSelfieCapture", reader);
                        }
                        throw an.c.o("fieldKeySelfie", "fieldKeySelfie", reader);
                    }
                    throw an.c.o("localizations", "localizations", reader);
                }
                throw an.c.o("selfieType", "selfieType", reader);
            }
        }
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, NextStep.Selfie.Config config) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (config != null) {
            writer.k();
            writer.J("selfieType");
            this.captureMethodAdapter.toJson(writer, config.getSelfieType());
            writer.J("backStepEnabled");
            this.nullableBooleanAdapter.toJson(writer, config.getBackStepEnabled());
            writer.J("cancelButtonEnabled");
            this.nullableBooleanAdapter.toJson(writer, config.getCancelButtonEnabled());
            writer.J("localizations");
            this.localizationsAdapter.toJson(writer, config.getLocalizations());
            writer.J("fieldKeySelfie");
            this.stringAdapter.toJson(writer, config.getFieldKeySelfie());
            writer.J("requireStrictSelfieCapture");
            this.booleanAdapter.toJson(writer, Boolean.valueOf(config.getRequireStrictSelfieCapture()));
            writer.J("skipPromptPage");
            this.nullableBooleanAdapter.toJson(writer, config.getSkipPromptPage());
            writer.J("enabledCaptureFileTypes");
            this.nullableListOfCaptureFileTypeAdapter.toJson(writer, config.getEnabledCaptureFileTypes());
            writer.J("videoCaptureMethods");
            this.nullableListOfVideoCaptureMethodAdapter.toJson(writer, config.getVideoCaptureMethods());
            writer.J("assets");
            this.assetConfigAdapter.toJson(writer, config.getAssets());
            writer.J("videoSessionJWT");
            this.nullableStringAdapter.toJson(writer, config.getVideoSessionJwt());
            writer.J("orderedPoses");
            this.nullableListOfSelfiePoseAdapter.toJson(writer, config.getOrderedPoses());
            writer.J("pendingPageTextVerticalPosition");
            this.nullablePendingPageTextPositionAdapter.toJson(writer, config.getPendingPageTextVerticalPosition());
            writer.J("audioEnabled");
            this.nullableBooleanAdapter.toJson(writer, config.getAudioEnabled());
            writer.J("poseConfigs");
            this.nullableListOfPoseConfigAdapter.toJson(writer, config.getPoseConfigs());
            writer.J("designVersion");
            this.nullableIntAdapter.toJson(writer, config.getDesignVersion());
            writer.s();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
