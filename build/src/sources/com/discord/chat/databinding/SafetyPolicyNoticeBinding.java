package com.discord.chat.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.viewbinding.ViewBinding;
import com.discord.chat.R;
import com.facebook.drawee.view.SimpleDraweeView;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class SafetyPolicyNoticeBinding implements ViewBinding {
    @NonNull
    public final TextView description;
    @NonNull
    public final LinearLayout footer;
    @NonNull
    public final SimpleDraweeView icon;
    @NonNull
    public final TextView learnMore;
    @NonNull
    private final View rootView;
    @NonNull
    public final TextView subtitleText;
    @NonNull
    public final TextView title;

    private SafetyPolicyNoticeBinding(@NonNull View view, @NonNull TextView textView, @NonNull LinearLayout linearLayout, @NonNull SimpleDraweeView simpleDraweeView, @NonNull TextView textView2, @NonNull TextView textView3, @NonNull TextView textView4) {
        this.rootView = view;
        this.description = textView;
        this.footer = linearLayout;
        this.icon = simpleDraweeView;
        this.learnMore = textView2;
        this.subtitleText = textView3;
        this.title = textView4;
    }

    @NonNull
    public static SafetyPolicyNoticeBinding bind(@NonNull View view) {
        int i10 = R.id.description;
        TextView textView = (TextView) a.a(view, i10);
        if (textView != null) {
            i10 = R.id.footer;
            LinearLayout linearLayout = (LinearLayout) a.a(view, i10);
            if (linearLayout != null) {
                i10 = R.id.icon;
                SimpleDraweeView simpleDraweeView = (SimpleDraweeView) a.a(view, i10);
                if (simpleDraweeView != null) {
                    i10 = R.id.learn_more;
                    TextView textView2 = (TextView) a.a(view, i10);
                    if (textView2 != null) {
                        i10 = R.id.subtitle_text;
                        TextView textView3 = (TextView) a.a(view, i10);
                        if (textView3 != null) {
                            i10 = R.id.title;
                            TextView textView4 = (TextView) a.a(view, i10);
                            if (textView4 != null) {
                                return new SafetyPolicyNoticeBinding(view, textView, linearLayout, simpleDraweeView, textView2, textView3, textView4);
                            }
                        }
                    }
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    @NonNull
    public static SafetyPolicyNoticeBinding inflate(@NonNull LayoutInflater layoutInflater, @NonNull ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(R.layout.safety_policy_notice, viewGroup);
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
