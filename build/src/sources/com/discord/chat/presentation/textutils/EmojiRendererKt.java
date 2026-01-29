package com.discord.chat.presentation.textutils;

import android.graphics.drawable.ColorDrawable;
import android.view.View;
import com.discord.chat.bridge.contentnode.CustomEmojiContentNode;
import com.discord.chat.bridge.contentnode.EmojiContentNode;
import com.discord.chat.bridge.contentnode.UnicodeEmojiContentNode;
import com.discord.emoji.RenderableEmoji;
import com.discord.emoji.RenderableEmojiKt;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.span.utilities.spannable.ClickableSpan;
import com.discord.span.utilities.spannable.EmojiAccessibilitySpan;
import com.discord.theme.DiscordThemeObject;
import com.discord.theme.ThemeManagerKt;
import com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
import com.facebook.drawee.span.DraweeSpanStringBuilder;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000,\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0000\u001a\u001e\u0010\u0000\u001a\u00020\u00012\u0006\u0010\u0002\u001a\u00020\u00032\u0006\u0010\u0004\u001a\u00020\u00052\u0006\u0010\u0006\u001a\u00020\u0007\u001a\u001c\u0010\b\u001a\u00020\u0001*\u00020\t2\u0006\u0010\u0006\u001a\u00020\u00072\b\b\u0002\u0010\n\u001a\u00020\u000b\u001a\n\u0010\f\u001a\u00020\r*\u00020\u0005¨\u0006\u000e"}, d2 = {"renderEmoji", "", "builder", "Lcom/facebook/drawee/span/DraweeSpanStringBuilder;", "emoji", "Lcom/discord/chat/bridge/contentnode/EmojiContentNode;", "rc", "Lcom/discord/chat/presentation/textutils/RenderContext;", "handleEmojiSpoiler", "Lcom/facebook/drawee/generic/GenericDraweeHierarchyBuilder;", "revealTransparent", "", "renderable", "Lcom/discord/emoji/RenderableEmoji;", "chat_release"}, k = 2, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nEmojiRenderer.kt\nKotlin\n*S Kotlin\n*F\n+ 1 EmojiRenderer.kt\ncom/discord/chat/presentation/textutils/EmojiRendererKt\n+ 2 SpannableStringBuilderExtensions.kt\ncom/discord/span/utilities/SpannableStringBuilderExtensionsKt\n+ 3 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n+ 4 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 5 ColorDrawable.kt\nandroidx/core/graphics/drawable/ColorDrawableKt\n*L\n1#1,73:1\n43#2,4:74\n47#2:81\n13472#3:78\n13473#3:80\n1#4:79\n27#5:82\n27#5:83\n27#5:84\n*S KotlinDebug\n*F\n+ 1 EmojiRenderer.kt\ncom/discord/chat/presentation/textutils/EmojiRendererKt\n*L\n38#1:74,4\n38#1:81\n38#1:78\n38#1:80\n38#1:79\n51#1:82\n64#1:83\n65#1:84\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class EmojiRendererKt {
    public static final void handleEmojiSpoiler(@NotNull GenericDraweeHierarchyBuilder genericDraweeHierarchyBuilder, @NotNull RenderContext rc2, boolean z10) {
        int spoilerHiddenBackground;
        Intrinsics.checkNotNullParameter(genericDraweeHierarchyBuilder, "<this>");
        Intrinsics.checkNotNullParameter(rc2, "rc");
        int i10 = 0;
        genericDraweeHierarchyBuilder.D(new ColorDrawable(0));
        genericDraweeHierarchyBuilder.z(0);
        if (rc2.spoilerExists()) {
            boolean spoilerIsRevealed = rc2.spoilerIsRevealed();
            if (spoilerIsRevealed && z10) {
                spoilerHiddenBackground = 0;
            } else if (spoilerIsRevealed) {
                spoilerHiddenBackground = ThemeManagerKt.getTheme().getSpoilerRevealedBackground();
            } else {
                spoilerHiddenBackground = ThemeManagerKt.getTheme().getSpoilerHiddenBackground();
            }
            DiscordThemeObject theme = ThemeManagerKt.getTheme();
            if (spoilerIsRevealed) {
                theme.getSpoilerRevealedBackground();
            } else {
                theme.getSpoilerHiddenBackground();
            }
            if (!spoilerIsRevealed) {
                i10 = ThemeManagerKt.getTheme().getSpoilerHiddenBackground();
            }
            genericDraweeHierarchyBuilder.x(new ColorDrawable(spoilerHiddenBackground));
            genericDraweeHierarchyBuilder.C(new ColorDrawable(i10));
        }
    }

    public static /* synthetic */ void handleEmojiSpoiler$default(GenericDraweeHierarchyBuilder genericDraweeHierarchyBuilder, RenderContext renderContext, boolean z10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            z10 = false;
        }
        handleEmojiSpoiler(genericDraweeHierarchyBuilder, renderContext, z10);
    }

    public static final void renderEmoji(@NotNull DraweeSpanStringBuilder builder, @NotNull final EmojiContentNode emoji, @NotNull final RenderContext rc2) {
        float baselineHeightPx;
        int iconSize;
        int i10;
        Intrinsics.checkNotNullParameter(builder, "builder");
        Intrinsics.checkNotNullParameter(emoji, "emoji");
        Intrinsics.checkNotNullParameter(rc2, "rc");
        boolean jumboable = emoji.getJumboable();
        if (jumboable) {
            iconSize = SizeUtilsKt.getDpToPx(48);
        } else {
            Float emojiBaselineHeightOverridePx = rc2.getEmojiBaselineHeightOverridePx();
            if (emojiBaselineHeightOverridePx != null) {
                baselineHeightPx = emojiBaselineHeightOverridePx.floatValue();
            } else {
                baselineHeightPx = rc2.getBaselineHeightPx();
            }
            iconSize = TextUtilsKt.getIconSize("_emoji", baselineHeightPx);
        }
        if (jumboable) {
            i10 = 1;
        } else {
            i10 = 2;
        }
        RenderableEmoji renderable = renderable(emoji);
        Object[] objArr = {new EmojiAccessibilitySpan(renderable.getContentDescription()), new ClickableSpan(null, null, null, null, 0.0f, null, null, new Function1() { // from class: com.discord.chat.presentation.textutils.i
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit renderEmoji$lambda$0;
                renderEmoji$lambda$0 = EmojiRendererKt.renderEmoji$lambda$0(RenderContext.this, emoji, (View) obj);
                return renderEmoji$lambda$0;
            }
        }, 127, null)};
        int length = builder.length();
        RenderableEmojiKt.renderEmojiInto(builder, renderable, rc2.getContext(), iconSize, rc2.getAnimateEmoji(), i10, new Function1() { // from class: com.discord.chat.presentation.textutils.j
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit renderEmoji$lambda$2$lambda$1;
                renderEmoji$lambda$2$lambda$1 = EmojiRendererKt.renderEmoji$lambda$2$lambda$1(RenderContext.this, (GenericDraweeHierarchyBuilder) obj);
                return renderEmoji$lambda$2$lambda$1;
            }
        });
        for (int i11 = 0; i11 < 2; i11++) {
            Object obj = objArr[i11];
            if (obj != null) {
                builder.setSpan(obj, length, builder.length(), 33);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit renderEmoji$lambda$0(RenderContext renderContext, EmojiContentNode emojiContentNode, View it) {
        Intrinsics.checkNotNullParameter(it, "it");
        renderContext.getOnTapEmoji().invoke(emojiContentNode);
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit renderEmoji$lambda$2$lambda$1(RenderContext renderContext, GenericDraweeHierarchyBuilder renderEmojiInto) {
        Intrinsics.checkNotNullParameter(renderEmojiInto, "$this$renderEmojiInto");
        handleEmojiSpoiler$default(renderEmojiInto, renderContext, false, 2, null);
        return Unit.f33282a;
    }

    @NotNull
    public static final RenderableEmoji renderable(@NotNull EmojiContentNode emojiContentNode) {
        boolean z10;
        Intrinsics.checkNotNullParameter(emojiContentNode, "<this>");
        if (emojiContentNode instanceof CustomEmojiContentNode) {
            RenderableEmoji.Companion companion = RenderableEmoji.Companion;
            CustomEmojiContentNode customEmojiContentNode = (CustomEmojiContentNode) emojiContentNode;
            long id2 = customEmojiContentNode.getId();
            if (!StringsKt.k0(customEmojiContentNode.getSrc()) && !Intrinsics.areEqual(customEmojiContentNode.getSrc(), customEmojiContentNode.getFrozenSrc())) {
                z10 = true;
            } else {
                z10 = false;
            }
            return companion.customWithEmojiId(id2, z10, customEmojiContentNode.getAlt());
        } else if (emojiContentNode instanceof UnicodeEmojiContentNode) {
            return RenderableEmoji.Companion.unicode(((UnicodeEmojiContentNode) emojiContentNode).getSurrogate());
        } else {
            throw new ir.p();
        }
    }
}
