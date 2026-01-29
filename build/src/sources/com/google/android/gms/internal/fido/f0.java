package com.google.android.gms.internal.fido;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f0 {

    /* renamed from: a  reason: collision with root package name */
    private final String f15005a;

    /* renamed from: b  reason: collision with root package name */
    private final e0 f15006b;

    /* renamed from: c  reason: collision with root package name */
    private e0 f15007c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ f0(String str, g0 g0Var) {
        e0 e0Var = new e0();
        this.f15006b = e0Var;
        this.f15007c = e0Var;
        str.getClass();
        this.f15005a = str;
    }

    public final f0 a(String str, int i10) {
        String valueOf = String.valueOf(i10);
        d0 d0Var = new d0(null);
        this.f15007c.f14994c = d0Var;
        this.f15007c = d0Var;
        d0Var.f14993b = valueOf;
        d0Var.f14992a = "errorCode";
        return this;
    }

    public final f0 b(String str, Object obj) {
        e0 e0Var = new e0();
        this.f15007c.f14994c = e0Var;
        this.f15007c = e0Var;
        e0Var.f14993b = obj;
        e0Var.f14992a = str;
        return this;
    }

    public final String toString() {
        StringBuilder sb2 = new StringBuilder(32);
        sb2.append(this.f15005a);
        sb2.append('{');
        e0 e0Var = this.f15006b.f14994c;
        String str = "";
        while (e0Var != null) {
            Object obj = e0Var.f14993b;
            sb2.append(str);
            String str2 = e0Var.f14992a;
            if (str2 != null) {
                sb2.append(str2);
                sb2.append('=');
            }
            if (obj != null && obj.getClass().isArray()) {
                String deepToString = Arrays.deepToString(new Object[]{obj});
                sb2.append((CharSequence) deepToString, 1, deepToString.length() - 1);
            } else {
                sb2.append(obj);
            }
            e0Var = e0Var.f14994c;
            str = ", ";
        }
        sb2.append('}');
        return sb2.toString();
    }
}
