package we;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class d extends jf.a {
    @NonNull
    public static final Parcelable.Creator<d> CREATOR = new n();

    /* renamed from: d  reason: collision with root package name */
    private final String f52716d;

    /* renamed from: e  reason: collision with root package name */
    private final String f52717e;

    /* renamed from: i  reason: collision with root package name */
    private final String f52718i;

    /* renamed from: o  reason: collision with root package name */
    private final String f52719o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f52720p;

    /* renamed from: q  reason: collision with root package name */
    private final int f52721q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private String f52722a;

        /* renamed from: b  reason: collision with root package name */
        private String f52723b;

        /* renamed from: c  reason: collision with root package name */
        private String f52724c;

        /* renamed from: d  reason: collision with root package name */
        private String f52725d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f52726e;

        /* renamed from: f  reason: collision with root package name */
        private int f52727f;

        public d a() {
            return new d(this.f52722a, this.f52723b, this.f52724c, this.f52725d, this.f52726e, this.f52727f);
        }

        public a b(String str) {
            this.f52723b = str;
            return this;
        }

        public a c(String str) {
            this.f52725d = str;
            return this;
        }

        public a d(boolean z10) {
            this.f52726e = z10;
            return this;
        }

        public a e(String str) {
            hf.q.l(str);
            this.f52722a = str;
            return this;
        }

        public final a f(String str) {
            this.f52724c = str;
            return this;
        }

        public final a g(int i10) {
            this.f52727f = i10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(String str, String str2, String str3, String str4, boolean z10, int i10) {
        hf.q.l(str);
        this.f52716d = str;
        this.f52717e = str2;
        this.f52718i = str3;
        this.f52719o = str4;
        this.f52720p = z10;
        this.f52721q = i10;
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
        b10.d(dVar.f52720p);
        b10.g(dVar.f52721q);
        String str = dVar.f52718i;
        if (str != null) {
            b10.f(str);
        }
        return b10;
    }

    public String c() {
        return this.f52717e;
    }

    public String d() {
        return this.f52719o;
    }

    public String e() {
        return this.f52716d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof d)) {
            return false;
        }
        d dVar = (d) obj;
        if (!hf.o.a(this.f52716d, dVar.f52716d) || !hf.o.a(this.f52719o, dVar.f52719o) || !hf.o.a(this.f52717e, dVar.f52717e) || !hf.o.a(Boolean.valueOf(this.f52720p), Boolean.valueOf(dVar.f52720p)) || this.f52721q != dVar.f52721q) {
            return false;
        }
        return true;
    }

    public boolean f() {
        return this.f52720p;
    }

    public int hashCode() {
        return hf.o.b(this.f52716d, this.f52717e, this.f52719o, Boolean.valueOf(this.f52720p), Integer.valueOf(this.f52721q));
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, e(), false);
        jf.c.s(parcel, 2, c(), false);
        jf.c.s(parcel, 3, this.f52718i, false);
        jf.c.s(parcel, 4, d(), false);
        jf.c.c(parcel, 5, f());
        jf.c.l(parcel, 6, this.f52721q);
        jf.c.b(parcel, a10);
    }
}
