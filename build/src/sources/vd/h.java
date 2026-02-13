package vd;

import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    public final String f52076a;

    /* renamed from: b  reason: collision with root package name */
    public final String f52077b;

    /* renamed from: c  reason: collision with root package name */
    public final String f52078c;

    /* renamed from: d  reason: collision with root package name */
    public final String f52079d;

    /* renamed from: e  reason: collision with root package name */
    public final String f52080e;

    public h(String str, String str2, String str3, String str4, String str5) {
        this.f52076a = str;
        this.f52077b = str2;
        this.f52078c = str3;
        this.f52079d = str4;
        this.f52080e = str5;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof h)) {
            return false;
        }
        h hVar = (h) obj;
        if (w0.c(this.f52076a, hVar.f52076a) && w0.c(this.f52077b, hVar.f52077b) && w0.c(this.f52078c, hVar.f52078c) && w0.c(this.f52079d, hVar.f52079d) && w0.c(this.f52080e, hVar.f52080e)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11;
        int i12;
        int i13;
        String str = this.f52076a;
        int i14 = 0;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        int i15 = (527 + i10) * 31;
        String str2 = this.f52077b;
        if (str2 != null) {
            i11 = str2.hashCode();
        } else {
            i11 = 0;
        }
        int i16 = (i15 + i11) * 31;
        String str3 = this.f52078c;
        if (str3 != null) {
            i12 = str3.hashCode();
        } else {
            i12 = 0;
        }
        int i17 = (i16 + i12) * 31;
        String str4 = this.f52079d;
        if (str4 != null) {
            i13 = str4.hashCode();
        } else {
            i13 = 0;
        }
        int i18 = (i17 + i13) * 31;
        String str5 = this.f52080e;
        if (str5 != null) {
            i14 = str5.hashCode();
        }
        return i18 + i14;
    }
}
