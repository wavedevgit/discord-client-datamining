package com.swmansion.rnscreens;

import androidx.activity.OnBackPressedCallback;
import androidx.activity.OnBackPressedDispatcher;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentActivity;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final Fragment f19269a;

    /* renamed from: b  reason: collision with root package name */
    private final OnBackPressedCallback f19270b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f19271c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f19272d;

    public h(Fragment fragment, OnBackPressedCallback onBackPressedCallback) {
        Intrinsics.checkNotNullParameter(fragment, "fragment");
        Intrinsics.checkNotNullParameter(onBackPressedCallback, "onBackPressedCallback");
        this.f19269a = fragment;
        this.f19270b = onBackPressedCallback;
        this.f19272d = true;
    }

    public final boolean a() {
        return this.f19272d;
    }

    public final void b() {
        OnBackPressedDispatcher onBackPressedDispatcher;
        if (!this.f19271c && this.f19272d) {
            FragmentActivity activity = this.f19269a.getActivity();
            if (activity != null && (onBackPressedDispatcher = activity.getOnBackPressedDispatcher()) != null) {
                onBackPressedDispatcher.h(this.f19269a, this.f19270b);
            }
            this.f19271c = true;
        }
    }

    public final void c() {
        if (this.f19271c) {
            this.f19270b.remove();
            this.f19271c = false;
        }
    }

    public final void d(boolean z10) {
        this.f19272d = z10;
    }
}
