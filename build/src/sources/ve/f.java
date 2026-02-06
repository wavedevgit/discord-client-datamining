package ve;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f extends hf.a {
    @NonNull
    public static final Parcelable.Creator<f> CREATOR = new s();

    /* renamed from: d  reason: collision with root package name */
    private final j f52623d;

    /* renamed from: e  reason: collision with root package name */
    private final String f52624e;

    /* renamed from: i  reason: collision with root package name */
    private final int f52625i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private j f52626a;

        /* renamed from: b  reason: collision with root package name */
        private String f52627b;

        /* renamed from: c  reason: collision with root package name */
        private int f52628c;

        public f a() {
            return new f(this.f52626a, this.f52627b, this.f52628c);
        }

        public a b(j jVar) {
            this.f52626a = jVar;
            return this;
        }

        public final a c(String str) {
            this.f52627b = str;
            return this;
        }

        public final a d(int i10) {
            this.f52628c = i10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(j jVar, String str, int i10) {
        this.f52623d = (j) gf.q.l(jVar);
        this.f52624e = str;
        this.f52625i = i10;
    }

    public static a b() {
        return new a();
    }

    public static a d(f fVar) {
        gf.q.l(fVar);
        a b10 = b();
        b10.b(fVar.c());
        b10.d(fVar.f52625i);
        String str = fVar.f52624e;
        if (str != null) {
            b10.c(str);
        }
        return b10;
    }

    public j c() {
        return this.f52623d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof f)) {
            return false;
        }
        f fVar = (f) obj;
        if (!gf.o.a(this.f52623d, fVar.f52623d) || !gf.o.a(this.f52624e, fVar.f52624e) || this.f52625i != fVar.f52625i) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return gf.o.b(this.f52623d, this.f52624e);
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.q(parcel, 1, c(), i10, false);
        hf.c.s(parcel, 2, this.f52624e, false);
        hf.c.l(parcel, 3, this.f52625i);
        hf.c.b(parcel, a10);
    }
}
