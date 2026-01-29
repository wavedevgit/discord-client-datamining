package com.discord.chat.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.annotation.NonNull;
import androidx.viewbinding.ViewBinding;
import com.discord.chat.R;
import com.discord.chat.presentation.message.MessageAccessoriesView;
import com.facebook.drawee.view.SimpleDraweeView;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class SystemMessageViewBinding implements ViewBinding {
    @NonNull
    public final MessageAccessoriesView accessoriesView;
    @NonNull
    public final SimpleDraweeView icon;
    @NonNull
    private final View rootView;

    private SystemMessageViewBinding(@NonNull View view, @NonNull MessageAccessoriesView messageAccessoriesView, @NonNull SimpleDraweeView simpleDraweeView) {
        this.rootView = view;
        this.accessoriesView = messageAccessoriesView;
        this.icon = simpleDraweeView;
    }

    @NonNull
    public static SystemMessageViewBinding bind(@NonNull View view) {
        int i10 = R.id.accessories_view;
        MessageAccessoriesView messageAccessoriesView = (MessageAccessoriesView) a.a(view, i10);
        if (messageAccessoriesView != null) {
            i10 = R.id.icon;
            SimpleDraweeView simpleDraweeView = (SimpleDraweeView) a.a(view, i10);
            if (simpleDraweeView != null) {
                return new SystemMessageViewBinding(view, messageAccessoriesView, simpleDraweeView);
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    @NonNull
    public static SystemMessageViewBinding inflate(@NonNull LayoutInflater layoutInflater, @NonNull ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(R.layout.system_message_view, viewGroup);
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
