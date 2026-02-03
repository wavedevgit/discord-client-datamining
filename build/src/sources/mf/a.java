package mf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import gf.q;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Iterator;
import java.util.List;
import java.util.TreeSet;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a extends hf.a {
    @NonNull
    public static final Parcelable.Creator<a> CREATOR = new d();

    /* renamed from: p  reason: collision with root package name */
    private static final Comparator f38039p = new Comparator() { // from class: mf.c
        @Override // java.util.Comparator
        public final int compare(Object obj, Object obj2) {
            com.google.android.gms.common.d dVar = (com.google.android.gms.common.d) obj;
            com.google.android.gms.common.d dVar2 = (com.google.android.gms.common.d) obj2;
            Parcelable.Creator<a> creator = a.CREATOR;
            if (!dVar.getName().equals(dVar2.getName())) {
                return dVar.getName().compareTo(dVar2.getName());
            }
            return (dVar.b() > dVar2.b() ? 1 : (dVar.b() == dVar2.b() ? 0 : -1));
        }
    };

    /* renamed from: d  reason: collision with root package name */
    private final List f38040d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f38041e;

    /* renamed from: i  reason: collision with root package name */
    private final String f38042i;

    /* renamed from: o  reason: collision with root package name */
    private final String f38043o;

    public a(List list, boolean z10, String str, String str2) {
        q.l(list);
        this.f38040d = list;
        this.f38041e = z10;
        this.f38042i = str;
        this.f38043o = str2;
    }

    public static a b(lf.f fVar) {
        return d(fVar.a(), true);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static a d(List list, boolean z10) {
        TreeSet treeSet = new TreeSet(f38039p);
        Iterator it = list.iterator();
        while (it.hasNext()) {
            Collections.addAll(treeSet, ((ef.f) it.next()).a());
        }
        return new a(new ArrayList(treeSet), z10, null, null);
    }

    public List c() {
        return this.f38040d;
    }

    public final boolean equals(Object obj) {
        if (obj == null || !(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (this.f38041e != aVar.f38041e || !gf.o.a(this.f38040d, aVar.f38040d) || !gf.o.a(this.f38042i, aVar.f38042i) || !gf.o.a(this.f38043o, aVar.f38043o)) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return gf.o.b(Boolean.valueOf(this.f38041e), this.f38040d, this.f38042i, this.f38043o);
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.w(parcel, 1, c(), false);
        hf.c.c(parcel, 2, this.f38041e);
        hf.c.s(parcel, 3, this.f38042i, false);
        hf.c.s(parcel, 4, this.f38043o, false);
        hf.c.b(parcel, a10);
    }
}
