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
    private final String f52734d;

    /* renamed from: e  reason: collision with root package name */
    private final String f52735e;

    /* renamed from: i  reason: collision with root package name */
    private final String f52736i;

    /* renamed from: o  reason: collision with root package name */
    private final String f52737o;

    /* renamed from: p  reason: collision with root package name */
    private final Uri f52738p;

    /* renamed from: q  reason: collision with root package name */
    private final String f52739q;

    /* renamed from: r  reason: collision with root package name */
    private final String f52740r;

    /* renamed from: s  reason: collision with root package name */
    private final String f52741s;

    /* renamed from: t  reason: collision with root package name */
    private final xf.q f52742t;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(String str, String str2, String str3, String str4, Uri uri, String str5, String str6, String str7, xf.q qVar) {
        this.f52734d = (String) hf.q.l(str);
        this.f52735e = str2;
        this.f52736i = str3;
        this.f52737o = str4;
        this.f52738p = uri;
        this.f52739q = str5;
        this.f52740r = str6;
        this.f52741s = str7;
        this.f52742t = qVar;
    }

    public String b() {
        return this.f52735e;
    }

    public String c() {
        return this.f52737o;
    }

    public String d() {
        return this.f52736i;
    }

    public String e() {
        return this.f52740r;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof i)) {
            return false;
        }
        i iVar = (i) obj;
        if (!hf.o.a(this.f52734d, iVar.f52734d) || !hf.o.a(this.f52735e, iVar.f52735e) || !hf.o.a(this.f52736i, iVar.f52736i) || !hf.o.a(this.f52737o, iVar.f52737o) || !hf.o.a(this.f52738p, iVar.f52738p) || !hf.o.a(this.f52739q, iVar.f52739q) || !hf.o.a(this.f52740r, iVar.f52740r) || !hf.o.a(this.f52741s, iVar.f52741s) || !hf.o.a(this.f52742t, iVar.f52742t)) {
            return false;
        }
        return true;
    }

    public String f() {
        return this.f52734d;
    }

    public String g() {
        return this.f52739q;
    }

    public int hashCode() {
        return hf.o.b(this.f52734d, this.f52735e, this.f52736i, this.f52737o, this.f52738p, this.f52739q, this.f52740r, this.f52741s, this.f52742t);
    }

    public String i() {
        return this.f52741s;
    }

    public Uri j() {
        return this.f52738p;
    }

    public xf.q k() {
        return this.f52742t;
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
