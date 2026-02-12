package we;

import android.net.Uri;
import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i extends jf.a {
    @NonNull
    public static final Parcelable.Creator<i> CREATOR = new u();

    /* renamed from: d  reason: collision with root package name */
    private final String f52735d;

    /* renamed from: e  reason: collision with root package name */
    private final String f52736e;

    /* renamed from: i  reason: collision with root package name */
    private final String f52737i;

    /* renamed from: o  reason: collision with root package name */
    private final String f52738o;

    /* renamed from: p  reason: collision with root package name */
    private final Uri f52739p;

    /* renamed from: q  reason: collision with root package name */
    private final String f52740q;

    /* renamed from: r  reason: collision with root package name */
    private final String f52741r;

    /* renamed from: s  reason: collision with root package name */
    private final String f52742s;

    /* renamed from: t  reason: collision with root package name */
    private final xf.q f52743t;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(String str, String str2, String str3, String str4, Uri uri, String str5, String str6, String str7, xf.q qVar) {
        this.f52735d = (String) hf.q.l(str);
        this.f52736e = str2;
        this.f52737i = str3;
        this.f52738o = str4;
        this.f52739p = uri;
        this.f52740q = str5;
        this.f52741r = str6;
        this.f52742s = str7;
        this.f52743t = qVar;
    }

    public String b() {
        return this.f52736e;
    }

    public String c() {
        return this.f52738o;
    }

    public String d() {
        return this.f52737i;
    }

    public String e() {
        return this.f52741r;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof i)) {
            return false;
        }
        i iVar = (i) obj;
        if (!hf.o.a(this.f52735d, iVar.f52735d) || !hf.o.a(this.f52736e, iVar.f52736e) || !hf.o.a(this.f52737i, iVar.f52737i) || !hf.o.a(this.f52738o, iVar.f52738o) || !hf.o.a(this.f52739p, iVar.f52739p) || !hf.o.a(this.f52740q, iVar.f52740q) || !hf.o.a(this.f52741r, iVar.f52741r) || !hf.o.a(this.f52742s, iVar.f52742s) || !hf.o.a(this.f52743t, iVar.f52743t)) {
            return false;
        }
        return true;
    }

    public String f() {
        return this.f52735d;
    }

    public String g() {
        return this.f52740q;
    }

    public int hashCode() {
        return hf.o.b(this.f52735d, this.f52736e, this.f52737i, this.f52738o, this.f52739p, this.f52740q, this.f52741r, this.f52742s, this.f52743t);
    }

    public String i() {
        return this.f52742s;
    }

    public Uri j() {
        return this.f52739p;
    }

    public xf.q k() {
        return this.f52743t;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, f(), false);
        jf.c.s(parcel, 2, b(), false);
        jf.c.s(parcel, 3, d(), false);
        jf.c.s(parcel, 4, c(), false);
        jf.c.q(parcel, 5, j(), i10, false);
        jf.c.s(parcel, 6, g(), false);
        jf.c.s(parcel, 7, e(), false);
        jf.c.s(parcel, 8, i(), false);
        jf.c.q(parcel, 9, k(), i10, false);
        jf.c.b(parcel, a10);
    }
}
