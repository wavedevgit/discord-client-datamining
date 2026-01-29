package com.withpersona.sdk2.inquiry.network.dto;

import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000<\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0006\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0017\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0017\u0010\u0018R\u001a\u0010\u0019\u001a\b\u0012\u0004\u0012\u00020\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0019\u0010\u0018¨\u0006\u001a"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep_Selfie_CapturePageJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$CapturePage;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$CapturePage;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$CapturePage;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "nullableStringAdapter", "Lcom/squareup/moshi/h;", "stringAdapter", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class NextStep_Selfie_CapturePageJsonAdapter extends h {
    @NotNull
    private final h nullableStringAdapter;
    @NotNull
    private final m.b options;
    @NotNull
    private final h stringAdapter;

    public NextStep_Selfie_CapturePageJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("title", "selfieHintTakePhoto", "selfieHintCenterFace", "selfieHintFaceTooClose", "selfieHintFaceTooFar", "selfieHintMultipleFaces", "selfieHintFaceIncomplete", "selfieHintPoseNotCenter", "selfieHintLookLeft", "selfieHintLookRight", "selfieHintHoldStill", "autoCaptureOn", "captureSuccess", "selfieHintCenterFaceDescription", "selfieHintLookLeftDescription", "selfieHintLookRightDescription", "cameraLoadingTitle");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(String.class, x0.d(), "title");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullableStringAdapter = f10;
        h f11 = moshi.f(String.class, x0.d(), "selfieHintTakePhoto");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.stringAdapter = f11;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(49);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("NextStep.Selfie.CapturePage");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public NextStep.Selfie.CapturePage fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.r();
        String str = null;
        String str2 = null;
        String str3 = null;
        String str4 = null;
        String str5 = null;
        String str6 = null;
        String str7 = null;
        String str8 = null;
        String str9 = null;
        String str10 = null;
        String str11 = null;
        String str12 = null;
        String str13 = null;
        String str14 = null;
        String str15 = null;
        String str16 = null;
        String str17 = null;
        while (true) {
            String str18 = str;
            String str19 = str2;
            String str20 = str3;
            String str21 = str4;
            String str22 = str5;
            String str23 = str6;
            String str24 = str7;
            String str25 = str8;
            if (reader.hasNext()) {
                String str26 = str9;
                switch (reader.A0(this.options)) {
                    case -1:
                        reader.E0();
                        reader.P();
                        str9 = str26;
                        str = str18;
                        str2 = str19;
                        str3 = str20;
                        str4 = str21;
                        str5 = str22;
                        str6 = str23;
                        str7 = str24;
                        break;
                    case 0:
                        str = (String) this.nullableStringAdapter.fromJson(reader);
                        str9 = str26;
                        str2 = str19;
                        str3 = str20;
                        str4 = str21;
                        str5 = str22;
                        str6 = str23;
                        str7 = str24;
                        break;
                    case 1:
                        str2 = (String) this.stringAdapter.fromJson(reader);
                        if (str2 != null) {
                            str9 = str26;
                            str = str18;
                            str3 = str20;
                            str4 = str21;
                            str5 = str22;
                            str6 = str23;
                            str7 = str24;
                            break;
                        } else {
                            throw sm.c.x("selfieHintTakePhoto", "selfieHintTakePhoto", reader);
                        }
                    case 2:
                        str3 = (String) this.stringAdapter.fromJson(reader);
                        if (str3 != null) {
                            str9 = str26;
                            str = str18;
                            str2 = str19;
                            str4 = str21;
                            str5 = str22;
                            str6 = str23;
                            str7 = str24;
                            break;
                        } else {
                            throw sm.c.x("selfieHintCenterFace", "selfieHintCenterFace", reader);
                        }
                    case 3:
                        str4 = (String) this.stringAdapter.fromJson(reader);
                        if (str4 != null) {
                            str9 = str26;
                            str = str18;
                            str2 = str19;
                            str3 = str20;
                            str5 = str22;
                            str6 = str23;
                            str7 = str24;
                            break;
                        } else {
                            throw sm.c.x("selfieHintFaceTooClose", "selfieHintFaceTooClose", reader);
                        }
                    case 4:
                        str5 = (String) this.stringAdapter.fromJson(reader);
                        if (str5 != null) {
                            str9 = str26;
                            str = str18;
                            str2 = str19;
                            str3 = str20;
                            str4 = str21;
                            str6 = str23;
                            str7 = str24;
                            break;
                        } else {
                            throw sm.c.x("selfieHintFaceTooFar", "selfieHintFaceTooFar", reader);
                        }
                    case 5:
                        str6 = (String) this.stringAdapter.fromJson(reader);
                        if (str6 != null) {
                            str9 = str26;
                            str = str18;
                            str2 = str19;
                            str3 = str20;
                            str4 = str21;
                            str5 = str22;
                            str7 = str24;
                            break;
                        } else {
                            throw sm.c.x("selfieHintMultipleFaces", "selfieHintMultipleFaces", reader);
                        }
                    case 6:
                        str7 = (String) this.stringAdapter.fromJson(reader);
                        if (str7 != null) {
                            str9 = str26;
                            str = str18;
                            str2 = str19;
                            str3 = str20;
                            str4 = str21;
                            str5 = str22;
                            str6 = str23;
                            break;
                        } else {
                            throw sm.c.x("selfieHintFaceIncomplete", "selfieHintFaceIncomplete", reader);
                        }
                    case 7:
                        str8 = (String) this.stringAdapter.fromJson(reader);
                        if (str8 != null) {
                            str9 = str26;
                            str = str18;
                            str2 = str19;
                            str3 = str20;
                            str4 = str21;
                            str5 = str22;
                            str6 = str23;
                            str7 = str24;
                            continue;
                        } else {
                            throw sm.c.x("selfieHintPoseNotCenter", "selfieHintPoseNotCenter", reader);
                        }
                    case 8:
                        str9 = (String) this.stringAdapter.fromJson(reader);
                        if (str9 == null) {
                            throw sm.c.x("selfieHintLookLeft", "selfieHintLookLeft", reader);
                        }
                        str = str18;
                        str2 = str19;
                        str3 = str20;
                        str4 = str21;
                        str5 = str22;
                        str6 = str23;
                        str7 = str24;
                        break;
                    case 9:
                        str10 = (String) this.stringAdapter.fromJson(reader);
                        if (str10 == null) {
                            throw sm.c.x("selfieHintLookRight", "selfieHintLookRight", reader);
                        }
                        str9 = str26;
                        str = str18;
                        str2 = str19;
                        str3 = str20;
                        str4 = str21;
                        str5 = str22;
                        str6 = str23;
                        str7 = str24;
                        break;
                    case 10:
                        str11 = (String) this.stringAdapter.fromJson(reader);
                        if (str11 == null) {
                            throw sm.c.x("selfieHintHoldStill", "selfieHintHoldStill", reader);
                        }
                        str9 = str26;
                        str = str18;
                        str2 = str19;
                        str3 = str20;
                        str4 = str21;
                        str5 = str22;
                        str6 = str23;
                        str7 = str24;
                        break;
                    case 11:
                        str12 = (String) this.nullableStringAdapter.fromJson(reader);
                        str9 = str26;
                        str = str18;
                        str2 = str19;
                        str3 = str20;
                        str4 = str21;
                        str5 = str22;
                        str6 = str23;
                        str7 = str24;
                        break;
                    case 12:
                        str13 = (String) this.nullableStringAdapter.fromJson(reader);
                        str9 = str26;
                        str = str18;
                        str2 = str19;
                        str3 = str20;
                        str4 = str21;
                        str5 = str22;
                        str6 = str23;
                        str7 = str24;
                        break;
                    case 13:
                        str14 = (String) this.nullableStringAdapter.fromJson(reader);
                        str9 = str26;
                        str = str18;
                        str2 = str19;
                        str3 = str20;
                        str4 = str21;
                        str5 = str22;
                        str6 = str23;
                        str7 = str24;
                        break;
                    case 14:
                        str15 = (String) this.nullableStringAdapter.fromJson(reader);
                        str9 = str26;
                        str = str18;
                        str2 = str19;
                        str3 = str20;
                        str4 = str21;
                        str5 = str22;
                        str6 = str23;
                        str7 = str24;
                        break;
                    case 15:
                        str16 = (String) this.nullableStringAdapter.fromJson(reader);
                        str9 = str26;
                        str = str18;
                        str2 = str19;
                        str3 = str20;
                        str4 = str21;
                        str5 = str22;
                        str6 = str23;
                        str7 = str24;
                        break;
                    case 16:
                        str17 = (String) this.nullableStringAdapter.fromJson(reader);
                        str9 = str26;
                        str = str18;
                        str2 = str19;
                        str3 = str20;
                        str4 = str21;
                        str5 = str22;
                        str6 = str23;
                        str7 = str24;
                        break;
                    default:
                        str9 = str26;
                        str = str18;
                        str2 = str19;
                        str3 = str20;
                        str4 = str21;
                        str5 = str22;
                        str6 = str23;
                        str7 = str24;
                        break;
                }
                str8 = str25;
            } else {
                String str27 = str9;
                reader.y();
                if (str19 != null) {
                    if (str20 != null) {
                        if (str21 != null) {
                            if (str22 != null) {
                                if (str23 != null) {
                                    if (str24 != null) {
                                        if (str25 != null) {
                                            if (str27 != null) {
                                                if (str10 != null) {
                                                    if (str11 != null) {
                                                        return new NextStep.Selfie.CapturePage(str18, str19, str20, str21, str22, str23, str24, str25, str27, str10, str11, str12, str13, str14, str15, str16, str17);
                                                    }
                                                    throw sm.c.o("selfieHintHoldStill", "selfieHintHoldStill", reader);
                                                }
                                                throw sm.c.o("selfieHintLookRight", "selfieHintLookRight", reader);
                                            }
                                            throw sm.c.o("selfieHintLookLeft", "selfieHintLookLeft", reader);
                                        }
                                        throw sm.c.o("selfieHintPoseNotCenter", "selfieHintPoseNotCenter", reader);
                                    }
                                    throw sm.c.o("selfieHintFaceIncomplete", "selfieHintFaceIncomplete", reader);
                                }
                                throw sm.c.o("selfieHintMultipleFaces", "selfieHintMultipleFaces", reader);
                            }
                            throw sm.c.o("selfieHintFaceTooFar", "selfieHintFaceTooFar", reader);
                        }
                        throw sm.c.o("selfieHintFaceTooClose", "selfieHintFaceTooClose", reader);
                    }
                    throw sm.c.o("selfieHintCenterFace", "selfieHintCenterFace", reader);
                }
                throw sm.c.o("selfieHintTakePhoto", "selfieHintTakePhoto", reader);
            }
        }
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, NextStep.Selfie.CapturePage capturePage) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (capturePage != null) {
            writer.l();
            writer.A0("title");
            this.nullableStringAdapter.toJson(writer, capturePage.getTitle());
            writer.A0("selfieHintTakePhoto");
            this.stringAdapter.toJson(writer, capturePage.getSelfieHintTakePhoto());
            writer.A0("selfieHintCenterFace");
            this.stringAdapter.toJson(writer, capturePage.getSelfieHintCenterFace());
            writer.A0("selfieHintFaceTooClose");
            this.stringAdapter.toJson(writer, capturePage.getSelfieHintFaceTooClose());
            writer.A0("selfieHintFaceTooFar");
            this.stringAdapter.toJson(writer, capturePage.getSelfieHintFaceTooFar());
            writer.A0("selfieHintMultipleFaces");
            this.stringAdapter.toJson(writer, capturePage.getSelfieHintMultipleFaces());
            writer.A0("selfieHintFaceIncomplete");
            this.stringAdapter.toJson(writer, capturePage.getSelfieHintFaceIncomplete());
            writer.A0("selfieHintPoseNotCenter");
            this.stringAdapter.toJson(writer, capturePage.getSelfieHintPoseNotCenter());
            writer.A0("selfieHintLookLeft");
            this.stringAdapter.toJson(writer, capturePage.getSelfieHintLookLeft());
            writer.A0("selfieHintLookRight");
            this.stringAdapter.toJson(writer, capturePage.getSelfieHintLookRight());
            writer.A0("selfieHintHoldStill");
            this.stringAdapter.toJson(writer, capturePage.getSelfieHintHoldStill());
            writer.A0("autoCaptureOn");
            this.nullableStringAdapter.toJson(writer, capturePage.getAutoCaptureOn());
            writer.A0("captureSuccess");
            this.nullableStringAdapter.toJson(writer, capturePage.getCaptureSuccess());
            writer.A0("selfieHintCenterFaceDescription");
            this.nullableStringAdapter.toJson(writer, capturePage.getSelfieHintCenterFaceDescription());
            writer.A0("selfieHintLookLeftDescription");
            this.nullableStringAdapter.toJson(writer, capturePage.getSelfieHintLookLeftDescription());
            writer.A0("selfieHintLookRightDescription");
            this.nullableStringAdapter.toJson(writer, capturePage.getSelfieHintLookRightDescription());
            writer.A0("cameraLoadingTitle");
            this.nullableStringAdapter.toJson(writer, capturePage.getCameraLoadingTitle());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
