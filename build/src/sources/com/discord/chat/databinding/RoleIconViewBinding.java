package com.discord.chat.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.annotation.NonNull;
import androidx.viewbinding.ViewBinding;
import com.discord.chat.R;
import com.facebook.drawee.span.SimpleDraweeSpanTextView;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class RoleIconViewBinding implements ViewBinding {
    @NonNull
    public final SimpleDraweeSpanTextView roleIconViewUnicodeEmoji;
    @NonNull
    private final View rootView;

    private RoleIconViewBinding(@NonNull View view, @NonNull SimpleDraweeSpanTextView simpleDraweeSpanTextView) {
        this.rootView = view;
        this.roleIconViewUnicodeEmoji = simpleDraweeSpanTextView;
    }

    @NonNull
    public static RoleIconViewBinding bind(@NonNull View view) {
        int i10 = R.id.role_icon_view_unicode_emoji;
        SimpleDraweeSpanTextView simpleDraweeSpanTextView = (SimpleDraweeSpanTextView) a.a(view, i10);
        if (simpleDraweeSpanTextView != null) {
            return new RoleIconViewBinding(view, simpleDraweeSpanTextView);
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    @NonNull
    public static RoleIconViewBinding inflate(@NonNull LayoutInflater layoutInflater, @NonNull ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(R.layout.role_icon_view, viewGroup);
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
