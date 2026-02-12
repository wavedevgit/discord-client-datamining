package com.swmansion.rnscreens;

import androidx.activity.OnBackPressedCallback;
import androidx.activity.OnBackPressedDispatcher;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentActivity;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final Fragment f19284a;

    /* renamed from: b  reason: collision with root package name */
    private final OnBackPressedCallback f19285b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f19286c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f19287d;

    public i(Fragment fragment, OnBackPressedCallback onBackPressedCallback) {
        Intrinsics.checkNotNullParameter(fragment, "fragment");
        Intrinsics.checkNotNullParameter(onBackPressedCallback, "onBackPressedCallback");
        this.f19284a = fragment;
        this.f19285b = onBackPressedCallback;
        this.f19287d = true;
    }

    public final boolean a() {
        return this.f19287d;
    }

    public final void b() {
        OnBackPressedDispatcher onBackPressedDispatcher;
        if (!this.f19286c && this.f19287d) {
            FragmentActivity activity = this.f19284a.getActivity();
            if (activity != null && (onBackPressedDispatcher = activity.getOnBackPressedDispatcher()) != null) {
                onBackPressedDispatcher.h(this.f19284a, this.f19285b);
            }
            this.f19286c = true;
        }
    }

    public final void c() {
        if (this.f19286c) {
            this.f19285b.remove();
            this.f19286c = false;
        }
    }

    public final void d(boolean z10) {
        this.f19287d = z10;
    }
}
