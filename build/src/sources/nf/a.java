package nf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
import hf.q;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Iterator;
import java.util.List;
import java.util.TreeSet;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a extends jf.a {
    @NonNull
    public static final Parcelable.Creator<a> CREATOR = new d();

    /* renamed from: p  reason: collision with root package name */
    private static final Comparator f37818p = new Comparator() { // from class: nf.c
        @Override // java.util.Comparator
        public final int compare(Object obj, Object obj2) {
            com.google.android.gms.common.d dVar = (com.google.android.gms.common.d) obj;
            com.google.android.gms.common.d dVar2 = (com.google.android.gms.common.d) obj2;
            Parcelable.Creator<a> creator = a.CREATOR;
            if (!dVar.getName().equals(dVar2.getName())) {
                return dVar.getName().compareTo(dVar2.getName());
            }
            return (dVar.c() > dVar2.c() ? 1 : (dVar.c() == dVar2.c() ? 0 : -1));
        }
    };

    /* renamed from: d  reason: collision with root package name */
    private final List f37819d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f37820e;

    /* renamed from: i  reason: collision with root package name */
    private final String f37821i;

    /* renamed from: o  reason: collision with root package name */
    private final String f37822o;

    public a(List list, boolean z10, String str, String str2) {
        q.l(list);
        this.f37819d = list;
        this.f37820e = z10;
        this.f37821i = str;
        this.f37822o = str2;
    }

    public static a b(mf.f fVar) {
        return d(fVar.a(), true);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static a d(List list, boolean z10) {
        TreeSet treeSet = new TreeSet(f37818p);
        Iterator it = list.iterator();
        while (it.hasNext()) {
            Collections.addAll(treeSet, ((ff.f) it.next()).a());
        }
        return new a(new ArrayList(treeSet), z10, null, null);
    }

    public List c() {
        return this.f37819d;
    }

    public final boolean equals(Object obj) {
        if (obj == null || !(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (this.f37820e != aVar.f37820e || !hf.o.a(this.f37819d, aVar.f37819d) || !hf.o.a(this.f37821i, aVar.f37821i) || !hf.o.a(this.f37822o, aVar.f37822o)) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return hf.o.b(Boolean.valueOf(this.f37820e), this.f37819d, this.f37821i, this.f37822o);
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.w(parcel, 1, c(), false);
        jf.c.c(parcel, 2, this.f37820e);
        jf.c.s(parcel, 3, this.f37821i, false);
        jf.c.s(parcel, 4, this.f37822o, false);
        jf.c.b(parcel, a10);
    }
}
