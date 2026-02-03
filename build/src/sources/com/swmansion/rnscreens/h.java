package com.swmansion.rnscreens;

import androidx.activity.OnBackPressedCallback;
import androidx.activity.OnBackPressedDispatcher;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentActivity;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final Fragment f17884a;

    /* renamed from: b  reason: collision with root package name */
    private final OnBackPressedCallback f17885b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f17886c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f17887d;

    public h(Fragment fragment, OnBackPressedCallback onBackPressedCallback) {
        Intrinsics.checkNotNullParameter(fragment, "fragment");
        Intrinsics.checkNotNullParameter(onBackPressedCallback, "onBackPressedCallback");
        this.f17884a = fragment;
        this.f17885b = onBackPressedCallback;
        this.f17887d = true;
    }

    public final boolean a() {
        return this.f17887d;
    }

    public final void b() {
        OnBackPressedDispatcher onBackPressedDispatcher;
        if (!this.f17886c && this.f17887d) {
            FragmentActivity activity = this.f17884a.getActivity();
            if (activity != null && (onBackPressedDispatcher = activity.getOnBackPressedDispatcher()) != null) {
                onBackPressedDispatcher.h(this.f17884a, this.f17885b);
            }
            this.f17886c = true;
        }
    }

    public final void c() {
        if (this.f17886c) {
            this.f17885b.remove();
            this.f17886c = false;
        }
    }

    public final void d(boolean z10) {
        this.f17887d = z10;
    }
}
