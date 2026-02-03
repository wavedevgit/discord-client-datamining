package ve;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends hf.a {
    @NonNull
    public static final Parcelable.Creator<a> CREATOR = new k();

    /* renamed from: d  reason: collision with root package name */
    private final e f51189d;

    /* renamed from: e  reason: collision with root package name */
    private final b f51190e;

    /* renamed from: i  reason: collision with root package name */
    private final String f51191i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f51192o;

    /* renamed from: p  reason: collision with root package name */
    private final int f51193p;

    /* renamed from: q  reason: collision with root package name */
    private final d f51194q;

    /* renamed from: r  reason: collision with root package name */
    private final c f51195r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f51196s;

    /* renamed from: ve.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0686a {

        /* renamed from: a  reason: collision with root package name */
        private e f51197a;

        /* renamed from: b  reason: collision with root package name */
        private b f51198b;

        /* renamed from: c  reason: collision with root package name */
        private d f51199c;

        /* renamed from: d  reason: collision with root package name */
        private c f51200d;

        /* renamed from: e  reason: collision with root package name */
        private String f51201e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f51202f;

        /* renamed from: g  reason: collision with root package name */
        private int f51203g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f51204h;

        public C0686a() {
            e.C0690a b10 = e.b();
            b10.b(false);
            this.f51197a = b10.a();
            b.C0687a b11 = b.b();
            b11.b(false);
            this.f51198b = b11.a();
            d.C0689a b12 = d.b();
            b12.d(false);
            this.f51199c = b12.a();
            c.C0688a b13 = c.b();
            b13.c(false);
            this.f51200d = b13.a();
        }

        public a a() {
            return new a(this.f51197a, this.f51198b, this.f51201e, this.f51202f, this.f51203g, this.f51199c, this.f51200d, this.f51204h);
        }

        public C0686a b(boolean z10) {
            this.f51202f = z10;
            return this;
        }

        public C0686a c(b bVar) {
            this.f51198b = (b) gf.q.l(bVar);
            return this;
        }

        public C0686a d(c cVar) {
            this.f51200d = (c) gf.q.l(cVar);
            return this;
        }

        public C0686a e(d dVar) {
            this.f51199c = (d) gf.q.l(dVar);
            return this;
        }

        public C0686a f(e eVar) {
            this.f51197a = (e) gf.q.l(eVar);
            return this;
        }

        public C0686a g(boolean z10) {
            this.f51204h = z10;
            return this;
        }

        public final C0686a h(String str) {
            this.f51201e = str;
            return this;
        }

        public final C0686a i(int i10) {
            this.f51203g = i10;
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends hf.a {
        @NonNull
        public static final Parcelable.Creator<b> CREATOR = new o();

        /* renamed from: d  reason: collision with root package name */
        private final boolean f51205d;

        /* renamed from: e  reason: collision with root package name */
        private final String f51206e;

        /* renamed from: i  reason: collision with root package name */
        private final String f51207i;

        /* renamed from: o  reason: collision with root package name */
        private final boolean f51208o;

        /* renamed from: p  reason: collision with root package name */
        private final String f51209p;

        /* renamed from: q  reason: collision with root package name */
        private final List f51210q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f51211r;

        /* renamed from: ve.a$b$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0687a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f51212a = false;

            /* renamed from: b  reason: collision with root package name */
            private String f51213b = null;

            /* renamed from: c  reason: collision with root package name */
            private String f51214c = null;

            /* renamed from: d  reason: collision with root package name */
            private boolean f51215d = true;

            /* renamed from: e  reason: collision with root package name */
            private String f51216e = null;

            /* renamed from: f  reason: collision with root package name */
            private List f51217f = null;

            /* renamed from: g  reason: collision with root package name */
            private boolean f51218g = false;

            public b a() {
                return new b(this.f51212a, this.f51213b, this.f51214c, this.f51215d, this.f51216e, this.f51217f, this.f51218g);
            }

            public C0687a b(boolean z10) {
                this.f51212a = z10;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public b(boolean z10, String str, String str2, boolean z11, String str3, List list, boolean z12) {
            boolean z13 = true;
            if (z11 && z12) {
                z13 = false;
            }
            gf.q.b(z13, "filterByAuthorizedAccounts and requestVerifiedPhoneNumber must not both be true; the Verified Phone Number feature only works in sign-ups.");
            this.f51205d = z10;
            if (z10) {
                gf.q.m(str, "serverClientId must be provided if Google ID tokens are requested");
            }
            this.f51206e = str;
            this.f51207i = str2;
            this.f51208o = z11;
            Parcelable.Creator<a> creator = a.CREATOR;
            ArrayList arrayList = null;
            if (list != null && !list.isEmpty()) {
                arrayList = new ArrayList(list);
                Collections.sort(arrayList);
            }
            this.f51210q = arrayList;
            this.f51209p = str3;
            this.f51211r = z12;
        }

        public static C0687a b() {
            return new C0687a();
        }

        public boolean c() {
            return this.f51208o;
        }

        public List d() {
            return this.f51210q;
        }

        public String e() {
            return this.f51209p;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (this.f51205d != bVar.f51205d || !gf.o.a(this.f51206e, bVar.f51206e) || !gf.o.a(this.f51207i, bVar.f51207i) || this.f51208o != bVar.f51208o || !gf.o.a(this.f51209p, bVar.f51209p) || !gf.o.a(this.f51210q, bVar.f51210q) || this.f51211r != bVar.f51211r) {
                return false;
            }
            return true;
        }

        public String f() {
            return this.f51207i;
        }

        public String g() {
            return this.f51206e;
        }

        public int hashCode() {
            return gf.o.b(Boolean.valueOf(this.f51205d), this.f51206e, this.f51207i, Boolean.valueOf(this.f51208o), this.f51209p, this.f51210q, Boolean.valueOf(this.f51211r));
        }

        public boolean i() {
            return this.f51205d;
        }

        public boolean j() {
            return this.f51211r;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            int a10 = hf.c.a(parcel);
            hf.c.c(parcel, 1, i());
            hf.c.s(parcel, 2, g(), false);
            hf.c.s(parcel, 3, f(), false);
            hf.c.c(parcel, 4, c());
            hf.c.s(parcel, 5, e(), false);
            hf.c.u(parcel, 6, d(), false);
            hf.c.c(parcel, 7, j());
            hf.c.b(parcel, a10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c extends hf.a {
        @NonNull
        public static final Parcelable.Creator<c> CREATOR = new p();

        /* renamed from: d  reason: collision with root package name */
        private final boolean f51219d;

        /* renamed from: e  reason: collision with root package name */
        private final String f51220e;

        /* renamed from: ve.a$c$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0688a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f51221a = false;

            /* renamed from: b  reason: collision with root package name */
            private String f51222b;

            public c a() {
                return new c(this.f51221a, this.f51222b);
            }

            public C0688a b(String str) {
                this.f51222b = str;
                return this;
            }

            public C0688a c(boolean z10) {
                this.f51221a = z10;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public c(boolean z10, String str) {
            if (z10) {
                gf.q.l(str);
            }
            this.f51219d = z10;
            this.f51220e = str;
        }

        public static C0688a b() {
            return new C0688a();
        }

        public String c() {
            return this.f51220e;
        }

        public boolean d() {
            return this.f51219d;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (this.f51219d == cVar.f51219d && gf.o.a(this.f51220e, cVar.f51220e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return gf.o.b(Boolean.valueOf(this.f51219d), this.f51220e);
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            int a10 = hf.c.a(parcel);
            hf.c.c(parcel, 1, d());
            hf.c.s(parcel, 2, c(), false);
            hf.c.b(parcel, a10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d extends hf.a {
        @NonNull
        public static final Parcelable.Creator<d> CREATOR = new q();

        /* renamed from: d  reason: collision with root package name */
        private final boolean f51223d;

        /* renamed from: e  reason: collision with root package name */
        private final byte[] f51224e;

        /* renamed from: i  reason: collision with root package name */
        private final String f51225i;

        /* renamed from: ve.a$d$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0689a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f51226a = false;

            /* renamed from: b  reason: collision with root package name */
            private byte[] f51227b;

            /* renamed from: c  reason: collision with root package name */
            private String f51228c;

            public d a() {
                return new d(this.f51226a, this.f51227b, this.f51228c);
            }

            public C0689a b(byte[] bArr) {
                this.f51227b = bArr;
                return this;
            }

            public C0689a c(String str) {
                this.f51228c = str;
                return this;
            }

            public C0689a d(boolean z10) {
                this.f51226a = z10;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public d(boolean z10, byte[] bArr, String str) {
            if (z10) {
                gf.q.l(bArr);
                gf.q.l(str);
            }
            this.f51223d = z10;
            this.f51224e = bArr;
            this.f51225i = str;
        }

        public static C0689a b() {
            return new C0689a();
        }

        public byte[] c() {
            return this.f51224e;
        }

        public String d() {
            return this.f51225i;
        }

        public boolean e() {
            return this.f51223d;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof d)) {
                return false;
            }
            d dVar = (d) obj;
            if (this.f51223d == dVar.f51223d && Arrays.equals(this.f51224e, dVar.f51224e) && Objects.equals(this.f51225i, dVar.f51225i)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (Objects.hash(Boolean.valueOf(this.f51223d), this.f51225i) * 31) + Arrays.hashCode(this.f51224e);
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            int a10 = hf.c.a(parcel);
            hf.c.c(parcel, 1, e());
            hf.c.f(parcel, 2, c(), false);
            hf.c.s(parcel, 3, d(), false);
            hf.c.b(parcel, a10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class e extends hf.a {
        @NonNull
        public static final Parcelable.Creator<e> CREATOR = new r();

        /* renamed from: d  reason: collision with root package name */
        private final boolean f51229d;

        /* renamed from: ve.a$e$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0690a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f51230a = false;

            public e a() {
                return new e(this.f51230a);
            }

            public C0690a b(boolean z10) {
                this.f51230a = z10;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public e(boolean z10) {
            this.f51229d = z10;
        }

        public static C0690a b() {
            return new C0690a();
        }

        public boolean c() {
            return this.f51229d;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof e) || this.f51229d != ((e) obj).f51229d) {
                return false;
            }
            return true;
        }

        public int hashCode() {
            return gf.o.b(Boolean.valueOf(this.f51229d));
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            int a10 = hf.c.a(parcel);
            hf.c.c(parcel, 1, c());
            hf.c.b(parcel, a10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(e eVar, b bVar, String str, boolean z10, int i10, d dVar, c cVar, boolean z11) {
        this.f51189d = (e) gf.q.l(eVar);
        this.f51190e = (b) gf.q.l(bVar);
        this.f51191i = str;
        this.f51192o = z10;
        this.f51193p = i10;
        if (dVar == null) {
            d.C0689a b10 = d.b();
            b10.d(false);
            dVar = b10.a();
        }
        this.f51194q = dVar;
        if (cVar == null) {
            c.C0688a b11 = c.b();
            b11.c(false);
            cVar = b11.a();
        }
        this.f51195r = cVar;
        this.f51196s = z11;
    }

    public static C0686a b() {
        return new C0686a();
    }

    public static C0686a j(a aVar) {
        gf.q.l(aVar);
        C0686a b10 = b();
        b10.c(aVar.c());
        b10.f(aVar.f());
        b10.e(aVar.e());
        b10.d(aVar.d());
        b10.b(aVar.f51192o);
        b10.i(aVar.f51193p);
        b10.g(aVar.f51196s);
        String str = aVar.f51191i;
        if (str != null) {
            b10.h(str);
        }
        return b10;
    }

    public b c() {
        return this.f51190e;
    }

    public c d() {
        return this.f51195r;
    }

    public d e() {
        return this.f51194q;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (!gf.o.a(this.f51189d, aVar.f51189d) || !gf.o.a(this.f51190e, aVar.f51190e) || !gf.o.a(this.f51194q, aVar.f51194q) || !gf.o.a(this.f51195r, aVar.f51195r) || !gf.o.a(this.f51191i, aVar.f51191i) || this.f51192o != aVar.f51192o || this.f51193p != aVar.f51193p || this.f51196s != aVar.f51196s) {
            return false;
        }
        return true;
    }

    public e f() {
        return this.f51189d;
    }

    public boolean g() {
        return this.f51196s;
    }

    public int hashCode() {
        return gf.o.b(this.f51189d, this.f51190e, this.f51194q, this.f51195r, this.f51191i, Boolean.valueOf(this.f51192o), Integer.valueOf(this.f51193p), Boolean.valueOf(this.f51196s));
    }

    public boolean i() {
        return this.f51192o;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.q(parcel, 1, f(), i10, false);
        hf.c.q(parcel, 2, c(), i10, false);
        hf.c.s(parcel, 3, this.f51191i, false);
        hf.c.c(parcel, 4, i());
        hf.c.l(parcel, 5, this.f51193p);
        hf.c.q(parcel, 6, e(), i10, false);
        hf.c.q(parcel, 7, d(), i10, false);
        hf.c.c(parcel, 8, g());
        hf.c.b(parcel, a10);
    }
}
