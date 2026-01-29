package com.discord.chat.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;
import androidx.viewbinding.ViewBinding;
import com.discord.chat.R;
import com.facebook.drawee.view.SimpleDraweeView;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class BlockedMessageGroupViewBinding implements ViewBinding {
    @NonNull
    public final TextView blockedMessageGroupButton;
    @NonNull
    public final RecyclerView blockedMessages;
    @NonNull
    public final SimpleDraweeView closeIcon;
    @NonNull
    private final View rootView;

    private BlockedMessageGroupViewBinding(@NonNull View view, @NonNull TextView textView, @NonNull RecyclerView recyclerView, @NonNull SimpleDraweeView simpleDraweeView) {
        this.rootView = view;
        this.blockedMessageGroupButton = textView;
        this.blockedMessages = recyclerView;
        this.closeIcon = simpleDraweeView;
    }

    @NonNull
    public static BlockedMessageGroupViewBinding bind(@NonNull View view) {
        int i10 = R.id.blocked_message_group_button;
        TextView textView = (TextView) a.a(view, i10);
        if (textView != null) {
            i10 = R.id.blocked_messages;
            RecyclerView recyclerView = (RecyclerView) a.a(view, i10);
            if (recyclerView != null) {
                i10 = R.id.close_icon;
                SimpleDraweeView simpleDraweeView = (SimpleDraweeView) a.a(view, i10);
                if (simpleDraweeView != null) {
                    return new BlockedMessageGroupViewBinding(view, textView, recyclerView, simpleDraweeView);
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    @NonNull
    public static BlockedMessageGroupViewBinding inflate(@NonNull LayoutInflater layoutInflater, @NonNull ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(R.layout.blocked_message_group_view, viewGroup);
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
