package com.discord.mobile_voice_overlay.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.annotation.NonNull;
import androidx.viewbinding.ViewBinding;
import com.discord.mobile_voice_overlay.R;
import com.facebook.drawee.view.SimpleDraweeView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class OverlayVoiceBubbleBinding implements ViewBinding {
    @NonNull
    public final SimpleDraweeView overlayBubbleIv;
    @NonNull
    private final SimpleDraweeView rootView;

    private OverlayVoiceBubbleBinding(@NonNull SimpleDraweeView simpleDraweeView, @NonNull SimpleDraweeView simpleDraweeView2) {
        this.rootView = simpleDraweeView;
        this.overlayBubbleIv = simpleDraweeView2;
    }

    @NonNull
    public static OverlayVoiceBubbleBinding bind(@NonNull View view) {
        if (view != null) {
            SimpleDraweeView simpleDraweeView = (SimpleDraweeView) view;
            return new OverlayVoiceBubbleBinding(simpleDraweeView, simpleDraweeView);
        }
        throw new NullPointerException("rootView");
    }

    @NonNull
    public static OverlayVoiceBubbleBinding inflate(@NonNull LayoutInflater layoutInflater) {
        return inflate(layoutInflater, null, false);
    }

    @NonNull
    public static OverlayVoiceBubbleBinding inflate(@NonNull LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(R.layout.overlay_voice_bubble, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return bind(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    @NonNull
    public SimpleDraweeView getRoot() {
        return this.rootView;
    }
}
