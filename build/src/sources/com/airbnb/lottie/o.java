package com.airbnb.lottie;

import android.os.Build;
import java.util.HashSet;
import l5.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class o {

    /* renamed from: a  reason: collision with root package name */
    private final HashSet f8505a = new HashSet();

    public boolean a(w wVar, boolean z10) {
        if (z10) {
            if (Build.VERSION.SDK_INT < wVar.f36244d) {
                y5.d.c(String.format("%s is not supported pre SDK %d", wVar.name(), Integer.valueOf(wVar.f36244d)));
                return false;
            }
            return this.f8505a.add(wVar);
        }
        return this.f8505a.remove(wVar);
    }

    public boolean b(w wVar) {
        return this.f8505a.contains(wVar);
    }
}
