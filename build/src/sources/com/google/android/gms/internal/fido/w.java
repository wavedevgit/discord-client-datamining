package com.google.android.gms.internal.fido;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w {

    /* renamed from: a  reason: collision with root package name */
    private final String f13744a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f13745b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f13746c;

    private w(String str, Set set, boolean z10, boolean z11, boolean z12, boolean z13, boolean z14) {
        this.f13744a = "com.google.android.gms.fido";
        this.f13745b = set;
        this.f13746c = z13;
    }

    public final s a(String str, boolean z10) {
        return new s(this.f13744a, str, Boolean.valueOf(z10), new k(false, false, false, this.f13746c, false, this.f13745b, new v() { // from class: com.google.android.gms.internal.fido.t
        }, new v(Boolean.class) { // from class: com.google.android.gms.internal.fido.u
        }), true);
    }

    public final w b() {
        return new w(this.f13744a, this.f13745b, false, false, false, true, false);
    }

    public final w c(Set set) {
        return new w(this.f13744a, set, false, false, false, this.f13746c, false);
    }

    public w(String str) {
        this("com.google.android.gms.fido", h1.m(), false, false, false, false, false);
    }
}
