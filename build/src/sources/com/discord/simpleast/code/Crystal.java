package com.discord.simpleast.code;

import com.discord.simpleast.code.Crystal;
import com.discord.simpleast.core.node.Node;
import com.discord.simpleast.core.parser.ParseSpec;
import com.discord.simpleast.core.parser.Parser;
import com.discord.simpleast.core.parser.Rule;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import kotlin.Metadata;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(bv = {1, 0, 3}, d1 = {"\u0000:\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u0011\n\u0002\u0010\u000e\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\bÆ\u0002\u0018\u00002\u00020\u0001:\u0001\u001bB\u0007\b\u0002¢\u0006\u0002\u0010\u0002JE\u0010\u0012\u001a \u0012\u001c\u0012\u001a\u0012\u0004\u0012\u0002H\u0015\u0012\n\u0012\b\u0012\u0004\u0012\u0002H\u00150\u0016\u0012\u0004\u0012\u0002H\u00170\u00140\u0013\"\u0004\b\u0000\u0010\u0015\"\u0004\b\u0001\u0010\u00172\f\u0010\u0018\u001a\b\u0012\u0004\u0012\u0002H\u00150\u0019H\u0000¢\u0006\u0002\b\u001aR\u0019\u0010\u0003\u001a\b\u0012\u0004\u0012\u00020\u00050\u0004¢\u0006\n\n\u0002\u0010\b\u001a\u0004\b\u0006\u0010\u0007R\u0019\u0010\t\u001a\b\u0012\u0004\u0012\u00020\u00050\u0004¢\u0006\n\n\u0002\u0010\b\u001a\u0004\b\n\u0010\u0007R\u0016\u0010\u000b\u001a\n \r*\u0004\u0018\u00010\f0\fX\u0082\u0004¢\u0006\u0002\n\u0000R\u0016\u0010\u000e\u001a\n \r*\u0004\u0018\u00010\f0\fX\u0082\u0004¢\u0006\u0002\n\u0000R\u0016\u0010\u000f\u001a\n \r*\u0004\u0018\u00010\f0\fX\u0082\u0004¢\u0006\u0002\n\u0000R\u0016\u0010\u0010\u001a\n \r*\u0004\u0018\u00010\f0\fX\u0082\u0004¢\u0006\u0002\n\u0000R\u0016\u0010\u0011\u001a\n \r*\u0004\u0018\u00010\f0\fX\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\u001c"}, d2 = {"Lcom/discord/simpleast/code/Crystal;", "", "()V", "BUILT_INS", "", "", "getBUILT_INS", "()[Ljava/lang/String;", "[Ljava/lang/String;", "KEYWORDS", "getKEYWORDS", "PATTERN_CRYSTAL_ANNOTATION", "Ljava/util/regex/Pattern;", "kotlin.jvm.PlatformType", "PATTERN_CRYSTAL_COMMENTS", "PATTERN_CRYSTAL_REGEX", "PATTERN_CRYSTAL_STRINGS", "PATTERN_CRYSTAL_SYMBOL", "createCrystalCodeRules", "", "Lcom/discord/simpleast/core/parser/Rule;", "RC", "Lcom/discord/simpleast/core/node/Node;", "S", "codeStyleProviders", "Lcom/discord/simpleast/code/CodeStyleProviders;", "createCrystalCodeRules$simpleast_core_release", "FunctionNode", "simpleast-core_release"}, k = 1, mv = {1, 4, 0})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class Crystal {
    public static final Crystal INSTANCE = new Crystal();
    @NotNull
    private static final String[] KEYWORDS = {"true|false|nil", "module|require|include|extend|lib", "abstract|private|protected", "annotation|class|finalize|new|initialize|allocate|self|super", "union|typeof|forall|is_a?|nil?|as?|as|responds_to?|alias|type", "property|getter|setter|struct|of", "previous_def|method|fun|enum|macro", "rescue|raise|begin|end|ensure", "if|else|elsif|then|unless|until", "for|in|of|do|when|select|with", "while|break|next|yield|case", "print|puts|return"};
    @NotNull
    private static final String[] BUILT_INS = {"Nil|Bool|true|false|Void|NoReturn", "Number|BigDecimal|BigRational|BigFloat|BigInt", "Int|Int8|Int16|Int32|Int64|UInt8|UInt16|UInt32|UInt64|Float|Float32|Float64", "Char|String|Symbol|Regex", "StaticArray|Array|Set|Hash|Range|Tuple|NamedTuple|Union|BitArray", "Proc|Command|Enum|Class", "Reference|Value|Struct|Object|Pointer", "Exception|ArgumentError|KeyError|TypeCastError|IndexError|RuntimeError|NilAssertionError|InvalidBigDecimalException|NotImplementedError|OverflowError", "pointerof|sizeof|instance_sizeof|offsetof|uninitialized"};
    private static final Pattern PATTERN_CRYSTAL_COMMENTS = Pattern.compile("^(#.*)");
    private static final Pattern PATTERN_CRYSTAL_ANNOTATION = Pattern.compile("^@\\[(\\w+)(?:\\(.+\\))?]");
    private static final Pattern PATTERN_CRYSTAL_STRINGS = Pattern.compile("^\"[\\s\\S]*?(?<!\\\\)\"(?=\\W|\\s|$)");
    private static final Pattern PATTERN_CRYSTAL_REGEX = Pattern.compile("^/.*?/[imx]?");
    private static final Pattern PATTERN_CRYSTAL_SYMBOL = Pattern.compile("^(:\"?(?:[+-/%&^|]|\\*\\*?|\\w+|(?:<(?=[<=\\s])[<=]?(?:(?<==)>)?|>(?=[>=\\s])[>=]?(?:(?<==)>)?)|\\[][?=]?|(?:!(?=[=~\\s])[=~]?|=?(?:~|==?)))(?:(?<!\\\\)\"(?=\\s|$))?)");

    @Metadata(bv = {1, 0, 3}, d1 = {"\u0000\u001c\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u0000 \n*\u0004\b\u0000\u0010\u00012\b\u0012\u0004\u0012\u0002H\u00010\u0002:\u0001\nB-\u0012\u0006\u0010\u0003\u001a\u00020\u0004\u0012\u0006\u0010\u0005\u001a\u00020\u0004\u0012\b\u0010\u0006\u001a\u0004\u0018\u00010\u0004\u0012\f\u0010\u0007\u001a\b\u0012\u0004\u0012\u00028\u00000\b¢\u0006\u0002\u0010\t¨\u0006\u000b"}, d2 = {"Lcom/discord/simpleast/code/Crystal$FunctionNode;", "RC", "Lcom/discord/simpleast/core/node/Node$Parent;", "pre", "", "signature", "params", "codeStyleProviders", "Lcom/discord/simpleast/code/CodeStyleProviders;", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/discord/simpleast/code/CodeStyleProviders;)V", "Companion", "simpleast-core_release"}, k = 1, mv = {1, 4, 0})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class FunctionNode<RC> extends Node.Parent<RC> {
        public static final Companion Companion = new Companion(null);
        private static final Pattern PATTERN_CRYSTAL_FUNC = Pattern.compile("^(def)( +\\w+)( *\\( *(?:@\\w+ +: +\\w*)?\\w+(?: +[:=] +.*)? *\\))?(?!.+)");

        @Metadata(bv = {1, 0, 3}, d1 = {"\u0000(\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\b\u0086\u0003\u0018\u00002\u00020\u0001B\u0007\b\u0002¢\u0006\u0002\u0010\u0002J8\u0010\u0006\u001a\u001a\u0012\u0004\u0012\u0002H\b\u0012\n\u0012\b\u0012\u0004\u0012\u0002H\b0\t\u0012\u0004\u0012\u0002H\n0\u0007\"\u0004\b\u0001\u0010\b\"\u0004\b\u0002\u0010\n2\f\u0010\u000b\u001a\b\u0012\u0004\u0012\u0002H\b0\fR\u0016\u0010\u0003\u001a\n \u0005*\u0004\u0018\u00010\u00040\u0004X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006\r"}, d2 = {"Lcom/discord/simpleast/code/Crystal$FunctionNode$Companion;", "", "()V", "PATTERN_CRYSTAL_FUNC", "Ljava/util/regex/Pattern;", "kotlin.jvm.PlatformType", "createFunctionRule", "Lcom/discord/simpleast/core/parser/Rule;", "RC", "Lcom/discord/simpleast/core/node/Node;", "S", "codeStyleProviders", "Lcom/discord/simpleast/code/CodeStyleProviders;", "simpleast-core_release"}, k = 1, mv = {1, 4, 0})
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class Companion {
            private Companion() {
            }

            @NotNull
            public final <RC, S> Rule<RC, Node<RC>, S> createFunctionRule(@NotNull final CodeStyleProviders<RC> codeStyleProviders) {
                Intrinsics.checkNotNullParameter(codeStyleProviders, "codeStyleProviders");
                final Pattern PATTERN_CRYSTAL_FUNC = FunctionNode.PATTERN_CRYSTAL_FUNC;
                Intrinsics.checkNotNullExpressionValue(PATTERN_CRYSTAL_FUNC, "PATTERN_CRYSTAL_FUNC");
                return new Rule<RC, Node<RC>, S>(PATTERN_CRYSTAL_FUNC) { // from class: com.discord.simpleast.code.Crystal$FunctionNode$Companion$createFunctionRule$1
                    @Override // com.discord.simpleast.core.parser.Rule
                    @NotNull
                    public ParseSpec<RC, S> parse(@NotNull Matcher matcher, @NotNull Parser<RC, ? super Node<RC>, S> parser, S s10) {
                        Intrinsics.checkNotNullParameter(matcher, "matcher");
                        Intrinsics.checkNotNullParameter(parser, "parser");
                        String group = matcher.group(1);
                        String group2 = matcher.group(2);
                        String group3 = matcher.group(3);
                        ParseSpec.Companion companion = ParseSpec.Companion;
                        Intrinsics.checkNotNull(group);
                        Intrinsics.checkNotNull(group2);
                        return companion.createTerminal(new Crystal.FunctionNode(group, group2, group3, codeStyleProviders), s10);
                    }
                };
            }

            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }
        }

        /* JADX WARN: Illegal instructions before constructor call */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public FunctionNode(@org.jetbrains.annotations.NotNull java.lang.String r3, @org.jetbrains.annotations.NotNull java.lang.String r4, java.lang.String r5, @org.jetbrains.annotations.NotNull com.discord.simpleast.code.CodeStyleProviders<RC> r6) {
            /*
                r2 = this;
                java.lang.String r0 = "pre"
                kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r3, r0)
                java.lang.String r0 = "signature"
                kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r4, r0)
                java.lang.String r0 = "codeStyleProviders"
                kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r6, r0)
                com.discord.simpleast.core.node.StyleNode$TextStyledNode r0 = new com.discord.simpleast.core.node.StyleNode$TextStyledNode
                com.discord.simpleast.core.node.StyleNode$SpanProvider r1 = r6.getKeywordStyleProvider()
                r0.<init>(r3, r1)
                com.discord.simpleast.core.node.StyleNode$TextStyledNode r3 = new com.discord.simpleast.core.node.StyleNode$TextStyledNode
                com.discord.simpleast.core.node.StyleNode$SpanProvider r1 = r6.getIdentifierStyleProvider()
                r3.<init>(r4, r1)
                if (r5 == 0) goto L2d
                com.discord.simpleast.core.node.StyleNode$TextStyledNode r4 = new com.discord.simpleast.core.node.StyleNode$TextStyledNode
                com.discord.simpleast.core.node.StyleNode$SpanProvider r6 = r6.getParamsStyleProvider()
                r4.<init>(r5, r6)
                goto L2e
            L2d:
                r4 = 0
            L2e:
                r5 = 3
                com.discord.simpleast.core.node.Node[] r5 = new com.discord.simpleast.core.node.Node[r5]
                r6 = 0
                r5[r6] = r0
                r6 = 1
                r5[r6] = r3
                r3 = 2
                r5[r3] = r4
                r2.<init>(r5)
                return
            */
            throw new UnsupportedOperationException("Method not decompiled: com.discord.simpleast.code.Crystal.FunctionNode.<init>(java.lang.String, java.lang.String, java.lang.String, com.discord.simpleast.code.CodeStyleProviders):void");
        }
    }

    private Crystal() {
    }

    @NotNull
    public final <RC, S> List<Rule<RC, Node<RC>, S>> createCrystalCodeRules$simpleast_core_release(@NotNull CodeStyleProviders<RC> codeStyleProviders) {
        Intrinsics.checkNotNullParameter(codeStyleProviders, "codeStyleProviders");
        CodeRules codeRules = CodeRules.INSTANCE;
        Pattern PATTERN_CRYSTAL_COMMENTS2 = PATTERN_CRYSTAL_COMMENTS;
        Intrinsics.checkNotNullExpressionValue(PATTERN_CRYSTAL_COMMENTS2, "PATTERN_CRYSTAL_COMMENTS");
        Rule matchGroupRule$default = CodeRules.toMatchGroupRule$default(codeRules, PATTERN_CRYSTAL_COMMENTS2, 0, codeStyleProviders.getCommentStyleProvider(), 1, null);
        Pattern PATTERN_CRYSTAL_STRINGS2 = PATTERN_CRYSTAL_STRINGS;
        Intrinsics.checkNotNullExpressionValue(PATTERN_CRYSTAL_STRINGS2, "PATTERN_CRYSTAL_STRINGS");
        Rule matchGroupRule$default2 = CodeRules.toMatchGroupRule$default(codeRules, PATTERN_CRYSTAL_STRINGS2, 0, codeStyleProviders.getLiteralStyleProvider(), 1, null);
        Pattern PATTERN_CRYSTAL_REGEX2 = PATTERN_CRYSTAL_REGEX;
        Intrinsics.checkNotNullExpressionValue(PATTERN_CRYSTAL_REGEX2, "PATTERN_CRYSTAL_REGEX");
        Rule matchGroupRule$default3 = CodeRules.toMatchGroupRule$default(codeRules, PATTERN_CRYSTAL_REGEX2, 0, codeStyleProviders.getLiteralStyleProvider(), 1, null);
        Pattern PATTERN_CRYSTAL_ANNOTATION2 = PATTERN_CRYSTAL_ANNOTATION;
        Intrinsics.checkNotNullExpressionValue(PATTERN_CRYSTAL_ANNOTATION2, "PATTERN_CRYSTAL_ANNOTATION");
        Rule matchGroupRule$default4 = CodeRules.toMatchGroupRule$default(codeRules, PATTERN_CRYSTAL_ANNOTATION2, 0, codeStyleProviders.getGenericsStyleProvider(), 1, null);
        Pattern PATTERN_CRYSTAL_SYMBOL2 = PATTERN_CRYSTAL_SYMBOL;
        Intrinsics.checkNotNullExpressionValue(PATTERN_CRYSTAL_SYMBOL2, "PATTERN_CRYSTAL_SYMBOL");
        return CollectionsKt.o(matchGroupRule$default, matchGroupRule$default2, matchGroupRule$default3, matchGroupRule$default4, CodeRules.toMatchGroupRule$default(codeRules, PATTERN_CRYSTAL_SYMBOL2, 0, codeStyleProviders.getLiteralStyleProvider(), 1, null), FunctionNode.Companion.createFunctionRule(codeStyleProviders));
    }

    @NotNull
    public final String[] getBUILT_INS() {
        return BUILT_INS;
    }

    @NotNull
    public final String[] getKEYWORDS() {
        return KEYWORDS;
    }
}
