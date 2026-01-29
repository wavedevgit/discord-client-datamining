package ve;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d extends hf.a {
    @NonNull
    public static final Parcelable.Creator<d> CREATOR = new n();

    /* renamed from: d  reason: collision with root package name */
    private final String f51092d;

    /* renamed from: e  reason: collision with root package name */
    private final String f51093e;

    /* renamed from: i  reason: collision with root package name */
    private final String f51094i;

    /* renamed from: o  reason: collision with root package name */
    private final String f51095o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f51096p;

    /* renamed from: q  reason: collision with root package name */
    private final int f51097q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private String f51098a;

        /* renamed from: b  reason: collision with root package name */
        private String f51099b;

        /* renamed from: c  reason: collision with root package name */
        private String f51100c;

        /* renamed from: d  reason: collision with root package name */
        private String f51101d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f51102e;

        /* renamed from: f  reason: collision with root package name */
        private int f51103f;

        public d a() {
            return new d(this.f51098a, this.f51099b, this.f51100c, this.f51101d, this.f51102e, this.f51103f);
        }

        public a b(String str) {
            this.f51099b = str;
            return this;
        }

        public a c(String str) {
            this.f51101d = str;
            return this;
        }

        public a d(boolean z10) {
            this.f51102e = z10;
            return this;
        }

        public a e(String str) {
            gf.q.l(str);
            this.f51098a = str;
            return this;
        }

        public final a f(String str) {
            this.f51100c = str;
            return this;
        }

        public final a g(int i10) {
            this.f51103f = i10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(String str, String str2, String str3, String str4, boolean z10, int i10) {
        gf.q.l(str);
        this.f51092d = str;
        this.f51093e = str2;
        this.f51094i = str3;
        this.f51095o = str4;
        this.f51096p = z10;
        this.f51097q = i10;
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
        b10.d(dVar.f51096p);
        b10.g(dVar.f51097q);
        String str = dVar.f51094i;
        if (str != null) {
            b10.f(str);
        }
        return b10;
    }

    public String c() {
        return this.f51093e;
    }

    public String d() {
        return this.f51095o;
    }

    public String e() {
        return this.f51092d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (!gf.o.a(this.f51092d, dVar.f51092d) || !gf.o.a(this.f51095o, dVar.f51095o) || !gf.o.a(this.f51093e, dVar.f51093e) || !gf.o.a(Boolean.valueOf(this.f51096p), Boolean.valueOf(dVar.f51096p)) || this.f51097q != dVar.f51097q) {
            return false;
        }
        return true;
    }

    public boolean f() {
        return this.f51096p;
    }

    public int hashCode() {
        return gf.o.b(this.f51092d, this.f51093e, this.f51095o, Boolean.valueOf(this.f51096p), Integer.valueOf(this.f51097q));
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, e(), false);
        hf.c.s(parcel, 2, c(), false);
        hf.c.s(parcel, 3, this.f51094i, false);
        hf.c.s(parcel, 4, d(), false);
        hf.c.c(parcel, 5, f());
        hf.c.l(parcel, 6, this.f51097q);
        hf.c.b(parcel, a10);
    }
}
