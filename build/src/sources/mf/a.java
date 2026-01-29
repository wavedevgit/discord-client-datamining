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
    private static final Comparator f38043p = new Comparator() { // from class: mf.c
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
    private final List f38044d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f38045e;

    /* renamed from: i  reason: collision with root package name */
    private final String f38046i;

    /* renamed from: o  reason: collision with root package name */
    private final String f38047o;

    public a(List list, boolean z10, String str, String str2) {
        q.l(list);
        this.f38044d = list;
        this.f38045e = z10;
        this.f38046i = str;
        this.f38047o = str2;
    }

    public static a b(lf.f fVar) {
        return d(fVar.a(), true);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static a d(List list, boolean z10) {
        TreeSet treeSet = new TreeSet(f38043p);
        Iterator it = list.iterator();
        while (it.hasNext()) {
            Collections.addAll(treeSet, ((ef.f) it.next()).a());
        }
        return new a(new ArrayList(treeSet), z10, null, null);
    }

    public List c() {
        return this.f38044d;
    }

    public final boolean equals(Object obj) {
        if (obj == null || !(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (this.f38045e != aVar.f38045e || !gf.o.a(this.f38044d, aVar.f38044d) || !gf.o.a(this.f38046i, aVar.f38046i) || !gf.o.a(this.f38047o, aVar.f38047o)) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return gf.o.b(Boolean.valueOf(this.f38045e), this.f38044d, this.f38046i, this.f38047o);
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.w(parcel, 1, c(), false);
        hf.c.c(parcel, 2, this.f38045e);
        hf.c.s(parcel, 3, this.f38046i, false);
        hf.c.s(parcel, 4, this.f38047o, false);
        hf.c.b(parcel, a10);
    }
}
