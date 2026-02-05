package com.google.android.material.progressindicator;

import com.google.android.material.progressindicator.h;
import java.util.ArrayList;
import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class i {

    /* renamed from: a  reason: collision with root package name */
    protected j f15294a;

    /* renamed from: b  reason: collision with root package name */
    protected final List f15295b = new ArrayList();

    /* JADX INFO: Access modifiers changed from: protected */
    public i(int i10) {
        for (int i11 = 0; i11 < i10; i11++) {
            this.f15295b.add(new h.a());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void a();

    /* JADX INFO: Access modifiers changed from: protected */
    public float b(int i10, int i11, int i12) {
        return (i10 - i11) / i12;
    }

    public abstract void c();

    public abstract void d(androidx.vectordrawable.graphics.drawable.b bVar);

    /* JADX INFO: Access modifiers changed from: protected */
    public void e(j jVar) {
        this.f15294a = jVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void f();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract void g();

    public abstract void h();
}
