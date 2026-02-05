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
@Metadata(d1 = {"\u0000R\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0018\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019R\u001c\u0010\u001b\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u001a0\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001b\u0010\u0019R\u001e\u0010\u001d\u001a\n\u0012\u0004\u0012\u00020\u0002\u0018\u00010\u001c8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u001d\u0010\u001e¨\u0006\u001f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep_Document_AssetConfigJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$AssetConfig;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$AssetConfig;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$AssetConfig;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$AssetConfig$PromptPage;", "nullablePromptPageAdapter", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$Document$AssetConfig$PendingPage;", "nullablePendingPageAdapter", "Ljava/lang/reflect/Constructor;", "constructorRef", "Ljava/lang/reflect/Constructor;", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nNextStep_Document_AssetConfigJsonAdapter.kt\nKotlin\n*S Kotlin\n*F\n+ 1 NextStep_Document_AssetConfigJsonAdapter.kt\ncom/withpersona/sdk2/inquiry/network/dto/NextStep_Document_AssetConfigJsonAdapter\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,100:1\n1#2:101\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class NextStep_Document_AssetConfigJsonAdapter extends h {
    private volatile Constructor<NextStep.Document.AssetConfig> constructorRef;
    @NotNull
    private final h nullablePendingPageAdapter;
    @NotNull
    private final h nullablePromptPageAdapter;
    @NotNull
    private final m.b options;

    public NextStep_Document_AssetConfigJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("promptPage", "pendingPage");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(NextStep.Document.AssetConfig.PromptPage.class, x0.d(), "promptPage");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullablePromptPageAdapter = f10;
        h f11 = moshi.f(NextStep.Document.AssetConfig.PendingPage.class, x0.d(), "pendingPage");
        Intrinsics.checkNotNullExpressionValue(f11, "adapter(...)");
        this.nullablePendingPageAdapter = f11;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(51);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("NextStep.Document.AssetConfig");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public NextStep.Document.AssetConfig fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.s();
        NextStep.Document.AssetConfig.PromptPage promptPage = null;
        NextStep.Document.AssetConfig.PendingPage pendingPage = null;
        int i10 = -1;
        while (reader.hasNext()) {
            int W = reader.W(this.options);
            if (W == -1) {
                reader.E0();
                reader.P();
            } else if (W == 0) {
                promptPage = (NextStep.Document.AssetConfig.PromptPage) this.nullablePromptPageAdapter.fromJson(reader);
                i10 &= -2;
            } else if (W == 1) {
                pendingPage = (NextStep.Document.AssetConfig.PendingPage) this.nullablePendingPageAdapter.fromJson(reader);
                i10 &= -3;
            }
        }
        reader.z();
        if (i10 == -4) {
            return new NextStep.Document.AssetConfig(promptPage, pendingPage);
        }
        Constructor<NextStep.Document.AssetConfig> constructor = this.constructorRef;
        if (constructor == null) {
            constructor = NextStep.Document.AssetConfig.class.getDeclaredConstructor(NextStep.Document.AssetConfig.PromptPage.class, NextStep.Document.AssetConfig.PendingPage.class, Integer.TYPE, ym.c.f54853c);
            this.constructorRef = constructor;
            Intrinsics.checkNotNullExpressionValue(constructor, "also(...)");
        }
        NextStep.Document.AssetConfig newInstance = constructor.newInstance(promptPage, pendingPage, Integer.valueOf(i10), null);
        Intrinsics.checkNotNullExpressionValue(newInstance, "newInstance(...)");
        return newInstance;
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, NextStep.Document.AssetConfig assetConfig) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (assetConfig != null) {
            writer.k();
            writer.W("promptPage");
            this.nullablePromptPageAdapter.toJson(writer, assetConfig.getPromptPage());
            writer.W("pendingPage");
            this.nullablePendingPageAdapter.toJson(writer, assetConfig.getPendingPage());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
