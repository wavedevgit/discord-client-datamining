package we;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends jf.a {
    @NonNull
    public static final Parcelable.Creator<a> CREATOR = new k();

    /* renamed from: d  reason: collision with root package name */
    private final e f53241d;

    /* renamed from: e  reason: collision with root package name */
    private final b f53242e;

    /* renamed from: i  reason: collision with root package name */
    private final String f53243i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f53244o;

    /* renamed from: p  reason: collision with root package name */
    private final int f53245p;

    /* renamed from: q  reason: collision with root package name */
    private final d f53246q;

    /* renamed from: r  reason: collision with root package name */
    private final c f53247r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f53248s;

    /* renamed from: we.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0732a {

        /* renamed from: a  reason: collision with root package name */
        private e f53249a;

        /* renamed from: b  reason: collision with root package name */
        private b f53250b;

        /* renamed from: c  reason: collision with root package name */
        private d f53251c;

        /* renamed from: d  reason: collision with root package name */
        private c f53252d;

        /* renamed from: e  reason: collision with root package name */
        private String f53253e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f53254f;

        /* renamed from: g  reason: collision with root package name */
        private int f53255g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f53256h;

        public C0732a() {
            e.C0736a b10 = e.b();
            b10.b(false);
            this.f53249a = b10.a();
            b.C0733a b11 = b.b();
            b11.b(false);
            this.f53250b = b11.a();
            d.C0735a b12 = d.b();
            b12.d(false);
            this.f53251c = b12.a();
            c.C0734a b13 = c.b();
            b13.c(false);
            this.f53252d = b13.a();
        }

        public a a() {
            return new a(this.f53249a, this.f53250b, this.f53253e, this.f53254f, this.f53255g, this.f53251c, this.f53252d, this.f53256h);
        }

        public C0732a b(boolean z10) {
            this.f53254f = z10;
            return this;
        }

        public C0732a c(b bVar) {
            this.f53250b = (b) hf.q.l(bVar);
            return this;
        }

        public C0732a d(c cVar) {
            this.f53252d = (c) hf.q.l(cVar);
            return this;
        }

        public C0732a e(d dVar) {
            this.f53251c = (d) hf.q.l(dVar);
            return this;
        }

        public C0732a f(e eVar) {
            this.f53249a = (e) hf.q.l(eVar);
            return this;
        }

        public C0732a g(boolean z10) {
            this.f53256h = z10;
            return this;
        }

        public final C0732a h(String str) {
            this.f53253e = str;
            return this;
        }

        public final C0732a i(int i10) {
            this.f53255g = i10;
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends jf.a {
        @NonNull
        public static final Parcelable.Creator<b> CREATOR = new o();

        /* renamed from: d  reason: collision with root package name */
        private final boolean f53257d;

        /* renamed from: e  reason: collision with root package name */
        private final String f53258e;

        /* renamed from: i  reason: collision with root package name */
        private final String f53259i;

        /* renamed from: o  reason: collision with root package name */
        private final boolean f53260o;

        /* renamed from: p  reason: collision with root package name */
        private final String f53261p;

        /* renamed from: q  reason: collision with root package name */
        private final List f53262q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f53263r;

        /* renamed from: we.a$b$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0733a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f53264a = false;

            /* renamed from: b  reason: collision with root package name */
            private String f53265b = null;

            /* renamed from: c  reason: collision with root package name */
            private String f53266c = null;

            /* renamed from: d  reason: collision with root package name */
            private boolean f53267d = true;

            /* renamed from: e  reason: collision with root package name */
            private String f53268e = null;

            /* renamed from: f  reason: collision with root package name */
            private List f53269f = null;

            /* renamed from: g  reason: collision with root package name */
            private boolean f53270g = false;

            public b a() {
                return new b(this.f53264a, this.f53265b, this.f53266c, this.f53267d, this.f53268e, this.f53269f, this.f53270g);
            }

            public C0733a b(boolean z10) {
                this.f53264a = z10;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public b(boolean z10, String str, String str2, boolean z11, String str3, List list, boolean z12) {
            boolean z13 = true;
            if (z11 && z12) {
                z13 = false;
            }
            hf.q.b(z13, "filterByAuthorizedAccounts and requestVerifiedPhoneNumber must not both be true; the Verified Phone Number feature only works in sign-ups.");
            this.f53257d = z10;
            if (z10) {
                hf.q.m(str, "serverClientId must be provided if Google ID tokens are requested");
            }
            this.f53258e = str;
            this.f53259i = str2;
            this.f53260o = z11;
            Parcelable.Creator<a> creator = a.CREATOR;
            ArrayList arrayList = null;
            if (list != null && !list.isEmpty()) {
                arrayList = new ArrayList(list);
                Collections.sort(arrayList);
            }
            this.f53262q = arrayList;
            this.f53261p = str3;
            this.f53263r = z12;
        }

        public static C0733a b() {
            return new C0733a();
        }

        public boolean c() {
            return this.f53260o;
        }

        public List d() {
            return this.f53262q;
        }

        public String e() {
            return this.f53261p;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (this.f53257d != bVar.f53257d || !hf.o.a(this.f53258e, bVar.f53258e) || !hf.o.a(this.f53259i, bVar.f53259i) || this.f53260o != bVar.f53260o || !hf.o.a(this.f53261p, bVar.f53261p) || !hf.o.a(this.f53262q, bVar.f53262q) || this.f53263r != bVar.f53263r) {
                return false;
            }
            return true;
        }

        public String f() {
            return this.f53259i;
        }

        public String g() {
            return this.f53258e;
        }

        public int hashCode() {
            return hf.o.b(Boolean.valueOf(this.f53257d), this.f53258e, this.f53259i, Boolean.valueOf(this.f53260o), this.f53261p, this.f53262q, Boolean.valueOf(this.f53263r));
        }

        public boolean i() {
            return this.f53257d;
        }

        public boolean j() {
            return this.f53263r;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            int a10 = jf.c.a(parcel);
            jf.c.c(parcel, 1, i());
            jf.c.s(parcel, 2, g(), false);
            jf.c.s(parcel, 3, f(), false);
            jf.c.c(parcel, 4, c());
            jf.c.s(parcel, 5, e(), false);
            jf.c.u(parcel, 6, d(), false);
            jf.c.c(parcel, 7, j());
            jf.c.b(parcel, a10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c extends jf.a {
        @NonNull
        public static final Parcelable.Creator<c> CREATOR = new p();

        /* renamed from: d  reason: collision with root package name */
        private final boolean f53271d;

        /* renamed from: e  reason: collision with root package name */
        private final String f53272e;

        /* renamed from: we.a$c$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0734a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f53273a = false;

            /* renamed from: b  reason: collision with root package name */
            private String f53274b;

            public c a() {
                return new c(this.f53273a, this.f53274b);
            }

            public C0734a b(String str) {
                this.f53274b = str;
                return this;
            }

            public C0734a c(boolean z10) {
                this.f53273a = z10;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public c(boolean z10, String str) {
            if (z10) {
                hf.q.l(str);
            }
            this.f53271d = z10;
            this.f53272e = str;
        }

        public static C0734a b() {
            return new C0734a();
        }

        public String c() {
            return this.f53272e;
        }

        public boolean d() {
            return this.f53271d;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (this.f53271d == cVar.f53271d && hf.o.a(this.f53272e, cVar.f53272e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return hf.o.b(Boolean.valueOf(this.f53271d), this.f53272e);
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            int a10 = jf.c.a(parcel);
            jf.c.c(parcel, 1, d());
            jf.c.s(parcel, 2, c(), false);
            jf.c.b(parcel, a10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d extends jf.a {
        @NonNull
        public static final Parcelable.Creator<d> CREATOR = new q();

        /* renamed from: d  reason: collision with root package name */
        private final boolean f53275d;

        /* renamed from: e  reason: collision with root package name */
        private final byte[] f53276e;

        /* renamed from: i  reason: collision with root package name */
        private final String f53277i;

        /* renamed from: we.a$d$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0735a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f53278a = false;

            /* renamed from: b  reason: collision with root package name */
            private byte[] f53279b;

            /* renamed from: c  reason: collision with root package name */
            private String f53280c;

            public d a() {
                return new d(this.f53278a, this.f53279b, this.f53280c);
            }

            public C0735a b(byte[] bArr) {
                this.f53279b = bArr;
                return this;
            }

            public C0735a c(String str) {
                this.f53280c = str;
                return this;
            }

            public C0735a d(boolean z10) {
                this.f53278a = z10;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public d(boolean z10, byte[] bArr, String str) {
            if (z10) {
                hf.q.l(bArr);
                hf.q.l(str);
            }
            this.f53275d = z10;
            this.f53276e = bArr;
            this.f53277i = str;
        }

        public static C0735a b() {
            return new C0735a();
        }

        public byte[] c() {
            return this.f53276e;
        }

        public String d() {
            return this.f53277i;
        }

        public boolean e() {
            return this.f53275d;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof d)) {
                return false;
            }
            d dVar = (d) obj;
            if (this.f53275d == dVar.f53275d && Arrays.equals(this.f53276e, dVar.f53276e) && Objects.equals(this.f53277i, dVar.f53277i)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (Objects.hash(Boolean.valueOf(this.f53275d), this.f53277i) * 31) + Arrays.hashCode(this.f53276e);
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            int a10 = jf.c.a(parcel);
            jf.c.c(parcel, 1, e());
            jf.c.f(parcel, 2, c(), false);
            jf.c.s(parcel, 3, d(), false);
            jf.c.b(parcel, a10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class e extends jf.a {
        @NonNull
        public static final Parcelable.Creator<e> CREATOR = new r();

        /* renamed from: d  reason: collision with root package name */
        private final boolean f53281d;

        /* renamed from: we.a$e$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0736a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f53282a = false;

            public e a() {
                return new e(this.f53282a);
            }

            public C0736a b(boolean z10) {
                this.f53282a = z10;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public e(boolean z10) {
            this.f53281d = z10;
        }

        public static C0736a b() {
            return new C0736a();
        }

        public boolean c() {
            return this.f53281d;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof e) || this.f53281d != ((e) obj).f53281d) {
                return false;
            }
            return true;
        }

        public int hashCode() {
            return hf.o.b(Boolean.valueOf(this.f53281d));
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            int a10 = jf.c.a(parcel);
            jf.c.c(parcel, 1, c());
            jf.c.b(parcel, a10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(e eVar, b bVar, String str, boolean z10, int i10, d dVar, c cVar, boolean z11) {
        this.f53241d = (e) hf.q.l(eVar);
        this.f53242e = (b) hf.q.l(bVar);
        this.f53243i = str;
        this.f53244o = z10;
        this.f53245p = i10;
        if (dVar == null) {
            d.C0735a b10 = d.b();
            b10.d(false);
            dVar = b10.a();
        }
        this.f53246q = dVar;
        if (cVar == null) {
            c.C0734a b11 = c.b();
            b11.c(false);
            cVar = b11.a();
        }
        this.f53247r = cVar;
        this.f53248s = z11;
    }

    public static C0732a b() {
        return new C0732a();
    }

    public static C0732a j(a aVar) {
        hf.q.l(aVar);
        C0732a b10 = b();
        b10.c(aVar.c());
        b10.f(aVar.f());
        b10.e(aVar.e());
        b10.d(aVar.d());
        b10.b(aVar.f53244o);
        b10.i(aVar.f53245p);
        b10.g(aVar.f53248s);
        String str = aVar.f53243i;
        if (str != null) {
            b10.h(str);
        }
        return b10;
    }

    public b c() {
        return this.f53242e;
    }

    public c d() {
        return this.f53247r;
    }

    public d e() {
        return this.f53246q;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (!hf.o.a(this.f53241d, aVar.f53241d) || !hf.o.a(this.f53242e, aVar.f53242e) || !hf.o.a(this.f53246q, aVar.f53246q) || !hf.o.a(this.f53247r, aVar.f53247r) || !hf.o.a(this.f53243i, aVar.f53243i) || this.f53244o != aVar.f53244o || this.f53245p != aVar.f53245p || this.f53248s != aVar.f53248s) {
            return false;
        }
        return true;
    }

    public e f() {
        return this.f53241d;
    }

    public boolean g() {
        return this.f53248s;
    }

    public int hashCode() {
        return hf.o.b(this.f53241d, this.f53242e, this.f53246q, this.f53247r, this.f53243i, Boolean.valueOf(this.f53244o), Integer.valueOf(this.f53245p), Boolean.valueOf(this.f53248s));
    }

    public boolean i() {
        return this.f53244o;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.q(parcel, 1, f(), i10, false);
        jf.c.q(parcel, 2, c(), i10, false);
        jf.c.s(parcel, 3, this.f53243i, false);
        jf.c.c(parcel, 4, i());
        jf.c.l(parcel, 5, this.f53245p);
        jf.c.q(parcel, 6, e(), i10, false);
        jf.c.q(parcel, 7, d(), i10, false);
        jf.c.c(parcel, 8, g());
        jf.c.b(parcel, a10);
    }
}
