package com.google.android.gms.internal.fido;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w {

    /* renamed from: a  reason: collision with root package name */
    private final String f15147a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f15148b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f15149c;

    private w(String str, Set set, boolean z10, boolean z11, boolean z12, boolean z13, boolean z14) {
        this.f15147a = "com.google.android.gms.fido";
        this.f15148b = set;
        this.f15149c = z13;
    }

    public final s a(String str, boolean z10) {
        return new s(this.f15147a, str, Boolean.valueOf(z10), new k(false, false, false, this.f15149c, false, this.f15148b, new v() { // from class: com.google.android.gms.internal.fido.t
        }, new v(Boolean.class) { // from class: com.google.android.gms.internal.fido.u
        }), true);
    }

    public final w b() {
        return new w(this.f15147a, this.f15148b, false, false, false, true, false);
    }

    public final w c(Set set) {
        return new w(this.f15147a, set, false, false, false, this.f15149c, false);
    }

    public w(String str) {
        this("com.google.android.gms.fido", h1.m(), false, false, false, false, false);
    }
}
