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
@Metadata(d1 = {"\u0000^\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001a\u0010\u0018\u001a\b\u0012\u0004\u0012\u00020\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019R\u001a\u0010\u001b\u001a\b\u0012\u0004\u0012\u00020\u001a0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001b\u0010\u0019R\u001a\u0010\u001d\u001a\b\u0012\u0004\u0012\u00020\u001c0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001d\u0010\u0019R\u001c\u0010\u001f\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001e0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001f\u0010\u0019R\u001c\u0010!\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010 0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b!\u0010\u0019¨\u0006\""}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep_Selfie_LocalizationsJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$Localizations;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$Localizations;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$Localizations;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$PromptPage;", "promptPageAdapter", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$CapturePage;", "capturePageAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$PendingPage;", "pendingPageAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$CancelDialog;", "nullableCancelDialogAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Selfie$CheckPage;", "nullableCheckPageAdapter", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class NextStep_Selfie_LocalizationsJsonAdapter extends h {
    @NotNull
    private final h capturePageAdapter;
    @NotNull
    private final h nullableCancelDialogAdapter;
    @NotNull
    private final h nullableCheckPageAdapter;
    @NotNull
    private final m.b options;
    @NotNull
    private final h pendingPageAdapter;
    @NotNull
    private final h promptPageAdapter;

    public NextStep_Selfie_LocalizationsJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("promptPage", "capturePage", "pendingPage", "cancelDialog", "checkPage");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(NextStep.Selfie.PromptPage.class, x0.d(), "promptPage");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.promptPageAdapter = f10;
        h f11 = moshi.f(NextStep.Selfie.CapturePage.class, x0.d(), "capturePage");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.capturePageAdapter = f11;
        h f12 = moshi.f(NextStep.Selfie.PendingPage.class, x0.d(), "pendingPage");
        Intrinsics.checkNotNullExpressionValue(f12, "adapter(...)");
        this.pendingPageAdapter = f12;
        h f13 = moshi.f(NextStep.CancelDialog.class, x0.d(), "cancelDialog");
        Intrinsics.checkNotNullExpressionValue(f13, "adapter(...)");
        this.nullableCancelDialogAdapter = f13;
        h f14 = moshi.f(NextStep.Selfie.CheckPage.class, x0.d(), "checkPage");
        Intrinsics.checkNotNullExpressionValue(f14, "adapter(...)");
        this.nullableCheckPageAdapter = f14;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(51);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("NextStep.Selfie.Localizations");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public NextStep.Selfie.Localizations fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.s();
        NextStep.Selfie.PromptPage promptPage = null;
        NextStep.Selfie.CapturePage capturePage = null;
        NextStep.Selfie.PendingPage pendingPage = null;
        NextStep.CancelDialog cancelDialog = null;
        NextStep.Selfie.CheckPage checkPage = null;
        while (reader.hasNext()) {
            int W = reader.W(this.options);
            if (W == -1) {
                reader.E0();
                reader.P();
            } else if (W == 0) {
                promptPage = (NextStep.Selfie.PromptPage) this.promptPageAdapter.fromJson(reader);
                if (promptPage == null) {
                    throw ym.c.x("promptPage", "promptPage", reader);
                }
            } else if (W == 1) {
                capturePage = (NextStep.Selfie.CapturePage) this.capturePageAdapter.fromJson(reader);
                if (capturePage == null) {
                    throw ym.c.x("capturePage", "capturePage", reader);
                }
            } else if (W == 2) {
                pendingPage = (NextStep.Selfie.PendingPage) this.pendingPageAdapter.fromJson(reader);
                if (pendingPage == null) {
                    throw ym.c.x("pendingPage", "pendingPage", reader);
                }
            } else if (W == 3) {
                cancelDialog = (NextStep.CancelDialog) this.nullableCancelDialogAdapter.fromJson(reader);
            } else if (W == 4) {
                checkPage = (NextStep.Selfie.CheckPage) this.nullableCheckPageAdapter.fromJson(reader);
            }
        }
        reader.z();
        if (promptPage != null) {
            if (capturePage != null) {
                if (pendingPage != null) {
                    return new NextStep.Selfie.Localizations(promptPage, capturePage, pendingPage, cancelDialog, checkPage);
                }
                throw ym.c.o("pendingPage", "pendingPage", reader);
            }
            throw ym.c.o("capturePage", "capturePage", reader);
        }
        throw ym.c.o("promptPage", "promptPage", reader);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, NextStep.Selfie.Localizations localizations) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (localizations != null) {
            writer.k();
            writer.W("promptPage");
            this.promptPageAdapter.toJson(writer, localizations.getPromptPage());
            writer.W("capturePage");
            this.capturePageAdapter.toJson(writer, localizations.getCapturePage());
            writer.W("pendingPage");
            this.pendingPageAdapter.toJson(writer, localizations.getPendingPage());
            writer.W("cancelDialog");
            this.nullableCancelDialogAdapter.toJson(writer, localizations.getCancelDialog());
            writer.W("checkPage");
            this.nullableCheckPageAdapter.toJson(writer, localizations.getCheckPage());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
