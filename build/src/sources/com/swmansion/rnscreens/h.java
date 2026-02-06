package com.swmansion.rnscreens;

import androidx.activity.OnBackPressedCallback;
import androidx.activity.OnBackPressedDispatcher;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentActivity;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final Fragment f18270a;

    /* renamed from: b  reason: collision with root package name */
    private final OnBackPressedCallback f18271b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f18272c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f18273d;

    public h(Fragment fragment, OnBackPressedCallback onBackPressedCallback) {
        Intrinsics.checkNotNullParameter(fragment, "fragment");
        Intrinsics.checkNotNullParameter(onBackPressedCallback, "onBackPressedCallback");
        this.f18270a = fragment;
        this.f18271b = onBackPressedCallback;
        this.f18273d = true;
    }

    public final boolean a() {
        return this.f18273d;
    }

    public final void b() {
        OnBackPressedDispatcher onBackPressedDispatcher;
        if (!this.f18272c && this.f18273d) {
            FragmentActivity activity = this.f18270a.getActivity();
            if (activity != null && (onBackPressedDispatcher = activity.getOnBackPressedDispatcher()) != null) {
                onBackPressedDispatcher.h(this.f18270a, this.f18271b);
            }
            this.f18272c = true;
        }
    }

    public final void c() {
        if (this.f18272c) {
            this.f18271b.remove();
            this.f18272c = false;
        }
    }

    public final void d(boolean z10) {
        this.f18273d = z10;
    }
}
