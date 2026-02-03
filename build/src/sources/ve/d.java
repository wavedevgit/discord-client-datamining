package ve;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d extends hf.a {
    @NonNull
    public static final Parcelable.Creator<d> CREATOR = new n();

    /* renamed from: d  reason: collision with root package name */
    private final String f51560d;

    /* renamed from: e  reason: collision with root package name */
    private final String f51561e;

    /* renamed from: i  reason: collision with root package name */
    private final String f51562i;

    /* renamed from: o  reason: collision with root package name */
    private final String f51563o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f51564p;

    /* renamed from: q  reason: collision with root package name */
    private final int f51565q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private String f51566a;

        /* renamed from: b  reason: collision with root package name */
        private String f51567b;

        /* renamed from: c  reason: collision with root package name */
        private String f51568c;

        /* renamed from: d  reason: collision with root package name */
        private String f51569d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f51570e;

        /* renamed from: f  reason: collision with root package name */
        private int f51571f;

        public d a() {
            return new d(this.f51566a, this.f51567b, this.f51568c, this.f51569d, this.f51570e, this.f51571f);
        }

        public a b(String str) {
            this.f51567b = str;
            return this;
        }

        public a c(String str) {
            this.f51569d = str;
            return this;
        }

        public a d(boolean z10) {
            this.f51570e = z10;
            return this;
        }

        public a e(String str) {
            gf.q.l(str);
            this.f51566a = str;
            return this;
        }

        public final a f(String str) {
            this.f51568c = str;
            return this;
        }

        public final a g(int i10) {
            this.f51571f = i10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(String str, String str2, String str3, String str4, boolean z10, int i10) {
        gf.q.l(str);
        this.f51560d = str;
        this.f51561e = str2;
        this.f51562i = str3;
        this.f51563o = str4;
        this.f51564p = z10;
        this.f51565q = i10;
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
        b10.d(dVar.f51564p);
        b10.g(dVar.f51565q);
        String str = dVar.f51562i;
        if (str != null) {
            b10.f(str);
        }
        return b10;
    }

    public String c() {
        return this.f51561e;
    }

    public String d() {
        return this.f51563o;
    }

    public String e() {
        return this.f51560d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (!gf.o.a(this.f51560d, dVar.f51560d) || !gf.o.a(this.f51563o, dVar.f51563o) || !gf.o.a(this.f51561e, dVar.f51561e) || !gf.o.a(Boolean.valueOf(this.f51564p), Boolean.valueOf(dVar.f51564p)) || this.f51565q != dVar.f51565q) {
            return false;
        }
        return true;
    }

    public boolean f() {
        return this.f51564p;
    }

    public int hashCode() {
        return gf.o.b(this.f51560d, this.f51561e, this.f51563o, Boolean.valueOf(this.f51564p), Integer.valueOf(this.f51565q));
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, e(), false);
        hf.c.s(parcel, 2, c(), false);
        hf.c.s(parcel, 3, this.f51562i, false);
        hf.c.s(parcel, 4, d(), false);
        hf.c.c(parcel, 5, f());
        hf.c.l(parcel, 6, this.f51565q);
        hf.c.b(parcel, a10);
    }
}
