package com.discord.chat.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.viewbinding.ViewBinding;
import com.discord.chat.R;
import com.facebook.drawee.view.SimpleDraweeView;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class InfoLinkViewBinding implements ViewBinding {
    @NonNull
    public final TextView description;
    @NonNull
    public final SimpleDraweeView icon;
    @NonNull
    public final ConstraintLayout infoLinkContainer;
    @NonNull
    private final View rootView;

    private InfoLinkViewBinding(@NonNull View view, @NonNull TextView textView, @NonNull SimpleDraweeView simpleDraweeView, @NonNull ConstraintLayout constraintLayout) {
        this.rootView = view;
        this.description = textView;
        this.icon = simpleDraweeView;
        this.infoLinkContainer = constraintLayout;
    }

    @NonNull
    public static InfoLinkViewBinding bind(@NonNull View view) {
        int i10 = R.id.description;
        TextView textView = (TextView) a.a(view, i10);
        if (textView != null) {
            i10 = R.id.icon;
            SimpleDraweeView simpleDraweeView = (SimpleDraweeView) a.a(view, i10);
            if (simpleDraweeView != null) {
                i10 = R.id.info_link_container;
                ConstraintLayout constraintLayout = (ConstraintLayout) a.a(view, i10);
                if (constraintLayout != null) {
                    return new InfoLinkViewBinding(view, textView, simpleDraweeView, constraintLayout);
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    @NonNull
    public static InfoLinkViewBinding inflate(@NonNull LayoutInflater layoutInflater, @NonNull ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(R.layout.info_link_view, viewGroup);
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
