package qd;

import android.os.Bundle;
import com.google.android.exoplayer2.g;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w0 implements com.google.android.exoplayer2.g {

    /* renamed from: o  reason: collision with root package name */
    public static final w0 f47372o = new w0(new u0[0]);

    /* renamed from: p  reason: collision with root package name */
    private static final String f47373p = ne.w0.B0(0);

    /* renamed from: q  reason: collision with root package name */
    public static final g.a f47374q = new g.a() { // from class: qd.v0
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return w0.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final int f47375d;

    /* renamed from: e  reason: collision with root package name */
    private final ji.s f47376e;

    /* renamed from: i  reason: collision with root package name */
    private int f47377i;

    public w0(u0... u0VarArr) {
        this.f47376e = ji.s.n(u0VarArr);
        this.f47375d = u0VarArr.length;
        d();
    }

    public static /* synthetic */ w0 a(Bundle bundle) {
        ArrayList parcelableArrayList = bundle.getParcelableArrayList(f47373p);
        if (parcelableArrayList == null) {
            return new w0(new u0[0]);
        }
        return new w0((u0[]) ne.d.d(u0.f47358s, parcelableArrayList).toArray(new u0[0]));
    }

    private void d() {
        int i10 = 0;
        while (i10 < this.f47376e.size()) {
            int i11 = i10 + 1;
            for (int i12 = i11; i12 < this.f47376e.size(); i12++) {
                if (((u0) this.f47376e.get(i10)).equals(this.f47376e.get(i12))) {
                    ne.y.d("TrackGroupArray", "", new IllegalArgumentException("Multiple identical TrackGroups added to one TrackGroupArray."));
                }
            }
            i10 = i11;
        }
    }

    public u0 b(int i10) {
        return (u0) this.f47376e.get(i10);
    }

    public int c(u0 u0Var) {
        int indexOf = this.f47376e.indexOf(u0Var);
        if (indexOf >= 0) {
            return indexOf;
        }
        return -1;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && w0.class == obj.getClass()) {
            w0 w0Var = (w0) obj;
            if (this.f47375d == w0Var.f47375d && this.f47376e.equals(w0Var.f47376e)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        if (this.f47377i == 0) {
            this.f47377i = this.f47376e.hashCode();
        }
        return this.f47377i;
    }
}
