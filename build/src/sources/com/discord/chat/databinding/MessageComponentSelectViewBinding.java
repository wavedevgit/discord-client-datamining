package com.discord.chat.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewStub;
import androidx.annotation.NonNull;
import androidx.viewbinding.ViewBinding;
import com.discord.chat.R;
import com.facebook.drawee.span.SimpleDraweeSpanTextView;
import com.facebook.drawee.view.SimpleDraweeView;
import com.google.android.flexbox.FlexboxLayout;
import com.google.android.material.textview.MaterialTextView;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class MessageComponentSelectViewBinding implements ViewBinding {
    @NonNull
    public final ViewStub loadingDots;
    @NonNull
    private final View rootView;
    @NonNull
    public final SimpleDraweeView selectComponentChevron;
    @NonNull
    public final SimpleDraweeSpanTextView selectComponentSelectionIcon;
    @NonNull
    public final MaterialTextView selectComponentSelectionText;
    @NonNull
    public final FlexboxLayout selectComponentSelectionsRoot;

    private MessageComponentSelectViewBinding(@NonNull View view, @NonNull ViewStub viewStub, @NonNull SimpleDraweeView simpleDraweeView, @NonNull SimpleDraweeSpanTextView simpleDraweeSpanTextView, @NonNull MaterialTextView materialTextView, @NonNull FlexboxLayout flexboxLayout) {
        this.rootView = view;
        this.loadingDots = viewStub;
        this.selectComponentChevron = simpleDraweeView;
        this.selectComponentSelectionIcon = simpleDraweeSpanTextView;
        this.selectComponentSelectionText = materialTextView;
        this.selectComponentSelectionsRoot = flexboxLayout;
    }

    @NonNull
    public static MessageComponentSelectViewBinding bind(@NonNull View view) {
        int i10 = R.id.loading_dots;
        ViewStub viewStub = (ViewStub) a.a(view, i10);
        if (viewStub != null) {
            i10 = R.id.select_component_chevron;
            SimpleDraweeView simpleDraweeView = (SimpleDraweeView) a.a(view, i10);
            if (simpleDraweeView != null) {
                i10 = R.id.select_component_selection_icon;
                SimpleDraweeSpanTextView simpleDraweeSpanTextView = (SimpleDraweeSpanTextView) a.a(view, i10);
                if (simpleDraweeSpanTextView != null) {
                    i10 = R.id.select_component_selection_text;
                    MaterialTextView materialTextView = (MaterialTextView) a.a(view, i10);
                    if (materialTextView != null) {
                        i10 = R.id.select_component_selections_root;
                        FlexboxLayout flexboxLayout = (FlexboxLayout) a.a(view, i10);
                        if (flexboxLayout != null) {
                            return new MessageComponentSelectViewBinding(view, viewStub, simpleDraweeView, simpleDraweeSpanTextView, materialTextView, flexboxLayout);
                        }
                    }
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    @NonNull
    public static MessageComponentSelectViewBinding inflate(@NonNull LayoutInflater layoutInflater, @NonNull ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(R.layout.message_component_select_view, viewGroup);
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
