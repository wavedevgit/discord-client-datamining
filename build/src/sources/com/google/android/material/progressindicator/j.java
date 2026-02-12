package com.google.android.material.progressindicator;

import com.google.android.material.progressindicator.i;
import java.util.ArrayList;
import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class j {

    /* renamed from: a  reason: collision with root package name */
    protected k f16166a;

    /* renamed from: b  reason: collision with root package name */
    protected final List f16167b = new ArrayList();

    /* JADX INFO: Access modifiers changed from: protected */
    public j(int i10) {
        for (int i11 = 0; i11 < i10; i11++) {
            this.f16167b.add(new i.a());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void a();

    /* JADX INFO: Access modifiers changed from: protected */
    public float b(int i10, int i11, int i12) {
        return u1.a.a((i10 - i11) / i12, 0.0f, 1.0f);
    }

    public abstract void c();

    public abstract void d(androidx.vectordrawable.graphics.drawable.b bVar);

    /* JADX INFO: Access modifiers changed from: protected */
    public void e(k kVar) {
        this.f16166a = kVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void f();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void g();

    public abstract void h();
}
