package com.swmansion.reanimated.layoutReanimation;

import android.view.View;
import android.view.ViewGroup;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface ViewHierarchyObserver {
    void onViewCreate(View view, ViewGroup viewGroup, Snapshot snapshot);

    void onViewRemoval(View view, ViewGroup viewGroup, Runnable runnable);

    void onViewUpdate(View view, Snapshot snapshot, Snapshot snapshot2);
}
