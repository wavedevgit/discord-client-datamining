package com.withpersona.sdk2.inquiry.network.dto;

import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000<\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0006\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0017\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0017\u0010\u0018R\u001a\u0010\u0019\u001a\b\u0012\u0004\u0012\u00020\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0019\u0010\u0018¨\u0006\u001a"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep_GovernmentId_CapturePageJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$CapturePage;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$CapturePage;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$CapturePage;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "nullableStringAdapter", "Lcom/squareup/moshi/h;", "stringAdapter", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class NextStep_GovernmentId_CapturePageJsonAdapter extends h {
    @NotNull
    private final h nullableStringAdapter;
    @NotNull
    private final m.b options;
    @NotNull
    private final h stringAdapter;

    public NextStep_GovernmentId_CapturePageJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("title", "scanFront", "scanBack", "scanPdf417", "scanFrontOrBack", "scanSignature", "capturing", "confirmCapture", "disclaimer", "hintHoldStill", "hintLowLight", "btnHelp", "barcodeHelpModalTitle", "barcodeHelpModalPrompt", "barcodeHelpModalHints", "barcodeHelpModalContinueBtn", "idFrontHelpModalTitle", "idFrontHelpModalPrompt", "idFrontHelpModalHintsMobile", "idFrontHelpModalContinueBtn", "idBackHelpModalTitle", "idBackHelpModalPrompt", "idBackHelpModalHintsMobile", "idBackHelpModalContinueBtn");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(String.class, x0.d(), "title");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullableStringAdapter = f10;
        h f11 = moshi.f(String.class, x0.d(), "scanFront");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.stringAdapter = f11;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(55);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("NextStep.GovernmentId.CapturePage");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public NextStep.GovernmentId.CapturePage fromJson(@NotNull m reader) {
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
        String str18 = null;
        String str19 = null;
        String str20 = null;
        String str21 = null;
        String str22 = null;
        String str23 = null;
        String str24 = null;
        while (true) {
            String str25 = str;
            String str26 = str2;
            String str27 = str3;
            String str28 = str4;
            String str29 = str5;
            if (reader.hasNext()) {
                String str30 = str6;
                switch (reader.t0(this.options)) {
                    case -1:
                        reader.F0();
                        reader.P();
                        str6 = str30;
                        str = str25;
                        str2 = str26;
                        str3 = str27;
                        str4 = str28;
                        break;
                    case 0:
                        str = (String) this.nullableStringAdapter.fromJson(reader);
                        str6 = str30;
                        str2 = str26;
                        str3 = str27;
                        str4 = str28;
                        break;
                    case 1:
                        str2 = (String) this.stringAdapter.fromJson(reader);
                        if (str2 != null) {
                            str6 = str30;
                            str = str25;
                            str3 = str27;
                            str4 = str28;
                            break;
                        } else {
                            throw tm.c.x("scanFront", "scanFront", reader);
                        }
                    case 2:
                        str3 = (String) this.stringAdapter.fromJson(reader);
                        if (str3 != null) {
                            str6 = str30;
                            str = str25;
                            str2 = str26;
                            str4 = str28;
                            break;
                        } else {
                            throw tm.c.x("scanBack", "scanBack", reader);
                        }
                    case 3:
                        str4 = (String) this.stringAdapter.fromJson(reader);
                        if (str4 != null) {
                            str6 = str30;
                            str = str25;
                            str2 = str26;
                            str3 = str27;
                            break;
                        } else {
                            throw tm.c.x("scanPdf417", "scanPdf417", reader);
                        }
                    case 4:
                        str5 = (String) this.stringAdapter.fromJson(reader);
                        if (str5 != null) {
                            str6 = str30;
                            str = str25;
                            str2 = str26;
                            str3 = str27;
                            str4 = str28;
                            continue;
                        } else {
                            throw tm.c.x("scanFrontOrBack", "scanFrontOrBack", reader);
                        }
                    case 5:
                        str6 = (String) this.stringAdapter.fromJson(reader);
                        if (str6 == null) {
                            throw tm.c.x("scanSignature", "scanSignature", reader);
                        }
                        str = str25;
                        str2 = str26;
                        str3 = str27;
                        str4 = str28;
                        break;
                    case 6:
                        str7 = (String) this.stringAdapter.fromJson(reader);
                        if (str7 == null) {
                            throw tm.c.x("capturing", "capturing", reader);
                        }
                        str6 = str30;
                        str = str25;
                        str2 = str26;
                        str3 = str27;
                        str4 = str28;
                        break;
                    case 7:
                        str8 = (String) this.stringAdapter.fromJson(reader);
                        if (str8 == null) {
                            throw tm.c.x("confirmCapture", "confirmCapture", reader);
                        }
                        str6 = str30;
                        str = str25;
                        str2 = str26;
                        str3 = str27;
                        str4 = str28;
                        break;
                    case 8:
                        str9 = (String) this.nullableStringAdapter.fromJson(reader);
                        str6 = str30;
                        str = str25;
                        str2 = str26;
                        str3 = str27;
                        str4 = str28;
                        break;
                    case 9:
                        str10 = (String) this.nullableStringAdapter.fromJson(reader);
                        str6 = str30;
                        str = str25;
                        str2 = str26;
                        str3 = str27;
                        str4 = str28;
                        break;
                    case 10:
                        str11 = (String) this.nullableStringAdapter.fromJson(reader);
                        str6 = str30;
                        str = str25;
                        str2 = str26;
                        str3 = str27;
                        str4 = str28;
                        break;
                    case 11:
                        str12 = (String) this.nullableStringAdapter.fromJson(reader);
                        str6 = str30;
                        str = str25;
                        str2 = str26;
                        str3 = str27;
                        str4 = str28;
                        break;
                    case 12:
                        str13 = (String) this.nullableStringAdapter.fromJson(reader);
                        str6 = str30;
                        str = str25;
                        str2 = str26;
                        str3 = str27;
                        str4 = str28;
                        break;
                    case 13:
                        str14 = (String) this.nullableStringAdapter.fromJson(reader);
                        str6 = str30;
                        str = str25;
                        str2 = str26;
                        str3 = str27;
                        str4 = str28;
                        break;
                    case 14:
                        str15 = (String) this.nullableStringAdapter.fromJson(reader);
                        str6 = str30;
                        str = str25;
                        str2 = str26;
                        str3 = str27;
                        str4 = str28;
                        break;
                    case 15:
                        str16 = (String) this.nullableStringAdapter.fromJson(reader);
                        str6 = str30;
                        str = str25;
                        str2 = str26;
                        str3 = str27;
                        str4 = str28;
                        break;
                    case 16:
                        str17 = (String) this.nullableStringAdapter.fromJson(reader);
                        str6 = str30;
                        str = str25;
                        str2 = str26;
                        str3 = str27;
                        str4 = str28;
                        break;
                    case 17:
                        str18 = (String) this.nullableStringAdapter.fromJson(reader);
                        str6 = str30;
                        str = str25;
                        str2 = str26;
                        str3 = str27;
                        str4 = str28;
                        break;
                    case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                        str19 = (String) this.nullableStringAdapter.fromJson(reader);
                        str6 = str30;
                        str = str25;
                        str2 = str26;
                        str3 = str27;
                        str4 = str28;
                        break;
                    case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                        str20 = (String) this.nullableStringAdapter.fromJson(reader);
                        str6 = str30;
                        str = str25;
                        str2 = str26;
                        str3 = str27;
                        str4 = str28;
                        break;
                    case 20:
                        str21 = (String) this.nullableStringAdapter.fromJson(reader);
                        str6 = str30;
                        str = str25;
                        str2 = str26;
                        str3 = str27;
                        str4 = str28;
                        break;
                    case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                        str22 = (String) this.nullableStringAdapter.fromJson(reader);
                        str6 = str30;
                        str = str25;
                        str2 = str26;
                        str3 = str27;
                        str4 = str28;
                        break;
                    case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                        str23 = (String) this.nullableStringAdapter.fromJson(reader);
                        str6 = str30;
                        str = str25;
                        str2 = str26;
                        str3 = str27;
                        str4 = str28;
                        break;
                    case 23:
                        str24 = (String) this.nullableStringAdapter.fromJson(reader);
                        str6 = str30;
                        str = str25;
                        str2 = str26;
                        str3 = str27;
                        str4 = str28;
                        break;
                    default:
                        str6 = str30;
                        str = str25;
                        str2 = str26;
                        str3 = str27;
                        str4 = str28;
                        break;
                }
                str5 = str29;
            } else {
                String str31 = str6;
                reader.y();
                if (str26 != null) {
                    if (str27 != null) {
                        if (str28 != null) {
                            if (str29 != null) {
                                if (str31 != null) {
                                    if (str7 != null) {
                                        if (str8 != null) {
                                            return new NextStep.GovernmentId.CapturePage(str25, str26, str27, str28, str29, str31, str7, str8, str9, str10, str11, str12, str13, str14, str15, str16, str17, str18, str19, str20, str21, str22, str23, str24);
                                        }
                                        throw tm.c.o("confirmCapture", "confirmCapture", reader);
                                    }
                                    throw tm.c.o("capturing", "capturing", reader);
                                }
                                throw tm.c.o("scanSignature", "scanSignature", reader);
                            }
                            throw tm.c.o("scanFrontOrBack", "scanFrontOrBack", reader);
                        }
                        throw tm.c.o("scanPdf417", "scanPdf417", reader);
                    }
                    throw tm.c.o("scanBack", "scanBack", reader);
                }
                throw tm.c.o("scanFront", "scanFront", reader);
            }
        }
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, NextStep.GovernmentId.CapturePage capturePage) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (capturePage != null) {
            writer.l();
            writer.t0("title");
            this.nullableStringAdapter.toJson(writer, capturePage.getTitle());
            writer.t0("scanFront");
            this.stringAdapter.toJson(writer, capturePage.getScanFront());
            writer.t0("scanBack");
            this.stringAdapter.toJson(writer, capturePage.getScanBack());
            writer.t0("scanPdf417");
            this.stringAdapter.toJson(writer, capturePage.getScanPdf417());
            writer.t0("scanFrontOrBack");
            this.stringAdapter.toJson(writer, capturePage.getScanFrontOrBack());
            writer.t0("scanSignature");
            this.stringAdapter.toJson(writer, capturePage.getScanSignature());
            writer.t0("capturing");
            this.stringAdapter.toJson(writer, capturePage.getCapturing());
            writer.t0("confirmCapture");
            this.stringAdapter.toJson(writer, capturePage.getConfirmCapture());
            writer.t0("disclaimer");
            this.nullableStringAdapter.toJson(writer, capturePage.getDisclaimer());
            writer.t0("hintHoldStill");
            this.nullableStringAdapter.toJson(writer, capturePage.getHintHoldStill());
            writer.t0("hintLowLight");
            this.nullableStringAdapter.toJson(writer, capturePage.getHintLowLight());
            writer.t0("btnHelp");
            this.nullableStringAdapter.toJson(writer, capturePage.getBtnHelp());
            writer.t0("barcodeHelpModalTitle");
            this.nullableStringAdapter.toJson(writer, capturePage.getBarcodeHelpModalTitle());
            writer.t0("barcodeHelpModalPrompt");
            this.nullableStringAdapter.toJson(writer, capturePage.getBarcodeHelpModalPrompt());
            writer.t0("barcodeHelpModalHints");
            this.nullableStringAdapter.toJson(writer, capturePage.getBarcodeHelpModalHints());
            writer.t0("barcodeHelpModalContinueBtn");
            this.nullableStringAdapter.toJson(writer, capturePage.getBarcodeHelpModalContinueBtn());
            writer.t0("idFrontHelpModalTitle");
            this.nullableStringAdapter.toJson(writer, capturePage.getIdFrontHelpModalTitle());
            writer.t0("idFrontHelpModalPrompt");
            this.nullableStringAdapter.toJson(writer, capturePage.getIdFrontHelpModalPrompt());
            writer.t0("idFrontHelpModalHintsMobile");
            this.nullableStringAdapter.toJson(writer, capturePage.getIdFrontHelpModalHintsMobile());
            writer.t0("idFrontHelpModalContinueBtn");
            this.nullableStringAdapter.toJson(writer, capturePage.getIdFrontHelpModalContinueBtn());
            writer.t0("idBackHelpModalTitle");
            this.nullableStringAdapter.toJson(writer, capturePage.getIdBackHelpModalTitle());
            writer.t0("idBackHelpModalPrompt");
            this.nullableStringAdapter.toJson(writer, capturePage.getIdBackHelpModalPrompt());
            writer.t0("idBackHelpModalHintsMobile");
            this.nullableStringAdapter.toJson(writer, capturePage.getIdBackHelpModalHintsMobile());
            writer.t0("idBackHelpModalContinueBtn");
            this.nullableStringAdapter.toJson(writer, capturePage.getIdBackHelpModalContinueBtn());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
