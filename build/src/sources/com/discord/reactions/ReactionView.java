package com.discord.reactions;

import android.content.Context;
import android.graphics.Color;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.widget.LinearLayout;
import android.widget.TextSwitcher;
import android.widget.TextView;
import com.discord.SetTextSizeSpKt;
import com.discord.emoji.RenderableEmoji;
import com.discord.emoji.RenderableEmojiKt;
import com.discord.fonts.DiscordFont;
import com.discord.fonts.DiscordFontUtilsKt;
import com.discord.misc.utilities.ids.IdUtilsKt;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.misc.utilities.view.ViewBackgroundUtilsKt;
import com.discord.react_strings.I18nMessage;
import com.discord.react_strings.I18nUtilsKt;
import com.discord.react_strings.RenderContext;
import com.discord.reactions.databinding.ReactionViewBinding;
import com.discord.recycler_view.utils.ItemDiffableType;
import com.discord.theme.ThemeManager;
import com.discord.theme.ThemeManagerKt;
import com.discord.theme.utils.ColorUtilsKt;
import com.facebook.drawee.span.SimpleDraweeSpanTextView;
import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.util.List;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000P\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\r\u0018\u0000 (2\u00020\u0001:\u0006#$%&'(B\u001d\b\u0007\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005¢\u0006\u0004\b\u0006\u0010\u0007J\u0018\u0010\u0012\u001a\u00020\u00132\u0006\u0010\u0014\u001a\u00020\u00152\b\u0010\u0016\u001a\u0004\u0018\u00010\u0017J\u0010\u0010\u0018\u001a\u00020\u00132\u0006\u0010\u0019\u001a\u00020\u0010H\u0002J\u0012\u0010\u001a\u001a\u00020\u00132\b\u0010\u001b\u001a\u0004\u0018\u00010\u001cH\u0002J\u001a\u0010\u001a\u001a\u00020\u00132\u0006\u0010\u001d\u001a\u00020\u00102\b\u0010\u0016\u001a\u0004\u0018\u00010\u0017H\u0002J\u0010\u0010\u001a\u001a\u00020\u00132\u0006\u0010\u001e\u001a\u00020\u000bH\u0002J \u0010\u001f\u001a\u00020\u00132\u0006\u0010 \u001a\u00020\u000b2\u0006\u0010!\u001a\u00020\u00102\u0006\u0010\u0019\u001a\u00020\u0010H\u0002J\u001a\u0010\"\u001a\u00020\u00132\u0006\u0010\u001d\u001a\u00020\u00102\b\u0010\u0016\u001a\u0004\u0018\u00010\u0017H\u0002J\u001a\u0010\"\u001a\u00020\u00132\u0006\u0010\u001d\u001a\u00020\u00102\b\u0010\u001b\u001a\u0004\u0018\u00010\u001cH\u0002R\u000e\u0010\b\u001a\u00020\tX\u0082\u0004¢\u0006\u0002\n\u0000R\u0012\u0010\n\u001a\u0004\u0018\u00010\u000bX\u0082\u000e¢\u0006\u0004\n\u0002\u0010\fR\u0010\u0010\r\u001a\u0004\u0018\u00010\u000eX\u0082\u000e¢\u0006\u0002\n\u0000R\u0012\u0010\u000f\u001a\u0004\u0018\u00010\u0010X\u0082\u000e¢\u0006\u0004\n\u0002\u0010\u0011¨\u0006)"}, d2 = {"Lcom/discord/reactions/ReactionView;", "Landroid/widget/LinearLayout;", "context", "Landroid/content/Context;", "attrs", "Landroid/util/AttributeSet;", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "binding", "Lcom/discord/reactions/databinding/ReactionViewBinding;", "currentCount", "", "Ljava/lang/Integer;", "currentEmojiId", "", "currentShouldAnimate", "", "Ljava/lang/Boolean;", "setReaction", "", "reaction", "Lcom/discord/reactions/ReactionView$Reaction;", "reactionsTheme", "Lcom/discord/reactions/ReactionView$ReactionsTheme;", "configureLabels", "showingFullLabel", "configureTextColor", "palette", "Lcom/discord/reactions/ReactionView$BurstColorPalette;", "isMe", ViewProps.COLOR, "configureCount", "count", "animate", "configureBackground", "ThemedBurstColorPalette", "BurstColorPalette", "Reaction", "ReactionsTheme", "Emoji", "Companion", "reactions_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nReactionView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ReactionView.kt\ncom/discord/reactions/ReactionView\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,292:1\n1#2:293\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ReactionView extends LinearLayout {
    @NotNull
    private final ReactionViewBinding binding;
    private Integer currentCount;
    private String currentEmojiId;
    private Boolean currentShouldAnimate;
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static final int STROKE_WIDTH = SizeUtilsKt.getDpToPx(1);
    private static final int MINIMUM_WIDTH = SizeUtilsKt.getDpToPx(40);
    private static final int HORIZ_PADDING = SizeUtilsKt.getDpToPx(6);
    private static final int VERT_PADDING = SizeUtilsKt.getDpToPx(5);
    private static final int EMOJI_SIZE = SizeUtilsKt.getDpToPx(20);
    private static final int CORNER_RADIUS = SizeUtilsKt.getDpToPx(6);

    @Metadata(d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0007\n\u0002\u0010\u0007\n\u0002\b\u0003\bf\u0018\u00002\u00020\u0001R\u0014\u0010\u0002\u001a\u0004\u0018\u00010\u0003X¦\u0004¢\u0006\u0006\u001a\u0004\b\u0004\u0010\u0005R\u0014\u0010\u0006\u001a\u0004\u0018\u00010\u0003X¦\u0004¢\u0006\u0006\u001a\u0004\b\u0007\u0010\u0005R\u0014\u0010\b\u001a\u0004\u0018\u00010\u0003X¦\u0004¢\u0006\u0006\u001a\u0004\b\t\u0010\u0005R\u0012\u0010\n\u001a\u00020\u000bX¦\u0004¢\u0006\u0006\u001a\u0004\b\f\u0010\r¨\u0006\u000e"}, d2 = {"Lcom/discord/reactions/ReactionView$BurstColorPalette;", "", ViewProps.BACKGROUND_COLOR, "", "getBackgroundColor", "()Ljava/lang/String;", "accentColor", "getAccentColor", "highlightColor", "getHighlightColor", ViewProps.OPACITY, "", "getOpacity", "()F", "reactions_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface BurstColorPalette {
        String getAccentColor();

        String getBackgroundColor();

        String getHighlightColor();

        float getOpacity();
    }

    @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\r\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0006\u0010\u0007R\u0011\u0010\b\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\t\u0010\u0007R\u0011\u0010\n\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\u0007R\u0011\u0010\f\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u0007R\u0011\u0010\u000e\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0007R\u0011\u0010\u0010\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0007¨\u0006\u0012"}, d2 = {"Lcom/discord/reactions/ReactionView$Companion;", "", "<init>", "()V", "STROKE_WIDTH", "", "getSTROKE_WIDTH", "()I", "MINIMUM_WIDTH", "getMINIMUM_WIDTH", "HORIZ_PADDING", "getHORIZ_PADDING", "VERT_PADDING", "getVERT_PADDING", "EMOJI_SIZE", "getEMOJI_SIZE", "CORNER_RADIUS", "getCORNER_RADIUS", "reactions_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final int getCORNER_RADIUS() {
            return ReactionView.CORNER_RADIUS;
        }

        public final int getEMOJI_SIZE() {
            return ReactionView.EMOJI_SIZE;
        }

        public final int getHORIZ_PADDING() {
            return ReactionView.HORIZ_PADDING;
        }

        public final int getMINIMUM_WIDTH() {
            return ReactionView.MINIMUM_WIDTH;
        }

        public final int getSTROKE_WIDTH() {
            return ReactionView.STROKE_WIDTH;
        }

        public final int getVERT_PADDING() {
            return ReactionView.VERT_PADDING;
        }

        private Companion() {
        }
    }

    @Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0007\n\u0002\u0010\u000b\n\u0002\b\n\n\u0002\u0018\u0002\n\u0000\bf\u0018\u00002\u00020\u0001J\b\u0010\u0015\u001a\u00020\u0016H\u0016R\u0014\u0010\u0002\u001a\u0004\u0018\u00010\u0003X¦\u0004¢\u0006\u0006\u001a\u0004\b\u0004\u0010\u0005R\u0014\u0010\u0006\u001a\u0004\u0018\u00010\u0003X¦\u0004¢\u0006\u0006\u001a\u0004\b\u0007\u0010\u0005R\u0012\u0010\b\u001a\u00020\u0003X¦\u0004¢\u0006\u0006\u001a\u0004\b\t\u0010\u0005R\u0014\u0010\n\u001a\u0004\u0018\u00010\u000bX¦\u0004¢\u0006\u0006\u001a\u0004\b\f\u0010\rR\u0012\u0010\u000e\u001a\u00020\u0003X¦\u0004¢\u0006\u0006\u001a\u0004\b\u000f\u0010\u0005R\u0016\u0010\u0010\u001a\u0004\u0018\u00010\u00038VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\u0011\u0010\u0005R\u0014\u0010\u0012\u001a\u00020\u000b8VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\u0013\u0010\u0014¨\u0006\u0017"}, d2 = {"Lcom/discord/reactions/ReactionView$Emoji;", "", StackTraceHelper.ID_KEY, "", "getId", "()Ljava/lang/String;", StackTraceHelper.NAME_KEY, "getName", "src", "getSrc", "animated", "", "getAnimated", "()Ljava/lang/Boolean;", "displayName", "getDisplayName", "emojiId", "getEmojiId", "shouldAnimate", "getShouldAnimate", "()Z", "renderable", "Lcom/discord/emoji/RenderableEmoji;", "reactions_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface Emoji {

        @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
        @SourceDebugExtension({"SMAP\nReactionView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ReactionView.kt\ncom/discord/reactions/ReactionView$Emoji$DefaultImpls\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,292:1\n1#2:293\n*E\n"})
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class DefaultImpls {
            public static String getEmojiId(@NotNull Emoji emoji) {
                String id2 = emoji.getId();
                if (id2 == null) {
                    return emoji.getName();
                }
                return id2;
            }

            public static boolean getShouldAnimate(@NotNull Emoji emoji) {
                Boolean animated = emoji.getAnimated();
                if (animated != null) {
                    return animated.booleanValue();
                }
                return false;
            }

            @NotNull
            public static RenderableEmoji renderable(@NotNull Emoji emoji) {
                Long t10;
                String id2 = emoji.getId();
                if (id2 != null && (t10 = StringsKt.t(id2)) != null) {
                    RenderableEmoji.CustomWithEmojiId customWithEmojiId = RenderableEmoji.Companion.customWithEmojiId(t10.longValue(), emoji.getShouldAnimate(), emoji.getDisplayName());
                    if (customWithEmojiId != null) {
                        return customWithEmojiId;
                    }
                }
                RenderableEmoji.Companion companion = RenderableEmoji.Companion;
                String name = emoji.getName();
                if (name == null) {
                    name = "";
                }
                return companion.unicode(name);
            }
        }

        Boolean getAnimated();

        @NotNull
        String getDisplayName();

        String getEmojiId();

        String getId();

        String getName();

        boolean getShouldAnimate();

        @NotNull
        String getSrc();

        @NotNull
        RenderableEmoji renderable();
    }

    @Metadata(d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010\t\n\u0002\b\u0003\bf\u0018\u00002\u00020\u0001J\b\u0010\u0014\u001a\u00020\u0007H\u0016R\u0012\u0010\u0002\u001a\u00020\u0003X¦\u0004¢\u0006\u0006\u001a\u0004\b\u0004\u0010\u0005R\u0012\u0010\u0006\u001a\u00020\u0007X¦\u0004¢\u0006\u0006\u001a\u0004\b\u0006\u0010\bR\u0012\u0010\t\u001a\u00020\u0007X¦\u0004¢\u0006\u0006\u001a\u0004\b\t\u0010\bR\u0012\u0010\n\u001a\u00020\u000bX¦\u0004¢\u0006\u0006\u001a\u0004\b\f\u0010\rR\u0012\u0010\u000e\u001a\u00020\u0003X¦\u0004¢\u0006\u0006\u001a\u0004\b\u000f\u0010\u0005R\u0014\u0010\u0010\u001a\u0004\u0018\u00010\u0011X¦\u0004¢\u0006\u0006\u001a\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00168VX\u0096\u0004¢\u0006\u0006\u001a\u0004\b\u0017\u0010\u0018¨\u0006\u0019"}, d2 = {"Lcom/discord/reactions/ReactionView$Reaction;", "Lcom/discord/recycler_view/utils/ItemDiffableType;", "count", "", "getCount", "()I", "isMe", "", "()Z", "isMeBurst", "emoji", "Lcom/discord/reactions/ReactionView$Emoji;", "getEmoji", "()Lcom/discord/reactions/ReactionView$Emoji;", "burstCount", "getBurstCount", "themedBurstColors", "Lcom/discord/reactions/ReactionView$ThemedBurstColorPalette;", "getThemedBurstColors", "()Lcom/discord/reactions/ReactionView$ThemedBurstColorPalette;", "isBurstReaction", "itemId", "", "getItemId", "()Ljava/lang/Long;", "reactions_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface Reaction extends ItemDiffableType {

        @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class DefaultImpls {
            @NotNull
            public static Long getItemId(@NotNull Reaction reaction) {
                String emojiId = reaction.getEmoji().getEmojiId();
                boolean isBurstReaction = reaction.isBurstReaction();
                return Long.valueOf(IdUtilsKt.convertToId(emojiId + "_" + isBurstReaction));
            }

            public static boolean isBurstReaction(@NotNull Reaction reaction) {
                if (reaction.getBurstCount() > 0) {
                    return true;
                }
                return false;
            }
        }

        int getBurstCount();

        int getCount();

        @NotNull
        Emoji getEmoji();

        @Override // com.discord.recycler_view.utils.ItemDiffableType
        @NotNull
        Long getItemId();

        ThemedBurstColorPalette getThemedBurstColors();

        boolean isBurstReaction();

        boolean isMe();

        boolean isMeBurst();
    }

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\r\bf\u0018\u00002\u00020\u0001R\u0014\u0010\u0002\u001a\u0004\u0018\u00010\u0003X¦\u0004¢\u0006\u0006\u001a\u0004\b\u0004\u0010\u0005R\u0014\u0010\u0006\u001a\u0004\u0018\u00010\u0003X¦\u0004¢\u0006\u0006\u001a\u0004\b\u0007\u0010\u0005R\u0014\u0010\b\u001a\u0004\u0018\u00010\u0003X¦\u0004¢\u0006\u0006\u001a\u0004\b\t\u0010\u0005R\u0014\u0010\n\u001a\u0004\u0018\u00010\u0003X¦\u0004¢\u0006\u0006\u001a\u0004\b\u000b\u0010\u0005R\u0014\u0010\f\u001a\u0004\u0018\u00010\u0003X¦\u0004¢\u0006\u0006\u001a\u0004\b\r\u0010\u0005R\u0014\u0010\u000e\u001a\u0004\u0018\u00010\u0003X¦\u0004¢\u0006\u0006\u001a\u0004\b\u000f\u0010\u0005¨\u0006\u0010"}, d2 = {"Lcom/discord/reactions/ReactionView$ReactionsTheme;", "", "reactionBackgroundColor", "", "getReactionBackgroundColor", "()Ljava/lang/Integer;", "reactionBorderColor", "getReactionBorderColor", "reactionTextColor", "getReactionTextColor", "activeReactionBackgroundColor", "getActiveReactionBackgroundColor", "activeReactionBorderColor", "getActiveReactionBorderColor", "activeReactionTextColor", "getActiveReactionTextColor", "reactions_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface ReactionsTheme {
        Integer getActiveReactionBackgroundColor();

        Integer getActiveReactionBorderColor();

        Integer getActiveReactionTextColor();

        Integer getReactionBackgroundColor();

        Integer getReactionBorderColor();

        Integer getReactionTextColor();
    }

    @Metadata(d1 = {"\u0000\u0012\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\bf\u0018\u00002\u00020\u0001R\u0012\u0010\u0002\u001a\u00020\u0003X¦\u0004¢\u0006\u0006\u001a\u0004\b\u0004\u0010\u0005R\u0012\u0010\u0006\u001a\u00020\u0003X¦\u0004¢\u0006\u0006\u001a\u0004\b\u0007\u0010\u0005¨\u0006\b"}, d2 = {"Lcom/discord/reactions/ReactionView$ThemedBurstColorPalette;", "", "light", "Lcom/discord/reactions/ReactionView$BurstColorPalette;", "getLight", "()Lcom/discord/reactions/ReactionView$BurstColorPalette;", "dark", "getDark", "reactions_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface ThemedBurstColorPalette {
        @NotNull
        BurstColorPalette getDark();

        @NotNull
        BurstColorPalette getLight();
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public ReactionView(@NotNull Context context) {
        this(context, null, 2, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    private final void configureBackground(boolean z10, ReactionsTheme reactionsTheme) {
        Integer reactionBackgroundColor;
        int colorCompat;
        int colorCompat2;
        Integer activeReactionBorderColor;
        Integer activeReactionBackgroundColor;
        if (z10) {
            if (reactionsTheme == null || (activeReactionBackgroundColor = reactionsTheme.getActiveReactionBackgroundColor()) == null) {
                Context context = getContext();
                Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
                colorCompat = ColorUtilsKt.getColorCompat(context, com.discord.theme.R.color.brand_new_500_alpha_20);
            } else {
                colorCompat = activeReactionBackgroundColor.intValue();
            }
            int i10 = CORNER_RADIUS;
            if (reactionsTheme == null || (activeReactionBorderColor = reactionsTheme.getActiveReactionBorderColor()) == null) {
                Context context2 = getContext();
                Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
                colorCompat2 = ColorUtilsKt.getColorCompat(context2, com.discord.theme.R.color.brand_560);
            } else {
                colorCompat2 = activeReactionBorderColor.intValue();
            }
            ViewBackgroundUtilsKt.setBackgroundRectangle(this, colorCompat, i10, Integer.valueOf(colorCompat2), STROKE_WIDTH);
            return;
        }
        ViewBackgroundUtilsKt.setBackgroundRectangle(this, (reactionsTheme == null || (reactionBackgroundColor = reactionsTheme.getReactionBackgroundColor()) == null) ? ThemeManagerKt.getTheme().getBackgroundSurfaceHigh() : reactionBackgroundColor.intValue(), CORNER_RADIUS, reactionsTheme != null ? reactionsTheme.getReactionBorderColor() : null, STROKE_WIDTH);
    }

    private final void configureCount(int i10, boolean z10, boolean z11) {
        TextSwitcher textSwitcher = this.binding.reactionCountSwitcher;
        if (z11) {
            textSwitcher.setVisibility(8);
            return;
        }
        int i11 = 0;
        textSwitcher.setVisibility(0);
        if (z10) {
            Integer num = this.currentCount;
            if (num != null) {
                i11 = num.intValue();
            }
            if (i10 > i11) {
                textSwitcher.setInAnimation(textSwitcher.getContext(), R.anim.anim_slide_in_up);
                textSwitcher.setOutAnimation(textSwitcher.getContext(), R.anim.anim_slide_out_up);
            } else {
                textSwitcher.setInAnimation(textSwitcher.getContext(), R.anim.anim_slide_in_down);
                textSwitcher.setOutAnimation(textSwitcher.getContext(), R.anim.anim_slide_out_down);
            }
            textSwitcher.setText(String.valueOf(i10));
        } else {
            textSwitcher.setCurrentText(String.valueOf(i10));
        }
        this.currentCount = Integer.valueOf(i10);
    }

    private final void configureLabels(boolean z10) {
        if (!z10) {
            this.binding.reactionLabelLeft.setVisibility(8);
            this.binding.reactionLabelRight.setVisibility(8);
            return;
        }
        Context context = getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        List split$default = StringsKt.split$default(I18nUtilsKt.i18nFormat(context, I18nMessage.REACT_PILL_FULL_LABEL, new Function1() { // from class: com.discord.reactions.a
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit configureLabels$lambda$0;
                configureLabels$lambda$0 = ReactionView.configureLabels$lambda$0((RenderContext) obj);
                return configureLabels$lambda$0;
            }
        }).toString(), new String[]{"{emojiPreview}"}, false, 0, 6, null);
        String str = (String) CollectionsKt.q0(split$default, 0);
        String str2 = "";
        if (str == null) {
            str = "";
        }
        String str3 = (String) CollectionsKt.q0(split$default, 1);
        if (str3 != null) {
            str2 = str3;
        }
        if (str.length() > 0) {
            this.binding.reactionLabelLeft.setText(str);
            this.binding.reactionLabelLeft.setVisibility(0);
        } else {
            this.binding.reactionLabelLeft.setVisibility(8);
        }
        if (str2.length() > 0) {
            this.binding.reactionLabelRight.setText(str2);
            this.binding.reactionLabelRight.setVisibility(0);
            return;
        }
        this.binding.reactionLabelRight.setVisibility(8);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit configureLabels$lambda$0(RenderContext i18nFormat) {
        Intrinsics.checkNotNullParameter(i18nFormat, "$this$i18nFormat");
        i18nFormat.getArgs().put("emojiPreview", "{emojiPreview}");
        return Unit.f32464a;
    }

    private final void configureTextColor(BurstColorPalette burstColorPalette) {
        String accentColor;
        configureTextColor((burstColorPalette == null || (accentColor = burstColorPalette.getAccentColor()) == null) ? ThemeManagerKt.getTheme().getInteractiveTextDefault() : Color.parseColor(accentColor));
    }

    public final void setReaction(@NotNull Reaction reaction, ReactionsTheme reactionsTheme) {
        boolean z10;
        int count;
        boolean z11;
        Integer num;
        Intrinsics.checkNotNullParameter(reaction, "reaction");
        this.binding.getRoot().setContentDescription(reaction.getEmoji().getDisplayName());
        boolean z12 = false;
        if (Intrinsics.areEqual(this.currentEmojiId, reaction.getEmoji().getEmojiId()) && Intrinsics.areEqual(this.currentShouldAnimate, Boolean.valueOf(reaction.getEmoji().getShouldAnimate()))) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (reaction.isBurstReaction()) {
            count = reaction.getBurstCount();
        } else {
            count = reaction.getCount();
        }
        if (count == 0) {
            z11 = true;
        } else {
            z11 = false;
        }
        configureLabels(z11);
        if (z10 && (num = this.currentCount) != null && (num == null || count != num.intValue())) {
            z12 = true;
        }
        configureCount(count, z12, z11);
        configureBackground(reaction.isMe(), reactionsTheme);
        configureTextColor(reaction.isMe(), reactionsTheme);
        if (reaction.isBurstReaction()) {
            BurstColorPalette burstColorPalette = null;
            if (ThemeManager.INSTANCE.isThemeDark()) {
                ThemedBurstColorPalette themedBurstColors = reaction.getThemedBurstColors();
                if (themedBurstColors != null) {
                    burstColorPalette = themedBurstColors.getDark();
                }
            } else {
                ThemedBurstColorPalette themedBurstColors2 = reaction.getThemedBurstColors();
                if (themedBurstColors2 != null) {
                    burstColorPalette = themedBurstColors2.getLight();
                }
            }
            configureBackground(reaction.isMeBurst(), burstColorPalette);
            configureTextColor(burstColorPalette);
        } else {
            configureBackground(reaction.isMe(), reactionsTheme);
            configureTextColor(reaction.isMe(), reactionsTheme);
        }
        this.currentShouldAnimate = Boolean.valueOf(reaction.getEmoji().getShouldAnimate());
        if (z10) {
            return;
        }
        SimpleDraweeSpanTextView simpleDraweeSpanTextView = this.binding.reactionEmoji;
        RenderableEmoji renderable = reaction.getEmoji().renderable();
        Context context = getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        simpleDraweeSpanTextView.setDraweeSpanStringBuilder(RenderableEmojiKt.renderEmoji$default(renderable, context, EMOJI_SIZE, reaction.getEmoji().getShouldAnimate(), 0, null, 48, null));
        this.currentEmojiId = reaction.getEmoji().getEmojiId();
    }

    public /* synthetic */ ReactionView(Context context, AttributeSet attributeSet, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i10 & 2) != 0 ? null : attributeSet);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public ReactionView(@NotNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        Intrinsics.checkNotNullParameter(context, "context");
        ReactionViewBinding inflate = ReactionViewBinding.inflate(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        setOrientation(0);
        setGravity(16);
        setMinimumWidth(MINIMUM_WIDTH);
        int i10 = HORIZ_PADDING;
        int i11 = VERT_PADDING;
        setPadding(i10, i11, i10, i11);
        TextView reactionCount1 = inflate.reactionCount1;
        Intrinsics.checkNotNullExpressionValue(reactionCount1, "reactionCount1");
        DiscordFont discordFont = DiscordFont.PrimarySemibold;
        DiscordFontUtilsKt.setDiscordFont(reactionCount1, discordFont);
        TextView reactionCount12 = inflate.reactionCount1;
        Intrinsics.checkNotNullExpressionValue(reactionCount12, "reactionCount1");
        SetTextSizeSpKt.setTextSizeSp(reactionCount12, 14.0f, 14.0f);
        TextView reactionCount2 = inflate.reactionCount2;
        Intrinsics.checkNotNullExpressionValue(reactionCount2, "reactionCount2");
        DiscordFontUtilsKt.setDiscordFont(reactionCount2, discordFont);
        TextView reactionCount22 = inflate.reactionCount2;
        Intrinsics.checkNotNullExpressionValue(reactionCount22, "reactionCount2");
        SetTextSizeSpKt.setTextSizeSp(reactionCount22, 14.0f, 14.0f);
        TextView reactionLabelLeft = inflate.reactionLabelLeft;
        Intrinsics.checkNotNullExpressionValue(reactionLabelLeft, "reactionLabelLeft");
        DiscordFontUtilsKt.setDiscordFont(reactionLabelLeft, discordFont);
        TextView reactionLabelLeft2 = inflate.reactionLabelLeft;
        Intrinsics.checkNotNullExpressionValue(reactionLabelLeft2, "reactionLabelLeft");
        SetTextSizeSpKt.setTextSizeSp(reactionLabelLeft2, 14.0f, 14.0f);
        TextView reactionLabelRight = inflate.reactionLabelRight;
        Intrinsics.checkNotNullExpressionValue(reactionLabelRight, "reactionLabelRight");
        DiscordFontUtilsKt.setDiscordFont(reactionLabelRight, discordFont);
        TextView reactionLabelRight2 = inflate.reactionLabelRight;
        Intrinsics.checkNotNullExpressionValue(reactionLabelRight2, "reactionLabelRight");
        SetTextSizeSpKt.setTextSizeSp(reactionLabelRight2, 14.0f, 14.0f);
        inflate.reactionCountSwitcher.setMeasureAllChildren(false);
    }

    private final void configureTextColor(boolean z10, ReactionsTheme reactionsTheme) {
        Integer reactionTextColor;
        Integer activeReactionTextColor;
        configureTextColor(z10 ? (reactionsTheme == null || (activeReactionTextColor = reactionsTheme.getActiveReactionTextColor()) == null) ? ThemeManagerKt.getTheme().getInteractiveTextActive() : activeReactionTextColor.intValue() : (reactionsTheme == null || (reactionTextColor = reactionsTheme.getReactionTextColor()) == null) ? ThemeManagerKt.getTheme().getInteractiveTextDefault() : reactionTextColor.intValue());
    }

    private final void configureTextColor(int i10) {
        this.binding.reactionEmoji.setTextColor(i10);
        this.binding.reactionCount1.setTextColor(i10);
        this.binding.reactionCount2.setTextColor(i10);
        this.binding.reactionLabelLeft.setTextColor(i10);
        this.binding.reactionLabelRight.setTextColor(i10);
    }

    private final void configureBackground(boolean z10, BurstColorPalette burstColorPalette) {
        int backgroundSurfaceHigh;
        int colorCompat;
        String accentColor;
        String backgroundColor;
        int i10 = SetSpanOperation.SPAN_MAX_PRIORITY;
        if (burstColorPalette != null) {
            i10 = as.a.c(burstColorPalette.getOpacity() * ((float) SetSpanOperation.SPAN_MAX_PRIORITY));
        }
        Integer num = null;
        Integer valueOf = (burstColorPalette == null || (backgroundColor = burstColorPalette.getBackgroundColor()) == null) ? null : Integer.valueOf(r1.c.l(Color.parseColor(backgroundColor), i10));
        Integer valueOf2 = (burstColorPalette == null || (accentColor = burstColorPalette.getAccentColor()) == null) ? null : Integer.valueOf(Color.parseColor(accentColor));
        if (valueOf != null) {
            backgroundSurfaceHigh = valueOf.intValue();
        } else if (z10) {
            Context context = getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            backgroundSurfaceHigh = ColorUtilsKt.getColorCompat(context, com.discord.theme.R.color.brand_new_500_alpha_20);
        } else {
            backgroundSurfaceHigh = ThemeManagerKt.getTheme().getBackgroundSurfaceHigh();
        }
        if (z10) {
            if (valueOf2 == null) {
                Context context2 = getContext();
                Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
                colorCompat = ColorUtilsKt.getColorCompat(context2, com.discord.theme.R.color.brand_560);
            } else {
                colorCompat = valueOf2.intValue();
            }
            num = Integer.valueOf(colorCompat);
        }
        ViewBackgroundUtilsKt.setBackgroundRectangle(this, backgroundSurfaceHigh, CORNER_RADIUS, num, STROKE_WIDTH);
    }
}
