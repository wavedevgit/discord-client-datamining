package com.facebook.imagepipeline.memory;

import java.util.LinkedList;
import java.util.Queue;
import p8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class b {

    /* renamed from: a  reason: collision with root package name */
    public final int f11242a;

    /* renamed from: b  reason: collision with root package name */
    public final int f11243b;

    /* renamed from: c  reason: collision with root package name */
    final Queue f11244c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f11245d;

    /* renamed from: e  reason: collision with root package name */
    private int f11246e;

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
        this.f11242a = i10;
        this.f11243b = i11;
        this.f11244c = new LinkedList();
        this.f11246e = i12;
        this.f11245d = z10;
    }

    void a(Object obj) {
        this.f11244c.add(obj);
    }

    public void b() {
        boolean z10;
        if (this.f11246e > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        j.i(z10);
        this.f11246e--;
    }

    public Object c() {
        Object g10 = g();
        if (g10 != null) {
            this.f11246e++;
        }
        return g10;
    }

    int d() {
        return this.f11244c.size();
    }

    public void e() {
        this.f11246e++;
    }

    public boolean f() {
        if (this.f11246e + d() > this.f11243b) {
            return true;
        }
        return false;
    }

    public Object g() {
        return this.f11244c.poll();
    }

    public void h(Object obj) {
        boolean z10;
        j.g(obj);
        if (this.f11245d) {
            if (this.f11246e > 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            j.i(z10);
            this.f11246e--;
            a(obj);
            return;
        }
        int i10 = this.f11246e;
        if (i10 > 0) {
            this.f11246e = i10 - 1;
            a(obj);
            return;
        }
        q8.a.o("BUCKET", "Tried to release value %s from an empty bucket!", obj);
    }
}
