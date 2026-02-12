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
    private final e f52673d;

    /* renamed from: e  reason: collision with root package name */
    private final b f52674e;

    /* renamed from: i  reason: collision with root package name */
    private final String f52675i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f52676o;

    /* renamed from: p  reason: collision with root package name */
    private final int f52677p;

    /* renamed from: q  reason: collision with root package name */
    private final d f52678q;

    /* renamed from: r  reason: collision with root package name */
    private final c f52679r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f52680s;

    /* renamed from: we.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0732a {

        /* renamed from: a  reason: collision with root package name */
        private e f52681a;

        /* renamed from: b  reason: collision with root package name */
        private b f52682b;

        /* renamed from: c  reason: collision with root package name */
        private d f52683c;

        /* renamed from: d  reason: collision with root package name */
        private c f52684d;

        /* renamed from: e  reason: collision with root package name */
        private String f52685e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f52686f;

        /* renamed from: g  reason: collision with root package name */
        private int f52687g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f52688h;

        public C0732a() {
            e.C0736a b10 = e.b();
            b10.b(false);
            this.f52681a = b10.a();
            b.C0733a b11 = b.b();
            b11.b(false);
            this.f52682b = b11.a();
            d.C0735a b12 = d.b();
            b12.d(false);
            this.f52683c = b12.a();
            c.C0734a b13 = c.b();
            b13.c(false);
            this.f52684d = b13.a();
        }

        public a a() {
            return new a(this.f52681a, this.f52682b, this.f52685e, this.f52686f, this.f52687g, this.f52683c, this.f52684d, this.f52688h);
        }

        public C0732a b(boolean z10) {
            this.f52686f = z10;
            return this;
        }

        public C0732a c(b bVar) {
            this.f52682b = (b) hf.q.l(bVar);
            return this;
        }

        public C0732a d(c cVar) {
            this.f52684d = (c) hf.q.l(cVar);
            return this;
        }

        public C0732a e(d dVar) {
            this.f52683c = (d) hf.q.l(dVar);
            return this;
        }

        public C0732a f(e eVar) {
            this.f52681a = (e) hf.q.l(eVar);
            return this;
        }

        public C0732a g(boolean z10) {
            this.f52688h = z10;
            return this;
        }

        public final C0732a h(String str) {
            this.f52685e = str;
            return this;
        }

        public final C0732a i(int i10) {
            this.f52687g = i10;
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends jf.a {
        @NonNull
        public static final Parcelable.Creator<b> CREATOR = new o();

        /* renamed from: d  reason: collision with root package name */
        private final boolean f52689d;

        /* renamed from: e  reason: collision with root package name */
        private final String f52690e;

        /* renamed from: i  reason: collision with root package name */
        private final String f52691i;

        /* renamed from: o  reason: collision with root package name */
        private final boolean f52692o;

        /* renamed from: p  reason: collision with root package name */
        private final String f52693p;

        /* renamed from: q  reason: collision with root package name */
        private final List f52694q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f52695r;

        /* renamed from: we.a$b$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0733a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f52696a = false;

            /* renamed from: b  reason: collision with root package name */
            private String f52697b = null;

            /* renamed from: c  reason: collision with root package name */
            private String f52698c = null;

            /* renamed from: d  reason: collision with root package name */
            private boolean f52699d = true;

            /* renamed from: e  reason: collision with root package name */
            private String f52700e = null;

            /* renamed from: f  reason: collision with root package name */
            private List f52701f = null;

            /* renamed from: g  reason: collision with root package name */
            private boolean f52702g = false;

            public b a() {
                return new b(this.f52696a, this.f52697b, this.f52698c, this.f52699d, this.f52700e, this.f52701f, this.f52702g);
            }

            public C0733a b(boolean z10) {
                this.f52696a = z10;
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
            this.f52689d = z10;
            if (z10) {
                hf.q.m(str, "serverClientId must be provided if Google ID tokens are requested");
            }
            this.f52690e = str;
            this.f52691i = str2;
            this.f52692o = z11;
            Parcelable.Creator<a> creator = a.CREATOR;
            ArrayList arrayList = null;
            if (list != null && !list.isEmpty()) {
                arrayList = new ArrayList(list);
                Collections.sort(arrayList);
            }
            this.f52694q = arrayList;
            this.f52693p = str3;
            this.f52695r = z12;
        }

        public static C0733a b() {
            return new C0733a();
        }

        public boolean c() {
            return this.f52692o;
        }

        public List d() {
            return this.f52694q;
        }

        public String e() {
            return this.f52693p;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (this.f52689d != bVar.f52689d || !hf.o.a(this.f52690e, bVar.f52690e) || !hf.o.a(this.f52691i, bVar.f52691i) || this.f52692o != bVar.f52692o || !hf.o.a(this.f52693p, bVar.f52693p) || !hf.o.a(this.f52694q, bVar.f52694q) || this.f52695r != bVar.f52695r) {
                return false;
            }
            return true;
        }

        public String f() {
            return this.f52691i;
        }

        public String g() {
            return this.f52690e;
        }

        public int hashCode() {
            return hf.o.b(Boolean.valueOf(this.f52689d), this.f52690e, this.f52691i, Boolean.valueOf(this.f52692o), this.f52693p, this.f52694q, Boolean.valueOf(this.f52695r));
        }

        public boolean i() {
            return this.f52689d;
        }

        public boolean j() {
            return this.f52695r;
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
        private final boolean f52703d;

        /* renamed from: e  reason: collision with root package name */
        private final String f52704e;

        /* renamed from: we.a$c$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0734a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f52705a = false;

            /* renamed from: b  reason: collision with root package name */
            private String f52706b;

            public c a() {
                return new c(this.f52705a, this.f52706b);
            }

            public C0734a b(String str) {
                this.f52706b = str;
                return this;
            }

            public C0734a c(boolean z10) {
                this.f52705a = z10;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public c(boolean z10, String str) {
            if (z10) {
                hf.q.l(str);
            }
            this.f52703d = z10;
            this.f52704e = str;
        }

        public static C0734a b() {
            return new C0734a();
        }

        public String c() {
            return this.f52704e;
        }

        public boolean d() {
            return this.f52703d;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (this.f52703d == cVar.f52703d && hf.o.a(this.f52704e, cVar.f52704e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return hf.o.b(Boolean.valueOf(this.f52703d), this.f52704e);
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
        private final boolean f52707d;

        /* renamed from: e  reason: collision with root package name */
        private final byte[] f52708e;

        /* renamed from: i  reason: collision with root package name */
        private final String f52709i;

        /* renamed from: we.a$d$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0735a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f52710a = false;

            /* renamed from: b  reason: collision with root package name */
            private byte[] f52711b;

            /* renamed from: c  reason: collision with root package name */
            private String f52712c;

            public d a() {
                return new d(this.f52710a, this.f52711b, this.f52712c);
            }

            public C0735a b(byte[] bArr) {
                this.f52711b = bArr;
                return this;
            }

            public C0735a c(String str) {
                this.f52712c = str;
                return this;
            }

            public C0735a d(boolean z10) {
                this.f52710a = z10;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public d(boolean z10, byte[] bArr, String str) {
            if (z10) {
                hf.q.l(bArr);
                hf.q.l(str);
            }
            this.f52707d = z10;
            this.f52708e = bArr;
            this.f52709i = str;
        }

        public static C0735a b() {
            return new C0735a();
        }

        public byte[] c() {
            return this.f52708e;
        }

        public String d() {
            return this.f52709i;
        }

        public boolean e() {
            return this.f52707d;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof d)) {
                return false;
            }
            d dVar = (d) obj;
            if (this.f52707d == dVar.f52707d && Arrays.equals(this.f52708e, dVar.f52708e) && Objects.equals(this.f52709i, dVar.f52709i)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (Objects.hash(Boolean.valueOf(this.f52707d), this.f52709i) * 31) + Arrays.hashCode(this.f52708e);
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
        private final boolean f52713d;

        /* renamed from: we.a$e$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0736a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f52714a = false;

            public e a() {
                return new e(this.f52714a);
            }

            public C0736a b(boolean z10) {
                this.f52714a = z10;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public e(boolean z10) {
            this.f52713d = z10;
        }

        public static C0736a b() {
            return new C0736a();
        }

        public boolean c() {
            return this.f52713d;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof e) || this.f52713d != ((e) obj).f52713d) {
                return false;
            }
            return true;
        }

        public int hashCode() {
            return hf.o.b(Boolean.valueOf(this.f52713d));
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
        this.f52673d = (e) hf.q.l(eVar);
        this.f52674e = (b) hf.q.l(bVar);
        this.f52675i = str;
        this.f52676o = z10;
        this.f52677p = i10;
        if (dVar == null) {
            d.C0735a b10 = d.b();
            b10.d(false);
            dVar = b10.a();
        }
        this.f52678q = dVar;
        if (cVar == null) {
            c.C0734a b11 = c.b();
            b11.c(false);
            cVar = b11.a();
        }
        this.f52679r = cVar;
        this.f52680s = z11;
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
        b10.b(aVar.f52676o);
        b10.i(aVar.f52677p);
        b10.g(aVar.f52680s);
        String str = aVar.f52675i;
        if (str != null) {
            b10.h(str);
        }
        return b10;
    }

    public b c() {
        return this.f52674e;
    }

    public c d() {
        return this.f52679r;
    }

    public d e() {
        return this.f52678q;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (!hf.o.a(this.f52673d, aVar.f52673d) || !hf.o.a(this.f52674e, aVar.f52674e) || !hf.o.a(this.f52678q, aVar.f52678q) || !hf.o.a(this.f52679r, aVar.f52679r) || !hf.o.a(this.f52675i, aVar.f52675i) || this.f52676o != aVar.f52676o || this.f52677p != aVar.f52677p || this.f52680s != aVar.f52680s) {
            return false;
        }
        return true;
    }

    public e f() {
        return this.f52673d;
    }

    public boolean g() {
        return this.f52680s;
    }

    public int hashCode() {
        return hf.o.b(this.f52673d, this.f52674e, this.f52678q, this.f52679r, this.f52675i, Boolean.valueOf(this.f52676o), Integer.valueOf(this.f52677p), Boolean.valueOf(this.f52680s));
    }

    public boolean i() {
        return this.f52676o;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.q(parcel, 1, f(), i10, false);
        jf.c.q(parcel, 2, c(), i10, false);
        jf.c.s(parcel, 3, this.f52675i, false);
        jf.c.c(parcel, 4, i());
        jf.c.l(parcel, 5, this.f52677p);
        jf.c.q(parcel, 6, e(), i10, false);
        jf.c.q(parcel, 7, d(), i10, false);
        jf.c.c(parcel, 8, g());
        jf.c.b(parcel, a10);
    }
}
