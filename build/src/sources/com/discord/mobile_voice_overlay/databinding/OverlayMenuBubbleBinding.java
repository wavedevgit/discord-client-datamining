package com.discord.mobile_voice_overlay.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;
import androidx.viewbinding.ViewBinding;
import com.discord.mobile_voice_overlay.R;
import com.discord.mobile_voice_overlay.views.OverlayMenuView;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class OverlayMenuBubbleBinding implements ViewBinding {
    @NonNull
    public final LinearLayout overlayHeader;
    @NonNull
    public final View overlayLinkedAnchorView;
    @NonNull
    public final TextView overlayMembersOverflowText;
    @NonNull
    public final RecyclerView overlayMembersRecycler;
    @NonNull
    public final OverlayMenuView overlayMenu;
    @NonNull
    private final LinearLayout rootView;

    private OverlayMenuBubbleBinding(@NonNull LinearLayout linearLayout, @NonNull LinearLayout linearLayout2, @NonNull View view, @NonNull TextView textView, @NonNull RecyclerView recyclerView, @NonNull OverlayMenuView overlayMenuView) {
        this.rootView = linearLayout;
        this.overlayHeader = linearLayout2;
        this.overlayLinkedAnchorView = view;
        this.overlayMembersOverflowText = textView;
        this.overlayMembersRecycler = recyclerView;
        this.overlayMenu = overlayMenuView;
    }

    @NonNull
    public static OverlayMenuBubbleBinding bind(@NonNull View view) {
        View a10;
        int i10 = R.id.overlay_header;
        LinearLayout linearLayout = (LinearLayout) a.a(view, i10);
        if (linearLayout != null && (a10 = a.a(view, (i10 = R.id.overlay_linked_anchor_view))) != null) {
            i10 = R.id.overlay_members_overflow_text;
            TextView textView = (TextView) a.a(view, i10);
            if (textView != null) {
                i10 = R.id.overlay_members_recycler;
                RecyclerView recyclerView = (RecyclerView) a.a(view, i10);
                if (recyclerView != null) {
                    i10 = R.id.overlay_menu;
                    OverlayMenuView overlayMenuView = (OverlayMenuView) a.a(view, i10);
                    if (overlayMenuView != null) {
                        return new OverlayMenuBubbleBinding((LinearLayout) view, linearLayout, a10, textView, recyclerView, overlayMenuView);
                    }
                }
            }
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    @NonNull
    public static OverlayMenuBubbleBinding inflate(@NonNull LayoutInflater layoutInflater) {
        return inflate(layoutInflater, null, false);
    }

    @NonNull
    public static OverlayMenuBubbleBinding inflate(@NonNull LayoutInflater layoutInflater, ViewGroup viewGroup, boolean z10) {
        View inflate = layoutInflater.inflate(R.layout.overlay_menu_bubble, viewGroup, false);
        if (z10) {
            viewGroup.addView(inflate);
        }
        return bind(inflate);
    }

    @Override // androidx.viewbinding.ViewBinding
    @NonNull
    public LinearLayout getRoot() {
        return this.rootView;
    }
}
