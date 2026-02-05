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
@Metadata(d1 = {"\u0000v\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001a\u0010\u0018\u001a\b\u0012\u0004\u0012\u00020\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019R\u001a\u0010\u001b\u001a\b\u0012\u0004\u0012\u00020\u001a0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001b\u0010\u0019R\u001a\u0010\u001d\u001a\b\u0012\u0004\u0012\u00020\u001c0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001d\u0010\u0019R\u001a\u0010\u001f\u001a\b\u0012\u0004\u0012\u00020\u001e0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001f\u0010\u0019R\u001a\u0010!\u001a\b\u0012\u0004\u0012\u00020 0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b!\u0010\u0019R\u001a\u0010#\u001a\b\u0012\u0004\u0012\u00020\"0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b#\u0010\u0019R\u001a\u0010%\u001a\b\u0012\u0004\u0012\u00020$0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b%\u0010\u0019R\u001c\u0010'\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010&0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b'\u0010\u0019R\u001c\u0010)\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010(0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b)\u0010\u0019¨\u0006*"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep_GovernmentId_LocalizationsJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$Localizations;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$Localizations;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$Localizations;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$SelectPage;", "selectPageAdapter", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$PromptPage;", "promptPageAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$CapturePage;", "capturePageAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$CheckPage;", "checkPageAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$PendingPage;", "pendingPageAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$RequestPage;", "requestPageAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$ReviewUploadPage;", "reviewUploadPageAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$CancelDialog;", "nullableCancelDialogAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AutoClassificationPage;", "nullableAutoClassificationPageAdapter", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class NextStep_GovernmentId_LocalizationsJsonAdapter extends h {
    @NotNull
    private final h capturePageAdapter;
    @NotNull
    private final h checkPageAdapter;
    @NotNull
    private final h nullableAutoClassificationPageAdapter;
    @NotNull
    private final h nullableCancelDialogAdapter;
    @NotNull
    private final m.b options;
    @NotNull
    private final h pendingPageAdapter;
    @NotNull
    private final h promptPageAdapter;
    @NotNull
    private final h requestPageAdapter;
    @NotNull
    private final h reviewUploadPageAdapter;
    @NotNull
    private final h selectPageAdapter;

    public NextStep_GovernmentId_LocalizationsJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("selectPage", "promptPage", "capturePage", "checkPage", "pendingPage", "requestPage", "reviewUploadPage", "cancelDialog", "autoClassificationPage");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(NextStep.GovernmentId.SelectPage.class, x0.d(), "selectPage");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.selectPageAdapter = f10;
        h f11 = moshi.f(NextStep.GovernmentId.PromptPage.class, x0.d(), "promptPage");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.promptPageAdapter = f11;
        h f12 = moshi.f(NextStep.GovernmentId.CapturePage.class, x0.d(), "capturePage");
        Intrinsics.checkNotNullExpressionValue(f12, "adapter(...)");
        this.capturePageAdapter = f12;
        h f13 = moshi.f(NextStep.GovernmentId.CheckPage.class, x0.d(), "checkPage");
        Intrinsics.checkNotNullExpressionValue(f13, "adapter(...)");
        this.checkPageAdapter = f13;
        h f14 = moshi.f(NextStep.GovernmentId.PendingPage.class, x0.d(), "pendingPage");
        Intrinsics.checkNotNullExpressionValue(f14, "adapter(...)");
        this.pendingPageAdapter = f14;
        h f15 = moshi.f(NextStep.GovernmentId.RequestPage.class, x0.d(), "requestPage");
        Intrinsics.checkNotNullExpressionValue(f15, "adapter(...)");
        this.requestPageAdapter = f15;
        h f16 = moshi.f(NextStep.GovernmentId.ReviewUploadPage.class, x0.d(), "reviewUploadPage");
        Intrinsics.checkNotNullExpressionValue(f16, "adapter(...)");
        this.reviewUploadPageAdapter = f16;
        h f17 = moshi.f(NextStep.CancelDialog.class, x0.d(), "cancelDialog");
        Intrinsics.checkNotNullExpressionValue(f17, "adapter(...)");
        this.nullableCancelDialogAdapter = f17;
        h f18 = moshi.f(NextStep.GovernmentId.AutoClassificationPage.class, x0.d(), "autoClassificationPage");
        Intrinsics.checkNotNullExpressionValue(f18, "adapter(...)");
        this.nullableAutoClassificationPageAdapter = f18;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(57);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("NextStep.GovernmentId.Localizations");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public NextStep.GovernmentId.Localizations fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.s();
        NextStep.GovernmentId.SelectPage selectPage = null;
        NextStep.GovernmentId.PromptPage promptPage = null;
        NextStep.GovernmentId.CapturePage capturePage = null;
        NextStep.GovernmentId.CheckPage checkPage = null;
        NextStep.GovernmentId.PendingPage pendingPage = null;
        NextStep.GovernmentId.RequestPage requestPage = null;
        NextStep.GovernmentId.ReviewUploadPage reviewUploadPage = null;
        NextStep.CancelDialog cancelDialog = null;
        NextStep.GovernmentId.AutoClassificationPage autoClassificationPage = null;
        while (true) {
            NextStep.GovernmentId.SelectPage selectPage2 = selectPage;
            NextStep.GovernmentId.PromptPage promptPage2 = promptPage;
            if (reader.hasNext()) {
                NextStep.GovernmentId.CapturePage capturePage2 = capturePage;
                switch (reader.W(this.options)) {
                    case -1:
                        reader.E0();
                        reader.P();
                        capturePage = capturePage2;
                        selectPage = selectPage2;
                        break;
                    case 0:
                        selectPage = (NextStep.GovernmentId.SelectPage) this.selectPageAdapter.fromJson(reader);
                        if (selectPage != null) {
                            capturePage = capturePage2;
                            break;
                        } else {
                            throw ym.c.x("selectPage", "selectPage", reader);
                        }
                    case 1:
                        promptPage = (NextStep.GovernmentId.PromptPage) this.promptPageAdapter.fromJson(reader);
                        if (promptPage != null) {
                            capturePage = capturePage2;
                            selectPage = selectPage2;
                            continue;
                        } else {
                            throw ym.c.x("promptPage", "promptPage", reader);
                        }
                    case 2:
                        capturePage = (NextStep.GovernmentId.CapturePage) this.capturePageAdapter.fromJson(reader);
                        if (capturePage == null) {
                            throw ym.c.x("capturePage", "capturePage", reader);
                        }
                        selectPage = selectPage2;
                        break;
                    case 3:
                        checkPage = (NextStep.GovernmentId.CheckPage) this.checkPageAdapter.fromJson(reader);
                        if (checkPage == null) {
                            throw ym.c.x("checkPage", "checkPage", reader);
                        }
                        capturePage = capturePage2;
                        selectPage = selectPage2;
                        break;
                    case 4:
                        pendingPage = (NextStep.GovernmentId.PendingPage) this.pendingPageAdapter.fromJson(reader);
                        if (pendingPage == null) {
                            throw ym.c.x("pendingPage", "pendingPage", reader);
                        }
                        capturePage = capturePage2;
                        selectPage = selectPage2;
                        break;
                    case 5:
                        requestPage = (NextStep.GovernmentId.RequestPage) this.requestPageAdapter.fromJson(reader);
                        if (requestPage == null) {
                            throw ym.c.x("requestPage", "requestPage", reader);
                        }
                        capturePage = capturePage2;
                        selectPage = selectPage2;
                        break;
                    case 6:
                        reviewUploadPage = (NextStep.GovernmentId.ReviewUploadPage) this.reviewUploadPageAdapter.fromJson(reader);
                        if (reviewUploadPage == null) {
                            throw ym.c.x("reviewUploadPage", "reviewUploadPage", reader);
                        }
                        capturePage = capturePage2;
                        selectPage = selectPage2;
                        break;
                    case 7:
                        cancelDialog = (NextStep.CancelDialog) this.nullableCancelDialogAdapter.fromJson(reader);
                        capturePage = capturePage2;
                        selectPage = selectPage2;
                        break;
                    case 8:
                        autoClassificationPage = (NextStep.GovernmentId.AutoClassificationPage) this.nullableAutoClassificationPageAdapter.fromJson(reader);
                        capturePage = capturePage2;
                        selectPage = selectPage2;
                        break;
                    default:
                        capturePage = capturePage2;
                        selectPage = selectPage2;
                        break;
                }
                promptPage = promptPage2;
            } else {
                NextStep.GovernmentId.CapturePage capturePage3 = capturePage;
                reader.z();
                if (selectPage2 != null) {
                    if (promptPage2 != null) {
                        if (capturePage3 != null) {
                            if (checkPage != null) {
                                if (pendingPage != null) {
                                    if (requestPage != null) {
                                        if (reviewUploadPage != null) {
                                            return new NextStep.GovernmentId.Localizations(selectPage2, promptPage2, capturePage3, checkPage, pendingPage, requestPage, reviewUploadPage, cancelDialog, autoClassificationPage);
                                        }
                                        throw ym.c.o("reviewUploadPage", "reviewUploadPage", reader);
                                    }
                                    throw ym.c.o("requestPage", "requestPage", reader);
                                }
                                throw ym.c.o("pendingPage", "pendingPage", reader);
                            }
                            throw ym.c.o("checkPage", "checkPage", reader);
                        }
                        throw ym.c.o("capturePage", "capturePage", reader);
                    }
                    throw ym.c.o("promptPage", "promptPage", reader);
                }
                throw ym.c.o("selectPage", "selectPage", reader);
            }
        }
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, NextStep.GovernmentId.Localizations localizations) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (localizations != null) {
            writer.k();
            writer.W("selectPage");
            this.selectPageAdapter.toJson(writer, localizations.getSelectPage());
            writer.W("promptPage");
            this.promptPageAdapter.toJson(writer, localizations.getPromptPage());
            writer.W("capturePage");
            this.capturePageAdapter.toJson(writer, localizations.getCapturePage());
            writer.W("checkPage");
            this.checkPageAdapter.toJson(writer, localizations.getCheckPage());
            writer.W("pendingPage");
            this.pendingPageAdapter.toJson(writer, localizations.getPendingPage());
            writer.W("requestPage");
            this.requestPageAdapter.toJson(writer, localizations.getRequestPage());
            writer.W("reviewUploadPage");
            this.reviewUploadPageAdapter.toJson(writer, localizations.getReviewUploadPage());
            writer.W("cancelDialog");
            this.nullableCancelDialogAdapter.toJson(writer, localizations.getCancelDialog());
            writer.W("autoClassificationPage");
            this.nullableAutoClassificationPageAdapter.toJson(writer, localizations.getAutoClassificationPage());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
