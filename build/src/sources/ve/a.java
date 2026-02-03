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
    private final e f51517d;

    /* renamed from: e  reason: collision with root package name */
    private final b f51518e;

    /* renamed from: i  reason: collision with root package name */
    private final String f51519i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f51520o;

    /* renamed from: p  reason: collision with root package name */
    private final int f51521p;

    /* renamed from: q  reason: collision with root package name */
    private final d f51522q;

    /* renamed from: r  reason: collision with root package name */
    private final c f51523r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f51524s;

    /* renamed from: ve.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0677a {

        /* renamed from: a  reason: collision with root package name */
        private e f51525a;

        /* renamed from: b  reason: collision with root package name */
        private b f51526b;

        /* renamed from: c  reason: collision with root package name */
        private d f51527c;

        /* renamed from: d  reason: collision with root package name */
        private c f51528d;

        /* renamed from: e  reason: collision with root package name */
        private String f51529e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f51530f;

        /* renamed from: g  reason: collision with root package name */
        private int f51531g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f51532h;

        public C0677a() {
            e.C0681a b10 = e.b();
            b10.b(false);
            this.f51525a = b10.a();
            b.C0678a b11 = b.b();
            b11.b(false);
            this.f51526b = b11.a();
            d.C0680a b12 = d.b();
            b12.d(false);
            this.f51527c = b12.a();
            c.C0679a b13 = c.b();
            b13.c(false);
            this.f51528d = b13.a();
        }

        public a a() {
            return new a(this.f51525a, this.f51526b, this.f51529e, this.f51530f, this.f51531g, this.f51527c, this.f51528d, this.f51532h);
        }

        public C0677a b(boolean z10) {
            this.f51530f = z10;
            return this;
        }

        public C0677a c(b bVar) {
            this.f51526b = (b) gf.q.l(bVar);
            return this;
        }

        public C0677a d(c cVar) {
            this.f51528d = (c) gf.q.l(cVar);
            return this;
        }

        public C0677a e(d dVar) {
            this.f51527c = (d) gf.q.l(dVar);
            return this;
        }

        public C0677a f(e eVar) {
            this.f51525a = (e) gf.q.l(eVar);
            return this;
        }

        public C0677a g(boolean z10) {
            this.f51532h = z10;
            return this;
        }

        public final C0677a h(String str) {
            this.f51529e = str;
            return this;
        }

        public final C0677a i(int i10) {
            this.f51531g = i10;
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends hf.a {
        @NonNull
        public static final Parcelable.Creator<b> CREATOR = new o();

        /* renamed from: d  reason: collision with root package name */
        private final boolean f51533d;

        /* renamed from: e  reason: collision with root package name */
        private final String f51534e;

        /* renamed from: i  reason: collision with root package name */
        private final String f51535i;

        /* renamed from: o  reason: collision with root package name */
        private final boolean f51536o;

        /* renamed from: p  reason: collision with root package name */
        private final String f51537p;

        /* renamed from: q  reason: collision with root package name */
        private final List f51538q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f51539r;

        /* renamed from: ve.a$b$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0678a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f51540a = false;

            /* renamed from: b  reason: collision with root package name */
            private String f51541b = null;

            /* renamed from: c  reason: collision with root package name */
            private String f51542c = null;

            /* renamed from: d  reason: collision with root package name */
            private boolean f51543d = true;

            /* renamed from: e  reason: collision with root package name */
            private String f51544e = null;

            /* renamed from: f  reason: collision with root package name */
            private List f51545f = null;

            /* renamed from: g  reason: collision with root package name */
            private boolean f51546g = false;

            public b a() {
                return new b(this.f51540a, this.f51541b, this.f51542c, this.f51543d, this.f51544e, this.f51545f, this.f51546g);
            }

            public C0678a b(boolean z10) {
                this.f51540a = z10;
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
            this.f51533d = z10;
            if (z10) {
                gf.q.m(str, "serverClientId must be provided if Google ID tokens are requested");
            }
            this.f51534e = str;
            this.f51535i = str2;
            this.f51536o = z11;
            Parcelable.Creator<a> creator = a.CREATOR;
            ArrayList arrayList = null;
            if (list != null && !list.isEmpty()) {
                arrayList = new ArrayList(list);
                Collections.sort(arrayList);
            }
            this.f51538q = arrayList;
            this.f51537p = str3;
            this.f51539r = z12;
        }

        public static C0678a b() {
            return new C0678a();
        }

        public boolean c() {
            return this.f51536o;
        }

        public List d() {
            return this.f51538q;
        }

        public String e() {
            return this.f51537p;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (this.f51533d != bVar.f51533d || !gf.o.a(this.f51534e, bVar.f51534e) || !gf.o.a(this.f51535i, bVar.f51535i) || this.f51536o != bVar.f51536o || !gf.o.a(this.f51537p, bVar.f51537p) || !gf.o.a(this.f51538q, bVar.f51538q) || this.f51539r != bVar.f51539r) {
                return false;
            }
            return true;
        }

        public String f() {
            return this.f51535i;
        }

        public String g() {
            return this.f51534e;
        }

        public int hashCode() {
            return gf.o.b(Boolean.valueOf(this.f51533d), this.f51534e, this.f51535i, Boolean.valueOf(this.f51536o), this.f51537p, this.f51538q, Boolean.valueOf(this.f51539r));
        }

        public boolean i() {
            return this.f51533d;
        }

        public boolean j() {
            return this.f51539r;
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
        private final boolean f51547d;

        /* renamed from: e  reason: collision with root package name */
        private final String f51548e;

        /* renamed from: ve.a$c$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0679a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f51549a = false;

            /* renamed from: b  reason: collision with root package name */
            private String f51550b;

            public c a() {
                return new c(this.f51549a, this.f51550b);
            }

            public C0679a b(String str) {
                this.f51550b = str;
                return this;
            }

            public C0679a c(boolean z10) {
                this.f51549a = z10;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public c(boolean z10, String str) {
            if (z10) {
                gf.q.l(str);
            }
            this.f51547d = z10;
            this.f51548e = str;
        }

        public static C0679a b() {
            return new C0679a();
        }

        public String c() {
            return this.f51548e;
        }

        public boolean d() {
            return this.f51547d;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (this.f51547d == cVar.f51547d && gf.o.a(this.f51548e, cVar.f51548e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return gf.o.b(Boolean.valueOf(this.f51547d), this.f51548e);
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
        private final boolean f51551d;

        /* renamed from: e  reason: collision with root package name */
        private final byte[] f51552e;

        /* renamed from: i  reason: collision with root package name */
        private final String f51553i;

        /* renamed from: ve.a$d$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0680a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f51554a = false;

            /* renamed from: b  reason: collision with root package name */
            private byte[] f51555b;

            /* renamed from: c  reason: collision with root package name */
            private String f51556c;

            public d a() {
                return new d(this.f51554a, this.f51555b, this.f51556c);
            }

            public C0680a b(byte[] bArr) {
                this.f51555b = bArr;
                return this;
            }

            public C0680a c(String str) {
                this.f51556c = str;
                return this;
            }

            public C0680a d(boolean z10) {
                this.f51554a = z10;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public d(boolean z10, byte[] bArr, String str) {
            if (z10) {
                gf.q.l(bArr);
                gf.q.l(str);
            }
            this.f51551d = z10;
            this.f51552e = bArr;
            this.f51553i = str;
        }

        public static C0680a b() {
            return new C0680a();
        }

        public byte[] c() {
            return this.f51552e;
        }

        public String d() {
            return this.f51553i;
        }

        public boolean e() {
            return this.f51551d;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof d)) {
                return false;
            }
            d dVar = (d) obj;
            if (this.f51551d == dVar.f51551d && Arrays.equals(this.f51552e, dVar.f51552e) && Objects.equals(this.f51553i, dVar.f51553i)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (Objects.hash(Boolean.valueOf(this.f51551d), this.f51553i) * 31) + Arrays.hashCode(this.f51552e);
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
        private final boolean f51557d;

        /* renamed from: ve.a$e$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0681a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f51558a = false;

            public e a() {
                return new e(this.f51558a);
            }

            public C0681a b(boolean z10) {
                this.f51558a = z10;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public e(boolean z10) {
            this.f51557d = z10;
        }

        public static C0681a b() {
            return new C0681a();
        }

        public boolean c() {
            return this.f51557d;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof e) || this.f51557d != ((e) obj).f51557d) {
                return false;
            }
            return true;
        }

        public int hashCode() {
            return gf.o.b(Boolean.valueOf(this.f51557d));
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
        this.f51517d = (e) gf.q.l(eVar);
        this.f51518e = (b) gf.q.l(bVar);
        this.f51519i = str;
        this.f51520o = z10;
        this.f51521p = i10;
        if (dVar == null) {
            d.C0680a b10 = d.b();
            b10.d(false);
            dVar = b10.a();
        }
        this.f51522q = dVar;
        if (cVar == null) {
            c.C0679a b11 = c.b();
            b11.c(false);
            cVar = b11.a();
        }
        this.f51523r = cVar;
        this.f51524s = z11;
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
        b10.b(aVar.f51520o);
        b10.i(aVar.f51521p);
        b10.g(aVar.f51524s);
        String str = aVar.f51519i;
        if (str != null) {
            b10.h(str);
        }
        return b10;
    }

    public b c() {
        return this.f51518e;
    }

    public c d() {
        return this.f51523r;
    }

    public d e() {
        return this.f51522q;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (!gf.o.a(this.f51517d, aVar.f51517d) || !gf.o.a(this.f51518e, aVar.f51518e) || !gf.o.a(this.f51522q, aVar.f51522q) || !gf.o.a(this.f51523r, aVar.f51523r) || !gf.o.a(this.f51519i, aVar.f51519i) || this.f51520o != aVar.f51520o || this.f51521p != aVar.f51521p || this.f51524s != aVar.f51524s) {
            return false;
        }
        return true;
    }

    public e f() {
        return this.f51517d;
    }

    public boolean g() {
        return this.f51524s;
    }

    public int hashCode() {
        return gf.o.b(this.f51517d, this.f51518e, this.f51522q, this.f51523r, this.f51519i, Boolean.valueOf(this.f51520o), Integer.valueOf(this.f51521p), Boolean.valueOf(this.f51524s));
    }

    public boolean i() {
        return this.f51520o;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.q(parcel, 1, f(), i10, false);
        hf.c.q(parcel, 2, c(), i10, false);
        hf.c.s(parcel, 3, this.f51519i, false);
        hf.c.c(parcel, 4, i());
        hf.c.l(parcel, 5, this.f51521p);
        hf.c.q(parcel, 6, e(), i10, false);
        hf.c.q(parcel, 7, d(), i10, false);
        hf.c.c(parcel, 8, g());
        hf.c.b(parcel, a10);
    }
}
