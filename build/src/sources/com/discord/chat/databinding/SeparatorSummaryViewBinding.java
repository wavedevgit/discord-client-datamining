package com.discord.chat.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.constraintlayout.widget.Barrier;
import androidx.constraintlayout.widget.Guideline;
import androidx.viewbinding.ViewBinding;
import com.discord.chat.R;
import com.facebook.drawee.view.SimpleDraweeView;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class SeparatorSummaryViewBinding implements ViewBinding {
    @NonNull
    public final Guideline bottomGuideline;
    @NonNull
    public final FrameLayout buttonWrapper;
    @NonNull
    public final SimpleDraweeView icon;
    @NonNull
    public final SimpleDraweeView indicatorBottom;
    @NonNull
    public final Barrier indicatorEndBarrier;
    @NonNull
    public final SimpleDraweeView indicatorTop;
    @NonNull
    public final SimpleDraweeView jumpButton;
    @NonNull
    public final TextView middleText;
    @NonNull
    public final SimpleDraweeView moreButton;
    @NonNull
    public final View rightBar;
    @NonNull
    private final View rootView;
    @NonNull
    public final Guideline topGuideline;

    private SeparatorSummaryViewBinding(@NonNull View view, @NonNull Guideline guideline, @NonNull FrameLayout frameLayout, @NonNull SimpleDraweeView simpleDraweeView, @NonNull SimpleDraweeView simpleDraweeView2, @NonNull Barrier barrier, @NonNull SimpleDraweeView simpleDraweeView3, @NonNull SimpleDraweeView simpleDraweeView4, @NonNull TextView textView, @NonNull SimpleDraweeView simpleDraweeView5, @NonNull View view2, @NonNull Guideline guideline2) {
        this.rootView = view;
        this.bottomGuideline = guideline;
        this.buttonWrapper = frameLayout;
        this.icon = simpleDraweeView;
        this.indicatorBottom = simpleDraweeView2;
        this.indicatorEndBarrier = barrier;
        this.indicatorTop = simpleDraweeView3;
        this.jumpButton = simpleDraweeView4;
        this.middleText = textView;
        this.moreButton = simpleDraweeView5;
        this.rightBar = view2;
        this.topGuideline = guideline2;
    }

    @NonNull
    public static SeparatorSummaryViewBinding bind(@NonNull View view) {
        View a10;
        int i10 = R.id.bottom_guideline;
        Guideline guideline = (Guideline) a.a(view, i10);
        if (guideline != null) {
            i10 = R.id.button_wrapper;
            FrameLayout frameLayout = (FrameLayout) a.a(view, i10);
            if (frameLayout != null) {
                i10 = R.id.icon;
                SimpleDraweeView simpleDraweeView = (SimpleDraweeView) a.a(view, i10);
                if (simpleDraweeView != null) {
                    i10 = R.id.indicator_bottom;
                    SimpleDraweeView simpleDraweeView2 = (SimpleDraweeView) a.a(view, i10);
                    if (simpleDraweeView2 != null) {
                        i10 = R.id.indicator_end_barrier;
                        Barrier barrier = (Barrier) a.a(view, i10);
                        if (barrier != null) {
                            i10 = R.id.indicator_top;
                            SimpleDraweeView simpleDraweeView3 = (SimpleDraweeView) a.a(view, i10);
                            if (simpleDraweeView3 != null) {
                                i10 = R.id.jump_button;
                                SimpleDraweeView simpleDraweeView4 = (SimpleDraweeView) a.a(view, i10);
                                if (simpleDraweeView4 != null) {
                                    i10 = R.id.middle_text;
                                    TextView textView = (TextView) a.a(view, i10);
                                    if (textView != null) {
                                        i10 = R.id.more_button;
                                        SimpleDraweeView simpleDraweeView5 = (SimpleDraweeView) a.a(view, i10);
                                        if (simpleDraweeView5 != null && (a10 = a.a(view, (i10 = R.id.right_bar))) != null) {
                                            i10 = R.id.top_guideline;
                                            Guideline guideline2 = (Guideline) a.a(view, i10);
                                            if (guideline2 != null) {
                                                return new SeparatorSummaryViewBinding(view, guideline, frameLayout, simpleDraweeView, simpleDraweeView2, barrier, simpleDraweeView3, simpleDraweeView4, textView, simpleDraweeView5, a10, guideline2);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    @NonNull
    public static SeparatorSummaryViewBinding inflate(@NonNull LayoutInflater layoutInflater, @NonNull ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(R.layout.separator_summary_view, viewGroup);
            return bind(viewGroup);
        }
        throw new NullPointerException("parent");
    }

    @Override // androidx.viewbinding.ViewBinding
    @NonNull
    public View getRoot() {
        return this.rootView;
    }
}
