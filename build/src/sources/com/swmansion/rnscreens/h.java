package com.swmansion.rnscreens;

import androidx.activity.OnBackPressedCallback;
import androidx.activity.OnBackPressedDispatcher;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentActivity;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final Fragment f18290a;

    /* renamed from: b  reason: collision with root package name */
    private final OnBackPressedCallback f18291b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f18292c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f18293d;

    public h(Fragment fragment, OnBackPressedCallback onBackPressedCallback) {
        Intrinsics.checkNotNullParameter(fragment, "fragment");
        Intrinsics.checkNotNullParameter(onBackPressedCallback, "onBackPressedCallback");
        this.f18290a = fragment;
        this.f18291b = onBackPressedCallback;
        this.f18293d = true;
    }

    public final boolean a() {
        return this.f18293d;
    }

    public final void b() {
        OnBackPressedDispatcher onBackPressedDispatcher;
        if (!this.f18292c && this.f18293d) {
            FragmentActivity activity = this.f18290a.getActivity();
            if (activity != null && (onBackPressedDispatcher = activity.getOnBackPressedDispatcher()) != null) {
                onBackPressedDispatcher.h(this.f18290a, this.f18291b);
            }
            this.f18292c = true;
        }
    }

    public final void c() {
        if (this.f18292c) {
            this.f18291b.remove();
            this.f18292c = false;
        }
    }

    public final void d(boolean z10) {
        this.f18293d = z10;
    }
}
