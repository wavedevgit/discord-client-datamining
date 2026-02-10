package com.swmansion.rnscreens.gamma.stack.screen;

import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.LifecycleOwner;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d extends Fragment {

    /* renamed from: d  reason: collision with root package name */
    private final a f19206d;

    /* renamed from: e  reason: collision with root package name */
    private b f19207e;

    public d(a stackScreen) {
        Intrinsics.checkNotNullParameter(stackScreen, "stackScreen");
        this.f19206d = stackScreen;
    }

    @Override // androidx.fragment.app.Fragment
    public View onCreateView(LayoutInflater inflater, ViewGroup viewGroup, Bundle bundle) {
        Intrinsics.checkNotNullParameter(inflater, "inflater");
        return this.f19206d;
    }

    @Override // androidx.fragment.app.Fragment
    public void onDestroy() {
        super.onDestroy();
        Log.i("StackScreenFragment", "onDestroy");
        this.f19206d.c();
    }

    @Override // androidx.fragment.app.Fragment
    public void onDestroyView() {
        super.onDestroyView();
        this.f19207e = null;
    }

    @Override // androidx.fragment.app.Fragment
    public void onViewCreated(View view, Bundle bundle) {
        Intrinsics.checkNotNullParameter(view, "view");
        super.onViewCreated(view, bundle);
        a aVar = this.f19206d;
        LifecycleOwner viewLifecycleOwner = getViewLifecycleOwner();
        Intrinsics.checkNotNullExpressionValue(viewLifecycleOwner, "getViewLifecycleOwner(...)");
        this.f19207e = aVar.a(viewLifecycleOwner);
    }

    public final a x() {
        return this.f19206d;
    }
}
