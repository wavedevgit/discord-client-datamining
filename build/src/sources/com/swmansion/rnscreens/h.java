package com.swmansion.rnscreens;

import androidx.activity.OnBackPressedCallback;
import androidx.activity.OnBackPressedDispatcher;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentActivity;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final Fragment f18410a;

    /* renamed from: b  reason: collision with root package name */
    private final OnBackPressedCallback f18411b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f18412c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f18413d;

    public h(Fragment fragment, OnBackPressedCallback onBackPressedCallback) {
        Intrinsics.checkNotNullParameter(fragment, "fragment");
        Intrinsics.checkNotNullParameter(onBackPressedCallback, "onBackPressedCallback");
        this.f18410a = fragment;
        this.f18411b = onBackPressedCallback;
        this.f18413d = true;
    }

    public final boolean a() {
        return this.f18413d;
    }

    public final void b() {
        OnBackPressedDispatcher onBackPressedDispatcher;
        if (!this.f18412c && this.f18413d) {
            FragmentActivity activity = this.f18410a.getActivity();
            if (activity != null && (onBackPressedDispatcher = activity.getOnBackPressedDispatcher()) != null) {
                onBackPressedDispatcher.h(this.f18410a, this.f18411b);
            }
            this.f18412c = true;
        }
    }

    public final void c() {
        if (this.f18412c) {
            this.f18411b.remove();
            this.f18412c = false;
        }
    }

    public final void d(boolean z10) {
        this.f18413d = z10;
    }
}
