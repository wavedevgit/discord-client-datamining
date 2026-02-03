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
@Metadata(d1 = {"\u0000n\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0018\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019R\u001a\u0010\u001b\u001a\b\u0012\u0004\u0012\u00020\u001a0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001b\u0010\u0019R\u001c\u0010\u001c\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001c\u0010\u0019R\u001a\u0010\u001e\u001a\b\u0012\u0004\u0012\u00020\u001d0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001e\u0010\u0019R\u001a\u0010\u001f\u001a\b\u0012\u0004\u0012\u00020\u00070\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001f\u0010\u0019R\u001a\u0010!\u001a\b\u0012\u0004\u0012\u00020 0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b!\u0010\u0019R\u001c\u0010#\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\"0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b#\u0010\u0019R\u001c\u0010%\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010$0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b%\u0010\u0019R\u001c\u0010'\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010&0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b'\u0010\u0019¨\u0006("}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep_Document_ConfigJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$Config;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$Config;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$Config;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "", "nullableBooleanAdapter", "Lcom/squareup/moshi/h;", "", "intAdapter", "nullableStringAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$StartPage;", "startPageAdapter", "stringAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$Localizations;", "localizationsAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$Pages;", "nullablePagesAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$AssetConfig;", "nullableAssetConfigAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/PendingPageTextPosition;", "nullablePendingPageTextPositionAdapter", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class NextStep_Document_ConfigJsonAdapter extends h {
    @NotNull
    private final h intAdapter;
    @NotNull
    private final h localizationsAdapter;
    @NotNull
    private final h nullableAssetConfigAdapter;
    @NotNull
    private final h nullableBooleanAdapter;
    @NotNull
    private final h nullablePagesAdapter;
    @NotNull
    private final h nullablePendingPageTextPositionAdapter;
    @NotNull
    private final h nullableStringAdapter;
    @NotNull
    private final m.b options;
    @NotNull
    private final h startPageAdapter;
    @NotNull
    private final h stringAdapter;

    public NextStep_Document_ConfigJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("backStepEnabled", "cancelButtonEnabled", "documentFileLimit", "documentId", "startPage", "fieldKeyDocument", "kind", "localizations", "pages", "assets", "pendingPageTextVerticalPosition");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(Boolean.class, x0.d(), "backStepEnabled");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullableBooleanAdapter = f10;
        h f11 = moshi.f(Integer.TYPE, x0.d(), "documentFileLimit");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.intAdapter = f11;
        h f12 = moshi.f(String.class, x0.d(), "documentId");
        Intrinsics.checkNotNullExpressionValue(f12, "adapter(...)");
        this.nullableStringAdapter = f12;
        h f13 = moshi.f(NextStep.Document.StartPage.class, x0.d(), "startPage");
        Intrinsics.checkNotNullExpressionValue(f13, "adapter(...)");
        this.startPageAdapter = f13;
        h f14 = moshi.f(String.class, x0.d(), "fieldKeyDocument");
        Intrinsics.checkNotNullExpressionValue(f14, "adapter(...)");
        this.stringAdapter = f14;
        h f15 = moshi.f(NextStep.Document.Localizations.class, x0.d(), "localizations");
        Intrinsics.checkNotNullExpressionValue(f15, "adapter(...)");
        this.localizationsAdapter = f15;
        h f16 = moshi.f(NextStep.Document.Pages.class, x0.d(), "pages");
        Intrinsics.checkNotNullExpressionValue(f16, "adapter(...)");
        this.nullablePagesAdapter = f16;
        h f17 = moshi.f(NextStep.Document.AssetConfig.class, x0.d(), "assets");
        Intrinsics.checkNotNullExpressionValue(f17, "adapter(...)");
        this.nullableAssetConfigAdapter = f17;
        h f18 = moshi.f(PendingPageTextPosition.class, x0.d(), "pendingPageTextVerticalPosition");
        Intrinsics.checkNotNullExpressionValue(f18, "adapter(...)");
        this.nullablePendingPageTextPositionAdapter = f18;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(46);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("NextStep.Document.Config");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public NextStep.Document.Config fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.r();
        Integer num = null;
        Boolean bool = null;
        Boolean bool2 = null;
        String str = null;
        NextStep.Document.StartPage startPage = null;
        String str2 = null;
        String str3 = null;
        NextStep.Document.Localizations localizations = null;
        NextStep.Document.Pages pages = null;
        NextStep.Document.AssetConfig assetConfig = null;
        PendingPageTextPosition pendingPageTextPosition = null;
        while (true) {
            Integer num2 = num;
            Boolean bool3 = bool;
            if (reader.hasNext()) {
                Boolean bool4 = bool2;
                switch (reader.A0(this.options)) {
                    case -1:
                        reader.E0();
                        reader.P();
                        num = num2;
                        bool2 = bool4;
                        break;
                    case 0:
                        bool = (Boolean) this.nullableBooleanAdapter.fromJson(reader);
                        num = num2;
                        bool2 = bool4;
                        continue;
                    case 1:
                        bool2 = (Boolean) this.nullableBooleanAdapter.fromJson(reader);
                        num = num2;
                        break;
                    case 2:
                        num = (Integer) this.intAdapter.fromJson(reader);
                        if (num == null) {
                            throw vm.c.x("documentFileLimit", "documentFileLimit", reader);
                        }
                        bool2 = bool4;
                        break;
                    case 3:
                        str = (String) this.nullableStringAdapter.fromJson(reader);
                        num = num2;
                        bool2 = bool4;
                        break;
                    case 4:
                        startPage = (NextStep.Document.StartPage) this.startPageAdapter.fromJson(reader);
                        if (startPage == null) {
                            throw vm.c.x("startPage", "startPage", reader);
                        }
                        num = num2;
                        bool2 = bool4;
                        break;
                    case 5:
                        str2 = (String) this.stringAdapter.fromJson(reader);
                        if (str2 == null) {
                            throw vm.c.x("fieldKeyDocument", "fieldKeyDocument", reader);
                        }
                        num = num2;
                        bool2 = bool4;
                        break;
                    case 6:
                        str3 = (String) this.stringAdapter.fromJson(reader);
                        if (str3 == null) {
                            throw vm.c.x("kind", "kind", reader);
                        }
                        num = num2;
                        bool2 = bool4;
                        break;
                    case 7:
                        localizations = (NextStep.Document.Localizations) this.localizationsAdapter.fromJson(reader);
                        if (localizations == null) {
                            throw vm.c.x("localizations", "localizations", reader);
                        }
                        num = num2;
                        bool2 = bool4;
                        break;
                    case 8:
                        pages = (NextStep.Document.Pages) this.nullablePagesAdapter.fromJson(reader);
                        num = num2;
                        bool2 = bool4;
                        break;
                    case 9:
                        assetConfig = (NextStep.Document.AssetConfig) this.nullableAssetConfigAdapter.fromJson(reader);
                        num = num2;
                        bool2 = bool4;
                        break;
                    case 10:
                        pendingPageTextPosition = (PendingPageTextPosition) this.nullablePendingPageTextPositionAdapter.fromJson(reader);
                        num = num2;
                        bool2 = bool4;
                        break;
                    default:
                        num = num2;
                        bool2 = bool4;
                        break;
                }
                bool = bool3;
            } else {
                Boolean bool5 = bool2;
                reader.y();
                if (num2 != null) {
                    int intValue = num2.intValue();
                    if (startPage != null) {
                        if (str2 != null) {
                            if (str3 != null) {
                                if (localizations != null) {
                                    return new NextStep.Document.Config(bool3, bool5, intValue, str, startPage, str2, str3, localizations, pages, assetConfig, pendingPageTextPosition);
                                }
                                throw vm.c.o("localizations", "localizations", reader);
                            }
                            throw vm.c.o("kind", "kind", reader);
                        }
                        throw vm.c.o("fieldKeyDocument", "fieldKeyDocument", reader);
                    }
                    throw vm.c.o("startPage", "startPage", reader);
                }
                throw vm.c.o("documentFileLimit", "documentFileLimit", reader);
            }
        }
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, NextStep.Document.Config config) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (config != null) {
            writer.l();
            writer.A0("backStepEnabled");
            this.nullableBooleanAdapter.toJson(writer, config.getBackStepEnabled());
            writer.A0("cancelButtonEnabled");
            this.nullableBooleanAdapter.toJson(writer, config.getCancelButtonEnabled());
            writer.A0("documentFileLimit");
            this.intAdapter.toJson(writer, Integer.valueOf(config.getDocumentFileLimit()));
            writer.A0("documentId");
            this.nullableStringAdapter.toJson(writer, config.getDocumentId());
            writer.A0("startPage");
            this.startPageAdapter.toJson(writer, config.getStartPage());
            writer.A0("fieldKeyDocument");
            this.stringAdapter.toJson(writer, config.getFieldKeyDocument());
            writer.A0("kind");
            this.stringAdapter.toJson(writer, config.getKind());
            writer.A0("localizations");
            this.localizationsAdapter.toJson(writer, config.getLocalizations());
            writer.A0("pages");
            this.nullablePagesAdapter.toJson(writer, config.getPages());
            writer.A0("assets");
            this.nullableAssetConfigAdapter.toJson(writer, config.getAssets());
            writer.A0("pendingPageTextVerticalPosition");
            this.nullablePendingPageTextPositionAdapter.toJson(writer, config.getPendingPageTextVerticalPosition());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
