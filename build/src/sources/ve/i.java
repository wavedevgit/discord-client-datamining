package ve;

import android.net.Uri;
import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i extends hf.a {
    @NonNull
    public static final Parcelable.Creator<i> CREATOR = new u();

    /* renamed from: d  reason: collision with root package name */
    private final String f52678d;

    /* renamed from: e  reason: collision with root package name */
    private final String f52679e;

    /* renamed from: i  reason: collision with root package name */
    private final String f52680i;

    /* renamed from: o  reason: collision with root package name */
    private final String f52681o;

    /* renamed from: p  reason: collision with root package name */
    private final Uri f52682p;

    /* renamed from: q  reason: collision with root package name */
    private final String f52683q;

    /* renamed from: r  reason: collision with root package name */
    private final String f52684r;

    /* renamed from: s  reason: collision with root package name */
    private final String f52685s;

    /* renamed from: t  reason: collision with root package name */
    private final wf.q f52686t;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(String str, String str2, String str3, String str4, Uri uri, String str5, String str6, String str7, wf.q qVar) {
        this.f52678d = (String) gf.q.l(str);
        this.f52679e = str2;
        this.f52680i = str3;
        this.f52681o = str4;
        this.f52682p = uri;
        this.f52683q = str5;
        this.f52684r = str6;
        this.f52685s = str7;
        this.f52686t = qVar;
    }

    public String b() {
        return this.f52679e;
    }

    public String c() {
        return this.f52681o;
    }

    public String d() {
        return this.f52680i;
    }

    public String e() {
        return this.f52684r;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof i)) {
            return false;
        }
        i iVar = (i) obj;
        if (!gf.o.a(this.f52678d, iVar.f52678d) || !gf.o.a(this.f52679e, iVar.f52679e) || !gf.o.a(this.f52680i, iVar.f52680i) || !gf.o.a(this.f52681o, iVar.f52681o) || !gf.o.a(this.f52682p, iVar.f52682p) || !gf.o.a(this.f52683q, iVar.f52683q) || !gf.o.a(this.f52684r, iVar.f52684r) || !gf.o.a(this.f52685s, iVar.f52685s) || !gf.o.a(this.f52686t, iVar.f52686t)) {
            return false;
        }
        return true;
    }

    public String f() {
        return this.f52678d;
    }

    public String h() {
        return this.f52683q;
    }

    public int hashCode() {
        return gf.o.b(this.f52678d, this.f52679e, this.f52680i, this.f52681o, this.f52682p, this.f52683q, this.f52684r, this.f52685s, this.f52686t);
    }

    public String i() {
        return this.f52685s;
    }

    public Uri j() {
        return this.f52682p;
    }

    public wf.q l() {
        return this.f52686t;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, f(), false);
        hf.c.s(parcel, 2, b(), false);
        hf.c.s(parcel, 3, d(), false);
        hf.c.s(parcel, 4, c(), false);
        hf.c.q(parcel, 5, j(), i10, false);
        hf.c.s(parcel, 6, h(), false);
        hf.c.s(parcel, 7, e(), false);
        hf.c.s(parcel, 8, i(), false);
        hf.c.q(parcel, 9, l(), i10, false);
        hf.c.b(parcel, a10);
    }
}
