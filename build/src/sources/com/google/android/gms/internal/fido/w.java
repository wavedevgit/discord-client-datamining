package com.google.android.gms.internal.fido;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w {

    /* renamed from: a  reason: collision with root package name */
    private final String f14819a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f14820b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f14821c;

    private w(String str, Set set, boolean z10, boolean z11, boolean z12, boolean z13, boolean z14) {
        this.f14819a = "com.google.android.gms.fido";
        this.f14820b = set;
        this.f14821c = z13;
    }

    public final s a(String str, boolean z10) {
        return new s(this.f14819a, str, Boolean.valueOf(z10), new k(false, false, false, this.f14821c, false, this.f14820b, new v() { // from class: com.google.android.gms.internal.fido.t
        }, new v(Boolean.class) { // from class: com.google.android.gms.internal.fido.u
        }), true);
    }

    public final w b() {
        return new w(this.f14819a, this.f14820b, false, false, false, true, false);
    }

    public final w c(Set set) {
        return new w(this.f14819a, set, false, false, false, this.f14821c, false);
    }

    public w(String str) {
        this("com.google.android.gms.fido", h1.o(), false, false, false, false, false);
    }
}
