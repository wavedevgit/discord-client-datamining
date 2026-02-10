package we;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d extends jf.a {
    @NonNull
    public static final Parcelable.Creator<d> CREATOR = new n();

    /* renamed from: d  reason: collision with root package name */
    private final String f52715d;

    /* renamed from: e  reason: collision with root package name */
    private final String f52716e;

    /* renamed from: i  reason: collision with root package name */
    private final String f52717i;

    /* renamed from: o  reason: collision with root package name */
    private final String f52718o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f52719p;

    /* renamed from: q  reason: collision with root package name */
    private final int f52720q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private String f52721a;

        /* renamed from: b  reason: collision with root package name */
        private String f52722b;

        /* renamed from: c  reason: collision with root package name */
        private String f52723c;

        /* renamed from: d  reason: collision with root package name */
        private String f52724d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f52725e;

        /* renamed from: f  reason: collision with root package name */
        private int f52726f;

        public d a() {
            return new d(this.f52721a, this.f52722b, this.f52723c, this.f52724d, this.f52725e, this.f52726f);
        }

        public a b(String str) {
            this.f52722b = str;
            return this;
        }

        public a c(String str) {
            this.f52724d = str;
            return this;
        }

        public a d(boolean z10) {
            this.f52725e = z10;
            return this;
        }

        public a e(String str) {
            hf.q.l(str);
            this.f52721a = str;
            return this;
        }

        public final a f(String str) {
            this.f52723c = str;
            return this;
        }

        public final a g(int i10) {
            this.f52726f = i10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(String str, String str2, String str3, String str4, boolean z10, int i10) {
        hf.q.l(str);
        this.f52715d = str;
        this.f52716e = str2;
        this.f52717i = str3;
        this.f52718o = str4;
        this.f52719p = z10;
        this.f52720q = i10;
    }

    public static a b() {
        return new a();
    }

    public static a g(d dVar) {
        hf.q.l(dVar);
        a b10 = b();
        b10.e(dVar.e());
        b10.c(dVar.d());
        b10.b(dVar.c());
        b10.d(dVar.f52719p);
        b10.g(dVar.f52720q);
        String str = dVar.f52717i;
        if (str != null) {
            b10.f(str);
        }
        return b10;
    }

    public String c() {
        return this.f52716e;
    }

    public String d() {
        return this.f52718o;
    }

    public String e() {
        return this.f52715d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (!hf.o.a(this.f52715d, dVar.f52715d) || !hf.o.a(this.f52718o, dVar.f52718o) || !hf.o.a(this.f52716e, dVar.f52716e) || !hf.o.a(Boolean.valueOf(this.f52719p), Boolean.valueOf(dVar.f52719p)) || this.f52720q != dVar.f52720q) {
            return false;
        }
        return true;
    }

    public boolean f() {
        return this.f52719p;
    }

    public int hashCode() {
        return hf.o.b(this.f52715d, this.f52716e, this.f52718o, Boolean.valueOf(this.f52719p), Integer.valueOf(this.f52720q));
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, e(), false);
        jf.c.s(parcel, 2, c(), false);
        jf.c.s(parcel, 3, this.f52717i, false);
        jf.c.s(parcel, 4, d(), false);
        jf.c.c(parcel, 5, f());
        jf.c.l(parcel, 6, this.f52720q);
        jf.c.b(parcel, a10);
    }
}
