package com.facebook.imagepipeline.memory;

import java.util.LinkedList;
import java.util.Queue;
import o8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class b {

    /* renamed from: a  reason: collision with root package name */
    public final int f10625a;

    /* renamed from: b  reason: collision with root package name */
    public final int f10626b;

    /* renamed from: c  reason: collision with root package name */
    final Queue f10627c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f10628d;

    /* renamed from: e  reason: collision with root package name */
    private int f10629e;

    public b(int i10, int i11, int i12, boolean z10) {
        boolean z11;
        boolean z12;
        if (i10 > 0) {
            z11 = true;
        } else {
            z11 = false;
        }
        j.i(z11);
        if (i11 >= 0) {
            z12 = true;
        } else {
            z12 = false;
        }
        j.i(z12);
        j.i(i12 >= 0);
        this.f10625a = i10;
        this.f10626b = i11;
        this.f10627c = new LinkedList();
        this.f10629e = i12;
        this.f10628d = z10;
    }

    void a(Object obj) {
        this.f10627c.add(obj);
    }

    public void b() {
        boolean z10;
        if (this.f10629e > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        j.i(z10);
        this.f10629e--;
    }

    public Object c() {
        Object g10 = g();
        if (g10 != null) {
            this.f10629e++;
        }
        return g10;
    }

    int d() {
        return this.f10627c.size();
    }

    public void e() {
        this.f10629e++;
    }

    public boolean f() {
        if (this.f10629e + d() > this.f10626b) {
            return true;
        }
        return false;
    }

    public Object g() {
        return this.f10627c.poll();
    }

    public void h(Object obj) {
        boolean z10;
        j.g(obj);
        if (this.f10628d) {
            if (this.f10629e > 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            j.i(z10);
            this.f10629e--;
            a(obj);
            return;
        }
        int i10 = this.f10629e;
        if (i10 > 0) {
            this.f10629e = i10 - 1;
            a(obj);
            return;
        }
        p8.a.o("BUCKET", "Tried to release value %s from an empty bucket!", obj);
    }
}
