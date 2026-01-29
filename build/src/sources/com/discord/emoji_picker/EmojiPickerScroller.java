package com.discord.emoji_picker;

import android.view.View;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import com.discord.emoji_picker.EmojiPickerItem;
import com.discord.misc.utilities.measure.ViewMeasureExtensionsKt;
import com.discord.recycler_view.scroll.DebouncedScrollListener;
import com.discord.recycler_view.scroll.DebouncedVelocityTrackingScrollListener;
import com.discord.recycler_view.scroller.Scroller;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000m\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0007\n\u0002\b\u0018\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0006*\u00016\b\u0000\u0018\u0000 @2\u00020\u0001:\u0002A@B}\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0004\u0012\u0006\u0010\u0007\u001a\u00020\u0006\u0012\u0006\u0010\t\u001a\u00020\b\u0012\u0012\u0010\r\u001a\u000e\u0012\u0004\u0012\u00020\u000b\u0012\u0004\u0012\u00020\f0\n\u0012\f\u0010\u000f\u001a\b\u0012\u0004\u0012\u00020\f0\u000e\u0012\u0018\u0010\u0012\u001a\u0014\u0012\u0004\u0012\u00020\u000b\u0012\u0004\u0012\u00020\u0011\u0012\u0004\u0012\u00020\f0\u0010\u0012\u0018\u0010\u0014\u001a\u0014\u0012\u0004\u0012\u00020\u0013\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\f0\u0010¢\u0006\u0004\b\u0015\u0010\u0016J\u0017\u0010\u0019\u001a\u00020\f2\u0006\u0010\u0018\u001a\u00020\u0017H\u0002¢\u0006\u0004\b\u0019\u0010\u001aJ#\u0010\u001c\u001a\u00020\f2\u0012\u0010\u001b\u001a\u000e\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\f0\nH\u0002¢\u0006\u0004\b\u001c\u0010\u001dJ\u0013\u0010\u001e\u001a\u00020\u000b*\u00020\u0002H\u0002¢\u0006\u0004\b\u001e\u0010\u001fJ\u0017\u0010 \u001a\u00020\f2\u0006\u0010\t\u001a\u00020\bH\u0007¢\u0006\u0004\b \u0010!J\u000f\u0010\"\u001a\u00020\fH\u0007¢\u0006\u0004\b\"\u0010#J\u000f\u0010$\u001a\u00020\fH\u0007¢\u0006\u0004\b$\u0010#J'\u0010(\u001a\u00020\f2\u0006\u0010%\u001a\u00020\b2\u0006\u0010&\u001a\u00020\u00112\u0006\u0010'\u001a\u00020\bH\u0007¢\u0006\u0004\b(\u0010)R\u0014\u0010\u0003\u001a\u00020\u00028\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0003\u0010*R\u0014\u0010\u0005\u001a\u00020\u00048\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0005\u0010+R\u0014\u0010\u0007\u001a\u00020\u00068\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0007\u0010,R\u0016\u0010\t\u001a\u00020\b8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\t\u0010-R\u0014\u0010.\u001a\u00020\u000b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b.\u0010/R\u0014\u00101\u001a\u0002008\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b1\u00102R\u0014\u00104\u001a\u0002038\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b4\u00105R\u0014\u00107\u001a\u0002068\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b7\u00108R\u0016\u00109\u001a\u00020\u00118\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b9\u0010:R\u0016\u0010;\u001a\u00020\u00118\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b;\u0010:R\u0014\u0010=\u001a\u00020<8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b=\u0010>R\u0016\u0010?\u001a\u00020\b8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b?\u0010-¨\u0006B"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerScroller;", "", "Landroidx/recyclerview/widget/RecyclerView;", "recyclerView", "Lcom/discord/emoji_picker/EmojiPickerViewAdapter;", "emojiPickerViewAdapter", "Landroidx/recyclerview/widget/GridLayoutManager;", "emojiPickerLayoutManager", "", "scrollFastVelocity", "Lkotlin/Function1;", "Lcom/discord/emoji_picker/EmojiPickerScroller$ScrollEvent;", "", "onScrolled", "Lkotlin/Function0;", "onScrollStateChanged", "Lkotlin/Function2;", "", "onDragStateChanged", "Landroid/view/View;", "onStickyHeaderRender", "<init>", "(Landroidx/recyclerview/widget/RecyclerView;Lcom/discord/emoji_picker/EmojiPickerViewAdapter;Landroidx/recyclerview/widget/GridLayoutManager;ILkotlin/jvm/functions/Function1;Lkotlin/jvm/functions/Function0;Lkotlin/jvm/functions/Function2;Lkotlin/jvm/functions/Function2;)V", "", "velocity", "onScrollVelocityChanged", "(F)V", "onUpdate", "findFirstHeaderIndex", "(Lkotlin/jvm/functions/Function1;)V", "computeScrollEvent", "(Landroidx/recyclerview/widget/RecyclerView;)Lcom/discord/emoji_picker/EmojiPickerScroller$ScrollEvent;", "setScrollFastVelocity", "(I)V", "bind", "()V", "unbind", "index", "animated", "itemType", "scrollToItemAtIndex", "(IZI)V", "Landroidx/recyclerview/widget/RecyclerView;", "Lcom/discord/emoji_picker/EmojiPickerViewAdapter;", "Landroidx/recyclerview/widget/GridLayoutManager;", "I", "scrollEvent", "Lcom/discord/emoji_picker/EmojiPickerScroller$ScrollEvent;", "Lcom/discord/recycler_view/scroller/Scroller;", "scroller", "Lcom/discord/recycler_view/scroller/Scroller;", "Lcom/discord/recycler_view/scroll/DebouncedVelocityTrackingScrollListener;", "scrollListenerVelocityTracker", "Lcom/discord/recycler_view/scroll/DebouncedVelocityTrackingScrollListener;", "com/discord/emoji_picker/EmojiPickerScroller$scrollListenerDebounced$1", "scrollListenerDebounced", "Lcom/discord/emoji_picker/EmojiPickerScroller$scrollListenerDebounced$1;", "scrollVelocityTrackingPaused", "Z", "scrollJumpingToPosition", "Landroid/view/View$OnLayoutChangeListener;", "scrollViewLayoutChanged", "Landroid/view/View$OnLayoutChangeListener;", "firstHeaderPosition", "Companion", "ScrollEvent", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nEmojiPickerScroller.kt\nKotlin\n*S Kotlin\n*F\n+ 1 EmojiPickerScroller.kt\ncom/discord/emoji_picker/EmojiPickerScroller\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,204:1\n1#2:205\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class EmojiPickerScroller {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static final long SCROLL_DEBOUNCE_TIME = 300;
    private static final long SCROLL_VELOCITY_DEBOUNCE_TIME = 600;
    @NotNull
    private final GridLayoutManager emojiPickerLayoutManager;
    @NotNull
    private final EmojiPickerViewAdapter emojiPickerViewAdapter;
    private int firstHeaderPosition;
    @NotNull
    private final RecyclerView recyclerView;
    @NotNull
    private final ScrollEvent scrollEvent;
    private int scrollFastVelocity;
    private boolean scrollJumpingToPosition;
    @NotNull
    private final EmojiPickerScroller$scrollListenerDebounced$1 scrollListenerDebounced;
    @NotNull
    private final DebouncedVelocityTrackingScrollListener scrollListenerVelocityTracker;
    private boolean scrollVelocityTrackingPaused;
    @NotNull
    private final View.OnLayoutChangeListener scrollViewLayoutChanged;
    @NotNull
    private final Scroller scroller;

    @Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\t\n\u0002\b\u0002\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0005X\u0082T¢\u0006\u0002\n\u0000¨\u0006\u0007"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerScroller$Companion;", "", "<init>", "()V", "SCROLL_DEBOUNCE_TIME", "", "SCROLL_VELOCITY_DEBOUNCE_TIME", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    @Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\b\n\u0002\b\u001d\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0000\b\u0086\b\u0018\u00002\u00020\u0001BC\u0012\b\b\u0002\u0010\u0002\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u0004\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u0005\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u0006\u001a\u00020\u0003\u0012\b\b\u0002\u0010\u0007\u001a\u00020\u0003\u0012\b\b\u0002\u0010\b\u001a\u00020\u0003¢\u0006\u0004\b\t\u0010\nJ\t\u0010\u0019\u001a\u00020\u0003HÆ\u0003J\t\u0010\u001a\u001a\u00020\u0003HÆ\u0003J\t\u0010\u001b\u001a\u00020\u0003HÆ\u0003J\t\u0010\u001c\u001a\u00020\u0003HÆ\u0003J\t\u0010\u001d\u001a\u00020\u0003HÆ\u0003J\t\u0010\u001e\u001a\u00020\u0003HÆ\u0003JE\u0010\u001f\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00032\b\b\u0002\u0010\u0006\u001a\u00020\u00032\b\b\u0002\u0010\u0007\u001a\u00020\u00032\b\b\u0002\u0010\b\u001a\u00020\u0003HÆ\u0001J\u0013\u0010 \u001a\u00020!2\b\u0010\"\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010#\u001a\u00020\u0003HÖ\u0001J\t\u0010$\u001a\u00020%HÖ\u0001R\u001a\u0010\u0002\u001a\u00020\u0003X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u000b\u0010\f\"\u0004\b\r\u0010\u000eR\u001a\u0010\u0004\u001a\u00020\u0003X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u000f\u0010\f\"\u0004\b\u0010\u0010\u000eR\u001a\u0010\u0005\u001a\u00020\u0003X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0011\u0010\f\"\u0004\b\u0012\u0010\u000eR\u001a\u0010\u0006\u001a\u00020\u0003X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0013\u0010\f\"\u0004\b\u0014\u0010\u000eR\u001a\u0010\u0007\u001a\u00020\u0003X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0015\u0010\f\"\u0004\b\u0016\u0010\u000eR\u001a\u0010\b\u001a\u00020\u0003X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0017\u0010\f\"\u0004\b\u0018\u0010\u000e¨\u0006&"}, d2 = {"Lcom/discord/emoji_picker/EmojiPickerScroller$ScrollEvent;", "", "x", "", "y", "width", "height", "contentWidth", "contentHeight", "<init>", "(IIIIII)V", "getX", "()I", "setX", "(I)V", "getY", "setY", "getWidth", "setWidth", "getHeight", "setHeight", "getContentWidth", "setContentWidth", "getContentHeight", "setContentHeight", "component1", "component2", "component3", "component4", "component5", "component6", "copy", "equals", "", "other", "hashCode", "toString", "", "emoji_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class ScrollEvent {
        private int contentHeight;
        private int contentWidth;
        private int height;
        private int width;

        /* renamed from: x  reason: collision with root package name */
        private int f10328x;

        /* renamed from: y  reason: collision with root package name */
        private int f10329y;

        public ScrollEvent() {
            this(0, 0, 0, 0, 0, 0, 63, null);
        }

        public static /* synthetic */ ScrollEvent copy$default(ScrollEvent scrollEvent, int i10, int i11, int i12, int i13, int i14, int i15, int i16, Object obj) {
            if ((i16 & 1) != 0) {
                i10 = scrollEvent.f10328x;
            }
            if ((i16 & 2) != 0) {
                i11 = scrollEvent.f10329y;
            }
            if ((i16 & 4) != 0) {
                i12 = scrollEvent.width;
            }
            if ((i16 & 8) != 0) {
                i13 = scrollEvent.height;
            }
            if ((i16 & 16) != 0) {
                i14 = scrollEvent.contentWidth;
            }
            if ((i16 & 32) != 0) {
                i15 = scrollEvent.contentHeight;
            }
            int i17 = i14;
            int i18 = i15;
            return scrollEvent.copy(i10, i11, i12, i13, i17, i18);
        }

        public final int component1() {
            return this.f10328x;
        }

        public final int component2() {
            return this.f10329y;
        }

        public final int component3() {
            return this.width;
        }

        public final int component4() {
            return this.height;
        }

        public final int component5() {
            return this.contentWidth;
        }

        public final int component6() {
            return this.contentHeight;
        }

        @NotNull
        public final ScrollEvent copy(int i10, int i11, int i12, int i13, int i14, int i15) {
            return new ScrollEvent(i10, i11, i12, i13, i14, i15);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof ScrollEvent) {
                ScrollEvent scrollEvent = (ScrollEvent) obj;
                return this.f10328x == scrollEvent.f10328x && this.f10329y == scrollEvent.f10329y && this.width == scrollEvent.width && this.height == scrollEvent.height && this.contentWidth == scrollEvent.contentWidth && this.contentHeight == scrollEvent.contentHeight;
            }
            return false;
        }

        public final int getContentHeight() {
            return this.contentHeight;
        }

        public final int getContentWidth() {
            return this.contentWidth;
        }

        public final int getHeight() {
            return this.height;
        }

        public final int getWidth() {
            return this.width;
        }

        public final int getX() {
            return this.f10328x;
        }

        public final int getY() {
            return this.f10329y;
        }

        public int hashCode() {
            return (((((((((Integer.hashCode(this.f10328x) * 31) + Integer.hashCode(this.f10329y)) * 31) + Integer.hashCode(this.width)) * 31) + Integer.hashCode(this.height)) * 31) + Integer.hashCode(this.contentWidth)) * 31) + Integer.hashCode(this.contentHeight);
        }

        public final void setContentHeight(int i10) {
            this.contentHeight = i10;
        }

        public final void setContentWidth(int i10) {
            this.contentWidth = i10;
        }

        public final void setHeight(int i10) {
            this.height = i10;
        }

        public final void setWidth(int i10) {
            this.width = i10;
        }

        public final void setX(int i10) {
            this.f10328x = i10;
        }

        public final void setY(int i10) {
            this.f10329y = i10;
        }

        @NotNull
        public String toString() {
            int i10 = this.f10328x;
            int i11 = this.f10329y;
            int i12 = this.width;
            int i13 = this.height;
            int i14 = this.contentWidth;
            int i15 = this.contentHeight;
            return "ScrollEvent(x=" + i10 + ", y=" + i11 + ", width=" + i12 + ", height=" + i13 + ", contentWidth=" + i14 + ", contentHeight=" + i15 + ")";
        }

        public ScrollEvent(int i10, int i11, int i12, int i13, int i14, int i15) {
            this.f10328x = i10;
            this.f10329y = i11;
            this.width = i12;
            this.height = i13;
            this.contentWidth = i14;
            this.contentHeight = i15;
        }

        public /* synthetic */ ScrollEvent(int i10, int i11, int i12, int i13, int i14, int i15, int i16, DefaultConstructorMarker defaultConstructorMarker) {
            this((i16 & 1) != 0 ? 0 : i10, (i16 & 2) != 0 ? 0 : i11, (i16 & 4) != 0 ? 0 : i12, (i16 & 8) != 0 ? 0 : i13, (i16 & 16) != 0 ? 0 : i14, (i16 & 32) != 0 ? 0 : i15);
        }
    }

    /* JADX WARN: Type inference failed for: r3v2, types: [com.discord.emoji_picker.EmojiPickerScroller$scrollListenerDebounced$1] */
    public EmojiPickerScroller(@NotNull RecyclerView recyclerView, @NotNull EmojiPickerViewAdapter emojiPickerViewAdapter, @NotNull GridLayoutManager emojiPickerLayoutManager, int i10, @NotNull final Function1<? super ScrollEvent, Unit> onScrolled, @NotNull final Function0<Unit> onScrollStateChanged, @NotNull final Function2<? super ScrollEvent, ? super Boolean, Unit> onDragStateChanged, @NotNull final Function2<? super View, ? super Integer, Unit> onStickyHeaderRender) {
        Intrinsics.checkNotNullParameter(recyclerView, "recyclerView");
        Intrinsics.checkNotNullParameter(emojiPickerViewAdapter, "emojiPickerViewAdapter");
        Intrinsics.checkNotNullParameter(emojiPickerLayoutManager, "emojiPickerLayoutManager");
        Intrinsics.checkNotNullParameter(onScrolled, "onScrolled");
        Intrinsics.checkNotNullParameter(onScrollStateChanged, "onScrollStateChanged");
        Intrinsics.checkNotNullParameter(onDragStateChanged, "onDragStateChanged");
        Intrinsics.checkNotNullParameter(onStickyHeaderRender, "onStickyHeaderRender");
        this.recyclerView = recyclerView;
        this.emojiPickerViewAdapter = emojiPickerViewAdapter;
        this.emojiPickerLayoutManager = emojiPickerLayoutManager;
        this.scrollFastVelocity = i10;
        this.scrollEvent = new ScrollEvent(0, 0, 0, 0, 0, 0, 63, null);
        this.scroller = new Scroller(recyclerView);
        this.scrollListenerVelocityTracker = new DebouncedVelocityTrackingScrollListener(recyclerView, false, 0, new Function2() { // from class: com.discord.emoji_picker.h
            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(Object obj, Object obj2) {
                Unit scrollListenerVelocityTracker$lambda$0;
                scrollListenerVelocityTracker$lambda$0 = EmojiPickerScroller.scrollListenerVelocityTracker$lambda$0(EmojiPickerScroller.this, onScrollStateChanged, (RecyclerView) obj, ((Float) obj2).floatValue());
                return scrollListenerVelocityTracker$lambda$0;
            }
        }, SCROLL_VELOCITY_DEBOUNCE_TIME, 6, null);
        final Function3 function3 = new Function3() { // from class: com.discord.emoji_picker.i
            @Override // kotlin.jvm.functions.Function3
            public final Object invoke(Object obj, Object obj2, Object obj3) {
                Unit scrollListenerDebounced$lambda$2;
                scrollListenerDebounced$lambda$2 = EmojiPickerScroller.scrollListenerDebounced$lambda$2(Function1.this, this, onStickyHeaderRender, (RecyclerView) obj, ((Integer) obj2).intValue(), ((Integer) obj3).intValue());
                return scrollListenerDebounced$lambda$2;
            }
        };
        final Function1 function1 = new Function1() { // from class: com.discord.emoji_picker.j
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit scrollListenerDebounced$lambda$3;
                scrollListenerDebounced$lambda$3 = EmojiPickerScroller.scrollListenerDebounced$lambda$3(Function2.this, this, ((Boolean) obj).booleanValue());
                return scrollListenerDebounced$lambda$3;
            }
        };
        this.scrollListenerDebounced = new DebouncedScrollListener(function3, function1) { // from class: com.discord.emoji_picker.EmojiPickerScroller$scrollListenerDebounced$1
            @Override // com.discord.recycler_view.scroll.DebouncedScrollListener, androidx.recyclerview.widget.RecyclerView.OnScrollListener
            public void onScrolled(RecyclerView recyclerView2, int i11, int i12) {
                Intrinsics.checkNotNullParameter(recyclerView2, "recyclerView");
                if (i11 == 0 && i12 == 0) {
                    return;
                }
                super.onScrolled(recyclerView2, i11, i12);
            }
        };
        this.scrollViewLayoutChanged = new View.OnLayoutChangeListener() { // from class: com.discord.emoji_picker.k
            @Override // android.view.View.OnLayoutChangeListener
            public final void onLayoutChange(View view, int i11, int i12, int i13, int i14, int i15, int i16, int i17, int i18) {
                EmojiPickerScroller.scrollViewLayoutChanged$lambda$5(EmojiPickerScroller.this, onStickyHeaderRender, view, i11, i12, i13, i14, i15, i16, i17, i18);
            }
        };
        this.firstHeaderPosition = -1;
    }

    private final ScrollEvent computeScrollEvent(RecyclerView recyclerView) {
        ScrollEvent scrollEvent = this.scrollEvent;
        scrollEvent.setX(0);
        scrollEvent.setY(recyclerView.computeVerticalScrollOffset());
        scrollEvent.setWidth(recyclerView.getWidth());
        scrollEvent.setHeight(recyclerView.getHeight());
        scrollEvent.setContentWidth(recyclerView.getWidth());
        scrollEvent.setContentHeight(recyclerView.computeVerticalScrollRange());
        return scrollEvent;
    }

    private final void findFirstHeaderIndex(Function1<? super Integer, Unit> function1) {
        int findFirstItemPositionAboveOrBelowPosition = this.emojiPickerViewAdapter.findFirstItemPositionAboveOrBelowPosition(this.emojiPickerLayoutManager.findFirstVisibleItemPosition(), EmojiPickerItem.ItemType.CATEGORY.ordinal());
        if (this.firstHeaderPosition != findFirstItemPositionAboveOrBelowPosition && findFirstItemPositionAboveOrBelowPosition != -1) {
            this.firstHeaderPosition = findFirstItemPositionAboveOrBelowPosition;
            Integer itemIndex = this.emojiPickerViewAdapter.getItemIndex(findFirstItemPositionAboveOrBelowPosition);
            if (itemIndex != null) {
                function1.invoke(itemIndex);
            }
        }
    }

    private final void onScrollVelocityChanged(float f10) {
        boolean z10;
        boolean z11;
        int i10 = (f10 > 0.0f ? 1 : (f10 == 0.0f ? 0 : -1));
        if (i10 == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        boolean z12 = !z10;
        if (Math.abs(f10) > this.scrollFastVelocity) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (this.emojiPickerViewAdapter.getScrolling() != z12) {
            this.emojiPickerViewAdapter.setScrolling(z12);
        }
        if (this.scrollVelocityTrackingPaused) {
            return;
        }
        if (z11) {
            this.emojiPickerViewAdapter.setScrollingFast(true);
        }
        if (!z11 && !this.scrollJumpingToPosition) {
            this.emojiPickerViewAdapter.setScrollingFast(false);
        }
        if (i10 == 0) {
            this.emojiPickerViewAdapter.setScrollingFast(false);
            this.scrollJumpingToPosition = false;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit scrollListenerDebounced$lambda$2(Function1 function1, final EmojiPickerScroller emojiPickerScroller, final Function2 function2, RecyclerView recyclerView, int i10, int i11) {
        Intrinsics.checkNotNullParameter(recyclerView, "<unused var>");
        function1.invoke(emojiPickerScroller.computeScrollEvent(emojiPickerScroller.recyclerView));
        emojiPickerScroller.findFirstHeaderIndex(new Function1() { // from class: com.discord.emoji_picker.g
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit scrollListenerDebounced$lambda$2$lambda$1;
                scrollListenerDebounced$lambda$2$lambda$1 = EmojiPickerScroller.scrollListenerDebounced$lambda$2$lambda$1(Function2.this, emojiPickerScroller, ((Integer) obj).intValue());
                return scrollListenerDebounced$lambda$2$lambda$1;
            }
        });
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit scrollListenerDebounced$lambda$2$lambda$1(Function2 function2, EmojiPickerScroller emojiPickerScroller, int i10) {
        function2.invoke(emojiPickerScroller.recyclerView, Integer.valueOf(i10));
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit scrollListenerDebounced$lambda$3(Function2 function2, EmojiPickerScroller emojiPickerScroller, boolean z10) {
        function2.invoke(emojiPickerScroller.computeScrollEvent(emojiPickerScroller.recyclerView), Boolean.valueOf(z10));
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit scrollListenerVelocityTracker$lambda$0(EmojiPickerScroller emojiPickerScroller, Function0 function0, RecyclerView recyclerView, float f10) {
        Intrinsics.checkNotNullParameter(recyclerView, "<unused var>");
        emojiPickerScroller.onScrollVelocityChanged(f10);
        function0.invoke();
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit scrollToItemAtIndex$lambda$8(EmojiPickerScroller emojiPickerScroller) {
        emojiPickerScroller.scrollVelocityTrackingPaused = false;
        return Unit.f33282a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void scrollViewLayoutChanged$lambda$5(final EmojiPickerScroller emojiPickerScroller, final Function2 function2, View view, int i10, int i11, int i12, int i13, int i14, int i15, int i16, int i17) {
        emojiPickerScroller.findFirstHeaderIndex(new Function1() { // from class: com.discord.emoji_picker.m
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit scrollViewLayoutChanged$lambda$5$lambda$4;
                scrollViewLayoutChanged$lambda$5$lambda$4 = EmojiPickerScroller.scrollViewLayoutChanged$lambda$5$lambda$4(Function2.this, emojiPickerScroller, ((Integer) obj).intValue());
                return scrollViewLayoutChanged$lambda$5$lambda$4;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit scrollViewLayoutChanged$lambda$5$lambda$4(Function2 function2, EmojiPickerScroller emojiPickerScroller, int i10) {
        function2.invoke(emojiPickerScroller.recyclerView, Integer.valueOf(i10));
        return Unit.f33282a;
    }

    public final void bind() {
        this.recyclerView.addOnLayoutChangeListener(this.scrollViewLayoutChanged);
        this.recyclerView.addOnScrollListener(this.scrollListenerDebounced);
        this.recyclerView.addOnScrollListener(this.scrollListenerVelocityTracker);
    }

    public final void scrollToItemAtIndex(int i10, boolean z10, int i11) {
        int height;
        int findFirstVisibleItemPosition = this.emojiPickerLayoutManager.findFirstVisibleItemPosition();
        int itemPositionAtIndex = this.emojiPickerViewAdapter.getItemPositionAtIndex(i10, i11);
        if (itemPositionAtIndex != -1 && this.firstHeaderPosition != -1 && itemPositionAtIndex != findFirstVisibleItemPosition) {
            int abs = Math.abs(this.emojiPickerViewAdapter.getEstimatedDistance(findFirstVisibleItemPosition, itemPositionAtIndex));
            if (itemPositionAtIndex < findFirstVisibleItemPosition) {
                height = -this.recyclerView.getHeight();
            } else {
                height = this.recyclerView.getHeight();
            }
            if (abs >= Math.abs(height)) {
                this.scrollVelocityTrackingPaused = true;
                this.emojiPickerViewAdapter.setScrollingFast(true);
                this.emojiPickerLayoutManager.scrollToPositionWithOffset(itemPositionAtIndex, height);
                Unit unit = Unit.f33282a;
                ViewMeasureExtensionsKt.measureAndLayout(this.recyclerView);
            }
            this.scrollJumpingToPosition = true;
            Scroller.scrollToPosition$default(this.scroller, itemPositionAtIndex, new Scroller.TargetAlignment.Top(0), z10, new Function0() { // from class: com.discord.emoji_picker.l
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit scrollToItemAtIndex$lambda$8;
                    scrollToItemAtIndex$lambda$8 = EmojiPickerScroller.scrollToItemAtIndex$lambda$8(EmojiPickerScroller.this);
                    return scrollToItemAtIndex$lambda$8;
                }
            }, null, null, 48, null);
        }
    }

    public final void setScrollFastVelocity(int i10) {
        if (this.scrollFastVelocity != i10) {
            this.scrollFastVelocity = i10;
        }
    }

    public final void unbind() {
        this.recyclerView.removeOnLayoutChangeListener(this.scrollViewLayoutChanged);
        RecyclerView recyclerView = this.recyclerView;
        EmojiPickerScroller$scrollListenerDebounced$1 emojiPickerScroller$scrollListenerDebounced$1 = this.scrollListenerDebounced;
        emojiPickerScroller$scrollListenerDebounced$1.cancel();
        recyclerView.removeOnScrollListener(emojiPickerScroller$scrollListenerDebounced$1);
        this.recyclerView.removeOnScrollListener(this.scrollListenerVelocityTracker);
        this.recyclerView.setOnFlingListener(null);
    }
}
