package com.discord.chat.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.ImageView;
import androidx.annotation.NonNull;
import androidx.viewbinding.ViewBinding;
import com.discord.chat.R;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class RoleDotViewBinding implements ViewBinding {
    @NonNull
    public final FrameLayout roleDotViewBackground;
    @NonNull
    public final ImageView roleDotViewDot;
    @NonNull
    private final View rootView;

    private RoleDotViewBinding(@NonNull View view, @NonNull FrameLayout frameLayout, @NonNull ImageView imageView) {
        this.rootView = view;
        this.roleDotViewBackground = frameLayout;
        this.roleDotViewDot = imageView;
    }

    @NonNull
    public static RoleDotViewBinding bind(@NonNull View view) {
        int i10 = R.id.role_dot_view_background;
        FrameLayout frameLayout = (FrameLayout) a.a(view, i10);
        if (frameLayout != null) {
            i10 = R.id.role_dot_view_dot;
            ImageView imageView = (ImageView) a.a(view, i10);
            if (imageView != null) {
                return new RoleDotViewBinding(view, frameLayout, imageView);
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    @NonNull
    public static RoleDotViewBinding inflate(@NonNull LayoutInflater layoutInflater, @NonNull ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(R.layout.role_dot_view, viewGroup);
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
