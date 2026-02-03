package ud;

import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    public final String f50547a;

    /* renamed from: b  reason: collision with root package name */
    public final String f50548b;

    /* renamed from: c  reason: collision with root package name */
    public final String f50549c;

    /* renamed from: d  reason: collision with root package name */
    public final String f50550d;

    /* renamed from: e  reason: collision with root package name */
    public final String f50551e;

    public h(String str, String str2, String str3, String str4, String str5) {
        this.f50547a = str;
        this.f50548b = str2;
        this.f50549c = str3;
        this.f50550d = str4;
        this.f50551e = str5;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof h)) {
            return false;
        }
        h hVar = (h) obj;
        if (w0.c(this.f50547a, hVar.f50547a) && w0.c(this.f50548b, hVar.f50548b) && w0.c(this.f50549c, hVar.f50549c) && w0.c(this.f50550d, hVar.f50550d) && w0.c(this.f50551e, hVar.f50551e)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11;
        int i12;
        int i13;
        String str = this.f50547a;
        int i14 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i15 = (527 + i10) * 31;
        String str2 = this.f50548b;
        if (str2 != null) {
            i11 = str2.hashCode();
        } else {
            i11 = 0;
        }
        int i16 = (i15 + i11) * 31;
        String str3 = this.f50549c;
        if (str3 != null) {
            i12 = str3.hashCode();
        } else {
            i12 = 0;
        }
        int i17 = (i16 + i12) * 31;
        String str4 = this.f50550d;
        if (str4 != null) {
            i13 = str4.hashCode();
        } else {
            i13 = 0;
        }
        int i18 = (i17 + i13) * 31;
        String str5 = this.f50551e;
        if (str5 != null) {
            i14 = str5.hashCode();
        }
        return i18 + i14;
    }
}
