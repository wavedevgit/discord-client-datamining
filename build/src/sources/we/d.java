package we;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d extends jf.a {
    @NonNull
    public static final Parcelable.Creator<d> CREATOR = new n();

    /* renamed from: d  reason: collision with root package name */
    private final String f53686d;

    /* renamed from: e  reason: collision with root package name */
    private final String f53687e;

    /* renamed from: i  reason: collision with root package name */
    private final String f53688i;

    /* renamed from: o  reason: collision with root package name */
    private final String f53689o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f53690p;

    /* renamed from: q  reason: collision with root package name */
    private final int f53691q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private String f53692a;

        /* renamed from: b  reason: collision with root package name */
        private String f53693b;

        /* renamed from: c  reason: collision with root package name */
        private String f53694c;

        /* renamed from: d  reason: collision with root package name */
        private String f53695d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f53696e;

        /* renamed from: f  reason: collision with root package name */
        private int f53697f;

        public d a() {
            return new d(this.f53692a, this.f53693b, this.f53694c, this.f53695d, this.f53696e, this.f53697f);
        }

        public a b(String str) {
            this.f53693b = str;
            return this;
        }

        public a c(String str) {
            this.f53695d = str;
            return this;
        }

        public a d(boolean z10) {
            this.f53696e = z10;
            return this;
        }

        public a e(String str) {
            hf.q.l(str);
            this.f53692a = str;
            return this;
        }

        public final a f(String str) {
            this.f53694c = str;
            return this;
        }

        public final a g(int i10) {
            this.f53697f = i10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(String str, String str2, String str3, String str4, boolean z10, int i10) {
        hf.q.l(str);
        this.f53686d = str;
        this.f53687e = str2;
        this.f53688i = str3;
        this.f53689o = str4;
        this.f53690p = z10;
        this.f53691q = i10;
    }

    public static a b() {
        return new a();
    }

    public static a h(d dVar) {
        hf.q.l(dVar);
        a b10 = b();
        b10.e(dVar.e());
        b10.c(dVar.d());
        b10.b(dVar.c());
        b10.d(dVar.f53690p);
        b10.g(dVar.f53691q);
        String str = dVar.f53688i;
        if (str != null) {
            b10.f(str);
        }
        return b10;
    }

    public String c() {
        return this.f53687e;
    }

    public String d() {
        return this.f53689o;
    }

    public String e() {
        return this.f53686d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (!hf.o.a(this.f53686d, dVar.f53686d) || !hf.o.a(this.f53689o, dVar.f53689o) || !hf.o.a(this.f53687e, dVar.f53687e) || !hf.o.a(Boolean.valueOf(this.f53690p), Boolean.valueOf(dVar.f53690p)) || this.f53691q != dVar.f53691q) {
            return false;
        }
        return true;
    }

    public boolean f() {
        return this.f53690p;
    }

    public int hashCode() {
        return hf.o.b(this.f53686d, this.f53687e, this.f53689o, Boolean.valueOf(this.f53690p), Integer.valueOf(this.f53691q));
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, e(), false);
        jf.c.s(parcel, 2, c(), false);
        jf.c.s(parcel, 3, this.f53688i, false);
        jf.c.s(parcel, 4, d(), false);
        jf.c.c(parcel, 5, f());
        jf.c.l(parcel, 6, this.f53691q);
        jf.c.b(parcel, a10);
    }
}
