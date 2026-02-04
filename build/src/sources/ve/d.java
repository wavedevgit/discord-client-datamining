package ve;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d extends hf.a {
    @NonNull
    public static final Parcelable.Creator<d> CREATOR = new n();

    /* renamed from: d  reason: collision with root package name */
    private final String f51557d;

    /* renamed from: e  reason: collision with root package name */
    private final String f51558e;

    /* renamed from: i  reason: collision with root package name */
    private final String f51559i;

    /* renamed from: o  reason: collision with root package name */
    private final String f51560o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f51561p;

    /* renamed from: q  reason: collision with root package name */
    private final int f51562q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private String f51563a;

        /* renamed from: b  reason: collision with root package name */
        private String f51564b;

        /* renamed from: c  reason: collision with root package name */
        private String f51565c;

        /* renamed from: d  reason: collision with root package name */
        private String f51566d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f51567e;

        /* renamed from: f  reason: collision with root package name */
        private int f51568f;

        public d a() {
            return new d(this.f51563a, this.f51564b, this.f51565c, this.f51566d, this.f51567e, this.f51568f);
        }

        public a b(String str) {
            this.f51564b = str;
            return this;
        }

        public a c(String str) {
            this.f51566d = str;
            return this;
        }

        public a d(boolean z10) {
            this.f51567e = z10;
            return this;
        }

        public a e(String str) {
            gf.q.l(str);
            this.f51563a = str;
            return this;
        }

        public final a f(String str) {
            this.f51565c = str;
            return this;
        }

        public final a g(int i10) {
            this.f51568f = i10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(String str, String str2, String str3, String str4, boolean z10, int i10) {
        gf.q.l(str);
        this.f51557d = str;
        this.f51558e = str2;
        this.f51559i = str3;
        this.f51560o = str4;
        this.f51561p = z10;
        this.f51562q = i10;
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
        b10.d(dVar.f51561p);
        b10.g(dVar.f51562q);
        String str = dVar.f51559i;
        if (str != null) {
            b10.f(str);
        }
        return b10;
    }

    public String c() {
        return this.f51558e;
    }

    public String d() {
        return this.f51560o;
    }

    public String e() {
        return this.f51557d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (!gf.o.a(this.f51557d, dVar.f51557d) || !gf.o.a(this.f51560o, dVar.f51560o) || !gf.o.a(this.f51558e, dVar.f51558e) || !gf.o.a(Boolean.valueOf(this.f51561p), Boolean.valueOf(dVar.f51561p)) || this.f51562q != dVar.f51562q) {
            return false;
        }
        return true;
    }

    public boolean f() {
        return this.f51561p;
    }

    public int hashCode() {
        return gf.o.b(this.f51557d, this.f51558e, this.f51560o, Boolean.valueOf(this.f51561p), Integer.valueOf(this.f51562q));
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, e(), false);
        hf.c.s(parcel, 2, c(), false);
        hf.c.s(parcel, 3, this.f51559i, false);
        hf.c.s(parcel, 4, d(), false);
        hf.c.c(parcel, 5, f());
        hf.c.l(parcel, 6, this.f51562q);
        hf.c.b(parcel, a10);
    }
}
