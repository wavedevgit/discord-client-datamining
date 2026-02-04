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
    private final e f51514d;

    /* renamed from: e  reason: collision with root package name */
    private final b f51515e;

    /* renamed from: i  reason: collision with root package name */
    private final String f51516i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f51517o;

    /* renamed from: p  reason: collision with root package name */
    private final int f51518p;

    /* renamed from: q  reason: collision with root package name */
    private final d f51519q;

    /* renamed from: r  reason: collision with root package name */
    private final c f51520r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f51521s;

    /* renamed from: ve.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0677a {

        /* renamed from: a  reason: collision with root package name */
        private e f51522a;

        /* renamed from: b  reason: collision with root package name */
        private b f51523b;

        /* renamed from: c  reason: collision with root package name */
        private d f51524c;

        /* renamed from: d  reason: collision with root package name */
        private c f51525d;

        /* renamed from: e  reason: collision with root package name */
        private String f51526e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f51527f;

        /* renamed from: g  reason: collision with root package name */
        private int f51528g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f51529h;

        public C0677a() {
            e.C0681a b10 = e.b();
            b10.b(false);
            this.f51522a = b10.a();
            b.C0678a b11 = b.b();
            b11.b(false);
            this.f51523b = b11.a();
            d.C0680a b12 = d.b();
            b12.d(false);
            this.f51524c = b12.a();
            c.C0679a b13 = c.b();
            b13.c(false);
            this.f51525d = b13.a();
        }

        public a a() {
            return new a(this.f51522a, this.f51523b, this.f51526e, this.f51527f, this.f51528g, this.f51524c, this.f51525d, this.f51529h);
        }

        public C0677a b(boolean z10) {
            this.f51527f = z10;
            return this;
        }

        public C0677a c(b bVar) {
            this.f51523b = (b) gf.q.l(bVar);
            return this;
        }

        public C0677a d(c cVar) {
            this.f51525d = (c) gf.q.l(cVar);
            return this;
        }

        public C0677a e(d dVar) {
            this.f51524c = (d) gf.q.l(dVar);
            return this;
        }

        public C0677a f(e eVar) {
            this.f51522a = (e) gf.q.l(eVar);
            return this;
        }

        public C0677a g(boolean z10) {
            this.f51529h = z10;
            return this;
        }

        public final C0677a h(String str) {
            this.f51526e = str;
            return this;
        }

        public final C0677a i(int i10) {
            this.f51528g = i10;
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends hf.a {
        @NonNull
        public static final Parcelable.Creator<b> CREATOR = new o();

        /* renamed from: d  reason: collision with root package name */
        private final boolean f51530d;

        /* renamed from: e  reason: collision with root package name */
        private final String f51531e;

        /* renamed from: i  reason: collision with root package name */
        private final String f51532i;

        /* renamed from: o  reason: collision with root package name */
        private final boolean f51533o;

        /* renamed from: p  reason: collision with root package name */
        private final String f51534p;

        /* renamed from: q  reason: collision with root package name */
        private final List f51535q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f51536r;

        /* renamed from: ve.a$b$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0678a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f51537a = false;

            /* renamed from: b  reason: collision with root package name */
            private String f51538b = null;

            /* renamed from: c  reason: collision with root package name */
            private String f51539c = null;

            /* renamed from: d  reason: collision with root package name */
            private boolean f51540d = true;

            /* renamed from: e  reason: collision with root package name */
            private String f51541e = null;

            /* renamed from: f  reason: collision with root package name */
            private List f51542f = null;

            /* renamed from: g  reason: collision with root package name */
            private boolean f51543g = false;

            public b a() {
                return new b(this.f51537a, this.f51538b, this.f51539c, this.f51540d, this.f51541e, this.f51542f, this.f51543g);
            }

            public C0678a b(boolean z10) {
                this.f51537a = z10;
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
            this.f51530d = z10;
            if (z10) {
                gf.q.m(str, "serverClientId must be provided if Google ID tokens are requested");
            }
            this.f51531e = str;
            this.f51532i = str2;
            this.f51533o = z11;
            Parcelable.Creator<a> creator = a.CREATOR;
            ArrayList arrayList = null;
            if (list != null && !list.isEmpty()) {
                arrayList = new ArrayList(list);
                Collections.sort(arrayList);
            }
            this.f51535q = arrayList;
            this.f51534p = str3;
            this.f51536r = z12;
        }

        public static C0678a b() {
            return new C0678a();
        }

        public boolean c() {
            return this.f51533o;
        }

        public List d() {
            return this.f51535q;
        }

        public String e() {
            return this.f51534p;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (this.f51530d != bVar.f51530d || !gf.o.a(this.f51531e, bVar.f51531e) || !gf.o.a(this.f51532i, bVar.f51532i) || this.f51533o != bVar.f51533o || !gf.o.a(this.f51534p, bVar.f51534p) || !gf.o.a(this.f51535q, bVar.f51535q) || this.f51536r != bVar.f51536r) {
                return false;
            }
            return true;
        }

        public String f() {
            return this.f51532i;
        }

        public String g() {
            return this.f51531e;
        }

        public int hashCode() {
            return gf.o.b(Boolean.valueOf(this.f51530d), this.f51531e, this.f51532i, Boolean.valueOf(this.f51533o), this.f51534p, this.f51535q, Boolean.valueOf(this.f51536r));
        }

        public boolean i() {
            return this.f51530d;
        }

        public boolean j() {
            return this.f51536r;
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
        private final boolean f51544d;

        /* renamed from: e  reason: collision with root package name */
        private final String f51545e;

        /* renamed from: ve.a$c$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0679a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f51546a = false;

            /* renamed from: b  reason: collision with root package name */
            private String f51547b;

            public c a() {
                return new c(this.f51546a, this.f51547b);
            }

            public C0679a b(String str) {
                this.f51547b = str;
                return this;
            }

            public C0679a c(boolean z10) {
                this.f51546a = z10;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public c(boolean z10, String str) {
            if (z10) {
                gf.q.l(str);
            }
            this.f51544d = z10;
            this.f51545e = str;
        }

        public static C0679a b() {
            return new C0679a();
        }

        public String c() {
            return this.f51545e;
        }

        public boolean d() {
            return this.f51544d;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (this.f51544d == cVar.f51544d && gf.o.a(this.f51545e, cVar.f51545e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return gf.o.b(Boolean.valueOf(this.f51544d), this.f51545e);
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
        private final boolean f51548d;

        /* renamed from: e  reason: collision with root package name */
        private final byte[] f51549e;

        /* renamed from: i  reason: collision with root package name */
        private final String f51550i;

        /* renamed from: ve.a$d$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0680a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f51551a = false;

            /* renamed from: b  reason: collision with root package name */
            private byte[] f51552b;

            /* renamed from: c  reason: collision with root package name */
            private String f51553c;

            public d a() {
                return new d(this.f51551a, this.f51552b, this.f51553c);
            }

            public C0680a b(byte[] bArr) {
                this.f51552b = bArr;
                return this;
            }

            public C0680a c(String str) {
                this.f51553c = str;
                return this;
            }

            public C0680a d(boolean z10) {
                this.f51551a = z10;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public d(boolean z10, byte[] bArr, String str) {
            if (z10) {
                gf.q.l(bArr);
                gf.q.l(str);
            }
            this.f51548d = z10;
            this.f51549e = bArr;
            this.f51550i = str;
        }

        public static C0680a b() {
            return new C0680a();
        }

        public byte[] c() {
            return this.f51549e;
        }

        public String d() {
            return this.f51550i;
        }

        public boolean e() {
            return this.f51548d;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof d)) {
                return false;
            }
            d dVar = (d) obj;
            if (this.f51548d == dVar.f51548d && Arrays.equals(this.f51549e, dVar.f51549e) && Objects.equals(this.f51550i, dVar.f51550i)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (Objects.hash(Boolean.valueOf(this.f51548d), this.f51550i) * 31) + Arrays.hashCode(this.f51549e);
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
        private final boolean f51554d;

        /* renamed from: ve.a$e$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0681a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f51555a = false;

            public e a() {
                return new e(this.f51555a);
            }

            public C0681a b(boolean z10) {
                this.f51555a = z10;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public e(boolean z10) {
            this.f51554d = z10;
        }

        public static C0681a b() {
            return new C0681a();
        }

        public boolean c() {
            return this.f51554d;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof e) || this.f51554d != ((e) obj).f51554d) {
                return false;
            }
            return true;
        }

        public int hashCode() {
            return gf.o.b(Boolean.valueOf(this.f51554d));
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
        this.f51514d = (e) gf.q.l(eVar);
        this.f51515e = (b) gf.q.l(bVar);
        this.f51516i = str;
        this.f51517o = z10;
        this.f51518p = i10;
        if (dVar == null) {
            d.C0680a b10 = d.b();
            b10.d(false);
            dVar = b10.a();
        }
        this.f51519q = dVar;
        if (cVar == null) {
            c.C0679a b11 = c.b();
            b11.c(false);
            cVar = b11.a();
        }
        this.f51520r = cVar;
        this.f51521s = z11;
    }

    public static C0677a b() {
        return new C0677a();
    }

    public static C0677a j(a aVar) {
        gf.q.l(aVar);
        C0677a b10 = b();
        b10.c(aVar.c());
        b10.f(aVar.f());
        b10.e(aVar.e());
        b10.d(aVar.d());
        b10.b(aVar.f51517o);
        b10.i(aVar.f51518p);
        b10.g(aVar.f51521s);
        String str = aVar.f51516i;
        if (str != null) {
            b10.h(str);
        }
        return b10;
    }

    public b c() {
        return this.f51515e;
    }

    public c d() {
        return this.f51520r;
    }

    public d e() {
        return this.f51519q;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (!gf.o.a(this.f51514d, aVar.f51514d) || !gf.o.a(this.f51515e, aVar.f51515e) || !gf.o.a(this.f51519q, aVar.f51519q) || !gf.o.a(this.f51520r, aVar.f51520r) || !gf.o.a(this.f51516i, aVar.f51516i) || this.f51517o != aVar.f51517o || this.f51518p != aVar.f51518p || this.f51521s != aVar.f51521s) {
            return false;
        }
        return true;
    }

    public e f() {
        return this.f51514d;
    }

    public boolean g() {
        return this.f51521s;
    }

    public int hashCode() {
        return gf.o.b(this.f51514d, this.f51515e, this.f51519q, this.f51520r, this.f51516i, Boolean.valueOf(this.f51517o), Integer.valueOf(this.f51518p), Boolean.valueOf(this.f51521s));
    }

    public boolean i() {
        return this.f51517o;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.q(parcel, 1, f(), i10, false);
        hf.c.q(parcel, 2, c(), i10, false);
        hf.c.s(parcel, 3, this.f51516i, false);
        hf.c.c(parcel, 4, i());
        hf.c.l(parcel, 5, this.f51518p);
        hf.c.q(parcel, 6, e(), i10, false);
        hf.c.q(parcel, 7, d(), i10, false);
        hf.c.c(parcel, 8, g());
        hf.c.b(parcel, a10);
    }
}
