package com.discord.emoji_picker;

import android.annotation.SuppressLint;
import android.content.Context;
import android.view.View;
import androidx.core.view.n0;
import androidx.recyclerview.widget.RecyclerView;
import com.discord.crash_reporting.CrashReporting;
import com.discord.emoji_picker.EmojiPickerCache;
import com.discord.emoji_picker.EmojiPickerItem;
import com.discord.emoji_picker.EmojiPickerItemData;
import com.discord.emoji_picker.EmojiPickerScroller;
import com.discord.emoji_picker.EmojiPickerViewHolder;
import com.discord.misc.utilities.measure.ViewMeasureExtensionsKt;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.recycler_view.scroll.RecyclerViewScrollLimiter;
import com.discord.recycler_view.utils.RecyclerViewExtensionsKt;
import com.facebook.react.uimanager.ViewProps;
import java.util.List;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.Pair;
import kotlin.Unit;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u009a\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\t\n\u0002\u0010\u000e\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0010\n\u0002\u0018\u0002\n\u0002\b\u0012\n\u0002\u0010\u0007\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010 \n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0005\b\u0001\u0018\u00002\u00020\u00012\u00020\u0002:\u0001mBý\u0001\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\u0007\u001a\u00020\u0005\u0012\u0006\u0010\t\u001a\u00020\b\u0012 \u0010\u000f\u001a\u001c\u0012\u0004\u0012\u00020\u000b\u0012\u0006\u0012\u0004\u0018\u00010\f\u0012\u0004\u0012\u00020\r\u0012\u0004\u0012\u00020\u000e0\n\u0012\u0018\u0010\u0012\u001a\u0014\u0012\u0004\u0012\u00020\u0000\u0012\u0004\u0012\u00020\u0011\u0012\u0004\u0012\u00020\u000e0\u0010\u0012\u0018\u0010\u0013\u001a\u0014\u0012\u0004\u0012\u00020\u0000\u0012\u0004\u0012\u00020\u0011\u0012\u0004\u0012\u00020\u000e0\u0010\u0012\u0018\u0010\u0014\u001a\u0014\u0012\u0004\u0012\u00020\u0000\u0012\u0004\u0012\u00020\u0011\u0012\u0004\u0012\u00020\u000e0\u0010\u0012 \u0010\u0015\u001a\u001c\u0012\u0004\u0012\u00020\u000b\u0012\u0006\u0012\u0004\u0018\u00010\f\u0012\u0004\u0012\u00020\r\u0012\u0004\u0012\u00020\u000e0\n\u0012\u0018\u0010\u0016\u001a\u0014\u0012\u0004\u0012\u00020\u000b\u0012\u0004\u0012\u00020\u0005\u0012\u0004\u0012\u00020\u000e0\u0010\u0012\u0018\u0010\u0018\u001a\u0014\u0012\u0004\u0012\u00020\u000b\u0012\u0004\u0012\u00020\u0017\u0012\u0004\u0012\u00020\u000e0\u0010\u0012\u0006\u0010\u0019\u001a\u00020\u0017\u0012\u0006\u0010\u001b\u001a\u00020\u001a¢\u0006\u0004\b\u001c\u0010\u001dJ#\u0010 \u001a\u00020\u000e2\b\u0010\u001e\u001a\u0004\u0018\u00010\u00052\b\u0010\u001f\u001a\u0004\u0018\u00010\u0005H\u0003¢\u0006\u0004\b \u0010!J\u000f\u0010\"\u001a\u00020\u000eH\u0002¢\u0006\u0004\b\"\u0010#J\u000f\u0010$\u001a\u00020\u000eH\u0002¢\u0006\u0004\b$\u0010#J\u0017\u0010&\u001a\u00020\u000e2\u0006\u0010%\u001a\u00020\u000bH\u0002¢\u0006\u0004\b&\u0010'J\u0017\u0010)\u001a\u00020\u000e2\u0006\u0010(\u001a\u00020\u0017H\u0002¢\u0006\u0004\b)\u0010*J\u0013\u0010,\u001a\u00020\u0005*\u00020+H\u0002¢\u0006\u0004\b,\u0010-J\u0017\u0010/\u001a\u00020\u000e2\u0006\u0010.\u001a\u00020\u000bH\u0016¢\u0006\u0004\b/\u0010'J\u0017\u00100\u001a\u00020\u000e2\u0006\u0010.\u001a\u00020\u000bH\u0016¢\u0006\u0004\b0\u0010'J\u001f\u00103\u001a\u00020\u00172\u0006\u00101\u001a\u00020\u00052\u0006\u00102\u001a\u00020\u0005H\u0016¢\u0006\u0004\b3\u00104J\u0019\u00105\u001a\u00020\u000e2\b\u0010%\u001a\u0004\u0018\u00010\u000bH\u0016¢\u0006\u0004\b5\u0010'J\u0019\u00106\u001a\u00020\u000e2\b\u0010%\u001a\u0004\u0018\u00010\u000bH\u0016¢\u0006\u0004\b6\u0010'J\u0015\u00107\u001a\u00020\u000e2\u0006\u0010\u001b\u001a\u00020\u001a¢\u0006\u0004\b7\u00108J\u0015\u00109\u001a\u00020\u000e2\u0006\u0010\u0006\u001a\u00020\u0005¢\u0006\u0004\b9\u0010:J\u0015\u0010;\u001a\u00020\u000e2\u0006\u0010\u0007\u001a\u00020\u0005¢\u0006\u0004\b;\u0010:J\u0015\u0010<\u001a\u00020\u000e2\u0006\u0010\t\u001a\u00020\b¢\u0006\u0004\b<\u0010=J\u0015\u0010@\u001a\u00020\u000e2\u0006\u0010?\u001a\u00020>¢\u0006\u0004\b@\u0010AJ\u0015\u0010C\u001a\u00020\u000e2\u0006\u0010B\u001a\u00020>¢\u0006\u0004\bC\u0010AJ\u0015\u0010D\u001a\u00020\u000e2\u0006\u0010\u0019\u001a\u00020\u0017¢\u0006\u0004\bD\u0010*J%\u0010I\u001a\u00020\u000e2\u0006\u0010E\u001a\u00020\u00052\u0006\u0010F\u001a\u00020\u00172\u0006\u0010H\u001a\u00020G¢\u0006\u0004\bI\u0010JJ\u0015\u0010L\u001a\u00020\u000e2\u0006\u0010K\u001a\u00020\u0017¢\u0006\u0004\bL\u0010*J\u000f\u0010M\u001a\u00020\u000eH\u0007¢\u0006\u0004\bM\u0010#J+\u0010Q\u001a\u00020\u000e2\f\u0010O\u001a\b\u0012\u0004\u0012\u00020+0N2\f\u0010P\u001a\b\u0012\u0004\u0012\u00020+0NH\u0017¢\u0006\u0004\bQ\u0010RJ\u000f\u0010S\u001a\u00020\u0003H\u0016¢\u0006\u0004\bS\u0010TR\u001b\u0010Z\u001a\u00020U8BX\u0082\u0084\u0002¢\u0006\f\n\u0004\bV\u0010W\u001a\u0004\bX\u0010YR\u001b\u0010_\u001a\u00020[8BX\u0082\u0084\u0002¢\u0006\f\n\u0004\b\\\u0010W\u001a\u0004\b]\u0010^R\u0014\u0010a\u001a\u00020`8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\ba\u0010bR\u0016\u0010c\u001a\u00020\u00178\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bc\u0010dR\u0014\u0010h\u001a\u00020e8BX\u0082\u0004¢\u0006\u0006\u001a\u0004\bf\u0010gR\u0014\u0010l\u001a\u00020i8BX\u0082\u0004¢\u0006\u0006\u001a\u0004\bj\u0010k¨\u0006n"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerView;", "Landroidx/recyclerview/widget/RecyclerView;", "Lcom/discord/emoji_picker/EmojiPickerCache$Listener;", "Landroid/content/Context;", "context", "", "emojiSizeDp", "emojiMarginDp", "Lcom/discord/emoji_picker/EmojiPickerItemData$CoreData;", "coreData", "Lkotlin/Function3;", "Landroid/view/View;", "", "", "", "onPressEmoji", "Lkotlin/Function2;", "Lcom/discord/emoji_picker/EmojiPickerScroller$ScrollEvent;", "onScroll", "onScrollBeginDrag", "onScrollEndDrag", "onLongPressEmoji", "onStickyHeaderRender", "", "onShowNitroUpsell", "useTier0UpsellContent", "Lcom/discord/emoji_picker/EmojiPickerView$Config;", "config", "<init>", "(Landroid/content/Context;IILcom/discord/emoji_picker/EmojiPickerItemData$CoreData;Lkotlin/jvm/functions/Function3;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function3;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function2;ZLcom/discord/emoji_picker/EmojiPickerView$Config;)V", ViewProps.POSITION, "count", "onItemsChanged", "(Ljava/lang/Integer;Ljava/lang/Integer;)V", "configureRecycledViewPool", "()V", "configureMountedChildren", "view", "configureMountedChild", "(Landroid/view/View;)V", "hasPremiumInlineRoadblock", "configurePremiumUpsellGradientDecorator", "(Z)V", "Lcom/discord/emoji_picker/EmojiPickerItem;", "getSpanSize", "(Lcom/discord/emoji_picker/EmojiPickerItem;)I", "child", "onChildAttachedToWindow", "onChildDetachedFromWindow", "velocityX", "velocityY", "fling", "(II)Z", "startViewTransition", "endViewTransition", "setConfig", "(Lcom/discord/emoji_picker/EmojiPickerView$Config;)V", "setEmojiSize", "(I)V", "setEmojiMargin", "setCoreData", "(Lcom/discord/emoji_picker/EmojiPickerItemData$CoreData;)V", "", "contentPaddingTopDp", "setContentPaddingTop", "(F)V", "contentPaddingBottomDp", "setContentPaddingBottom", "setUseTier0UpsellContent", "index", "animated", "Lcom/discord/emoji_picker/EmojiPickerItem$ItemType;", "itemType", "scrollToItemAtIndex", "(IZLcom/discord/emoji_picker/EmojiPickerItem$ItemType;)V", ViewProps.ENABLED, "scrollingEnabled", "onDestroy", "", "emojis", "emojisUnicode", "onEmojisUpdated", "(Ljava/util/List;Ljava/util/List;)V", "onContext", "()Landroid/content/Context;", "Lcom/discord/emoji_picker/EmojiPickerVisibilityTracker;", "visibilityTracker$delegate", "Lkotlin/Lazy;", "getVisibilityTracker", "()Lcom/discord/emoji_picker/EmojiPickerVisibilityTracker;", "visibilityTracker", "Lcom/discord/emoji_picker/EmojiPickerScroller;", "scroller$delegate", "getScroller", "()Lcom/discord/emoji_picker/EmojiPickerScroller;", "scroller", "Lcom/discord/emoji_picker/EmojiPickerPremiumUpsellGradientBackground;", "premiumUpsellGradientDecoration", "Lcom/discord/emoji_picker/EmojiPickerPremiumUpsellGradientBackground;", "isInViewTransition", "Z", "Lcom/discord/emoji_picker/EmojiPickerViewAdapter;", "getTypedAdapter", "()Lcom/discord/emoji_picker/EmojiPickerViewAdapter;", "typedAdapter", "Lcom/discord/emoji_picker/EmojiPickerLayoutManager;", "getTypedLayoutManager", "()Lcom/discord/emoji_picker/EmojiPickerLayoutManager;", "typedLayoutManager", "Config", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SuppressLint({"ViewConstructor"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class EmojiPickerView extends RecyclerView implements EmojiPickerCache.Listener {
    private boolean isInViewTransition;
    @NotNull
    private final EmojiPickerPremiumUpsellGradientBackground premiumUpsellGradientDecoration;
    @NotNull
    private final Lazy scroller$delegate;
    @NotNull
    private final Lazy visibilityTracker$delegate;

    @Metadata(d1 = {"\u0000\"\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0012\n\u0002\u0010\u000e\n\u0002\b\u0002\b\u0086\b\u0018\u0000 \u001a2\u00020\u0001:\u0001\u001aB'\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0006\u0012\u0006\u0010\u0007\u001a\u00020\u0003¢\u0006\u0004\b\b\u0010\tJ\t\u0010\u0010\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0011\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0012\u001a\u00020\u0006HÆ\u0003J\t\u0010\u0013\u001a\u00020\u0003HÆ\u0003J1\u0010\u0014\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00062\b\b\u0002\u0010\u0007\u001a\u00020\u0003HÆ\u0001J\u0013\u0010\u0015\u001a\u00020\u00032\b\u0010\u0016\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0017\u001a\u00020\u0006HÖ\u0001J\t\u0010\u0018\u001a\u00020\u0019HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000bR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\u000bR\u0011\u0010\u0005\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000eR\u0011\u0010\u0007\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u000b¨\u0006\u001b"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerView$Config;", "", "animateEmoji", "", "scrollFastOptimizationEnabled", "scrollFastVelocity", "", "disableAnimationsOnScroll", "<init>", "(ZZIZ)V", "getAnimateEmoji", "()Z", "getScrollFastOptimizationEnabled", "getScrollFastVelocity", "()I", "getDisableAnimationsOnScroll", "component1", "component2", "component3", "component4", "copy", "equals", "other", "hashCode", "toString", "", "Companion", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Config {
        @NotNull
        public static final Companion Companion = new Companion(null);
        private final boolean animateEmoji;
        private final boolean disableAnimationsOnScroll;
        private final boolean scrollFastOptimizationEnabled;
        private final int scrollFastVelocity;

        @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003¨\u0006\u0004"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerView$Config$Companion;", "", "<init>", "()V", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class Companion {
            public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            private Companion() {
            }
        }

        public Config(boolean z10, boolean z11, int i10, boolean z12) {
            this.animateEmoji = z10;
            this.scrollFastOptimizationEnabled = z11;
            this.scrollFastVelocity = i10;
            this.disableAnimationsOnScroll = z12;
        }

        public static /* synthetic */ Config copy$default(Config config, boolean z10, boolean z11, int i10, boolean z12, int i11, Object obj) {
            if ((i11 & 1) != 0) {
                z10 = config.animateEmoji;
            }
            if ((i11 & 2) != 0) {
                z11 = config.scrollFastOptimizationEnabled;
            }
            if ((i11 & 4) != 0) {
                i10 = config.scrollFastVelocity;
            }
            if ((i11 & 8) != 0) {
                z12 = config.disableAnimationsOnScroll;
            }
            return config.copy(z10, z11, i10, z12);
        }

        public final boolean component1() {
            return this.animateEmoji;
        }

        public final boolean component2() {
            return this.scrollFastOptimizationEnabled;
        }

        public final int component3() {
            return this.scrollFastVelocity;
        }

        public final boolean component4() {
            return this.disableAnimationsOnScroll;
        }

        @NotNull
        public final Config copy(boolean z10, boolean z11, int i10, boolean z12) {
            return new Config(z10, z11, i10, z12);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof Config) {
                Config config = (Config) obj;
                return this.animateEmoji == config.animateEmoji && this.scrollFastOptimizationEnabled == config.scrollFastOptimizationEnabled && this.scrollFastVelocity == config.scrollFastVelocity && this.disableAnimationsOnScroll == config.disableAnimationsOnScroll;
            }
            return false;
        }

        public final boolean getAnimateEmoji() {
            return this.animateEmoji;
        }

        public final boolean getDisableAnimationsOnScroll() {
            return this.disableAnimationsOnScroll;
        }

        public final boolean getScrollFastOptimizationEnabled() {
            return this.scrollFastOptimizationEnabled;
        }

        public final int getScrollFastVelocity() {
            return this.scrollFastVelocity;
        }

        public int hashCode() {
            return (((((Boolean.hashCode(this.animateEmoji) * 31) + Boolean.hashCode(this.scrollFastOptimizationEnabled)) * 31) + Integer.hashCode(this.scrollFastVelocity)) * 31) + Boolean.hashCode(this.disableAnimationsOnScroll);
        }

        @NotNull
        public String toString() {
            boolean z10 = this.animateEmoji;
            boolean z11 = this.scrollFastOptimizationEnabled;
            int i10 = this.scrollFastVelocity;
            boolean z12 = this.disableAnimationsOnScroll;
            return "Config(animateEmoji=" + z10 + ", scrollFastOptimizationEnabled=" + z11 + ", scrollFastVelocity=" + i10 + ", disableAnimationsOnScroll=" + z12 + ")";
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public EmojiPickerView(@NotNull Context context, int i10, int i11, @NotNull EmojiPickerItemData.CoreData coreData, @NotNull final Function3 onPressEmoji, @NotNull final Function2<? super EmojiPickerView, ? super EmojiPickerScroller.ScrollEvent, Unit> onScroll, @NotNull final Function2<? super EmojiPickerView, ? super EmojiPickerScroller.ScrollEvent, Unit> onScrollBeginDrag, @NotNull final Function2<? super EmojiPickerView, ? super EmojiPickerScroller.ScrollEvent, Unit> onScrollEndDrag, @NotNull final Function3 onLongPressEmoji, @NotNull final Function2<? super View, ? super Integer, Unit> onStickyHeaderRender, @NotNull final Function2<? super View, ? super Boolean, Unit> onShowNitroUpsell, boolean z10, @NotNull final Config config) {
        super(context);
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(coreData, "coreData");
        Intrinsics.checkNotNullParameter(onPressEmoji, "onPressEmoji");
        Intrinsics.checkNotNullParameter(onScroll, "onScroll");
        Intrinsics.checkNotNullParameter(onScrollBeginDrag, "onScrollBeginDrag");
        Intrinsics.checkNotNullParameter(onScrollEndDrag, "onScrollEndDrag");
        Intrinsics.checkNotNullParameter(onLongPressEmoji, "onLongPressEmoji");
        Intrinsics.checkNotNullParameter(onStickyHeaderRender, "onStickyHeaderRender");
        Intrinsics.checkNotNullParameter(onShowNitroUpsell, "onShowNitroUpsell");
        Intrinsics.checkNotNullParameter(config, "config");
        this.visibilityTracker$delegate = or.l.a(new Function0() { // from class: com.discord.emoji_picker.o
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                EmojiPickerVisibilityTracker visibilityTracker_delegate$lambda$1;
                visibilityTracker_delegate$lambda$1 = EmojiPickerView.visibilityTracker_delegate$lambda$1(Function2.this, this);
                return visibilityTracker_delegate$lambda$1;
            }
        });
        this.scroller$delegate = or.l.a(new Function0() { // from class: com.discord.emoji_picker.p
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                EmojiPickerScroller scroller_delegate$lambda$5;
                scroller_delegate$lambda$5 = EmojiPickerView.scroller_delegate$lambda$5(EmojiPickerView.this, config, onStickyHeaderRender, onScroll, onScrollBeginDrag, onScrollEndDrag);
                return scroller_delegate$lambda$5;
            }
        });
        this.premiumUpsellGradientDecoration = new EmojiPickerPremiumUpsellGradientBackground(context, z10);
        setHasFixedSize(true);
        RecyclerViewExtensionsKt.setReactNativeClipToPadding(this);
        setItemAnimator(null);
        setLayoutManager(new EmojiPickerLayoutManager(context, coreData.getRowSize(), new Function1() { // from class: com.discord.emoji_picker.q
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                int _init_$lambda$6;
                _init_$lambda$6 = EmojiPickerView._init_$lambda$6(EmojiPickerView.this, ((Integer) obj).intValue());
                return Integer.valueOf(_init_$lambda$6);
            }
        }));
        setAdapter(new EmojiPickerViewAdapter(coreData, SizeUtilsKt.getDpToPx(i10), SizeUtilsKt.getDpToPx(i11), new Function2() { // from class: com.discord.emoji_picker.s
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit _init_$lambda$7;
                _init_$lambda$7 = EmojiPickerView._init_$lambda$7(EmojiPickerView.this, (Integer) obj, (Integer) obj2);
                return _init_$lambda$7;
            }
        }, new Function2() { // from class: com.discord.emoji_picker.t
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit _init_$lambda$8;
                _init_$lambda$8 = EmojiPickerView._init_$lambda$8(Function3.this, this, (Long) obj, (String) obj2);
                return _init_$lambda$8;
            }
        }, new Function2() { // from class: com.discord.emoji_picker.u
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit _init_$lambda$9;
                _init_$lambda$9 = EmojiPickerView._init_$lambda$9(Function3.this, this, (Long) obj, (String) obj2);
                return _init_$lambda$9;
            }
        }, z10, config));
        getScroller().bind();
        configurePremiumUpsellGradientDecorator(coreData.getHasPremiumInlineRoadblock());
        configureRecycledViewPool();
        getVisibilityTracker().setTrackingEnabled(coreData.getHasPremiumInlineRoadblock());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int _init_$lambda$6(EmojiPickerView emojiPickerView, int i10) {
        return emojiPickerView.getSpanSize(emojiPickerView.getTypedAdapter().getItem(i10));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit _init_$lambda$7(EmojiPickerView emojiPickerView, Integer num, Integer num2) {
        emojiPickerView.onItemsChanged(num, num2);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit _init_$lambda$8(Function3 function3, EmojiPickerView emojiPickerView, Long l10, String emojiName) {
        Intrinsics.checkNotNullParameter(emojiName, "emojiName");
        function3.invoke(emojiPickerView, l10, emojiName);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit _init_$lambda$9(Function3 function3, EmojiPickerView emojiPickerView, Long l10, String emojiName) {
        Intrinsics.checkNotNullParameter(emojiName, "emojiName");
        function3.invoke(emojiPickerView, l10, emojiName);
        return Unit.f31988a;
    }

    private final void configureMountedChild(View view) {
        RecyclerView.ViewHolder childViewHolder = getChildViewHolder(view);
        if (childViewHolder instanceof EmojiPickerViewHolder.Emoji) {
            ((EmojiPickerViewHolder.Emoji) childViewHolder).updateImage(getTypedAdapter().getScrolling(), getTypedAdapter().getScrollingFast());
        }
    }

    private final void configureMountedChildren() {
        for (View view : n0.a(this)) {
            configureMountedChild(view);
        }
    }

    private final void configurePremiumUpsellGradientDecorator(boolean z10) {
        this.premiumUpsellGradientDecoration.setEnabled(z10, this);
    }

    private final void configureRecycledViewPool() {
        int spanCount = getTypedLayoutManager().getSpanCount() * 20;
        int spanCount2 = getTypedLayoutManager().getSpanCount();
        setItemViewCacheSize(spanCount / 4);
        getRecycledViewPool().setMaxRecycledViews(EmojiPickerItem.ItemType.EMOJI.ordinal(), spanCount);
        getRecycledViewPool().setMaxRecycledViews(EmojiPickerItem.ItemType.CATEGORY.ordinal(), spanCount2);
        getRecycledViewPool().setMaxRecycledViews(EmojiPickerItem.ItemType.FOOTER_UPSELL.ordinal(), 1);
    }

    private final EmojiPickerScroller getScroller() {
        return (EmojiPickerScroller) this.scroller$delegate.getValue();
    }

    private final int getSpanSize(EmojiPickerItem emojiPickerItem) {
        if (!(emojiPickerItem instanceof EmojiPickerItem.EmojiPlaceholder) && !(emojiPickerItem instanceof EmojiPickerItem.Emoji)) {
            if (!(emojiPickerItem instanceof EmojiPickerItem.Category) && !(emojiPickerItem instanceof EmojiPickerItem.Spacer) && !(emojiPickerItem instanceof EmojiPickerItem.FooterUpsell) && !(emojiPickerItem instanceof EmojiPickerItem.PremiumInlineRoadblockHeader) && !(emojiPickerItem instanceof EmojiPickerItem.PremiumInlineRoadblockFooter)) {
                throw new or.p();
            }
            return getTypedLayoutManager().getSpanCount();
        }
        return 1;
    }

    private final EmojiPickerViewAdapter getTypedAdapter() {
        RecyclerView.Adapter adapter = getAdapter();
        Intrinsics.checkNotNull(adapter, "null cannot be cast to non-null type com.discord.emoji_picker.EmojiPickerViewAdapter");
        return (EmojiPickerViewAdapter) adapter;
    }

    private final EmojiPickerLayoutManager getTypedLayoutManager() {
        RecyclerView.LayoutManager layoutManager = getLayoutManager();
        Intrinsics.checkNotNull(layoutManager, "null cannot be cast to non-null type com.discord.emoji_picker.EmojiPickerLayoutManager");
        return (EmojiPickerLayoutManager) layoutManager;
    }

    private final EmojiPickerVisibilityTracker getVisibilityTracker() {
        return (EmojiPickerVisibilityTracker) this.visibilityTracker$delegate.getValue();
    }

    @SuppressLint({"NotifyDataSetChanged"})
    private final void onItemsChanged(Integer num, Integer num2) {
        String str;
        String num3;
        boolean isComputingLayout = isComputingLayout();
        if (num != null) {
            if (num2 != null) {
                getTypedAdapter().notifyItemRangeChanged(num.intValue(), num2.intValue());
                str = "rangeChanged";
            } else {
                getTypedAdapter().notifyItemChanged(num.intValue());
                str = "itemChanged";
            }
        } else {
            getTypedAdapter().notifyDataSetChanged();
            str = "setChanged";
        }
        String str2 = str;
        boolean isComputingLayout2 = isComputingLayout();
        try {
            ViewMeasureExtensionsKt.measureAndLayout(this);
        } catch (Exception e10) {
            CrashReporting crashReporting = CrashReporting.INSTANCE;
            Pair a10 = or.v.a("isInViewTransition", String.valueOf(this.isInViewTransition));
            Pair a11 = or.v.a("isAttached", String.valueOf(isAttachedToWindow()));
            Pair a12 = or.v.a("wasComputingLayoutBeforeAdapter", String.valueOf(isComputingLayout));
            Pair a13 = or.v.a("isComputingLayoutAfterAdapter", String.valueOf(isComputingLayout2));
            Pair a14 = or.v.a("isComputingLayoutNow", String.valueOf(isComputingLayout()));
            Pair a15 = or.v.a("adapterTypeChange", str2);
            String str3 = "null";
            Pair a16 = or.v.a(ViewProps.POSITION, (num == null || (r2 = num.toString()) == null) ? "null" : "null");
            if (num2 != null && (num3 = num2.toString()) != null) {
                str3 = num3;
            }
            CrashReporting.addBreadcrumb$default(crashReporting, "About to crash from EmojiPickerView.", o0.m(a10, a11, a12, a13, a14, a15, a16, or.v.a("count", str3)), null, null, false, 28, null);
            throw e10;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final EmojiPickerScroller scroller_delegate$lambda$5(final EmojiPickerView emojiPickerView, Config config, Function2 function2, final Function2 function22, final Function2 function23, final Function2 function24) {
        return new EmojiPickerScroller(emojiPickerView, emojiPickerView.getTypedAdapter(), emojiPickerView.getTypedLayoutManager(), config.getScrollFastVelocity(), new Function1() { // from class: com.discord.emoji_picker.v
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit scroller_delegate$lambda$5$lambda$2;
                scroller_delegate$lambda$5$lambda$2 = EmojiPickerView.scroller_delegate$lambda$5$lambda$2(Function2.this, emojiPickerView, (EmojiPickerScroller.ScrollEvent) obj);
                return scroller_delegate$lambda$5$lambda$2;
            }
        }, new Function0() { // from class: com.discord.emoji_picker.w
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit scroller_delegate$lambda$5$lambda$3;
                scroller_delegate$lambda$5$lambda$3 = EmojiPickerView.scroller_delegate$lambda$5$lambda$3(EmojiPickerView.this);
                return scroller_delegate$lambda$5$lambda$3;
            }
        }, new Function2() { // from class: com.discord.emoji_picker.x
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit scroller_delegate$lambda$5$lambda$4;
                scroller_delegate$lambda$5$lambda$4 = EmojiPickerView.scroller_delegate$lambda$5$lambda$4(Function2.this, emojiPickerView, function24, (EmojiPickerScroller.ScrollEvent) obj, ((Boolean) obj2).booleanValue());
                return scroller_delegate$lambda$5$lambda$4;
            }
        }, function2);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit scroller_delegate$lambda$5$lambda$2(Function2 function2, EmojiPickerView emojiPickerView, EmojiPickerScroller.ScrollEvent scrollEvent) {
        Intrinsics.checkNotNullParameter(scrollEvent, "scrollEvent");
        function2.invoke(emojiPickerView, scrollEvent);
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit scroller_delegate$lambda$5$lambda$3(EmojiPickerView emojiPickerView) {
        emojiPickerView.configureMountedChildren();
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit scroller_delegate$lambda$5$lambda$4(Function2 function2, EmojiPickerView emojiPickerView, Function2 function22, EmojiPickerScroller.ScrollEvent scrollEvent, boolean z10) {
        Intrinsics.checkNotNullParameter(scrollEvent, "scrollEvent");
        if (z10) {
            function2.invoke(emojiPickerView, scrollEvent);
        } else {
            function22.invoke(emojiPickerView, scrollEvent);
        }
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final EmojiPickerVisibilityTracker visibilityTracker_delegate$lambda$1(final Function2 function2, final EmojiPickerView emojiPickerView) {
        return new EmojiPickerVisibilityTracker(new Function1() { // from class: com.discord.emoji_picker.n
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit visibilityTracker_delegate$lambda$1$lambda$0;
                visibilityTracker_delegate$lambda$1$lambda$0 = EmojiPickerView.visibilityTracker_delegate$lambda$1$lambda$0(Function2.this, emojiPickerView, ((Boolean) obj).booleanValue());
                return visibilityTracker_delegate$lambda$1$lambda$0;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit visibilityTracker_delegate$lambda$1$lambda$0(Function2 function2, EmojiPickerView emojiPickerView, boolean z10) {
        function2.invoke(emojiPickerView, Boolean.valueOf(z10));
        return Unit.f31988a;
    }

    @Override // android.view.ViewGroup
    public void endViewTransition(View view) {
        super.endViewTransition(view);
        suppressLayout(false);
        getTypedLayoutManager().disableRecycling(false);
        this.isInViewTransition = false;
    }

    @Override // androidx.recyclerview.widget.RecyclerView
    public boolean fling(int i10, int i11) {
        RecyclerViewScrollLimiter recyclerViewScrollLimiter = RecyclerViewScrollLimiter.INSTANCE;
        return super.fling(recyclerViewScrollLimiter.getClampedVelocity(i10), recyclerViewScrollLimiter.getClampedVelocity(i11));
    }

    @Override // androidx.recyclerview.widget.RecyclerView
    public void onChildAttachedToWindow(@NotNull View child) {
        Intrinsics.checkNotNullParameter(child, "child");
        super.onChildAttachedToWindow(child);
        getVisibilityTracker().trackViewVisibilityChanged(this, child, true);
        configureMountedChild(child);
    }

    @Override // androidx.recyclerview.widget.RecyclerView
    public void onChildDetachedFromWindow(@NotNull View child) {
        Intrinsics.checkNotNullParameter(child, "child");
        super.onChildDetachedFromWindow(child);
        getVisibilityTracker().trackViewVisibilityChanged(this, child, false);
    }

    @Override // com.discord.emoji_picker.EmojiPickerCache.Listener
    @NotNull
    public Context onContext() {
        Context context = getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        return context;
    }

    public final void onDestroy() {
        getScroller().unbind();
    }

    @Override // com.discord.emoji_picker.EmojiPickerCache.Listener
    public void onEmojisUpdated(@NotNull List<? extends EmojiPickerItem> emojis, @NotNull List<? extends EmojiPickerItem> emojisUnicode) {
        Intrinsics.checkNotNullParameter(emojis, "emojis");
        Intrinsics.checkNotNullParameter(emojisUnicode, "emojisUnicode");
        getTypedAdapter().setEmojis(emojis, emojisUnicode);
    }

    public final void scrollToItemAtIndex(int i10, boolean z10, @NotNull EmojiPickerItem.ItemType itemType) {
        Intrinsics.checkNotNullParameter(itemType, "itemType");
        getScroller().scrollToItemAtIndex(i10, z10, itemType.ordinal());
    }

    public final void scrollingEnabled(boolean z10) {
        getTypedLayoutManager().setScrollingEnabled(z10);
    }

    public final void setConfig(@NotNull Config config) {
        Intrinsics.checkNotNullParameter(config, "config");
        getTypedAdapter().setConfig(config);
        getScroller().setScrollFastVelocity(config.getScrollFastVelocity());
    }

    public final void setContentPaddingBottom(float f10) {
        getTypedAdapter().setSpacerBottomHeight(SizeUtilsKt.getDpToPx(f10));
    }

    public final void setContentPaddingTop(float f10) {
        getTypedAdapter().setSpacerTopHeight(SizeUtilsKt.getDpToPx(f10));
    }

    public final void setCoreData(@NotNull EmojiPickerItemData.CoreData coreData) {
        Intrinsics.checkNotNullParameter(coreData, "coreData");
        getTypedAdapter().setCoreData(coreData);
        getTypedLayoutManager().setSpanCount(coreData.getRowSize());
        getVisibilityTracker().setTrackingEnabled(coreData.getHasPremiumInlineRoadblock());
        configurePremiumUpsellGradientDecorator(coreData.getHasPremiumInlineRoadblock());
        configureRecycledViewPool();
    }

    public final void setEmojiMargin(int i10) {
        getTypedAdapter().setEmojiMargin(SizeUtilsKt.getDpToPx(i10));
    }

    public final void setEmojiSize(int i10) {
        getTypedAdapter().setEmojiSize(SizeUtilsKt.getDpToPx(i10));
    }

    public final void setUseTier0UpsellContent(boolean z10) {
        getTypedAdapter().setUseTier0UpsellContent(z10);
        EmojiPickerPremiumUpsellGradientBackground emojiPickerPremiumUpsellGradientBackground = this.premiumUpsellGradientDecoration;
        Context context = getContext();
        Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
        emojiPickerPremiumUpsellGradientBackground.setUseTier0UpsellContent(context, z10);
    }

    @Override // android.view.ViewGroup
    public void startViewTransition(View view) {
        this.isInViewTransition = true;
        getTypedLayoutManager().disableRecycling(true);
        suppressLayout(true);
        super.startViewTransition(view);
    }
}
