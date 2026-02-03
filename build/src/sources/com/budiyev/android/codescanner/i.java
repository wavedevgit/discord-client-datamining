package com.budiyev.android.codescanner;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final int f8084a;

    /* renamed from: b  reason: collision with root package name */
    private final int f8085b;

    public i(int i10, int i11) {
        this.f8084a = i10;
        this.f8085b = i11;
    }

    public int a() {
        return this.f8084a;
    }

    public int b() {
        return this.f8085b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof i) {
            i iVar = (i) obj;
            if (this.f8084a == iVar.f8084a && this.f8085b == iVar.f8085b) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10 = this.f8084a;
        int i11 = this.f8085b;
        return i10 ^ ((i11 >>> 16) | (i11 << 16));
    }

    public String toString() {
        return "(" + this.f8084a + "; " + this.f8085b + ")";
    }
}
