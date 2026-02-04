package ud;

import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    public final String f50544a;

    /* renamed from: b  reason: collision with root package name */
    public final String f50545b;

    /* renamed from: c  reason: collision with root package name */
    public final String f50546c;

    /* renamed from: d  reason: collision with root package name */
    public final String f50547d;

    /* renamed from: e  reason: collision with root package name */
    public final String f50548e;

    public h(String str, String str2, String str3, String str4, String str5) {
        this.f50544a = str;
        this.f50545b = str2;
        this.f50546c = str3;
        this.f50547d = str4;
        this.f50548e = str5;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof h)) {
            return false;
        }
        h hVar = (h) obj;
        if (w0.c(this.f50544a, hVar.f50544a) && w0.c(this.f50545b, hVar.f50545b) && w0.c(this.f50546c, hVar.f50546c) && w0.c(this.f50547d, hVar.f50547d) && w0.c(this.f50548e, hVar.f50548e)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11;
        int i12;
        int i13;
        String str = this.f50544a;
        int i14 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i15 = (527 + i10) * 31;
        String str2 = this.f50545b;
        if (str2 != null) {
            i11 = str2.hashCode();
        } else {
            i11 = 0;
        }
        int i16 = (i15 + i11) * 31;
        String str3 = this.f50546c;
        if (str3 != null) {
            i12 = str3.hashCode();
        } else {
            i12 = 0;
        }
        int i17 = (i16 + i12) * 31;
        String str4 = this.f50547d;
        if (str4 != null) {
            i13 = str4.hashCode();
        } else {
            i13 = 0;
        }
        int i18 = (i17 + i13) * 31;
        String str5 = this.f50548e;
        if (str5 != null) {
            i14 = str5.hashCode();
        }
        return i18 + i14;
    }
}
