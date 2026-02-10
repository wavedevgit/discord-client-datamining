package vd;

import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    public final String f52252a;

    /* renamed from: b  reason: collision with root package name */
    public final String f52253b;

    /* renamed from: c  reason: collision with root package name */
    public final String f52254c;

    public e(String str, String str2, String str3) {
        this.f52252a = str;
        this.f52253b = str2;
        this.f52254c = str3;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && e.class == obj.getClass()) {
            e eVar = (e) obj;
            if (w0.c(this.f52252a, eVar.f52252a) && w0.c(this.f52253b, eVar.f52253b) && w0.c(this.f52254c, eVar.f52254c)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int hashCode = this.f52252a.hashCode() * 31;
        String str = this.f52253b;
        int i11 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i12 = (hashCode + i10) * 31;
        String str2 = this.f52254c;
        if (str2 != null) {
            i11 = str2.hashCode();
        }
        return i12 + i11;
    }
}
