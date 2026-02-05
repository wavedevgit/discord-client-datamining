package com.discord.sticker_picker;

import android.content.Context;
import android.view.View;
import android.widget.LinearLayout;
import androidx.core.view.n0;
import com.discord.misc.utilities.measure.ViewMeasureExtensionsKt;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.react_gesture_handler.nested_touch.NestedScrollOnTouchUtilsKt;
import com.discord.ripple.RippleUtilsKt;
import com.discord.sticker.StickerView;
import com.discord.sticker_picker.StickerPickerRow;
import com.discord.sticker_picker.StickerPickerRowView;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import or.p;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u00002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0006\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\n\b\u0000\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005J\u0017\u0010\t\u001a\u00020\b2\u0006\u0010\u0007\u001a\u00020\u0006H\u0002¢\u0006\u0004\b\t\u0010\nJ\u0017\u0010\u000b\u001a\u00020\b2\u0006\u0010\u0007\u001a\u00020\u0006H\u0002¢\u0006\u0004\b\u000b\u0010\nJ\r\u0010\f\u001a\u00020\b¢\u0006\u0004\b\f\u0010\rJ\u0015\u0010\u000e\u001a\u00020\b2\u0006\u0010\u0007\u001a\u00020\u0006¢\u0006\u0004\b\u000e\u0010\nR\u0016\u0010\u0010\u001a\u00020\u000f8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u0010\u0010\u0011R.\u0010\u0014\u001a\u000e\u0012\u0004\u0012\u00020\u0013\u0012\u0004\u0012\u00020\b0\u00128\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\b\u0014\u0010\u0015\u001a\u0004\b\u0016\u0010\u0017\"\u0004\b\u0018\u0010\u0019R.\u0010\u001a\u001a\u000e\u0012\u0004\u0012\u00020\u0013\u0012\u0004\u0012\u00020\b0\u00128\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\b\u001a\u0010\u0015\u001a\u0004\b\u001b\u0010\u0017\"\u0004\b\u001c\u0010\u0019¨\u0006\u001d"}, d2 = {"Lcom/discord/sticker_picker/StickerPickerRowView;", "Landroid/widget/LinearLayout;", "Landroid/content/Context;", "context", "<init>", "(Landroid/content/Context;)V", "Lcom/discord/sticker_picker/StickerPickerRow;", "rowData", "", "configureRowStickerViews", "(Lcom/discord/sticker_picker/StickerPickerRow;)V", "createRowStickerViews", "clean", "()V", "setRowData", "", "firstRenderPass", "Z", "Lkotlin/Function1;", "", "onPressSticker", "Lkotlin/jvm/functions/Function1;", "getOnPressSticker", "()Lkotlin/jvm/functions/Function1;", "setOnPressSticker", "(Lkotlin/jvm/functions/Function1;)V", "onLongPressSticker", "getOnLongPressSticker", "setOnLongPressSticker", "sticker_picker_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nStickerPickerRowView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 StickerPickerRowView.kt\ncom/discord/sticker_picker/StickerPickerRowView\n+ 2 _Sequences.kt\nkotlin/sequences/SequencesKt___SequencesKt\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 4 View.kt\nandroidx/core/view/ViewKt\n*L\n1#1,138:1\n1321#2,2:139\n1878#3,2:141\n1880#3:147\n1878#3,3:148\n278#4,2:143\n257#4,2:145\n*S KotlinDebug\n*F\n+ 1 StickerPickerRowView.kt\ncom/discord/sticker_picker/StickerPickerRowView\n*L\n28#1:139,2\n47#1:141,2\n47#1:147\n120#1:148,3\n50#1:143,2\n55#1:145,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class StickerPickerRowView extends LinearLayout {
    private boolean firstRenderPass;
    @NotNull
    private Function1<? super String, Unit> onLongPressSticker;
    @NotNull
    private Function1<? super String, Unit> onPressSticker;

    @Metadata(k = 3, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public /* synthetic */ class WhenMappings {
        public static final /* synthetic */ int[] $EnumSwitchMapping$0;

        static {
            int[] iArr = new int[StickerPickerRow.Sticker.Type.values().length];
            try {
                iArr[StickerPickerRow.Sticker.Type.PNG.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[StickerPickerRow.Sticker.Type.APNG.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[StickerPickerRow.Sticker.Type.LOTTIE.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[StickerPickerRow.Sticker.Type.GIF.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            $EnumSwitchMapping$0 = iArr;
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public StickerPickerRowView(@NotNull Context context) {
        super(context);
        Intrinsics.checkNotNullParameter(context, "context");
        this.onPressSticker = new Function1() { // from class: f8.c
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit onPressSticker$lambda$0;
                onPressSticker$lambda$0 = StickerPickerRowView.onPressSticker$lambda$0((String) obj);
                return onPressSticker$lambda$0;
            }
        };
        this.onLongPressSticker = new Function1() { // from class: f8.d
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit onLongPressSticker$lambda$1;
                onLongPressSticker$lambda$1 = StickerPickerRowView.onLongPressSticker$lambda$1((String) obj);
                return onLongPressSticker$lambda$1;
            }
        };
        setOrientation(0);
    }

    private final void configureRowStickerViews(StickerPickerRow stickerPickerRow) {
        float f10;
        int i10 = 0;
        for (Object obj : stickerPickerRow.getItems()) {
            int i11 = i10 + 1;
            if (i10 < 0) {
                CollectionsKt.v();
            }
            final StickerPickerRow.Sticker sticker = (StickerPickerRow.Sticker) obj;
            View childAt = getChildAt(i10);
            Intrinsics.checkNotNull(childAt, "null cannot be cast to non-null type com.discord.sticker.StickerView");
            StickerView stickerView = (StickerView) childAt;
            if (sticker == null) {
                stickerView.setVisibility(4);
                stickerView.recycle();
                NestedScrollOnTouchUtilsKt.setOnClickListenerNested$default(stickerView, false, null, 1, null);
                NestedScrollOnTouchUtilsKt.setOnLongClickListenerNested$default(stickerView, false, null, 1, null);
            } else {
                stickerView.setVisibility(0);
                if (sticker.getOpaque()) {
                    f10 = 1.0f;
                } else {
                    f10 = 0.3f;
                }
                stickerView.setAlpha(f10);
                stickerView.setEnabled(!sticker.getDisabled());
                NestedScrollOnTouchUtilsKt.setOnClickListenerNested$default(stickerView, false, new View.OnClickListener() { // from class: f8.a
                    @Override // android.view.View.OnClickListener
                    public final void onClick(View view) {
                        StickerPickerRowView.configureRowStickerViews$lambda$5$lambda$3(StickerPickerRowView.this, sticker, view);
                    }
                }, 1, null);
                NestedScrollOnTouchUtilsKt.setOnLongClickListenerNested$default(stickerView, false, new View.OnLongClickListener() { // from class: f8.b
                    @Override // android.view.View.OnLongClickListener
                    public final boolean onLongClick(View view) {
                        boolean configureRowStickerViews$lambda$5$lambda$4;
                        configureRowStickerViews$lambda$5$lambda$4 = StickerPickerRowView.configureRowStickerViews$lambda$5$lambda$4(StickerPickerRowView.this, sticker, view);
                        return configureRowStickerViews$lambda$5$lambda$4;
                    }
                }, 1, null);
                int i12 = WhenMappings.$EnumSwitchMapping$0[sticker.getType().ordinal()];
                if (i12 != 1) {
                    if (i12 != 2) {
                        if (i12 != 3) {
                            if (i12 == 4) {
                                stickerView.asGif(sticker.getUrl(), Integer.valueOf(stickerPickerRow.getItemSize()), Integer.valueOf(stickerPickerRow.getItemSize()), sticker.getAnimated(), sticker.getName());
                            } else {
                                throw new p();
                            }
                        } else {
                            stickerView.asLottie(sticker.getUrl(), stickerPickerRow.getItemSize(), stickerPickerRow.getItemSize(), sticker.getAnimated(), sticker.getId(), !sticker.getAnimated(), sticker.getName());
                        }
                    } else {
                        stickerView.asApng(sticker.getUrl(), Integer.valueOf(stickerPickerRow.getItemSize()), Integer.valueOf(stickerPickerRow.getItemSize()), sticker.getAnimated(), sticker.getName());
                    }
                } else {
                    stickerView.asPng(sticker.getUrl(), Integer.valueOf(stickerPickerRow.getItemSize()), Integer.valueOf(stickerPickerRow.getItemSize()), sticker.getName());
                }
            }
            i10 = i11;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void configureRowStickerViews$lambda$5$lambda$3(StickerPickerRowView stickerPickerRowView, StickerPickerRow.Sticker sticker, View view) {
        stickerPickerRowView.onPressSticker.invoke(sticker.getId());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean configureRowStickerViews$lambda$5$lambda$4(StickerPickerRowView stickerPickerRowView, StickerPickerRow.Sticker sticker, View view) {
        stickerPickerRowView.onLongPressSticker.invoke(sticker.getId());
        return true;
    }

    private final void createRowStickerViews(StickerPickerRow stickerPickerRow) {
        int i10;
        removeAllViews();
        int dpToPx = SizeUtilsKt.getDpToPx(stickerPickerRow.getItemSize());
        int size = stickerPickerRow.getItems().size();
        int dpToPx2 = (SizeUtilsKt.getDpToPx(stickerPickerRow.getRowContentWidth()) - (dpToPx * size)) / (size - 1);
        int dpToPx3 = SizeUtilsKt.getDpToPx(stickerPickerRow.getRowContentPaddingVertical());
        int i11 = 0;
        for (Object obj : stickerPickerRow.getItems()) {
            int i12 = i11 + 1;
            if (i11 < 0) {
                CollectionsKt.v();
            }
            StickerPickerRow.Sticker sticker = (StickerPickerRow.Sticker) obj;
            if (i11 == 0) {
                i10 = 0;
            } else {
                i10 = dpToPx2;
            }
            Context context = getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            View stickerView = new StickerView(context, null, 0, 6, null);
            RippleUtilsKt.addRipple$default(stickerView, true, 0, 2, null);
            LinearLayout.LayoutParams layoutParams = new LinearLayout.LayoutParams(dpToPx, dpToPx);
            layoutParams.setMargins(i10, dpToPx3, 0, dpToPx3);
            stickerView.setLayoutParams(layoutParams);
            addView(stickerView);
            i11 = i12;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onLongPressSticker$lambda$1(String it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onPressSticker$lambda$0(String it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return Unit.f31988a;
    }

    public final void clean() {
        for (View view : n0.a(this)) {
            Intrinsics.checkNotNull(view, "null cannot be cast to non-null type com.discord.sticker.StickerView");
            ((StickerView) view).recycle();
        }
    }

    @NotNull
    public final Function1<String, Unit> getOnLongPressSticker() {
        return this.onLongPressSticker;
    }

    @NotNull
    public final Function1<String, Unit> getOnPressSticker() {
        return this.onPressSticker;
    }

    public final void setOnLongPressSticker(@NotNull Function1<? super String, Unit> function1) {
        Intrinsics.checkNotNullParameter(function1, "<set-?>");
        this.onLongPressSticker = function1;
    }

    public final void setOnPressSticker(@NotNull Function1<? super String, Unit> function1) {
        Intrinsics.checkNotNullParameter(function1, "<set-?>");
        this.onPressSticker = function1;
    }

    public final void setRowData(@NotNull StickerPickerRow rowData) {
        Intrinsics.checkNotNullParameter(rowData, "rowData");
        if (rowData.getItems().size() != getChildCount()) {
            createRowStickerViews(rowData);
        }
        configureRowStickerViews(rowData);
        if (this.firstRenderPass) {
            this.firstRenderPass = false;
        } else {
            ViewMeasureExtensionsKt.measureAndLayout(this);
        }
    }
}
