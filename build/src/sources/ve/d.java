package ve;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d extends hf.a {
    @NonNull
    public static final Parcelable.Creator<d> CREATOR = new n();

    /* renamed from: d  reason: collision with root package name */
    private final String f51108d;

    /* renamed from: e  reason: collision with root package name */
    private final String f51109e;

    /* renamed from: i  reason: collision with root package name */
    private final String f51110i;

    /* renamed from: o  reason: collision with root package name */
    private final String f51111o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f51112p;

    /* renamed from: q  reason: collision with root package name */
    private final int f51113q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private String f51114a;

        /* renamed from: b  reason: collision with root package name */
        private String f51115b;

        /* renamed from: c  reason: collision with root package name */
        private String f51116c;

        /* renamed from: d  reason: collision with root package name */
        private String f51117d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f51118e;

        /* renamed from: f  reason: collision with root package name */
        private int f51119f;

        public d a() {
            return new d(this.f51114a, this.f51115b, this.f51116c, this.f51117d, this.f51118e, this.f51119f);
        }

        public a b(String str) {
            this.f51115b = str;
            return this;
        }

        public a c(String str) {
            this.f51117d = str;
            return this;
        }

        public a d(boolean z10) {
            this.f51118e = z10;
            return this;
        }

        public a e(String str) {
            gf.q.l(str);
            this.f51114a = str;
            return this;
        }

        public final a f(String str) {
            this.f51116c = str;
            return this;
        }

        public final a g(int i10) {
            this.f51119f = i10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(String str, String str2, String str3, String str4, boolean z10, int i10) {
        gf.q.l(str);
        this.f51108d = str;
        this.f51109e = str2;
        this.f51110i = str3;
        this.f51111o = str4;
        this.f51112p = z10;
        this.f51113q = i10;
    }

    public static a b() {
        return new a();
    }

    public static a g(d dVar) {
        gf.q.l(dVar);
        a b10 = b();
        b10.e(dVar.e());
        b10.c(dVar.d());
        b10.b(dVar.c());
        b10.d(dVar.f51112p);
        b10.g(dVar.f51113q);
        String str = dVar.f51110i;
        if (str != null) {
            b10.f(str);
        }
        return b10;
    }

    public String c() {
        return this.f51109e;
    }

    public String d() {
        return this.f51111o;
    }

    public String e() {
        return this.f51108d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (!gf.o.a(this.f51108d, dVar.f51108d) || !gf.o.a(this.f51111o, dVar.f51111o) || !gf.o.a(this.f51109e, dVar.f51109e) || !gf.o.a(Boolean.valueOf(this.f51112p), Boolean.valueOf(dVar.f51112p)) || this.f51113q != dVar.f51113q) {
            return false;
        }
        return true;
    }

    public boolean f() {
        return this.f51112p;
    }

    public int hashCode() {
        return gf.o.b(this.f51108d, this.f51109e, this.f51111o, Boolean.valueOf(this.f51112p), Integer.valueOf(this.f51113q));
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, e(), false);
        hf.c.s(parcel, 2, c(), false);
        hf.c.s(parcel, 3, this.f51110i, false);
        hf.c.s(parcel, 4, d(), false);
        hf.c.c(parcel, 5, f());
        hf.c.l(parcel, 6, this.f51113q);
        hf.c.b(parcel, a10);
    }
}
