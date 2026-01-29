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
public final class MessageComponentSectionViewBinding implements ViewBinding {
    @NonNull
    private final View rootView;
    @NonNull
    public final ComponentFailedLabelViewBinding sectionComponentViewGroupErrorRow;
    @NonNull
    public final FlexboxLayout sectionLayoutBox;

    private MessageComponentSectionViewBinding(@NonNull View view, @NonNull ComponentFailedLabelViewBinding componentFailedLabelViewBinding, @NonNull FlexboxLayout flexboxLayout) {
        this.rootView = view;
        this.sectionComponentViewGroupErrorRow = componentFailedLabelViewBinding;
        this.sectionLayoutBox = flexboxLayout;
    }

    @NonNull
    public static MessageComponentSectionViewBinding bind(@NonNull View view) {
        int i10 = R.id.section_component_view_group_error_row;
        View a10 = a.a(view, i10);
        if (a10 != null) {
            ComponentFailedLabelViewBinding bind = ComponentFailedLabelViewBinding.bind(a10);
            int i11 = R.id.section_layout_box;
            FlexboxLayout flexboxLayout = (FlexboxLayout) a.a(view, i11);
            if (flexboxLayout != null) {
                return new MessageComponentSectionViewBinding(view, bind, flexboxLayout);
            }
            i10 = i11;
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    @NonNull
    public static MessageComponentSectionViewBinding inflate(@NonNull LayoutInflater layoutInflater, @NonNull ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(R.layout.message_component_section_view, viewGroup);
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
