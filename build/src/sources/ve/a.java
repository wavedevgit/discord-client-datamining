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
    private final e f52203d;

    /* renamed from: e  reason: collision with root package name */
    private final b f52204e;

    /* renamed from: i  reason: collision with root package name */
    private final String f52205i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f52206o;

    /* renamed from: p  reason: collision with root package name */
    private final int f52207p;

    /* renamed from: q  reason: collision with root package name */
    private final d f52208q;

    /* renamed from: r  reason: collision with root package name */
    private final c f52209r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f52210s;

    /* renamed from: ve.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0681a {

        /* renamed from: a  reason: collision with root package name */
        private e f52211a;

        /* renamed from: b  reason: collision with root package name */
        private b f52212b;

        /* renamed from: c  reason: collision with root package name */
        private d f52213c;

        /* renamed from: d  reason: collision with root package name */
        private c f52214d;

        /* renamed from: e  reason: collision with root package name */
        private String f52215e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f52216f;

        /* renamed from: g  reason: collision with root package name */
        private int f52217g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f52218h;

        public C0681a() {
            e.C0685a b10 = e.b();
            b10.b(false);
            this.f52211a = b10.a();
            b.C0682a b11 = b.b();
            b11.b(false);
            this.f52212b = b11.a();
            d.C0684a b12 = d.b();
            b12.d(false);
            this.f52213c = b12.a();
            c.C0683a b13 = c.b();
            b13.c(false);
            this.f52214d = b13.a();
        }

        public a a() {
            return new a(this.f52211a, this.f52212b, this.f52215e, this.f52216f, this.f52217g, this.f52213c, this.f52214d, this.f52218h);
        }

        public C0681a b(boolean z10) {
            this.f52216f = z10;
            return this;
        }

        public C0681a c(b bVar) {
            this.f52212b = (b) gf.q.l(bVar);
            return this;
        }

        public C0681a d(c cVar) {
            this.f52214d = (c) gf.q.l(cVar);
            return this;
        }

        public C0681a e(d dVar) {
            this.f52213c = (d) gf.q.l(dVar);
            return this;
        }

        public C0681a f(e eVar) {
            this.f52211a = (e) gf.q.l(eVar);
            return this;
        }

        public C0681a g(boolean z10) {
            this.f52218h = z10;
            return this;
        }

        public final C0681a h(String str) {
            this.f52215e = str;
            return this;
        }

        public final C0681a i(int i10) {
            this.f52217g = i10;
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends hf.a {
        @NonNull
        public static final Parcelable.Creator<b> CREATOR = new o();

        /* renamed from: d  reason: collision with root package name */
        private final boolean f52219d;

        /* renamed from: e  reason: collision with root package name */
        private final String f52220e;

        /* renamed from: i  reason: collision with root package name */
        private final String f52221i;

        /* renamed from: o  reason: collision with root package name */
        private final boolean f52222o;

        /* renamed from: p  reason: collision with root package name */
        private final String f52223p;

        /* renamed from: q  reason: collision with root package name */
        private final List f52224q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f52225r;

        /* renamed from: ve.a$b$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0682a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f52226a = false;

            /* renamed from: b  reason: collision with root package name */
            private String f52227b = null;

            /* renamed from: c  reason: collision with root package name */
            private String f52228c = null;

            /* renamed from: d  reason: collision with root package name */
            private boolean f52229d = true;

            /* renamed from: e  reason: collision with root package name */
            private String f52230e = null;

            /* renamed from: f  reason: collision with root package name */
            private List f52231f = null;

            /* renamed from: g  reason: collision with root package name */
            private boolean f52232g = false;

            public b a() {
                return new b(this.f52226a, this.f52227b, this.f52228c, this.f52229d, this.f52230e, this.f52231f, this.f52232g);
            }

            public C0682a b(boolean z10) {
                this.f52226a = z10;
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
            this.f52219d = z10;
            if (z10) {
                gf.q.m(str, "serverClientId must be provided if Google ID tokens are requested");
            }
            this.f52220e = str;
            this.f52221i = str2;
            this.f52222o = z11;
            Parcelable.Creator<a> creator = a.CREATOR;
            ArrayList arrayList = null;
            if (list != null && !list.isEmpty()) {
                arrayList = new ArrayList(list);
                Collections.sort(arrayList);
            }
            this.f52224q = arrayList;
            this.f52223p = str3;
            this.f52225r = z12;
        }

        public static C0682a b() {
            return new C0682a();
        }

        public boolean c() {
            return this.f52222o;
        }

        public List d() {
            return this.f52224q;
        }

        public String e() {
            return this.f52223p;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (this.f52219d != bVar.f52219d || !gf.o.a(this.f52220e, bVar.f52220e) || !gf.o.a(this.f52221i, bVar.f52221i) || this.f52222o != bVar.f52222o || !gf.o.a(this.f52223p, bVar.f52223p) || !gf.o.a(this.f52224q, bVar.f52224q) || this.f52225r != bVar.f52225r) {
                return false;
            }
            return true;
        }

        public String f() {
            return this.f52221i;
        }

        public String g() {
            return this.f52220e;
        }

        public int hashCode() {
            return gf.o.b(Boolean.valueOf(this.f52219d), this.f52220e, this.f52221i, Boolean.valueOf(this.f52222o), this.f52223p, this.f52224q, Boolean.valueOf(this.f52225r));
        }

        public boolean i() {
            return this.f52219d;
        }

        public boolean j() {
            return this.f52225r;
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
        private final boolean f52233d;

        /* renamed from: e  reason: collision with root package name */
        private final String f52234e;

        /* renamed from: ve.a$c$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0683a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f52235a = false;

            /* renamed from: b  reason: collision with root package name */
            private String f52236b;

            public c a() {
                return new c(this.f52235a, this.f52236b);
            }

            public C0683a b(String str) {
                this.f52236b = str;
                return this;
            }

            public C0683a c(boolean z10) {
                this.f52235a = z10;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public c(boolean z10, String str) {
            if (z10) {
                gf.q.l(str);
            }
            this.f52233d = z10;
            this.f52234e = str;
        }

        public static C0683a b() {
            return new C0683a();
        }

        public String c() {
            return this.f52234e;
        }

        public boolean d() {
            return this.f52233d;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (this.f52233d == cVar.f52233d && gf.o.a(this.f52234e, cVar.f52234e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return gf.o.b(Boolean.valueOf(this.f52233d), this.f52234e);
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
        private final boolean f52237d;

        /* renamed from: e  reason: collision with root package name */
        private final byte[] f52238e;

        /* renamed from: i  reason: collision with root package name */
        private final String f52239i;

        /* renamed from: ve.a$d$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0684a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f52240a = false;

            /* renamed from: b  reason: collision with root package name */
            private byte[] f52241b;

            /* renamed from: c  reason: collision with root package name */
            private String f52242c;

            public d a() {
                return new d(this.f52240a, this.f52241b, this.f52242c);
            }

            public C0684a b(byte[] bArr) {
                this.f52241b = bArr;
                return this;
            }

            public C0684a c(String str) {
                this.f52242c = str;
                return this;
            }

            public C0684a d(boolean z10) {
                this.f52240a = z10;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public d(boolean z10, byte[] bArr, String str) {
            if (z10) {
                gf.q.l(bArr);
                gf.q.l(str);
            }
            this.f52237d = z10;
            this.f52238e = bArr;
            this.f52239i = str;
        }

        public static C0684a b() {
            return new C0684a();
        }

        public byte[] c() {
            return this.f52238e;
        }

        public String d() {
            return this.f52239i;
        }

        public boolean e() {
            return this.f52237d;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof d)) {
                return false;
            }
            d dVar = (d) obj;
            if (this.f52237d == dVar.f52237d && Arrays.equals(this.f52238e, dVar.f52238e) && Objects.equals(this.f52239i, dVar.f52239i)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (Objects.hash(Boolean.valueOf(this.f52237d), this.f52239i) * 31) + Arrays.hashCode(this.f52238e);
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
        private final boolean f52243d;

        /* renamed from: ve.a$e$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0685a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f52244a = false;

            public e a() {
                return new e(this.f52244a);
            }

            public C0685a b(boolean z10) {
                this.f52244a = z10;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public e(boolean z10) {
            this.f52243d = z10;
        }

        public static C0685a b() {
            return new C0685a();
        }

        public boolean c() {
            return this.f52243d;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof e) || this.f52243d != ((e) obj).f52243d) {
                return false;
            }
            return true;
        }

        public int hashCode() {
            return gf.o.b(Boolean.valueOf(this.f52243d));
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
        this.f52203d = (e) gf.q.l(eVar);
        this.f52204e = (b) gf.q.l(bVar);
        this.f52205i = str;
        this.f52206o = z10;
        this.f52207p = i10;
        if (dVar == null) {
            d.C0684a b10 = d.b();
            b10.d(false);
            dVar = b10.a();
        }
        this.f52208q = dVar;
        if (cVar == null) {
            c.C0683a b11 = c.b();
            b11.c(false);
            cVar = b11.a();
        }
        this.f52209r = cVar;
        this.f52210s = z11;
    }

    public static C0681a b() {
        return new C0681a();
    }

    public static C0681a j(a aVar) {
        gf.q.l(aVar);
        C0681a b10 = b();
        b10.c(aVar.c());
        b10.f(aVar.f());
        b10.e(aVar.e());
        b10.d(aVar.d());
        b10.b(aVar.f52206o);
        b10.i(aVar.f52207p);
        b10.g(aVar.f52210s);
        String str = aVar.f52205i;
        if (str != null) {
            b10.h(str);
        }
        return b10;
    }

    public b c() {
        return this.f52204e;
    }

    public c d() {
        return this.f52209r;
    }

    public d e() {
        return this.f52208q;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (!gf.o.a(this.f52203d, aVar.f52203d) || !gf.o.a(this.f52204e, aVar.f52204e) || !gf.o.a(this.f52208q, aVar.f52208q) || !gf.o.a(this.f52209r, aVar.f52209r) || !gf.o.a(this.f52205i, aVar.f52205i) || this.f52206o != aVar.f52206o || this.f52207p != aVar.f52207p || this.f52210s != aVar.f52210s) {
            return false;
        }
        return true;
    }

    public e f() {
        return this.f52203d;
    }

    public boolean g() {
        return this.f52210s;
    }

    public int hashCode() {
        return gf.o.b(this.f52203d, this.f52204e, this.f52208q, this.f52209r, this.f52205i, Boolean.valueOf(this.f52206o), Integer.valueOf(this.f52207p), Boolean.valueOf(this.f52210s));
    }

    public boolean i() {
        return this.f52206o;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.q(parcel, 1, f(), i10, false);
        hf.c.q(parcel, 2, c(), i10, false);
        hf.c.s(parcel, 3, this.f52205i, false);
        hf.c.c(parcel, 4, i());
        hf.c.l(parcel, 5, this.f52207p);
        hf.c.q(parcel, 6, e(), i10, false);
        hf.c.q(parcel, 7, d(), i10, false);
        hf.c.c(parcel, 8, g());
        hf.c.b(parcel, a10);
    }
}
