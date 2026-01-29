package com.discord.chat.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.annotation.NonNull;
import androidx.viewbinding.ViewBinding;
import com.discord.chat.R;
import com.google.android.flexbox.FlexboxLayout;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class MessageComponentActionRowViewBinding implements ViewBinding {
    @NonNull
    public final FlexboxLayout actionRowComponentViewGroup;
    @NonNull
    public final ComponentFailedLabelViewBinding actionRowComponentViewGroupErrorRow;
    @NonNull
    private final View rootView;

    private MessageComponentActionRowViewBinding(@NonNull View view, @NonNull FlexboxLayout flexboxLayout, @NonNull ComponentFailedLabelViewBinding componentFailedLabelViewBinding) {
        this.rootView = view;
        this.actionRowComponentViewGroup = flexboxLayout;
        this.actionRowComponentViewGroupErrorRow = componentFailedLabelViewBinding;
    }

    @NonNull
    public static MessageComponentActionRowViewBinding bind(@NonNull View view) {
        View a10;
        int i10 = R.id.action_row_component_view_group;
        FlexboxLayout flexboxLayout = (FlexboxLayout) a.a(view, i10);
        if (flexboxLayout != null && (a10 = a.a(view, (i10 = R.id.action_row_component_view_group_error_row))) != null) {
            return new MessageComponentActionRowViewBinding(view, flexboxLayout, ComponentFailedLabelViewBinding.bind(a10));
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    @NonNull
    public static MessageComponentActionRowViewBinding inflate(@NonNull LayoutInflater layoutInflater, @NonNull ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(R.layout.message_component_action_row_view, viewGroup);
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
