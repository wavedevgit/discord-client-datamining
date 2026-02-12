package vd;

import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    public final String f51495a;

    /* renamed from: b  reason: collision with root package name */
    public final String f51496b;

    /* renamed from: c  reason: collision with root package name */
    public final String f51497c;

    public e(String str, String str2, String str3) {
        this.f51495a = str;
        this.f51496b = str2;
        this.f51497c = str3;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && e.class == obj.getClass()) {
            e eVar = (e) obj;
            if (w0.c(this.f51495a, eVar.f51495a) && w0.c(this.f51496b, eVar.f51496b) && w0.c(this.f51497c, eVar.f51497c)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int hashCode = this.f51495a.hashCode() * 31;
        String str = this.f51496b;
        int i11 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i12 = (hashCode + i10) * 31;
        String str2 = this.f51497c;
        if (str2 != null) {
            i11 = str2.hashCode();
        }
        return i12 + i11;
    }
}
