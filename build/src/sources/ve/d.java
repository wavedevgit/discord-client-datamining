package ve;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d extends hf.a {
    @NonNull
    public static final Parcelable.Creator<d> CREATOR = new n();

    /* renamed from: d  reason: collision with root package name */
    private final String f52659d;

    /* renamed from: e  reason: collision with root package name */
    private final String f52660e;

    /* renamed from: i  reason: collision with root package name */
    private final String f52661i;

    /* renamed from: o  reason: collision with root package name */
    private final String f52662o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f52663p;

    /* renamed from: q  reason: collision with root package name */
    private final int f52664q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private String f52665a;

        /* renamed from: b  reason: collision with root package name */
        private String f52666b;

        /* renamed from: c  reason: collision with root package name */
        private String f52667c;

        /* renamed from: d  reason: collision with root package name */
        private String f52668d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f52669e;

        /* renamed from: f  reason: collision with root package name */
        private int f52670f;

        public d a() {
            return new d(this.f52665a, this.f52666b, this.f52667c, this.f52668d, this.f52669e, this.f52670f);
        }

        public a b(String str) {
            this.f52666b = str;
            return this;
        }

        public a c(String str) {
            this.f52668d = str;
            return this;
        }

        public a d(boolean z10) {
            this.f52669e = z10;
            return this;
        }

        public a e(String str) {
            gf.q.l(str);
            this.f52665a = str;
            return this;
        }

        public final a f(String str) {
            this.f52667c = str;
            return this;
        }

        public final a g(int i10) {
            this.f52670f = i10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(String str, String str2, String str3, String str4, boolean z10, int i10) {
        gf.q.l(str);
        this.f52659d = str;
        this.f52660e = str2;
        this.f52661i = str3;
        this.f52662o = str4;
        this.f52663p = z10;
        this.f52664q = i10;
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
        b10.d(dVar.f52663p);
        b10.g(dVar.f52664q);
        String str = dVar.f52661i;
        if (str != null) {
            b10.f(str);
        }
        return b10;
    }

    public String c() {
        return this.f52660e;
    }

    public String d() {
        return this.f52662o;
    }

    public String e() {
        return this.f52659d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (!gf.o.a(this.f52659d, dVar.f52659d) || !gf.o.a(this.f52662o, dVar.f52662o) || !gf.o.a(this.f52660e, dVar.f52660e) || !gf.o.a(Boolean.valueOf(this.f52663p), Boolean.valueOf(dVar.f52663p)) || this.f52664q != dVar.f52664q) {
            return false;
        }
        return true;
    }

    public boolean f() {
        return this.f52663p;
    }

    public int hashCode() {
        return gf.o.b(this.f52659d, this.f52660e, this.f52662o, Boolean.valueOf(this.f52663p), Integer.valueOf(this.f52664q));
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, e(), false);
        hf.c.s(parcel, 2, c(), false);
        hf.c.s(parcel, 3, this.f52661i, false);
        hf.c.s(parcel, 4, d(), false);
        hf.c.c(parcel, 5, f());
        hf.c.l(parcel, 6, this.f52664q);
        hf.c.b(parcel, a10);
    }
}
