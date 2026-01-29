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
    private final e f51049d;

    /* renamed from: e  reason: collision with root package name */
    private final b f51050e;

    /* renamed from: i  reason: collision with root package name */
    private final String f51051i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f51052o;

    /* renamed from: p  reason: collision with root package name */
    private final int f51053p;

    /* renamed from: q  reason: collision with root package name */
    private final d f51054q;

    /* renamed from: r  reason: collision with root package name */
    private final c f51055r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f51056s;

    /* renamed from: ve.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0674a {

        /* renamed from: a  reason: collision with root package name */
        private e f51057a;

        /* renamed from: b  reason: collision with root package name */
        private b f51058b;

        /* renamed from: c  reason: collision with root package name */
        private d f51059c;

        /* renamed from: d  reason: collision with root package name */
        private c f51060d;

        /* renamed from: e  reason: collision with root package name */
        private String f51061e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f51062f;

        /* renamed from: g  reason: collision with root package name */
        private int f51063g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f51064h;

        public C0674a() {
            e.C0678a b10 = e.b();
            b10.b(false);
            this.f51057a = b10.a();
            b.C0675a b11 = b.b();
            b11.b(false);
            this.f51058b = b11.a();
            d.C0677a b12 = d.b();
            b12.d(false);
            this.f51059c = b12.a();
            c.C0676a b13 = c.b();
            b13.c(false);
            this.f51060d = b13.a();
        }

        public a a() {
            return new a(this.f51057a, this.f51058b, this.f51061e, this.f51062f, this.f51063g, this.f51059c, this.f51060d, this.f51064h);
        }

        public C0674a b(boolean z10) {
            this.f51062f = z10;
            return this;
        }

        public C0674a c(b bVar) {
            this.f51058b = (b) gf.q.l(bVar);
            return this;
        }

        public C0674a d(c cVar) {
            this.f51060d = (c) gf.q.l(cVar);
            return this;
        }

        public C0674a e(d dVar) {
            this.f51059c = (d) gf.q.l(dVar);
            return this;
        }

        public C0674a f(e eVar) {
            this.f51057a = (e) gf.q.l(eVar);
            return this;
        }

        public C0674a g(boolean z10) {
            this.f51064h = z10;
            return this;
        }

        public final C0674a h(String str) {
            this.f51061e = str;
            return this;
        }

        public final C0674a i(int i10) {
            this.f51063g = i10;
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends hf.a {
        @NonNull
        public static final Parcelable.Creator<b> CREATOR = new o();

        /* renamed from: d  reason: collision with root package name */
        private final boolean f51065d;

        /* renamed from: e  reason: collision with root package name */
        private final String f51066e;

        /* renamed from: i  reason: collision with root package name */
        private final String f51067i;

        /* renamed from: o  reason: collision with root package name */
        private final boolean f51068o;

        /* renamed from: p  reason: collision with root package name */
        private final String f51069p;

        /* renamed from: q  reason: collision with root package name */
        private final List f51070q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f51071r;

        /* renamed from: ve.a$b$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0675a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f51072a = false;

            /* renamed from: b  reason: collision with root package name */
            private String f51073b = null;

            /* renamed from: c  reason: collision with root package name */
            private String f51074c = null;

            /* renamed from: d  reason: collision with root package name */
            private boolean f51075d = true;

            /* renamed from: e  reason: collision with root package name */
            private String f51076e = null;

            /* renamed from: f  reason: collision with root package name */
            private List f51077f = null;

            /* renamed from: g  reason: collision with root package name */
            private boolean f51078g = false;

            public b a() {
                return new b(this.f51072a, this.f51073b, this.f51074c, this.f51075d, this.f51076e, this.f51077f, this.f51078g);
            }

            public C0675a b(boolean z10) {
                this.f51072a = z10;
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
            this.f51065d = z10;
            if (z10) {
                gf.q.m(str, "serverClientId must be provided if Google ID tokens are requested");
            }
            this.f51066e = str;
            this.f51067i = str2;
            this.f51068o = z11;
            Parcelable.Creator<a> creator = a.CREATOR;
            ArrayList arrayList = null;
            if (list != null && !list.isEmpty()) {
                arrayList = new ArrayList(list);
                Collections.sort(arrayList);
            }
            this.f51070q = arrayList;
            this.f51069p = str3;
            this.f51071r = z12;
        }

        public static C0675a b() {
            return new C0675a();
        }

        public boolean c() {
            return this.f51068o;
        }

        public List d() {
            return this.f51070q;
        }

        public String e() {
            return this.f51069p;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (this.f51065d != bVar.f51065d || !gf.o.a(this.f51066e, bVar.f51066e) || !gf.o.a(this.f51067i, bVar.f51067i) || this.f51068o != bVar.f51068o || !gf.o.a(this.f51069p, bVar.f51069p) || !gf.o.a(this.f51070q, bVar.f51070q) || this.f51071r != bVar.f51071r) {
                return false;
            }
            return true;
        }

        public String f() {
            return this.f51067i;
        }

        public String g() {
            return this.f51066e;
        }

        public int hashCode() {
            return gf.o.b(Boolean.valueOf(this.f51065d), this.f51066e, this.f51067i, Boolean.valueOf(this.f51068o), this.f51069p, this.f51070q, Boolean.valueOf(this.f51071r));
        }

        public boolean i() {
            return this.f51065d;
        }

        public boolean j() {
            return this.f51071r;
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
        private final boolean f51079d;

        /* renamed from: e  reason: collision with root package name */
        private final String f51080e;

        /* renamed from: ve.a$c$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0676a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f51081a = false;

            /* renamed from: b  reason: collision with root package name */
            private String f51082b;

            public c a() {
                return new c(this.f51081a, this.f51082b);
            }

            public C0676a b(String str) {
                this.f51082b = str;
                return this;
            }

            public C0676a c(boolean z10) {
                this.f51081a = z10;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public c(boolean z10, String str) {
            if (z10) {
                gf.q.l(str);
            }
            this.f51079d = z10;
            this.f51080e = str;
        }

        public static C0676a b() {
            return new C0676a();
        }

        public String c() {
            return this.f51080e;
        }

        public boolean d() {
            return this.f51079d;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (this.f51079d == cVar.f51079d && gf.o.a(this.f51080e, cVar.f51080e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return gf.o.b(Boolean.valueOf(this.f51079d), this.f51080e);
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
        private final boolean f51083d;

        /* renamed from: e  reason: collision with root package name */
        private final byte[] f51084e;

        /* renamed from: i  reason: collision with root package name */
        private final String f51085i;

        /* renamed from: ve.a$d$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0677a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f51086a = false;

            /* renamed from: b  reason: collision with root package name */
            private byte[] f51087b;

            /* renamed from: c  reason: collision with root package name */
            private String f51088c;

            public d a() {
                return new d(this.f51086a, this.f51087b, this.f51088c);
            }

            public C0677a b(byte[] bArr) {
                this.f51087b = bArr;
                return this;
            }

            public C0677a c(String str) {
                this.f51088c = str;
                return this;
            }

            public C0677a d(boolean z10) {
                this.f51086a = z10;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public d(boolean z10, byte[] bArr, String str) {
            if (z10) {
                gf.q.l(bArr);
                gf.q.l(str);
            }
            this.f51083d = z10;
            this.f51084e = bArr;
            this.f51085i = str;
        }

        public static C0677a b() {
            return new C0677a();
        }

        public byte[] c() {
            return this.f51084e;
        }

        public String d() {
            return this.f51085i;
        }

        public boolean e() {
            return this.f51083d;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof d)) {
                return false;
            }
            d dVar = (d) obj;
            if (this.f51083d == dVar.f51083d && Arrays.equals(this.f51084e, dVar.f51084e) && Objects.equals(this.f51085i, dVar.f51085i)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (Objects.hash(Boolean.valueOf(this.f51083d), this.f51085i) * 31) + Arrays.hashCode(this.f51084e);
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
        private final boolean f51089d;

        /* renamed from: ve.a$e$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0678a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f51090a = false;

            public e a() {
                return new e(this.f51090a);
            }

            public C0678a b(boolean z10) {
                this.f51090a = z10;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public e(boolean z10) {
            this.f51089d = z10;
        }

        public static C0678a b() {
            return new C0678a();
        }

        public boolean c() {
            return this.f51089d;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof e) || this.f51089d != ((e) obj).f51089d) {
                return false;
            }
            return true;
        }

        public int hashCode() {
            return gf.o.b(Boolean.valueOf(this.f51089d));
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
        this.f51049d = (e) gf.q.l(eVar);
        this.f51050e = (b) gf.q.l(bVar);
        this.f51051i = str;
        this.f51052o = z10;
        this.f51053p = i10;
        if (dVar == null) {
            d.C0677a b10 = d.b();
            b10.d(false);
            dVar = b10.a();
        }
        this.f51054q = dVar;
        if (cVar == null) {
            c.C0676a b11 = c.b();
            b11.c(false);
            cVar = b11.a();
        }
        this.f51055r = cVar;
        this.f51056s = z11;
    }

    public static C0674a b() {
        return new C0674a();
    }

    public static C0674a j(a aVar) {
        gf.q.l(aVar);
        C0674a b10 = b();
        b10.c(aVar.c());
        b10.f(aVar.f());
        b10.e(aVar.e());
        b10.d(aVar.d());
        b10.b(aVar.f51052o);
        b10.i(aVar.f51053p);
        b10.g(aVar.f51056s);
        String str = aVar.f51051i;
        if (str != null) {
            b10.h(str);
        }
        return b10;
    }

    public b c() {
        return this.f51050e;
    }

    public c d() {
        return this.f51055r;
    }

    public d e() {
        return this.f51054q;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (!gf.o.a(this.f51049d, aVar.f51049d) || !gf.o.a(this.f51050e, aVar.f51050e) || !gf.o.a(this.f51054q, aVar.f51054q) || !gf.o.a(this.f51055r, aVar.f51055r) || !gf.o.a(this.f51051i, aVar.f51051i) || this.f51052o != aVar.f51052o || this.f51053p != aVar.f51053p || this.f51056s != aVar.f51056s) {
            return false;
        }
        return true;
    }

    public e f() {
        return this.f51049d;
    }

    public boolean g() {
        return this.f51056s;
    }

    public int hashCode() {
        return gf.o.b(this.f51049d, this.f51050e, this.f51054q, this.f51055r, this.f51051i, Boolean.valueOf(this.f51052o), Integer.valueOf(this.f51053p), Boolean.valueOf(this.f51056s));
    }

    public boolean i() {
        return this.f51052o;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.q(parcel, 1, f(), i10, false);
        hf.c.q(parcel, 2, c(), i10, false);
        hf.c.s(parcel, 3, this.f51051i, false);
        hf.c.c(parcel, 4, i());
        hf.c.l(parcel, 5, this.f51053p);
        hf.c.q(parcel, 6, e(), i10, false);
        hf.c.q(parcel, 7, d(), i10, false);
        hf.c.c(parcel, 8, g());
        hf.c.b(parcel, a10);
    }
}
