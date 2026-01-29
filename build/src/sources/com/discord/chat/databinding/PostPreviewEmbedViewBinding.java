package com.discord.chat.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.viewbinding.ViewBinding;
import com.discord.chat.R;
import com.discord.chat.presentation.message.view.SpoilerView;
import com.discord.core.DCDButton;
import com.facebook.drawee.span.SimpleDraweeSpanTextView;
import com.facebook.drawee.view.SimpleDraweeView;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class PostPreviewEmbedViewBinding implements ViewBinding {
    @NonNull
    public final SimpleDraweeView backgroundImage;
    @NonNull
    public final SimpleDraweeView coverImage;
    @NonNull
    public final DCDButton coverImageOverlayButton;
    @NonNull
    public final DCDButton cta;
    @NonNull
    public final SimpleDraweeSpanTextView footer;
    @NonNull
    public final View headerDivider;
    @NonNull
    public final FrameLayout imageBlurBg;
    @NonNull
    private final View rootView;
    @NonNull
    public final SpoilerView spoiler;
    @NonNull
    public final TextView subtitle;
    @NonNull
    public final TextView title;

    private PostPreviewEmbedViewBinding(@NonNull View view, @NonNull SimpleDraweeView simpleDraweeView, @NonNull SimpleDraweeView simpleDraweeView2, @NonNull DCDButton dCDButton, @NonNull DCDButton dCDButton2, @NonNull SimpleDraweeSpanTextView simpleDraweeSpanTextView, @NonNull View view2, @NonNull FrameLayout frameLayout, @NonNull SpoilerView spoilerView, @NonNull TextView textView, @NonNull TextView textView2) {
        this.rootView = view;
        this.backgroundImage = simpleDraweeView;
        this.coverImage = simpleDraweeView2;
        this.coverImageOverlayButton = dCDButton;
        this.cta = dCDButton2;
        this.footer = simpleDraweeSpanTextView;
        this.headerDivider = view2;
        this.imageBlurBg = frameLayout;
        this.spoiler = spoilerView;
        this.subtitle = textView;
        this.title = textView2;
    }

    @NonNull
    public static PostPreviewEmbedViewBinding bind(@NonNull View view) {
        View a10;
        int i10 = R.id.background_image;
        SimpleDraweeView simpleDraweeView = (SimpleDraweeView) a.a(view, i10);
        if (simpleDraweeView != null) {
            i10 = R.id.cover_image;
            SimpleDraweeView simpleDraweeView2 = (SimpleDraweeView) a.a(view, i10);
            if (simpleDraweeView2 != null) {
                i10 = R.id.cover_image_overlay_button;
                DCDButton dCDButton = (DCDButton) a.a(view, i10);
                if (dCDButton != null) {
                    i10 = R.id.cta;
                    DCDButton dCDButton2 = (DCDButton) a.a(view, i10);
                    if (dCDButton2 != null) {
                        i10 = R.id.footer;
                        SimpleDraweeSpanTextView simpleDraweeSpanTextView = (SimpleDraweeSpanTextView) a.a(view, i10);
                        if (simpleDraweeSpanTextView != null && (a10 = a.a(view, (i10 = R.id.header_divider))) != null) {
                            i10 = R.id.image_blur_bg;
                            FrameLayout frameLayout = (FrameLayout) a.a(view, i10);
                            if (frameLayout != null) {
                                i10 = R.id.spoiler;
                                SpoilerView spoilerView = (SpoilerView) a.a(view, i10);
                                if (spoilerView != null) {
                                    i10 = R.id.subtitle;
                                    TextView textView = (TextView) a.a(view, i10);
                                    if (textView != null) {
                                        i10 = R.id.title;
                                        TextView textView2 = (TextView) a.a(view, i10);
                                        if (textView2 != null) {
                                            return new PostPreviewEmbedViewBinding(view, simpleDraweeView, simpleDraweeView2, dCDButton, dCDButton2, simpleDraweeSpanTextView, a10, frameLayout, spoilerView, textView, textView2);
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
    public static PostPreviewEmbedViewBinding inflate(@NonNull LayoutInflater layoutInflater, @NonNull ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(R.layout.post_preview_embed_view, viewGroup);
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
