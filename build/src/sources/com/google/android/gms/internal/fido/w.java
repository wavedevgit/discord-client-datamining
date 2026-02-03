package com.google.android.gms.internal.fido;

import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w {

    /* renamed from: a  reason: collision with root package name */
    private final String f14776a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f14777b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f14778c;

    private w(String str, Set set, boolean z10, boolean z11, boolean z12, boolean z13, boolean z14) {
        this.f14776a = "com.google.android.gms.fido";
        this.f14777b = set;
        this.f14778c = z13;
    }

    public final s a(String str, boolean z10) {
        return new s(this.f14776a, str, Boolean.valueOf(z10), new k(false, false, false, this.f14778c, false, this.f14777b, new v() { // from class: com.google.android.gms.internal.fido.t
        }, new v(Boolean.class) { // from class: com.google.android.gms.internal.fido.u
        }), true);
    }

    public final w b() {
        return new w(this.f14776a, this.f14777b, false, false, false, true, false);
    }

    public final w c(Set set) {
        return new w(this.f14776a, set, false, false, false, this.f14778c, false);
    }

    public w(String str) {
        this("com.google.android.gms.fido", h1.m(), false, false, false, false, false);
    }
}
