package com.google.android.material.datepicker;

import androidx.fragment.app.Fragment;
import java.util.LinkedHashSet;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class q extends Fragment {

    /* renamed from: d  reason: collision with root package name */
    protected final LinkedHashSet f14964d = new LinkedHashSet();

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean x(p pVar) {
        return this.f14964d.add(pVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void y() {
        this.f14964d.clear();
    }
}
