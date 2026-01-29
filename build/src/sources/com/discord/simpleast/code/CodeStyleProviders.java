package com.discord.simpleast.code;

import com.discord.simpleast.core.node.StyleNode;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(bv = {1, 0, 3}, d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u001b\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u0000*\u0004\b\u0000\u0010\u00012\u00020\u0002B\u0085\u0001\u0012\u000e\b\u0002\u0010\u0003\u001a\b\u0012\u0004\u0012\u00028\u00000\u0004\u0012\u000e\b\u0002\u0010\u0005\u001a\b\u0012\u0004\u0012\u00028\u00000\u0004\u0012\u000e\b\u0002\u0010\u0006\u001a\b\u0012\u0004\u0012\u00028\u00000\u0004\u0012\u000e\b\u0002\u0010\u0007\u001a\b\u0012\u0004\u0012\u00028\u00000\u0004\u0012\u000e\b\u0002\u0010\b\u001a\b\u0012\u0004\u0012\u00028\u00000\u0004\u0012\u000e\b\u0002\u0010\t\u001a\b\u0012\u0004\u0012\u00028\u00000\u0004\u0012\u000e\b\u0002\u0010\n\u001a\b\u0012\u0004\u0012\u00028\u00000\u0004\u0012\u000e\b\u0002\u0010\u000b\u001a\b\u0012\u0004\u0012\u00028\u00000\u0004¢\u0006\u0002\u0010\fJ\u000f\u0010\u0016\u001a\b\u0012\u0004\u0012\u00028\u00000\u0004HÆ\u0003J\u000f\u0010\u0017\u001a\b\u0012\u0004\u0012\u00028\u00000\u0004HÆ\u0003J\u000f\u0010\u0018\u001a\b\u0012\u0004\u0012\u00028\u00000\u0004HÆ\u0003J\u000f\u0010\u0019\u001a\b\u0012\u0004\u0012\u00028\u00000\u0004HÆ\u0003J\u000f\u0010\u001a\u001a\b\u0012\u0004\u0012\u00028\u00000\u0004HÆ\u0003J\u000f\u0010\u001b\u001a\b\u0012\u0004\u0012\u00028\u00000\u0004HÆ\u0003J\u000f\u0010\u001c\u001a\b\u0012\u0004\u0012\u00028\u00000\u0004HÆ\u0003J\u000f\u0010\u001d\u001a\b\u0012\u0004\u0012\u00028\u00000\u0004HÆ\u0003J\u008f\u0001\u0010\u001e\u001a\b\u0012\u0004\u0012\u00028\u00000\u00002\u000e\b\u0002\u0010\u0003\u001a\b\u0012\u0004\u0012\u00028\u00000\u00042\u000e\b\u0002\u0010\u0005\u001a\b\u0012\u0004\u0012\u00028\u00000\u00042\u000e\b\u0002\u0010\u0006\u001a\b\u0012\u0004\u0012\u00028\u00000\u00042\u000e\b\u0002\u0010\u0007\u001a\b\u0012\u0004\u0012\u00028\u00000\u00042\u000e\b\u0002\u0010\b\u001a\b\u0012\u0004\u0012\u00028\u00000\u00042\u000e\b\u0002\u0010\t\u001a\b\u0012\u0004\u0012\u00028\u00000\u00042\u000e\b\u0002\u0010\n\u001a\b\u0012\u0004\u0012\u00028\u00000\u00042\u000e\b\u0002\u0010\u000b\u001a\b\u0012\u0004\u0012\u00028\u00000\u0004HÆ\u0001J\u0013\u0010\u001f\u001a\u00020 2\b\u0010!\u001a\u0004\u0018\u00010\u0002HÖ\u0003J\t\u0010\"\u001a\u00020#HÖ\u0001J\t\u0010$\u001a\u00020%HÖ\u0001R\u0017\u0010\u0005\u001a\b\u0012\u0004\u0012\u00028\u00000\u0004¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000eR\u0017\u0010\u0003\u001a\b\u0012\u0004\u0012\u00028\u00000\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u000eR\u0017\u0010\n\u001a\b\u0012\u0004\u0012\u00028\u00000\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\u000eR\u0017\u0010\b\u001a\b\u0012\u0004\u0012\u00028\u00000\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u000eR\u0017\u0010\u0007\u001a\b\u0012\u0004\u0012\u00028\u00000\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u000eR\u0017\u0010\u0006\u001a\b\u0012\u0004\u0012\u00028\u00000\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u000eR\u0017\u0010\u000b\u001a\b\u0012\u0004\u0012\u00028\u00000\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u000eR\u0017\u0010\t\u001a\b\u0012\u0004\u0012\u00028\u00000\u0004¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u000e¨\u0006&"}, d2 = {"Lcom/discord/simpleast/code/CodeStyleProviders;", "R", "", "defaultStyleProvider", "Lcom/discord/simpleast/core/node/StyleNode$SpanProvider;", "commentStyleProvider", "literalStyleProvider", "keywordStyleProvider", "identifierStyleProvider", "typesStyleProvider", "genericsStyleProvider", "paramsStyleProvider", "(Lcom/discord/simpleast/core/node/StyleNode$SpanProvider;Lcom/discord/simpleast/core/node/StyleNode$SpanProvider;Lcom/discord/simpleast/core/node/StyleNode$SpanProvider;Lcom/discord/simpleast/core/node/StyleNode$SpanProvider;Lcom/discord/simpleast/core/node/StyleNode$SpanProvider;Lcom/discord/simpleast/core/node/StyleNode$SpanProvider;Lcom/discord/simpleast/core/node/StyleNode$SpanProvider;Lcom/discord/simpleast/core/node/StyleNode$SpanProvider;)V", "getCommentStyleProvider", "()Lcom/discord/simpleast/core/node/StyleNode$SpanProvider;", "getDefaultStyleProvider", "getGenericsStyleProvider", "getIdentifierStyleProvider", "getKeywordStyleProvider", "getLiteralStyleProvider", "getParamsStyleProvider", "getTypesStyleProvider", "component1", "component2", "component3", "component4", "component5", "component6", "component7", "component8", "copy", "equals", "", "other", "hashCode", "", "toString", "", "simpleast-core_release"}, k = 1, mv = {1, 4, 0})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class CodeStyleProviders<R> {
    @NotNull
    private final StyleNode.SpanProvider<R> commentStyleProvider;
    @NotNull
    private final StyleNode.SpanProvider<R> defaultStyleProvider;
    @NotNull
    private final StyleNode.SpanProvider<R> genericsStyleProvider;
    @NotNull
    private final StyleNode.SpanProvider<R> identifierStyleProvider;
    @NotNull
    private final StyleNode.SpanProvider<R> keywordStyleProvider;
    @NotNull
    private final StyleNode.SpanProvider<R> literalStyleProvider;
    @NotNull
    private final StyleNode.SpanProvider<R> paramsStyleProvider;
    @NotNull
    private final StyleNode.SpanProvider<R> typesStyleProvider;

    public CodeStyleProviders() {
        this(null, null, null, null, null, null, null, null, SetSpanOperation.SPAN_MAX_PRIORITY, null);
    }

    public static /* synthetic */ CodeStyleProviders copy$default(CodeStyleProviders codeStyleProviders, StyleNode.SpanProvider spanProvider, StyleNode.SpanProvider spanProvider2, StyleNode.SpanProvider spanProvider3, StyleNode.SpanProvider spanProvider4, StyleNode.SpanProvider spanProvider5, StyleNode.SpanProvider spanProvider6, StyleNode.SpanProvider spanProvider7, StyleNode.SpanProvider spanProvider8, int i10, Object obj) {
        StyleNode.SpanProvider<R> spanProvider9 = spanProvider;
        if ((i10 & 1) != 0) {
            spanProvider9 = codeStyleProviders.defaultStyleProvider;
        }
        StyleNode.SpanProvider<R> spanProvider10 = spanProvider2;
        if ((i10 & 2) != 0) {
            spanProvider10 = codeStyleProviders.commentStyleProvider;
        }
        StyleNode.SpanProvider<R> spanProvider11 = spanProvider3;
        if ((i10 & 4) != 0) {
            spanProvider11 = codeStyleProviders.literalStyleProvider;
        }
        StyleNode.SpanProvider<R> spanProvider12 = spanProvider4;
        if ((i10 & 8) != 0) {
            spanProvider12 = codeStyleProviders.keywordStyleProvider;
        }
        StyleNode.SpanProvider<R> spanProvider13 = spanProvider5;
        if ((i10 & 16) != 0) {
            spanProvider13 = codeStyleProviders.identifierStyleProvider;
        }
        StyleNode.SpanProvider<R> spanProvider14 = spanProvider6;
        if ((i10 & 32) != 0) {
            spanProvider14 = codeStyleProviders.typesStyleProvider;
        }
        StyleNode.SpanProvider<R> spanProvider15 = spanProvider7;
        if ((i10 & 64) != 0) {
            spanProvider15 = codeStyleProviders.genericsStyleProvider;
        }
        StyleNode.SpanProvider<R> spanProvider16 = spanProvider8;
        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
            spanProvider16 = codeStyleProviders.paramsStyleProvider;
        }
        StyleNode.SpanProvider spanProvider17 = spanProvider15;
        StyleNode.SpanProvider spanProvider18 = spanProvider16;
        StyleNode.SpanProvider spanProvider19 = spanProvider13;
        StyleNode.SpanProvider spanProvider20 = spanProvider14;
        return codeStyleProviders.copy(spanProvider9, spanProvider10, spanProvider11, spanProvider12, spanProvider19, spanProvider20, spanProvider17, spanProvider18);
    }

    @NotNull
    public final StyleNode.SpanProvider<R> component1() {
        return this.defaultStyleProvider;
    }

    @NotNull
    public final StyleNode.SpanProvider<R> component2() {
        return this.commentStyleProvider;
    }

    @NotNull
    public final StyleNode.SpanProvider<R> component3() {
        return this.literalStyleProvider;
    }

    @NotNull
    public final StyleNode.SpanProvider<R> component4() {
        return this.keywordStyleProvider;
    }

    @NotNull
    public final StyleNode.SpanProvider<R> component5() {
        return this.identifierStyleProvider;
    }

    @NotNull
    public final StyleNode.SpanProvider<R> component6() {
        return this.typesStyleProvider;
    }

    @NotNull
    public final StyleNode.SpanProvider<R> component7() {
        return this.genericsStyleProvider;
    }

    @NotNull
    public final StyleNode.SpanProvider<R> component8() {
        return this.paramsStyleProvider;
    }

    @NotNull
    public final CodeStyleProviders<R> copy(@NotNull StyleNode.SpanProvider<R> defaultStyleProvider, @NotNull StyleNode.SpanProvider<R> commentStyleProvider, @NotNull StyleNode.SpanProvider<R> literalStyleProvider, @NotNull StyleNode.SpanProvider<R> keywordStyleProvider, @NotNull StyleNode.SpanProvider<R> identifierStyleProvider, @NotNull StyleNode.SpanProvider<R> typesStyleProvider, @NotNull StyleNode.SpanProvider<R> genericsStyleProvider, @NotNull StyleNode.SpanProvider<R> paramsStyleProvider) {
        Intrinsics.checkNotNullParameter(defaultStyleProvider, "defaultStyleProvider");
        Intrinsics.checkNotNullParameter(commentStyleProvider, "commentStyleProvider");
        Intrinsics.checkNotNullParameter(literalStyleProvider, "literalStyleProvider");
        Intrinsics.checkNotNullParameter(keywordStyleProvider, "keywordStyleProvider");
        Intrinsics.checkNotNullParameter(identifierStyleProvider, "identifierStyleProvider");
        Intrinsics.checkNotNullParameter(typesStyleProvider, "typesStyleProvider");
        Intrinsics.checkNotNullParameter(genericsStyleProvider, "genericsStyleProvider");
        Intrinsics.checkNotNullParameter(paramsStyleProvider, "paramsStyleProvider");
        return new CodeStyleProviders<>(defaultStyleProvider, commentStyleProvider, literalStyleProvider, keywordStyleProvider, identifierStyleProvider, typesStyleProvider, genericsStyleProvider, paramsStyleProvider);
    }

    public boolean equals(Object obj) {
        if (this != obj) {
            if (obj instanceof CodeStyleProviders) {
                CodeStyleProviders codeStyleProviders = (CodeStyleProviders) obj;
                return Intrinsics.areEqual(this.defaultStyleProvider, codeStyleProviders.defaultStyleProvider) && Intrinsics.areEqual(this.commentStyleProvider, codeStyleProviders.commentStyleProvider) && Intrinsics.areEqual(this.literalStyleProvider, codeStyleProviders.literalStyleProvider) && Intrinsics.areEqual(this.keywordStyleProvider, codeStyleProviders.keywordStyleProvider) && Intrinsics.areEqual(this.identifierStyleProvider, codeStyleProviders.identifierStyleProvider) && Intrinsics.areEqual(this.typesStyleProvider, codeStyleProviders.typesStyleProvider) && Intrinsics.areEqual(this.genericsStyleProvider, codeStyleProviders.genericsStyleProvider) && Intrinsics.areEqual(this.paramsStyleProvider, codeStyleProviders.paramsStyleProvider);
            }
            return false;
        }
        return true;
    }

    @NotNull
    public final StyleNode.SpanProvider<R> getCommentStyleProvider() {
        return this.commentStyleProvider;
    }

    @NotNull
    public final StyleNode.SpanProvider<R> getDefaultStyleProvider() {
        return this.defaultStyleProvider;
    }

    @NotNull
    public final StyleNode.SpanProvider<R> getGenericsStyleProvider() {
        return this.genericsStyleProvider;
    }

    @NotNull
    public final StyleNode.SpanProvider<R> getIdentifierStyleProvider() {
        return this.identifierStyleProvider;
    }

    @NotNull
    public final StyleNode.SpanProvider<R> getKeywordStyleProvider() {
        return this.keywordStyleProvider;
    }

    @NotNull
    public final StyleNode.SpanProvider<R> getLiteralStyleProvider() {
        return this.literalStyleProvider;
    }

    @NotNull
    public final StyleNode.SpanProvider<R> getParamsStyleProvider() {
        return this.paramsStyleProvider;
    }

    @NotNull
    public final StyleNode.SpanProvider<R> getTypesStyleProvider() {
        return this.typesStyleProvider;
    }

    public int hashCode() {
        StyleNode.SpanProvider<R> spanProvider = this.defaultStyleProvider;
        int hashCode = (spanProvider != null ? spanProvider.hashCode() : 0) * 31;
        StyleNode.SpanProvider<R> spanProvider2 = this.commentStyleProvider;
        int hashCode2 = (hashCode + (spanProvider2 != null ? spanProvider2.hashCode() : 0)) * 31;
        StyleNode.SpanProvider<R> spanProvider3 = this.literalStyleProvider;
        int hashCode3 = (hashCode2 + (spanProvider3 != null ? spanProvider3.hashCode() : 0)) * 31;
        StyleNode.SpanProvider<R> spanProvider4 = this.keywordStyleProvider;
        int hashCode4 = (hashCode3 + (spanProvider4 != null ? spanProvider4.hashCode() : 0)) * 31;
        StyleNode.SpanProvider<R> spanProvider5 = this.identifierStyleProvider;
        int hashCode5 = (hashCode4 + (spanProvider5 != null ? spanProvider5.hashCode() : 0)) * 31;
        StyleNode.SpanProvider<R> spanProvider6 = this.typesStyleProvider;
        int hashCode6 = (hashCode5 + (spanProvider6 != null ? spanProvider6.hashCode() : 0)) * 31;
        StyleNode.SpanProvider<R> spanProvider7 = this.genericsStyleProvider;
        int hashCode7 = (hashCode6 + (spanProvider7 != null ? spanProvider7.hashCode() : 0)) * 31;
        StyleNode.SpanProvider<R> spanProvider8 = this.paramsStyleProvider;
        return hashCode7 + (spanProvider8 != null ? spanProvider8.hashCode() : 0);
    }

    @NotNull
    public String toString() {
        return "CodeStyleProviders(defaultStyleProvider=" + this.defaultStyleProvider + ", commentStyleProvider=" + this.commentStyleProvider + ", literalStyleProvider=" + this.literalStyleProvider + ", keywordStyleProvider=" + this.keywordStyleProvider + ", identifierStyleProvider=" + this.identifierStyleProvider + ", typesStyleProvider=" + this.typesStyleProvider + ", genericsStyleProvider=" + this.genericsStyleProvider + ", paramsStyleProvider=" + this.paramsStyleProvider + ")";
    }

    public CodeStyleProviders(@NotNull StyleNode.SpanProvider<R> defaultStyleProvider, @NotNull StyleNode.SpanProvider<R> commentStyleProvider, @NotNull StyleNode.SpanProvider<R> literalStyleProvider, @NotNull StyleNode.SpanProvider<R> keywordStyleProvider, @NotNull StyleNode.SpanProvider<R> identifierStyleProvider, @NotNull StyleNode.SpanProvider<R> typesStyleProvider, @NotNull StyleNode.SpanProvider<R> genericsStyleProvider, @NotNull StyleNode.SpanProvider<R> paramsStyleProvider) {
        Intrinsics.checkNotNullParameter(defaultStyleProvider, "defaultStyleProvider");
        Intrinsics.checkNotNullParameter(commentStyleProvider, "commentStyleProvider");
        Intrinsics.checkNotNullParameter(literalStyleProvider, "literalStyleProvider");
        Intrinsics.checkNotNullParameter(keywordStyleProvider, "keywordStyleProvider");
        Intrinsics.checkNotNullParameter(identifierStyleProvider, "identifierStyleProvider");
        Intrinsics.checkNotNullParameter(typesStyleProvider, "typesStyleProvider");
        Intrinsics.checkNotNullParameter(genericsStyleProvider, "genericsStyleProvider");
        Intrinsics.checkNotNullParameter(paramsStyleProvider, "paramsStyleProvider");
        this.defaultStyleProvider = defaultStyleProvider;
        this.commentStyleProvider = commentStyleProvider;
        this.literalStyleProvider = literalStyleProvider;
        this.keywordStyleProvider = keywordStyleProvider;
        this.identifierStyleProvider = identifierStyleProvider;
        this.typesStyleProvider = typesStyleProvider;
        this.genericsStyleProvider = genericsStyleProvider;
        this.paramsStyleProvider = paramsStyleProvider;
    }

    public /* synthetic */ CodeStyleProviders(StyleNode.SpanProvider spanProvider, StyleNode.SpanProvider spanProvider2, StyleNode.SpanProvider spanProvider3, StyleNode.SpanProvider spanProvider4, StyleNode.SpanProvider spanProvider5, StyleNode.SpanProvider spanProvider6, StyleNode.SpanProvider spanProvider7, StyleNode.SpanProvider spanProvider8, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? CodeStyleProvidersKt.emptyProvider() : spanProvider, (i10 & 2) != 0 ? CodeStyleProvidersKt.emptyProvider() : spanProvider2, (i10 & 4) != 0 ? CodeStyleProvidersKt.emptyProvider() : spanProvider3, (i10 & 8) != 0 ? CodeStyleProvidersKt.emptyProvider() : spanProvider4, (i10 & 16) != 0 ? CodeStyleProvidersKt.emptyProvider() : spanProvider5, (i10 & 32) != 0 ? CodeStyleProvidersKt.emptyProvider() : spanProvider6, (i10 & 64) != 0 ? CodeStyleProvidersKt.emptyProvider() : spanProvider7, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? CodeStyleProvidersKt.emptyProvider() : spanProvider8);
    }
}
