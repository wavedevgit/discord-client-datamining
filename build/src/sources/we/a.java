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
    private final e f53643d;

    /* renamed from: e  reason: collision with root package name */
    private final b f53644e;

    /* renamed from: i  reason: collision with root package name */
    private final String f53645i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f53646o;

    /* renamed from: p  reason: collision with root package name */
    private final int f53647p;

    /* renamed from: q  reason: collision with root package name */
    private final d f53648q;

    /* renamed from: r  reason: collision with root package name */
    private final c f53649r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f53650s;

    /* renamed from: we.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0743a {

        /* renamed from: a  reason: collision with root package name */
        private e f53651a;

        /* renamed from: b  reason: collision with root package name */
        private b f53652b;

        /* renamed from: c  reason: collision with root package name */
        private d f53653c;

        /* renamed from: d  reason: collision with root package name */
        private c f53654d;

        /* renamed from: e  reason: collision with root package name */
        private String f53655e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f53656f;

        /* renamed from: g  reason: collision with root package name */
        private int f53657g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f53658h;

        public C0743a() {
            e.C0747a b10 = e.b();
            b10.b(false);
            this.f53651a = b10.a();
            b.C0744a b11 = b.b();
            b11.b(false);
            this.f53652b = b11.a();
            d.C0746a b12 = d.b();
            b12.d(false);
            this.f53653c = b12.a();
            c.C0745a b13 = c.b();
            b13.c(false);
            this.f53654d = b13.a();
        }

        public a a() {
            return new a(this.f53651a, this.f53652b, this.f53655e, this.f53656f, this.f53657g, this.f53653c, this.f53654d, this.f53658h);
        }

        public C0743a b(boolean z10) {
            this.f53656f = z10;
            return this;
        }

        public C0743a c(b bVar) {
            this.f53652b = (b) hf.q.l(bVar);
            return this;
        }

        public C0743a d(c cVar) {
            this.f53654d = (c) hf.q.l(cVar);
            return this;
        }

        public C0743a e(d dVar) {
            this.f53653c = (d) hf.q.l(dVar);
            return this;
        }

        public C0743a f(e eVar) {
            this.f53651a = (e) hf.q.l(eVar);
            return this;
        }

        public C0743a g(boolean z10) {
            this.f53658h = z10;
            return this;
        }

        public final C0743a h(String str) {
            this.f53655e = str;
            return this;
        }

        public final C0743a i(int i10) {
            this.f53657g = i10;
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends jf.a {
        @NonNull
        public static final Parcelable.Creator<b> CREATOR = new o();

        /* renamed from: d  reason: collision with root package name */
        private final boolean f53659d;

        /* renamed from: e  reason: collision with root package name */
        private final String f53660e;

        /* renamed from: i  reason: collision with root package name */
        private final String f53661i;

        /* renamed from: o  reason: collision with root package name */
        private final boolean f53662o;

        /* renamed from: p  reason: collision with root package name */
        private final String f53663p;

        /* renamed from: q  reason: collision with root package name */
        private final List f53664q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f53665r;

        /* renamed from: we.a$b$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0744a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f53666a = false;

            /* renamed from: b  reason: collision with root package name */
            private String f53667b = null;

            /* renamed from: c  reason: collision with root package name */
            private String f53668c = null;

            /* renamed from: d  reason: collision with root package name */
            private boolean f53669d = true;

            /* renamed from: e  reason: collision with root package name */
            private String f53670e = null;

            /* renamed from: f  reason: collision with root package name */
            private List f53671f = null;

            /* renamed from: g  reason: collision with root package name */
            private boolean f53672g = false;

            public b a() {
                return new b(this.f53666a, this.f53667b, this.f53668c, this.f53669d, this.f53670e, this.f53671f, this.f53672g);
            }

            public C0744a b(boolean z10) {
                this.f53666a = z10;
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
            this.f53659d = z10;
            if (z10) {
                hf.q.m(str, "serverClientId must be provided if Google ID tokens are requested");
            }
            this.f53660e = str;
            this.f53661i = str2;
            this.f53662o = z11;
            Parcelable.Creator<a> creator = a.CREATOR;
            ArrayList arrayList = null;
            if (list != null && !list.isEmpty()) {
                arrayList = new ArrayList(list);
                Collections.sort(arrayList);
            }
            this.f53664q = arrayList;
            this.f53663p = str3;
            this.f53665r = z12;
        }

        public static C0744a b() {
            return new C0744a();
        }

        public boolean c() {
            return this.f53662o;
        }

        public List d() {
            return this.f53664q;
        }

        public String e() {
            return this.f53663p;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (this.f53659d != bVar.f53659d || !hf.o.a(this.f53660e, bVar.f53660e) || !hf.o.a(this.f53661i, bVar.f53661i) || this.f53662o != bVar.f53662o || !hf.o.a(this.f53663p, bVar.f53663p) || !hf.o.a(this.f53664q, bVar.f53664q) || this.f53665r != bVar.f53665r) {
                return false;
            }
            return true;
        }

        public String f() {
            return this.f53661i;
        }

        public String h() {
            return this.f53660e;
        }

        public int hashCode() {
            return hf.o.b(Boolean.valueOf(this.f53659d), this.f53660e, this.f53661i, Boolean.valueOf(this.f53662o), this.f53663p, this.f53664q, Boolean.valueOf(this.f53665r));
        }

        public boolean i() {
            return this.f53659d;
        }

        public boolean j() {
            return this.f53665r;
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            int a10 = jf.c.a(parcel);
            jf.c.c(parcel, 1, i());
            jf.c.s(parcel, 2, h(), false);
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
        private final boolean f53673d;

        /* renamed from: e  reason: collision with root package name */
        private final String f53674e;

        /* renamed from: we.a$c$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0745a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f53675a = false;

            /* renamed from: b  reason: collision with root package name */
            private String f53676b;

            public c a() {
                return new c(this.f53675a, this.f53676b);
            }

            public C0745a b(String str) {
                this.f53676b = str;
                return this;
            }

            public C0745a c(boolean z10) {
                this.f53675a = z10;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public c(boolean z10, String str) {
            if (z10) {
                hf.q.l(str);
            }
            this.f53673d = z10;
            this.f53674e = str;
        }

        public static C0745a b() {
            return new C0745a();
        }

        public String c() {
            return this.f53674e;
        }

        public boolean d() {
            return this.f53673d;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (this.f53673d == cVar.f53673d && hf.o.a(this.f53674e, cVar.f53674e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return hf.o.b(Boolean.valueOf(this.f53673d), this.f53674e);
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
        private final boolean f53677d;

        /* renamed from: e  reason: collision with root package name */
        private final byte[] f53678e;

        /* renamed from: i  reason: collision with root package name */
        private final String f53679i;

        /* renamed from: we.a$d$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0746a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f53680a = false;

            /* renamed from: b  reason: collision with root package name */
            private byte[] f53681b;

            /* renamed from: c  reason: collision with root package name */
            private String f53682c;

            public d a() {
                return new d(this.f53680a, this.f53681b, this.f53682c);
            }

            public C0746a b(byte[] bArr) {
                this.f53681b = bArr;
                return this;
            }

            public C0746a c(String str) {
                this.f53682c = str;
                return this;
            }

            public C0746a d(boolean z10) {
                this.f53680a = z10;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public d(boolean z10, byte[] bArr, String str) {
            if (z10) {
                hf.q.l(bArr);
                hf.q.l(str);
            }
            this.f53677d = z10;
            this.f53678e = bArr;
            this.f53679i = str;
        }

        public static C0746a b() {
            return new C0746a();
        }

        public byte[] c() {
            return this.f53678e;
        }

        public String d() {
            return this.f53679i;
        }

        public boolean e() {
            return this.f53677d;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof d)) {
                return false;
            }
            d dVar = (d) obj;
            if (this.f53677d == dVar.f53677d && Arrays.equals(this.f53678e, dVar.f53678e) && Objects.equals(this.f53679i, dVar.f53679i)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (Objects.hash(Boolean.valueOf(this.f53677d), this.f53679i) * 31) + Arrays.hashCode(this.f53678e);
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
        private final boolean f53683d;

        /* renamed from: we.a$e$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0747a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f53684a = false;

            public e a() {
                return new e(this.f53684a);
            }

            public C0747a b(boolean z10) {
                this.f53684a = z10;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public e(boolean z10) {
            this.f53683d = z10;
        }

        public static C0747a b() {
            return new C0747a();
        }

        public boolean c() {
            return this.f53683d;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof e) || this.f53683d != ((e) obj).f53683d) {
                return false;
            }
            return true;
        }

        public int hashCode() {
            return hf.o.b(Boolean.valueOf(this.f53683d));
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
        this.f53643d = (e) hf.q.l(eVar);
        this.f53644e = (b) hf.q.l(bVar);
        this.f53645i = str;
        this.f53646o = z10;
        this.f53647p = i10;
        if (dVar == null) {
            d.C0746a b10 = d.b();
            b10.d(false);
            dVar = b10.a();
        }
        this.f53648q = dVar;
        if (cVar == null) {
            c.C0745a b11 = c.b();
            b11.c(false);
            cVar = b11.a();
        }
        this.f53649r = cVar;
        this.f53650s = z11;
    }

    public static C0743a b() {
        return new C0743a();
    }

    public static C0743a j(a aVar) {
        hf.q.l(aVar);
        C0743a b10 = b();
        b10.c(aVar.c());
        b10.f(aVar.f());
        b10.e(aVar.e());
        b10.d(aVar.d());
        b10.b(aVar.f53646o);
        b10.i(aVar.f53647p);
        b10.g(aVar.f53650s);
        String str = aVar.f53645i;
        if (str != null) {
            b10.h(str);
        }
        return b10;
    }

    public b c() {
        return this.f53644e;
    }

    public c d() {
        return this.f53649r;
    }

    public d e() {
        return this.f53648q;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (!hf.o.a(this.f53643d, aVar.f53643d) || !hf.o.a(this.f53644e, aVar.f53644e) || !hf.o.a(this.f53648q, aVar.f53648q) || !hf.o.a(this.f53649r, aVar.f53649r) || !hf.o.a(this.f53645i, aVar.f53645i) || this.f53646o != aVar.f53646o || this.f53647p != aVar.f53647p || this.f53650s != aVar.f53650s) {
            return false;
        }
        return true;
    }

    public e f() {
        return this.f53643d;
    }

    public boolean h() {
        return this.f53650s;
    }

    public int hashCode() {
        return hf.o.b(this.f53643d, this.f53644e, this.f53648q, this.f53649r, this.f53645i, Boolean.valueOf(this.f53646o), Integer.valueOf(this.f53647p), Boolean.valueOf(this.f53650s));
    }

    public boolean i() {
        return this.f53646o;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.q(parcel, 1, f(), i10, false);
        jf.c.q(parcel, 2, c(), i10, false);
        jf.c.s(parcel, 3, this.f53645i, false);
        jf.c.c(parcel, 4, i());
        jf.c.l(parcel, 5, this.f53647p);
        jf.c.q(parcel, 6, e(), i10, false);
        jf.c.q(parcel, 7, d(), i10, false);
        jf.c.c(parcel, 8, h());
        jf.c.b(parcel, a10);
    }
}
