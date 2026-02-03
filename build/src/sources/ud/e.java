package ud;

import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    public final String f50247a;

    /* renamed from: b  reason: collision with root package name */
    public final String f50248b;

    /* renamed from: c  reason: collision with root package name */
    public final String f50249c;

    public e(String str, String str2, String str3) {
        this.f50247a = str;
        this.f50248b = str2;
        this.f50249c = str3;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && e.class == obj.getClass()) {
            e eVar = (e) obj;
            if (w0.c(this.f50247a, eVar.f50247a) && w0.c(this.f50248b, eVar.f50248b) && w0.c(this.f50249c, eVar.f50249c)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int hashCode = this.f50247a.hashCode() * 31;
        String str = this.f50248b;
        int i11 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i12 = (hashCode + i10) * 31;
        String str2 = this.f50249c;
        if (str2 != null) {
            i11 = str2.hashCode();
        }
        return i12 + i11;
    }
}
