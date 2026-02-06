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
    private final String f52630d;

    /* renamed from: e  reason: collision with root package name */
    private final String f52631e;

    /* renamed from: i  reason: collision with root package name */
    private final String f52632i;

    /* renamed from: o  reason: collision with root package name */
    private final String f52633o;

    /* renamed from: p  reason: collision with root package name */
    private final Uri f52634p;

    /* renamed from: q  reason: collision with root package name */
    private final String f52635q;

    /* renamed from: r  reason: collision with root package name */
    private final String f52636r;

    /* renamed from: s  reason: collision with root package name */
    private final String f52637s;

    /* renamed from: t  reason: collision with root package name */
    private final wf.q f52638t;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(String str, String str2, String str3, String str4, Uri uri, String str5, String str6, String str7, wf.q qVar) {
        this.f52630d = (String) gf.q.l(str);
        this.f52631e = str2;
        this.f52632i = str3;
        this.f52633o = str4;
        this.f52634p = uri;
        this.f52635q = str5;
        this.f52636r = str6;
        this.f52637s = str7;
        this.f52638t = qVar;
    }

    public String b() {
        return this.f52631e;
    }

    public String c() {
        return this.f52633o;
    }

    public String d() {
        return this.f52632i;
    }

    public String e() {
        return this.f52636r;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof i)) {
            return false;
        }
        i iVar = (i) obj;
        if (!gf.o.a(this.f52630d, iVar.f52630d) || !gf.o.a(this.f52631e, iVar.f52631e) || !gf.o.a(this.f52632i, iVar.f52632i) || !gf.o.a(this.f52633o, iVar.f52633o) || !gf.o.a(this.f52634p, iVar.f52634p) || !gf.o.a(this.f52635q, iVar.f52635q) || !gf.o.a(this.f52636r, iVar.f52636r) || !gf.o.a(this.f52637s, iVar.f52637s) || !gf.o.a(this.f52638t, iVar.f52638t)) {
            return false;
        }
        return true;
    }

    public String f() {
        return this.f52630d;
    }

    public String h() {
        return this.f52635q;
    }

    public int hashCode() {
        return gf.o.b(this.f52630d, this.f52631e, this.f52632i, this.f52633o, this.f52634p, this.f52635q, this.f52636r, this.f52637s, this.f52638t);
    }

    public String i() {
        return this.f52637s;
    }

    public Uri j() {
        return this.f52634p;
    }

    public wf.q l() {
        return this.f52638t;
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
