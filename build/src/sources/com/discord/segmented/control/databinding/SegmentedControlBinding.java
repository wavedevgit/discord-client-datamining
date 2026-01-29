package com.discord.segmented.control.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import androidx.annotation.NonNull;
import androidx.cardview.widget.CardView;
import androidx.viewbinding.ViewBinding;
import com.discord.segmented.control.R;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class SegmentedControlBinding implements ViewBinding {
    @NonNull
    public final CardView rootCardView;
    @NonNull
    private final CardView rootView;
    @NonNull
    public final LinearLayout segmentContainer;
    @NonNull
    public final CardView selectedSegmentBg;

    private SegmentedControlBinding(@NonNull CardView cardView, @NonNull CardView cardView2, @NonNull LinearLayout linearLayout, @NonNull CardView cardView3) {
        this.rootView = cardView;
        this.rootCardView = cardView2;
        this.segmentContainer = linearLayout;
        this.selectedSegmentBg = cardView3;
    }

    @NonNull
    public static SegmentedControlBinding bind(@NonNull View view) {
        CardView cardView = (CardView) view;
        int i10 = R.id.segmentContainer;
        LinearLayout linearLayout = (LinearLayout) a.a(view, i10);
        if (linearLayout != null) {
            i10 = R.id.selectedSegmentBg;
            CardView cardView2 = (CardView) a.a(view, i10);
            if (cardView2 != null) {
                return new SegmentedControlBinding(cardView, cardView, linearLayout, cardView2);
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    @NonNull
    public static SegmentedControlBinding inflate(@NonNull LayoutInflater layoutInflater) {
        return inflate(layoutInflater, null, false);
    }

    @NonNull
    public static SegmentedControlBinding inflate(@NonNull LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(R.layout.segmented_control, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return bind(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    @NonNull
    public CardView getRoot() {
        return this.rootView;
    }
}
