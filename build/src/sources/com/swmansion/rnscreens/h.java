package com.swmansion.rnscreens;

import androidx.activity.OnBackPressedCallback;
import androidx.activity.OnBackPressedDispatcher;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentActivity;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final Fragment f18902a;

    /* renamed from: b  reason: collision with root package name */
    private final OnBackPressedCallback f18903b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f18904c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f18905d;

    public h(Fragment fragment, OnBackPressedCallback onBackPressedCallback) {
        Intrinsics.checkNotNullParameter(fragment, "fragment");
        Intrinsics.checkNotNullParameter(onBackPressedCallback, "onBackPressedCallback");
        this.f18902a = fragment;
        this.f18903b = onBackPressedCallback;
        this.f18905d = true;
    }

    public final boolean a() {
        return this.f18905d;
    }

    public final void b() {
        OnBackPressedDispatcher onBackPressedDispatcher;
        if (!this.f18904c && this.f18905d) {
            FragmentActivity activity = this.f18902a.getActivity();
            if (activity != null && (onBackPressedDispatcher = activity.getOnBackPressedDispatcher()) != null) {
                onBackPressedDispatcher.h(this.f18902a, this.f18903b);
            }
            this.f18904c = true;
        }
    }

    public final void c() {
        if (this.f18904c) {
            this.f18903b.remove();
            this.f18904c = false;
        }
    }

    public final void d(boolean z10) {
        this.f18905d = z10;
    }
}
