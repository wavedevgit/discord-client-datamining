package com.discord.chat.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import androidx.annotation.NonNull;
import androidx.viewbinding.ViewBinding;
import com.discord.chat.R;
import com.facebook.drawee.view.SimpleDraweeView;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class IconButtonViewBinding implements ViewBinding {
    @NonNull
    public final SimpleDraweeView iconButton;
    @NonNull
    public final FrameLayout iconContainer;
    @NonNull
    private final View rootView;

    private IconButtonViewBinding(@NonNull View view, @NonNull SimpleDraweeView simpleDraweeView, @NonNull FrameLayout frameLayout) {
        this.rootView = view;
        this.iconButton = simpleDraweeView;
        this.iconContainer = frameLayout;
    }

    @NonNull
    public static IconButtonViewBinding bind(@NonNull View view) {
        int i10 = R.id.icon_button;
        SimpleDraweeView simpleDraweeView = (SimpleDraweeView) a.a(view, i10);
        if (simpleDraweeView != null) {
            i10 = R.id.icon_container;
            FrameLayout frameLayout = (FrameLayout) a.a(view, i10);
            if (frameLayout != null) {
                return new IconButtonViewBinding(view, simpleDraweeView, frameLayout);
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    @NonNull
    public static IconButtonViewBinding inflate(@NonNull LayoutInflater layoutInflater, @NonNull ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(R.layout.icon_button_view, viewGroup);
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
