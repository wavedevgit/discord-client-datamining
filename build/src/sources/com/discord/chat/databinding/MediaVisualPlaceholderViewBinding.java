package com.discord.chat.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.annotation.NonNull;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import com.discord.chat.R;
import com.facebook.drawee.view.SimpleDraweeView;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class MediaVisualPlaceholderViewBinding implements ViewBinding {
    @NonNull
    public final ConstraintLayout container;
    @NonNull
    public final SimpleDraweeView imageInvalid;
    @NonNull
    private final View rootView;

    private MediaVisualPlaceholderViewBinding(@NonNull View view, @NonNull ConstraintLayout constraintLayout, @NonNull SimpleDraweeView simpleDraweeView) {
        this.rootView = view;
        this.container = constraintLayout;
        this.imageInvalid = simpleDraweeView;
    }

    @NonNull
    public static MediaVisualPlaceholderViewBinding bind(@NonNull View view) {
        int i10 = R.id.container;
        ConstraintLayout constraintLayout = (ConstraintLayout) a.a(view, i10);
        if (constraintLayout != null) {
            i10 = R.id.image_invalid;
            SimpleDraweeView simpleDraweeView = (SimpleDraweeView) a.a(view, i10);
            if (simpleDraweeView != null) {
                return new MediaVisualPlaceholderViewBinding(view, constraintLayout, simpleDraweeView);
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    @NonNull
    public static MediaVisualPlaceholderViewBinding inflate(@NonNull LayoutInflater layoutInflater, @NonNull ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(R.layout.media_visual_placeholder_view, viewGroup);
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
