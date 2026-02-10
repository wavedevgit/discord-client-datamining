package com.swmansion.rnscreens;

import androidx.activity.OnBackPressedCallback;
import androidx.activity.OnBackPressedDispatcher;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentActivity;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final Fragment f19283a;

    /* renamed from: b  reason: collision with root package name */
    private final OnBackPressedCallback f19284b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f19285c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f19286d;

    public i(Fragment fragment, OnBackPressedCallback onBackPressedCallback) {
        Intrinsics.checkNotNullParameter(fragment, "fragment");
        Intrinsics.checkNotNullParameter(onBackPressedCallback, "onBackPressedCallback");
        this.f19283a = fragment;
        this.f19284b = onBackPressedCallback;
        this.f19286d = true;
    }

    public final boolean a() {
        return this.f19286d;
    }

    public final void b() {
        OnBackPressedDispatcher onBackPressedDispatcher;
        if (!this.f19285c && this.f19286d) {
            FragmentActivity activity = this.f19283a.getActivity();
            if (activity != null && (onBackPressedDispatcher = activity.getOnBackPressedDispatcher()) != null) {
                onBackPressedDispatcher.h(this.f19283a, this.f19284b);
            }
            this.f19285c = true;
        }
    }

    public final void c() {
        if (this.f19285c) {
            this.f19284b.remove();
            this.f19285c = false;
        }
    }

    public final void d(boolean z10) {
        this.f19286d = z10;
    }
}
