package ve;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d extends hf.a {
    @NonNull
    public static final Parcelable.Creator<d> CREATOR = new n();

    /* renamed from: d  reason: collision with root package name */
    private final String f52246d;

    /* renamed from: e  reason: collision with root package name */
    private final String f52247e;

    /* renamed from: i  reason: collision with root package name */
    private final String f52248i;

    /* renamed from: o  reason: collision with root package name */
    private final String f52249o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f52250p;

    /* renamed from: q  reason: collision with root package name */
    private final int f52251q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private String f52252a;

        /* renamed from: b  reason: collision with root package name */
        private String f52253b;

        /* renamed from: c  reason: collision with root package name */
        private String f52254c;

        /* renamed from: d  reason: collision with root package name */
        private String f52255d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f52256e;

        /* renamed from: f  reason: collision with root package name */
        private int f52257f;

        public d a() {
            return new d(this.f52252a, this.f52253b, this.f52254c, this.f52255d, this.f52256e, this.f52257f);
        }

        public a b(String str) {
            this.f52253b = str;
            return this;
        }

        public a c(String str) {
            this.f52255d = str;
            return this;
        }

        public a d(boolean z10) {
            this.f52256e = z10;
            return this;
        }

        public a e(String str) {
            gf.q.l(str);
            this.f52252a = str;
            return this;
        }

        public final a f(String str) {
            this.f52254c = str;
            return this;
        }

        public final a g(int i10) {
            this.f52257f = i10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(String str, String str2, String str3, String str4, boolean z10, int i10) {
        gf.q.l(str);
        this.f52246d = str;
        this.f52247e = str2;
        this.f52248i = str3;
        this.f52249o = str4;
        this.f52250p = z10;
        this.f52251q = i10;
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
        b10.d(dVar.f52250p);
        b10.g(dVar.f52251q);
        String str = dVar.f52248i;
        if (str != null) {
            b10.f(str);
        }
        return b10;
    }

    public String c() {
        return this.f52247e;
    }

    public String d() {
        return this.f52249o;
    }

    public String e() {
        return this.f52246d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (!gf.o.a(this.f52246d, dVar.f52246d) || !gf.o.a(this.f52249o, dVar.f52249o) || !gf.o.a(this.f52247e, dVar.f52247e) || !gf.o.a(Boolean.valueOf(this.f52250p), Boolean.valueOf(dVar.f52250p)) || this.f52251q != dVar.f52251q) {
            return false;
        }
        return true;
    }

    public boolean f() {
        return this.f52250p;
    }

    public int hashCode() {
        return gf.o.b(this.f52246d, this.f52247e, this.f52249o, Boolean.valueOf(this.f52250p), Integer.valueOf(this.f52251q));
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, e(), false);
        hf.c.s(parcel, 2, c(), false);
        hf.c.s(parcel, 3, this.f52248i, false);
        hf.c.s(parcel, 4, d(), false);
        hf.c.c(parcel, 5, f());
        hf.c.l(parcel, 6, this.f52251q);
        hf.c.b(parcel, a10);
    }
}
