package ve;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d extends hf.a {
    @NonNull
    public static final Parcelable.Creator<d> CREATOR = new n();

    /* renamed from: d  reason: collision with root package name */
    private final String f51232d;

    /* renamed from: e  reason: collision with root package name */
    private final String f51233e;

    /* renamed from: i  reason: collision with root package name */
    private final String f51234i;

    /* renamed from: o  reason: collision with root package name */
    private final String f51235o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f51236p;

    /* renamed from: q  reason: collision with root package name */
    private final int f51237q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private String f51238a;

        /* renamed from: b  reason: collision with root package name */
        private String f51239b;

        /* renamed from: c  reason: collision with root package name */
        private String f51240c;

        /* renamed from: d  reason: collision with root package name */
        private String f51241d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f51242e;

        /* renamed from: f  reason: collision with root package name */
        private int f51243f;

        public d a() {
            return new d(this.f51238a, this.f51239b, this.f51240c, this.f51241d, this.f51242e, this.f51243f);
        }

        public a b(String str) {
            this.f51239b = str;
            return this;
        }

        public a c(String str) {
            this.f51241d = str;
            return this;
        }

        public a d(boolean z10) {
            this.f51242e = z10;
            return this;
        }

        public a e(String str) {
            gf.q.l(str);
            this.f51238a = str;
            return this;
        }

        public final a f(String str) {
            this.f51240c = str;
            return this;
        }

        public final a g(int i10) {
            this.f51243f = i10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(String str, String str2, String str3, String str4, boolean z10, int i10) {
        gf.q.l(str);
        this.f51232d = str;
        this.f51233e = str2;
        this.f51234i = str3;
        this.f51235o = str4;
        this.f51236p = z10;
        this.f51237q = i10;
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
        b10.d(dVar.f51236p);
        b10.g(dVar.f51237q);
        String str = dVar.f51234i;
        if (str != null) {
            b10.f(str);
        }
        return b10;
    }

    public String c() {
        return this.f51233e;
    }

    public String d() {
        return this.f51235o;
    }

    public String e() {
        return this.f51232d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (!gf.o.a(this.f51232d, dVar.f51232d) || !gf.o.a(this.f51235o, dVar.f51235o) || !gf.o.a(this.f51233e, dVar.f51233e) || !gf.o.a(Boolean.valueOf(this.f51236p), Boolean.valueOf(dVar.f51236p)) || this.f51237q != dVar.f51237q) {
            return false;
        }
        return true;
    }

    public boolean f() {
        return this.f51236p;
    }

    public int hashCode() {
        return gf.o.b(this.f51232d, this.f51233e, this.f51235o, Boolean.valueOf(this.f51236p), Integer.valueOf(this.f51237q));
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, e(), false);
        hf.c.s(parcel, 2, c(), false);
        hf.c.s(parcel, 3, this.f51234i, false);
        hf.c.s(parcel, 4, d(), false);
        hf.c.c(parcel, 5, f());
        hf.c.l(parcel, 6, this.f51237q);
        hf.c.b(parcel, a10);
    }
}
