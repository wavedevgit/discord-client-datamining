package com.discord.segmented.control;

import android.content.Context;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewPropertyAnimator;
import android.view.animation.DecelerateInterpolator;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.cardview.widget.CardView;
import androidx.core.view.accessibility.AccessibilityNodeInfoCompat;
import androidx.core.view.h0;
import com.discord.fonts.DiscordFont;
import com.discord.fonts.DiscordFontUtilsKt;
import com.discord.misc.utilities.measure.ViewMeasureExtensionsKt;
import com.discord.misc.utilities.size.SizeUtilsKt;
import com.discord.segmented.control.databinding.SegmentedControlBinding;
import com.facebook.react.uimanager.ViewProps;
import java.util.List;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.MutablePropertyReference1Impl;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.properties.ReadWriteProperty;
import kotlin.properties.c;
import kotlin.reflect.KProperty;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000b\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0005\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\r\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0012\n\u0002\u0010\u0007\n\u0002\b\u001a\n\u0002\u0010 \n\u0002\b\r\u0018\u00002\u00020\u0001B'\b\u0007\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0004\u0012\b\b\u0002\u0010\u0007\u001a\u00020\u0006¢\u0006\u0004\b\b\u0010\tJ5\u0010\u0010\u001a\u0010\u0012\u0006\u0012\u0004\u0018\u00010\u000f\u0012\u0004\u0012\u00028\u00000\u000e\"\u0004\b\u0000\u0010\n2\u0006\u0010\u000b\u001a\u00028\u00002\b\b\u0002\u0010\r\u001a\u00020\fH\u0002¢\u0006\u0004\b\u0010\u0010\u0011J\u0019\u0010\u0013\u001a\u00020\u00122\b\b\u0002\u0010\r\u001a\u00020\fH\u0002¢\u0006\u0004\b\u0013\u0010\u0014J\u0017\u0010\u0017\u001a\u00020\u00162\u0006\u0010\u0015\u001a\u00020\u0006H\u0002¢\u0006\u0004\b\u0017\u0010\u0018J\u0017\u0010\u001a\u001a\u00020\u00122\u0006\u0010\u0019\u001a\u00020\fH\u0002¢\u0006\u0004\b\u001a\u0010\u0014J\u000f\u0010\u001b\u001a\u00020\u0012H\u0002¢\u0006\u0004\b\u001b\u0010\u001cJ7\u0010\"\u001a\u00020\u00122\u0006\u0010\u001d\u001a\u00020\f2\u0006\u0010\u001e\u001a\u00020\u00062\u0006\u0010\u001f\u001a\u00020\u00062\u0006\u0010 \u001a\u00020\u00062\u0006\u0010!\u001a\u00020\u0006H\u0014¢\u0006\u0004\b\"\u0010#R\u0014\u0010%\u001a\u00020$8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b%\u0010&R6\u0010)\u001a\u0016\u0012\u0004\u0012\u00020\u0006\u0012\u0004\u0012\u00020(\u0012\u0004\u0012\u00020\u0012\u0018\u00010'8\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\b)\u0010*\u001a\u0004\b+\u0010,\"\u0004\b-\u0010.R-\u00106\u001a\u00020\u00062\b\b\u0001\u0010/\u001a\u00020\u00068G@FX\u0086\u008e\u0002¢\u0006\u0012\n\u0004\b0\u00101\u001a\u0004\b2\u00103\"\u0004\b4\u00105R-\u0010:\u001a\u00020\u00062\b\b\u0001\u0010/\u001a\u00020\u00068G@FX\u0086\u008e\u0002¢\u0006\u0012\n\u0004\b7\u00101\u001a\u0004\b8\u00103\"\u0004\b9\u00105R-\u0010A\u001a\u00020;2\b\b\u0001\u0010/\u001a\u00020;8G@FX\u0086\u008e\u0002¢\u0006\u0012\n\u0004\b<\u00101\u001a\u0004\b=\u0010>\"\u0004\b?\u0010@R+\u0010E\u001a\u00020\u00062\u0006\u0010/\u001a\u00020\u00068F@FX\u0086\u008e\u0002¢\u0006\u0012\n\u0004\bB\u00101\u001a\u0004\bC\u00103\"\u0004\bD\u00105R-\u0010I\u001a\u00020\u00062\b\b\u0001\u0010/\u001a\u00020\u00068G@FX\u0086\u008e\u0002¢\u0006\u0012\n\u0004\bF\u00101\u001a\u0004\bG\u00103\"\u0004\bH\u00105R+\u0010M\u001a\u00020;2\u0006\u0010/\u001a\u00020;8F@FX\u0086\u008e\u0002¢\u0006\u0012\n\u0004\bJ\u00101\u001a\u0004\bK\u0010>\"\u0004\bL\u0010@R-\u0010Q\u001a\u00020\u00062\b\b\u0001\u0010/\u001a\u00020\u00068G@FX\u0086\u008e\u0002¢\u0006\u0012\n\u0004\bN\u00101\u001a\u0004\bO\u00103\"\u0004\bP\u00105R+\u0010U\u001a\u00020;2\u0006\u0010/\u001a\u00020;8F@FX\u0086\u008e\u0002¢\u0006\u0012\n\u0004\bR\u00101\u001a\u0004\bS\u0010>\"\u0004\bT\u0010@R7\u0010\\\u001a\b\u0012\u0004\u0012\u00020(0V2\f\u0010/\u001a\b\u0012\u0004\u0012\u00020(0V8F@FX\u0086\u008e\u0002¢\u0006\u0012\n\u0004\bW\u00101\u001a\u0004\bX\u0010Y\"\u0004\bZ\u0010[R7\u0010`\u001a\b\u0012\u0004\u0012\u00020(0V2\f\u0010/\u001a\b\u0012\u0004\u0012\u00020(0V8F@FX\u0086\u008e\u0002¢\u0006\u0012\n\u0004\b]\u00101\u001a\u0004\b^\u0010Y\"\u0004\b_\u0010[R\u0016\u0010a\u001a\u00020\u00068\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\ba\u0010b¨\u0006c"}, d2 = {"Lcom/discord/segmented/control/SegmentedControlView;", "Landroid/widget/FrameLayout;", "Landroid/content/Context;", "context", "Landroid/util/AttributeSet;", "attrs", "", "defStyleAttr", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;I)V", "T", "initialValue", "", "labelsChanged", "Lkotlin/properties/ReadWriteProperty;", "", "updateViewOnChange", "(Ljava/lang/Object;Z)Lkotlin/properties/ReadWriteProperty;", "", "updateView", "(Z)V", "index", "Landroid/widget/TextView;", "getLabelView", "(I)Landroid/widget/TextView;", "animate", "animateSelection", "maybeUpdateSegmentWidth", "()V", "changed", ViewProps.LEFT, ViewProps.TOP, ViewProps.RIGHT, ViewProps.BOTTOM, "onLayout", "(ZIIII)V", "Lcom/discord/segmented/control/databinding/SegmentedControlBinding;", "binding", "Lcom/discord/segmented/control/databinding/SegmentedControlBinding;", "Lkotlin/Function2;", "", "onSegmentSelected", "Lkotlin/jvm/functions/Function2;", "getOnSegmentSelected", "()Lkotlin/jvm/functions/Function2;", "setOnSegmentSelected", "(Lkotlin/jvm/functions/Function2;)V", "<set-?>", "containerBgColor$delegate", "Lkotlin/properties/ReadWriteProperty;", "getContainerBgColor", "()I", "setContainerBgColor", "(I)V", "containerBgColor", "selectedSegmentBgColor$delegate", "getSelectedSegmentBgColor", "setSelectedSegmentBgColor", "selectedSegmentBgColor", "", "cornerRadiusPx$delegate", "getCornerRadiusPx", "()F", "setCornerRadiusPx", "(F)V", "cornerRadiusPx", "selectedIndex$delegate", "getSelectedIndex", "setSelectedIndex", "selectedIndex", "segmentTextColor$delegate", "getSegmentTextColor", "setSegmentTextColor", "segmentTextColor", "segmentFontSizeSp$delegate", "getSegmentFontSizeSp", "setSegmentFontSizeSp", "segmentFontSizeSp", "selectedSegmentTextColor$delegate", "getSelectedSegmentTextColor", "setSelectedSegmentTextColor", "selectedSegmentTextColor", "selectedSegmentFontSizeSp$delegate", "getSelectedSegmentFontSizeSp", "setSelectedSegmentFontSizeSp", "selectedSegmentFontSizeSp", "", "labels$delegate", "getLabels", "()Ljava/util/List;", "setLabels", "(Ljava/util/List;)V", "labels", "accessibilityRoleDescriptions$delegate", "getAccessibilityRoleDescriptions", "setAccessibilityRoleDescriptions", "accessibilityRoleDescriptions", "segmentWidth", "I", "segmented_control_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nSegmentedControlView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 SegmentedControlView.kt\ncom/discord/segmented/control/SegmentedControlView\n+ 2 Delegates.kt\nkotlin/properties/Delegates\n+ 3 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 4 View.kt\nandroidx/core/view/ViewKt\n*L\n1#1,160:1\n33#2,3:161\n1878#3,3:164\n311#4:167\n327#4,4:168\n312#4:172\n*S KotlinDebug\n*F\n+ 1 SegmentedControlView.kt\ncom/discord/segmented/control/SegmentedControlView\n*L\n32#1:161,3\n88#1:164,3\n150#1:167\n150#1:168,4\n150#1:172\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class SegmentedControlView extends FrameLayout {
    static final /* synthetic */ KProperty[] $$delegatedProperties = {Reflection.mutableProperty1(new MutablePropertyReference1Impl(SegmentedControlView.class, "containerBgColor", "getContainerBgColor()I", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(SegmentedControlView.class, "selectedSegmentBgColor", "getSelectedSegmentBgColor()I", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(SegmentedControlView.class, "cornerRadiusPx", "getCornerRadiusPx()F", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(SegmentedControlView.class, "selectedIndex", "getSelectedIndex()I", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(SegmentedControlView.class, "segmentTextColor", "getSegmentTextColor()I", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(SegmentedControlView.class, "segmentFontSizeSp", "getSegmentFontSizeSp()F", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(SegmentedControlView.class, "selectedSegmentTextColor", "getSelectedSegmentTextColor()I", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(SegmentedControlView.class, "selectedSegmentFontSizeSp", "getSelectedSegmentFontSizeSp()F", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(SegmentedControlView.class, "labels", "getLabels()Ljava/util/List;", 0)), Reflection.mutableProperty1(new MutablePropertyReference1Impl(SegmentedControlView.class, "accessibilityRoleDescriptions", "getAccessibilityRoleDescriptions()Ljava/util/List;", 0))};
    @NotNull
    private final ReadWriteProperty accessibilityRoleDescriptions$delegate;
    @NotNull
    private final SegmentedControlBinding binding;
    @NotNull
    private final ReadWriteProperty containerBgColor$delegate;
    @NotNull
    private final ReadWriteProperty cornerRadiusPx$delegate;
    @NotNull
    private final ReadWriteProperty labels$delegate;
    private Function2<? super Integer, ? super String, Unit> onSegmentSelected;
    @NotNull
    private final ReadWriteProperty segmentFontSizeSp$delegate;
    @NotNull
    private final ReadWriteProperty segmentTextColor$delegate;
    private int segmentWidth;
    @NotNull
    private final ReadWriteProperty selectedIndex$delegate;
    @NotNull
    private final ReadWriteProperty selectedSegmentBgColor$delegate;
    @NotNull
    private final ReadWriteProperty selectedSegmentFontSizeSp$delegate;
    @NotNull
    private final ReadWriteProperty selectedSegmentTextColor$delegate;

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public SegmentedControlView(@NotNull Context context) {
        this(context, null, 0, 6, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    private final void animateSelection(boolean z10) {
        long j10;
        ViewPropertyAnimator animate = this.binding.selectedSegmentBg.animate();
        if (z10) {
            j10 = 150;
        } else {
            j10 = 0;
        }
        animate.setDuration(j10).setInterpolator(new DecelerateInterpolator()).translationX(getSelectedIndex() * this.binding.selectedSegmentBg.getWidth());
    }

    private final TextView getLabelView(final int i10) {
        TextView textView;
        View childAt = this.binding.segmentContainer.getChildAt(i10);
        if (childAt instanceof TextView) {
            textView = (TextView) childAt;
        } else {
            textView = null;
        }
        if (textView == null) {
            TextView textView2 = new TextView(getContext());
            h0.n0(textView2, new androidx.core.view.a() { // from class: com.discord.segmented.control.SegmentedControlView$getLabelView$1$1
                @Override // androidx.core.view.a
                public void onInitializeAccessibilityNodeInfo(View host, AccessibilityNodeInfoCompat info) {
                    Intrinsics.checkNotNullParameter(host, "host");
                    Intrinsics.checkNotNullParameter(info, "info");
                    super.onInitializeAccessibilityNodeInfo(host, info);
                    boolean z10 = true;
                    info.J0(true);
                    if (i10 != this.getSelectedIndex()) {
                        z10 = false;
                    }
                    info.W0(z10);
                    info.T0(this.getAccessibilityRoleDescriptions().get(i10));
                }
            });
            this.binding.segmentContainer.addView(textView2, new LinearLayout.LayoutParams(0, -1, 1.0f));
            return textView2;
        }
        return textView;
    }

    private final void maybeUpdateSegmentWidth() {
        int i10;
        View childAt = this.binding.segmentContainer.getChildAt(0);
        if (childAt != null) {
            i10 = childAt.getWidth();
        } else {
            i10 = 0;
        }
        if (this.segmentWidth != i10) {
            this.segmentWidth = i10;
            CardView selectedSegmentBg = this.binding.selectedSegmentBg;
            Intrinsics.checkNotNullExpressionValue(selectedSegmentBg, "selectedSegmentBg");
            ViewGroup.LayoutParams layoutParams = selectedSegmentBg.getLayoutParams();
            if (layoutParams != null) {
                layoutParams.width = i10;
                selectedSegmentBg.setLayoutParams(layoutParams);
                ViewMeasureExtensionsKt.measureAndLayout(this);
                updateView$default(this, false, 1, null);
                return;
            }
            throw new NullPointerException("null cannot be cast to non-null type android.view.ViewGroup.LayoutParams");
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void updateView(boolean z10) {
        if (z10) {
            this.binding.segmentContainer.removeAllViews();
        }
        this.binding.rootCardView.setRadius(getCornerRadiusPx());
        this.binding.rootCardView.setCardBackgroundColor(getContainerBgColor());
        this.binding.selectedSegmentBg.setCardBackgroundColor(getSelectedSegmentBgColor());
        final int i10 = 0;
        for (Object obj : getLabels()) {
            int i11 = i10 + 1;
            if (i10 < 0) {
                CollectionsKt.v();
            }
            final String str = (String) obj;
            TextView labelView = getLabelView(i10);
            labelView.setText(str);
            labelView.setGravity(17);
            DiscordFontUtilsKt.setDiscordFont(labelView, DiscordFont.PrimarySemibold);
            labelView.setTextSize(getSegmentFontSizeSp());
            labelView.setTextColor(getSegmentTextColor());
            labelView.setOnClickListener(new View.OnClickListener() { // from class: com.discord.segmented.control.a
                @Override // android.view.View.OnClickListener
                public final void onClick(View view) {
                    SegmentedControlView.updateView$lambda$3$lambda$2$lambda$1(SegmentedControlView.this, i10, str, view);
                }
            });
            if (i10 == getSelectedIndex()) {
                labelView.setTextSize(getSelectedSegmentFontSizeSp());
                labelView.setTextColor(getSelectedSegmentTextColor());
            }
            i10 = i11;
        }
        ViewMeasureExtensionsKt.measureAndLayout(this);
        animateSelection(!z10);
    }

    static /* synthetic */ void updateView$default(SegmentedControlView segmentedControlView, boolean z10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            z10 = false;
        }
        segmentedControlView.updateView(z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void updateView$lambda$3$lambda$2$lambda$1(SegmentedControlView segmentedControlView, int i10, String str, View view) {
        Function2<? super Integer, ? super String, Unit> function2 = segmentedControlView.onSegmentSelected;
        if (function2 != null) {
            function2.invoke(Integer.valueOf(i10), str);
        }
    }

    private final <T> ReadWriteProperty updateViewOnChange(final T t10, final boolean z10) {
        kotlin.properties.a aVar = kotlin.properties.a.f32095a;
        return new c(t10) { // from class: com.discord.segmented.control.SegmentedControlView$updateViewOnChange$$inlined$observable$1
            @Override // kotlin.properties.c
            protected void afterChange(KProperty property, T t11, T t12) {
                Intrinsics.checkNotNullParameter(property, "property");
                if (!Intrinsics.areEqual(t12, t11)) {
                    this.updateView(z10);
                }
            }
        };
    }

    static /* synthetic */ ReadWriteProperty updateViewOnChange$default(SegmentedControlView segmentedControlView, Object obj, boolean z10, int i10, Object obj2) {
        if ((i10 & 2) != 0) {
            z10 = false;
        }
        return segmentedControlView.updateViewOnChange(obj, z10);
    }

    @NotNull
    public final List<String> getAccessibilityRoleDescriptions() {
        return (List) this.accessibilityRoleDescriptions$delegate.getValue(this, $$delegatedProperties[9]);
    }

    public final int getContainerBgColor() {
        return ((Number) this.containerBgColor$delegate.getValue(this, $$delegatedProperties[0])).intValue();
    }

    public final float getCornerRadiusPx() {
        return ((Number) this.cornerRadiusPx$delegate.getValue(this, $$delegatedProperties[2])).floatValue();
    }

    @NotNull
    public final List<String> getLabels() {
        return (List) this.labels$delegate.getValue(this, $$delegatedProperties[8]);
    }

    public final Function2<Integer, String, Unit> getOnSegmentSelected() {
        return this.onSegmentSelected;
    }

    public final float getSegmentFontSizeSp() {
        return ((Number) this.segmentFontSizeSp$delegate.getValue(this, $$delegatedProperties[5])).floatValue();
    }

    public final int getSegmentTextColor() {
        return ((Number) this.segmentTextColor$delegate.getValue(this, $$delegatedProperties[4])).intValue();
    }

    public final int getSelectedIndex() {
        return ((Number) this.selectedIndex$delegate.getValue(this, $$delegatedProperties[3])).intValue();
    }

    public final int getSelectedSegmentBgColor() {
        return ((Number) this.selectedSegmentBgColor$delegate.getValue(this, $$delegatedProperties[1])).intValue();
    }

    public final float getSelectedSegmentFontSizeSp() {
        return ((Number) this.selectedSegmentFontSizeSp$delegate.getValue(this, $$delegatedProperties[7])).floatValue();
    }

    public final int getSelectedSegmentTextColor() {
        return ((Number) this.selectedSegmentTextColor$delegate.getValue(this, $$delegatedProperties[6])).intValue();
    }

    @Override // android.widget.FrameLayout, android.view.ViewGroup, android.view.View
    protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        super.onLayout(z10, i10, i11, i12, i13);
        maybeUpdateSegmentWidth();
    }

    public final void setAccessibilityRoleDescriptions(@NotNull List<String> list) {
        Intrinsics.checkNotNullParameter(list, "<set-?>");
        this.accessibilityRoleDescriptions$delegate.setValue(this, $$delegatedProperties[9], list);
    }

    public final void setContainerBgColor(int i10) {
        this.containerBgColor$delegate.setValue(this, $$delegatedProperties[0], Integer.valueOf(i10));
    }

    public final void setCornerRadiusPx(float f10) {
        this.cornerRadiusPx$delegate.setValue(this, $$delegatedProperties[2], Float.valueOf(f10));
    }

    public final void setLabels(@NotNull List<String> list) {
        Intrinsics.checkNotNullParameter(list, "<set-?>");
        this.labels$delegate.setValue(this, $$delegatedProperties[8], list);
    }

    public final void setOnSegmentSelected(Function2<? super Integer, ? super String, Unit> function2) {
        this.onSegmentSelected = function2;
    }

    public final void setSegmentFontSizeSp(float f10) {
        this.segmentFontSizeSp$delegate.setValue(this, $$delegatedProperties[5], Float.valueOf(f10));
    }

    public final void setSegmentTextColor(int i10) {
        this.segmentTextColor$delegate.setValue(this, $$delegatedProperties[4], Integer.valueOf(i10));
    }

    public final void setSelectedIndex(int i10) {
        this.selectedIndex$delegate.setValue(this, $$delegatedProperties[3], Integer.valueOf(i10));
    }

    public final void setSelectedSegmentBgColor(int i10) {
        this.selectedSegmentBgColor$delegate.setValue(this, $$delegatedProperties[1], Integer.valueOf(i10));
    }

    public final void setSelectedSegmentFontSizeSp(float f10) {
        this.selectedSegmentFontSizeSp$delegate.setValue(this, $$delegatedProperties[7], Float.valueOf(f10));
    }

    public final void setSelectedSegmentTextColor(int i10) {
        this.selectedSegmentTextColor$delegate.setValue(this, $$delegatedProperties[6], Integer.valueOf(i10));
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public SegmentedControlView(@NotNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0, 4, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    public /* synthetic */ SegmentedControlView(Context context, AttributeSet attributeSet, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i11 & 2) != 0 ? null : attributeSet, (i11 & 4) != 0 ? 0 : i10);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public SegmentedControlView(@NotNull Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        Intrinsics.checkNotNullParameter(context, "context");
        SegmentedControlBinding inflate = SegmentedControlBinding.inflate(LayoutInflater.from(context), this, true);
        Intrinsics.checkNotNullExpressionValue(inflate, "inflate(...)");
        this.binding = inflate;
        float f10 = context.getResources().getDisplayMetrics().density * 2.0f;
        inflate.selectedSegmentBg.setElevation(f10);
        inflate.segmentContainer.setElevation(f10);
        inflate.segmentContainer.setOutlineProvider(null);
        this.containerBgColor$delegate = updateViewOnChange$default(this, 0, false, 2, null);
        this.selectedSegmentBgColor$delegate = updateViewOnChange$default(this, 0, false, 2, null);
        this.cornerRadiusPx$delegate = updateViewOnChange$default(this, Float.valueOf(SizeUtilsKt.getDpToPx(4)), false, 2, null);
        this.selectedIndex$delegate = updateViewOnChange$default(this, 0, false, 2, null);
        this.segmentTextColor$delegate = updateViewOnChange$default(this, 0, false, 2, null);
        Float valueOf = Float.valueOf(0.0f);
        this.segmentFontSizeSp$delegate = updateViewOnChange$default(this, valueOf, false, 2, null);
        this.selectedSegmentTextColor$delegate = updateViewOnChange$default(this, 0, false, 2, null);
        this.selectedSegmentFontSizeSp$delegate = updateViewOnChange$default(this, valueOf, false, 2, null);
        this.labels$delegate = updateViewOnChange(CollectionsKt.l(), true);
        this.accessibilityRoleDescriptions$delegate = updateViewOnChange(CollectionsKt.l(), true);
    }
}
