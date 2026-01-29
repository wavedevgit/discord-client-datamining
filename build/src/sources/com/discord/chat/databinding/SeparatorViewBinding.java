package com.discord.chat.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.viewbinding.ViewBinding;
import com.discord.chat.R;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class SeparatorViewBinding implements ViewBinding {
    @NonNull
    public final View leftBar;
    @NonNull
    public final TextView middleText;
    @NonNull
    public final View rightBar;
    @NonNull
    private final View rootView;

    private SeparatorViewBinding(@NonNull View view, @NonNull View view2, @NonNull TextView textView, @NonNull View view3) {
        this.rootView = view;
        this.leftBar = view2;
        this.middleText = textView;
        this.rightBar = view3;
    }

    @NonNull
    public static SeparatorViewBinding bind(@NonNull View view) {
        View a10;
        int i10 = R.id.left_bar;
        View a11 = a.a(view, i10);
        if (a11 != null) {
            i10 = R.id.middle_text;
            TextView textView = (TextView) a.a(view, i10);
            if (textView != null && (a10 = a.a(view, (i10 = R.id.right_bar))) != null) {
                return new SeparatorViewBinding(view, a11, textView, a10);
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    @NonNull
    public static SeparatorViewBinding inflate(@NonNull LayoutInflater layoutInflater, @NonNull ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(R.layout.separator_view, viewGroup);
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
