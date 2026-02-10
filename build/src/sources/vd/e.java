package vd;

import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    public final String f51494a;

    /* renamed from: b  reason: collision with root package name */
    public final String f51495b;

    /* renamed from: c  reason: collision with root package name */
    public final String f51496c;

    public e(String str, String str2, String str3) {
        this.f51494a = str;
        this.f51495b = str2;
        this.f51496c = str3;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && e.class == obj.getClass()) {
            e eVar = (e) obj;
            if (w0.c(this.f51494a, eVar.f51494a) && w0.c(this.f51495b, eVar.f51495b) && w0.c(this.f51496c, eVar.f51496c)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int hashCode = this.f51494a.hashCode() * 31;
        String str = this.f51495b;
        int i11 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i12 = (hashCode + i10) * 31;
        String str2 = this.f51496c;
        if (str2 != null) {
            i11 = str2.hashCode();
        }
        return i12 + i11;
    }
}
