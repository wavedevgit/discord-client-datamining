package ud;

import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    public final String f51303a;

    /* renamed from: b  reason: collision with root package name */
    public final String f51304b;

    /* renamed from: c  reason: collision with root package name */
    public final String f51305c;

    public e(String str, String str2, String str3) {
        this.f51303a = str;
        this.f51304b = str2;
        this.f51305c = str3;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && e.class == obj.getClass()) {
            e eVar = (e) obj;
            if (w0.c(this.f51303a, eVar.f51303a) && w0.c(this.f51304b, eVar.f51304b) && w0.c(this.f51305c, eVar.f51305c)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int hashCode = this.f51303a.hashCode() * 31;
        String str = this.f51304b;
        int i11 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i12 = (hashCode + i10) * 31;
        String str2 = this.f51305c;
        if (str2 != null) {
            i11 = str2.hashCode();
        }
        return i12 + i11;
    }
}
