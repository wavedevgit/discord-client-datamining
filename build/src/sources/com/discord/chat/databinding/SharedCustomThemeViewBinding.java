package com.discord.chat.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.viewbinding.ViewBinding;
import com.discord.chat.R;
import com.discord.chat.presentation.message.view.customthemes.ThemePreviewView;
import com.discord.core.DCDButton;
import com.google.android.flexbox.FlexboxLayout;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class SharedCustomThemeViewBinding implements ViewBinding {
    @NonNull
    public final TextView createdBy;
    @NonNull
    public final FlexboxLayout createdByContainer;
    @NonNull
    public final FlexboxLayout heading;
    @NonNull
    public final DCDButton previewBtn;
    @NonNull
    public final TextView previewHeading;
    @NonNull
    private final View rootView;
    @NonNull
    public final ThemePreviewView themePreview;

    private SharedCustomThemeViewBinding(@NonNull View view, @NonNull TextView textView, @NonNull FlexboxLayout flexboxLayout, @NonNull FlexboxLayout flexboxLayout2, @NonNull DCDButton dCDButton, @NonNull TextView textView2, @NonNull ThemePreviewView themePreviewView) {
        this.rootView = view;
        this.createdBy = textView;
        this.createdByContainer = flexboxLayout;
        this.heading = flexboxLayout2;
        this.previewBtn = dCDButton;
        this.previewHeading = textView2;
        this.themePreview = themePreviewView;
    }

    @NonNull
    public static SharedCustomThemeViewBinding bind(@NonNull View view) {
        int i10 = R.id.createdBy;
        TextView textView = (TextView) a.a(view, i10);
        if (textView != null) {
            i10 = R.id.createdByContainer;
            FlexboxLayout flexboxLayout = (FlexboxLayout) a.a(view, i10);
            if (flexboxLayout != null) {
                i10 = R.id.heading;
                FlexboxLayout flexboxLayout2 = (FlexboxLayout) a.a(view, i10);
                if (flexboxLayout2 != null) {
                    i10 = R.id.previewBtn;
                    DCDButton dCDButton = (DCDButton) a.a(view, i10);
                    if (dCDButton != null) {
                        i10 = R.id.previewHeading;
                        TextView textView2 = (TextView) a.a(view, i10);
                        if (textView2 != null) {
                            i10 = R.id.themePreview;
                            ThemePreviewView themePreviewView = (ThemePreviewView) a.a(view, i10);
                            if (themePreviewView != null) {
                                return new SharedCustomThemeViewBinding(view, textView, flexboxLayout, flexboxLayout2, dCDButton, textView2, themePreviewView);
                            }
                        }
                    }
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    @NonNull
    public static SharedCustomThemeViewBinding inflate(@NonNull LayoutInflater layoutInflater, @NonNull ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(R.layout.shared_custom_theme_view, viewGroup);
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
