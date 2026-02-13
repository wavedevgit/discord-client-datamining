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
    private final String f53303d;

    /* renamed from: e  reason: collision with root package name */
    private final String f53304e;

    /* renamed from: i  reason: collision with root package name */
    private final String f53305i;

    /* renamed from: o  reason: collision with root package name */
    private final String f53306o;

    /* renamed from: p  reason: collision with root package name */
    private final Uri f53307p;

    /* renamed from: q  reason: collision with root package name */
    private final String f53308q;

    /* renamed from: r  reason: collision with root package name */
    private final String f53309r;

    /* renamed from: s  reason: collision with root package name */
    private final String f53310s;

    /* renamed from: t  reason: collision with root package name */
    private final xf.q f53311t;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(String str, String str2, String str3, String str4, Uri uri, String str5, String str6, String str7, xf.q qVar) {
        this.f53303d = (String) hf.q.l(str);
        this.f53304e = str2;
        this.f53305i = str3;
        this.f53306o = str4;
        this.f53307p = uri;
        this.f53308q = str5;
        this.f53309r = str6;
        this.f53310s = str7;
        this.f53311t = qVar;
    }

    public String b() {
        return this.f53304e;
    }

    public String c() {
        return this.f53306o;
    }

    public String d() {
        return this.f53305i;
    }

    public String e() {
        return this.f53309r;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof i)) {
            return false;
        }
        i iVar = (i) obj;
        if (!hf.o.a(this.f53303d, iVar.f53303d) || !hf.o.a(this.f53304e, iVar.f53304e) || !hf.o.a(this.f53305i, iVar.f53305i) || !hf.o.a(this.f53306o, iVar.f53306o) || !hf.o.a(this.f53307p, iVar.f53307p) || !hf.o.a(this.f53308q, iVar.f53308q) || !hf.o.a(this.f53309r, iVar.f53309r) || !hf.o.a(this.f53310s, iVar.f53310s) || !hf.o.a(this.f53311t, iVar.f53311t)) {
            return false;
        }
        return true;
    }

    public String f() {
        return this.f53303d;
    }

    public String g() {
        return this.f53308q;
    }

    public int hashCode() {
        return hf.o.b(this.f53303d, this.f53304e, this.f53305i, this.f53306o, this.f53307p, this.f53308q, this.f53309r, this.f53310s, this.f53311t);
    }

    public String i() {
        return this.f53310s;
    }

    public Uri j() {
        return this.f53307p;
    }

    public xf.q k() {
        return this.f53311t;
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
