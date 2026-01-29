package androidx.lifecycle;

import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.c;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class y implements m {

    /* renamed from: d  reason: collision with root package name */
    private final Object f4537d;

    /* renamed from: e  reason: collision with root package name */
    private final c.a f4538e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public y(Object obj) {
        this.f4537d = obj;
        this.f4538e = c.f4466c.c(obj.getClass());
    }

    @Override // androidx.lifecycle.m
    public void h(LifecycleOwner lifecycleOwner, Lifecycle.a aVar) {
        this.f4538e.a(lifecycleOwner, aVar, this.f4537d);
    }
}
