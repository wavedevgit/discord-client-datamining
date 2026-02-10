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
    private final e f52672d;

    /* renamed from: e  reason: collision with root package name */
    private final b f52673e;

    /* renamed from: i  reason: collision with root package name */
    private final String f52674i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f52675o;

    /* renamed from: p  reason: collision with root package name */
    private final int f52676p;

    /* renamed from: q  reason: collision with root package name */
    private final d f52677q;

    /* renamed from: r  reason: collision with root package name */
    private final c f52678r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f52679s;

    /* renamed from: we.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0732a {

        /* renamed from: a  reason: collision with root package name */
        private e f52680a;

        /* renamed from: b  reason: collision with root package name */
        private b f52681b;

        /* renamed from: c  reason: collision with root package name */
        private d f52682c;

        /* renamed from: d  reason: collision with root package name */
        private c f52683d;

        /* renamed from: e  reason: collision with root package name */
        private String f52684e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f52685f;

        /* renamed from: g  reason: collision with root package name */
        private int f52686g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f52687h;

        public C0732a() {
            e.C0736a b10 = e.b();
            b10.b(false);
            this.f52680a = b10.a();
            b.C0733a b11 = b.b();
            b11.b(false);
            this.f52681b = b11.a();
            d.C0735a b12 = d.b();
            b12.d(false);
            this.f52682c = b12.a();
            c.C0734a b13 = c.b();
            b13.c(false);
            this.f52683d = b13.a();
        }

        public a a() {
            return new a(this.f52680a, this.f52681b, this.f52684e, this.f52685f, this.f52686g, this.f52682c, this.f52683d, this.f52687h);
        }

        public C0732a b(boolean z10) {
            this.f52685f = z10;
            return this;
        }

        public C0732a c(b bVar) {
            this.f52681b = (b) hf.q.l(bVar);
            return this;
        }

        public C0732a d(c cVar) {
            this.f52683d = (c) hf.q.l(cVar);
            return this;
        }

        public C0732a e(d dVar) {
            this.f52682c = (d) hf.q.l(dVar);
            return this;
        }

        public C0732a f(e eVar) {
            this.f52680a = (e) hf.q.l(eVar);
            return this;
        }

        public C0732a g(boolean z10) {
            this.f52687h = z10;
            return this;
        }

        public final C0732a h(String str) {
            this.f52684e = str;
            return this;
        }

        public final C0732a i(int i10) {
            this.f52686g = i10;
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends jf.a {
        @NonNull
        public static final Parcelable.Creator<b> CREATOR = new o();

        /* renamed from: d  reason: collision with root package name */
        private final boolean f52688d;

        /* renamed from: e  reason: collision with root package name */
        private final String f52689e;

        /* renamed from: i  reason: collision with root package name */
        private final String f52690i;

        /* renamed from: o  reason: collision with root package name */
        private final boolean f52691o;

        /* renamed from: p  reason: collision with root package name */
        private final String f52692p;

        /* renamed from: q  reason: collision with root package name */
        private final List f52693q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f52694r;

        /* renamed from: we.a$b$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0733a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f52695a = false;

            /* renamed from: b  reason: collision with root package name */
            private String f52696b = null;

            /* renamed from: c  reason: collision with root package name */
            private String f52697c = null;

            /* renamed from: d  reason: collision with root package name */
            private boolean f52698d = true;

            /* renamed from: e  reason: collision with root package name */
            private String f52699e = null;

            /* renamed from: f  reason: collision with root package name */
            private List f52700f = null;

            /* renamed from: g  reason: collision with root package name */
            private boolean f52701g = false;

            public b a() {
                return new b(this.f52695a, this.f52696b, this.f52697c, this.f52698d, this.f52699e, this.f52700f, this.f52701g);
            }

            public C0733a b(boolean z10) {
                this.f52695a = z10;
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
            this.f52688d = z10;
            if (z10) {
                hf.q.m(str, "serverClientId must be provided if Google ID tokens are requested");
            }
            this.f52689e = str;
            this.f52690i = str2;
            this.f52691o = z11;
            Parcelable.Creator<a> creator = a.CREATOR;
            ArrayList arrayList = null;
            if (list != null && !list.isEmpty()) {
                arrayList = new ArrayList(list);
                Collections.sort(arrayList);
            }
            this.f52693q = arrayList;
            this.f52692p = str3;
            this.f52694r = z12;
        }

        public static C0733a b() {
            return new C0733a();
        }

        public boolean c() {
            return this.f52691o;
        }

        public List d() {
            return this.f52693q;
        }

        public String e() {
            return this.f52692p;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (this.f52688d != bVar.f52688d || !hf.o.a(this.f52689e, bVar.f52689e) || !hf.o.a(this.f52690i, bVar.f52690i) || this.f52691o != bVar.f52691o || !hf.o.a(this.f52692p, bVar.f52692p) || !hf.o.a(this.f52693q, bVar.f52693q) || this.f52694r != bVar.f52694r) {
                return false;
            }
            return true;
        }

        public String f() {
            return this.f52690i;
        }

        public String g() {
            return this.f52689e;
        }

        public int hashCode() {
            return hf.o.b(Boolean.valueOf(this.f52688d), this.f52689e, this.f52690i, Boolean.valueOf(this.f52691o), this.f52692p, this.f52693q, Boolean.valueOf(this.f52694r));
        }

        public boolean i() {
            return this.f52688d;
        }

        public boolean j() {
            return this.f52694r;
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
        private final boolean f52702d;

        /* renamed from: e  reason: collision with root package name */
        private final String f52703e;

        /* renamed from: we.a$c$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0734a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f52704a = false;

            /* renamed from: b  reason: collision with root package name */
            private String f52705b;

            public c a() {
                return new c(this.f52704a, this.f52705b);
            }

            public C0734a b(String str) {
                this.f52705b = str;
                return this;
            }

            public C0734a c(boolean z10) {
                this.f52704a = z10;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public c(boolean z10, String str) {
            if (z10) {
                hf.q.l(str);
            }
            this.f52702d = z10;
            this.f52703e = str;
        }

        public static C0734a b() {
            return new C0734a();
        }

        public String c() {
            return this.f52703e;
        }

        public boolean d() {
            return this.f52702d;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (this.f52702d == cVar.f52702d && hf.o.a(this.f52703e, cVar.f52703e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return hf.o.b(Boolean.valueOf(this.f52702d), this.f52703e);
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
        private final boolean f52706d;

        /* renamed from: e  reason: collision with root package name */
        private final byte[] f52707e;

        /* renamed from: i  reason: collision with root package name */
        private final String f52708i;

        /* renamed from: we.a$d$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0735a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f52709a = false;

            /* renamed from: b  reason: collision with root package name */
            private byte[] f52710b;

            /* renamed from: c  reason: collision with root package name */
            private String f52711c;

            public d a() {
                return new d(this.f52709a, this.f52710b, this.f52711c);
            }

            public C0735a b(byte[] bArr) {
                this.f52710b = bArr;
                return this;
            }

            public C0735a c(String str) {
                this.f52711c = str;
                return this;
            }

            public C0735a d(boolean z10) {
                this.f52709a = z10;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public d(boolean z10, byte[] bArr, String str) {
            if (z10) {
                hf.q.l(bArr);
                hf.q.l(str);
            }
            this.f52706d = z10;
            this.f52707e = bArr;
            this.f52708i = str;
        }

        public static C0735a b() {
            return new C0735a();
        }

        public byte[] c() {
            return this.f52707e;
        }

        public String d() {
            return this.f52708i;
        }

        public boolean e() {
            return this.f52706d;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof d)) {
                return false;
            }
            d dVar = (d) obj;
            if (this.f52706d == dVar.f52706d && Arrays.equals(this.f52707e, dVar.f52707e) && Objects.equals(this.f52708i, dVar.f52708i)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (Objects.hash(Boolean.valueOf(this.f52706d), this.f52708i) * 31) + Arrays.hashCode(this.f52707e);
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
        private final boolean f52712d;

        /* renamed from: we.a$e$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0736a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f52713a = false;

            public e a() {
                return new e(this.f52713a);
            }

            public C0736a b(boolean z10) {
                this.f52713a = z10;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public e(boolean z10) {
            this.f52712d = z10;
        }

        public static C0736a b() {
            return new C0736a();
        }

        public boolean c() {
            return this.f52712d;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof e) || this.f52712d != ((e) obj).f52712d) {
                return false;
            }
            return true;
        }

        public int hashCode() {
            return hf.o.b(Boolean.valueOf(this.f52712d));
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
        this.f52672d = (e) hf.q.l(eVar);
        this.f52673e = (b) hf.q.l(bVar);
        this.f52674i = str;
        this.f52675o = z10;
        this.f52676p = i10;
        if (dVar == null) {
            d.C0735a b10 = d.b();
            b10.d(false);
            dVar = b10.a();
        }
        this.f52677q = dVar;
        if (cVar == null) {
            c.C0734a b11 = c.b();
            b11.c(false);
            cVar = b11.a();
        }
        this.f52678r = cVar;
        this.f52679s = z11;
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
        b10.b(aVar.f52675o);
        b10.i(aVar.f52676p);
        b10.g(aVar.f52679s);
        String str = aVar.f52674i;
        if (str != null) {
            b10.h(str);
        }
        return b10;
    }

    public b c() {
        return this.f52673e;
    }

    public c d() {
        return this.f52678r;
    }

    public d e() {
        return this.f52677q;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (!hf.o.a(this.f52672d, aVar.f52672d) || !hf.o.a(this.f52673e, aVar.f52673e) || !hf.o.a(this.f52677q, aVar.f52677q) || !hf.o.a(this.f52678r, aVar.f52678r) || !hf.o.a(this.f52674i, aVar.f52674i) || this.f52675o != aVar.f52675o || this.f52676p != aVar.f52676p || this.f52679s != aVar.f52679s) {
            return false;
        }
        return true;
    }

    public e f() {
        return this.f52672d;
    }

    public boolean g() {
        return this.f52679s;
    }

    public int hashCode() {
        return hf.o.b(this.f52672d, this.f52673e, this.f52677q, this.f52678r, this.f52674i, Boolean.valueOf(this.f52675o), Integer.valueOf(this.f52676p), Boolean.valueOf(this.f52679s));
    }

    public boolean i() {
        return this.f52675o;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.q(parcel, 1, f(), i10, false);
        jf.c.q(parcel, 2, c(), i10, false);
        jf.c.s(parcel, 3, this.f52674i, false);
        jf.c.c(parcel, 4, i());
        jf.c.l(parcel, 5, this.f52676p);
        jf.c.q(parcel, 6, e(), i10, false);
        jf.c.q(parcel, 7, d(), i10, false);
        jf.c.c(parcel, 8, g());
        jf.c.b(parcel, a10);
    }
}
