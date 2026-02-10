package com.budiyev.android.codescanner;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final int f8508a;

    /* renamed from: b  reason: collision with root package name */
    private final int f8509b;

    public i(int i10, int i11) {
        this.f8508a = i10;
        this.f8509b = i11;
    }

    public int a() {
        return this.f8508a;
    }

    public int b() {
        return this.f8509b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof i) {
            i iVar = (i) obj;
            if (this.f8508a == iVar.f8508a && this.f8509b == iVar.f8509b) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10 = this.f8508a;
        int i11 = this.f8509b;
        return i10 ^ ((i11 >>> 16) | (i11 << 16));
    }

    public String toString() {
        return "(" + this.f8508a + "; " + this.f8509b + ")";
    }
}
