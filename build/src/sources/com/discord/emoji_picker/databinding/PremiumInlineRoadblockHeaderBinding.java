package com.discord.emoji_picker.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import androidx.annotation.NonNull;
import androidx.viewbinding.ViewBinding;
import com.discord.emoji_picker.R;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class PremiumInlineRoadblockHeaderBinding implements ViewBinding {
    @NonNull
    public final View gradient;
    @NonNull
    public final View gradientDivider;
    @NonNull
    public final FrameLayout gradientIcon;
    @NonNull
    public final LinearLayout gradients;
    @NonNull
    private final RelativeLayout rootView;

    private PremiumInlineRoadblockHeaderBinding(@NonNull RelativeLayout relativeLayout, @NonNull View view, @NonNull View view2, @NonNull FrameLayout frameLayout, @NonNull LinearLayout linearLayout) {
        this.rootView = relativeLayout;
        this.gradient = view;
        this.gradientDivider = view2;
        this.gradientIcon = frameLayout;
        this.gradients = linearLayout;
    }

    @NonNull
    public static PremiumInlineRoadblockHeaderBinding bind(@NonNull View view) {
        View a10;
        int i10 = R.id.gradient;
        View a11 = a.a(view, i10);
        if (a11 != null && (a10 = a.a(view, (i10 = R.id.gradient_divider))) != null) {
            i10 = R.id.gradient_icon;
            FrameLayout frameLayout = (FrameLayout) a.a(view, i10);
            if (frameLayout != null) {
                i10 = R.id.gradients;
                LinearLayout linearLayout = (LinearLayout) a.a(view, i10);
                if (linearLayout != null) {
                    return new PremiumInlineRoadblockHeaderBinding((RelativeLayout) view, a11, a10, frameLayout, linearLayout);
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    @NonNull
    public static PremiumInlineRoadblockHeaderBinding inflate(@NonNull LayoutInflater layoutInflater) {
        return inflate(layoutInflater, null, false);
    }

    @NonNull
    public static PremiumInlineRoadblockHeaderBinding inflate(@NonNull LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(R.layout.premium_inline_roadblock_header, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return bind(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    @NonNull
    public RelativeLayout getRoot() {
        return this.rootView;
    }
}
