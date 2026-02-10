package com.swmansion.rnscreens.gamma.tabs;

import android.content.res.Configuration;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.fragment.app.Fragment;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e extends Fragment {

    /* renamed from: d  reason: collision with root package name */
    private final a f19232d;

    public e(a tabScreen) {
        Intrinsics.checkNotNullParameter(tabScreen, "tabScreen");
        this.f19232d = tabScreen;
    }

    @Override // androidx.fragment.app.Fragment, android.content.ComponentCallbacks
    public void onConfigurationChanged(Configuration newConfig) {
        Intrinsics.checkNotNullParameter(newConfig, "newConfig");
        super.onConfigurationChanged(newConfig);
        this.f19232d.c(this, newConfig);
    }

    @Override // androidx.fragment.app.Fragment
    public View onCreateView(LayoutInflater inflater, ViewGroup viewGroup, Bundle bundle) {
        Intrinsics.checkNotNullParameter(inflater, "inflater");
        return this.f19232d;
    }

    @Override // androidx.fragment.app.Fragment
    public void onPause() {
        this.f19232d.getEventEmitter$react_native_screens_release().a();
        super.onPause();
    }

    @Override // androidx.fragment.app.Fragment
    public void onResume() {
        this.f19232d.getEventEmitter$react_native_screens_release().c();
        super.onResume();
    }

    @Override // androidx.fragment.app.Fragment
    public void onStart() {
        this.f19232d.getEventEmitter$react_native_screens_release().d();
        super.onStart();
    }

    @Override // androidx.fragment.app.Fragment
    public void onStop() {
        this.f19232d.getEventEmitter$react_native_screens_release().b();
        super.onStop();
    }

    public final a x() {
        return this.f19232d;
    }
}
