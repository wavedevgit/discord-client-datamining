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
@Metadata(d1 = {"\u0000<\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0006\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001a\u0010\u0017\u001a\b\u0012\u0004\u0012\u00020\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0017\u0010\u0018R\u001c\u0010\u0019\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0019\u0010\u0018¨\u0006\u001a"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep_Selfie_PromptPageJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$PromptPage;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$PromptPage;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$PromptPage;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "stringAdapter", "Lcom/squareup/moshi/h;", "nullableStringAdapter", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class NextStep_Selfie_PromptPageJsonAdapter extends h {
    @NotNull
    private final h nullableStringAdapter;
    @NotNull
    private final m.b options;
    @NotNull
    private final h stringAdapter;

    public NextStep_Selfie_PromptPageJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("selfieTitle", "selfiePrompt", "selfiePromptCenter", "agreeToPolicy", "btnSubmit", "cameraPermissionsTitle", "cameraPermissionsPrompt", "cameraPermissionsBtnContinueMobile", "cameraPermissionsBtnCancel", "microphonePermissionsBtnCancel", "microphonePermissionsBtnContinueMobile", "microphonePermissionsPrompt", "microphonePermissionsTitle");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(String.class, x0.d(), "title");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.stringAdapter = f10;
        h f11 = moshi.f(String.class, x0.d(), "cameraPermissionsTitle");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.nullableStringAdapter = f11;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(48);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("NextStep.Selfie.PromptPage");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public NextStep.Selfie.PromptPage fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.u();
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
        while (true) {
            String str14 = str;
            String str15 = str2;
            String str16 = str3;
            String str17 = str4;
            String str18 = str5;
            String str19 = str6;
            String str20 = str7;
            String str21 = str8;
            if (reader.hasNext()) {
                String str22 = str9;
                switch (reader.J(this.options)) {
                    case -1:
                        reader.E0();
                        reader.S();
                        str9 = str22;
                        str = str14;
                        str2 = str15;
                        str3 = str16;
                        str4 = str17;
                        str5 = str18;
                        str6 = str19;
                        str7 = str20;
                        break;
                    case 0:
                        str = (String) this.stringAdapter.fromJson(reader);
                        if (str != null) {
                            str9 = str22;
                            str2 = str15;
                            str3 = str16;
                            str4 = str17;
                            str5 = str18;
                            str6 = str19;
                            str7 = str20;
                            break;
                        } else {
                            throw an.c.x("title", "selfieTitle", reader);
                        }
                    case 1:
                        String str23 = (String) this.stringAdapter.fromJson(reader);
                        if (str23 != null) {
                            str2 = str23;
                            str9 = str22;
                            str = str14;
                            str3 = str16;
                            str4 = str17;
                            str5 = str18;
                            str6 = str19;
                            str7 = str20;
                            break;
                        } else {
                            throw an.c.x("prompt", "selfiePrompt", reader);
                        }
                    case 2:
                        String str24 = (String) this.stringAdapter.fromJson(reader);
                        if (str24 != null) {
                            str3 = str24;
                            str9 = str22;
                            str = str14;
                            str2 = str15;
                            str4 = str17;
                            str5 = str18;
                            str6 = str19;
                            str7 = str20;
                            break;
                        } else {
                            throw an.c.x("promptCenter", "selfiePromptCenter", reader);
                        }
                    case 3:
                        str4 = (String) this.stringAdapter.fromJson(reader);
                        if (str4 != null) {
                            str9 = str22;
                            str = str14;
                            str2 = str15;
                            str3 = str16;
                            str5 = str18;
                            str6 = str19;
                            str7 = str20;
                            break;
                        } else {
                            throw an.c.x("disclosure", "agreeToPolicy", reader);
                        }
                    case 4:
                        str5 = (String) this.stringAdapter.fromJson(reader);
                        if (str5 != null) {
                            str9 = str22;
                            str = str14;
                            str2 = str15;
                            str3 = str16;
                            str4 = str17;
                            str6 = str19;
                            str7 = str20;
                            break;
                        } else {
                            throw an.c.x("buttonSubmit", "btnSubmit", reader);
                        }
                    case 5:
                        str6 = (String) this.nullableStringAdapter.fromJson(reader);
                        str9 = str22;
                        str = str14;
                        str2 = str15;
                        str3 = str16;
                        str4 = str17;
                        str5 = str18;
                        str7 = str20;
                        break;
                    case 6:
                        str7 = (String) this.nullableStringAdapter.fromJson(reader);
                        str9 = str22;
                        str = str14;
                        str2 = str15;
                        str3 = str16;
                        str4 = str17;
                        str5 = str18;
                        str6 = str19;
                        break;
                    case 7:
                        str8 = (String) this.nullableStringAdapter.fromJson(reader);
                        str9 = str22;
                        str = str14;
                        str2 = str15;
                        str3 = str16;
                        str4 = str17;
                        str5 = str18;
                        str6 = str19;
                        str7 = str20;
                        continue;
                    case 8:
                        str9 = (String) this.nullableStringAdapter.fromJson(reader);
                        str = str14;
                        str2 = str15;
                        str3 = str16;
                        str4 = str17;
                        str5 = str18;
                        str6 = str19;
                        str7 = str20;
                        break;
                    case 9:
                        str10 = (String) this.nullableStringAdapter.fromJson(reader);
                        str9 = str22;
                        str = str14;
                        str2 = str15;
                        str3 = str16;
                        str4 = str17;
                        str5 = str18;
                        str6 = str19;
                        str7 = str20;
                        break;
                    case 10:
                        str11 = (String) this.nullableStringAdapter.fromJson(reader);
                        str9 = str22;
                        str = str14;
                        str2 = str15;
                        str3 = str16;
                        str4 = str17;
                        str5 = str18;
                        str6 = str19;
                        str7 = str20;
                        break;
                    case 11:
                        str12 = (String) this.nullableStringAdapter.fromJson(reader);
                        str9 = str22;
                        str = str14;
                        str2 = str15;
                        str3 = str16;
                        str4 = str17;
                        str5 = str18;
                        str6 = str19;
                        str7 = str20;
                        break;
                    case 12:
                        str13 = (String) this.nullableStringAdapter.fromJson(reader);
                        str9 = str22;
                        str = str14;
                        str2 = str15;
                        str3 = str16;
                        str4 = str17;
                        str5 = str18;
                        str6 = str19;
                        str7 = str20;
                        break;
                    default:
                        str9 = str22;
                        str = str14;
                        str2 = str15;
                        str3 = str16;
                        str4 = str17;
                        str5 = str18;
                        str6 = str19;
                        str7 = str20;
                        break;
                }
                str8 = str21;
            } else {
                String str25 = str9;
                reader.D();
                if (str14 != null) {
                    if (str15 != null) {
                        if (str16 != null) {
                            if (str17 != null) {
                                if (str18 != null) {
                                    return new NextStep.Selfie.PromptPage(str14, str15, str16, str17, str18, str19, str20, str21, str25, str10, str11, str12, str13);
                                }
                                throw an.c.o("buttonSubmit", "btnSubmit", reader);
                            }
                            throw an.c.o("disclosure", "agreeToPolicy", reader);
                        }
                        throw an.c.o("promptCenter", "selfiePromptCenter", reader);
                    }
                    throw an.c.o("prompt", "selfiePrompt", reader);
                }
                throw an.c.o("title", "selfieTitle", reader);
            }
        }
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, NextStep.Selfie.PromptPage promptPage) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (promptPage != null) {
            writer.k();
            writer.J("selfieTitle");
            this.stringAdapter.toJson(writer, promptPage.getTitle());
            writer.J("selfiePrompt");
            this.stringAdapter.toJson(writer, promptPage.getPrompt());
            writer.J("selfiePromptCenter");
            this.stringAdapter.toJson(writer, promptPage.getPromptCenter());
            writer.J("agreeToPolicy");
            this.stringAdapter.toJson(writer, promptPage.getDisclosure());
            writer.J("btnSubmit");
            this.stringAdapter.toJson(writer, promptPage.getButtonSubmit());
            writer.J("cameraPermissionsTitle");
            this.nullableStringAdapter.toJson(writer, promptPage.getCameraPermissionsTitle());
            writer.J("cameraPermissionsPrompt");
            this.nullableStringAdapter.toJson(writer, promptPage.getCameraPermissionsPrompt());
            writer.J("cameraPermissionsBtnContinueMobile");
            this.nullableStringAdapter.toJson(writer, promptPage.getCameraPermissionsAllowButtonText());
            writer.J("cameraPermissionsBtnCancel");
            this.nullableStringAdapter.toJson(writer, promptPage.getCameraPermissionsCancelButtonText());
            writer.J("microphonePermissionsBtnCancel");
            this.nullableStringAdapter.toJson(writer, promptPage.getMicrophonePermissionsBtnCancel());
            writer.J("microphonePermissionsBtnContinueMobile");
            this.nullableStringAdapter.toJson(writer, promptPage.getMicrophonePermissionsBtnContinueMobile());
            writer.J("microphonePermissionsPrompt");
            this.nullableStringAdapter.toJson(writer, promptPage.getMicrophonePermissionsPrompt());
            writer.J("microphonePermissionsTitle");
            this.nullableStringAdapter.toJson(writer, promptPage.getMicrophonePermissionsTitle());
            writer.s();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
