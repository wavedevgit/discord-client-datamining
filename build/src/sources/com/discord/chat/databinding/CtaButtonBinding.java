package com.discord.chat.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.annotation.NonNull;
import androidx.viewbinding.ViewBinding;
import com.discord.chat.R;
import com.discord.core.DCDButton;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class CtaButtonBinding implements ViewBinding {
    @NonNull
    public final DCDButton ctaButton;
    @NonNull
    private final View rootView;

    private CtaButtonBinding(@NonNull View view, @NonNull DCDButton dCDButton) {
        this.rootView = view;
        this.ctaButton = dCDButton;
    }

    @NonNull
    public static CtaButtonBinding bind(@NonNull View view) {
        int i10 = R.id.ctaButton;
        DCDButton dCDButton = (DCDButton) a.a(view, i10);
        if (dCDButton != null) {
            return new CtaButtonBinding(view, dCDButton);
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    @NonNull
    public static CtaButtonBinding inflate(@NonNull LayoutInflater layoutInflater, @NonNull ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(R.layout.cta_button, viewGroup);
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
