package com.discord.chat.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.viewbinding.ViewBinding;
import com.discord.chat.R;
import com.facebook.drawee.view.SimpleDraweeView;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class ForwardBreadcrumbViewBinding implements ViewBinding {
    @NonNull
    public final SimpleDraweeView arrow;
    @NonNull
    public final SimpleDraweeView icon;
    @NonNull
    public final TextView label;
    @NonNull
    private final View rootView;
    @NonNull
    public final TextView separator;
    @NonNull
    public final TextView timestamp;

    private ForwardBreadcrumbViewBinding(@NonNull View view, @NonNull SimpleDraweeView simpleDraweeView, @NonNull SimpleDraweeView simpleDraweeView2, @NonNull TextView textView, @NonNull TextView textView2, @NonNull TextView textView3) {
        this.rootView = view;
        this.arrow = simpleDraweeView;
        this.icon = simpleDraweeView2;
        this.label = textView;
        this.separator = textView2;
        this.timestamp = textView3;
    }

    @NonNull
    public static ForwardBreadcrumbViewBinding bind(@NonNull View view) {
        int i10 = R.id.arrow;
        SimpleDraweeView simpleDraweeView = (SimpleDraweeView) a.a(view, i10);
        if (simpleDraweeView != null) {
            i10 = R.id.icon;
            SimpleDraweeView simpleDraweeView2 = (SimpleDraweeView) a.a(view, i10);
            if (simpleDraweeView2 != null) {
                i10 = R.id.label;
                TextView textView = (TextView) a.a(view, i10);
                if (textView != null) {
                    i10 = R.id.separator;
                    TextView textView2 = (TextView) a.a(view, i10);
                    if (textView2 != null) {
                        i10 = R.id.timestamp;
                        TextView textView3 = (TextView) a.a(view, i10);
                        if (textView3 != null) {
                            return new ForwardBreadcrumbViewBinding(view, simpleDraweeView, simpleDraweeView2, textView, textView2, textView3);
                        }
                    }
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    @NonNull
    public static ForwardBreadcrumbViewBinding inflate(@NonNull LayoutInflater layoutInflater, @NonNull ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(R.layout.forward_breadcrumb_view, viewGroup);
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
