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
    private final String f51111d;

    /* renamed from: e  reason: collision with root package name */
    private final String f51112e;

    /* renamed from: i  reason: collision with root package name */
    private final String f51113i;

    /* renamed from: o  reason: collision with root package name */
    private final String f51114o;

    /* renamed from: p  reason: collision with root package name */
    private final Uri f51115p;

    /* renamed from: q  reason: collision with root package name */
    private final String f51116q;

    /* renamed from: r  reason: collision with root package name */
    private final String f51117r;

    /* renamed from: s  reason: collision with root package name */
    private final String f51118s;

    /* renamed from: t  reason: collision with root package name */
    private final wf.q f51119t;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(String str, String str2, String str3, String str4, Uri uri, String str5, String str6, String str7, wf.q qVar) {
        this.f51111d = (String) gf.q.l(str);
        this.f51112e = str2;
        this.f51113i = str3;
        this.f51114o = str4;
        this.f51115p = uri;
        this.f51116q = str5;
        this.f51117r = str6;
        this.f51118s = str7;
        this.f51119t = qVar;
    }

    public String b() {
        return this.f51112e;
    }

    public String c() {
        return this.f51114o;
    }

    public String d() {
        return this.f51113i;
    }

    public String e() {
        return this.f51117r;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof i)) {
            return false;
        }
        i iVar = (i) obj;
        if (!gf.o.a(this.f51111d, iVar.f51111d) || !gf.o.a(this.f51112e, iVar.f51112e) || !gf.o.a(this.f51113i, iVar.f51113i) || !gf.o.a(this.f51114o, iVar.f51114o) || !gf.o.a(this.f51115p, iVar.f51115p) || !gf.o.a(this.f51116q, iVar.f51116q) || !gf.o.a(this.f51117r, iVar.f51117r) || !gf.o.a(this.f51118s, iVar.f51118s) || !gf.o.a(this.f51119t, iVar.f51119t)) {
            return false;
        }
        return true;
    }

    public String f() {
        return this.f51111d;
    }

    public String g() {
        return this.f51116q;
    }

    public int hashCode() {
        return gf.o.b(this.f51111d, this.f51112e, this.f51113i, this.f51114o, this.f51115p, this.f51116q, this.f51117r, this.f51118s, this.f51119t);
    }

    public String i() {
        return this.f51118s;
    }

    public Uri j() {
        return this.f51115p;
    }

    public wf.q k() {
        return this.f51119t;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, f(), false);
        hf.c.s(parcel, 2, b(), false);
        hf.c.s(parcel, 3, d(), false);
        hf.c.s(parcel, 4, c(), false);
        hf.c.q(parcel, 5, j(), i10, false);
        hf.c.s(parcel, 6, g(), false);
        hf.c.s(parcel, 7, e(), false);
        hf.c.s(parcel, 8, i(), false);
        hf.c.q(parcel, 9, k(), i10, false);
        hf.c.b(parcel, a10);
    }
}
