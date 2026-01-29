package com.discord.chat.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import com.discord.chat.R;
import com.discord.chat.presentation.message.view.AltTextButtonView;
import com.facebook.drawee.view.SimpleDraweeView;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class MediaImageViewBinding implements ViewBinding {
    @NonNull
    public final ConstraintLayout container;
    @NonNull
    public final SimpleDraweeView gifIndicator;
    @NonNull
    public final SimpleDraweeView image;
    @NonNull
    public final TextView imageAltText;
    @NonNull
    public final FrameLayout imageBlurBg;
    @NonNull
    public final AltTextButtonView mediaViewAltTextButton;
    @NonNull
    private final View rootView;

    private MediaImageViewBinding(@NonNull View view, @NonNull ConstraintLayout constraintLayout, @NonNull SimpleDraweeView simpleDraweeView, @NonNull SimpleDraweeView simpleDraweeView2, @NonNull TextView textView, @NonNull FrameLayout frameLayout, @NonNull AltTextButtonView altTextButtonView) {
        this.rootView = view;
        this.container = constraintLayout;
        this.gifIndicator = simpleDraweeView;
        this.image = simpleDraweeView2;
        this.imageAltText = textView;
        this.imageBlurBg = frameLayout;
        this.mediaViewAltTextButton = altTextButtonView;
    }

    @NonNull
    public static MediaImageViewBinding bind(@NonNull View view) {
        int i10 = R.id.container;
        ConstraintLayout constraintLayout = (ConstraintLayout) a.a(view, i10);
        if (constraintLayout != null) {
            i10 = R.id.gif_indicator;
            SimpleDraweeView simpleDraweeView = (SimpleDraweeView) a.a(view, i10);
            if (simpleDraweeView != null) {
                i10 = R.id.image;
                SimpleDraweeView simpleDraweeView2 = (SimpleDraweeView) a.a(view, i10);
                if (simpleDraweeView2 != null) {
                    i10 = R.id.image_alt_text;
                    TextView textView = (TextView) a.a(view, i10);
                    if (textView != null) {
                        i10 = R.id.image_blur_bg;
                        FrameLayout frameLayout = (FrameLayout) a.a(view, i10);
                        if (frameLayout != null) {
                            i10 = R.id.media_view_alt_text_button;
                            AltTextButtonView altTextButtonView = (AltTextButtonView) a.a(view, i10);
                            if (altTextButtonView != null) {
                                return new MediaImageViewBinding(view, constraintLayout, simpleDraweeView, simpleDraweeView2, textView, frameLayout, altTextButtonView);
                            }
                        }
                    }
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    @NonNull
    public static MediaImageViewBinding inflate(@NonNull LayoutInflater layoutInflater, @NonNull ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(R.layout.media_image_view, viewGroup);
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
