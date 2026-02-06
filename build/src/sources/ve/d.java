package ve;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d extends hf.a {
    @NonNull
    public static final Parcelable.Creator<d> CREATOR = new n();

    /* renamed from: d  reason: collision with root package name */
    private final String f52611d;

    /* renamed from: e  reason: collision with root package name */
    private final String f52612e;

    /* renamed from: i  reason: collision with root package name */
    private final String f52613i;

    /* renamed from: o  reason: collision with root package name */
    private final String f52614o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f52615p;

    /* renamed from: q  reason: collision with root package name */
    private final int f52616q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private String f52617a;

        /* renamed from: b  reason: collision with root package name */
        private String f52618b;

        /* renamed from: c  reason: collision with root package name */
        private String f52619c;

        /* renamed from: d  reason: collision with root package name */
        private String f52620d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f52621e;

        /* renamed from: f  reason: collision with root package name */
        private int f52622f;

        public d a() {
            return new d(this.f52617a, this.f52618b, this.f52619c, this.f52620d, this.f52621e, this.f52622f);
        }

        public a b(String str) {
            this.f52618b = str;
            return this;
        }

        public a c(String str) {
            this.f52620d = str;
            return this;
        }

        public a d(boolean z10) {
            this.f52621e = z10;
            return this;
        }

        public a e(String str) {
            gf.q.l(str);
            this.f52617a = str;
            return this;
        }

        public final a f(String str) {
            this.f52619c = str;
            return this;
        }

        public final a g(int i10) {
            this.f52622f = i10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(String str, String str2, String str3, String str4, boolean z10, int i10) {
        gf.q.l(str);
        this.f52611d = str;
        this.f52612e = str2;
        this.f52613i = str3;
        this.f52614o = str4;
        this.f52615p = z10;
        this.f52616q = i10;
    }

    public static a b() {
        return new a();
    }

    public static a h(d dVar) {
        gf.q.l(dVar);
        a b10 = b();
        b10.e(dVar.e());
        b10.c(dVar.d());
        b10.b(dVar.c());
        b10.d(dVar.f52615p);
        b10.g(dVar.f52616q);
        String str = dVar.f52613i;
        if (str != null) {
            b10.f(str);
        }
        return b10;
    }

    public String c() {
        return this.f52612e;
    }

    public String d() {
        return this.f52614o;
    }

    public String e() {
        return this.f52611d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (!gf.o.a(this.f52611d, dVar.f52611d) || !gf.o.a(this.f52614o, dVar.f52614o) || !gf.o.a(this.f52612e, dVar.f52612e) || !gf.o.a(Boolean.valueOf(this.f52615p), Boolean.valueOf(dVar.f52615p)) || this.f52616q != dVar.f52616q) {
            return false;
        }
        return true;
    }

    public boolean f() {
        return this.f52615p;
    }

    public int hashCode() {
        return gf.o.b(this.f52611d, this.f52612e, this.f52614o, Boolean.valueOf(this.f52615p), Integer.valueOf(this.f52616q));
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, e(), false);
        hf.c.s(parcel, 2, c(), false);
        hf.c.s(parcel, 3, this.f52613i, false);
        hf.c.s(parcel, 4, d(), false);
        hf.c.c(parcel, 5, f());
        hf.c.l(parcel, 6, this.f52616q);
        hf.c.b(parcel, a10);
    }
}
