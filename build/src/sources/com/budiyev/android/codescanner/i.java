package com.budiyev.android.codescanner;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final int f9487a;

    /* renamed from: b  reason: collision with root package name */
    private final int f9488b;

    public i(int i10, int i11) {
        this.f9487a = i10;
        this.f9488b = i11;
    }

    public int a() {
        return this.f9487a;
    }

    public int b() {
        return this.f9488b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof i) {
            i iVar = (i) obj;
            if (this.f9487a == iVar.f9487a && this.f9488b == iVar.f9488b) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10 = this.f9487a;
        int i11 = this.f9488b;
        return i10 ^ ((i11 >>> 16) | (i11 << 16));
    }

    public String toString() {
        return "(" + this.f9487a + "; " + this.f9488b + ")";
    }
}
