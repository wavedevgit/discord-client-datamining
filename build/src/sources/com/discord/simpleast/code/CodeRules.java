package com.discord.simpleast.code;

import com.discord.simpleast.code.CodeNode;
import com.discord.simpleast.core.node.Node;
import com.discord.simpleast.core.node.StyleNode;
import com.discord.simpleast.core.node.TextNode;
import com.discord.simpleast.core.parser.ParseSpec;
import com.discord.simpleast.core.parser.Parser;
import com.discord.simpleast.core.parser.Rule;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import jr.v;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.collections.i;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(bv = {1, 0, 3}, d1 = {"\u0000^\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0010$\n\u0002\u0010\u000e\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\u0011\n\u0002\b\u0014\bÆ\u0002\u0018\u00002\u00020\u0001B\u0007\b\u0002¢\u0006\u0002\u0010\u0002JJ\u0010\u0013\u001a,\u0012\u0004\u0012\u00020\u0015\u0012\"\u0012 \u0012\u001c\u0012\u001a\u0012\u0004\u0012\u0002H\u0018\u0012\n\u0012\b\u0012\u0004\u0012\u0002H\u00180\u0019\u0012\u0004\u0012\u0002H\u001a0\u00170\u00160\u0014\"\u0004\b\u0000\u0010\u0018\"\u0004\b\u0001\u0010\u001a2\f\u0010\u001b\u001a\b\u0012\u0004\u0012\u0002H\u00180\u001cJ\u0098\u0001\u0010\u001d\u001a\u001a\u0012\u0004\u0012\u0002H\u0018\u0012\n\u0012\b\u0012\u0004\u0012\u0002H\u00180\u0019\u0012\u0004\u0012\u0002H\u001a0\u0017\"\u0004\b\u0000\u0010\u0018\"\u0004\b\u0001\u0010\u001a2\f\u0010\u001e\u001a\b\u0012\u0004\u0012\u0002H\u00180\u001f20\u0010 \u001a,\u0012\u0004\u0012\u00020\u0015\u0012\"\u0012 \u0012\u001c\u0012\u001a\u0012\u0004\u0012\u0002H\u0018\u0012\n\u0012\b\u0012\u0004\u0012\u0002H\u00180\u0019\u0012\u0004\u0012\u0002H\u001a0\u00170\u00160\u00142,\b\u0002\u0010!\u001a&\u0012\n\u0012\b\u0012\u0004\u0012\u0002H\u00180#\u0012\u0004\u0012\u00020$\u0012\u0004\u0012\u0002H\u001a\u0012\n\u0012\b\u0012\u0004\u0012\u0002H\u00180\u00190\"JQ\u0010%\u001a\u001a\u0012\u0004\u0012\u0002H\u0018\u0012\n\u0012\b\u0012\u0004\u0012\u0002H\u00180\u0019\u0012\u0004\u0012\u0002H\u001a0\u0017\"\u0004\b\u0000\u0010\u0018\"\u0004\b\u0001\u0010\u001a2\f\u0010\u001b\u001a\b\u0012\u0004\u0012\u0002H\u00180\u001c2\u0012\u0010&\u001a\n\u0012\u0006\b\u0001\u0012\u00020\u00150'\"\u00020\u0015¢\u0006\u0002\u0010(J\u009b\u0001\u0010)\u001a \u0012\u001c\u0012\u001a\u0012\u0004\u0012\u0002H\u0018\u0012\n\u0012\b\u0012\u0004\u0012\u0002H\u00180\u0019\u0012\u0004\u0012\u0002H\u001a0\u00170\u0016\"\u0004\b\u0000\u0010\u0018\"\u0004\b\u0001\u0010\u001a2\f\u0010\u001b\u001a\b\u0012\u0004\u0012\u0002H\u00180\u001c2$\u0010*\u001a \u0012\u001c\u0012\u001a\u0012\u0004\u0012\u0002H\u0018\u0012\n\u0012\b\u0012\u0004\u0012\u0002H\u00180\u0019\u0012\u0004\u0012\u0002H\u001a0\u00170\u00162\f\u0010+\u001a\b\u0012\u0004\u0012\u00020\u00150'2\f\u0010,\u001a\b\u0012\u0004\u0012\u00020\u00150'2\u0012\u0010-\u001a\n\u0012\u0006\b\u0001\u0012\u00020\u00150'\"\u00020\u0015H\u0002¢\u0006\u0002\u0010.JF\u0010/\u001a\u001a\u0012\u0004\u0012\u0002H\u0018\u0012\n\u0012\b\u0012\u0004\u0012\u0002H\u00180\u0019\u0012\u0004\u0012\u0002H\u001a0\u0017\"\u0004\b\u0000\u0010\u0018\"\u0004\b\u0001\u0010\u001a2\f\u0010\u001e\u001a\b\u0012\u0004\u0012\u0002H\u00180\u001f2\f\u00100\u001a\b\u0012\u0004\u0012\u0002H\u00180\u001fJ\u0018\u00101\u001a\n 2*\u0004\u0018\u00010\b0\b2\u0006\u00103\u001a\u00020\u0015H\u0002J+\u00104\u001a\n 2*\u0004\u0018\u00010\b0\b2\u0012\u00105\u001a\n\u0012\u0006\b\u0001\u0012\u00020\u00150'\"\u00020\u0015H\u0000¢\u0006\u0004\b6\u00107JJ\u00108\u001a\u001a\u0012\u0004\u0012\u0002H\u0018\u0012\n\u0012\b\u0012\u0004\u0012\u0002H\u00180\u0019\u0012\u0004\u0012\u0002H\u001a0\u0017\"\u0004\b\u0000\u0010\u0018\"\u0004\b\u0001\u0010\u001a*\u00020\b2\b\b\u0002\u00109\u001a\u00020\u00042\u0010\b\u0002\u0010:\u001a\n\u0012\u0004\u0012\u0002H\u0018\u0018\u00010\u001fR\u000e\u0010\u0003\u001a\u00020\u0004X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0005\u001a\u00020\u0004X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0004X\u0082T¢\u0006\u0002\n\u0000R\u0011\u0010\u0007\u001a\u00020\b¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\nR\u0011\u0010\u000b\u001a\u00020\b¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\nR\u0011\u0010\r\u001a\u00020\b¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\nR\u0011\u0010\u000f\u001a\u00020\b¢\u0006\b\n\u0000\u001a\u0004\b\u0010\u0010\nR\u0011\u0010\u0011\u001a\u00020\b¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\n¨\u0006;"}, d2 = {"Lcom/discord/simpleast/code/CodeRules;", "", "()V", "CODE_BLOCK_BODY_GROUP", "", "CODE_BLOCK_LANGUAGE_GROUP", "CODE_BLOCK_WS_PREFIX", "PATTERN_CODE_BLOCK", "Ljava/util/regex/Pattern;", "getPATTERN_CODE_BLOCK", "()Ljava/util/regex/Pattern;", "PATTERN_CODE_INLINE", "getPATTERN_CODE_INLINE", "PATTERN_LEADING_WS_CONSUMER", "getPATTERN_LEADING_WS_CONSUMER", "PATTERN_NUMBERS", "getPATTERN_NUMBERS", "PATTERN_TEXT", "getPATTERN_TEXT", "createCodeLanguageMap", "", "", "", "Lcom/discord/simpleast/core/parser/Rule;", "R", "Lcom/discord/simpleast/core/node/Node;", "S", "codeStyleProviders", "Lcom/discord/simpleast/code/CodeStyleProviders;", "createCodeRule", "textStyleProvider", "Lcom/discord/simpleast/core/node/StyleNode$SpanProvider;", "languageMap", "wrapperNodeProvider", "Lkotlin/Function3;", "Lcom/discord/simpleast/code/CodeNode;", "", "createDefinitionRule", "identifiers", "", "(Lcom/discord/simpleast/code/CodeStyleProviders;[Ljava/lang/String;)Lcom/discord/simpleast/core/parser/Rule;", "createGenericCodeRules", "additionalRules", "definitions", "builtIns", "keywords", "(Lcom/discord/simpleast/code/CodeStyleProviders;Ljava/util/List;[Ljava/lang/String;[Ljava/lang/String;[Ljava/lang/String;)Ljava/util/List;", "createInlineCodeRule", "bgStyleProvider", "createSingleLineCommentPattern", "kotlin.jvm.PlatformType", "prefix", "createWordPattern", "words", "createWordPattern$simpleast_core_release", "([Ljava/lang/String;)Ljava/util/regex/Pattern;", "toMatchGroupRule", "group", "stylesProvider", "simpleast-core_release"}, k = 1, mv = {1, 4, 0})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class CodeRules {
    private static final int CODE_BLOCK_BODY_GROUP = 3;
    private static final int CODE_BLOCK_LANGUAGE_GROUP = 1;
    private static final int CODE_BLOCK_WS_PREFIX = 2;
    public static final CodeRules INSTANCE = new CodeRules();
    @NotNull
    private static final Pattern PATTERN_CODE_BLOCK;
    @NotNull
    private static final Pattern PATTERN_CODE_INLINE;
    @NotNull
    private static final Pattern PATTERN_LEADING_WS_CONSUMER;
    @NotNull
    private static final Pattern PATTERN_NUMBERS;
    @NotNull
    private static final Pattern PATTERN_TEXT;

    static {
        Pattern compile = Pattern.compile("^```(?:([\\w+\\-.]+?)?(\\s*\\n))?([^\\n].*?)\\n*```", 32);
        Intrinsics.checkNotNullExpressionValue(compile, "Pattern.compile(\"\"\"^```(…n*```\"\"\", Pattern.DOTALL)");
        PATTERN_CODE_BLOCK = compile;
        Pattern compile2 = Pattern.compile("^(``?)([^`]*)\\1", 32);
        Intrinsics.checkNotNullExpressionValue(compile2, "Pattern.compile(\"\"\"^(``?…]*)\\1\"\"\", Pattern.DOTALL)");
        PATTERN_CODE_INLINE = compile2;
        Pattern compile3 = Pattern.compile("^(?:\\n\\s*)+");
        Intrinsics.checkNotNullExpressionValue(compile3, "Pattern.compile(\"\"\"^(?:\\n\\s*)+\"\"\")");
        PATTERN_LEADING_WS_CONSUMER = compile3;
        Pattern compile4 = Pattern.compile("^[\\s\\S]+?(?=\\b|[^0-9A-Za-z\\s\\u00c0-\\uffff]|\\n| {2,}\\n|\\w+:\\S|$)");
        Intrinsics.checkNotNullExpressionValue(compile4, "Pattern.compile(\"\"\"^[\\s\\…|\\n| {2,}\\n|\\w+:\\S|$)\"\"\")");
        PATTERN_TEXT = compile4;
        Pattern compile5 = Pattern.compile("^\\b\\d+?\\b");
        Intrinsics.checkNotNullExpressionValue(compile5, "Pattern.compile(\"\"\"^\\b\\d+?\\b\"\"\")");
        PATTERN_NUMBERS = compile5;
    }

    private CodeRules() {
    }

    public static /* synthetic */ Rule createCodeRule$default(CodeRules codeRules, StyleNode.SpanProvider spanProvider, Map map, Function3 function3, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            function3 = new Function3() { // from class: com.discord.simpleast.code.CodeRules$createCodeRule$1
                @NotNull
                public final CodeNode invoke(@NotNull CodeNode codeNode, boolean z10, Object obj2) {
                    Intrinsics.checkNotNullParameter(codeNode, "codeNode");
                    return codeNode;
                }

                @Override // kotlin.jvm.functions.Function3
                public /* bridge */ /* synthetic */ Object invoke(Object obj2, Object obj3, Object obj4) {
                    return invoke((CodeNode) obj2, ((Boolean) obj3).booleanValue(), obj4);
                }
            };
        }
        return codeRules.createCodeRule(spanProvider, map, function3);
    }

    private final <R, S> List<Rule<R, Node<R>, S>> createGenericCodeRules(CodeStyleProviders<R> codeStyleProviders, List<? extends Rule<R, Node<R>, S>> list, String[] strArr, String[] strArr2, String... strArr3) {
        Rule<R, Node<R>, S> createDefinitionRule = createDefinitionRule(codeStyleProviders, (String[]) Arrays.copyOf(strArr, strArr.length));
        Pattern createWordPattern$simpleast_core_release = createWordPattern$simpleast_core_release((String[]) Arrays.copyOf(strArr2, strArr2.length));
        Intrinsics.checkNotNullExpressionValue(createWordPattern$simpleast_core_release, "createWordPattern(*builtIns)");
        Rule matchGroupRule$default = toMatchGroupRule$default(this, createWordPattern$simpleast_core_release, 0, codeStyleProviders.getGenericsStyleProvider(), 1, null);
        Pattern createWordPattern$simpleast_core_release2 = createWordPattern$simpleast_core_release((String[]) Arrays.copyOf(strArr3, strArr3.length));
        Intrinsics.checkNotNullExpressionValue(createWordPattern$simpleast_core_release2, "createWordPattern(*keywords)");
        return CollectionsKt.L0(list, CollectionsKt.o(createDefinitionRule, matchGroupRule$default, toMatchGroupRule$default(this, createWordPattern$simpleast_core_release2, 0, codeStyleProviders.getKeywordStyleProvider(), 1, null), toMatchGroupRule$default(this, PATTERN_NUMBERS, 0, codeStyleProviders.getLiteralStyleProvider(), 1, null), toMatchGroupRule$default(this, PATTERN_LEADING_WS_CONSUMER, 0, null, 3, null), toMatchGroupRule$default(this, PATTERN_TEXT, 0, null, 3, null)));
    }

    private final Pattern createSingleLineCommentPattern(String str) {
        return Pattern.compile("^(?:" + str + ".*?(?=\\n|$))");
    }

    public static /* synthetic */ Rule toMatchGroupRule$default(CodeRules codeRules, Pattern pattern, int i10, StyleNode.SpanProvider spanProvider, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            i10 = 0;
        }
        if ((i11 & 2) != 0) {
            spanProvider = null;
        }
        return codeRules.toMatchGroupRule(pattern, i10, spanProvider);
    }

    @NotNull
    public final <R, S> Map<String, List<Rule<R, Node<R>, S>>> createCodeLanguageMap(@NotNull CodeStyleProviders<R> codeStyleProviders) {
        Intrinsics.checkNotNullParameter(codeStyleProviders, "codeStyleProviders");
        Kotlin kotlin2 = Kotlin.INSTANCE;
        String[] built_ins = kotlin2.getBUILT_INS();
        String[] keywords = kotlin2.getKEYWORDS();
        List<Rule<R, Node<R>, S>> createGenericCodeRules = createGenericCodeRules(codeStyleProviders, kotlin2.createKotlinCodeRules$simpleast_core_release(codeStyleProviders), new String[]{"object", "class", "interface"}, built_ins, (String[]) Arrays.copyOf(keywords, keywords.length));
        Pattern createSingleLineCommentPattern = createSingleLineCommentPattern("//");
        Intrinsics.checkNotNullExpressionValue(createSingleLineCommentPattern, "createSingleLineCommentPattern(\"//\")");
        Rule matchGroupRule$default = toMatchGroupRule$default(this, createSingleLineCommentPattern, 0, codeStyleProviders.getCommentStyleProvider(), 1, null);
        Pattern compile = Pattern.compile("^\"[\\s\\S]*?(?<!\\\\)\"(?=\\W|\\s|$)");
        Intrinsics.checkNotNullExpressionValue(compile, "Pattern.compile(\"\"\"^\"[\\s…*?(?<!\\\\)\"(?=\\W|\\s|$)\"\"\")");
        List<Rule<R, Node<R>, S>> createGenericCodeRules2 = createGenericCodeRules(codeStyleProviders, CollectionsKt.o(matchGroupRule$default, toMatchGroupRule$default(this, compile, 0, codeStyleProviders.getLiteralStyleProvider(), 1, null)), new String[]{"message|enum|extend|service"}, new String[]{"true|false", "string|bool|double|float|bytes", "int32|uint32|sint32|int64|unit64|sint64", "map"}, "required|repeated|optional|option|oneof|default|reserved", "package|import", "rpc|returns");
        Pattern createSingleLineCommentPattern2 = createSingleLineCommentPattern("#");
        Intrinsics.checkNotNullExpressionValue(createSingleLineCommentPattern2, "createSingleLineCommentPattern(\"#\")");
        Rule matchGroupRule$default2 = toMatchGroupRule$default(this, createSingleLineCommentPattern2, 0, codeStyleProviders.getCommentStyleProvider(), 1, null);
        Pattern compile2 = Pattern.compile("^\"[\\s\\S]*?(?<!\\\\)\"(?=\\W|\\s|$)");
        Intrinsics.checkNotNullExpressionValue(compile2, "Pattern.compile(\"\"\"^\"[\\s…*?(?<!\\\\)\"(?=\\W|\\s|$)\"\"\")");
        Rule matchGroupRule$default3 = toMatchGroupRule$default(this, compile2, 0, codeStyleProviders.getLiteralStyleProvider(), 1, null);
        Pattern compile3 = Pattern.compile("^'[\\s\\S]*?(?<!\\\\)'(?=\\W|\\s|$)");
        Intrinsics.checkNotNullExpressionValue(compile3, "Pattern.compile(\"\"\"^'[\\s…*?(?<!\\\\)'(?=\\W|\\s|$)\"\"\")");
        Rule matchGroupRule$default4 = toMatchGroupRule$default(this, compile3, 0, codeStyleProviders.getLiteralStyleProvider(), 1, null);
        Pattern compile4 = Pattern.compile("^@(\\w+)");
        Intrinsics.checkNotNullExpressionValue(compile4, "Pattern.compile(\"\"\"^@(\\w+)\"\"\")");
        List<Rule<R, Node<R>, S>> createGenericCodeRules3 = createGenericCodeRules(codeStyleProviders, CollectionsKt.o(matchGroupRule$default2, matchGroupRule$default3, matchGroupRule$default4, toMatchGroupRule$default(this, compile4, 0, codeStyleProviders.getGenericsStyleProvider(), 1, null)), new String[]{"class", "def", "lambda"}, new String[]{"True|False|None"}, "from|import|global|nonlocal", "async|await|class|self|cls|def|lambda", "for|while|if|else|elif|break|continue|return", "try|except|finally|raise|pass|yeild", "in|as|is|del", "and|or|not|assert");
        Pattern createSingleLineCommentPattern3 = createSingleLineCommentPattern("//");
        Intrinsics.checkNotNullExpressionValue(createSingleLineCommentPattern3, "createSingleLineCommentPattern(\"//\")");
        Rule matchGroupRule$default5 = toMatchGroupRule$default(this, createSingleLineCommentPattern3, 0, codeStyleProviders.getCommentStyleProvider(), 1, null);
        Pattern compile5 = Pattern.compile("^\"[\\s\\S]*?(?<!\\\\)\"(?=\\W|\\s|$)");
        Intrinsics.checkNotNullExpressionValue(compile5, "Pattern.compile(\"\"\"^\"[\\s…*?(?<!\\\\)\"(?=\\W|\\s|$)\"\"\")");
        Rule matchGroupRule$default6 = toMatchGroupRule$default(this, compile5, 0, codeStyleProviders.getLiteralStyleProvider(), 1, null);
        Pattern compile6 = Pattern.compile("^#!?\\[.*?\\]\\n");
        Intrinsics.checkNotNullExpressionValue(compile6, "Pattern.compile(\"\"\"^#!?\\[.*?\\]\\n\"\"\")");
        List<Rule<R, Node<R>, S>> createGenericCodeRules4 = createGenericCodeRules(codeStyleProviders, CollectionsKt.o(matchGroupRule$default5, matchGroupRule$default6, toMatchGroupRule$default(this, compile6, 0, codeStyleProviders.getGenericsStyleProvider(), 1, null)), new String[]{"struct", "trait", "mod"}, new String[]{"Self|Result|Ok|Err|Option|None|Some", "Copy|Clone|Eq|Hash|Send|Sync|Sized|Debug|Display", "Arc|Rc|Box|Pin|Future", "true|false|bool|usize|i64|u64|u32|i32|str|String"}, "let|mut|static|const|unsafe", "crate|mod|extern|pub|pub(super)|use", "struct|enum|trait|type|where|impl|dyn|async|await|move|self|fn", "for|while|loop|if|else|match|break|continue|return|try", "in|as|ref");
        Xml xml = Xml.INSTANCE;
        Rule matchGroupRule$default7 = toMatchGroupRule$default(this, xml.getPATTERN_XML_COMMENT(), 0, codeStyleProviders.getCommentStyleProvider(), 1, null);
        Rule createTagRule = xml.createTagRule(codeStyleProviders);
        Pattern pattern = PATTERN_LEADING_WS_CONSUMER;
        Rule matchGroupRule$default8 = toMatchGroupRule$default(this, pattern, 0, null, 3, null);
        Pattern pattern2 = PATTERN_TEXT;
        List o10 = CollectionsKt.o(matchGroupRule$default7, createTagRule, matchGroupRule$default8, toMatchGroupRule$default(this, pattern2, 0, null, 3, null));
        Pattern createSingleLineCommentPattern4 = createSingleLineCommentPattern("#");
        Intrinsics.checkNotNullExpressionValue(createSingleLineCommentPattern4, "createSingleLineCommentPattern(\"#\")");
        Rule matchGroupRule$default9 = toMatchGroupRule$default(this, createSingleLineCommentPattern4, 0, codeStyleProviders.getCommentStyleProvider(), 1, null);
        Pattern compile7 = Pattern.compile("^\"[\\s\\S]*?(?<!\\\\)\"(?=\\W|\\s|$)");
        Intrinsics.checkNotNullExpressionValue(compile7, "Pattern.compile(\"\"\"^\"[\\s…*?(?<!\\\\)\"(?=\\W|\\s|$)\"\"\")");
        Rule matchGroupRule$default10 = toMatchGroupRule$default(this, compile7, 0, codeStyleProviders.getLiteralStyleProvider(), 1, null);
        String pattern3 = createWordPattern$simpleast_core_release("true|false|null").pattern();
        Intrinsics.checkNotNullExpressionValue(pattern3, "createWordPattern(\"true|false|null\").pattern()");
        Pattern compile8 = Pattern.compile(pattern3, 2);
        Intrinsics.checkNotNullExpressionValue(compile8, "java.util.regex.Pattern.compile(this, flags)");
        Rule matchGroupRule$default11 = toMatchGroupRule$default(this, compile8, 0, codeStyleProviders.getGenericsStyleProvider(), 1, null);
        String pattern4 = createWordPattern$simpleast_core_release("select|from|join|where|and|as|distinct|count|avg", "order by|group by|desc|sum|min|max", "like|having|in|is|not").pattern();
        Intrinsics.checkNotNullExpressionValue(pattern4, "createWordPattern(\n     …ing|in|is|not\").pattern()");
        Pattern compile9 = Pattern.compile(pattern4, 2);
        Intrinsics.checkNotNullExpressionValue(compile9, "java.util.regex.Pattern.compile(this, flags)");
        List o11 = CollectionsKt.o(matchGroupRule$default9, matchGroupRule$default10, matchGroupRule$default11, toMatchGroupRule$default(this, compile9, 0, codeStyleProviders.getKeywordStyleProvider(), 1, null), toMatchGroupRule$default(this, PATTERN_NUMBERS, 0, codeStyleProviders.getLiteralStyleProvider(), 1, null), toMatchGroupRule$default(this, pattern, 0, null, 3, null), toMatchGroupRule$default(this, pattern2, 0, null, 3, null));
        Crystal crystal = Crystal.INSTANCE;
        String[] built_ins2 = crystal.getBUILT_INS();
        String[] keywords2 = crystal.getKEYWORDS();
        List<Rule<R, Node<R>, S>> createGenericCodeRules5 = createGenericCodeRules(codeStyleProviders, crystal.createCrystalCodeRules$simpleast_core_release(codeStyleProviders), new String[]{"def", "class"}, built_ins2, (String[]) Arrays.copyOf(keywords2, keywords2.length));
        JavaScript javaScript = JavaScript.INSTANCE;
        String[] built_ins3 = javaScript.getBUILT_INS();
        String[] keywords3 = javaScript.getKEYWORDS();
        List<Rule<R, Node<R>, S>> createGenericCodeRules6 = createGenericCodeRules(codeStyleProviders, javaScript.createCodeRules$simpleast_core_release(codeStyleProviders), new String[]{"class"}, built_ins3, (String[]) Arrays.copyOf(keywords3, keywords3.length));
        return o0.m(v.a("kt", createGenericCodeRules), v.a("kotlin", createGenericCodeRules), v.a("protobuf", createGenericCodeRules2), v.a("proto", createGenericCodeRules2), v.a("pb", createGenericCodeRules2), v.a("py", createGenericCodeRules3), v.a("python", createGenericCodeRules3), v.a("rs", createGenericCodeRules4), v.a("rust", createGenericCodeRules4), v.a("cql", o11), v.a("sql", o11), v.a("xml", o10), v.a("http", o10), v.a("cr", createGenericCodeRules5), v.a("crystal", createGenericCodeRules5), v.a("js", createGenericCodeRules6), v.a("javascript", createGenericCodeRules6));
    }

    @NotNull
    public final <R, S> Rule<R, Node<R>, S> createCodeRule(@NotNull final StyleNode.SpanProvider<R> textStyleProvider, @NotNull final Map<String, ? extends List<? extends Rule<R, Node<R>, S>>> languageMap, @NotNull final Function3 wrapperNodeProvider) {
        Intrinsics.checkNotNullParameter(textStyleProvider, "textStyleProvider");
        Intrinsics.checkNotNullParameter(languageMap, "languageMap");
        Intrinsics.checkNotNullParameter(wrapperNodeProvider, "wrapperNodeProvider");
        final Pattern pattern = PATTERN_CODE_BLOCK;
        return new Rule<R, Node<R>, S>(pattern) { // from class: com.discord.simpleast.code.CodeRules$createCodeRule$2
            @Override // com.discord.simpleast.core.parser.Rule
            @NotNull
            public ParseSpec<R, S> parse(@NotNull Matcher matcher, @NotNull Parser<R, ? super Node<R>, S> parser, S s10) {
                CodeNode.Content raw;
                Intrinsics.checkNotNullParameter(matcher, "matcher");
                Intrinsics.checkNotNullParameter(parser, "parser");
                String group = matcher.group(1);
                String group2 = matcher.group(3);
                if (group2 == null) {
                    group2 = "";
                }
                String group3 = matcher.group(2);
                List<? extends Rule<R, ? extends Object, S>> list = null;
                boolean z10 = false;
                if (group3 != null) {
                    z10 = StringsKt.U(group3, '\n', false, 2, null);
                }
                if (group != null) {
                    list = (List) languageMap.get(group);
                }
                if (list != null) {
                    List<? super Node<R>> parse = parser.parse(group2, s10, list);
                    if (parse != null) {
                        raw = new CodeNode.Content.Parsed(group2, parse);
                    } else {
                        throw new NullPointerException("null cannot be cast to non-null type kotlin.collections.List<com.discord.simpleast.core.node.Node<R>>");
                    }
                } else {
                    raw = new CodeNode.Content.Raw(group2);
                }
                return ParseSpec.Companion.createTerminal((Node) wrapperNodeProvider.invoke(new CodeNode(raw, group, textStyleProvider), Boolean.valueOf(z10), s10), s10);
            }
        };
    }

    @NotNull
    public final <R, S> Rule<R, Node<R>, S> createDefinitionRule(@NotNull final CodeStyleProviders<R> codeStyleProviders, @NotNull final String... identifiers) {
        Intrinsics.checkNotNullParameter(codeStyleProviders, "codeStyleProviders");
        Intrinsics.checkNotNullParameter(identifiers, "identifiers");
        final Pattern compile = Pattern.compile("^\\b(" + i.v0(identifiers, "|", null, null, 0, null, null, 62, null) + ")(\\s+\\w+)");
        Intrinsics.checkNotNullExpressionValue(compile, "Pattern.compile(\"\"\"^\\b($…String(\"|\")})(\\s+\\w+)\"\"\")");
        return new Rule<R, Node<R>, S>(compile) { // from class: com.discord.simpleast.code.CodeRules$createDefinitionRule$1
            @Override // com.discord.simpleast.core.parser.Rule
            @NotNull
            public ParseSpec<R, S> parse(@NotNull Matcher matcher, @NotNull Parser<R, ? super Node<R>, S> parser, S s10) {
                Intrinsics.checkNotNullParameter(matcher, "matcher");
                Intrinsics.checkNotNullParameter(parser, "parser");
                String group = matcher.group(1);
                Intrinsics.checkNotNull(group);
                String group2 = matcher.group(2);
                Intrinsics.checkNotNull(group2);
                return ParseSpec.Companion.createTerminal(new CodeNode.DefinitionNode(group, group2, CodeStyleProviders.this), s10);
            }
        };
    }

    @NotNull
    public final <R, S> Rule<R, Node<R>, S> createInlineCodeRule(@NotNull StyleNode.SpanProvider<R> textStyleProvider, @NotNull StyleNode.SpanProvider<R> bgStyleProvider) {
        Intrinsics.checkNotNullParameter(textStyleProvider, "textStyleProvider");
        Intrinsics.checkNotNullParameter(bgStyleProvider, "bgStyleProvider");
        return new CodeRules$createInlineCodeRule$1(this, textStyleProvider, bgStyleProvider, PATTERN_CODE_INLINE);
    }

    public final Pattern createWordPattern$simpleast_core_release(@NotNull String... words) {
        Intrinsics.checkNotNullParameter(words, "words");
        return Pattern.compile("^\\b(?:" + i.v0(words, "|", null, null, 0, null, null, 62, null) + ")\\b");
    }

    @NotNull
    public final Pattern getPATTERN_CODE_BLOCK() {
        return PATTERN_CODE_BLOCK;
    }

    @NotNull
    public final Pattern getPATTERN_CODE_INLINE() {
        return PATTERN_CODE_INLINE;
    }

    @NotNull
    public final Pattern getPATTERN_LEADING_WS_CONSUMER() {
        return PATTERN_LEADING_WS_CONSUMER;
    }

    @NotNull
    public final Pattern getPATTERN_NUMBERS() {
        return PATTERN_NUMBERS;
    }

    @NotNull
    public final Pattern getPATTERN_TEXT() {
        return PATTERN_TEXT;
    }

    @NotNull
    public final <R, S> Rule<R, Node<R>, S> toMatchGroupRule(@NotNull final Pattern toMatchGroupRule, final int i10, final StyleNode.SpanProvider<R> spanProvider) {
        Intrinsics.checkNotNullParameter(toMatchGroupRule, "$this$toMatchGroupRule");
        return new Rule<R, Node<R>, S>(toMatchGroupRule) { // from class: com.discord.simpleast.code.CodeRules$toMatchGroupRule$1
            @Override // com.discord.simpleast.core.parser.Rule
            @NotNull
            public ParseSpec<R, S> parse(@NotNull Matcher matcher, @NotNull Parser<R, ? super Node<R>, S> parser, S s10) {
                Node<R> textNode;
                Intrinsics.checkNotNullParameter(matcher, "matcher");
                Intrinsics.checkNotNullParameter(parser, "parser");
                String group = matcher.group(i10);
                if (group == null) {
                    group = "";
                }
                StyleNode.SpanProvider spanProvider2 = spanProvider;
                if (spanProvider2 != null) {
                    textNode = new StyleNode.TextStyledNode<>(group, spanProvider2);
                } else {
                    textNode = new TextNode<>(group);
                }
                return ParseSpec.Companion.createTerminal(textNode, s10);
            }
        };
    }
}
