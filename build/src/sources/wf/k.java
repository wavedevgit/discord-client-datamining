package wf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class k implements Parcelable {
    @NonNull
    public static final Parcelable.Creator<k> CREATOR = new q1();

    /* renamed from: d  reason: collision with root package name */
    private final wf.a f52283d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a extends Exception {
        public a(int i10) {
            super("Algorithm with COSE value " + i10 + " not supported");
        }
    }

    k(wf.a aVar) {
        this.f52283d = (wf.a) gf.q.l(aVar);
    }

    /* JADX WARN: Multi-variable type inference failed */
    public static k a(int i10) {
        l[] values;
        x xVar;
        if (i10 == x.LEGACY_RS1.a()) {
            xVar = x.RS1;
        } else {
            x[] values2 = x.values();
            int length = values2.length;
            int i11 = 0;
            while (true) {
                if (i11 < length) {
                    x xVar2 = values2[i11];
                    if (xVar2.a() == i10) {
                        xVar = xVar2;
                        break;
                    }
                    i11++;
                } else {
                    for (x xVar3 : l.values()) {
                        if (xVar3.a() == i10) {
                            xVar = xVar3;
                        }
                    }
                    throw new a(i10);
                }
            }
        }
        return new k(xVar);
    }

    public int b() {
        return this.f52283d.a();
    }

    @Override // android.os.Parcelable
    public int describeContents() {
        return 0;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof k) || this.f52283d.a() != ((k) obj).f52283d.a()) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return gf.o.b(this.f52283d);
    }

    public final String toString() {
        String valueOf = String.valueOf(this.f52283d);
        return "COSEAlgorithmIdentifier{algorithm=" + valueOf + "}";
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        parcel.writeInt(this.f52283d.a());
    }
}
