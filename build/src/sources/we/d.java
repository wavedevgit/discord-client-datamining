package we;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d extends jf.a {
    @NonNull
    public static final Parcelable.Creator<d> CREATOR = new n();

    /* renamed from: d  reason: collision with root package name */
    private final String f53284d;

    /* renamed from: e  reason: collision with root package name */
    private final String f53285e;

    /* renamed from: i  reason: collision with root package name */
    private final String f53286i;

    /* renamed from: o  reason: collision with root package name */
    private final String f53287o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f53288p;

    /* renamed from: q  reason: collision with root package name */
    private final int f53289q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private String f53290a;

        /* renamed from: b  reason: collision with root package name */
        private String f53291b;

        /* renamed from: c  reason: collision with root package name */
        private String f53292c;

        /* renamed from: d  reason: collision with root package name */
        private String f53293d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f53294e;

        /* renamed from: f  reason: collision with root package name */
        private int f53295f;

        public d a() {
            return new d(this.f53290a, this.f53291b, this.f53292c, this.f53293d, this.f53294e, this.f53295f);
        }

        public a b(String str) {
            this.f53291b = str;
            return this;
        }

        public a c(String str) {
            this.f53293d = str;
            return this;
        }

        public a d(boolean z10) {
            this.f53294e = z10;
            return this;
        }

        public a e(String str) {
            hf.q.l(str);
            this.f53290a = str;
            return this;
        }

        public final a f(String str) {
            this.f53292c = str;
            return this;
        }

        public final a g(int i10) {
            this.f53295f = i10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(String str, String str2, String str3, String str4, boolean z10, int i10) {
        hf.q.l(str);
        this.f53284d = str;
        this.f53285e = str2;
        this.f53286i = str3;
        this.f53287o = str4;
        this.f53288p = z10;
        this.f53289q = i10;
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
        b10.d(dVar.f53288p);
        b10.g(dVar.f53289q);
        String str = dVar.f53286i;
        if (str != null) {
            b10.f(str);
        }
        return b10;
    }

    public String c() {
        return this.f53285e;
    }

    public String d() {
        return this.f53287o;
    }

    public String e() {
        return this.f53284d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (!hf.o.a(this.f53284d, dVar.f53284d) || !hf.o.a(this.f53287o, dVar.f53287o) || !hf.o.a(this.f53285e, dVar.f53285e) || !hf.o.a(Boolean.valueOf(this.f53288p), Boolean.valueOf(dVar.f53288p)) || this.f53289q != dVar.f53289q) {
            return false;
        }
        return true;
    }

    public boolean f() {
        return this.f53288p;
    }

    public int hashCode() {
        return hf.o.b(this.f53284d, this.f53285e, this.f53287o, Boolean.valueOf(this.f53288p), Integer.valueOf(this.f53289q));
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, e(), false);
        jf.c.s(parcel, 2, c(), false);
        jf.c.s(parcel, 3, this.f53286i, false);
        jf.c.s(parcel, 4, d(), false);
        jf.c.c(parcel, 5, f());
        jf.c.l(parcel, 6, this.f53289q);
        jf.c.b(parcel, a10);
    }
}
