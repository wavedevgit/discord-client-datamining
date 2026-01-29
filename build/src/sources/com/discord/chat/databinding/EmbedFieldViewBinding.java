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
public final class EmbedFieldViewBinding implements ViewBinding {
    @NonNull
    public final SimpleDraweeSpanTextView name;
    @NonNull
    private final View rootView;
    @NonNull
    public final SimpleDraweeSpanTextView value;

    private EmbedFieldViewBinding(@NonNull View view, @NonNull SimpleDraweeSpanTextView simpleDraweeSpanTextView, @NonNull SimpleDraweeSpanTextView simpleDraweeSpanTextView2) {
        this.rootView = view;
        this.name = simpleDraweeSpanTextView;
        this.value = simpleDraweeSpanTextView2;
    }

    @NonNull
    public static EmbedFieldViewBinding bind(@NonNull View view) {
        int i10 = R.id.name;
        SimpleDraweeSpanTextView simpleDraweeSpanTextView = (SimpleDraweeSpanTextView) a.a(view, i10);
        if (simpleDraweeSpanTextView != null) {
            i10 = R.id.value;
            SimpleDraweeSpanTextView simpleDraweeSpanTextView2 = (SimpleDraweeSpanTextView) a.a(view, i10);
            if (simpleDraweeSpanTextView2 != null) {
                return new EmbedFieldViewBinding(view, simpleDraweeSpanTextView, simpleDraweeSpanTextView2);
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    @NonNull
    public static EmbedFieldViewBinding inflate(@NonNull LayoutInflater layoutInflater, @NonNull ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(R.layout.embed_field_view, viewGroup);
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
