package com.discord.chat.presentation.textutils;

import android.graphics.Color;
import android.text.style.AbsoluteSizeSpan;
import android.text.style.ForegroundColorSpan;
import android.text.style.LeadingMarginSpan;
import android.text.style.RelativeSizeSpan;
import com.discord.chat.bridge.contentnode.CodeBlockContentNode;
import com.discord.fonts.DiscordFont;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.simpleast.code.CodeRules;
import com.discord.simpleast.code.CodeStyleProviders;
import com.discord.simpleast.core.node.Node;
import com.discord.simpleast.core.node.StyleNode;
import com.discord.simpleast.core.node.TextNode;
import com.discord.simpleast.core.parser.Parser;
import com.discord.simpleast.core.parser.Rule;
import com.discord.simpleast.core.simple.SimpleRenderer;
import com.discord.span.utilities.SpannableStringBuilderExtensionsKt;
import com.discord.span.utilities.spannable.BlockBackgroundSpan;
import com.discord.span.utilities.spannable.VerticalPaddingSpan;
import com.discord.theme.ThemeManagerKt;
import com.facebook.drawee.span.DraweeSpanStringBuilder;
import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Result;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000H\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010%\n\u0002\u0010\u000e\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010 \n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\bÆ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u001c\u0010\u0010\u001a\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u00060\u000b0\u00112\u0006\u0010\u0012\u001a\u00020\u0013H\u0002J \u0010\u0014\u001a\u00020\u00152\u0006\u0010\u0016\u001a\u00020\u00172\u0006\u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0018\u001a\u00020\u0006H\u0002J\u001e\u0010\u0019\u001a\u00020\u00152\u0006\u0010\u0016\u001a\u00020\u00172\u0006\u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0018\u001a\u00020\u0006R\u0014\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R6\u0010\u0007\u001a*\u0012\u0004\u0012\u00020\t\u0012 \u0012\u001e\u0012\u0004\u0012\u00020\u0006\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u00060\u000b\u0012\u0004\u0012\u00020\u00010\nj\u0002`\f0\bX\u0082\u0004¢\u0006\u0002\n\u0000R0\u0010\r\u001a\u001e\u0012\u0004\u0012\u00020\u0006\u0012\n\u0012\b\u0012\u0004\u0012\u00020\u00060\u000b\u0012\u0004\u0012\u00020\u00010\nj\u0002`\f8BX\u0082\u0004¢\u0006\u0006\u001a\u0004\b\u000e\u0010\u000f¨\u0006\u001a"}, d2 = {"Lcom/discord/chat/presentation/textutils/CodeStyle;", "", "<init>", "()V", "staticCodeStyles", "Lcom/discord/simpleast/code/CodeStyleProviders;", "Lcom/discord/chat/presentation/textutils/RenderContext;", "parsers", "", "", "Lcom/discord/simpleast/core/parser/Parser;", "Lcom/discord/simpleast/core/node/Node;", "Lcom/discord/chat/presentation/textutils/CodeParser;", "parser", "getParser", "()Lcom/discord/simpleast/core/parser/Parser;", "generateAst", "", "node", "Lcom/discord/chat/bridge/contentnode/CodeBlockContentNode;", "renderCode", "", "builder", "Lcom/facebook/drawee/span/DraweeSpanStringBuilder;", "rc", "renderCodeBlock", "chat_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nCodeStyle.kt\nKotlin\n*S Kotlin\n*F\n+ 1 CodeStyle.kt\ncom/discord/chat/presentation/textutils/CodeStyle\n+ 2 Maps.kt\nkotlin/collections/MapsKt__MapsKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 4 SpannableStringBuilderExtensions.kt\ncom/discord/span/utilities/SpannableStringBuilderExtensionsKt\n+ 5 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n+ 6 Color.kt\nandroidx/core/graphics/ColorKt\n*L\n1#1,92:1\n384#2,3:93\n387#2,4:97\n1#3:96\n1#3:106\n43#4,4:101\n47#4:108\n13472#5:105\n13473#5:107\n404#6:109\n404#6:110\n404#6:111\n404#6:112\n404#6:113\n404#6:114\n*S KotlinDebug\n*F\n+ 1 CodeStyle.kt\ncom/discord/chat/presentation/textutils/CodeStyle\n*L\n38#1:93,3\n38#1:97,4\n79#1:106\n79#1:101,4\n79#1:108\n79#1:105\n79#1:107\n28#1:109\n29#1:110\n30#1:111\n31#1:112\n32#1:113\n33#1:114\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class CodeStyle {
    @NotNull
    public static final CodeStyle INSTANCE = new CodeStyle();
    @NotNull
    private static final CodeStyleProviders<RenderContext> staticCodeStyles = new CodeStyleProviders<>(null, null, new StyleNode.SpanProvider() { // from class: com.discord.chat.presentation.textutils.c
        @Override // com.discord.simpleast.core.node.StyleNode.SpanProvider
        public final Iterable get(Object obj) {
            Iterable staticCodeStyles$lambda$0;
            staticCodeStyles$lambda$0 = CodeStyle.staticCodeStyles$lambda$0((RenderContext) obj);
            return staticCodeStyles$lambda$0;
        }
    }, new StyleNode.SpanProvider() { // from class: com.discord.chat.presentation.textutils.d
        @Override // com.discord.simpleast.core.node.StyleNode.SpanProvider
        public final Iterable get(Object obj) {
            Iterable staticCodeStyles$lambda$1;
            staticCodeStyles$lambda$1 = CodeStyle.staticCodeStyles$lambda$1((RenderContext) obj);
            return staticCodeStyles$lambda$1;
        }
    }, new StyleNode.SpanProvider() { // from class: com.discord.chat.presentation.textutils.e
        @Override // com.discord.simpleast.core.node.StyleNode.SpanProvider
        public final Iterable get(Object obj) {
            Iterable staticCodeStyles$lambda$2;
            staticCodeStyles$lambda$2 = CodeStyle.staticCodeStyles$lambda$2((RenderContext) obj);
            return staticCodeStyles$lambda$2;
        }
    }, new StyleNode.SpanProvider() { // from class: com.discord.chat.presentation.textutils.f
        @Override // com.discord.simpleast.core.node.StyleNode.SpanProvider
        public final Iterable get(Object obj) {
            Iterable staticCodeStyles$lambda$3;
            staticCodeStyles$lambda$3 = CodeStyle.staticCodeStyles$lambda$3((RenderContext) obj);
            return staticCodeStyles$lambda$3;
        }
    }, new StyleNode.SpanProvider() { // from class: com.discord.chat.presentation.textutils.g
        @Override // com.discord.simpleast.core.node.StyleNode.SpanProvider
        public final Iterable get(Object obj) {
            Iterable staticCodeStyles$lambda$4;
            staticCodeStyles$lambda$4 = CodeStyle.staticCodeStyles$lambda$4((RenderContext) obj);
            return staticCodeStyles$lambda$4;
        }
    }, new StyleNode.SpanProvider() { // from class: com.discord.chat.presentation.textutils.h
        @Override // com.discord.simpleast.core.node.StyleNode.SpanProvider
        public final Iterable get(Object obj) {
            Iterable staticCodeStyles$lambda$5;
            staticCodeStyles$lambda$5 = CodeStyle.staticCodeStyles$lambda$5((RenderContext) obj);
            return staticCodeStyles$lambda$5;
        }
    }, 3, null);
    @NotNull
    private static final Map<String, Parser<RenderContext, Node<RenderContext>, Object>> parsers = new LinkedHashMap();

    private CodeStyle() {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Iterable _get_parser_$lambda$9$lambda$6(RenderContext it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return CollectionsKt.e(new ForegroundColorSpan(ThemeManagerKt.getTheme().getTextSubtle()));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Iterable _get_parser_$lambda$9$lambda$7(RenderContext it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return CollectionsKt.e(new ForegroundColorSpan(ThemeManagerKt.getTheme().getTextMuted()));
    }

    private final List<Node<RenderContext>> generateAst(CodeBlockContentNode codeBlockContentNode) {
        List b10;
        String obj = StringsKt.k1(codeBlockContentNode.getLang()).toString();
        String content = codeBlockContentNode.getContent();
        String str = "```" + obj + ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE + content + "\n```";
        try {
            Result.a aVar = Result.f32053e;
            b10 = Result.b(Parser.parse$default(getParser(), str, Unit.f32056a, null, 4, null));
        } catch (Throwable th2) {
            Result.a aVar2 = Result.f32053e;
            b10 = Result.b(kotlin.c.a(th2));
        }
        List e10 = CollectionsKt.e(new TextNode(content));
        if (Result.g(b10)) {
            b10 = e10;
        }
        return (List) b10;
    }

    private final Parser<RenderContext, Node<RenderContext>, Object> getParser() {
        Map<String, Parser<RenderContext, Node<RenderContext>, Object>> map = parsers;
        String simpleName = ThemeManagerKt.getTheme().getClass().getSimpleName();
        Parser<RenderContext, Node<RenderContext>, Object> parser = map.get(simpleName);
        if (parser == null) {
            CodeStyleProviders copy$default = CodeStyleProviders.copy$default(staticCodeStyles, new StyleNode.SpanProvider() { // from class: com.discord.chat.presentation.textutils.a
                @Override // com.discord.simpleast.core.node.StyleNode.SpanProvider
                public final Iterable get(Object obj) {
                    Iterable _get_parser_$lambda$9$lambda$6;
                    _get_parser_$lambda$9$lambda$6 = CodeStyle._get_parser_$lambda$9$lambda$6((RenderContext) obj);
                    return _get_parser_$lambda$9$lambda$6;
                }
            }, new StyleNode.SpanProvider() { // from class: com.discord.chat.presentation.textutils.b
                @Override // com.discord.simpleast.core.node.StyleNode.SpanProvider
                public final Iterable get(Object obj) {
                    Iterable _get_parser_$lambda$9$lambda$7;
                    _get_parser_$lambda$9$lambda$7 = CodeStyle._get_parser_$lambda$9$lambda$7((RenderContext) obj);
                    return _get_parser_$lambda$9$lambda$7;
                }
            }, null, null, null, null, null, null, 252, null);
            CodeRules codeRules = CodeRules.INSTANCE;
            Rule<RenderContext, ? extends Node<RenderContext>, Object> createCodeRule$default = CodeRules.createCodeRule$default(codeRules, copy$default.getDefaultStyleProvider(), codeRules.createCodeLanguageMap(copy$default), null, 4, null);
            Parser<RenderContext, Node<RenderContext>, Object> parser2 = new Parser<>(false, 1, null);
            parser2.addRule(createCodeRule$default);
            map.put(simpleName, parser2);
            parser = parser2;
        }
        return parser;
    }

    private final void renderCode(DraweeSpanStringBuilder draweeSpanStringBuilder, CodeBlockContentNode codeBlockContentNode, RenderContext renderContext) {
        SimpleRenderer.render(draweeSpanStringBuilder, generateAst(codeBlockContentNode), renderContext);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Iterable staticCodeStyles$lambda$0(RenderContext it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return CollectionsKt.e(new ForegroundColorSpan(Color.parseColor("#199A79")));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Iterable staticCodeStyles$lambda$1(RenderContext it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return CollectionsKt.e(new ForegroundColorSpan(Color.parseColor("#7A8E00")));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Iterable staticCodeStyles$lambda$2(RenderContext it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return CollectionsKt.e(new ForegroundColorSpan(Color.parseColor("#4C9CDF")));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Iterable staticCodeStyles$lambda$3(RenderContext it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return CollectionsKt.e(new ForegroundColorSpan(Color.parseColor("#AED581")));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Iterable staticCodeStyles$lambda$4(RenderContext it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return CollectionsKt.e(new ForegroundColorSpan(Color.parseColor("#A77B02")));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Iterable staticCodeStyles$lambda$5(RenderContext it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return CollectionsKt.e(new ForegroundColorSpan(Color.parseColor("#AF8AF4")));
    }

    public final void renderCodeBlock(@NotNull DraweeSpanStringBuilder builder, @NotNull CodeBlockContentNode node, @NotNull RenderContext rc2) {
        int backgroundSurfaceHigh;
        Intrinsics.checkNotNullParameter(builder, "builder");
        Intrinsics.checkNotNullParameter(node, "node");
        Intrinsics.checkNotNullParameter(rc2, "rc");
        if (rc2.spoilerIsHidden()) {
            backgroundSurfaceHigh = rc2.getTheme().getSpoilerHiddenBackground();
        } else {
            backgroundSurfaceHigh = rc2.getTheme().getBackgroundSurfaceHigh();
        }
        BlockBackgroundSpan blockBackgroundSpan = new BlockBackgroundSpan(backgroundSurfaceHigh, rc2.getTheme().getBackgroundModNormal(), SizeUtilsKt.getDpToPx(1), SizeUtilsKt.getDpToPx(4), rc2.getInsets().getStart(), rc2.getInsets().getTop(), rc2.getInsets().getBottom());
        int dpToPx = SizeUtilsKt.getDpToPx(4);
        LeadingMarginSpan.Standard standard = new LeadingMarginSpan.Standard(SizeUtilsKt.getDpToPx(8));
        VerticalPaddingSpan verticalPaddingSpan = new VerticalPaddingSpan(SizeUtilsKt.getDpToPx(4));
        RelativeSizeSpan relativeSizeSpan = new RelativeSizeSpan(0.85f);
        DiscordFontSpan discordFontSpan = new DiscordFontSpan(rc2.getContext(), DiscordFont.CodeNormal);
        SpannableStringBuilderExtensionsKt.ensureNewline$default(builder, null, 1, null);
        Object[] objArr = {blockBackgroundSpan, standard, verticalPaddingSpan, relativeSizeSpan, discordFontSpan};
        int length = builder.length();
        SpannableStringBuilderExtensionsKt.ensureNewline(builder, new AbsoluteSizeSpan(dpToPx));
        INSTANCE.renderCode(builder, node, rc2);
        SpannableStringBuilderExtensionsKt.ensureNewline(builder, new AbsoluteSizeSpan(dpToPx));
        for (int i10 = 0; i10 < 5; i10++) {
            Object obj = objArr[i10];
            if (obj != null) {
                builder.setSpan(obj, length, builder.length(), 33);
            }
        }
    }
}
