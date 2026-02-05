package com.withpersona.sdk2.inquiry.network.dto;

import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import java.lang.reflect.Constructor;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000d\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0018\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019R\u001c\u0010\u001b\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001a0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001b\u0010\u0019R\u001c\u0010\u001d\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001c0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001d\u0010\u0019R\u001c\u0010\u001f\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001e0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001f\u0010\u0019R\u001c\u0010!\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010 0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b!\u0010\u0019R\u001e\u0010#\u001a\n\u0012\u0004\u0012\u00020\u0002\u0018\u00010\"8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b#\u0010$¨\u0006%"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep_GovernmentId_AssetConfigJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AssetConfig;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AssetConfig;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AssetConfig;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AssetConfig$SelectPage;", "nullableSelectPageAdapter", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AssetConfig$PromptPage;", "nullablePromptPageAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AssetConfig$CapturePage;", "nullableCapturePageAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AssetConfig$CheckPage;", "nullableCheckPageAdapter", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AssetConfig$PendingPage;", "nullablePendingPageAdapter", "Ljava/lang/reflect/Constructor;", "constructorRef", "Ljava/lang/reflect/Constructor;", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nNextStep_GovernmentId_AssetConfigJsonAdapter.kt\nKotlin\n*S Kotlin\n*F\n+ 1 NextStep_GovernmentId_AssetConfigJsonAdapter.kt\ncom/withpersona/sdk2/inquiry/network/dto/NextStep_GovernmentId_AssetConfigJsonAdapter\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,149:1\n1#2:150\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class NextStep_GovernmentId_AssetConfigJsonAdapter extends h {
    private volatile Constructor<NextStep.GovernmentId.AssetConfig> constructorRef;
    @NotNull
    private final h nullableCapturePageAdapter;
    @NotNull
    private final h nullableCheckPageAdapter;
    @NotNull
    private final h nullablePendingPageAdapter;
    @NotNull
    private final h nullablePromptPageAdapter;
    @NotNull
    private final h nullableSelectPageAdapter;
    @NotNull
    private final m.b options;

    public NextStep_GovernmentId_AssetConfigJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("selectPage", "promptPage", "capturePage", "checkPage", "pendingPage");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(NextStep.GovernmentId.AssetConfig.SelectPage.class, x0.d(), "selectPage");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullableSelectPageAdapter = f10;
        h f11 = moshi.f(NextStep.GovernmentId.AssetConfig.PromptPage.class, x0.d(), "promptPage");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.nullablePromptPageAdapter = f11;
        h f12 = moshi.f(NextStep.GovernmentId.AssetConfig.CapturePage.class, x0.d(), "capturePage");
        Intrinsics.checkNotNullExpressionValue(f12, "adapter(...)");
        this.nullableCapturePageAdapter = f12;
        h f13 = moshi.f(NextStep.GovernmentId.AssetConfig.CheckPage.class, x0.d(), "checkPage");
        Intrinsics.checkNotNullExpressionValue(f13, "adapter(...)");
        this.nullableCheckPageAdapter = f13;
        h f14 = moshi.f(NextStep.GovernmentId.AssetConfig.PendingPage.class, x0.d(), "pendingPage");
        Intrinsics.checkNotNullExpressionValue(f14, "adapter(...)");
        this.nullablePendingPageAdapter = f14;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(55);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("NextStep.GovernmentId.AssetConfig");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public NextStep.GovernmentId.AssetConfig fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.s();
        NextStep.GovernmentId.AssetConfig.SelectPage selectPage = null;
        NextStep.GovernmentId.AssetConfig.PromptPage promptPage = null;
        NextStep.GovernmentId.AssetConfig.CapturePage capturePage = null;
        NextStep.GovernmentId.AssetConfig.CheckPage checkPage = null;
        NextStep.GovernmentId.AssetConfig.PendingPage pendingPage = null;
        int i10 = -1;
        while (reader.hasNext()) {
            int W = reader.W(this.options);
            if (W == -1) {
                reader.E0();
                reader.P();
            } else if (W == 0) {
                selectPage = (NextStep.GovernmentId.AssetConfig.SelectPage) this.nullableSelectPageAdapter.fromJson(reader);
                i10 &= -2;
            } else if (W == 1) {
                promptPage = (NextStep.GovernmentId.AssetConfig.PromptPage) this.nullablePromptPageAdapter.fromJson(reader);
                i10 &= -3;
            } else if (W == 2) {
                capturePage = (NextStep.GovernmentId.AssetConfig.CapturePage) this.nullableCapturePageAdapter.fromJson(reader);
                i10 &= -5;
            } else if (W == 3) {
                checkPage = (NextStep.GovernmentId.AssetConfig.CheckPage) this.nullableCheckPageAdapter.fromJson(reader);
                i10 &= -9;
            } else if (W == 4) {
                pendingPage = (NextStep.GovernmentId.AssetConfig.PendingPage) this.nullablePendingPageAdapter.fromJson(reader);
                i10 &= -17;
            }
        }
        reader.z();
        if (i10 == -32) {
            NextStep.GovernmentId.AssetConfig.PendingPage pendingPage2 = pendingPage;
            NextStep.GovernmentId.AssetConfig.CheckPage checkPage2 = checkPage;
            return new NextStep.GovernmentId.AssetConfig(selectPage, promptPage, capturePage, checkPage2, pendingPage2);
        }
        NextStep.GovernmentId.AssetConfig.PendingPage pendingPage3 = pendingPage;
        NextStep.GovernmentId.AssetConfig.CheckPage checkPage3 = checkPage;
        NextStep.GovernmentId.AssetConfig.CapturePage capturePage2 = capturePage;
        NextStep.GovernmentId.AssetConfig.PromptPage promptPage2 = promptPage;
        NextStep.GovernmentId.AssetConfig.SelectPage selectPage2 = selectPage;
        Constructor<NextStep.GovernmentId.AssetConfig> constructor = this.constructorRef;
        if (constructor == null) {
            constructor = NextStep.GovernmentId.AssetConfig.class.getDeclaredConstructor(NextStep.GovernmentId.AssetConfig.SelectPage.class, NextStep.GovernmentId.AssetConfig.PromptPage.class, NextStep.GovernmentId.AssetConfig.CapturePage.class, NextStep.GovernmentId.AssetConfig.CheckPage.class, NextStep.GovernmentId.AssetConfig.PendingPage.class, Integer.TYPE, ym.c.f54853c);
            this.constructorRef = constructor;
            Intrinsics.checkNotNullExpressionValue(constructor, "also(...)");
        }
        NextStep.GovernmentId.AssetConfig newInstance = constructor.newInstance(selectPage2, promptPage2, capturePage2, checkPage3, pendingPage3, Integer.valueOf(i10), null);
        Intrinsics.checkNotNullExpressionValue(newInstance, "newInstance(...)");
        return newInstance;
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, NextStep.GovernmentId.AssetConfig assetConfig) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (assetConfig != null) {
            writer.k();
            writer.W("selectPage");
            this.nullableSelectPageAdapter.toJson(writer, assetConfig.getSelectPage());
            writer.W("promptPage");
            this.nullablePromptPageAdapter.toJson(writer, assetConfig.getPromptPage());
            writer.W("capturePage");
            this.nullableCapturePageAdapter.toJson(writer, assetConfig.getCapturePage());
            writer.W("checkPage");
            this.nullableCheckPageAdapter.toJson(writer, assetConfig.getCheckPage());
            writer.W("pendingPage");
            this.nullablePendingPageAdapter.toJson(writer, assetConfig.getPendingPage());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
