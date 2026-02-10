package com.swmansion.rnscreens;

import android.content.Context;
import android.view.View;
import androidx.activity.OnBackPressedCallback;
import androidx.appcompat.widget.SearchView;
import androidx.fragment.app.Fragment;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d extends SearchView {
    private SearchView.l B0;
    private View.OnClickListener C0;
    private OnBackPressedCallback D0;
    private final i E0;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends OnBackPressedCallback {
        a() {
            super(true);
        }

        @Override // androidx.activity.OnBackPressedCallback
        public void handleOnBackPressed() {
            d.this.setIconified(true);
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public d(Context context, Fragment fragment) {
        super(context);
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(fragment, "fragment");
        a aVar = new a();
        this.D0 = aVar;
        this.E0 = new i(fragment, aVar);
        super.setOnSearchClickListener(new View.OnClickListener() { // from class: com.swmansion.rnscreens.b
            @Override // android.view.View.OnClickListener
            public final void onClick(View view) {
                d.m0(d.this, view);
            }
        });
        super.setOnCloseListener(new SearchView.l() { // from class: com.swmansion.rnscreens.c
            @Override // androidx.appcompat.widget.SearchView.l
            public final boolean a() {
                boolean n02;
                n02 = d.n0(d.this);
                return n02;
            }
        });
        setMaxWidth(Integer.MAX_VALUE);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void m0(d dVar, View view) {
        View.OnClickListener onClickListener = dVar.C0;
        if (onClickListener != null) {
            onClickListener.onClick(view);
        }
        dVar.E0.b();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean n0(d dVar) {
        boolean z10;
        SearchView.l lVar = dVar.B0;
        if (lVar != null) {
            z10 = lVar.a();
        } else {
            z10 = false;
        }
        dVar.E0.c();
        return z10;
    }

    public final boolean getOverrideBackAction() {
        return this.E0.a();
    }

    public final void o0() {
        p0();
        setIconified(true);
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        if (!J()) {
            this.E0.b();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.appcompat.widget.SearchView, android.view.ViewGroup, android.view.View
    public void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        this.E0.c();
    }

    public final void p0() {
        b0("", false);
    }

    public final void q0() {
        setIconified(false);
        requestFocusFromTouch();
    }

    @Override // androidx.appcompat.widget.SearchView
    public void setOnCloseListener(SearchView.l lVar) {
        this.B0 = lVar;
    }

    @Override // androidx.appcompat.widget.SearchView
    public void setOnSearchClickListener(View.OnClickListener onClickListener) {
        this.C0 = onClickListener;
    }

    public final void setOverrideBackAction(boolean z10) {
        this.E0.d(z10);
    }

    public final void setText(@NotNull String text) {
        Intrinsics.checkNotNullParameter(text, "text");
        b0(text, false);
    }
}
