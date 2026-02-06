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
    private static final Comparator f37080p = new Comparator() { // from class: mf.c
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
    private final List f37081d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f37082e;

    /* renamed from: i  reason: collision with root package name */
    private final String f37083i;

    /* renamed from: o  reason: collision with root package name */
    private final String f37084o;

    public a(List list, boolean z10, String str, String str2) {
        q.l(list);
        this.f37081d = list;
        this.f37082e = z10;
        this.f37083i = str;
        this.f37084o = str2;
    }

    public static a b(lf.f fVar) {
        return d(fVar.a(), true);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static a d(List list, boolean z10) {
        TreeSet treeSet = new TreeSet(f37080p);
        Iterator it = list.iterator();
        while (it.hasNext()) {
            Collections.addAll(treeSet, ((ef.f) it.next()).a());
        }
        return new a(new ArrayList(treeSet), z10, null, null);
    }

    public List c() {
        return this.f37081d;
    }

    public final boolean equals(Object obj) {
        if (obj == null || !(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (this.f37082e != aVar.f37082e || !gf.o.a(this.f37081d, aVar.f37081d) || !gf.o.a(this.f37083i, aVar.f37083i) || !gf.o.a(this.f37084o, aVar.f37084o)) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return gf.o.b(Boolean.valueOf(this.f37082e), this.f37081d, this.f37083i, this.f37084o);
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.w(parcel, 1, c(), false);
        hf.c.c(parcel, 2, this.f37082e);
        hf.c.s(parcel, 3, this.f37083i, false);
        hf.c.s(parcel, 4, this.f37084o, false);
        hf.c.b(parcel, a10);
    }
}
