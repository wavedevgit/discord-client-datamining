package com.discord.chat.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.annotation.NonNull;
import androidx.viewbinding.ViewBinding;
import com.discord.chat.R;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class MessageComponentSeparatorDisplayViewBinding implements ViewBinding {
    @NonNull
    public final View divider;
    @NonNull
    private final View rootView;

    private MessageComponentSeparatorDisplayViewBinding(@NonNull View view, @NonNull View view2) {
        this.rootView = view;
        this.divider = view2;
    }

    @NonNull
    public static MessageComponentSeparatorDisplayViewBinding bind(@NonNull View view) {
        int i10 = R.id.divider;
        View a10 = a.a(view, i10);
        if (a10 != null) {
            return new MessageComponentSeparatorDisplayViewBinding(view, a10);
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    @NonNull
    public static MessageComponentSeparatorDisplayViewBinding inflate(@NonNull LayoutInflater layoutInflater, @NonNull ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(R.layout.message_component_separator_display_view, viewGroup);
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
