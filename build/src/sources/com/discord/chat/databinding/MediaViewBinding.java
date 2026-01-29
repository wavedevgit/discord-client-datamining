package com.discord.chat.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.ProgressBar;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import com.discord.chat.R;
import com.facebook.drawee.view.SimpleDraweeView;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class MediaViewBinding implements ViewBinding {
    @NonNull
    public final SimpleDraweeView inlineMediaGifIndicator;
    @NonNull
    public final SimpleDraweeView inlineMediaImagePreview;
    @NonNull
    public final ProgressBar inlineMediaLoadingIndicator;
    @NonNull
    public final ImageView inlineMediaPlayButton;
    @NonNull
    public final SimpleDraweeView inlineMediaVolumeToggle;
    @NonNull
    public final ConstraintLayout overlayTag;
    @NonNull
    public final SimpleDraweeView overlayTagIcon;
    @NonNull
    public final TextView overlayTagText;
    @NonNull
    private final View rootView;

    private MediaViewBinding(@NonNull View view, @NonNull SimpleDraweeView simpleDraweeView, @NonNull SimpleDraweeView simpleDraweeView2, @NonNull ProgressBar progressBar, @NonNull ImageView imageView, @NonNull SimpleDraweeView simpleDraweeView3, @NonNull ConstraintLayout constraintLayout, @NonNull SimpleDraweeView simpleDraweeView4, @NonNull TextView textView) {
        this.rootView = view;
        this.inlineMediaGifIndicator = simpleDraweeView;
        this.inlineMediaImagePreview = simpleDraweeView2;
        this.inlineMediaLoadingIndicator = progressBar;
        this.inlineMediaPlayButton = imageView;
        this.inlineMediaVolumeToggle = simpleDraweeView3;
        this.overlayTag = constraintLayout;
        this.overlayTagIcon = simpleDraweeView4;
        this.overlayTagText = textView;
    }

    @NonNull
    public static MediaViewBinding bind(@NonNull View view) {
        int i10 = R.id.inline_media_gif_indicator;
        SimpleDraweeView simpleDraweeView = (SimpleDraweeView) a.a(view, i10);
        if (simpleDraweeView != null) {
            i10 = R.id.inline_media_image_preview;
            SimpleDraweeView simpleDraweeView2 = (SimpleDraweeView) a.a(view, i10);
            if (simpleDraweeView2 != null) {
                i10 = R.id.inline_media_loading_indicator;
                ProgressBar progressBar = (ProgressBar) a.a(view, i10);
                if (progressBar != null) {
                    i10 = R.id.inline_media_play_button;
                    ImageView imageView = (ImageView) a.a(view, i10);
                    if (imageView != null) {
                        i10 = R.id.inline_media_volume_toggle;
                        SimpleDraweeView simpleDraweeView3 = (SimpleDraweeView) a.a(view, i10);
                        if (simpleDraweeView3 != null) {
                            i10 = R.id.overlay_tag;
                            ConstraintLayout constraintLayout = (ConstraintLayout) a.a(view, i10);
                            if (constraintLayout != null) {
                                i10 = R.id.overlay_tag_icon;
                                SimpleDraweeView simpleDraweeView4 = (SimpleDraweeView) a.a(view, i10);
                                if (simpleDraweeView4 != null) {
                                    i10 = R.id.overlay_tag_text;
                                    TextView textView = (TextView) a.a(view, i10);
                                    if (textView != null) {
                                        return new MediaViewBinding(view, simpleDraweeView, simpleDraweeView2, progressBar, imageView, simpleDraweeView3, constraintLayout, simpleDraweeView4, textView);
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
    public static MediaViewBinding inflate(@NonNull LayoutInflater layoutInflater, @NonNull ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(R.layout.media_view, viewGroup);
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
