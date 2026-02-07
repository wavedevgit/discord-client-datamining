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
    private final e f52616d;

    /* renamed from: e  reason: collision with root package name */
    private final b f52617e;

    /* renamed from: i  reason: collision with root package name */
    private final String f52618i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f52619o;

    /* renamed from: p  reason: collision with root package name */
    private final int f52620p;

    /* renamed from: q  reason: collision with root package name */
    private final d f52621q;

    /* renamed from: r  reason: collision with root package name */
    private final c f52622r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f52623s;

    /* renamed from: ve.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0690a {

        /* renamed from: a  reason: collision with root package name */
        private e f52624a;

        /* renamed from: b  reason: collision with root package name */
        private b f52625b;

        /* renamed from: c  reason: collision with root package name */
        private d f52626c;

        /* renamed from: d  reason: collision with root package name */
        private c f52627d;

        /* renamed from: e  reason: collision with root package name */
        private String f52628e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f52629f;

        /* renamed from: g  reason: collision with root package name */
        private int f52630g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f52631h;

        public C0690a() {
            e.C0694a b10 = e.b();
            b10.b(false);
            this.f52624a = b10.a();
            b.C0691a b11 = b.b();
            b11.b(false);
            this.f52625b = b11.a();
            d.C0693a b12 = d.b();
            b12.d(false);
            this.f52626c = b12.a();
            c.C0692a b13 = c.b();
            b13.c(false);
            this.f52627d = b13.a();
        }

        public a a() {
            return new a(this.f52624a, this.f52625b, this.f52628e, this.f52629f, this.f52630g, this.f52626c, this.f52627d, this.f52631h);
        }

        public C0690a b(boolean z10) {
            this.f52629f = z10;
            return this;
        }

        public C0690a c(b bVar) {
            this.f52625b = (b) gf.q.l(bVar);
            return this;
        }

        public C0690a d(c cVar) {
            this.f52627d = (c) gf.q.l(cVar);
            return this;
        }

        public C0690a e(d dVar) {
            this.f52626c = (d) gf.q.l(dVar);
            return this;
        }

        public C0690a f(e eVar) {
            this.f52624a = (e) gf.q.l(eVar);
            return this;
        }

        public C0690a g(boolean z10) {
            this.f52631h = z10;
            return this;
        }

        public final C0690a h(String str) {
            this.f52628e = str;
            return this;
        }

        public final C0690a i(int i10) {
            this.f52630g = i10;
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends hf.a {
        @NonNull
        public static final Parcelable.Creator<b> CREATOR = new o();

        /* renamed from: d  reason: collision with root package name */
        private final boolean f52632d;

        /* renamed from: e  reason: collision with root package name */
        private final String f52633e;

        /* renamed from: i  reason: collision with root package name */
        private final String f52634i;

        /* renamed from: o  reason: collision with root package name */
        private final boolean f52635o;

        /* renamed from: p  reason: collision with root package name */
        private final String f52636p;

        /* renamed from: q  reason: collision with root package name */
        private final List f52637q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f52638r;

        /* renamed from: ve.a$b$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0691a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f52639a = false;

            /* renamed from: b  reason: collision with root package name */
            private String f52640b = null;

            /* renamed from: c  reason: collision with root package name */
            private String f52641c = null;

            /* renamed from: d  reason: collision with root package name */
            private boolean f52642d = true;

            /* renamed from: e  reason: collision with root package name */
            private String f52643e = null;

            /* renamed from: f  reason: collision with root package name */
            private List f52644f = null;

            /* renamed from: g  reason: collision with root package name */
            private boolean f52645g = false;

            public b a() {
                return new b(this.f52639a, this.f52640b, this.f52641c, this.f52642d, this.f52643e, this.f52644f, this.f52645g);
            }

            public C0691a b(boolean z10) {
                this.f52639a = z10;
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
            this.f52632d = z10;
            if (z10) {
                gf.q.m(str, "serverClientId must be provided if Google ID tokens are requested");
            }
            this.f52633e = str;
            this.f52634i = str2;
            this.f52635o = z11;
            Parcelable.Creator<a> creator = a.CREATOR;
            ArrayList arrayList = null;
            if (list != null && !list.isEmpty()) {
                arrayList = new ArrayList(list);
                Collections.sort(arrayList);
            }
            this.f52637q = arrayList;
            this.f52636p = str3;
            this.f52638r = z12;
        }

        public static C0691a b() {
            return new C0691a();
        }

        public boolean c() {
            return this.f52635o;
        }

        public List d() {
            return this.f52637q;
        }

        public String e() {
            return this.f52636p;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (this.f52632d != bVar.f52632d || !gf.o.a(this.f52633e, bVar.f52633e) || !gf.o.a(this.f52634i, bVar.f52634i) || this.f52635o != bVar.f52635o || !gf.o.a(this.f52636p, bVar.f52636p) || !gf.o.a(this.f52637q, bVar.f52637q) || this.f52638r != bVar.f52638r) {
                return false;
            }
            return true;
        }

        public String f() {
            return this.f52634i;
        }

        public String h() {
            return this.f52633e;
        }

        public int hashCode() {
            return gf.o.b(Boolean.valueOf(this.f52632d), this.f52633e, this.f52634i, Boolean.valueOf(this.f52635o), this.f52636p, this.f52637q, Boolean.valueOf(this.f52638r));
        }

        public boolean i() {
            return this.f52632d;
        }

        public boolean j() {
            return this.f52638r;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            int a10 = hf.c.a(parcel);
            hf.c.c(parcel, 1, i());
            hf.c.s(parcel, 2, h(), false);
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
        private final boolean f52646d;

        /* renamed from: e  reason: collision with root package name */
        private final String f52647e;

        /* renamed from: ve.a$c$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0692a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f52648a = false;

            /* renamed from: b  reason: collision with root package name */
            private String f52649b;

            public c a() {
                return new c(this.f52648a, this.f52649b);
            }

            public C0692a b(String str) {
                this.f52649b = str;
                return this;
            }

            public C0692a c(boolean z10) {
                this.f52648a = z10;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public c(boolean z10, String str) {
            if (z10) {
                gf.q.l(str);
            }
            this.f52646d = z10;
            this.f52647e = str;
        }

        public static C0692a b() {
            return new C0692a();
        }

        public String c() {
            return this.f52647e;
        }

        public boolean d() {
            return this.f52646d;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (this.f52646d == cVar.f52646d && gf.o.a(this.f52647e, cVar.f52647e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return gf.o.b(Boolean.valueOf(this.f52646d), this.f52647e);
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
        private final boolean f52650d;

        /* renamed from: e  reason: collision with root package name */
        private final byte[] f52651e;

        /* renamed from: i  reason: collision with root package name */
        private final String f52652i;

        /* renamed from: ve.a$d$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0693a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f52653a = false;

            /* renamed from: b  reason: collision with root package name */
            private byte[] f52654b;

            /* renamed from: c  reason: collision with root package name */
            private String f52655c;

            public d a() {
                return new d(this.f52653a, this.f52654b, this.f52655c);
            }

            public C0693a b(byte[] bArr) {
                this.f52654b = bArr;
                return this;
            }

            public C0693a c(String str) {
                this.f52655c = str;
                return this;
            }

            public C0693a d(boolean z10) {
                this.f52653a = z10;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public d(boolean z10, byte[] bArr, String str) {
            if (z10) {
                gf.q.l(bArr);
                gf.q.l(str);
            }
            this.f52650d = z10;
            this.f52651e = bArr;
            this.f52652i = str;
        }

        public static C0693a b() {
            return new C0693a();
        }

        public byte[] c() {
            return this.f52651e;
        }

        public String d() {
            return this.f52652i;
        }

        public boolean e() {
            return this.f52650d;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof d)) {
                return false;
            }
            d dVar = (d) obj;
            if (this.f52650d == dVar.f52650d && Arrays.equals(this.f52651e, dVar.f52651e) && Objects.equals(this.f52652i, dVar.f52652i)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (Objects.hash(Boolean.valueOf(this.f52650d), this.f52652i) * 31) + Arrays.hashCode(this.f52651e);
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
        private final boolean f52656d;

        /* renamed from: ve.a$e$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0694a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f52657a = false;

            public e a() {
                return new e(this.f52657a);
            }

            public C0694a b(boolean z10) {
                this.f52657a = z10;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public e(boolean z10) {
            this.f52656d = z10;
        }

        public static C0694a b() {
            return new C0694a();
        }

        public boolean c() {
            return this.f52656d;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof e) || this.f52656d != ((e) obj).f52656d) {
                return false;
            }
            return true;
        }

        public int hashCode() {
            return gf.o.b(Boolean.valueOf(this.f52656d));
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
        this.f52616d = (e) gf.q.l(eVar);
        this.f52617e = (b) gf.q.l(bVar);
        this.f52618i = str;
        this.f52619o = z10;
        this.f52620p = i10;
        if (dVar == null) {
            d.C0693a b10 = d.b();
            b10.d(false);
            dVar = b10.a();
        }
        this.f52621q = dVar;
        if (cVar == null) {
            c.C0692a b11 = c.b();
            b11.c(false);
            cVar = b11.a();
        }
        this.f52622r = cVar;
        this.f52623s = z11;
    }

    public static C0690a b() {
        return new C0690a();
    }

    public static C0690a j(a aVar) {
        gf.q.l(aVar);
        C0690a b10 = b();
        b10.c(aVar.c());
        b10.f(aVar.f());
        b10.e(aVar.e());
        b10.d(aVar.d());
        b10.b(aVar.f52619o);
        b10.i(aVar.f52620p);
        b10.g(aVar.f52623s);
        String str = aVar.f52618i;
        if (str != null) {
            b10.h(str);
        }
        return b10;
    }

    public b c() {
        return this.f52617e;
    }

    public c d() {
        return this.f52622r;
    }

    public d e() {
        return this.f52621q;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (!gf.o.a(this.f52616d, aVar.f52616d) || !gf.o.a(this.f52617e, aVar.f52617e) || !gf.o.a(this.f52621q, aVar.f52621q) || !gf.o.a(this.f52622r, aVar.f52622r) || !gf.o.a(this.f52618i, aVar.f52618i) || this.f52619o != aVar.f52619o || this.f52620p != aVar.f52620p || this.f52623s != aVar.f52623s) {
            return false;
        }
        return true;
    }

    public e f() {
        return this.f52616d;
    }

    public boolean h() {
        return this.f52623s;
    }

    public int hashCode() {
        return gf.o.b(this.f52616d, this.f52617e, this.f52621q, this.f52622r, this.f52618i, Boolean.valueOf(this.f52619o), Integer.valueOf(this.f52620p), Boolean.valueOf(this.f52623s));
    }

    public boolean i() {
        return this.f52619o;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.q(parcel, 1, f(), i10, false);
        hf.c.q(parcel, 2, c(), i10, false);
        hf.c.s(parcel, 3, this.f52618i, false);
        hf.c.c(parcel, 4, i());
        hf.c.l(parcel, 5, this.f52620p);
        hf.c.q(parcel, 6, e(), i10, false);
        hf.c.q(parcel, 7, d(), i10, false);
        hf.c.c(parcel, 8, h());
        hf.c.b(parcel, a10);
    }
}
