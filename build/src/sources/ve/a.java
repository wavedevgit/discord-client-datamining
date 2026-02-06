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
    private final e f52568d;

    /* renamed from: e  reason: collision with root package name */
    private final b f52569e;

    /* renamed from: i  reason: collision with root package name */
    private final String f52570i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f52571o;

    /* renamed from: p  reason: collision with root package name */
    private final int f52572p;

    /* renamed from: q  reason: collision with root package name */
    private final d f52573q;

    /* renamed from: r  reason: collision with root package name */
    private final c f52574r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f52575s;

    /* renamed from: ve.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0690a {

        /* renamed from: a  reason: collision with root package name */
        private e f52576a;

        /* renamed from: b  reason: collision with root package name */
        private b f52577b;

        /* renamed from: c  reason: collision with root package name */
        private d f52578c;

        /* renamed from: d  reason: collision with root package name */
        private c f52579d;

        /* renamed from: e  reason: collision with root package name */
        private String f52580e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f52581f;

        /* renamed from: g  reason: collision with root package name */
        private int f52582g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f52583h;

        public C0690a() {
            e.C0694a b10 = e.b();
            b10.b(false);
            this.f52576a = b10.a();
            b.C0691a b11 = b.b();
            b11.b(false);
            this.f52577b = b11.a();
            d.C0693a b12 = d.b();
            b12.d(false);
            this.f52578c = b12.a();
            c.C0692a b13 = c.b();
            b13.c(false);
            this.f52579d = b13.a();
        }

        public a a() {
            return new a(this.f52576a, this.f52577b, this.f52580e, this.f52581f, this.f52582g, this.f52578c, this.f52579d, this.f52583h);
        }

        public C0690a b(boolean z10) {
            this.f52581f = z10;
            return this;
        }

        public C0690a c(b bVar) {
            this.f52577b = (b) gf.q.l(bVar);
            return this;
        }

        public C0690a d(c cVar) {
            this.f52579d = (c) gf.q.l(cVar);
            return this;
        }

        public C0690a e(d dVar) {
            this.f52578c = (d) gf.q.l(dVar);
            return this;
        }

        public C0690a f(e eVar) {
            this.f52576a = (e) gf.q.l(eVar);
            return this;
        }

        public C0690a g(boolean z10) {
            this.f52583h = z10;
            return this;
        }

        public final C0690a h(String str) {
            this.f52580e = str;
            return this;
        }

        public final C0690a i(int i10) {
            this.f52582g = i10;
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends hf.a {
        @NonNull
        public static final Parcelable.Creator<b> CREATOR = new o();

        /* renamed from: d  reason: collision with root package name */
        private final boolean f52584d;

        /* renamed from: e  reason: collision with root package name */
        private final String f52585e;

        /* renamed from: i  reason: collision with root package name */
        private final String f52586i;

        /* renamed from: o  reason: collision with root package name */
        private final boolean f52587o;

        /* renamed from: p  reason: collision with root package name */
        private final String f52588p;

        /* renamed from: q  reason: collision with root package name */
        private final List f52589q;

        /* renamed from: r  reason: collision with root package name */
        private final boolean f52590r;

        /* renamed from: ve.a$b$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0691a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f52591a = false;

            /* renamed from: b  reason: collision with root package name */
            private String f52592b = null;

            /* renamed from: c  reason: collision with root package name */
            private String f52593c = null;

            /* renamed from: d  reason: collision with root package name */
            private boolean f52594d = true;

            /* renamed from: e  reason: collision with root package name */
            private String f52595e = null;

            /* renamed from: f  reason: collision with root package name */
            private List f52596f = null;

            /* renamed from: g  reason: collision with root package name */
            private boolean f52597g = false;

            public b a() {
                return new b(this.f52591a, this.f52592b, this.f52593c, this.f52594d, this.f52595e, this.f52596f, this.f52597g);
            }

            public C0691a b(boolean z10) {
                this.f52591a = z10;
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
            this.f52584d = z10;
            if (z10) {
                gf.q.m(str, "serverClientId must be provided if Google ID tokens are requested");
            }
            this.f52585e = str;
            this.f52586i = str2;
            this.f52587o = z11;
            Parcelable.Creator<a> creator = a.CREATOR;
            ArrayList arrayList = null;
            if (list != null && !list.isEmpty()) {
                arrayList = new ArrayList(list);
                Collections.sort(arrayList);
            }
            this.f52589q = arrayList;
            this.f52588p = str3;
            this.f52590r = z12;
        }

        public static C0691a b() {
            return new C0691a();
        }

        public boolean c() {
            return this.f52587o;
        }

        public List d() {
            return this.f52589q;
        }

        public String e() {
            return this.f52588p;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof b)) {
                return false;
            }
            b bVar = (b) obj;
            if (this.f52584d != bVar.f52584d || !gf.o.a(this.f52585e, bVar.f52585e) || !gf.o.a(this.f52586i, bVar.f52586i) || this.f52587o != bVar.f52587o || !gf.o.a(this.f52588p, bVar.f52588p) || !gf.o.a(this.f52589q, bVar.f52589q) || this.f52590r != bVar.f52590r) {
                return false;
            }
            return true;
        }

        public String f() {
            return this.f52586i;
        }

        public String h() {
            return this.f52585e;
        }

        public int hashCode() {
            return gf.o.b(Boolean.valueOf(this.f52584d), this.f52585e, this.f52586i, Boolean.valueOf(this.f52587o), this.f52588p, this.f52589q, Boolean.valueOf(this.f52590r));
        }

        public boolean i() {
            return this.f52584d;
        }

        public boolean j() {
            return this.f52590r;
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
        private final boolean f52598d;

        /* renamed from: e  reason: collision with root package name */
        private final String f52599e;

        /* renamed from: ve.a$c$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0692a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f52600a = false;

            /* renamed from: b  reason: collision with root package name */
            private String f52601b;

            public c a() {
                return new c(this.f52600a, this.f52601b);
            }

            public C0692a b(String str) {
                this.f52601b = str;
                return this;
            }

            public C0692a c(boolean z10) {
                this.f52600a = z10;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public c(boolean z10, String str) {
            if (z10) {
                gf.q.l(str);
            }
            this.f52598d = z10;
            this.f52599e = str;
        }

        public static C0692a b() {
            return new C0692a();
        }

        public String c() {
            return this.f52599e;
        }

        public boolean d() {
            return this.f52598d;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof c)) {
                return false;
            }
            c cVar = (c) obj;
            if (this.f52598d == cVar.f52598d && gf.o.a(this.f52599e, cVar.f52599e)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return gf.o.b(Boolean.valueOf(this.f52598d), this.f52599e);
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
        private final boolean f52602d;

        /* renamed from: e  reason: collision with root package name */
        private final byte[] f52603e;

        /* renamed from: i  reason: collision with root package name */
        private final String f52604i;

        /* renamed from: ve.a$d$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0693a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f52605a = false;

            /* renamed from: b  reason: collision with root package name */
            private byte[] f52606b;

            /* renamed from: c  reason: collision with root package name */
            private String f52607c;

            public d a() {
                return new d(this.f52605a, this.f52606b, this.f52607c);
            }

            public C0693a b(byte[] bArr) {
                this.f52606b = bArr;
                return this;
            }

            public C0693a c(String str) {
                this.f52607c = str;
                return this;
            }

            public C0693a d(boolean z10) {
                this.f52605a = z10;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public d(boolean z10, byte[] bArr, String str) {
            if (z10) {
                gf.q.l(bArr);
                gf.q.l(str);
            }
            this.f52602d = z10;
            this.f52603e = bArr;
            this.f52604i = str;
        }

        public static C0693a b() {
            return new C0693a();
        }

        public byte[] c() {
            return this.f52603e;
        }

        public String d() {
            return this.f52604i;
        }

        public boolean e() {
            return this.f52602d;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof d)) {
                return false;
            }
            d dVar = (d) obj;
            if (this.f52602d == dVar.f52602d && Arrays.equals(this.f52603e, dVar.f52603e) && Objects.equals(this.f52604i, dVar.f52604i)) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (Objects.hash(Boolean.valueOf(this.f52602d), this.f52604i) * 31) + Arrays.hashCode(this.f52603e);
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
        private final boolean f52608d;

        /* renamed from: ve.a$e$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static final class C0694a {

            /* renamed from: a  reason: collision with root package name */
            private boolean f52609a = false;

            public e a() {
                return new e(this.f52609a);
            }

            public C0694a b(boolean z10) {
                this.f52609a = z10;
                return this;
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public e(boolean z10) {
            this.f52608d = z10;
        }

        public static C0694a b() {
            return new C0694a();
        }

        public boolean c() {
            return this.f52608d;
        }

        public boolean equals(Object obj) {
            if (!(obj instanceof e) || this.f52608d != ((e) obj).f52608d) {
                return false;
            }
            return true;
        }

        public int hashCode() {
            return gf.o.b(Boolean.valueOf(this.f52608d));
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
        this.f52568d = (e) gf.q.l(eVar);
        this.f52569e = (b) gf.q.l(bVar);
        this.f52570i = str;
        this.f52571o = z10;
        this.f52572p = i10;
        if (dVar == null) {
            d.C0693a b10 = d.b();
            b10.d(false);
            dVar = b10.a();
        }
        this.f52573q = dVar;
        if (cVar == null) {
            c.C0692a b11 = c.b();
            b11.c(false);
            cVar = b11.a();
        }
        this.f52574r = cVar;
        this.f52575s = z11;
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
        b10.b(aVar.f52571o);
        b10.i(aVar.f52572p);
        b10.g(aVar.f52575s);
        String str = aVar.f52570i;
        if (str != null) {
            b10.h(str);
        }
        return b10;
    }

    public b c() {
        return this.f52569e;
    }

    public c d() {
        return this.f52574r;
    }

    public d e() {
        return this.f52573q;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (!gf.o.a(this.f52568d, aVar.f52568d) || !gf.o.a(this.f52569e, aVar.f52569e) || !gf.o.a(this.f52573q, aVar.f52573q) || !gf.o.a(this.f52574r, aVar.f52574r) || !gf.o.a(this.f52570i, aVar.f52570i) || this.f52571o != aVar.f52571o || this.f52572p != aVar.f52572p || this.f52575s != aVar.f52575s) {
            return false;
        }
        return true;
    }

    public e f() {
        return this.f52568d;
    }

    public boolean h() {
        return this.f52575s;
    }

    public int hashCode() {
        return gf.o.b(this.f52568d, this.f52569e, this.f52573q, this.f52574r, this.f52570i, Boolean.valueOf(this.f52571o), Integer.valueOf(this.f52572p), Boolean.valueOf(this.f52575s));
    }

    public boolean i() {
        return this.f52571o;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.q(parcel, 1, f(), i10, false);
        hf.c.q(parcel, 2, c(), i10, false);
        hf.c.s(parcel, 3, this.f52570i, false);
        hf.c.c(parcel, 4, i());
        hf.c.l(parcel, 5, this.f52572p);
        hf.c.q(parcel, 6, e(), i10, false);
        hf.c.q(parcel, 7, d(), i10, false);
        hf.c.c(parcel, 8, h());
        hf.c.b(parcel, a10);
    }
}
