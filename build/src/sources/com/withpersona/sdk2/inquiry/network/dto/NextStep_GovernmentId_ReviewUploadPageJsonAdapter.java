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
@Metadata(d1 = {"\u0000<\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001a\u0010\u0017\u001a\b\u0012\u0004\u0012\u00020\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0017\u0010\u0018¨\u0006\u0019"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep_GovernmentId_ReviewUploadPageJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$ReviewUploadPage;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$ReviewUploadPage;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$ReviewUploadPage;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "stringAdapter", "Lcom/squareup/moshi/h;", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class NextStep_GovernmentId_ReviewUploadPageJsonAdapter extends h {
    @NotNull
    private final m.b options;
    @NotNull
    private final h stringAdapter;

    public NextStep_GovernmentId_ReviewUploadPageJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("titleFront", "titleBack", "titlePdf417", "titlePassportSignature", "descriptionFront", "descriptionBack", "descriptionPdf417", "descriptionPassportSignature", "confirmButtonText", "chooseAnotherButtonText");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(String.class, x0.d(), "titleFront");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.stringAdapter = f10;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(60);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("NextStep.GovernmentId.ReviewUploadPage");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public NextStep.GovernmentId.ReviewUploadPage fromJson(@NotNull m reader) {
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
        while (true) {
            String str11 = str;
            String str12 = str2;
            String str13 = str3;
            String str14 = str4;
            String str15 = str5;
            String str16 = str6;
            if (reader.hasNext()) {
                String str17 = str7;
                switch (reader.A0(this.options)) {
                    case -1:
                        reader.E0();
                        reader.P();
                        str7 = str17;
                        str = str11;
                        str2 = str12;
                        str3 = str13;
                        str4 = str14;
                        str5 = str15;
                        break;
                    case 0:
                        str = (String) this.stringAdapter.fromJson(reader);
                        if (str != null) {
                            str7 = str17;
                            str2 = str12;
                            str3 = str13;
                            str4 = str14;
                            str5 = str15;
                            break;
                        } else {
                            throw sm.c.x("titleFront", "titleFront", reader);
                        }
                    case 1:
                        str2 = (String) this.stringAdapter.fromJson(reader);
                        if (str2 != null) {
                            str7 = str17;
                            str = str11;
                            str3 = str13;
                            str4 = str14;
                            str5 = str15;
                            break;
                        } else {
                            throw sm.c.x("titleBack", "titleBack", reader);
                        }
                    case 2:
                        str3 = (String) this.stringAdapter.fromJson(reader);
                        if (str3 != null) {
                            str7 = str17;
                            str = str11;
                            str2 = str12;
                            str4 = str14;
                            str5 = str15;
                            break;
                        } else {
                            throw sm.c.x("titlePdf417", "titlePdf417", reader);
                        }
                    case 3:
                        str4 = (String) this.stringAdapter.fromJson(reader);
                        if (str4 != null) {
                            str7 = str17;
                            str = str11;
                            str2 = str12;
                            str3 = str13;
                            str5 = str15;
                            break;
                        } else {
                            throw sm.c.x("titlePassportSignature", "titlePassportSignature", reader);
                        }
                    case 4:
                        str5 = (String) this.stringAdapter.fromJson(reader);
                        if (str5 != null) {
                            str7 = str17;
                            str = str11;
                            str2 = str12;
                            str3 = str13;
                            str4 = str14;
                            break;
                        } else {
                            throw sm.c.x("descriptionFront", "descriptionFront", reader);
                        }
                    case 5:
                        str6 = (String) this.stringAdapter.fromJson(reader);
                        if (str6 != null) {
                            str7 = str17;
                            str = str11;
                            str2 = str12;
                            str3 = str13;
                            str4 = str14;
                            str5 = str15;
                            continue;
                        } else {
                            throw sm.c.x("descriptionBack", "descriptionBack", reader);
                        }
                    case 6:
                        str7 = (String) this.stringAdapter.fromJson(reader);
                        if (str7 == null) {
                            throw sm.c.x("descriptionPdf417", "descriptionPdf417", reader);
                        }
                        str = str11;
                        str2 = str12;
                        str3 = str13;
                        str4 = str14;
                        str5 = str15;
                        break;
                    case 7:
                        str8 = (String) this.stringAdapter.fromJson(reader);
                        if (str8 == null) {
                            throw sm.c.x("descriptionPassportSignature", "descriptionPassportSignature", reader);
                        }
                        str7 = str17;
                        str = str11;
                        str2 = str12;
                        str3 = str13;
                        str4 = str14;
                        str5 = str15;
                        break;
                    case 8:
                        str9 = (String) this.stringAdapter.fromJson(reader);
                        if (str9 == null) {
                            throw sm.c.x("confirmButtonText", "confirmButtonText", reader);
                        }
                        str7 = str17;
                        str = str11;
                        str2 = str12;
                        str3 = str13;
                        str4 = str14;
                        str5 = str15;
                        break;
                    case 9:
                        str10 = (String) this.stringAdapter.fromJson(reader);
                        if (str10 == null) {
                            throw sm.c.x("chooseAnotherButtonText", "chooseAnotherButtonText", reader);
                        }
                        str7 = str17;
                        str = str11;
                        str2 = str12;
                        str3 = str13;
                        str4 = str14;
                        str5 = str15;
                        break;
                    default:
                        str7 = str17;
                        str = str11;
                        str2 = str12;
                        str3 = str13;
                        str4 = str14;
                        str5 = str15;
                        break;
                }
                str6 = str16;
            } else {
                String str18 = str7;
                reader.y();
                if (str11 != null) {
                    if (str12 != null) {
                        if (str13 != null) {
                            if (str14 != null) {
                                if (str15 != null) {
                                    if (str16 != null) {
                                        if (str18 != null) {
                                            if (str8 != null) {
                                                if (str9 != null) {
                                                    if (str10 != null) {
                                                        return new NextStep.GovernmentId.ReviewUploadPage(str11, str12, str13, str14, str15, str16, str18, str8, str9, str10);
                                                    }
                                                    throw sm.c.o("chooseAnotherButtonText", "chooseAnotherButtonText", reader);
                                                }
                                                throw sm.c.o("confirmButtonText", "confirmButtonText", reader);
                                            }
                                            throw sm.c.o("descriptionPassportSignature", "descriptionPassportSignature", reader);
                                        }
                                        throw sm.c.o("descriptionPdf417", "descriptionPdf417", reader);
                                    }
                                    throw sm.c.o("descriptionBack", "descriptionBack", reader);
                                }
                                throw sm.c.o("descriptionFront", "descriptionFront", reader);
                            }
                            throw sm.c.o("titlePassportSignature", "titlePassportSignature", reader);
                        }
                        throw sm.c.o("titlePdf417", "titlePdf417", reader);
                    }
                    throw sm.c.o("titleBack", "titleBack", reader);
                }
                throw sm.c.o("titleFront", "titleFront", reader);
            }
        }
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, NextStep.GovernmentId.ReviewUploadPage reviewUploadPage) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (reviewUploadPage != null) {
            writer.l();
            writer.A0("titleFront");
            this.stringAdapter.toJson(writer, reviewUploadPage.getTitleFront());
            writer.A0("titleBack");
            this.stringAdapter.toJson(writer, reviewUploadPage.getTitleBack());
            writer.A0("titlePdf417");
            this.stringAdapter.toJson(writer, reviewUploadPage.getTitlePdf417());
            writer.A0("titlePassportSignature");
            this.stringAdapter.toJson(writer, reviewUploadPage.getTitlePassportSignature());
            writer.A0("descriptionFront");
            this.stringAdapter.toJson(writer, reviewUploadPage.getDescriptionFront());
            writer.A0("descriptionBack");
            this.stringAdapter.toJson(writer, reviewUploadPage.getDescriptionBack());
            writer.A0("descriptionPdf417");
            this.stringAdapter.toJson(writer, reviewUploadPage.getDescriptionPdf417());
            writer.A0("descriptionPassportSignature");
            this.stringAdapter.toJson(writer, reviewUploadPage.getDescriptionPassportSignature());
            writer.A0("confirmButtonText");
            this.stringAdapter.toJson(writer, reviewUploadPage.getConfirmButtonText());
            writer.A0("chooseAnotherButtonText");
            this.stringAdapter.toJson(writer, reviewUploadPage.getChooseAnotherButtonText());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
