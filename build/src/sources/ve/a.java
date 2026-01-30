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
    private final e f51065d;

    /* renamed from: e  reason: collision with root package name */
    private final b f51066e;

    /* renamed from: i  reason: collision with root package name */
    private final String f51067i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f51068o;

    /* renamed from: p  reason: collision with root package name */
    private final int f51069p;

    /* renamed from: q  reason: collision with root package name */
    private final d f51070q;

    /* renamed from: r  reason: collision with root package name */
    private final c f51071r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f51072s;

    /* renamed from: ve.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0674a {

        /* renamed from: a  reason: collision with root package name */
        private e f51073a;

        /* renamed from: b  reason: collision with root package name */
        private b f51074b;

        /* renamed from: c  reason: collision with root package name */
        private d f51075c;

        /* renamed from: d  reason: collision with root package name */
        private c f51076d;

        /* renamed from: e  reason: collision with root package name */
        private String f51077e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f51078f;

        /* renamed from: g  reason: collision with root package name */
        private int f51079g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f51080h;

        public C0674a() {
            e.C0678a b10 = e.b();
            b10.b(false);
            this.f51073a = b10.a();
            b.C0675a b11 = b.b();
            b11.b(false);
            this.f51074b = b11.a();
            d.C0677a b12 = d.b();
            b12.d(false);
            this.f51075c = b12.a();
            c.C0676a b13 = c.b();
            b13.c(false);
            this.f51076d = b13.a();
        }

        public a a() {
            return new a(this.f51073a, this.f51074b, this.f51077e, this.f51078f, this.f51079g, this.f51075c, this.f51076d, this.f51080h);
        }

        public C0674a b(boolean z10) {
            this.f51078f = z10;
            return this;
        }

        public C0674a c(b bVar) {
            this.f51074b = (b) gf.q.l(bVar);
            return this;
        }

        public C0674a d(c cVar) {
            this.f51076d = (c) gf.q.l(cVar);
            return this;
        }

        public C0674a e(d dVar) {
            this.f51075c = (d) gf.q.l(dVar);
            return this;
        }

        public C0674a f(e eVar) {
            this.f51073a = (e) gf.q.l(eVar);
            return this;
        }

        public C0674a g(boolean z10) {
            this.f51080h = z10;
            return this;
        }

        public final C0674a h(String str) {
            this.f51077e = str;
            return this;
        }

        public final C0674a i(int i10) {
            this.f51079g = i10;
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends hf.a {
        @NonNull
        public static final Parcelable.Creator<b> CREATOR = new o();

        /* renamed from: d  reason: collision with root package name */
        private final boolean f51081d;

        /* renamed from: e  reason: collision with root package name */
        private final String f51082e;

        /* renamed from: i  reason: collision with root package name */
        private final String f51083i;

        /* renamed from: o  reason: collision with root package name */
        private final boolean f51084o;

        /* renamed from: p  reason: collision with root package name */
        private final String f51085p;

        /* renamed from: q  reason: collision with root package name */
        private final List f51086q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f51087r;

        /* renamed from: ve.a$b$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0675a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f51088a = false;

            /* renamed from: b  reason: collision with root package name */
            private String f51089b = null;

            /* renamed from: c  reason: collision with root package name */
            private String f51090c = null;

            /* renamed from: d  reason: collision with root package name */
            private boolean f51091d = true;

            /* renamed from: e  reason: collision with root package name */
            private String f51092e = null;

            /* renamed from: f  reason: collision with root package name */
            private List f51093f = null;

            /* renamed from: g  reason: collision with root package name */
            private boolean f51094g = false;

            public b a() {
                return new b(this.f51088a, this.f51089b, this.f51090c, this.f51091d, this.f51092e, this.f51093f, this.f51094g);
            }

            public C0675a b(boolean z10) {
                this.f51088a = z10;
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
            this.f51081d = z10;
            if (z10) {
                gf.q.m(str, "serverClientId must be provided if Google ID tokens are requested");
            }
            this.f51082e = str;
            this.f51083i = str2;
            this.f51084o = z11;
            Parcelable.Creator<a> creator = a.CREATOR;
            ArrayList arrayList = null;
            if (list != null && !list.isEmpty()) {
                arrayList = new ArrayList(list);
                Collections.sort(arrayList);
            }
            this.f51086q = arrayList;
            this.f51085p = str3;
            this.f51087r = z12;
        }

        public static C0675a b() {
            return new C0675a();
        }

        public boolean c() {
            return this.f51084o;
        }

        public List d() {
            return this.f51086q;
        }

        public String e() {
            return this.f51085p;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (this.f51081d != bVar.f51081d || !gf.o.a(this.f51082e, bVar.f51082e) || !gf.o.a(this.f51083i, bVar.f51083i) || this.f51084o != bVar.f51084o || !gf.o.a(this.f51085p, bVar.f51085p) || !gf.o.a(this.f51086q, bVar.f51086q) || this.f51087r != bVar.f51087r) {
                return false;
            }
            return true;
        }

        public String f() {
            return this.f51083i;
        }

        public String g() {
            return this.f51082e;
        }

        public int hashCode() {
            return gf.o.b(Boolean.valueOf(this.f51081d), this.f51082e, this.f51083i, Boolean.valueOf(this.f51084o), this.f51085p, this.f51086q, Boolean.valueOf(this.f51087r));
        }

        public boolean i() {
            return this.f51081d;
        }

        public boolean j() {
            return this.f51087r;
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
        private final boolean f51095d;

        /* renamed from: e  reason: collision with root package name */
        private final String f51096e;

        /* renamed from: ve.a$c$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0676a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f51097a = false;

            /* renamed from: b  reason: collision with root package name */
            private String f51098b;

            public c a() {
                return new c(this.f51097a, this.f51098b);
            }

            public C0676a b(String str) {
                this.f51098b = str;
                return this;
            }

            public C0676a c(boolean z10) {
                this.f51097a = z10;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public c(boolean z10, String str) {
            if (z10) {
                gf.q.l(str);
            }
            this.f51095d = z10;
            this.f51096e = str;
        }

        public static C0676a b() {
            return new C0676a();
        }

        public String c() {
            return this.f51096e;
        }

        public boolean d() {
            return this.f51095d;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (this.f51095d == cVar.f51095d && gf.o.a(this.f51096e, cVar.f51096e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return gf.o.b(Boolean.valueOf(this.f51095d), this.f51096e);
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
        private final boolean f51099d;

        /* renamed from: e  reason: collision with root package name */
        private final byte[] f51100e;

        /* renamed from: i  reason: collision with root package name */
        private final String f51101i;

        /* renamed from: ve.a$d$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0677a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f51102a = false;

            /* renamed from: b  reason: collision with root package name */
            private byte[] f51103b;

            /* renamed from: c  reason: collision with root package name */
            private String f51104c;

            public d a() {
                return new d(this.f51102a, this.f51103b, this.f51104c);
            }

            public C0677a b(byte[] bArr) {
                this.f51103b = bArr;
                return this;
            }

            public C0677a c(String str) {
                this.f51104c = str;
                return this;
            }

            public C0677a d(boolean z10) {
                this.f51102a = z10;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public d(boolean z10, byte[] bArr, String str) {
            if (z10) {
                gf.q.l(bArr);
                gf.q.l(str);
            }
            this.f51099d = z10;
            this.f51100e = bArr;
            this.f51101i = str;
        }

        public static C0677a b() {
            return new C0677a();
        }

        public byte[] c() {
            return this.f51100e;
        }

        public String d() {
            return this.f51101i;
        }

        public boolean e() {
            return this.f51099d;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof d)) {
                return false;
            }
            d dVar = (d) obj;
            if (this.f51099d == dVar.f51099d && Arrays.equals(this.f51100e, dVar.f51100e) && Objects.equals(this.f51101i, dVar.f51101i)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (Objects.hash(Boolean.valueOf(this.f51099d), this.f51101i) * 31) + Arrays.hashCode(this.f51100e);
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
        private final boolean f51105d;

        /* renamed from: ve.a$e$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0678a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f51106a = false;

            public e a() {
                return new e(this.f51106a);
            }

            public C0678a b(boolean z10) {
                this.f51106a = z10;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public e(boolean z10) {
            this.f51105d = z10;
        }

        public static C0678a b() {
            return new C0678a();
        }

        public boolean c() {
            return this.f51105d;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof e) || this.f51105d != ((e) obj).f51105d) {
                return false;
            }
            return true;
        }

        public int hashCode() {
            return gf.o.b(Boolean.valueOf(this.f51105d));
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
        this.f51065d = (e) gf.q.l(eVar);
        this.f51066e = (b) gf.q.l(bVar);
        this.f51067i = str;
        this.f51068o = z10;
        this.f51069p = i10;
        if (dVar == null) {
            d.C0677a b10 = d.b();
            b10.d(false);
            dVar = b10.a();
        }
        this.f51070q = dVar;
        if (cVar == null) {
            c.C0676a b11 = c.b();
            b11.c(false);
            cVar = b11.a();
        }
        this.f51071r = cVar;
        this.f51072s = z11;
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
        b10.b(aVar.f51068o);
        b10.i(aVar.f51069p);
        b10.g(aVar.f51072s);
        String str = aVar.f51067i;
        if (str != null) {
            b10.h(str);
        }
        return b10;
    }

    public b c() {
        return this.f51066e;
    }

    public c d() {
        return this.f51071r;
    }

    public d e() {
        return this.f51070q;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (!gf.o.a(this.f51065d, aVar.f51065d) || !gf.o.a(this.f51066e, aVar.f51066e) || !gf.o.a(this.f51070q, aVar.f51070q) || !gf.o.a(this.f51071r, aVar.f51071r) || !gf.o.a(this.f51067i, aVar.f51067i) || this.f51068o != aVar.f51068o || this.f51069p != aVar.f51069p || this.f51072s != aVar.f51072s) {
            return false;
        }
        return true;
    }

    public e f() {
        return this.f51065d;
    }

    public boolean g() {
        return this.f51072s;
    }

    public int hashCode() {
        return gf.o.b(this.f51065d, this.f51066e, this.f51070q, this.f51071r, this.f51067i, Boolean.valueOf(this.f51068o), Integer.valueOf(this.f51069p), Boolean.valueOf(this.f51072s));
    }

    public boolean i() {
        return this.f51068o;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.q(parcel, 1, f(), i10, false);
        hf.c.q(parcel, 2, c(), i10, false);
        hf.c.s(parcel, 3, this.f51067i, false);
        hf.c.c(parcel, 4, i());
        hf.c.l(parcel, 5, this.f51069p);
        hf.c.q(parcel, 6, e(), i10, false);
        hf.c.q(parcel, 7, d(), i10, false);
        hf.c.c(parcel, 8, g());
        hf.c.b(parcel, a10);
    }
}
