package com.google.android.gms.internal.fido;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class j5 extends l5 {

    /* renamed from: d  reason: collision with root package name */
    private final String f15041d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j5(String str) {
        this.f15041d = str;
    }

    @Override // java.lang.Comparable
    public final /* bridge */ /* synthetic */ int compareTo(Object obj) {
        int length;
        int length2;
        l5 l5Var = (l5) obj;
        if (l5.e((byte) 96) != l5Var.zza()) {
            length = l5Var.zza();
            length2 = l5.e((byte) 96);
        } else {
            String str = this.f15041d;
            String str2 = ((j5) l5Var).f15041d;
            if (str.length() != str2.length()) {
                length = str2.length();
                length2 = str.length();
            } else {
                return str.compareTo(str2);
            }
        }
        return length2 - length;
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || j5.class != obj.getClass()) {
            return false;
        }
        return this.f15041d.equals(((j5) obj).f15041d);
    }

    public final int hashCode() {
        return Arrays.hashCode(new Object[]{Integer.valueOf(l5.e((byte) 96)), this.f15041d});
    }

    public final String toString() {
        return "\"" + this.f15041d + "\"";
    }

    @Override // com.google.android.gms.internal.fido.l5
    protected final int zza() {
        return l5.e((byte) 96);
    }
}
