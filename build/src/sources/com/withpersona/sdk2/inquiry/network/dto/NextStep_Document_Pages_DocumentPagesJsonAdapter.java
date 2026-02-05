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
@Metadata(d1 = {"\u0000L\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0018\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019R\u001c\u0010\u001b\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001a0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001b\u0010\u0019¨\u0006\u001c"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep_Document_Pages_DocumentPagesJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$Pages$DocumentPages;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$Pages$DocumentPages;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$Pages$DocumentPages;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$Pages$DocumentStartPage;", "nullableDocumentStartPageAdapter", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$Pages$UploadOptionsDialog;", "nullableUploadOptionsDialogAdapter", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class NextStep_Document_Pages_DocumentPagesJsonAdapter extends h {
    @NotNull
    private final h nullableDocumentStartPageAdapter;
    @NotNull
    private final h nullableUploadOptionsDialogAdapter;
    @NotNull
    private final m.b options;

    public NextStep_Document_Pages_DocumentPagesJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("prompt", "uploadOptionsDialog");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(NextStep.Document.Pages.DocumentStartPage.class, x0.d(), "prompt");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullableDocumentStartPageAdapter = f10;
        h f11 = moshi.f(NextStep.Document.Pages.UploadOptionsDialog.class, x0.d(), "uploadOptionsDialog");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.nullableUploadOptionsDialogAdapter = f11;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(59);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("NextStep.Document.Pages.DocumentPages");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public NextStep.Document.Pages.DocumentPages fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.s();
        NextStep.Document.Pages.DocumentStartPage documentStartPage = null;
        NextStep.Document.Pages.UploadOptionsDialog uploadOptionsDialog = null;
        while (reader.hasNext()) {
            int W = reader.W(this.options);
            if (W == -1) {
                reader.E0();
                reader.P();
            } else if (W == 0) {
                documentStartPage = (NextStep.Document.Pages.DocumentStartPage) this.nullableDocumentStartPageAdapter.fromJson(reader);
            } else if (W == 1) {
                uploadOptionsDialog = (NextStep.Document.Pages.UploadOptionsDialog) this.nullableUploadOptionsDialogAdapter.fromJson(reader);
            }
        }
        reader.z();
        return new NextStep.Document.Pages.DocumentPages(documentStartPage, uploadOptionsDialog);
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, NextStep.Document.Pages.DocumentPages documentPages) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (documentPages != null) {
            writer.k();
            writer.W("prompt");
            this.nullableDocumentStartPageAdapter.toJson(writer, documentPages.getPrompt());
            writer.W("uploadOptionsDialog");
            this.nullableUploadOptionsDialogAdapter.toJson(writer, documentPages.getUploadOptionsDialog());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
